import firebase from 'firebase/app'
import 'firebase/database'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCKTMkRCFJ4XPXq3m_OgGWF_yr5_ZnIM8Y",
    authDomain: "unirchitect-b85ec.firebaseapp.com",
    databaseURL: "https://unirchitect-b85ec-default-rtdb.firebaseio.com",
    projectId: "unirchitect-b85ec",
    storageBucket: "unirchitect-b85ec.appspot.com",
    messagingSenderId: "1000751416396",
    appId: "1:1000751416396:web:9976da9a035c69a0afa0e9",
    measurementId: "G-MWMZ3Y4TRT"
};
firebase.initializeApp(firebaseConfig)

const database = firebase.database();

export { database }