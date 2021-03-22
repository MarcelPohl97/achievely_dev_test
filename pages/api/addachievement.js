import { firestore } from '../../firebase/firebase';

export default async function handler(req, res) {
  const {achievement, days, goal, tracked_days, user_uid} = req.body;
    if (req.method === 'POST') {
      firestore.collection("goals").add(
        {
          achievement: achievement,
          days: days,
          goal: goal,
          tracked_days: tracked_days,
          user_uid: user_uid
        }
      )
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