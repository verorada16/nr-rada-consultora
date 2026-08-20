<template>
  <div class="servicios-page">
    <header class="servicios-hero">
      <div class="wrap">
        <span class="eyebrow">SERVICIOS & SOLUCIONES TÉCNICAS</span>
        <h1>Soluciones de calidad, procesos y cumplimiento normativo</h1>
        <p class="hero-subheading">
          Consultoría y asesoramiento especializado para empresas y emprendimientos de las industrias farmacéutica, veterinaria, química y cosmética.
        </p>
        <p class="lead">
          Acompañamos a organizaciones que necesitan <strong>desarrollar, implementar, ordenar o mejorar sus procesos y sistemas de calidad</strong>, adaptando cada proyecto a sus necesidades y objetivos.
        </p>
        <div class="hero-cta-box">
          <router-link to="/contacto" class="btn-gold-action">SOLICITAR UNA CONSULTA</router-link>
        </div>
      </div>
    </header>

    <main class="servicios-body">
      <div class="wrap">
        <div class="services-grid">

          <article 
            v-for="servicio in listaServicios" 
            :key="servicio.id"
            :id="servicio.id"
            class="service-card"
            :class="{ highlight: servicio.highlight }"
            @click="abrirModal(servicio)"
          >
            <div>
              <div class="card-top">
                <span class="card-num">{{ servicio.numero }}</span>
                <span class="card-tag">{{ servicio.tag }}</span>
              </div>
              <h2>{{ servicio.titulo }}</h2>
              <p class="card-lead">{{ servicio.subtitulo }}</p>
              <p class="card-desc">{{ servicio.resumen }}</p>
            </div>

            <div class="card-action-link">
              <span>Ver más información</span>
              <span class="arrow">→</span>
            </div>
          </article>

        </div>

        <section class="section-workflow">
          <div class="section-header-center">
            <span class="eyebrow">METODOLOGÍA DE TRABAJO</span>
            <h2>¿Cómo trabajamos?</h2>
            <p class="workflow-subtitle">Cada proyecto comienza entendiendo tu situación particular.</p>
          </div>

          <div class="steps-grid">
            <div class="step-card">
              <span class="step-number">01</span>
              <h3>Conocemos</h3>
              <p>Analizamos tu organización, actividad, contexto operativo y necesidad concreta.</p>
            </div>
            <div class="step-card">
              <span class="step-number">02</span>
              <h3>Diagnosticamos</h3>
              <p>Identificamos brechas normativas, prioridades críticas y oportunidades de optimización.</p>
            </div>
            <div class="step-card">
              <span class="step-number">03</span>
              <h3>Proponemos</h3>
              <p>Definimos el plan de acción, alcance técnico, entregables específicos y modalidad.</p>
            </div>
            <div class="step-card">
              <span class="step-number">04</span>
              <h3>Implementamos</h3>
              <p>Desarrollamos los documentos, capacitamos al personal y acompañamos la ejecución.</p>
            </div>
            <div class="step-card">
              <span class="step-number">05</span>
              <h3>Seguimos</h3>
              <p>Evaluamos los resultados obtenidos y trabajamos sobre la mejora continua del sistema.</p>
            </div>
          </div>
        </section>

        <section class="section-modalidad">
          <div class="section-header-center">
            <span class="eyebrow">FLEXIBILIDAD OPERATIVA</span>
            <h2>Modalidad de Servicio</h2>
            <p class="workflow-subtitle">Un servicio adaptado a las características y requerimientos de cada proyecto.</p>
          </div>

          <div class="modalidad-grid">
            <div class="modalidad-card">
              <div class="modalidad-header">
                <h3>Modalidad Remota</h3>
              </div>
              <p class="modalidad-desc">Ideal para consultoría estratégica, desarrollo documental y seguimiento periódico.</p>
              <ul class="card-points">
                <li>Reuniones y asesoramiento vía plataformas virtuales.</li>
                <li>Revisión, redacción y estructuración documental remota.</li>
                <li>Capacitaciones y talleres teóricos virtuales.</li>
                <li>Seguimiento periódico de avances e indicadores.</li>
              </ul>
            </div>

            <div class="modalidad-card highlight-border">
              <div class="modalidad-header">
                <h3>Modalidad Presencial</h3>
              </div>
              <p class="modalidad-desc">Indicada cuando se requiere evaluación directa en planta, laboratorio o instalaciones.</p>
              <ul class="card-points">
                <li>Auditorías in situ a plantas, laboratorios y depósitos.</li>
                <li>Entrenamiento práctico en instrumental de laboratorio.</li>
                <li>Relevamiento directo de procesos en puestos de trabajo.</li>
                <li>Acompañamiento presencial durante inspecciones oficiales.</li>
              </ul>
            </div>
          </div>
        </section>

        <div class="servicios-diagnosis-banner">
          <div class="banner-text">
            <h3>¿No sabés exactamente qué servicio necesitás?</h3>
            <p>
              No es necesario que conozcas de antemano la solución técnica. Contanos qué está pasando en tu organización y evaluamos juntos prioridades y alcance.
            </p>
          </div>
          <router-link to="/tu-situacion" class="btn-outline-gold">
            Contar mi situación →
          </router-link>
        </div>

        <div class="servicios-footer-banner">
          <div class="banner-text">
            <span class="eyebrow-light">HABLEMOS DE TU PROYECTO</span>
            <h3>¿Tenés un desafío de calidad, procesos o cumplimiento?</h3>
            <p>
              Estamos para ayudarte a transformar necesidades concretas en <strong>procesos ordenados, documentación aplicable y sistemas de calidad sostenibles</strong>.
            </p>
            <div class="tags-footer">
              Calidad · Procesos · GMP · ISO 9001 · ISO 22716 · Auditorías · SOP / POE · CAPA · Capacitación Analítica
            </div>
            <div class="industrias-badge">
              Farmacéutica · Veterinaria · Química · Cosmética
            </div>
          </div>
          <div class="banner-action">
            <router-link to="/contacto" class="btn-gold-action">Solicitar una consulta</router-link>
          </div>
        </div>

      </div>
    </main>

    <Teleport to="body">
      <div v-if="servicioSeleccionado" class="modal-overlay" @click.self="cerrarModal">
        <div class="modal-content">
          <button class="modal-close" @click="cerrarModal" aria-label="Cerrar">&times;</button>
          
          <div class="modal-header">
            <span class="card-tag">{{ servicioSeleccionado.tag }}</span>
            <span class="modal-num">{{ servicioSeleccionado.numero }}</span>
          </div>

          <h2>{{ servicioSeleccionado.titulo }}</h2>
          <p class="modal-lead">{{ servicioSeleccionado.subtitulo }}</p>
          <p class="modal-desc">{{ servicioSeleccionado.resumen }}</p>

          <div class="modal-body-section">
            <h4>{{ servicioSeleccionado.seccionTitulo }}</h4>
            <ul class="modal-list">
              <li v-for="(item, idx) in servicioSeleccionado.items" :key="idx">
                <span v-html="item"></span>
              </li>
            </ul>
          </div>

          <div v-if="servicioSeleccionado.destacado" class="modal-ideal">
            <strong>{{ servicioSeleccionado.destacadoLabel }}:</strong> {{ servicioSeleccionado.destacado }}
          </div>

          <div class="modal-footer">
            <router-link 
              :to="`/contacto?servicio=${servicioSeleccionado.id}`" 
              class="btn-gold-action"
              @click="cerrarModal"
            >
              {{ servicioSeleccionado.btnTexto }}
            </router-link>
          </div>
        </div>
      </div>
    </Teleport>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const servicioSeleccionado = ref(null)

const listaServicios = [
  {
    id: 'calidad-procesos',
    numero: '01',
    tag: 'Diagnóstico & Mejora',
    titulo: 'Consultoría en Calidad y Procesos',
    subtitulo: 'Ordená y fortalecé la forma en que trabaja tu organización',
    resumen: 'Analizamos los procesos de tu organización para identificar necesidades, oportunidades de mejora y posibles brechas, y desarrollamos soluciones adaptadas a la realidad de cada empresa.',
    seccionTitulo: '¿En qué podemos ayudarte?',
    items: [
      'Diagnóstico de procesos.',
      'Identificación de brechas.',
      'Análisis y mejora de procesos.',
      'Desarrollo de procedimientos.',
      'Elaboración de instructivos.',
      'Desarrollo de registros y formularios.',
      'Organización documental.',
      'Implementación de mejoras.',
      'Seguimiento de acciones y mejora continua.'
    ],
    destacadoLabel: 'Ideal para',
    destacado: 'PyMEs y emprendimientos que están comenzando, creciendo o necesitan ordenar y fortalecer sus procesos.',
    btnTexto: 'Quiero ordenar mis procesos'
  },
  {
    id: 'documentacion',
    numero: '02',
    tag: 'Estandarización & SOP',
    titulo: 'Documentación y Procedimientos',
    subtitulo: 'Transformá tus procesos en documentación clara y aplicable',
    resumen: 'La documentación es una parte fundamental de cualquier sistema de calidad. Te ayudamos a desarrollar y organizar la documentación necesaria para que los procesos de tu organización estén claramente definidos, sean trazables y puedan ser aplicados por los equipos.',
    seccionTitulo: 'Servicios incluidos',
    items: [
      'Desarrollo de procedimientos.',
      'Procedimientos Operativos Estándar (SOP).',
      'Instructivos de trabajo.',
      'Formularios y registros.',
      'Revisión y actualización documental existente.',
      'Organización del sistema documental.',
      'Documentación asociada a procesos bajo GMP.',
      'Documentación asociada a sistemas de gestión.'
    ],
    destacadoLabel: 'Nuestro enfoque',
    destacado: 'La documentación se desarrolla teniendo en cuenta cómo funciona realmente el proceso, buscando que los documentos sean herramientas útiles para quienes los utilizan.',
    btnTexto: 'Consultar por documentación'
  },
  {
    id: 'gmp',
    numero: '03',
    tag: 'Cumplimiento GMP',
    highlight: true,
    titulo: 'GMP — Buenas Prácticas de Manufactura',
    subtitulo: 'Calidad y procesos bajo principios GMP',
    resumen: 'Brindamos asesoramiento relacionado con Buenas Prácticas de Manufactura (GMP), orientado a organizaciones que necesitan desarrollar, ordenar o fortalecer sus sistemas de calidad y documentación.',
    seccionTitulo: 'Podemos trabajar sobre:',
    items: [
      'Análisis de procesos.',
      'Procedimientos y SOP.',
      'Documentación y registros.',
      'Buenas prácticas operativas.',
      'Identificación de brechas.',
      'Acciones de mejora.',
      'Capacitación de equipos.',
      'Preparación para evaluaciones y auditorías.'
    ],
    destacadoLabel: 'Objetivo',
    destacado: 'Ayudar a que los procesos estén documentados, controlados y alineados con los requisitos aplicables a la organización.',
    btnTexto: 'Consultar por GMP'
  },
  {
    id: 'iso-9001',
    numero: '04',
    tag: 'Certificación',
    titulo: 'ISO 9001:2015',
    subtitulo: 'Implementación y mejora de sistemas de gestión de calidad',
    resumen: 'Acompañamos a organizaciones que necesitan implementar un sistema de gestión de calidad o fortalecer un sistema que ya se encuentra en funcionamiento.',
    seccionTitulo: 'Podemos acompañarte en:',
    items: [
      '<strong>Diagnóstico:</strong> Evaluación de la situación actual e identificación de brechas.',
      '<strong>Planificación:</strong> Definición de prioridades y plan de trabajo.',
      '<strong>Documentación:</strong> Desarrollo y organización de la documentación necesaria.',
      '<strong>Implementación:</strong> Acompañamiento en la aplicación de los procesos definidos.',
      '<strong>Capacitación:</strong> Formación de los equipos involucrados.',
      '<strong>Auditoría interna:</strong> Evaluación del sistema e identificación de mejoras.',
      '<strong>Seguimiento:</strong> Acompañamiento para mantener y optimizar el sistema.'
    ],
    destacadoLabel: 'Ideal para',
    destacado: 'Empresas que quieren implementar ISO 9001:2015, prepararse para una certificación o mejorar un sistema ya implementado.',
    btnTexto: 'Quiero implementar ISO 9001'
  },
  {
    id: 'iso-22716',
    numero: '05',
    tag: 'Industria Cosmética',
    titulo: 'ISO 22716 — Productos Cosméticos',
    subtitulo: 'Buenas Prácticas de Fabricación para productos cosméticos',
    resumen: 'Asesoramiento para empresas y emprendimientos cosméticos que necesitan ordenar y profesionalizar sus procesos de fabricación y calidad.',
    seccionTitulo: 'Podemos trabajar sobre:',
    items: [
      'Buenas Prácticas de Fabricación.',
      'Organización y control de procesos.',
      'Procedimientos, documentación y registros.',
      'Capacitación de personal.',
      'Identificación de oportunidades de mejora.',
      'Preparación del sistema de calidad.'
    ],
    destacadoLabel: 'Dirigido a',
    destacado: 'Empresas cosméticas y emprendimientos que buscan profesionalizar sus procesos y desarrollar una base de calidad sólida.',
    btnTexto: 'Consultar por Cosmética'
  },
  {
    id: 'auditorias',
    numero: '06',
    tag: 'Inspecciones',
    highlight: true,
    titulo: 'Auditorías y Preparación',
    subtitulo: 'Prepará tu organización antes de una auditoría',
    resumen: 'Una auditoría puede detectar problemas que no siempre son evidentes durante la operación cotidiana. Por eso ofrecemos evaluaciones previas para identificar brechas, oportunidades de mejora y aspectos clave a corregir.',
    seccionTitulo: 'Servicios',
    items: [
      'Preauditorías y auditorías internas.',
      'Revisión documental y evaluación de procesos.',
      'Identificación de brechas y hallazgos potenciales.',
      'Planes de acción y seguimiento de acciones correctivas.',
      'Preparación integral de equipos.'
    ],
    destacadoLabel: 'Preparación relacionada con',
    destacado: 'Sistemas de calidad · GMP · ISO 9001 · ISO 22716 · Requisitos aplicables.',
    btnTexto: 'Quiero prepararme para una auditoría'
  },
  {
    id: 'capa',
    numero: '07',
    tag: 'Resolución de Desvíos',
    titulo: 'CAPA y Acciones de Mejora',
    subtitulo: 'De la identificación del problema a la acción',
    resumen: 'Cuando se identifica una desviación o una oportunidad de mejora, es importante comprender su origen y definir acciones adecuadas.',
    seccionTitulo: 'Brindamos asesoramiento en:',
    items: [
      'Análisis de causas (causa raíz).',
      'Definición de acciones correctivas.',
      'Definición de acciones preventivas cuando corresponda.',
      'Seguimiento y verificación de implementación.',
      'Documentación técnica y seguimiento de la mejora.'
    ],
    destacadoLabel: 'Objetivo',
    destacado: 'Pasar de detectar un problema a implementar una solución sostenible.',
    btnTexto: 'Consultar por CAPA'
  },
  {
    id: 'mantenimiento',
    numero: '08',
    tag: 'Soporte Continuo',
    titulo: 'Mantenimiento y Mejora del Sistema',
    subtitulo: 'Tu sistema de calidad no termina con la implementación',
    resumen: 'Los sistemas de calidad necesitan mantenerse, revisarse y mejorar continuamente.',
    seccionTitulo: 'Podemos acompañarte con:',
    items: [
      'Revisión periódica del sistema.',
      'Actualización documental.',
      'Auditorías internas programadas.',
      'Seguimiento de acciones y revisión de procesos.',
      'Identificación de oportunidades de mejora y capacitación.',
      'Preparación para próximas auditorías.'
    ],
    destacadoLabel: 'Modalidad',
    destacado: 'Por proyecto · Mensual · Periódica (adaptada a cada organización).',
    btnTexto: 'Quiero mantener mi sistema'
  },
  {
    id: 'capacitacion',
    numero: '09',
    tag: 'Entrenamiento In-Company',
    titulo: 'Capacitación Técnica',
    subtitulo: 'Capacitación para operadores y equipos de laboratorio',
    resumen: 'Desarrollamos capacitaciones adaptadas a las necesidades de cada organización, teniendo en cuenta el equipamiento disponible, los procesos y el nivel de experiencia de los participantes.',
    seccionTitulo: 'Equipamiento e instrumental analítico:',
    items: [
      '<strong>HPLC:</strong> Cromatografía Líquida de Alta Performance.',
      '<strong>GC:</strong> Cromatografía Gaseosa.',
      '<strong>UV-Visible:</strong> Espectrofotometría UV-Visible.',
      '<strong>IR / FTIR:</strong> Espectroscopía Infrarroja.',
      '<strong>Karl Fischer:</strong> Determinación de humedad.',
      'Buenas prácticas de operación y registro de datos.'
    ],
    destacadoLabel: 'Modalidad',
    destacado: 'Capacitación In-Company adaptada a los equipos, procedimientos y necesidades del laboratorio.',
    btnTexto: 'Ver capacitaciones'
  },
  {
    id: 'farma-vet',
    numero: '10',
    tag: 'Regulado ANMAT / SENASA',
    highlight: true,
    titulo: 'Asesoramiento para Industrias Farmacéuticas y Veterinarias',
    subtitulo: 'Calidad y cumplimiento para industrias reguladas',
    resumen: 'Brindamos asesoramiento técnico relacionado con sistemas de calidad, GMP, documentación y procesos, considerando los requisitos aplicables a cada organización.',
    seccionTitulo: 'Podemos trabajar sobre:',
    items: [
      'Sistemas de calidad.',
      'GMP (Buenas Prácticas de Manufactura).',
      'Documentación técnica y procedimientos.',
      'Auditorías e identificación de brechas.',
      'Acciones de mejora y capacitación.',
      'Preparación ante evaluaciones regulatorias.'
    ],
    destacadoLabel: 'Organismos y marcos regulatorios',
    destacado: 'ANMAT · SENASA. El alcance se determina de acuerdo con la actividad, producto y establecimiento.',
    btnTexto: 'Consultar por mi proyecto'
  },
  {
    id: 'emprendimientos-cosmeticos',
    numero: '11',
    tag: 'Cosmética Indie',
    titulo: 'Asesoramiento para Emprendimientos Cosméticos',
    subtitulo: 'Profesionalizá tu proyecto cosmético',
    resumen: 'Acompañamos a emprendedores que están desarrollando productos cosméticos y necesitan comenzar a trabajar de manera más ordenada y profesional.',
    seccionTitulo: 'Podemos ayudarte con:',
    items: [
      'Organización de procesos y buenas prácticas.',
      'Documentación, procedimientos y registros.',
      'Desarrollo y mejora de procesos.',
      'Orientación sobre requisitos aplicables e ISO 22716.',
      'Capacitación técnica.'
    ],
    destacadoLabel: 'Productos',
    destacado: 'Shampoo · Acondicionadores · Cremas · Productos de cuidado personal.',
    btnTexto: 'Quiero profesionalizar mi proyecto'
  }
]

const abrirModal = (servicio) => {
  servicioSeleccionado.value = servicio
  document.body.style.overflow = 'hidden'
}

const cerrarModal = () => {
  servicioSeleccionado.value = null
  document.body.style.overflow = ''
}

onMounted(() => {
  const targetId = route.params.id || route.query.seccion
  if (targetId) {
    const srv = listaServicios.find(s => s.id === targetId)
    if (srv) {
      abrirModal(srv)
    }
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');

/* Estructura Base */
.servicios-page {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: #0B1E3D;
  background-color: #F6F7FB;
  width: 100%;
}

.wrap {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* HERO SECTION */
.servicios-hero {
  background-color: #08132B;
  color: #FFFFFF;
  padding: 80px 0 68px;
  border-bottom: 1px solid #26365E;
}

.eyebrow {
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #B99B57;
  font-weight: 600;
  margin-bottom: 0.75rem;
  display: block;
}

.eyebrow-light {
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #B99B57;
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: block;
}

.servicios-hero h1 {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 3.2rem;
  font-weight: 600;
  line-height: 1.15;
  margin-bottom: 1.2rem;
  color: #FFFFFF;
}

.hero-subheading {
  font-size: 1.2rem;
  color: #B99B57;
  font-weight: 400;
  line-height: 1.4;
  margin-bottom: 1rem;
  max-width: 860px;
}

.servicios-hero .lead {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 820px;
  font-weight: 300;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.hero-cta-box {
  margin-top: 1.5rem;
}

/* GRILLA DE SERVICIOS */
.servicios-body {
  background-color: #F6F7FB;
  padding: 80px 0;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

@media (max-width: 1080px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 720px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}

/* TARJETAS DE SERVICIO (COMPACTAS) */
.service-card {
  background-color: #FFFFFF;
  border: 1px solid #E2E5EE;
  border-radius: 6px;
  padding: 2.2rem 1.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  box-shadow: 0 4px 12px rgba(8, 19, 43, 0.03);
}

.service-card:hover {
  transform: translateY(-4px);
  border-color: #1C3A6E;
  box-shadow: 0 16px 32px rgba(8, 19, 43, 0.08);
}

.service-card.highlight {
  border-top: 3px solid #B99B57;
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.2rem;
}

.card-num {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1.8rem;
  font-weight: 600;
  color: #B99B57;
  line-height: 1;
}

.card-tag {
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #1C3A6E;
  background-color: rgba(28, 58, 110, 0.06);
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
}

.service-card h2 {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1.55rem;
  font-weight: 600;
  color: #08132B;
  margin-bottom: 0.4rem;
  line-height: 1.2;
}

.card-lead {
  font-size: 0.92rem;
  font-weight: 600;
  color: #1C3A6E;
  margin-bottom: 0.75rem;
  line-height: 1.35;
}

.card-desc {
  font-size: 0.88rem;
  color: rgba(11, 30, 61, 0.72);
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

.card-action-link {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.88rem;
  font-weight: 600;
  color: #1C3A6E;
  padding-top: 0.8rem;
  border-top: 1px solid #E2E5EE;
  transition: color 0.2s ease;
}

.service-card:hover .card-action-link {
  color: #B99B57;
}

.arrow {
  transition: transform 0.2s ease;
  font-size: 1.1rem;
}

.service-card:hover .arrow {
  transform: translateX(4px);
}

/* MODAL INTERACTIVO */
.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(8, 19, 43, 0.65);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1.5rem;
}

.modal-content {
  background-color: #FFFFFF;
  border-radius: 8px;
  max-width: 640px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  padding: 2.5rem;
  position: relative;
  box-shadow: 0 20px 40px rgba(8, 19, 43, 0.25);
  border-top: 4px solid #B99B57;
}

.modal-close {
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  background: transparent;
  border: none;
  font-size: 2rem;
  color: #08132B;
  cursor: pointer;
  line-height: 1;
  transition: color 0.2s ease;
}

.modal-close:hover {
  color: #B99B57;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.modal-num {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 2rem;
  font-weight: 600;
  color: #B99B57;
}

.modal-content h2 {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 2rem;
  font-weight: 600;
  color: #08132B;
  margin-bottom: 0.4rem;
  line-height: 1.2;
}

.modal-lead {
  font-size: 1.05rem;
  font-weight: 600;
  color: #1C3A6E;
  margin-bottom: 0.8rem;
  line-height: 1.4;
}

.modal-desc {
  font-size: 0.92rem;
  color: rgba(11, 30, 61, 0.78);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.modal-body-section h4 {
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #08132B;
  margin-bottom: 0.8rem;
}

.modal-list {
  list-style: none;
  padding: 0.8rem 0;
  margin-bottom: 1.5rem;
  border-top: 1px solid #E2E5EE;
  border-bottom: 1px solid #E2E5EE;
}

.modal-list li {
  font-size: 0.88rem;
  color: #0B1E3D;
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.2rem;
  line-height: 1.45;
}

.modal-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5rem;
  width: 5px;
  height: 5px;
  background-color: #B99B57;
  border-radius: 50%;
}

.modal-ideal {
  font-size: 0.88rem;
  color: rgba(11, 30, 61, 0.8);
  background-color: #F8F9FC;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1.8rem;
  border-left: 3px solid #B99B57;
  line-height: 1.45;
}

.modal-footer {
  text-align: right;
}

/* SECCIÓN: ¿CÓMO TRABAJAMOS? */
.section-workflow {
  margin-top: 5rem;
  padding: 4rem 2.5rem;
  background-color: #FFFFFF;
  border: 1px solid #E2E5EE;
  border-radius: 6px;
}

.section-header-center {
  text-align: center;
  margin-bottom: 3.5rem;
}

.section-header-center h2 {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 2.4rem;
  font-weight: 600;
  color: #08132B;
  margin-bottom: 0.5rem;
}

.workflow-subtitle {
  font-size: 1.05rem;
  color: rgba(11, 30, 61, 0.7);
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
}

@media (max-width: 960px) {
  .steps-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .steps-grid {
    grid-template-columns: 1fr;
  }
}

.step-card {
  border-top: 2px solid #E2E5EE;
  padding-top: 1.2rem;
  transition: border-color 0.25s ease;
}

.step-card:hover {
  border-color: #B99B57;
}

.step-number {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 2rem;
  font-weight: 600;
  color: #B99B57;
  display: block;
  margin-bottom: 0.4rem;
}

.step-card h3 {
  font-size: 1rem;
  font-weight: 700;
  color: #08132B;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.6rem;
}

.step-card p {
  font-size: 0.88rem;
  color: rgba(11, 30, 61, 0.75);
  line-height: 1.5;
}

/* SECCIÓN: MODALIDAD DE SERVICIO */
.section-modalidad {
  margin-top: 4.5rem;
}

.modalidad-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

@media (max-width: 768px) {
  .modalidad-grid {
    grid-template-columns: 1fr;
  }
}

.modalidad-card {
  background-color: #FFFFFF;
  border: 1px solid #E2E5EE;
  border-radius: 6px;
  padding: 2.5rem;
}

.modalidad-card.highlight-border {
  border-top: 3px solid #B99B57;
}

.modalidad-header h3 {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1.8rem;
  font-weight: 600;
  color: #08132B;
  margin-bottom: 0.5rem;
}

.modalidad-desc {
  font-size: 0.95rem;
  color: #1C3A6E;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.card-points {
  list-style: none;
  padding: 0.8rem 0;
  border-top: 1px solid #E2E5EE;
}

.card-points li {
  font-size: 0.86rem;
  color: #0B1E3D;
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.1rem;
  line-height: 1.45;
}

.card-points li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5rem;
  width: 4px;
  height: 4px;
  background-color: #B99B57;
  border-radius: 50%;
}

/* BANNER DE DIAGNÓSTICO */
.servicios-diagnosis-banner {
  margin-top: 4.5rem;
  background-color: #FFFFFF;
  border: 1px solid #B99B57;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

@media (max-width: 768px) {
  .servicios-diagnosis-banner {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
  }
}

.servicios-diagnosis-banner h3 {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1.8rem;
  font-weight: 600;
  color: #08132B;
  margin-bottom: 0.5rem;
}

.servicios-diagnosis-banner p {
  font-size: 0.95rem;
  color: rgba(11, 30, 61, 0.75);
  line-height: 1.5;
}

.btn-outline-gold {
  display: inline-block;
  border: 1.5px solid #B99B57;
  color: #B99B57;
  background-color: transparent;
  padding: 0.85rem 1.8rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.2s ease;
}

.btn-outline-gold:hover {
  background-color: #B99B57;
  color: #FFFFFF;
}

/* BANNER DE CIERRE */
.servicios-footer-banner {
  margin-top: 3.5rem;
  background-color: #08132B;
  border: 1px solid #26365E;
  border-radius: 6px;
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2.5rem;
}

@media (max-width: 860px) {
  .servicios-footer-banner {
    flex-direction: column;
    text-align: center;
    padding: 2.2rem;
  }
}

.servicios-footer-banner h3 {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 2rem;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 0.6rem;
}

.servicios-footer-banner p {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 300;
  margin-bottom: 1.2rem;
  max-width: 700px;
}

.tags-footer {
  font-size: 0.82rem;
  color: #B99B57;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.industrias-badge {
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.6);
}

.btn-gold-action {
  background-color: #B99B57;
  color: #FFFFFF;
  padding: 0.9rem 2rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.92rem;
  text-decoration: none;
  white-space: nowrap;
  display: inline-block;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.btn-gold-action:hover {
  background-color: #a38544;
  transform: translateY(-2px);
}
.servicios-hero {
  background: 
    linear-gradient(90deg, rgba(8, 19, 43, 0.95) 0%, rgba(8, 19, 43, 0.75) 55%, rgba(8, 19, 43, 0.4) 100%),
    url('@/assets/hero-servicios-bg.jpg.png') no-repeat right center / cover;
  color: #FFFFFF;
  padding: 80px 0 68px;
  border-bottom: 1px solid #26365E;
}
</style>