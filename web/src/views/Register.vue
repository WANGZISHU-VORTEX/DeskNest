<template>
  <div class="register-container">
    <h2>Register</h2>
    <form @submit.prevent="handleRegister">
      <div class="form-group">
        <label>Username</label>
        <input type="text" v-model="username" required class="form-control" />
      </div>
      <div class="form-group">
        <label>Password (6-20 characters)</label>
        <input
          type="password"
          v-model="password"
          required
          class="form-control"
        />
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
      <p class="login-link">
        Already have an account? <router-link to="/login">Login</router-link>
      </p>
    </form>
    <div v-if="message" class="message">{{ message }}</div>
    <div v-if="error" class="error-message">{{ error }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { AuthService } from '../services/auth.service';

const username = ref('');
const password = ref('');
const message = ref('');
const error = ref('');
const router = useRouter();

const handleRegister = async () => {
  try {
    error.value = '';
    message.value = '';
    await AuthService.register(username.value, password.value);
    message.value = 'Registration successful! Please login.';
    setTimeout(() => {
      router.push('/login');
    }, 2000);
  } catch (err) {
    error.value = err.response?.data?.message || 'Registration failed';
  }
};
</script>

<style scoped>
/* 样式与登录页类似，可复用 */
.register-container {
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
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.message {
  color: green;
  margin-top: 10px;
}

.error-message {
  color: red;
  margin-top: 10px;
}

.login-link {
  margin-top: 15px;
  text-align: center;
}
</style>
