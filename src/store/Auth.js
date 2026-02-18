import { defineStore } from "pinia";
import axios from "axios";
import { useToast } from "vue-toastification";
import router from "../router/index.js";

const toast = useToast();

export const useAuthStore = defineStore("auth", {
    state: () => ({
        token: localStorage.getItem("token") || null,
    }),
    getters: {
        isAuthenticated: (state) => !!state.token,
    },
    actions: {
        async login(credentials) {
            try {
                const res = await axios.post(
                    `${import.meta.env.VITE_BASE_URL}Accounts/login`,
                    credentials
                );

                if (res.data.token) {
                    this.token = res.data.token;
                    localStorage.setItem("token", this.token);
                    router.push("/");
                    toast.success("nma gap ukam");
                    return true;
                } else {
                    router.push("/login");


                }
            } catch (err) {
               console.log("error", err);
                toast.error("Login failed.");
            }
        },

        logout() {
            this.token = null;
            localStorage.removeItem("token");
            router.push("/login");
            toast.warning("yaaa nimaga chiqib ketding");

        },
    },
});
