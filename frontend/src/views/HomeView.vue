<template>
  <div class="home-view">
    <header class="home-hero">
      <div class="container hero-container">
        <span class="badge-gold">CONSULTORÍA EN CALIDAD Y PROCESOS</span>
        <h1 class="hero-title">
          Transformamos requisitos normativos en <span class="gold-text">soluciones prácticas</span> para tu industria
        </h1>
        <p class="hero-subtitle">
          Especialistas en aseguramiento de calidad, cumplimiento regulatorio y capacitación analítica para los sectores farmacéutico, veterinario, químico y cosmético.
        </p>
        <div class="hero-actions">
          <router-link to="/servicios" class="btn btn-gold">
            Explorar Servicios
          </router-link>
          <router-link to="/contacto" class="btn btn-outline-white">
            Solicitar una Consulta
          </router-link>
        </div>
      </div>
    </header>

    <section class="section challenges-section">
      <div class="container">
        <div class="section-header text-center">
          <span class="badge-tag">PUNTO DE PARTIDA</span>
          <h2 class="section-title">¿Cuál es el desafío de tu organización hoy?</h2>
          <p class="section-subtitle">
            Cada etapa exige un abordaje diferente. Hacé clic en tu situación para ver cómo podemos ayudarte:
          </p>
        </div>

        <div class="challenges-grid">
          <router-link to="/tu-situacion" class="challenge-card">
            <span class="card-num">01</span>
            <h3>Estoy comenzando</h3>
            <p>Bases sólidas, documentación y requisitos desde cero para nuevos proyectos.</p>
            <span class="card-link">Ver enfoque &rarr;</span>
          </router-link>

          <router-link to="/tu-situacion" class="challenge-card">
            <span class="card-num">02</span>
            <h3>Creciendo y desordenado</h3>
            <p>Estructuración y formalización de procesos que crecieron sin control.</p>
            <span class="card-link">Ver enfoque &rarr;</span>
          </router-link>

          <router-link to="/tu-situacion" class="challenge-card">
            <span class="card-num">03</span>
            <h3>Falta de documentación</h3>
            <p>Diseño de POEs, manuales y registros claros que el equipo realmente use.</p>
            <span class="card-link">Ver enfoque &rarr;</span>
          </router-link>

          <router-link to="/tu-situacion" class="challenge-card">
            <span class="card-num">04</span>
            <h3>Auditoría próxima</h3>
            <p>Diagnóstico de brechas, simulacros y preparación técnica rigurosa.</p>
            <span class="card-link">Ver enfoque &rarr;</span>
          </router-link>

          <router-link to="/tu-situacion" class="challenge-card">
            <span class="card-num">05</span>
            <h3>Exigencias regulatorias</h3>
            <p>Alineación con normativas ANMAT, SENASA, GMP e ISO 9001:2015.</p>
            <span class="card-link">Ver enfoque &rarr;</span>
          </router-link>

          <router-link to="/tu-situacion" class="challenge-card">
            <span class="card-num">06</span>
            <h3>Cosmética artesanal / natural</h3>
            <p>Profesionalización de fórmulas, buenas prácticas y habilitación.</p>
            <span class="card-link">Ver enfoque &rarr;</span>
          </router-link>
        </div>
      </div>
    </section>

    <section class="section industries-section">
      <div class="container">
        <div class="section-header text-center">
          <span class="badge-tag">SECTORES REGULADOS</span>
          <h2 class="section-title">Industrias que Acompañamos</h2>
        </div>

        <div class="industries-grid">
          <div class="industry-card">
            <div class="industry-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
              </svg>
            </div>
            <h3>Farmacéutica</h3>
            <p>Cumplimiento GMP, validaciones, control de calidad y sistemas de gestión estrictos.</p>
          </div>

          <div class="industry-card">
            <div class="industry-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <h3>Veterinaria</h3>
            <p>Normativas SENASA, aseguramiento de procesos y trazabilidad operativa integral.</p>
          </div>

          <div class="industry-card">
            <div class="industry-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M10 2v7.31L4.17 19.3A2 2 0 0 0 5.89 22h12.22a2 2 0 0 0 1.72-2.7L14 9.31V2"/>
              </svg>
            </div>
            <h3>Química & Laboratorios</h3>
            <p>Estandarización analítica, calibración, verificación de métodos e instrumental.</p>
          </div>

          <div class="industry-card">
            <div class="industry-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
            </div>
            <h3>Cosmética</h3>
            <p>Buenas prácticas de fabricación (BPF), formulación, registros y profesionalización.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section method-section">
      <div class="container">
        <div class="section-header text-center">
          <span class="badge-tag">MÉTODO PROBADO</span>
          <h2 class="section-title">¿Cómo Trabajamos?</h2>
          <p class="section-subtitle">Un proceso estructurado para garantizar resultados sostenibles en el tiempo:</p>
        </div>

        <div class="steps-grid">
          <div class="step-card">
            <span class="step-num">01</span>
            <h4>Diagnosticar</h4>
            <p>Evaluamos el estado real de tus procesos y documentación frente a las exigencias.</p>
          </div>
          <div class="step-card">
            <span class="step-num">02</span>
            <h4>Analizar</h4>
            <p>Identificamos brechas críticas y priorizamos acciones según impacto normativo y operativo.</p>
          </div>
          <div class="step-card">
            <span class="step-num">03</span>
            <h4>Desarrollar</h4>
            <p>Diseñamos herramientas, POEs y sistemas a medida de la dinámica de tu planta.</p>
          </div>
          <div class="step-card">
            <span class="step-num">04</span>
            <h4>Implementar</h4>
            <p>Acompañamos la puesta en marcha capacitando al personal para asegurar la adopción.</p>
          </div>
          <div class="step-card">
            <span class="step-num">05</span>
            <h4>Mejorar</h4>
            <p>Monitoreamos el desempeño mediante auditorías internas y ajustes continuos.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="training-highlight">
      <div class="container training-container">
        <div class="training-info">
          <span class="badge-gold">CAPACITACIÓN TÉCNICA ESPECIALIZADA</span>
          <h2 class="training-title">Formación práctica en instrumental analítico</h2>
          <p class="training-desc">
            Capacitamos a tu equipo de laboratorio en el uso riguroso, calibración y resolución de problemas operativos de las técnicas instrumentales más demandadas de la industria.
          </p>
          <div class="instruments-tags">
            <span class="inst-tag">HPLC</span>
            <span class="inst-tag">Cromatografía Gaseosa (GC)</span>
            <span class="inst-tag">UV-Visible</span>
            <span class="inst-tag">IR / FTIR</span>
            <span class="inst-tag">Karl Fischer</span>
          </div>
          <router-link to="/servicios" class="btn btn-gold">
            Ver Temarios de Capacitación
          </router-link>
        </div>
      </div>
    </section>

    <section class="section trust-section">
      <div class="container">
        <div class="trust-grid">
          <div class="trust-col">
            <span class="badge-tag">FLEXIBILIDAD</span>
            <h3 class="trust-title">Modalidad de Trabajo</h3>
            <p class="trust-text">Nos adaptamos a las necesidades geográficas y dinámicas de tu empresa:</p>
            
            <div class="modality-cards">
              <div class="mod-card">
                <div class="mod-icon">💻</div>
                <div>
                  <strong>Remoto</strong>
                  <p>Revisión documental, consultoría estratégica, auditorías remotas y seguimiento continuo.</p>
                </div>
              </div>
              <div class="mod-card">
                <div class="mod-icon">🏭</div>
                <div>
                  <strong>Presencial / In-Company</strong>
                  <p>Recorridos de planta, auditorías in situ y entrenamientos prácticos de laboratorio.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="trust-col">
            <span class="badge-tag">VALOR AGREGADO</span>
            <h3 class="trust-title">¿Por qué elegirnos?</h3>
            <ul class="reasons-list">
              <li>
                <span class="check-icon">✓</span>
                <div>
                  <strong>+25 años de experiencia real</strong>
                  <p>Trayectoria directa en plantas farmacéuticas y laboratorios de control.</p>
                </div>
              </li>
              <li>
                <span class="check-icon">✓</span>
                <div>
                  <strong>Soluciones aplicables, no solo teóricas</strong>
                  <p>Documentación ágil y procesos diseñados para operar sin burocracia inútil.</p>
                </div>
              </li>
              <li>
                <span class="check-icon">✓</span>
                <div>
                  <strong>Rigor científico y normativo</strong>
                  <p>Respaldado por formación sólida en Ciencias Químicas e investigación.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="home-bottom-cta">
      <div class="container text-center">
        <span class="badge-gold">PRIMERA CONVERSACIÓN TÉCNICA</span>
        <h2 class="bottom-cta-title">¿Tenés un proyecto en marcha o una auditoría próxima?</h2>
        <p class="bottom-cta-desc">
          Contanos tu situación y evaluemos juntos el alcance del trabajo sin compromiso.
        </p>
        <router-link to="/contacto" class="btn btn-gold">
          Solicitar Consulta Técnica
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
// No requiere lógica pesada, actúa como hub de navegación
</script>

<style lang="scss" scoped>
/* VARIABLES LOCALES (Consistentes con tu paleta global) */
$navy-950: #08132B;
$navy-900: #0B1E3D;
$navy-800: #122A54;
$navy-700: #1C3A6E;
$gold: #B99B57;
$gold-hover: #D4AF37;
$white: #FFFFFF;
$off-white: #F6F7FB;
$line-light: #E2E5EE;
$line-dark: #26365E;
$text-soft: rgba(255, 255, 255, 0.75);
$ink: #08132B;
$ink-soft: rgba(11, 30, 61, 0.72);

.home-view {
  color: $ink;
  background-color: $white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section {
  padding: 5rem 0;
}

.text-center {
  text-align: center;
}

/* BADGES & SUBTÍTULOS */
.badge-gold {
  display: inline-block;
  color: $gold;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  margin-bottom: 0.8rem;
}

.badge-tag {
  display: inline-block;
  color: $navy-700;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 0.6rem;
}

.section-header {
  max-width: 760px;
  margin: 0 auto 3.5rem;

  .section-title {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 2.3rem;
    font-weight: 600;
    color: $navy-950;
    margin: 0 0 0.8rem;
    line-height: 1.2;
  }

  .section-subtitle {
    font-size: 1.05rem;
    color: $ink-soft;
    line-height: 1.6;
    margin: 0;
  }
}

/* BOTONES */
.btn {
  display: inline-block;
  padding: 0.9rem 2rem;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s ease;
}

.btn-gold {
  background-color: $gold;
  color: $navy-950;
  border: 1px solid $gold;

  &:hover {
    background-color: $gold-hover;
    border-color: $gold-hover;
    transform: translateY(-2px);
  }
}

.btn-outline-white {
  background-color: transparent;
  color: $white;
  border: 1px solid rgba(255, 255, 255, 0.35);

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: $white;
    transform: translateY(-2px);
  }
}

/* 1. HERO HEADER */
.home-hero {
  background: 
    linear-gradient(90deg, rgba(8, 19, 43, 0.98) 0%, rgba(8, 19, 43, 0.85) 55%, rgba(8, 19, 43, 0.6) 100%),
    url('/hero-servicios-bg.jpg') no-repeat center center / cover;
  color: $white;
  padding: 6.5rem 0 5.5rem;
  border-bottom: 1px solid $line-dark;

  .hero-container {
    max-width: 860px;
  }

  .hero-title {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 3.2rem;
    font-weight: 600;
    line-height: 1.15;
    margin: 0 0 1.2rem;

    .gold-text {
      color: $gold;
    }
  }

  .hero-subtitle {
    font-size: 1.15rem;
    color: $text-soft;
    line-height: 1.65;
    max-width: 720px;
    margin: 0 0 2.2rem;
  }

  .hero-actions {
    display: flex;
    gap: 1.2rem;
    flex-wrap: wrap;
  }
}

/* 2. CHALLENGES / SITUACIONES GRID */
.challenges-section {
  background-color: $white;

  .challenges-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  .challenge-card {
    background-color: $off-white;
    border: 1px solid $line-light;
    border-radius: 4px;
    padding: 1.8rem;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    transition: all 0.25s ease;

    .card-num {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 1.8rem;
      font-weight: 600;
      color: $gold;
      margin-bottom: 0.5rem;
    }

    h3 {
      font-size: 1.15rem;
      font-weight: 700;
      color: $navy-950;
      margin: 0 0 0.6rem;
    }

    p {
      font-size: 0.92rem;
      color: $ink-soft;
      line-height: 1.55;
      margin: 0 0 1.2rem;
      flex-grow: 1;
    }

    .card-link {
      font-size: 0.82rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: $navy-700;
      transition: color 0.2s ease;
    }

    &:hover {
      border-color: $gold;
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(8, 19, 43, 0.06);

      .card-link {
        color: $gold;
      }
    }
  }
}

/* 3. INDUSTRIAS */
.industries-section {
  background-color: $off-white;
  border-top: 1px solid $line-light;
  border-bottom: 1px solid $line-light;

  .industries-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }

  .industry-card {
    background-color: $white;
    border: 1px solid $line-light;
    border-radius: 4px;
    padding: 2rem 1.5rem;
    text-align: center;

    .industry-icon {
      width: 48px;
      height: 48px;
      margin: 0 auto 1.2rem;
      color: $gold;

      svg {
        width: 100%;
        height: 100%;
      }
    }

    h3 {
      font-size: 1.1rem;
      font-weight: 700;
      color: $navy-950;
      margin: 0 0 0.6rem;
    }

    p {
      font-size: 0.88rem;
      color: $ink-soft;
      line-height: 1.5;
      margin: 0;
    }
  }
}

/* 4. METHODOLOGY STEPS */
.method-section {
  background-color: $white;

  .steps-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1.2rem;
  }

  .step-card {
    border-top: 2px solid $line-light;
    padding-top: 1.2rem;
    transition: border-color 0.25s ease;

    &:hover {
      border-color: $gold;
    }

    .step-num {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 1.8rem;
      font-weight: 600;
      color: $gold;
      display: block;
      margin-bottom: 0.3rem;
    }

    h4 {
      font-size: 1rem;
      font-weight: 700;
      color: $navy-950;
      margin: 0 0 0.5rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    p {
      font-size: 0.85rem;
      color: $ink-soft;
      line-height: 1.5;
      margin: 0;
    }
  }
}

/* 5. TRAINING HIGHLIGHT */
.training-highlight {
  background-color: $navy-900;
  border-top: 1px solid $line-dark;
  border-bottom: 1px solid $line-dark;
  padding: 4.5rem 0;
  color: $white;

  .training-container {
    max-width: 850px;
    text-align: center;
  }

  .training-title {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 2.4rem;
    font-weight: 600;
    color: $white;
    margin: 0 0 1rem;
  }

  .training-desc {
    font-size: 1.05rem;
    color: $text-soft;
    line-height: 1.65;
    margin: 0 0 2rem;
  }

  .instruments-tags {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.6rem;
    margin-bottom: 2.2rem;

    .inst-tag {
      background-color: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: $white;
      font-size: 0.82rem;
      font-weight: 600;
      padding: 0.4rem 0.9rem;
      border-radius: 20px;
    }
  }
}

/* 6. MODALIDAD & CONFIANZA */
.trust-section {
  background-color: $off-white;

  .trust-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3.5rem;
  }

  .trust-title {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 1.9rem;
    font-weight: 600;
    color: $navy-950;
    margin: 0 0 0.8rem;
  }

  .trust-text {
    font-size: 0.95rem;
    color: $ink-soft;
    margin: 0 0 1.8rem;
  }

  .modality-cards {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .mod-card {
      background: $white;
      border: 1px solid $line-light;
      border-radius: 4px;
      padding: 1.2rem;
      display: flex;
      gap: 1rem;
      align-items: flex-start;

      .mod-icon {
        font-size: 1.5rem;
      }

      strong {
        display: block;
        color: $navy-950;
        margin-bottom: 0.2rem;
      }

      p {
        font-size: 0.88rem;
        color: $ink-soft;
        margin: 0;
        line-height: 1.45;
      }
    }
  }

  .reasons-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    li {
      display: flex;
      gap: 0.9rem;
      align-items: flex-start;

      .check-icon {
        color: $gold;
        font-weight: 800;
        font-size: 1.1rem;
      }

      strong {
        display: block;
        color: $navy-950;
        margin-bottom: 0.2rem;
      }

      p {
        font-size: 0.88rem;
        color: $ink-soft;
        margin: 0;
        line-height: 1.45;
      }
    }
  }
}

/* 7. BANNER FINAL CTA */
.home-bottom-cta {
  background-color: $navy-950;
  color: $white;
  padding: 5rem 0;
  border-top: 1px solid $line-dark;

  .bottom-cta-title {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 2.4rem;
    font-weight: 600;
    color: $white;
    margin: 0 0 0.8rem;
  }

  .bottom-cta-desc {
    font-size: 1.05rem;
    color: $text-soft;
    max-width: 650px;
    margin: 0 auto 2rem;
    line-height: 1.6;
  }
}

/* RESPONSIVE */
@media (max-width: 992px) {
  .home-hero .hero-title {
    font-size: 2.5rem;
  }
  .challenges-section .challenges-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .industries-section .industries-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .method-section .steps-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .trust-section .trust-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}

@media (max-width: 600px) {
  .home-hero .hero-title {
    font-size: 2rem;
  }
  .challenges-section .challenges-grid,
  .industries-section .industries-grid,
  .method-section .steps-grid {
    grid-template-columns: 1fr;
  }
  .hero-actions {
    flex-direction: column;
  }
}
</style>