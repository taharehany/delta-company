import { createStore } from 'vuex'
import axios from 'axios'
// axios.defaults.baseURL = 'https://demoyoursite.net/taha/back/in-arabia/api/';
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';

let locale = window.location.pathname.replace(/^\/([^/]+).*/i, "$1")

export default createStore({
    state: {
        formSent: null,
        contactErrorsApi: null,
        homeData: [],
        aboutData: [],
        productsData: [],
        settingsData: [],
    },
    mutations: {
        setHomeData: (state, homeData) => (state.homeData = homeData),
        setAboutData: (state, aboutData) => (state.aboutData = aboutData),
        setProductsData: (state, productsData) => (state.productsData = productsData),
        setSettingsData: (state, settingsData) => (state.settingsData = settingsData),
    },
    actions: {
        async getHomeData({ commit }) {
            await axios
                .get("home", {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    params: {
                        lang: locale
                    }
                })
                .then((result) => {
                    // console.log(result.data);
                    commit("setHomeData", result.data.data)
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        async getAboutData({ commit }) {
            await axios
                .get("about", {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    params: {
                        lang: locale
                    }
                })
                .then((result) => {
                    commit("setAboutData", result.data.data)
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        async getProductsData({ commit }) {
            await axios
                .get("products", {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    params: {
                        lang: locale
                    }
                })
                .then((result) => {
                    commit("setProductsData", result.data.data)
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        async getSettingsData({ commit }) {
            await axios
                .get("settings", {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    params: {
                        lang: locale
                    }
                })
                .then((result) => {
                    commit("setSettingsData", result.data.data)
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        async storeFormData({}, contactFormData) {
            await axios
                .post("contact", { contactFormData })
                .then(() => {
                    // this.state.formSent = true;
                    this.state.contactErrorsApi = null
                })
                .catch((error) => {
                    this.state.contactErrorsApi = error.response;
                });
        },
    },
})