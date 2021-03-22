import { firestore } from '../../firebase/firebase';

export default async function handler(req, res) {
    if (req.method === 'POST') {
      firestore.collection("goals").add(req.body)
      .then((docRef) => {
        res.status(200).json('Successfully added document');
      })
      .catch((error) => {
        res.status(200).json("Error adding document: ", error);
      });
    }else {
      res.status(200).json({test: 'We have no data yet you need to send'});
    }
  }