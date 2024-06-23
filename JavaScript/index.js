
let img=document.getElementById("imgPrueba");

console.log(img.getAttribute("src"));

console.log(img.getAttribute("width"));

img.setAttribute("width", "300px");

img.setAttribute("height", "300px");

let alturaInicial = 100;
let anchuraInicial = 100;
let aumento_disminui_valor = 30;

let btnMin = document.getElementById("btnMin");
let btnMax = document.getElementById("btnMax");
let btnReset = document.getElementById("btnReset");
let imgPrueba = document.getElementById("imgPrueba");

btnMin.addEventListener("click", function(){
    let altura = imgPrueba.getAttribute("height");
    let ancho = imgPrueba.getAttribute("width");

    let anchosinPX = parseInt(ancho.replace("px",""));
    let alturasinPX = parseInt(altura.replace("px",""));
    console.log("anchosinPX: " + anchosinPX);
    console.log("alturasinPX: "+ alturasinPX);

    imgPrueba.setAttribute("height", fn_formatoMedidaPx(alturasinPX-aumento_disminui_valor));
    imgPrueba.setAttribute("width", fn_formatoMedidaPx(anchosinPX-aumento_disminui_valor));
});

btnMax.addEventListener("click", function(){
    let altura = imgPrueba.getAttribute("height");
    let ancho = imgPrueba.getAttribute("width");

    let anchosinPX = parseInt(ancho.replace("px",""));
    let alturasinPX = parseInt(altura.replace("px",""));
    console.log("anchosinPX: " + anchosinPX);
    console.log("alturasinPX: "+ alturasinPX);

    imgPrueba.setAttribute("height", fn_formatoMedidaPx(alturasinPX + aumento_disminui_valor));
    imgPrueba.setAttribute("width", fn_formatoMedidaPx(anchosinPX +aumento_disminui_valor));
});

function fn_formatoMedidaPx(dimension){
    return dimension+"px";
}

btnReset.addEventListener("click", fn_dinmension_inicial);
function fn_dinmension_inicial(){
    imgPrueba.setAttribute("width", fn_formatoMedidaPx(anchuraInicial));
    imgPrueba.setAttribute("height",fn_formatoMedidaPx(alturaInicial));
}
