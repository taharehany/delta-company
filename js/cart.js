// ************************************************
// Shopping Cart API
// ************************************************

var shoppingCart = (function () {
    // =============================
    // Private methods and propeties
    // =============================
    cart = [];

    // Constructor
    function Item(name, price, count) {
        this.name = name;
        this.price = price;
        this.count = count;
    }

    // Save cart
    function saveCart() {
        sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
    }

    // Load cart
    function loadCart() {
        cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
    }
    if (sessionStorage.getItem("shoppingCart") != null) {
        loadCart();
    }


    // =============================
    // Public methods and propeties
    // =============================
    var obj = {};

    // Add to cart
    obj.addItemToCart = function (name, price, count) {
        for (var item in cart) {
            if (cart[item].name === name) {
                cart[item].count++;
                saveCart();
                return;
            }
        }
        var item = new Item(name, price, count);
        cart.push(item);
        saveCart();
    }
    // Set count from item
    obj.setCountForItem = function (name, count) {
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count = count;
                break;
            }
        }
    };
    // Remove item from cart
    obj.removeItemFromCart = function (name) {
        for (var item in cart) {
            if (cart[item].name === name) {
                cart[item].count--;
                if (cart[item].count === 0) {
                    cart.splice(item, 1);
                }
                break;
            }
        }
        saveCart();
    }

    // Remove all items from cart
    obj.removeItemFromCartAll = function (name) {
        for (var item in cart) {
            if (cart[item].name === name) {
                cart.splice(item, 1);
                break;
            }
        }
        saveCart();
    }

    // Clear cart
    obj.clearCart = function () {
        cart = [];
        $('.total-count').html(0);
        $('.add_to_cart').removeClass("added").find("i").removeClass("bi-check2-all").addClass("bi-cart");;
        saveCart();
    }

    // Count cart 
    obj.totalCount = function () {
        var totalCount = 0;
        for (var item in cart) {
            totalCount += cart[item].count;
        }
        return totalCount;
    }

    // Total cart
    obj.totalCart = function () {
        var totalCart = 0;
        for (var item in cart) {
            totalCart += cart[item].price * cart[item].count;
        }
        return Number(totalCart.toFixed(2));
    }

    // List cart
    obj.listCart = function () {
        var cartCopy = [];
        for (i in cart) {
            item = cart[i];
            itemCopy = {};
            for (p in item) {
                itemCopy[p] = item[p];

            }
            itemCopy.total = Number(item.price * item.count).toFixed(2);
            cartCopy.push(itemCopy)
        }
        return cartCopy;
    }
    return obj;
})();


// *****************************************
// Triggers / Events
// ***************************************** 
// Add item
$('.add_to_cart').click(function (event) {
    event.preventDefault();
    if (!$(this).hasClass("added")) {
        var name = $(this).data('name');
        var price = Number($(this).data('price'));
        shoppingCart.addItemToCart(name, price, 1);
        displayCart();
    } else {
        return false;
    }
});

// Clear items
$('.clear-cart').click(function () {
    shoppingCart.clearCart();
    displayCart();
});

function displayCart() {
    var cartArray = shoppingCart.listCart();
    var output = "";
    // var outputSingleProduct = "";
    if (cart == '') {
        $('.there-products').css("display", "none");
        $('.no-products').css("display", "block");
        $('.show-cart').html("");
    } else {
        $('.there-products').css("display", "block");
        $('.no-products').css("display", "none");
        for (var i in cartArray) {
            output += 
            `<div class="single">
                <button class="delete-item btn btn-danger" data-name="${cartArray[i].name}">&times;</button>
                <a href="single-product.html"> 
                    <div class="image">
                        <img class="img-fluid" alt="" src="images/products/01.png" style="">
                    </div>
                </a>
                <div class="text">
                    <a href="single-product.html"> 
                        <h3>${cartArray[i].name}</h3>
                    </a>
                    <span>${cartArray[i].count} × ${cartArray[i].price} ريال</span>
                </div>
            </div>`
            // outputSingleProduct += 
            // `<div class="input-group"><button class="minus-item input-group-addon btn btn-primary" data-name="Lemon">-</button><input type="number" class="item-count form-control" data-name="Lemon" value="33"><button class="plus-item btn btn-primary input-group-addon" data-name="Lemon">+</button></div>`
        }
    }
    $('.show-cart').html(output);
    $('.total-cart span').html(shoppingCart.totalCart());
    $('.total-count').html(shoppingCart.totalCount());
}
// Delete item button

$('.show-cart').on("click", ".delete-item", function (event) {
    var name = $(this).data('name');
    shoppingCart.removeItemFromCartAll(name);

    //get btn that it data name equal that data name you clicked
    var btnAdded = $(".add_to_cart").filter(function () {
        return $(this).data("name") == name
    });
    btnAdded.removeClass("added").find("i").addClass("bi-cart").removeClass("bi-check2-all");
    displayCart();
})

$('.add_to_cart').on("click", function () {
    if ($(this).hasClass("added")) {
        var name = $(this).data('name')
        shoppingCart.removeItemFromCartAll(name);
        displayCart();
    }
})

// -1
$('.show-cart, .amount').on("click", ".minus-item", function (event) {
    var name = $(this).data('name')
    shoppingCart.removeItemFromCart(name);
    console.log(name);
    displayCart();
})
// +1
$('.show-cart, .amount').on("click", ".plus-item", function (event) {
    var name = $(this).data('name')
    shoppingCart.addItemToCart(name);
    displayCart();
})

// Item count input
$('.show-cart, .amount').on("change", ".item-count", function (event) {
    var name = $(this).data('name');
    var count = Number($(this).val());
    shoppingCart.setCountForItem(name, count);
    displayCart();
});

displayCart();