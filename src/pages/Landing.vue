<template>
  <section class="landing max-container">
    <div class="hero">
      <h1>Welcome to TicketFlow</h1>
      <p>Manage and track your support tickets effortlessly.</p>
      <router-link to="/auth/signup" class="btn">Get Started</router-link>
    </div>
    <img src="@/assets/wave.svg" alt="wave" class="wave" />
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.landing {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero p {
  color: #555;
  margin-bottom: 2rem;
}

.btn {
  background: #007bff;
  color: white;
  padding: 0.8rem 1.6rem;
  border-radius: 8px;
  text-decoration: none;
}

.wave {
  margin-top: 2rem;
  width: 100%;
}
</style>
