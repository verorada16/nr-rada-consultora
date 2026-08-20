const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function enviarMailNuevoLead(lead) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.warn('[mailer] Faltan EMAIL_USER o EMAIL_PASS en el .env, no se envía el mail del lead.');
    return;
  }

  const destino = process.env.EMAIL_TO || process.env.EMAIL_USER;
  const interesesTexto =
    Array.isArray(lead.intereses) && lead.intereses.length ? lead.intereses.join(', ') : '-';

  await transporter.sendMail({
    from: `"Formulario NR Rada" <${process.env.EMAIL_USER}>`,
    to: destino,
    replyTo: lead.email,
    subject: `Nueva consulta de ${lead.nombre} - NR Rada`,
    text:
      `Nombre: ${lead.nombre}\n` +
      `Empresa: ${lead.empresa || '-'}\n` +
      `Cargo: ${lead.cargo || '-'}\n` +
      `Email: ${lead.email}\n` +
      `Teléfono: ${lead.telefono || '-'}\n` +
      `Servicios de interés: ${interesesTexto}\n\n` +
      `Mensaje:\n${lead.mensaje}`,
    html:
      `<h2>Nueva consulta desde el formulario de contacto</h2>` +
      `<p><strong>Nombre:</strong> ${lead.nombre}</p>` +
      `<p><strong>Empresa:</strong> ${lead.empresa || '-'}</p>` +
      `<p><strong>Cargo:</strong> ${lead.cargo || '-'}</p>` +
      `<p><strong>Email:</strong> ${lead.email}</p>` +
      `<p><strong>Teléfono:</strong> ${lead.telefono || '-'}</p>` +
      `<p><strong>Servicios de interés:</strong> ${interesesTexto}</p>` +
      `<p><strong>Mensaje:</strong><br>${String(lead.mensaje).replace(/\n/g, '<br>')}</p>`,
  });
}

module.exports = { enviarMailNuevoLead };