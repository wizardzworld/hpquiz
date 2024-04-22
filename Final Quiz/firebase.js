  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
  import { getDatabase, ref, set, get, child, onValue } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  // const firebaseConfig = {
  //   apiKey: "AIzaSyCh2r1PLzogMcdRJdRcNcnoVuiDyv47I5o",
  //   authDomain: "wizarzdzworld-quiz.firebaseapp.com",
  //   databaseURL: "https://wizarzdzworld-quiz-default-rtdb.firebaseio.com",
  //   projectId: "wizarzdzworld-quiz",
  //   storageBucket: "wizarzdzworld-quiz.appspot.com",
  //   messagingSenderId: "237881735518",
  //   appId: "1:237881735518:web:05b91c0e03f8fe7476b7cf",
  //   measurementId: "G-5KTN0CCS4M"
  // };
  
  const firebaseConfig = {
  apiKey: "AIzaSyB34m9e4M-EPoNK2oMwUkegPIZGZm7T85w",
  authDomain: "wizardz-quiz.firebaseapp.com",
  databaseURL: "https://wizardz-quiz-default-rtdb.firebaseio.com",
  projectId: "wizardz-quiz",
  storageBucket: "wizardz-quiz.appspot.com",
  messagingSenderId: "623484351184",
  appId: "1:623484351184:web:f8cc1d20751932b53e64d5",
  // measurementId: "G-0YFPRKBGJT"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  //get ref to database services
  const db = getDatabase(app);

  function uploadToDatabase(userName, instaName, percentage, timeTaken) {
    // console.log(timeTaken);
    set(ref(db, 'certificate-quiz/users/' + instaName.toLowerCase()),
    {
      name: userName,
      instaid: instaName,
      percentage: percentage,
      completionTime: timeTaken
    });
    // alert("Result Submit Successfully");
  }

export {uploadToDatabase}

//   document.getElementById("submitResultBtn").addEventListener('click', function(e){
//     // alert("Button clicked")
    
//   })