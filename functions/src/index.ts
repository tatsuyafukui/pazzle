import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();
const vision: any = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();
const cors = require('cors')({
  origin: ["https://pazzle-86ed9.firebaseapp.com", 'http://localhost:3000'],
  credentials: true
});

function buildHtmlWithPost (imageId: string, imageObj: any) : string {
  return `<!DOCTYPE html><head>
  <title>PuzzleGame</title>
  <meta property="og:title" content="PuzzleGame">
  <meta property="og:image" content="${imageObj.path}">
  <meta property="og:image:width" content="600">
  <meta property="og:image:height" content="600">
  <meta property="og:url" content="https://pazzle-86ed9.firebaseapp.com/play/${imageId}">
  <meta property="og:type" content="website">
  <meta property="og:description" content="パズルゲームで遊ぼう">
  <meta name="twitter:card" content="photo">
  <meta name="twitter:title" content="PuzzleGame">
  <meta name="twitter:image" content="${imageObj.path}">
  <meta name="twitter:site" content="@ingtaTsuya_0801" />
  <meta name="twitter:player" content="@ingtaTsuya_0801" />
  <meta property="fb:app_id" content="499326880798340" />
  <link rel="canonical" href="/play/${imageId}">
  </head><body>
  <script>window.location="/redirect_to_play/${imageId}";</script>
  </body></html>`;
}

export const play = functions.https.onRequest(function(req, res) {
  const path = req.path.split('/');
  const imageId = path[2];
  db.collection('images')
    .doc(imageId)
    .get()
    .then((doc: any) => {
      const htmlString = buildHtmlWithPost(imageId, doc.data());
      res.status(200).end(htmlString);
    }).catch(error => {
      res.status(500).end(error);
  });
});


export const categoryJudgment = functions.region('asia-northeast1').https.onRequest((req, res) => {
  cors(req, res, () => {

    if (req.method !== 'POST') {
      res.status(400).json({error: {message: 'only post request method!'}});
    }

    if (req.body.imagePath === undefined) {
      res.status(400).json({error: {message: 'No message defined.'}});
    }

    client
      .labelDetection(req.body.imagePath)
      .then((results: any) => {
        console.log(results[0].labelAnnotations);
        const labels = results[0].labelAnnotations;
        console.log('Labels:');
        labels.forEach((label: any) => console.log(label.description));
        res.json(results[0].labelAnnotations);
      })
      .catch((err: Error) => {
        console.error('ERROR:', err);
        res.json(err)
      });
  });



});

