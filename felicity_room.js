// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBxcR1yjsNVRV-0hs8T9ERVtBjny_VE8MU",
    authDomain: "felicity-f3fd0.firebaseapp.com",
    databaseURL: "https://felicity-f3fd0-default-rtdb.firebaseio.com",
    projectId: "felicity-f3fd0",
    storageBucket: "felicity-f3fd0.appspot.com",
    messagingSenderId: "528357309185",
    appId: "1:528357309185:web:cde700a947c4407054b900"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var Welcome = localStorage.getItem("happy_input");
document.getElementById("usermane").innerHTML = "Welcome To Our Felicity " + Welcome + " !";

function addRoom(){
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
});
localStorage.setItem("room_name", room_name);
window.location = "felicity_page.html";
}

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room name -"+ Room_names);
row = "<div class='room_name' id="+ Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row; 
      //End code
      });});}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location = "felicity_page.html";
}
function logout(){
      localStorage.removeItem("happy_input");
      localStorage.removeItem("room_name");
      window.location = "index.html";
      }