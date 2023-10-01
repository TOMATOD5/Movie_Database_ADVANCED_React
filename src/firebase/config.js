import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCxpzniGj8NRCaC2e8qWylzsAilhuVYNEo",
    authDomain: "movies-project-2-94646.firebaseapp.com",
    projectId: "movies-project-2-94646",
    storageBucket: "movies-project-2-94646.appspot.com",
    messagingSenderId: "458613675639",
    appId: "1:458613675639:web:a65faab94f2a7124f31872"
};

// počáteční initializace
firebase.initializeApp(firebaseConfig)


// počáteční initilizace služeb
const projectFirestore = firebase.firestore()


export { projectFirestore }