import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCDwwyM5eiO-TAHhV5rLkko6Cxk-KU-T6c',
    authDomain: 'https://myid-db89d.firebaseio.com',
    //databaseURL: 'https://your-database-name.firebaseio.com',
    projectId: 'myid-db89d',
    storageBucket: 'myid-db89d.appspot.com',
    //messagingSenderId: '12345-insert-yourse',
    appId: '1:893181185594:android:a1114e182206051b306f03',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };