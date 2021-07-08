require('./bootstrap');

window.Vue = require('vue').default;

import Form from 'vform';
window.Form = Form;


import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter)

let routes = [
{
    path: '/data-user',
    component: require('./components/DataPengguna.vue').default
},
{
    path: '/data-level',
    component: require('./components/DataLevel.vue').default
}
]

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const router = new VueRouter({
    mode: 'history',
    routes
})

const app = new Vue({
    el: '#app',
    router
});
