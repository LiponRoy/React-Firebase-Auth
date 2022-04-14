// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBbGH3wXe6DD9jyvQBs5vUmS2md5qtGSxE',
	authDomain: 'react-firebase-auth-lipon.firebaseapp.com',
	projectId: 'react-firebase-auth-lipon',
	storageBucket: 'react-firebase-auth-lipon.appspot.com',
	messagingSenderId: '803960861703',
	appId: '1:803960861703:web:a498bc9309c786483c66a2',
	measurementId: 'G-7C4GJE3KHY',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// for google signin
export const provider = new GoogleAuthProvider();
