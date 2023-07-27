let seccioncrearcorreo = document.getElementById("seccioncrearcorreo")
let seccioningresar = document.getElementById("seccioningresar")
let buttoncrearcuenta=document.querySelector("#buttoncrearcuenta")
let inputemail=document.getElementById("inputemail")
let inputpassword=document.getElementById("inputpassword")
let inputemaill=document.getElementById("inputemaill")
let inputpasswordd=document.getElementById("inputpasswordd")
let buttonlogin=document.getElementById("buttonlogin")

seccioningresar.style.display="none" 


let correocreado
let contraseñacreada


buttoncrearcuenta.addEventListener("click",crearcuenta)

function crearcuenta(){
correocreado= inputemail.value
contraseñacreada=inputpassword.value

alert("CUENTA CREADA")

seccioningresar.style.display="block"
seccioncrearcorreo.style.display="none"  

iniciarsesion()


}

function iniciarsesion(){

    buttonlogin.addEventListener("click",ingresar)


}

function ingresar(){
    if(correocreado==inputemaill.value && contraseñacreada==inputpasswordd.value){
        alert("INGRESANDO")
    }else{
        alert("REVISA TU EMAIL O CONTRASEÑA")
    }
}