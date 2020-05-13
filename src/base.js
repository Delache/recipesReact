import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCbT6RGJgzGl7A1a3q3GtBM86HQhcBYJxs",
  authDomain: "recipesreact-d6eb4.firebaseapp.com",
  databaseURL: "https://recipesreact-d6eb4.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }

export default base
