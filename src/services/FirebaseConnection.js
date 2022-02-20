import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
	apiKey: 'AIzaSyAzgs3CStWWJQTuYX7BPiPu4TwTr6Wh3JM',
	authDomain: 'financeapp-692c9.firebaseapp.com',
	projectId: 'financeapp-692c9',
	storageBucket: 'financeapp-692c9.appspot.com',
	messagingSenderId: '543170455673',
	appId: '1:543170455673:web:4a75232f52d3db9e4a4ca8',
}

if (!firebase.apps.length) {
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig)
}

export default firebase
