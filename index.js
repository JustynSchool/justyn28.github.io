const auth = firebase.auth();
const
function siweap() {
  const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const txtemail = email
const txtpass = password
const promise = auth.signInWithEmailAndPassword(email, txtpass);
promise.catch(e => console.log(e.message));
  console.log("email is:");
  console.log(email, txtemail);
    console.log("password is:");
  console.log(password, txtpass);
}
function suweap() {
  const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const txtemail = email
const txtpass = password
const promise = auth.createUserWithEmailAndPassword(email, txtpass);
promise.catch(e => console.log(e.message));
  console.log("email is:");
  console.log(email, txtemail);
    console.log("password is:");
  console.log(password, txtpass);
}
