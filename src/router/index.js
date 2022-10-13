import BuS from "../view/Bus.vue"
import KapaL from "../view/Kapal.vue"
import MobiL from "../view/Mobil.vue"
import MotoR from "../view/Motor.vue"
import PesawaT from "../view/Pesawat.vue"
import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)
const routes = [
    {
        path: "/bus",
        name: "bus",
        component: BuS,
    },
    {
        path: "/kapal",
        name: "kapal",
        component: KapaL,
    },
    {
        path: "/mobil",
        name: "mobil",
        component: MobiL,
    },
    {
        path: "/",
        name: "motor",
        component: MotoR,
    },
    {
        path: "/pesawat",
        name: "pesawat",
        component: PesawaT,
    }
]



const router = new Router({
    routes,
    mode: "history",
});

export default router;