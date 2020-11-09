import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyC5CREocRfZyu9Rz46ol76KQ72n6JvKwqE",
	authDomain: "test-react-app-sabana-ae0aa.firebaseapp.com",
	databaseURL: "https://test-react-app-sabana-ae0aa.firebaseio.com",
	projectId: "test-react-app-sabana-ae0aa",
	storageBucket: "test-react-app-sabana-ae0aa.appspot.com",
	messagingSenderId: "393835478950",
	appId: "1:393835478950:web:088037e26d7bc4b5021967",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
export const auxFirebase = firebase.initializeApp(firebaseConfig, "auxiliar");
