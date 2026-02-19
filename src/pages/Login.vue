<script setup>
import { ref } from "vue";
import { useAuthStore } from "../store/Auth.js";
const auth = useAuthStore();
const phone = ref("");
const password = ref("");
async function handleLogin() {
  const result = await auth.login({
    phoneNumber: phone.value,
    password: password.value,
  });
}

</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
    <div class="w-full max-w-md bg-white shadow-2xl rounded-3xl p-10">

      <h2 class="text-4xl font-extrabold text-center text-blue-600 mb-2">Login</h2>
      <p class="text-gray-500 text-center mb-8">
        Accountga kirish uchun ma’lumot kiriting
      </p>

      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label class="block text-gray-700 font-medium mb-1">Phone Number</label>
          <input
              v-model="phone"
              type="text"
              placeholder="+998914542339"
              class="w-full border border-gray-300 px-4 py-3 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          />
        </div>

        <div>
          <label class="block text-gray-700 font-medium mb-1">Password</label>
          <input
              v-model="password"
              type="password"
              placeholder="********"
              class="w-full border border-gray-300 px-4 py-3 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          />
        </div>

        <button
            type="submit"
            class="w-full bg-blue-600 text-white font-semibold py-3 rounded-2xl hover:bg-blue-700 transition-all shadow-lg"
        >
          Login
        </button>
      </form>

    </div>
  </div>
</template>
