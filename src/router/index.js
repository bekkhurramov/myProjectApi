import {createRouter, createWebHistory} from "vue-router";
import Login from "../pages/Login.vue";
import Home from "../pages/Home.vue";
import {useAuthStore} from "../store/auth.js";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const auth = useAuthStore();

    if (!auth.isAuthenticated && to.meta.requiresAuth) next({name: "Login"});
    else if (auth.isAuthenticated && to.path === "/login") next({name: "Home"});
    else next();
});

export default router;
