const express = require('express');
const supabase = require('../config/supabaseClient');

module.exports = (io) => {
  const router = express.Router();

  // Crea una nueva consulta (lead) desde el formulario de contacto
  router.post('/', async (req, res) => {
    try {
      const { nombre, empresa, cargo, email, telefono, intereses, mensaje } = req.body;

      if (!nombre || !email || !mensaje) {
        return res.status(400).json({
          ok: false,
          error: 'Nombre, email y mensaje son obligatorios.',
        });
      }

      const nuevoLead = {
        nombre,
        empresa: empresa || null,
        cargo: cargo || null,
        email,
        telefono: telefono || null,
        intereses: Array.isArray(intereses) ? intereses : [],
        mensaje,
        creado_en: new Date().toISOString(),
      };

      const { data, error } = await supabase
        .from('leads')
        .insert(nuevoLead)
        .select()
        .single();

      if (error) {
        console.error('[leads] Error insertando en Supabase:', error.message);
        return res.status(500).json({ ok: false, error: 'No se pudo guardar la consulta.' });
      }

      // Notifica en tiempo real a quien esté conectado al panel (sala "admin")
      io.to('admin').emit('nuevo_lead', data);

      return res.status(201).json({ ok: true, lead: data });
    } catch (err) {
      console.error('[leads] Error inesperado:', err);
      return res.status(500).json({ ok: false, error: 'Error interno del servidor.' });
    }
  });

  // Lista las consultas recibidas (pensado para un futuro panel privado)
  router.get('/', async (req, res) => {
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .order('creado_en', { ascending: false });

    if (error) {
      return res.status(500).json({ ok: false, error: error.message });
    }
    res.json({ ok: true, leads: data });
  });

  return router;
};
