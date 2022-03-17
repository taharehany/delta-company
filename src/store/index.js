import { createStore } from 'vuex'
import axios from 'axios'
import router from '@/router'
axios.defaults.headers = {
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Expires': '0',
}
axios.defaults.baseURL = 'https://demoyoursite.net/taha/back/in-arabia/api/';
// axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';

//update localstorage cart
function updateCartStorage(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

export default createStore({
    state: {
        userData: JSON.parse(localStorage.getItem("user_data")),
        loading: true,
        formSent: null,
        contactErrorsApi: null,
        reviewErrorsApi: [],
        homeData: [],
        aboutData: [],
        productsData: [],
        settingsData: [],
        reviewsData: [],
        ordersData: [],
        locale: window.location.pathname.replace(/^\/([^/]+).*/i, "$1"),
        cart: [],
        // userData: [],
        // userWishlist: [],
        // lastOrder: [],
    },
    getters: {
        productQuantity: state => product => {
            const item = state.cart.find(i => i.id === product.id)
            if (item) {
                return item.quantity
            } else {
                return null
            }
        },
        cartTotal: state => {
            return state.cart.reduce((a, b) => a + (b.price * b.quantity), 0)
        },
        totalProducts: state => {
            return state.cart.length
        },
        cartItems: state => {
            return state.cart
        },
        // userData: state => {
        //     return state.userData
        // },
        // userWishlist: state => {
        //     return state.userWishlist
        // },
        // lastOrder: state => {
        //     return state.lastOrder
        // },
    },
    mutations: {
        setHomeData: (state, homeData) => (state.homeData = homeData),
        setAboutData: (state, aboutData) => (state.aboutData = aboutData),
        setProductsData: (state, productsData) => (state.productsData = productsData),
        setSettingsData: (state, settingsData) => (state.settingsData = settingsData),
        setReviewsData: (state, reviewsData) => (state.reviewsData = reviewsData),
        setOrdersData: (state, ordersData) => (state.ordersData = ordersData),

        addToCart(state, product) {
            let item = state.cart.find(i => i.id === product.id);

            if (item) {
                item.quantity++
            } else {
                state.cart.push({
                    ...product,
                    quantity: 1
                })
            }
            updateCartStorage(state.cart)
        },

        removeFromCart(state, product) {
            let item = state.cart.find(i => i.id === product.id);

            if (item) {
                if (item.quantity > 1) {
                    item.quantity--
                } else {
                    state.cart = state.cart.filter(i => i.id !== product.id)
                }
            }
            updateCartStorage(state.cart)
        },

        removeProduct(state, product) {
            let item = state.cart.find(i => i.id === product.id);

            if (item && item.quantity >= 1) {
                state.cart = state.cart.filter(i => i.id !== product.id);
            }

            updateCartStorage(state.cart)
        },

        destroyCart(state) {
            let cart = state.cart;

            if (cart) {
                cart = []
            }
            updateCartStorage(cart)
        },
        updateCartFromStorage(state) {
            const cart = localStorage.getItem("cart");

            if (cart) {
                state.cart = JSON.parse(cart)
            }
        },

        // createUserData(state) {
        //     localStorage.setItem("user_data", JSON.stringify(state.userData));
        // },

        // updateUserDataFromStorage(state) {
        //     const userData = localStorage.getItem("user_data");
        //     if (userData) {
        //         state.userData = JSON.parse(userData)
        //     }
        // },
        // updateUserWishlistFromStorage(state) {
        //     const userWishlist = localStorage.getItem("user_wishlist");
        //     if (userWishlist) {
        //         state.cart = JSON.parse(userWishlist)
        //     }
        // },
        // updateLastOrderFromStorage(state) {
        //     const lastOrder = localStorage.getItem("last_order");
        //     if (lastOrder) {
        //         state.cart = JSON.parse(lastOrder)
        //     }
        // },
    },
    actions: {
        addToCart: (context, product) => {
            context.commit('addToCart', product);
        },
        // createUserData: (context) => {
        //     context.commit('createUserData');
        // },

        async getHomeData({
            commit
        }) {
            this.state.loading = true;
            await axios
                .get("home", {
                    headers: {
                        "Content-Type": "application/json",
                        "Accept-Language": this.state.locale
                    },
                })
                .then((response) => {
                    this.state.loading = false;
                    commit("setHomeData", response.data.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        async getAboutData({
            commit
        }) {
            this.state.loading = true;
            await axios
                .get("about", {
                    headers: {
                        "Content-Type": "application/json",
                        "Accept-Language": this.state.locale
                    },
                })
                .then((response) => {
                    commit("setAboutData", response.data.data);
                    this.state.loading = false;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        async getProductsData({
            commit
        }) {
            this.state.loading = true;
            await axios
                .get("products", {
                    headers: {
                        "Content-Type": "application/json",
                        "Accept-Language": this.state.locale
                    },
                })
                .then((response) => {
                    commit("setProductsData", response.data.data);
                    this.state.loading = false;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        async getSettingsData({
            commit
        }) {
            await axios
                .get("settings", {
                    headers: {
                        "Content-Type": "application/json",
                        "Accept-Language": this.state.locale
                    },
                })
                .then((response) => {
                    commit("setSettingsData", response.data.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        async storeFormData({}, contactFormData) {
            await axios
                .post("contact", contactFormData, {
                    headers: {
                        "Content-Type": "application/json",
                        "Accept-Language": this.state.locale,
                    },
                })
                .then(() => {
                    this.state.contactErrorsApi = null
                })
                .catch((error) => {
                    this.state.contactErrorsApi = error.response;
                });
        },
        async storeReviewFormData({}, reviewFormData) {
            await axios
                .post("reviews", reviewFormData, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + this.state.userData.token,
                        "Accept-Language": this.state.locale
                    },
                    params: {
                        product_id: router.currentRoute.value.params.id,
                    }
                })
                .then(() => {
                    this.state.reviewErrorsApi = null
                })
                .catch((error) => {
                    this.state.reviewErrorsApi = error.response;
                });
        },
        async getReviewsData({
            commit
        }) {
            this.state.loading = true;
            await axios
                .get("show-reviews", {
                    headers: {
                        "Content-Type": "application/json",
                        "Accept-Language": this.state.locale
                    },
                    params: {
                        product_id: router.currentRoute.value.params.id,
                    }
                })
                .then((response) => {
                    commit("setReviewsData", response.data.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        async getOrdersData({
            commit
        }) {
            this.state.loading = true;
            await axios
                .get("orders", {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + this.state.userData.token,
                        "Accept-Language": this.state.locale
                    },
                })
                .then((response) => {
                    commit("setOrdersData", response.data.data);
                    this.state.loading = false;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
})