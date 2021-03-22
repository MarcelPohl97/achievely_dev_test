import { firestore } from '../../firebase/firebase';

export default async function handler(req, res) {
    const {document_id} = req.body;
    if (req.method === 'POST') {
      firestore.collection("goals").doc(document_id).delete().then(() => {
        res.status(200).json('Successfully added document');
      }).catch((error) => {
        res.status(200).json("Error adding document: ", error);
      });
    }else {
      res.status(200).json({test: 'We have no data yet you need to send'});
    }
  }