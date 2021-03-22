import { auth, firestore } from '../firebase/firebase';

export const LoginUser = (email, password) => {
        auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
        const user_data = userCredential.user;
        alert('Successfully Logged in!,', user_data.username)
    })
    .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
    });
}

export const RegisterUser = (email, password, username) => {
    auth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
        firestore.collection('users').doc(userCredential.user.uid).set({
            username: username,
        })
        alert('Successfully created Account and Logged in!,', username);
    })
    .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
    });
}

export const LogoutUser = () => {
    auth.signOut();
}

export const ResetPasswordUser = (email) => {
    auth.sendPasswordResetEmail(email).then((successfull) => {
        alert('We have sent an Email to ', email);
      }).catch(function(error) {
        alert('There was an error:', error);
      });
}