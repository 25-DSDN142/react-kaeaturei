// ----=  Faces  =----
/* load images here */
let myImage;

function prepareInteraction() {

myImage = loadImage('/images/taniwhaFINAL.png');
bgImage = loadImage('/images/sea.png');
  }


function drawInteraction(faces, hands) {

  // for loop to capture if there is more than one face on the screen. This applies the same process to all faces. 
  for (let i = 0; i < faces.length; i++) {
    let face = faces[i]; // face holds all the keypoints of the face\
    console.log(face);
    if (showKeypoints) drawPoints(face)
    

    /*
    Once this program has a face, it knows some things about it.
    This includes how to draw a box around the face, and an oval. 
    It also knows where the key points of the following parts are:
     face.leftEye
     face.leftEyebrow
     face.lips
     face.rightEye
     face.rightEyebrow
    */
    // Here are some variables you may like to use. 
    // Face basics
    let faceCenterX = face.faceOval.centerX;
    let faceCenterY = face.faceOval.centerY;
    let faceWidth = face.faceOval.width;
    let faceheight = face.faceOval.height;
    // Left eye
    let leftEyeCenterX = face.leftEye.centerX;
    let leftEyeCenterY = face.leftEye.centerY;
    let leftEyeWidth = face.leftEye.width;
    let leftEyeHeight = face.leftEye.height;
    // Left eyebrow
    let leftEyebrowCenterX = face.leftEyebrow.centerX;
    let leftEyebrowCenterY = face.leftEyebrow.centerY;
    let leftEyebrowWidth = face.leftEyebrow.width;
    let leftEyebrowHeight = face.leftEyebrow.height;

    // Lips
    let lipsCenterX = face.lips.centerX;
    let lipsCenterY = face.lips.centerY;
    let lipsWidth = face.lips.width;
    let lipsHeight = face.lips.height;

    // Right eye
    let rightEyeCenterX = face.rightEye.centerX;
    let rightEyeCenterY = face.rightEye.centerY;
    let rightEyeWidth = face.rightEye.width;
    let rightEyeHeight = face.rightEye.height;

    // Right eyebrow
    let rightEyebrowCenterX = face.rightEyebrow.centerX;
    let rightEyebrowCenterY = face.rightEyebrow.centerY;
    let rightEyebrowWidth = face.rightEyebrow.width;
    let rightEyebrowHeight = face.rightEyebrow.height;

    let noseTipX = face.keypoints[4].x;
    let noseTipY = face.keypoints[4].y;

    let testX = face.keypoints[10].x;
    let testY = face.keypoints[10].y;

    let taniwhaX, taniwhaY;
    let taniwhaWidth, taniwhaHeight;

    /*
    Start drawing on the face here
    */
 //background 
  imageMode (CORNER);
  image(bgImage, 0, 0, width, height);

//image

      taniwhaWidth = faceWidth * 1.5;
      taniwhaHeight = faceheight * 1.5;
      taniwhaX = faceCenterX - taniwhaWidth / 2;
      taniwhaY = faceCenterY - taniwhaHeight / 2;

     if (myImage) {
      
        imageMode (CORNER);
        image (myImage, taniwhaX, taniwhaY, taniwhaWidth, taniwhaHeight);
      }


    /*
    Stop drawing on the face here
    */

  }
  //------------------------------------------------------
  // You can make addtional elements here, but keep the face drawing inside the for loop. 
}



// function drawX(X, Y) {
//   push()

//   strokeWeight(15)
//   line(X - 20, Y - 20, X + 20, Y + 20)
//   line(X - 20, Y + 20, X + 20, Y - 20)

//   pop()
// }


// This function draw's a dot on all the keypoints. It can be passed a whole face, or part of one. 
function drawPoints(feature) {

  push()
  for (let i = 0; i < feature.keypoints.length; i++) {
    let element = feature.keypoints[i];
    noStroke();
    fill(0, 255, 0);
    rect(element.x, element.y, 5);
  }
  pop()

}