<template>
  <div class="home-container">
    <h1>Welcome to Home Page</h1>
    <div v-if="user" class="user-info">
      <p>Username: {{ user.data.username }}</p>
      <p>Role: {{ user.data.role }}</p>
      <button @click="handleLogout" class="btn btn-logout">Logout</button>
    </div>
    <div v-if="loading" class="loading">Loading user info...</div>
    <div v-if="error" class="error-message">{{ error }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { AuthService } from '../services/auth.service';

const user = ref(null);
const loading = ref(true);
const error = ref('');
const router = useRouter();

const fetchUserProfile = async () => {
  try {
    const data = await AuthService.getProfile();
    user.value = data;
  } catch (err: any) {
    error.value = 'Failed to load user info';
    console.error(err);
  } finally {
    loading.value = false;
  }
};

const handleLogout = () => {
  AuthService.logout();
  router.push('/login');
};

onMounted(fetchUserProfile);
</script>

<style scoped>
.home-container {
  text-align: center;
  margin-top: 50px;
}

.user-info {
  margin: 20px auto;
  max-width: 400px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.btn-logout {
  padding: 8px 16px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

.loading {
  color: #666;
}

.error-message {
  color: red;
}
</style>
