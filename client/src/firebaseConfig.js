import Firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCsv_LqXcYVRuyYyyXVOIhqbJ9jyLCSmmk",
  authDomain: "sixftaprt-f02e0.firebaseapp.com",
  databaseURL: "https://sixftaprt-f02e0.firebaseio.com",
  projectId: "sixftaprt-f02e0",
  storageBucket: "sixftaprt-f02e0.appspot.com",
  messagingSenderId: "636398223669",
  appId: "1:636398223669:web:c37bcba9438d5f200dcc7c"
};

if (!Firebase.apps.length) {
  Firebase.initializeApp(firebaseConfig);
}

export const db = Firebase.firestore();