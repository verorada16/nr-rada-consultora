<template>
  <div class="contacto-view">
  <header class="contacto-hero">
      <div class="container">
        <span class="badge-gold">CONTACTO</span>
        <h1 class="hero-title">Hablemos sobre tu proyecto</h1>
        <p class="hero-subtitle">
          ¿Necesitás ordenar tus procesos, fortalecer tu sistema de calidad, prepararte para una auditoría o capacitar a tu equipo?
        </p>
        <p class="hero-desc">
          Contame brevemente qué situación estás atravesando y qué necesitás resolver. A partir de la información que me brindes, coordinaremos una primera conversación técnica para comprender el alcance y definir la mejor forma de trabajar.
        </p>
      </div>
    </header>

    <main class="contacto-main">
      <div class="container">
        <div class="contacto-grid">
          
          <section class="form-wrapper">
            <div class="card-header">
              <span class="section-label">SOLICITUD DE REUNIÓN</span>
              <h2 class="card-title">Solicitar una consulta</h2>
              <p class="card-desc">Completá el formulario para evaluar tus requerimientos.</p>
            </div>

            <form class="contact-form" @submit.prevent="enviarConsulta">
              <div class="form-row">
                <div class="form-group">
                  <label for="nombre">Nombre y apellido *</label>
                  <input 
                    id="nombre"
                    v-model="form.nombre" 
                    type="text" 
                    placeholder="Ej. Lic. Martín González" 
                    required 
                  />
                </div>

                <div class="form-group">
                  <label for="empresa">Empresa / Organización *</label>
                  <input 
                    id="empresa"
                    v-model="form.empresa" 
                    type="text" 
                    placeholder="Ej. Laboratorios Pharma S.A." 
                    required 
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="cargo">Cargo / Rol</label>
                  <input 
                    id="cargo"
                    v-model="form.cargo" 
                    type="text" 
                    placeholder="Ej. Director Técnico / Resp. Garantía" 
                  />
                </div>

                <div class="form-group">
                  <label for="email">Correo electrónico profesional *</label>
                  <input 
                    id="email"
                    v-model="form.email" 
                    type="email" 
                    placeholder="nombre@empresa.com" 
                    required 
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group full-width">
                  <label for="telefono">Teléfono / WhatsApp</label>
                  <input 
                    id="telefono"
                    v-model="form.telefono" 
                    type="tel" 
                    placeholder="+54 9 11 0000-0000" 
                  />
                </div>
              </div>

              <div class="form-group full-width">
                <label for="servicio">¿Qué servicio estás buscando? *</label>
                <select id="servicio" v-model="form.servicio" required>
                  <option value="" disabled selected>Seleccioná el servicio que más se acerque a tu necesidad</option>
                  <optgroup label="Gestión de Calidad & Procesos">
                    <option value="Diagnóstico de calidad y procesos">Diagnóstico de calidad y procesos</option>
                    <option value="Desarrollo de procedimientos y documentación">Desarrollo de procedimientos y documentación</option>
                    <option value="Implementación de sistemas de gestión">Implementación de sistemas de gestión</option>
                    <option value="ISO 9001:2015">ISO 9001:2015</option>
                    <option value="Mantenimiento de sistemas de calidad">Mantenimiento de sistemas de calidad (Outsourcing)</option>
                  </optgroup>
                  <optgroup label="Auditorías & Regulación">
                    <option value="Auditorías internas">Auditorías internas</option>
                    <option value="Preparación para auditorías">Preparación para auditorías</option>
                    <option value="Preparación y acompañamiento regulatorio">Preparación y acompañamiento regulatorio (ANMAT / SENASA)</option>
                  </optgroup>
                  <optgroup label="Capacitación Analítica & Laboratorio">
                    <option value="Capacitación en HPLC">Capacitación en HPLC</option>
                    <option value="Capacitación en Cromatografía Gaseosa (GC)">Capacitación en Cromatografía Gaseosa (GC)</option>
                    <option value="Capacitación en UV-Visible">Capacitación en UV-Visible</option>
                    <option value="Capacitación en IR / FTIR">Capacitación en IR / FTIR</option>
                    <option value="Capacitación en Karl Fischer">Capacitación en Karl Fischer</option>
                  </optgroup>
                  <optgroup label="Sector Cosmético">
                    <option value="Desarrollo y profesionalización de productos cosméticos">Desarrollo y profesionalización de productos cosméticos</option>
                    <option value="Buenas prácticas para cosmética">Buenas prácticas para cosmética</option>
                  </optgroup>
                  <option value="Otro">Otro requerimiento específico</option>
                </select>
              </div>

              <div class="form-group full-width">
                <label for="mensaje">Contame brevemente sobre tu necesidad *</label>
                <textarea 
                  id="mensaje"
                  v-model="form.mensaje" 
                  rows="4" 
                  placeholder="Detallá el estado actual de tu proyecto, auditoría próxima o desafío técnico..."
                  required
                ></textarea>
              </div>

              <button type="submit" class="btn-gold-submit" :disabled="enviando">
                <span>{{ enviando ? 'ENVIANDO CONSULTA...' : 'ENVIAR CONSULTA' }}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>

              <p v-if="enviadoExito" class="form-success-msg">
                ✓ Tu consulta fue enviada con éxito. En breve nos pondremos en contacto.
              </p>

              <p v-if="errorMsg" class="form-error-msg">
                ✕ {{ errorMsg }}
              </p>
            </form>
          </section>

          <aside class="contacto-sidebar">
            
            <div class="direct-card">
              <div class="direct-header">
                <span class="badge-sub">ATENCIÓN DIRECTA</span>
                <h3>Contacto directo</h3>
                <p>También podés comunicarte directamente para coordinar una primera conversación técnica.</p>
              </div>

              <ul class="direct-list">
                <li>
                  <div class="icon-bubble">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <span class="contact-label">EMAIL PROFESIONAL</span>
                    <a href="mailto:nicanor.rada@consultorarada.com" class="contact-value">nicanor.rada@consultorarada.com</a>
                  </div>
                </li>

                <li>
                  <div class="icon-bubble">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <span class="contact-label">WHATSAPP / TELÉFONO</span>
                    <a href="https://wa.me/5491100000000" target="_blank" class="contact-value">+54 9 11 0000-0000</a>
                  </div>
                </li>

                <li>
                  <div class="icon-bubble">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </div>
                  <div>
                    <span class="contact-label">LINKEDIN</span>
                    <a href="https://linkedin.com" target="_blank" class="contact-value">linkedin.com/in/nicanor-rada</a>
                  </div>
                </li>
              </ul>
            </div>

            <div class="scope-card">
              <h4>Áreas de Intervención</h4>
              <div class="pills-grid">
                <span class="scope-pill">GMP / GLP</span>
                <span class="scope-pill">ISO 9001:2015</span>
                <span class="scope-pill">ANMAT / SENASA</span>
                <span class="scope-pill">HPLC & GC</span>
                <span class="scope-pill">Cosmética</span>
                <span class="scope-pill">Auditorías</span>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </main>

    <section class="contacto-bottom-cta">
      <div class="container">
        <div class="bottom-box">
          <span class="badge-gold">ENFOQUE DE TRABAJO</span>
          <h2>Trabajemos sobre una solución concreta</h2>
          <p>
            Cada proyecto tiene necesidades y desafíos diferentes. La primera conversación nos permitirá conocer tu situación, identificar las prioridades principales y evaluar juntos el alcance del trabajo.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

// URL del backend. En desarrollo apunta a http://localhost:4000 por defecto;
// en producción se define con VITE_API_URL en el .env del frontend.
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'

const route = useRoute()
const enviando = ref(false)
const enviadoExito = ref(false)
const errorMsg = ref('')

const form = reactive({
  nombre: '',
  empresa: '',
  cargo: '',
  email: '',
  telefono: '',
  servicio: '',
  mensaje: ''
})

onMounted(() => {
  // Permite preseleccionar el servicio si viene por parámetro de URL (?servicio=...)
  if (route.query.servicio) {
    form.servicio = route.query.servicio
  }
})

const enviarConsulta = async () => {
  enviando.value = true
  errorMsg.value = ''

  try {
    const res = await fetch(`${API_URL}/api/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nombre: form.nombre,
        empresa: form.empresa,
        cargo: form.cargo,
        email: form.email,
        telefono: form.telefono,
        intereses: form.servicio ? [form.servicio] : [],
        mensaje: form.mensaje
      })
    })

    const data = await res.json()

    if (!res.ok || !data.ok) {
      throw new Error(data.error || 'No se pudo enviar la consulta.')
    }

    enviadoExito.value = true

    // Reset de campos
    form.nombre = ''
    form.empresa = ''
    form.cargo = ''
    form.email = ''
    form.telefono = ''
    form.servicio = ''
    form.mensaje = ''

    setTimeout(() => {
      enviadoExito.value = false
    }, 6000)
  } catch (err) {
    errorMsg.value = err.message || 'No se pudo conectar con el servidor. Intentá de nuevo más tarde.'
  } finally {
    enviando.value = false
  }
}
</script>

<style scoped lang="scss">
// Variables del sistema de diseño corporativo
$navy-950: #08132B;
$navy-900: #0B1E3D;
$navy-800: #122A54;
$navy-700: #1C3A6E;
$gold: #B99B57;
$gold-hover: #CDB370;
$white: #FFFFFF;
$off-white: #F6F7FB;
$line-dark: #26365E;
$line-light: #E2E5EE;
$ink: #0B1E3D;
$ink-soft: rgba(11, 30, 61, 0.72);
$text-soft: rgba(255, 255, 255, 0.75);

.contacto-view {
  background-color: $off-white;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  color: $ink;
}

.container {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* 1. HERO HEADER CON IMAGEN DE FONDO */
.contacto-hero {
  /* Fondo con degradado institucional oscuro + foto de fondo */
  background: 
    linear-gradient(
      90deg, 
      rgba(8, 19, 43, 0.96) 0%, 
      rgba(8, 19, 43, 0.82) 55%, 
      rgba(8, 19, 43, 0.45) 100%
    ),
    url('@/assets/contacto .png') no-repeat right center / cover;

  color: $white;
  padding: 4.5rem 0 3.5rem;
  border-bottom: 1px solid $line-dark;
  text-align: left;

  .badge-gold {
    display: inline-block;
    color: $gold;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    margin-bottom: 0.8rem;
  }

  .hero-title {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 2.8rem;
    font-weight: 600;
    color: $white;
    margin: 0 0 1rem;
    line-height: 1.15;

    @media (max-width: 768px) {
      font-size: 2.2rem;
    }
  }

  .hero-subtitle {
    font-size: 1.15rem;
    font-weight: 500;
    color: $gold-hover;
    max-width: 850px;
    margin: 0 0 0.8rem;
    line-height: 1.5;
  }

  .hero-intro {
    font-size: 0.95rem;
    color: $text-soft;
    max-width: 850px;
    margin: 0;
    line-height: 1.6;
  }
}

/* 2. GRID PRINCIPAL */
.contacto-main {
  padding: 3.5rem 0;
}

.contacto-grid {
  display: grid;
  grid-template-columns: 1.8fr 1.2fr;
  gap: 2.5rem;
  align-items: start;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
}

/* TARJETA DEL FORMULARIO */
.form-wrapper {
  background: $white;
  border-radius: 4px;
  border: 1px solid $line-light;
  border-top: 4px solid $gold;
  padding: 2.5rem 2.2rem;
  box-shadow: 0 4px 20px rgba(8, 19, 43, 0.04);

  .card-header {
    margin-bottom: 1.8rem;

    .section-label {
      font-size: 0.72rem;
      font-weight: 700;
      color: $gold;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      display: block;
      margin-bottom: 0.3rem;
    }

    .card-title {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 1.85rem;
      font-weight: 600;
      color: $navy-950;
      margin: 0 0 0.4rem;
    }

    .card-desc {
      font-size: 0.9rem;
      color: $ink-soft;
      margin: 0;
    }
  }
}

.contact-form {
  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.2rem;

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }

  .form-group {
    margin-bottom: 1.3rem;

    &.full-width {
      grid-column: 1 / -1;
    }

    label {
      display: block;
      font-size: 0.82rem;
      font-weight: 600;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      margin-bottom: 0.45rem;
      color: $navy-900;
    }

    input, select, textarea {
      width: 100%;
      padding: 0.8rem 1rem;
      border: 1px solid $line-light;
      border-radius: 3px;
      font-size: 0.92rem;
      font-family: 'Inter', sans-serif;
      color: $navy-950;
      background-color: #FAFAFC;
      transition: all 0.2s ease;
      box-sizing: border-box;

      &::placeholder {
        color: rgba(11, 30, 61, 0.4);
      }

      &:focus {
        outline: none;
        background-color: $white;
        border-color: $navy-700;
        box-shadow: 0 0 0 3px rgba(185, 155, 87, 0.15);
      }
    }

    select {
      cursor: pointer;
      appearance: auto;
    }

    textarea {
      resize: vertical;
      min-height: 100px;
    }
  }

  .btn-gold-submit {
    width: 100%;
    background-color: $gold;
    color: $navy-950;
    border: none;
    padding: 1rem 1.8rem;
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    border-radius: 3px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.6rem;
    transition: all 0.25s ease;
    margin-top: 0.8rem;

    &:hover:not(:disabled) {
      background-color: $gold-hover;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(185, 155, 87, 0.25);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  .form-success-msg {
    margin-top: 1rem;
    padding: 0.8rem 1rem;
    background-color: #E8F5E9;
    color: #2E7D32;
    border-radius: 3px;
    font-size: 0.88rem;
    font-weight: 500;
    text-align: center;
  }

  .form-error-msg {
    margin-top: 1rem;
    padding: 0.8rem 1rem;
    background-color: #FDECEA;
    color: #C62828;
    border-radius: 3px;
    font-size: 0.88rem;
    font-weight: 500;
    text-align: center;
  }
}

/* 3. SIDEBAR / TARJETA CONTACTO DIRECTO */
.contacto-sidebar {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.direct-card {
  background-color: $navy-950;
  color: $white;
  border-radius: 4px;
  padding: 2.2rem;
  border: 1px solid $line-dark;

  .direct-header {
    margin-bottom: 1.8rem;

    .badge-sub {
      color: $gold;
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      display: block;
      margin-bottom: 0.4rem;
    }

    h3 {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 1.7rem;
      font-weight: 600;
      color: $white;
      margin: 0 0 0.6rem;
    }

    p {
      font-size: 0.88rem;
      color: $text-soft;
      line-height: 1.5;
      margin: 0;
    }
  }

  .direct-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1.3rem;

    li {
      display: flex;
      align-items: center;
      gap: 1rem;

      .icon-bubble {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        background-color: rgba(185, 155, 87, 0.12);
        border: 1px solid rgba(185, 155, 87, 0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        color: $gold;

        svg {
          width: 18px;
          height: 18px;
        }
      }

      .contact-label {
        display: block;
        font-size: 0.68rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        color: rgba(255, 255, 255, 0.5);
        margin-bottom: 0.2rem;
      }

      .contact-value {
        color: $white;
        text-decoration: none;
        font-size: 0.9rem;
        font-weight: 500;
        transition: color 0.2s ease;

        &:hover {
          color: $gold;
        }
      }
    }
  }
}

.scope-card {
  background: $white;
  border: 1px solid $line-light;
  border-radius: 4px;
  padding: 1.5rem 1.8rem;

  h4 {
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: $navy-900;
    margin: 0 0 1rem;
  }

  .pills-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    .scope-pill {
      background-color: #EEF2F6;
      color: $navy-800;
      font-size: 0.78rem;
      font-weight: 600;
      padding: 0.35rem 0.75rem;
      border-radius: 20px;
      border: 1px solid $line-light;
    }
  }
}

/* 4. BLOQUE INFERIOR DE CIERRE */
.contacto-bottom-cta {
  background-color: $white;
  border-top: 1px solid $line-light;
  padding: 3.5rem 0;
  text-align: center;

  .bottom-box {
    max-width: 780px;
    margin: 0 auto;

    .badge-gold {
      display: inline-block;
      color: $gold;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      margin-bottom: 0.6rem;
    }

    h2 {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 2.1rem;
      color: $navy-950;
      font-weight: 600;
      margin: 0 0 1rem;
    }

    p {
      font-size: 0.95rem;
      color: $ink-soft;
      line-height: 1.6;
      margin: 0;
    }
  }
}
</style>