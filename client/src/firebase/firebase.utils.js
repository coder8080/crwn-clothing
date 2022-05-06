import { initializeApp } from 'firebase/app'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

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
  const userRef = doc(firestore, 'users', userAuth.uid)
  const snapShot = await getDoc(userRef)

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
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

const app = initializeApp(config)
export const auth = getAuth(app)
export const firestore = getFirestore(app)

export const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider)

export default app
