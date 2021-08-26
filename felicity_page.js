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
  username = localStorage.getItem("happy_input");
  roomname = localStorage.getItem("room_name");
  
  function Send(){
  msg = document.getElementById("msg").value;
  firebase.database().ref(roomname).push({
  name:username,
  message:msg,
  like:0
  });
  document.getElementById("msg").value = "";
  }
  
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
           firebase_message_id = childKey;
           message_data = childData;
  //Start code
  
  //End code
        } });  }); }
  getData();
  