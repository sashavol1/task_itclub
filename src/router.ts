import { createRouter, createWebHistory } from 'vue-router'

import Payment from "./screen/Payment.vue";
import ContactList from "./screen/ContactList.vue";
import ContactAdd from "./screen/ContactAdd.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Payment",
            component: Payment,
            meta: {
                page: 1
            }
        },
        {
            path: "/contact",
            name: "Contact",
            component: ContactList,
            meta: {
                page: 2
            }
        },
        {
            path: "/contact-add",
            name: "ContactAdd",
            component: ContactAdd,
            meta: {
                page: 3
            }
        },
    ]
});



export default router;
