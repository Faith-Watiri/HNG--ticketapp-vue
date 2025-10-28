<template>
  <nav class="navbar">
    <h2 class="logo">TicketFlow</h2>
    <div class="links">
      <router-link to="/">Home</router-link>
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/tickets">Tickets</router-link>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: 1rem 2rem;
  background: #f8f9fa;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}
.logo {
  font-weight: bold;
}
.links a {
  margin-left: 1rem;
  text-decoration: none;
  color: #333;
}
</style>
