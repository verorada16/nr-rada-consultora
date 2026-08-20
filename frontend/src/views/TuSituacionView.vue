<template>
  <div class="situacion-view">
    <header class="situacion-hero">
      <div class="wrap">
        <span class="eyebrow">DIAGNÓSTICO Y ORIENTACIÓN</span>
        <h1>Tu Situación</h1>
        <p class="hero-subheading">Encontrá el camino adecuado para tu proyecto</p>
        <p class="lead">
          Cada organización tiene necesidades y momentos diferentes. No importa si estás comenzando, si tu empresa ya está funcionando o si tenés una auditoría próxima. Contanos en qué situación se encuentra tu organización y encontrá el enfoque que mejor se adapta a tus necesidades.
        </p>
      </div>
    </header>

    <main class="wrap main-content">
      <section class="banner-no-situacion">
        <div class="banner-inner">
          <div class="banner-text">
            <span class="badge-outline">CONSULTA PERSONALIZADA</span>
            <h2>¿No encontrás tu situación?</h2>
            <p class="tagline">Cada proyecto es diferente y tiene particularidades únicas.</p>
            <p class="desc">
              Es posible que tu necesidad no se encuentre exactamente dentro de las situaciones descriptas. Contanos qué está pasando en tu organización, qué necesitás resolver y en qué etapa se encuentra tu proyecto para analizar un acompañamiento a medida.
            </p>
          </div>
          <div class="banner-action">
            <router-link 
              :to="{ path: '/contacto', query: { motivo: 'consulta-general' } }" 
              class="btn-gold-action"
            >
              Contar mi situación
            </router-link>
          </div>
        </div>
      </section>

      <section class="situaciones-grid">
        <article 
          v-for="item in listaSituaciones" 
          :key="item.id"
          :id="item.id"
          class="situation-card"
          @click="abrirModal(item)"
        >
          <div>
            <div class="card-top">
              <span class="card-num">{{ item.numero }}</span>
              <span class="card-tag">{{ item.tag }}</span>
            </div>
            <h2>{{ item.titulo }}</h2>
            <p class="card-lead">{{ item.subtitulo }}</p>
            <p class="card-desc">{{ item.resumen }}</p>
          </div>

          <div class="card-action-link">
            <span>Ver más información</span>
            <span class="arrow">→</span>
          </div>
        </article>
      </section>

      <section class="section-steps">
        <div class="steps-header">
          <span class="eyebrow">METODOLOGÍA DE TRABAJO</span>
          <h2 class="section-title">¿Cómo empezamos?</h2>
          <p class="section-subtitle">Un primer paso para entender tu necesidad</p>
        </div>

        <div class="steps-grid">
          <div class="step-card">
            <span class="step-num">01</span>
            <h4>Nos contás</h4>
            <p>Completás el formulario de contacto con información sobre tu organización y tu necesidad.</p>
          </div>

          <div class="step-card">
            <span class="step-num">02</span>
            <h4>Analizamos</h4>
            <p>Revisamos la situación planteada y definimos los principales puntos a considerar.</p>
          </div>

          <div class="step-card">
            <span class="step-num">03</span>
            <h4>Conversamos</h4>
            <p>Coordinamos una primera conversación para profundizar en el proyecto y los requerimientos.</p>
          </div>

          <div class="step-card">
            <span class="step-num">04</span>
            <h4>Proponemos</h4>
            <p>Definimos el alcance, modalidad y próximos pasos de acuerdo con las necesidades identificadas.</p>
          </div>
        </div>
      </section>

    
    </main>

    <Teleport to="body">
      <div v-if="situacionSeleccionada" class="modal-overlay" @click.self="cerrarModal">
        <div class="modal-content">
          <button class="modal-close" @click="cerrarModal" aria-label="Cerrar">&times;</button>
          
          <div class="modal-header">
            <span class="card-tag">{{ situacionSeleccionada.tag }}</span>
            <span class="modal-num">{{ situacionSeleccionada.numero }}</span>
          </div>

          <h2>{{ situacionSeleccionada.titulo }}</h2>
          <p class="modal-lead">{{ situacionSeleccionada.subtitulo }}</p>
          <p class="modal-desc">{{ situacionSeleccionada.resumen }}</p>

          <div class="modal-body-section">
            <h4>{{ situacionSeleccionada.preguntaTitulo }}</h4>
            <ul class="modal-list">
              <li v-for="(preg, idx) in situacionSeleccionada.preguntas" :key="idx">
                {{ preg }}
              </li>
            </ul>
          </div>

          <div v-if="situacionSeleccionada.pills && situacionSeleccionada.pills.length" class="modal-pills-box">
            <span class="pills-title">{{ situacionSeleccionada.pillsTitulo }}:</span>
            <div class="modal-pills">
              <span v-for="(pill, idx) in situacionSeleccionada.pills" :key="idx">{{ pill }}</span>
            </div>
          </div>

          <div class="modal-ideal">
            <strong>{{ situacionSeleccionada.objetivoLabel }}:</strong> {{ situacionSeleccionada.objetivoTexto }}
          </div>

          <div class="modal-footer">
            <router-link 
              :to="{ path: '/contacto', query: { motivo: situacionSeleccionada.id } }" 
              class="btn-gold-action"
              @click="cerrarModal"
            >
              {{ situacionSeleccionada.btnTexto }}
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
const situacionSeleccionada = ref(null)

const listaSituaciones = [
  {
    id: 'comenzando',
    numero: '01',
    tag: 'Inicio de Actividades',
    titulo: 'Estoy comenzando',
    subtitulo: 'Quiero desarrollar mi proyecto con una base sólida',
    resumen: 'Estoy comenzando un nuevo proyecto relacionado con la industria farmacéutica, veterinaria, química o cosmética y necesito entender qué procesos, documentación y requisitos debo considerar desde el inicio.',
    preguntaTitulo: 'Quizás hoy te estés preguntando:',
    preguntas: [
      '¿Por dónde debería empezar?',
      '¿Qué debería tener documentado?',
      '¿Cómo debería organizar mis procesos?',
      '¿Qué requisitos debería considerar?',
      '¿Cómo puedo evitar errores que después sean difíciles de corregir?',
      '¿Cómo puedo construir una base de calidad desde el comienzo?'
    ],
    objetivoLabel: 'Podemos ayudarte a',
    objetivoTexto: 'Analizar tu situación actual, identificar necesidades y establecer prioridades para comenzar a desarrollar tu proyecto de manera ordenada.',
    btnTexto: 'Quiero empezar mi proyecto'
  },
  {
    id: 'creciendo',
    numero: '02',
    tag: 'Organización y Escalabilidad',
    titulo: 'Mi empresa está creciendo y necesito ordenarme',
    subtitulo: 'Los procesos crecieron, pero la organización no acompañó',
    resumen: 'La empresa comenzó a crecer y ahora existen más personas, productos, procesos y actividades, pero muchas cosas todavía se realizan de manera informal o dependen del conocimiento de determinadas personas.',
    preguntaTitulo: 'Quizás te esté pasando que:',
    preguntas: [
      'No todos trabajan de la misma manera.',
      'Los procesos no están claramente definidos.',
      'Falta documentación o los procedimientos están desactualizados.',
      'Hay registros que deberían existir y no existen.',
      'La información está dispersa y necesitás mayor trazabilidad.',
      'Querés profesionalizar la forma de trabajar.'
    ],
    objetivoLabel: 'El objetivo',
    objetivoTexto: 'Ordenar los procesos y construir una estructura de calidad que acompañe el crecimiento de la organización.',
    btnTexto: 'Quiero ordenar mi empresa'
  },
  {
    id: 'documentacion',
    numero: '03',
    tag: 'Sistemas Documentales',
    titulo: 'No tengo mi documentación organizada',
    subtitulo: 'Necesito transformar lo que hacemos en procesos documentados',
    resumen: 'Sabemos cómo hacemos las cosas, pero necesitamos documentarlas, organizarlas y establecer una forma clara y consistente de trabajar.',
    preguntaTitulo: 'Puede incluir situaciones como:',
    preguntas: [
      'Falta de procedimientos o SOP inexistentes/incompletos.',
      'Instructivos que necesitan actualización.',
      'Registros que no están definidos o documentación dispersa.',
      'Documentos que ya no reflejan la forma real de trabajar.',
      'Necesidad de establecer responsabilidades y criterios claros.'
    ],
    objetivoLabel: 'El objetivo',
    objetivoTexto: 'Desarrollar una documentación clara, útil y aplicable a los procesos reales de la organización.',
    btnTexto: 'Necesito ordenar mi documentación'
  },
  {
    id: 'auditoria',
    numero: '04',
    tag: 'Evaluación y Cumplimiento',
    titulo: 'Tengo una auditoría próxima',
    subtitulo: 'Quiero saber si realmente estoy preparado',
    resumen: 'Se acerca una auditoría y necesitás una mirada externa que te ayude a identificar posibles brechas antes de la evaluación oficial.',
    preguntaTitulo: 'Quizás te preocupe:',
    preguntas: [
      'Que existan documentos incompletos o registros faltantes.',
      'Que los procesos no se estén cumpliendo como deberían.',
      'Diferencias entre lo documentado y lo que realmente se hace.',
      'Que existan acciones pendientes sin cerrar.',
      'Que el equipo no se sienta seguro o preparado para responder.'
    ],
    objetivoLabel: 'El objetivo',
    objetivoTexto: 'Detectar oportunidades de mejora antes de la auditoría y llegar con una organización más preparada.',
    btnTexto: 'Quiero prepararme para una auditoría'
  },
  {
    id: 'sistema',
    numero: '05',
    tag: 'Optimización y Mantenimiento',
    titulo: 'Ya tengo un sistema de calidad, pero necesito mejorarlo',
    subtitulo: 'Mi sistema existe, pero necesita fortalecerse',
    resumen: 'La organización ya cuenta con un sistema de calidad, pero necesita revisarlo, mantenerlo o mejorar su funcionamiento continuo.',
    preguntaTitulo: 'Quizás estés enfrentando:',
    preguntas: [
      'Documentación desactualizada o burocrática.',
      'Auditorías internas atrasadas o pendientes.',
      'Acciones correctivas (CAPA) sin cerrar.',
      'Procesos que necesitan revisión y falta de seguimiento.',
      'Dificultades operativas para mantener vivo el sistema.'
    ],
    objetivoLabel: 'El objetivo',
    objetivoTexto: 'Fortalecer el sistema existente y acompañar su mantenimiento y mejora continua.',
    btnTexto: 'Quiero fortalecer mi sistema'
  },
  {
    id: 'implementacion',
    numero: '06',
    tag: 'Estructuración Normativa',
    titulo: 'Necesito implementar un sistema de calidad',
    subtitulo: 'Quiero pasar de trabajar sin un sistema formal a tener una estructura de calidad',
    resumen: 'La empresa está creciendo y necesita comenzar a trabajar con un sistema de gestión organizado para responder a exigencias de mercado y normativas.',
    preguntaTitulo: 'Quizás estés buscando:',
    preguntas: [
      'Implementar la norma ISO 9001:2015.',
      'Trabajar bajo principios de Buenas Prácticas de Fabricación (GMP).',
      'Implementar buenas prácticas aplicables a productos cosméticos.',
      'Ordenar procesos, crear documentación y capacitar al equipo.',
      'Prepararte para una futura certificación o evaluación externa.'
    ],
    objetivoLabel: 'El objetivo',
    objetivoTexto: 'Construir e implementar un sistema de calidad adecuado a las características y necesidades de tu organización.',
    btnTexto: 'Quiero implementar un sistema'
  },
  {
    id: 'capacitacion',
    numero: '07',
    tag: 'Formación Técnica',
    titulo: 'Necesito capacitar a mi equipo',
    subtitulo: 'Quiero que mi equipo tenga los conocimientos necesarios para trabajar correctamente',
    resumen: 'Contás con personal nuevo, necesitás actualizar conocimientos o querés fortalecer las capacidades técnicas de tu laboratorio.',
    preguntaTitulo: 'Necesidades frecuentes de formación:',
    preguntas: [
      'Incorporación de nuevos operadores y analistas.',
      'Capacitación sobre equipos analíticos e instrumental.',
      'Buenas prácticas de trabajo y registro de datos.',
      'Procedimientos asociados a los equipos y estandarización de criterios.'
    ],
    pillsTitulo: 'Equipamiento analítico',
    pills: ['HPLC', 'Cromatografía Gaseosa (GC)', 'UV-Visible', 'IR / FTIR', 'Karl Fischer'],
    objetivoLabel: 'El objetivo',
    objetivoTexto: 'Fortalecer las capacidades técnicas del equipo y acompañar la correcta implementación de los procesos analíticos.',
    btnTexto: 'Quiero capacitar a mi equipo'
  },
  {
    id: 'cosmetica',
    numero: '08',
    tag: 'Industria Cosmética',
    titulo: 'Estoy desarrollando un proyecto cosmético',
    subtitulo: 'Quiero profesionalizar mi emprendimiento',
    resumen: 'Estoy desarrollando productos cosméticos y necesito pasar de una elaboración inicial o artesanal a una forma de trabajo más ordenada y profesional.',
    preguntaTitulo: 'Quizás estés buscando acompañamiento para:',
    preguntas: [
      'Ordenar procesos y mejorar la documentación de elaboración.',
      'Incorporar buenas prácticas de manufactura cosmética (ISO 22716).',
      'Comprender los requisitos normativos y sanitarios aplicables.',
      'Preparar una base de calidad sólida para el crecimiento de la marca.'
    ],
    pillsTitulo: 'Categorías de productos',
    pills: ['Shampoo', 'Acondicionadores', 'Cremas', 'Cuidado Personal'],
    objetivoLabel: 'El objetivo',
    objetivoTexto: 'Acompañar el desarrollo del proyecto para construir procesos ordenados y una base técnica adecuada para su escalado.',
    btnTexto: 'Quiero profesionalizar mi proyecto'
  },
  {
    id: 'asesoramiento',
    numero: '09',
    tag: 'Consultoría Estratégica',
    titulo: 'Necesito asesoramiento sobre calidad y requisitos regulatorios',
    subtitulo: 'No sé exactamente qué necesito, pero sé que necesito orientación',
    resumen: 'Tengo dudas sobre cómo organizar mi proyecto, qué requisitos debo considerar o cómo debería abordar una determinada situación técnica o regulatoria.',
    preguntaTitulo: 'Metodología de trabajo:',
    preguntas: [
      'Comprender la situación real y contexto operativo.',
      'Identificar necesidades críticas y brechas normativas.',
      'Establecer prioridades claras y cronograma.',
      'Definir un plan de trabajo concreto y aplicable.'
    ],
    pillsTitulo: 'Marcos y normativas aplicables',
    pills: ['Calidad', 'GMP', 'ISO 9001:2015', 'ISO 22716', 'ANMAT', 'SENASA'],
    objetivoLabel: 'Alcance del asesoramiento',
    objetivoTexto: 'Se determina a medida según la actividad, el producto, el establecimiento y los requisitos aplicables a cada proyecto.',
    btnTexto: 'Quiero contar mi situación'
  }
]

const abrirModal = (situacion) => {
  situacionSeleccionada.value = situacion
  document.body.style.overflow = 'hidden'
}

const cerrarModal = () => {
  situacionSeleccionada.value = null
  document.body.style.overflow = ''
}

onMounted(() => {
  const targetId = route.params.id || route.query.seccion
  if (targetId) {
    const sit = listaSituaciones.find(s => s.id === targetId)
    if (sit) {
      abrirModal(sit)
    }
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');

/* Estructura Base */
.situacion-view {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: #0B1E3D;
  background-color: #F6F7FB;
  width: 100%;
  min-height: 100vh;
}

.wrap {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* HERO SECTION - IGUAL A SERVICIOS */
.situacion-hero {
  background: 
    linear-gradient(90deg, rgba(8, 19, 43, 0.96) 0%, rgba(8, 19, 43, 0.85) 60%, rgba(8, 19, 43, 0.65) 100%),
    url('@/assets/laboratorio.png') no-repeat right center / cover;
  background-color: #08132B;
  color: #FFFFFF;
  padding: 80px 0 68px;
  border-bottom: 1px solid #26365E;
  text-align: left;
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

.situacion-hero h1 {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 3.2rem;
  font-weight: 600;
  line-height: 1.15;
  margin-bottom: 1.2rem;
  color: #FFFFFF;
  text-align: left;
}

.hero-subheading {
  font-size: 1.2rem;
  color: #B99B57;
  font-weight: 400;
  line-height: 1.4;
  margin-bottom: 1rem;
  max-width: 860px;
  text-align: left;
}

.situacion-hero .lead {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 820px;
  font-weight: 300;
  line-height: 1.6;
  margin-bottom: 0;
  text-align: left;
}

.main-content {
  padding-top: 50px;
  padding-bottom: 80px;
}

/* BANNER SUPERIOR: NO ENCONTRÁS TU SITUACIÓN */
.banner-no-situacion {
  background: #0B1E3D;
  border: 1px solid #26365E;
  border-left: 4px solid #B99B57;
  border-radius: 8px;
  margin-bottom: 48px;
  box-shadow: 0 10px 25px rgba(8, 19, 43, 0.08);
}

.banner-inner {
  padding: 36px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
}

@media (max-width: 860px) {
  .banner-inner {
    flex-direction: column;
    align-items: flex-start;
    padding: 28px 24px;
  }
}

.banner-text {
  flex: 1;
}

.badge-outline {
  display: inline-block;
  font-size: 0.75rem;
  letter-spacing: 1.5px;
  font-weight: 700;
  text-transform: uppercase;
  color: #B99B57;
  background: rgba(185, 155, 87, 0.12);
  padding: 4px 10px;
  border-radius: 4px;
  margin-bottom: 10px;
}

.banner-text h2 {
  font-family: 'Cormorant Garamond', Georgia, serif;
  color: #FFFFFF;
  font-size: 2rem;
  margin: 0 0 6px;
  font-weight: 600;
}

.banner-text .tagline {
  color: #B99B57;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 12px;
}

.banner-text .desc {
  color: rgba(255, 255, 255, 0.78);
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
  max-width: 720px;
}

.banner-action {
  flex-shrink: 0;
}

/* BOTONES */
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
  border: 1px solid #B99B57;
}

.btn-gold-action:hover {
  background-color: #a38544;
  transform: translateY(-2px);
}

/* GRILLA DE SITUACIONES (TARJETAS COMPACTAS) */
.situaciones-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 72px;
}

@media (max-width: 1080px) {
  .situaciones-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 720px) {
  .situaciones-grid {
    grid-template-columns: 1fr;
  }
}

.situation-card {
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

.situation-card:hover {
  transform: translateY(-4px);
  border-color: #1C3A6E;
  box-shadow: 0 16px 32px rgba(8, 19, 43, 0.08);
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

.situation-card h2 {
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

.situation-card:hover .card-action-link {
  color: #B99B57;
}

.arrow {
  transition: transform 0.2s ease;
  font-size: 1.1rem;
}

.situation-card:hover .arrow {
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

.modal-pills-box {
  margin-bottom: 1.5rem;
}

.modal-pills-box .pills-title {
  display: block;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #08132B;
  margin-bottom: 0.5rem;
}

.modal-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.modal-pills span {
  font-size: 0.75rem;
  font-weight: 600;
  background: #EEF2F6;
  color: #0B1E3D;
  padding: 4px 10px;
  border-radius: 4px;
  border: 1px solid #DCE3ED;
}

.modal-ideal {
  font-size: 0.88rem;
  color: rgba(11, 30, 61, 0.82);
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

/* SECCIÓN PASOS */
.section-steps {
  margin-top: 4rem;
  padding: 4rem 2.5rem;
  background-color: #FFFFFF;
  border: 1px solid #E2E5EE;
  border-radius: 6px;
}

.steps-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.steps-header .section-title {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 2.4rem;
  color: #08132B;
  margin: 0 0 6px;
}

.steps-header .section-subtitle {
  font-size: 1.05rem;
  color: rgba(11, 30, 61, 0.7);
  margin: 0;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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

.step-card .step-num {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 2rem;
  font-weight: 600;
  color: #B99B57;
  margin-bottom: 0.4rem;
  display: block;
}

.step-card h4 {
  font-size: 1.05rem;
  font-weight: 700;
  color: #08132B;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 0.6rem;
}

.step-card p {
  font-size: 0.88rem;
  color: rgba(11, 30, 61, 0.75);
  line-height: 1.5;
  margin: 0;
}

/* SECCIÓN CTA FINAL */
.section-cta-bottom {
  margin-top: 3.5rem;
}

.cta-card {
  background-color: #08132B;
  border: 1px solid #26365E;
  border-radius: 6px;
  padding: 3.5rem 3rem;
  text-align: center;
  color: #FFFFFF;
}

.cta-card h2 {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 2.4rem;
  margin: 0 0 8px;
  font-weight: 600;
}

.cta-card .cta-lead {
  color: #B99B57;
  font-size: 1.15rem;
  font-weight: 500;
  margin-bottom: 12px;
}

.cta-card .cta-sub {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  font-weight: 300;
  max-width: 620px;
  margin: 0 auto 28px;
  line-height: 1.6;
}

.cta-actions {
  display: flex;
  justify-content: center;
}
</style>