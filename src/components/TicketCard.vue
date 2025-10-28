<template>
  <div class="ticket-card">
    <h3>{{ ticket.title }}</h3>
    <p>{{ ticket.description }}</p>
    <p class="status">Status: <strong>{{ ticket.status }}</strong></p>
  </div>
</template>

<script setup lang="ts">
interface Ticket {
  id: number
  title: string
  description: string
  status: string
}

defineProps<{ ticket: Ticket }>()
</script>

<style scoped>
.ticket-card {
  border: 1px solid #eee;
  padding: 1rem;
  border-radius: 12px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}
.status {
  color: #007bff;
  margin-top: 0.5rem;
}
</style>
