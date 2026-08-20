const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const supabase = require('./supabaseClient');

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const googleUser = {
          google_id: profile.id,
          nombre: profile.displayName,
          email: profile.emails && profile.emails[0] ? profile.emails[0].value : null,
          avatar_url: profile.photos && profile.photos[0] ? profile.photos[0].value : null,
        };

        // Guarda o actualiza el usuario en Supabase (tabla "usuarios")
        // Requiere que la tabla exista - ver README para el SQL de creación.
        const { data, error } = await supabase
          .from('usuarios')
          .upsert(googleUser, { onConflict: 'google_id' })
          .select()
          .single();

        if (error) {
          console.error('[passport] Error guardando usuario en Supabase:', error.message);
          // No cortamos el login por un error de DB: seguimos con el perfil de Google.
          return done(null, googleUser);
        }

        return done(null, data);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);

module.exports = passport;
