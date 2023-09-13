function openNav() {
    document.getElementById('sidenav2').style.display = 'flex';
}

function closeNav() {
    document.getElementById('sidenav2').style.display = 'none';
}


function wishList() {
    openCart();
}

let p = 0;
let s = 0;
let q = 1;
const price = document.getElementById("price").value;



const items = [{
    itemname: '4 Room duplex',
    itemprice: 125,
    itemamount: q,
    itemid: '' + new Date().getTime()


}];
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

function openMenu() {
    document.getElementById('link').style.display = 'block';
    document.getElementById('menu').style.display = 'none';
    document.getElementById('close').style.display = 'block';
}


function closeMenu() {
    document.getElementById('link').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
    document.getElementById('close').style.display = 'none';
}