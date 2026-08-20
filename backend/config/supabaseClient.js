const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.warn(
    '[supabaseClient] Faltan SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY en el .env. ' +
    'El servidor va a arrancar igual, pero las rutas que usan la base de datos van a fallar.'
  );
}

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
