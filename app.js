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

  //Ejecutar accion en el boton
  btnEnviar.addEventListener("click",function(){
    var usuario = txtUsuario.value;
    var mensaje = txtMensaje.value;
    var html = "<li>"+usuario+" dice: "+mensaje+"</li>";

    chatlista.innerHTML += html;

    firebase.database().ref('chat').push({
        user: usuario,
        message: mensaje
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
      html1 += "<li>"+usuario1+" dice: "+mensaje1+"</li>";
    });
    chatlista.innerHTML = html1;
  })