const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

let listElements = document.querySelectorAll('.list__button--click');

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        
        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
        if(menu.clientHeight == "0"){
            height=menu.scrollHeight;
        }

        menu.style.height = `${height}px`;

    })
});


let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Noticias')
  .pauseFor(200)
  .deleteChars(10)
  .start();

  let museo = document.getElementById('Museo');
 
  let Museo = new Typewriter(museo, {
    loop: true,
    delay: 75,
  });
   
  Museo
    .pauseFor(500)
    .typeString('¿Que ofrece el Museo?')
    .pauseFor(1500)
    .deleteChars(10)
    .start();

    let exhibiciones = document.getElementById('Exhibiciones');
 
    let Exhibiciones = new Typewriter(exhibiciones, {
      loop: true,
      delay: 75,
    });
     
    Exhibiciones
      .pauseFor(500)
      .typeString('Piezas Emblemáticas')
      .pauseFor(1500)
      .deleteChars(10)
      .start();

      
      const imagenMayalab = document.querySelectorAll(".imagenMayalab");
      imagenMayalab.forEach(function(imagenMayalab) {
        imagenMayalab.addEventListener("click", function() {
        imagenMayalab.style.width = "50%"; /*expandir la imagen al 50% del ancho de su contenedor*/
        imagenMayalab.style.height = "auto"; /*ajustar la altura automáticamente*/
        imagenMayalab.style.position = "fixed"; /*fijar la imagen en la pantalla para que no se desplace*/
        imagenMayalab.style.top = "0"; /*colocar la imagen en la parte superior de la pantalla*/
        imagenMayalab.style.left = "0"; /*colocar la imagen en la parte izquierda de la pantalla*/
        imagenMayalab.style.right = "0"; /*colocar la imagen en la parte derecha de la pantalla*/
        imagenMayalab.style.bottom = "0"; /*colocar la imagen en la parte inferior de la pantalla*/
        imagenMayalab.style.margin = "auto"; /*centrar la imagen*/
        
          
        // Evento clic fuera de la imagen
        document.addEventListener("click", function(event) {
        // Verificar si el clic se realizó fuera de la imagen
        if (event.target !== imagenMayalab) {
          imagenMayalab.style.width = "20%"; /*restaurar el tamaño inicial de la imagen*/
          imagenMayalab.style.position = "inherit"; /*restaurar la posición inicial de la imagen*/
        }
      });
     });
    });

    const imagenAlbum = document.querySelectorAll(".imagenAlbum");
    imagenAlbum.forEach(function(imagenAlbum) {
      imagenAlbum.addEventListener("click", function() {
      imagenAlbum.style.width = "90%"; /*expandir la imagen al 50% del ancho de su contenedor*/
      imagenAlbum.style.height = "90%"; /*ajustar la altura automáticamente*/
      imagenAlbum.style.position = "fixed"; /*fijar la imagen en la pantalla para que no se desplace*/
      imagenAlbum.style.top = "0"; /*colocar la imagen en la parte superior de la pantalla*/
      imagenAlbum.style.left = "0"; /*colocar la imagen en la parte izquierda de la pantalla*/
      imagenAlbum.style.right = "0"; /*colocar la imagen en la parte derecha de la pantalla*/
      imagenAlbum.style.bottom = "0"; /*colocar la imagen en la parte inferior de la pantalla*/
      imagenAlbum.style.margin = "auto"; /*centrar la imagen*/
      
        
      // Evento clic fuera de la imagen
      document.addEventListener("click", function(event) {
      // Verificar si el clic se realizó fuera de la imagen
      if (event.target !== imagenAlbum) {
        imagenAlbum.style.width = "90%"; /*restaurar el tamaño inicial de la imagen*/
        imagenAlbum.style.position = "inherit"; /*restaurar la posición inicial de la imagen*/
      }
    });
   });
  });