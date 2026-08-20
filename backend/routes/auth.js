const express = require('express');
const passport = require('passport');

const router = express.Router();

// Inicia el flujo de login con Google
router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Callback al que Google redirige después del login
router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: `${process.env.FRONTEND_URL}/?login=error`,
  }),
  (req, res) => {
    res.redirect(`${process.env.FRONTEND_URL}/?login=ok`);
  }
);

// Devuelve el usuario logueado actual (o null)
router.get('/me', (req, res) => {
  res.json({ user: req.user || null });
});

// Cierra sesión
router.post('/logout', (req, res) => {
  req.logout(() => {
    res.json({ ok: true });
  });
});

module.exports = router;
