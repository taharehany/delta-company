import { createStore } from 'vuex'
import axios from 'axios'
axios.defaults.baseURL = 'https://demoyoursite.net/taha/back/right-treatment-back/api/';
// axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';

export default createStore({
    state: {
        loading:true,
        loadingError:false,
        homeApiData: [],
        formSent: null,
        ratingFormSent: null,
        bookingFormSent: null,
        servicesApiData: [],
        sliderApiData: [],
        aboutApiData: [],
        formHomeApiData: [],
        teamApiData: [],
        testimonialsApiData: [],
        partnersApiData: [],
        settingsApiData: [],
        formData: [],
        ratingFormData: [],
    },
    getters: {
        allHomeApiData: (state) => state.homeApiData,
        allServicesApiData: (state) => state.servicesApiData,
        allSliderApiData: (state) => state.sliderApiData,
        allAboutApiData: (state) => state.aboutApiData,
        allFormHomeApiData: (state) => state.formHomeApiData,
        allTeamApiData: (state) => state.teamApiData,
        allTestimonialsApiData: (state) => state.testimonialsApiData,
        allPartnersApiData: (state) => state.partnersApiData,
        allSettingsApiData: (state) => state.settingsApiData,
    },
    actions: {
        // async getServicesApiData({ commit }) {
        //     const response = await axios.get("services");
        //     commit("setServicesApiData", response.data);
        // },
        async getHomeApiData({ commit }) {
            this.state.loading = true;  
            axios
                .get("/home", {
                    headers: {},
                })
                .then((getData) => {
                    let homeApiData = getData.data;
                    this.state.loading = false; 
                    commit("setHomeApiData", homeApiData);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        async getServicesApiData({ commit }) {
            this.state.loading = true;
            this.state.loadingError = false;
            axios
                .get("services", {
                    headers: {},
                })
                .then((getData) => {
                    let servicesApiData = getData.data;
                    this.state.loading = false;
                    commit("setServicesApiData", servicesApiData);
                })
                .catch((error) => {
                    console.log(error);
                    this.state.loadingError = true;
                });
        },
        async getSliderApiData({ commit }) {
            axios
                .get("slider", {
                    headers: {},
                })
                .then((getData) => {
                    let sliderApiData = getData.data;
                    commit("setSliderApiData", sliderApiData);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        async getAboutApiData({ commit }) {
            this.state.loading = true;
            axios
                .get("about", {
                    headers: {},
                })
                .then((getData) => {
                    let aboutApiData = getData.data;
                    this.state.loading = false;
                    commit("setAboutApiData", aboutApiData);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        async getFormHomeApiData({ commit }) {
            axios
                .get("form-home", {
                    headers: {},
                })
                .then((getData) => {
                    let formHomeApiData = getData.data;
                    commit("setFormHomeApiData", formHomeApiData);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        async getTeamApiData({ commit }) {
            this.state.loading = true;
            axios
                .get("team", {
                    headers: {},
                })
                .then((getData) => {
                    let teamApiData = getData.data;
                    this.state.loading = false;
                    commit("setTeamApiData", teamApiData);
                    return true;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        async getTestimonialsApiData({ commit }) {
            axios
                .get("testimonials", {
                    headers: {},
                })
                .then((getData) => {
                    let testimonialsApiData = getData.data;
                    commit("setTestimonialsApiData", testimonialsApiData);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        async getPartnersApiData({ commit }) {
            axios
                .get("clients", {
                    headers: {},
                })
                .then((getData) => {
                    let partnersApiData = getData.data;
                    commit("setPartnersApiData", partnersApiData);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        async getSettingsApiData({ commit }) {
            axios
                .get("settings", {
                    headers: {},
                })
                .then((getData) => {
                    let settingsApiData = getData.data;
                    commit("setSettingsApiData", settingsApiData);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        async storeFormData({ commit }, formDataFields) {
            await axios
                .post("contact", { formDataFields })
                .then((result) => {
                    this.state.formSent = true; //If Data Sent
                    // console.log(result);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        async storeRatingFormData({ commit }, ratingDataFields) {
            await axios
                .post("rating", { ratingDataFields })
                .then((result) => {
                    this.state.ratingFormSent = true; //If Data Sent
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        async storeBookingFormData({ commit }, bookingDataFields) {
            await axios
                .post("booking", { bookingDataFields })
                .then((result) => {
                    this.state.bookingFormSent = true; //If Data Sent
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
    mutations: {
        setHomeApiData: (state, homeApiData) => (state.homeApiData = homeApiData),
        setServicesApiData: (state, servicesApiData) => (state.servicesApiData = servicesApiData),
        setSliderApiData: (state, sliderApiData) => (state.sliderApiData = sliderApiData),
        setAboutApiData: (state, aboutApiData) => (state.aboutApiData = aboutApiData),
        setFormHomeApiData: (state, formHomeApiData) => (state.formHomeApiData = formHomeApiData),
        setTeamApiData: (state, teamApiData) => (state.teamApiData = teamApiData),
        setTestimonialsApiData: (state, testimonialsApiData) => (state.testimonialsApiData = testimonialsApiData),
        setPartnersApiData: (state, partnersApiData) => (state.partnersApiData = partnersApiData),
        setSettingsApiData: (state, settingsApiData) => (state.settingsApiData = settingsApiData),
    },
    modules: {}
})