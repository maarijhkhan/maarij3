


// ===========

const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyBEg5XL8yGwWUI688rPVI1c9CDTZEfquo4",
    authDomain: "authentication-app-391ec.firebaseapp.com",
    databaseURL: "https://authentication-app-391ec-default-rtdb.firebaseio.com",
    projectId: "authentication-app-391ec",
    storageBucket: "authentication-app-391ec.appspot.com",
    messagingSenderId: "9877445802",
    appId: "1:9877445802:web:dbad4718ba352b7c3484d3"

 });
   const db = firebaseApp.firestore();
   const auth = firebaseApp.auth();


   //SignUp Function
    const signUp=()=>{
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        console.log(email,password)

        //firebase code
        firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed up 
    document.write("You are Signed Up!");
    console.log(result);
    // ...
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message);

  });

    }







    
    // SIGNUP Function
const signIn = ()=>{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    

    
    //firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in
    // console.log(maarij());
    alert("You are Signed In!");
    // console.log(maarij());
    
    
  

    
    
    // ...
  })
  .catch((error) => {
    console.log(error.code)
    console.log(error.message)
    
  });
  

} 









    
    