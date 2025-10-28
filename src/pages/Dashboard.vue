<template>
  <div class="dashboard max-container">
    <h1>Dashboard</h1>
    <p>Welcome back, {{ user?.email }}</p>

    <div class="actions">
      <router-link to="/tickets" class="btn">View Tickets</router-link>
      <button @click="logout" class="btn logout">Logout</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from '@/context/AuthContext'

const { user, logout } = useAuth()
</script>

<style scoped>
.dashboard {
  padding: 2rem;
}
.actions {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
}
.btn {
  background: #007bff;
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
}
.logout {
  background: #dc3545;
}
</style>
