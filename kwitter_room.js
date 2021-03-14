//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDCwDzRsgKGf07yFr-kzk_DRN1sAUyiU-I",
    authDomain: "kwitter-72086.firebaseapp.com",
    projectId: "kwitter-72086",
    storageBucket: "kwitter-72086.appspot.com",
    messagingSenderId: "246468726805",
    appId: "1:246468726805:web:3baf10ac263a30e84f7e1c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();

function addRoom(){
    room_name=document.getElementById("room_name").value;
    localStorage.setItem("room_name",room_name);
}

function logout(){
   window.location="index.html";
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
}
