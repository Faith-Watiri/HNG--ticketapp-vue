<template>
  <div class="auth max-container">
    <h2>Sign Up</h2>
    <form @submit.prevent="handleSignup">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit" class="btn">Create Account</button>
    </form>
    <p>Already have an account? <router-link to="/auth/login">Login</router-link></p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/context/AuthContext'

const router = useRouter()
const { login } = useAuth()
const email = ref('')
const password = ref('')

const handleSignup = () => {
  // Mock signup logic (could be replaced with API call)
  login({ email: email.value, password: password.value })
  router.push('/dashboard')
}
</script>

<style scoped>
.auth {
  max-width: 400px;
  margin: 4rem auto;
  text-align: center;
}
input {
  display: block;
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
}
.btn {
  width: 100%;
  background: #007bff;
  color: white;
  padding: 0.8rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>
