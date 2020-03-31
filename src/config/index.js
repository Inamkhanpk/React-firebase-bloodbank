import * as firebase from 'firebase';


  // var config = {
  //   apiKey: "AIzaSyDxqGn-Y7-G0EVkBNpVUDRb_cBKDcYFqus",
  //   authDomain: "bloodbank-ee81e.firebaseapp.com",
  //   databaseURL: "https://bloodbank-ee81e.firebaseio.com",
    
    
  // };

  var config = {
    apiKey: "AIzaSyDxqGn-Y7-G0EVkBNpVUDRb_cBKDcYFqus",
    authDomain: "bloodbank-ee81e.firebaseapp.com",
    databaseURL: "https://bloodbank-ee81e.firebaseio.com",
    projectId: "bloodbank-ee81e",
    storageBucket: "bloodbank-ee81e.appspot.com",
    messagingSenderId: "389485572496",
    appId: "1:389485572496:web:3f4af6be2a135fddbf8315"
  };

  const fire =firebase.initializeApp(config);

   // getting messaging Object from firebase
  const messaging = firebase.messaging();
  messaging.requestPermission()
  .then(function(){
    console.log("Notificattion  Permission Granted")
    return messaging.getToken();
  })
  .then(function(token){
    // Displaying user token
    console.log('token  >>>',token)
  })
  .catch(function(err){
    // Happen if user deney permission
   console.log('Unable to get permission to notify.', err)
  })

  // do whatever you want on getting push notification in your front application
  messaging.onMessage(function(payload){
    console.log('onMessage' , payload)
  })
  fetch("https://us-central1-bloodbank-ee81e.cloudfunctions.net/helloWorld", {
            method: 'POST',
            timeout: 5000,
            mode: 'cors',
            body: {
                token: "ewD5MHBousU:APA91bEuIz1bS4E1U9bgZdgO3YBe2Uk9LLhvbzQC_YMtfKNoBHW6lpbXFM-_kqc6PGOXDs63s_5ujhArq32Aq7Q6kQ0ZIirLZxIt630fB5rIc-MZ2rjeiGKfiw1MWS1f2C83zDsViZb075P6lh4tJOqMPcI_y-dgNA",
                title: "my title",
                message: "my body message"
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) =>res)
  
  export default fire;
