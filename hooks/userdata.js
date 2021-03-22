import { firestore } from '../firebase/firebase';

export const getUserData = async (uid) => {
    const userCollection = firestore.collection('users');
    const userData = await userCollection.doc(uid.uid).get();
    if (!userData.exists) {
        return null
      }

    return userData.data();
}

export const getUserGoals = async (goal, uid) => {
  const goalsCollection = await firestore.collection('goals').where("goal", "==", goal).where("user_uid", "==", uid).get();
  const goalsData = []
  //goalsCollection.forEach(doc => goalsData.push(doc.data()));
  goalsCollection.forEach((doc) => {
    const document_id = doc.id
    const document_data = doc.data();
    const goalsDataExtracted = {document_id, ...document_data};
    goalsData.push(goalsDataExtracted)
  });
  return goalsData;
}