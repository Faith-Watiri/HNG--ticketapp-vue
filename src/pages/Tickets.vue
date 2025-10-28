<template>
  <div class="tickets max-container">
    <h1>My Tickets</h1>
    <div v-if="tickets.length === 0">
      <p>No tickets available. Create one soon!</p>
    </div>
    <div class="grid">
      <TicketCard
        v-for="ticket in tickets"
        :key="ticket.id"
        :ticket="ticket"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TicketCard from '@/components/TicketCard.vue'

interface Ticket {
  id: number
  title: string
  description: string
  status: string
}

const tickets = ref<Ticket[]>([
  {
    id: 1,
    title: 'Server downtime issue',
    description: 'Main server not responding since 8am.',
    status: 'Open'
  },
  {
    id: 2,
    title: 'Login error',
    description: 'Users report invalid token during login.',
    status: 'In Progress'
  }
])
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}
</style>
