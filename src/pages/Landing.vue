<template>
  <section class="landing-container">
    <!-- Decorative Circle -->
    <div class="circle-deco"></div>

    <!-- Landing Content -->
    <div class="landing-content">
      <h1>TicketFlow</h1>
      <p>
        Manage support tickets seamlessly – track, resolve, and organize tasks efficiently.
      </p>

      <div class="landing-buttons">
        <RouterLink to="/auth/login" class="btn primary-btn">Login</RouterLink>
        <RouterLink to="/auth/signup" class="btn secondary-btn">Get Started</RouterLink>
      </div>
    </div>

    <!-- Wavy Background -->
    <svg
      class="wave"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#1e1e2f"
        fill-opacity="1"
        d="M0,224L60,186.7C120,149,240,75,360,69.3C480,64,600,128,720,138.7C840,149,960,107,1080,106.7C1200,107,1320,149,1380,170.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      ></path>
    </svg>
  </section>
</template>

<script setup>
// no script needed for now
</script>

<style scoped>
.wave {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
