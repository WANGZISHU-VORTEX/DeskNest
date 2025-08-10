<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label>Username</label>
        <input type="text" v-model="username" required class="form-control" />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input
          type="password"
          v-model="password"
          required
          class="form-control"
        />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
      <p class="register-link">
        Don't have an account?
        <router-link to="/register">Register</router-link>
      </p>
    </form>
    <div v-if="error" class="error-message">{{ error }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { AuthService } from '../services/auth.service';

const username = ref('');
const password = ref('');
const error = ref('');
const router = useRouter();

const handleLogin = async () => {
  try {
    error.value = '';
    await AuthService.login(username.value, password.value);
    router.push('/');
  } catch (err) {
    error.value = err.response?.data?.message || 'Login failed';
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 15px;
}

.form-control {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
}

.btn {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.error-message {
  color: red;
  margin-top: 10px;
}

.register-link {
  margin-top: 15px;
  text-align: center;
}
</style>
