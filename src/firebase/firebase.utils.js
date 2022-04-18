import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
  apiKey: 'AIzaSyD2Xr8c_M0NcD_qGA4Opv_6844yZDShzqw',
  authDomain: 'crwn-db-f0dcd.firebaseapp.com',
  projectId: 'crwn-db-f0dcd',
  storageBucket: 'crwn-db-f0dcd.appspot.com',
  messagingSenderId: '872487857241',
  appId: '1:872487857241:web:179e8fa6621746096e1548',
  measurementId: 'G-S4MGMRF66P',
}

export const createUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData })
    } catch (e) {
      console.log('error creating user')
      console.log(e)
    }
  }

  return userRef
}

export const addCollection = async (collectionName, documents) => {
  const collectionRef = firestore.collection(collectionName)

  const batch = firestore.batch()
  for (let document of documents) {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, document)
  }

  return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) =>
  collections.docs
    .map((doc) => {
      const { title, items } = doc.data()
      return {
        id: doc.id,
        title,
        items,
      }
    })
    .reduce(
      (object, item) => ({ ...object, [item.title.toLowerCase()]: item }),
      {}
    )

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      resolve(userAuth)
    }, reject)
    unsubscribe()
  })
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export default firebase
