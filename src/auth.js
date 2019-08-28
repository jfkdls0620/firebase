 const firebase = require('firebase');
 const firebaseui = require('firebaseui');



const config = {
    apiKey: "AIzaSyAYFMZo9aNtC2T6TezjTuRbaFRaNza-IFk",
    authDomain: "vue-express-1d60b.firebaseapp.com",
    databaseURL: "https://vue-express-1d60b.firebaseio.com/",
    projectId: "vue-express-1d60b",
    storageBucket: "",
    messagingSenderId: "990367012445",
    appId: "1:990367012445:web:51d1cc0a4821c9a9"
};

const app = firebase.initializeApp(config);

export const db = app.database()
export const auth = {
    context: null,
    uiConfig: null,
    ui: null,

    init(context) {
        this.context = context;
        this.uiConfig = {
            signInSuccessUrl: '/',
            signInOptions: [
                //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID
            ]
        }
        this.ui = new firebaseui.auth.AuthUI(firebase.auth());

        firebase.auth().onAuthStateChanged((user) => {
            this.context.$store.dispatch('user/setCurrentUser')

            let requireAuth = this.context.$route.matched.some(record => record.meta.requireAuth)
            let guestOnly = this.context.$route.matched.some(record => record.meta.guestOnly)

            if(requireAuth && !user) this.context.$router.push('auth')
            else if (guestOnly && user) this.context.$router.push('/')
        });
    },
    authForm(container) {
        this.ui.start(container, this.uiConfig);
    },
    user() {
        return this.context ? firebase.auth().currentUser : null;
    },
    logout() {
        firebase.auth().signOut();
    }
}

