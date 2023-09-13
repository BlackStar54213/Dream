function showMore() {
    document.getElementById('states').style.overflowY = 'scroll';
    document.getElementById('quick').style.height = 'fit-content';
    document.getElementById('showmore').style.display = 'none';
    document.getElementById('showless').style.display = 'initial';
}

function showLess() {
    document.getElementById('states').style.overflowY = 'hidden';
    document.getElementById('quick').style.height = 'fit-content';
    document.getElementById('showmore').style.display = 'initial';
    document.getElementById('showless').style.display = 'none';
}

function loginClose() {
    document.getElementById('loginpage').style.display = 'none';
}

function loginOpen() {
    document.getElementById('loginpage').style.display = 'block';
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