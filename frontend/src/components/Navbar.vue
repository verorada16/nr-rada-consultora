<template>
  <header class="main-header">
    <div class="header-container">
      <router-link to="/" class="brand-logo">
        <img src="@/assets/logo.jpg" alt="NR Consultora Logo" class="logo-img" />
        <div class="brand-text">
          <span class="brand-name">NR CONSULTORA</span>
          <span class="brand-tagline">CALIDAD Y PROCESOS</span>
        </div>
      </router-link>

      <nav class="nav-links">
        <router-link to="/" class="nav-link" active-class="active" exact>Inicio</router-link>
        <router-link to="/tu-situacion" class="nav-link" active-class="active">Tu Situación</router-link>
        <router-link to="/servicios" class="nav-link" active-class="active">Servicios</router-link>
        <router-link to="/sobre-mi" class="nav-link" active-class="active">Sobre Mí</router-link>
        <router-link to="/contacto" class="btn-cta">CONTACTO</router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
$navy-950: #08132B;
$gold: #B99B57;
$white: #FFFFFF;
$text-soft: rgba(255, 255, 255, 0.75);

.main-header {
  background-color: $navy-950;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.9rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  text-decoration: none;

  .logo-img {
    height: 44px;
    width: auto;
    object-fit: contain;
    border-radius: 4px;
  }

  .brand-text {
    display: flex;
    flex-direction: column;

    .brand-name {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 1.25rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      color: $white;
      line-height: 1.1;
    }

    .brand-tagline {
      font-family: 'Inter', sans-serif;
      font-size: 0.65rem;
      font-weight: 600;
      letter-spacing: 0.16em;
      color: $gold;
      margin-top: 2px;
    }
  }
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.8rem;

  .nav-link {
    font-family: 'Inter', sans-serif;
    color: $text-soft;
    text-decoration: none;
    font-size: 0.88rem;
    font-weight: 500;
    transition: color 0.2s ease;
    position: relative;
    padding-bottom: 4px;

    &:hover {
      color: $white;
    }

    &.active {
      color: $white;
      font-weight: 600;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: $gold;
      }
    }
  }
}

.btn-cta {
  font-family: 'Inter', sans-serif;
  background-color: $gold;
  color: $navy-950;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background-color: lighten($gold, 8%);
    transform: translateY(-1px);
  }
}
</style>