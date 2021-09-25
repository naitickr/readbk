var firebaseConfig = {
    apiKey: "AIzaSyAFZlOZ1WXGz-5o4sxn11TIqPXyIGLbIxk",
    authDomain: "readbook-abc13.firebaseapp.com",
    databaseURL: "https://readbook-abc13-default-rtdb.firebaseio.com",
    projectId: "readbook-abc13",
    storageBucket: "readbook-abc13.appspot.com",
    messagingSenderId: "120165879300",
    appId: "1:120165879300:web:774a3c637791c14d78af51",
    measurementId: "G-4VCZKCVMY9"
  };
  // Initialize Firebase
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();

function addroom()
{
  room_names = document.getElementById("room_name").value;
  firebase.database().ref("/").child(Room_names).update({
    purpose : "adding user"
  });
}

function logout()
{
window.location=("index.html")
}