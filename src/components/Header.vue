<script setup>
import { useAuthStore } from "../store/auth.js";

const auth = useAuthStore();

function logout() {
  auth.logout();

}
</script>

<template>
  <header class="  shadow-lg px-8 py-4 flex justify-between items-center">
    <h1 class="text-2xl font-extrabold tracking-wide hover:opacity-90 ">
      MyApp
    </h1>
    <button
        @click="logout"
        class="bg-white text-blue-600 font-semibold px-5 py-2 rounded-lg
             shadow-md hover:bg-gray-100 hover:scale-105
             active:scale-95 "
    >
      Logout
    </button>

  </header>
</template>

