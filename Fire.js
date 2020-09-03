import firebase from "firebase";

class Fire {
  constructor() {
    this.init();
    this.checkAuth();
  }

  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
      apiKey: "AIzaSyA5aUNSadHanvcwSVmp0iL7k1aPGzFJ1RQ",
  authDomain: "chattapp-347ad.firebaseapp.com",
  databaseURL: "https://chattapp-347ad.firebaseio.com",
  projectId: "chattapp-347ad",
  storageBucket: "chattapp-347ad.appspot.com",
  messagingSenderId: "978809939428",
  appId: "1:978809939428:web:61855171226ab0383fd3f1",
  measurementId: "G-WGCVCD98WV"
      });
    }
  };
  checkAuth = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        firebase.auth().signInAnonymously();
      }
    });
  };

  send = (messages) => {
    messages.forEach((item) => {
      const message = {
        text: item.text,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        user: item.user,
      };

      this.db.push(message);
    });
  };

  parse = (message) => {
    const { user, text, timestamp } = message.val();
    const { key: _id } = message;
    const createdAt = new Date(timestamp);

    return {
      _id,
      createdAt,
      text,
      user,
    };
  };
  get = (callback) => {
    this.db.on("child_added", (snapshot) => callback(this.parse(snapshot)));
  };
  off() {
    this.db.off();
  }

  get db() {
    return firebase.database().ref("messages");
  }
  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }
}

export default new Fire();
