let bnum

const random = ()=>{
    return Math.floor(Math.random() * 101);
}

const range = () =>{
    bnum = random();
    let x = Math.floor(Math.random() * 101);
    let y = Math.floor(Math.random() * 101);
    while (x >= bnum || y <= bnum) {
      x = Math.floor(Math.random() * 101);
      y = Math.floor(Math.random() * 101);
    }
    escribirPista(Math.min(x, y), Math.max(x, y))
    return [x,y,bnum]
  }

const escribirPista = (x, y) => {
    let pista = "El número aleatorio generado está entre " + x + " y " + y + ".";
    document.getElementById("pista").innerHTML = pista;
  }

const form = document.querySelector("form");
const bSend = document.getElementById("send");

if(form !== null){
const inputNumero = form.elements.numero;

bSend.addEventListener("click", function(e) {
  e.preventDefault();

  const valorNumero = inputNumero.value;

  if(valorNumero == bnum){
    let mensaje = "¡Enhorabuena, has ganado!"
    document.getElementById("pista").innerHTML=mensaje;
  } else{
    let mensaje = "Vaya, no has acertado 🫤"
    document.getElementById("pista").innerHTML=mensaje;
  }
  
})};
