const functions = require('firebase-functions');
const cors = require('cors')({origin: true});
const admin = require('firebase-admin');
admin.initializeApp();

exports.addRequest = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const data = req.body;
    data['date'] = Date.now();
    return admin.firestore().collection(`requests`).add(data).then((result) => {
      return res.send(200);
    }).catch((error) => {
      return res.send(500);
    });
  })
});
