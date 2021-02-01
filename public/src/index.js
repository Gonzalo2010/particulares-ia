let navItems = document.getElementsByClassName("nav-item");
let nombre = [];

let nombrePagina = ()=> {
    if (window.location.toString().match("home")) {
        nombre = ["home", 0];
    } else if (window.location.toString().match("contactanos")) {
        nombre = ["contactanos", 1];
    } else if (window.location.toString().match("faq")) {
        nombre = ["faq", 2];
    }
    darActive(nombre);
}

let darActive = (x)=> {
    if (window.location.toString().match(x[0])) {
        navItems[x[1]].classList.add("active");
    }
}

nombrePagina();