/**
 * Sockets de NR Rada Consultora de Calidad.
 *
 * Dos usos:
 * 1) Sala "admin": recibe en vivo el evento "nuevo_lead" cuando alguien
 *    completa el formulario de contacto (ver routes/leads.js).
 * 2) Chat en vivo simple: un visitante escribe una consulta rápida y
 *    queda registrada en el servidor (y visible para la sala admin),
 *    sin depender de un formulario.
 */
module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(`[socket] Cliente conectado: ${socket.id}`);

    // El panel interno (a futuro) se identifica así para recibir notificaciones
    socket.on('join_admin', () => {
      socket.join('admin');
      console.log(`[socket] ${socket.id} se unió a la sala admin`);
    });

    // Mensaje del widget de chat en la landing
    socket.on('chat_mensaje', (payload) => {
      const mensaje = {
        id: socket.id,
        texto: (payload && payload.texto) || '',
        nombre: (payload && payload.nombre) || 'Visitante',
        hora: new Date().toISOString(),
      };
      console.log('[socket] Nuevo mensaje de chat:', mensaje);

      // Lo reenvía a la sala admin para que quien atienda lo vea en vivo
      io.to('admin').emit('chat_mensaje_recibido', mensaje);

      // Confirmación al visitante de que el mensaje llegó
      socket.emit('chat_mensaje_ack', { ok: true });
    });

    socket.on('disconnect', () => {
      console.log(`[socket] Cliente desconectado: ${socket.id}`);
    });
  });
};
