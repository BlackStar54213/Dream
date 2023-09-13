let p = 0;
let s = 0;
let q = 1;
const price = 125;
let quantity = document.getElementById("quantity");
const amount = document.getElementById("cart-amount");
const quantitynum = document.getElementById("itemprice");




const items = [];
render();

function openCart() {
    switch (p) {
        case p = 0:

            const cart = document.getElementById("cart");
            cart.style.display = "block";
            p = 1;
            break;

        default:
            document.getElementById("cart").style.display = "none";
            p = 0;
            break;
    }
}

function closeCart() {
    document.getElementById("cart").style.display = "none";
    p = 0;
}


function plusOne() {

    q++;
    quantity.value = q;
    quantitynum.value = "$" + price + ".00";
}
function minusOne() {
    if (q > 1) {
        q--;
        quantity.value = q;
        quantitynum.value = "$" + price + ".00";
    }

}


function addToCart() {

    s++;
    items.push({
        itemname: '4 Room duplex',
        itemprice: price,
        itemid: '' + new Date().getTime()


    });
    render()
}


function render() {
    document.getElementById('item-display').innerHTML = '';

    const all = document.createElement("div");
    items.forEach(function (items) {
        const itemlist = document.getElementById("item-display");
        const element = document.createElement("div");
        const price = document.createElement("p");
        const deletebtn = document.createElement("button");
        const cartimg = document.createElement("img");
        const checkout = document.createElement('button');
        const deleteimg = document.createElement("img");


        const name = items.itemname;
        element.innerText = name;
        price.innerText = 'Price:  #' + items.itemprice;
        checkout.innerText = 'Purchase';
        deletebtn.id = items.itemid;


        element.appendChild(price);
        element.appendChild(deletebtn);
        itemlist.appendChild(all);
        all.appendChild(element);
        element.appendChild(cartimg);
        element.appendChild(checkout);
        deletebtn.appendChild(deleteimg);


        cartimg.setAttribute('src', "../images/11.jpg");
        deleteimg.setAttribute('src', "../images/icon-delete.svg");
        cartimg.style = 'height:1cm; border-radius:5px; float:left; margin-left:-50px; margin-top:-30px;';
        element.style = 'width:75%;margin-left: 1.3cm; padding=10px; margin-bottom:20px;font-family:tahoma; color:gray; font-size:13px; margin-right:13px;';
        checkout.style = 'width:200px; font-size:20px; background-color:hsl(26, 100%, 55%); color:white; padding:5px; border:none; margin:15px; border-radius:4px; margin-left:-20px;';
        deletebtn.style = 'border-radius:5px; float:right; margin-left:240px; margin-top:-30px; border: none; background-color:white;';


    });
}




var frame = document.getElementsByClassName("mainpic");
const thumbs = document.getElementsByClassName("thumbimg2");
var i = 0;
for (let i = 1; i < frame.length; i++) {
    frame[i].style.display = "none"
}

function myPrevious() {

    frame[i - 1].style.display = "flex";
    i--;
    frame[i + 1].style.display = "none"
    thumbs[i].setAttribute("id", "current");
    thumbs[i + 1].setAttribute("id", " ");

}

function myNext() {
    frame[i + 1].style.display = "flex";
    i++;
    frame[i - 1].style.display = "none"
    thumbs[i].setAttribute("id", "current");
    thumbs[i - 1].setAttribute("id", " ");
}

function closeImages() {
    document.getElementById("pics").style.display = "none";
}

function viewImages() {
    document.getElementById("pics").style.display = "block";
}


function menuOpen() {
    document.getElementById("overlay").style.display = "block";
}

function menuClose() {
    document.getElementById("overlay").style.display = "none";
}

function askOpen() {
    document.getElementById("asksec").style.display = "block";
}

function askClose() {
    document.getElementById("asksec").style.display = "none";
}