 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyB-T3R4kAv2t1xFDiO6EOFY7Ytj4xdwG8g",
  authDomain: "unidad4adb.firebaseapp.com",
  databaseURL: "https://unidad4adb-default-rtdb.firebaseio.com",
  projectId: "unidad4adb",
  storageBucket: "unidad4adb.appspot.com",
  messagingSenderId: "956105042199",
  appId: "1:956105042199:web:aa348ebb8d8d7d54d8af52"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //obtener datos del html
  var txtUsuario = document.getElementById("usuario");
  var txtMensaje = document.getElementById("mensaje");
  var btnEnviar = document.getElementById("btnenviar");
  var chatlista = document.getElementById("chatlista");
  var fechahora = new Date();
  var fecha = fechahora.toString();
  fecha = fecha.substring(0,24);


  //Ejecutar accion en el boton
  btnEnviar.addEventListener("click",function(){
    var usuario = txtUsuario.value;
    var mensaje = txtMensaje.value;
    var html = "<li>"+usuario+" DICE: "+mensaje+" "+fecha+"</li>";

    chatlista.innerHTML += html;

    firebase.database().ref('chat').push({
        user: usuario,
        message: mensaje,
        datetime:fecha
    })
  });

  /*Mostrar datos*/
  firebase.database().ref('chat').on('value', (snapshot) => {
    var html1 = '';
    
    //console.log(snapshot.val());
    snapshot.forEach(function (e){
      var elemento = e.val();
      var usuario1 = elemento.user;
      var mensaje1 = elemento.message;
      var fecha1 = elemento.datetime;
      //html1 += "<li>"+usuario1+" DICE: "+mensaje1+" "+fecha1+"</li>";
      html1 += '<div class="chat-bubble"><div class="chat-bubble-arrow-border"></div><div class="chat-bubble-arrow"></div><h4>'+usuario1+" dice: "+mensaje1+" "+fecha1+"</h4></div>";
   
    });
    chatlista.innerHTML = html1;
  })