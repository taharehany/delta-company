<template lang="pug">
//header
header 
    nav(class="navbar main-nav navbar-expand-lg")
        div(class="container-fluid")
            router-link(class="navbar-brand", to="/") 
                img(src="@/assets/images/logo.png", class="img-fluid" alt ="")
            div(class="group")
                button(class="navbar-toggler", type="button", data-bs-toggle="offcanvas", data-bs-target="#side_menu", aria-controls="side_menu", aria-expanded="false", aria-label="Toggle navigation")
                    div(class="hamburger-menu")
                        span
                        span
                        span
                div(class="lang")
                    div(class="dropdown")
                        router-link(to="/")
                            div(class="icon")
                                span Arabic
            div(class="collapse navbar-collapse" id="navbarNav")
                ul(class="navbar-nav")
                    li(class="nav-item active")
                        router-link(class="nav-link", aria-current="page", to="/" exact) home
                    li(class="nav-item")
                        router-link(class="nav-link", to="/about") about us
                    li(class="nav-item")
                        router-link(class="nav-link", to="/products") our products
                    li(class="nav-item")
                        router-link(class="nav-link", to="/contact") contact us
                    //- li(class="nav-item dropdown")
                        router-link(class="nav-link dropdown-toggle", to="/#", role="button", data-bs-toggle="dropdown", aria-expanded="false")
                            | account
                        ul(class="dropdown-menu")
                            li
                                router-link(class="dropdown-item", to="/profile") profile
                            li
                                router-link(class="dropdown-item", to="/wishlist") wishlist
                            li
                                router-link(class="dropdown-item", to="/account") login or register
                            li
                                router-link(class="dropdown-item", to="/")
                                    | logout 
    //navbar desktop

    //side menu in mobile only
    div(class="offcanvas offcanvas-start", id="side_menu" data-bs-scroll="true", tabindex="-1", aria-labelledby="side_menu_label")
        div(class="offcanvas-header")
            button(type="button", class="btn-close btn-close-dark", data-bs-dismiss="offcanvas", data-bs-target="#side_menu", aria-controls="side_menu" aria-label="Close")
        div(class="offcanvas-body")
            div(class="navbar")
                div(class="collapsed navbar-collapse" id="navbarNavSide")
                    ul(class="navbar-nav")
                        li(class="nav-item active")
                            router-link(class="nav-link", aria-current="page", to="/" exact) home
                        li(class="nav-item")
                            router-link(class="nav-link", to="/about") about
                        li(class="nav-item")
                            router-link(class="nav-link", to="/gallery") gallery
                        li(class="nav-item")
                            router-link(class="nav-link", to="/products") our products
                        li(class="nav-item")
                            router-link(class="nav-link", to="/contact") contact us
//header
</template>

<script>

export default {
	name: "Header",
};
</script>
