<template lang="pug">
//if review not sent
Toast(:showIfValue="alreadyReviewed" :message="$t('you_already_reviewed_this_product')" :success="false")

//if review sent
Toast(:showIfValue="sent" :message="$t('your_review_sent_successfully')" :success="true")

//single product
section(class="single-product")
    div(class="container")
        div(class="content")
            div(class="alert alert-success d-flex justify-content-between", role="alert" v-if="totalProducts")
                div(class="d-flex align-items-center")
                    svg(class="bi flex-shrink-0 me-2", width="24", height="24", role="img", aria-label="Success:")
                        use(xlink:href="#check-circle-fill")
                        symbol(fill="#8fae1b", id="check-circle-fill" viewBox="0 0 16 16")
                            path(d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z")
                    div {{ totalProducts }} {{ $t("products_added_to_your_cart") }}.
                router-link(to="/cart" class="btn")
                    i(class="bi bi-cart-check me-1")
                    | {{ $t("view_cart") }}
            div(class="single-product-details")
                div(class="row")
                    div(class="col-lg-5 col-md-6")
                        div(class="image")
                            a(:href="product.image" data-fancybox :data-caption="product.title") 
                                img(v-lazy="product.image" class="img-fluid" :alt="product.image_alt")
                    div(class="col-lg-7 col-md-6")
                        div(class="text")
                            h3 {{ product.title }}
                            span(class="badge" v-if="product.stock == 'yes'") {{ $t('in_stock') }}
                            span(class="badge" v-else) {{ $t('out_of_stock') }}
                            p {{ product.description }}
                            div(class="btns" v-if="userDataCheck && productTotal(product) <= 0 && product.stock == 'yes'")
                                a(class="btn cart-btn" @click="addToCart()") 
                                    i(class="bi bi-cart") 
                                    span  {{ $t('add_to_cart') }}
                            div(class="btns" v-if="userDataCheck && productTotal(product) > 0")
                                a(class="btn added") 
                                    i(class="bi bi-check")
                            div(class="btns" v-if="!userData")
                                router-link(to="/account" class="btn cart-btn") 
                                    i(class="bi bi-cart") 
                                    span  {{ $t('add_to_cart') }}
                            hr
                            div(class="categories")
                                p 
                                    span {{ $t("categories") }}: 
                                    router-link(to="/products", rel="tag") {{ categoryTitle }}
                            div(class="social-share")
                                p {{ $t('share_this_product') }}
                                ul
                                    li
                                        ShareNetwork(class="facebook" network="facebook", :url="pageUrl.href", :title="product.title", :description="product.description", quote="", hashtags="")
                                            i(class="bi bi-facebook") 
                                    li
                                        ShareNetwork(class="twitter" network="twitter", :url="pageUrl.href", :title="product.title")
                                            i(class="bi bi-twitter")
                                    li
                                        ShareNetwork(class="pinterest" network="Pinterest", :media="product.image", :title="product.title")
                                            i(class="bi bi-pinterest")
                                    li
                                        ShareNetwork(class="whatsapp" network="whatsapp", :url="pageUrl.href", :media="product.image" :title="product.title",)
                                            i(class="bi bi-whatsapp")
//single product

//single product details
section(class="single-product-tabs" v-if="!loading")
    div(class="container")
        div(class="content")
            ul(class="nav nav-pills", role="tablist")
                li(class="nav-item", role="presentation")
                    button(class="nav-link active", id="single-1-tab" data-bs-toggle="pill", data-bs-target="#single-1", type="button", role="tab", aria-controls="single-1", aria-selected="true") {{ $t('description') }}
                li(class="nav-item", role="presentation")
                    button(class="nav-link", id="single-2-tab" data-bs-toggle="pill", data-bs-target="#single-2", type="button", role="tab", aria-controls="single-2", aria-selected="false") {{ $t('reviews') }} ({{ reviewsData.count }})
            div(class="tab-content")
                div(class="tab-pane fade show active", id="single-1" role="tabpanel", aria-labelledby="single-1-tab") 
                    div(class="products-content")
                        div(v-html="product.details")
                div(class="tab-pane fade", id="single-2" role="tabpanel", aria-labelledby="single-2-tab") 
                    div(class="products-content")
                        div(class="row")
                            div(class="col-lg-6")
                                div(class="reviews-form")
                                    h3(class="subtitle") {{ $t('add_review') }}
                                    p(class="hint") {{ $t('your_email_address_will_not_be_published') }}.
                                    div(class="product-rating")
                                        div(class="rating-field")
                                            p {{ $t('rating') }}: 
                                            vue3-star-ratings(v-model="reviewFormData.rate" :step="0.5" :showControl="false" :starSize="18")
                                        div(class="invalid-feedback" v-if="reviewErrors.rate && !sent" v-for="error in reviewErrors.rate") {{ error }}
                                    form(enctype="multipart/form-data" @submit.prevent="handleReviewForm")
                                        div(class="row")
                                            div(class="col-md-12 form-group")
                                                textarea(class="form-control" :placeholder="$t('review_message')" rows="7" name="review" v-model="reviewFormData.review")
                                                div(class="invalid-feedback" v-if="reviewErrors.review && !sent" v-for="error in reviewErrors.review") {{ error }}
                                        div(class="btn-form")
                                            button(type="submit" class="btn primary" name="button" v-if="userData") 
                                                span(v-if="!sending") {{ $t('send_review') }}
                                                span(v-if="sending") {{ $t('sending') }}
                                                div(class="spinner-border text-light", role="status" v-if="sending")
                                                    span(class="visually-hidden") Loading...
                                            router-link(to="/account" class="btn primary" v-if="!userData") {{ $t('login_to_review') }}
                            div(class="col-lg-6")
                                div(class="reviews-content")
                                    div(class="reviews-title" v-if="reviewsData.count !== 0")
                                        h3 {{ $t('reviews') }} 
                                        button(class="btn" type="button", data-bs-toggle="modal", data-bs-target="#reviewsModal") {{ $t('all_reviews') }}
                                    div(class="nodata" v-else)
                                        p(class="nodata-text")
                                            strong {{ $t('no_reviews') }}
                                    ul(v-if="reviewsData.reviews !== undefined")
                                        li(class="review-item" v-for="review in reviewsData.reviews.slice(0, 3)" :key="review.id")
                                            img(src="@/assets/images/blank.png", alt="review author")
                                            div(class="review-body")
                                                div(class="product-rating")
                                                    span(class="ratyli")
                                                h5 {{ review.name }}
                                                span {{ review.created_at }}
                                                p {{ review.review }}
            div(class="modal reviews-modal fade", id="reviewsModal" tabindex="-1", aria-labelledby="reviewsModalLabel", aria-hidden="true")
                div(class="modal-dialog modal-lg")
                    div(class="modal-content")
                        div(class="modal-header")
                            h5(class="modal-title" id="reviewsModalLabel") {{ $t('all_reviews') }}
                            button(type="button", class="btn-close btn-close-white", data-bs-dismiss="modal", aria-label="Close")
                        div(class="modal-body")
                            div(class="reviews-content")
                                ul(v-if="reviewsData.reviews !== undefined")
                                    li(class="review-item" v-for="review in reviewsData.reviews.slice(0, 3)" :key="review.id")
                                        img(src="@/assets/images/blank.png", alt="review author")
                                        div(class="review-body")
                                            div(class="product-rating")
                                                span(class="ratyli")
                                            h5 {{ review.name }}
                                            span {{ review.created_at }}
                                            p {{ review.review }}
//single product details
</template>

<script>
import { Fancybox } from "@fancyapps/ui"
import vue3starRatings from "vue3-star-ratings";
import Toast from "@/components/global/Toast.vue";
import { mapState, mapActions } from "vuex";

export default {
	name: "ProductDetails",
	props: {
		product: Array,
		categories: Array,
	},
	components: {
		vue3starRatings,
		Toast,
		Fancybox,
	},
	data: () => ({
		userDataCheck: localStorage.getItem("user_data"),
		userData: JSON.parse(localStorage.getItem("user_data")),
		sent: false,
		sending: false,
		alreadyReviewed: null,
		reviewFormData: {
			name: null,
			email: null,
			review: null,
			rate: null,
		},
		reviewErrors: {
			name: null,
			email: null,
			review: null,
			rate: null,
		},
		pageUrl: window.location,
	}),
	computed: {
		...mapState(["reviewsData"]),
		totalProducts() {
			return this.$store.getters.totalProducts;
		},
		categoryTitle() {
			if (this.categories) {
				return this.categories.map(element => element.title).join(" | ")
			}
		},
	},
	methods: {
		...mapActions(["storeReviewFormData"]),
		addToCart() {
			this.$store.commit("addToCart", this.product);
		},
		productTotal(total) {
			return this.$store.getters.productQuantity(total);
		},
		handleReviewForm(e) {
			this.alreadyReviewed = null;
			this.sending = true;
			this.storeReviewFormData(this.reviewFormData).then(() => {
				if (!this.$store.state.reviewErrorsApi) {
					e.target.reset();
					this.sent = true;
					this.sending = false;
					this.reviewFormData.name = null;
					this.reviewFormData.email = null;
					this.reviewFormData.review = null;
					this.reviewFormData.rate = null;
				} else {
					this.sending = false;
					this.sent = false;

					let errors = this.$store.state.reviewErrorsApi.data.data;
					if (errors.length == 0) {
						this.alreadyReviewed = true
					} else {
						this.reviewErrors.name = errors.name;
						this.reviewErrors.email = errors.email;
						this.reviewErrors.review = errors.review;
						this.reviewErrors.rate = errors.rate;
					}
				}
			});
		},
	},
	created() {
		this.$store.dispatch("getReviewsData");
	},
};
</script>

<style lang="scss" scoped>
.vue3-star-ratings__wrapper {
	display: block !important;
	margin: 0 !important;
	text-align: center !important;
	padding: 0 !important;
	direction: ltr;
}
</style>