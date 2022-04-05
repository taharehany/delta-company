import { createStore } from 'vuex'
import axios from 'axios'

// axios.defaults.baseURL = 'https://demoyoursite.net/taha/back/abdullah/api/';
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';

export default createStore({
    state: {
        homeData: null,
        aboutData: null,
        servicesData: null,
        teamData: null,
        blogsData: null,
        settingsData: null,
        contactErrorsApi: null,
        loading: true,
    },
    mutations: {
        setHomeData: (state, homeData) => (state.homeData = homeData),
        setAboutData: (state, aboutData) => (state.aboutData = aboutData),
        setServicesData: (state, servicesData) => (state.servicesData = servicesData),
        setTeamData: (state, teamData) => (state.teamData = teamData),
        setBlogsData: (state, blogsData) => (state.blogsData = blogsData),
        setSettingsData: (state, settingsData) => (state.settingsData = settingsData),
    },
    actions: {
        async getHomeData({ commit }) {
            this.state.loading = true;
            await axios
                .get("home", {
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                .then((response) => {
                    this.state.loading = false;
                    commit("setHomeData", response.data.data);
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        async getAboutData({ commit }) {
            this.state.loading = true;
            await axios
                .get("about", {
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                .then((response) => {
                    this.state.loading = false;
                    commit("setAboutData", response.data.data);
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        async getServicesData({ commit }) {
            this.state.loading = true;
            await axios
                .get("services", {
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                .then((response) => {
                    this.state.loading = false;
                    commit("setServicesData", response.data.data);
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        async getTeamData({ commit }) {
            this.state.loading = true;
            await axios
                .get("team", {
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                .then((response) => {
                    this.state.loading = false;
                    commit("setTeamData", response.data.data);
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        async getBlogsData({ commit }) {
            this.state.loading = true;

            await axios
                .get("blogs", {
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                .then((response) => {
                    this.state.loading = false;
                    commit("setBlogsData", response.data.data);
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        async getSettingsData({ commit }) {
            await axios
                .get("settings", {
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                .then((response) => {
                    commit("setSettingsData", response.data.data);
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        async storeFormData({}, contactFormData) {
            await axios
                .post("contact", contactFormData, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then(() => {
                    this.state.contactErrorsApi = null
                })
                .catch((error) => {
                    this.state.contactErrorsApi = error.response;
                });
        },
    },
})