// ----=  Faces  =----
/* load images here */
let TaniwhaRed;
let TaniwhaBlue;
let currentImage;
let bgImage;
let bubbles;
let bubbleAppear = [];
let bubbleAway = 0;

function prepareInteraction() {

TaniwhaRed = loadImage('/images/taniwhaFINAL.png');
TaniwhaBlue = loadImage ('/images/taniwhaFINALBLUE.png');
bgImage = loadImage('/images/sea.png');
currentImage = TaniwhaRed;

bubbles = loadImage ('images/bubbles.png');
BubblesHide = false;
  }


function drawInteraction(faces, hands) {
  
   //background under the sea
  imageMode (CORNER);
  image(bgImage, 0, 0, width, height);


  // for loop to capture if there is more than one face on the screen. This applies the same process to all faces. 
  for (let i = 0; i < faces.length; i++) {
    let face = faces[i]; // face holds all the keypoints of the face\
    
    console.log(face);
    if (showKeypoints) drawPoints(face)
    
    let noseTipX = face.keypoints[4].x;
    let noseTipY = face.keypoints[4].y;

    //mouth
    let lipsCenterX = face.lips.centerX;
    let lipsCenterY = face.lips.centerY;
    let lipsWidth = face.lips.width;
    let lipsHeight = face.lips.height;

    let expression = detectFaceExpression (face);

    if (expression === "Surprised") {
      bubbleAway = lerp(bubbleAway, 255, 0.1);
      createBubble (noseTipX, noseTipY);
    } else {
      bubbleAway = lerp(bubbleAway, 0, 0.1);
    }

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

    

    let testX = face.keypoints[10].x;
    let testY = face.keypoints[10].y;

    let taniwhaX, taniwhaY;
    let taniwhaWidth, taniwhaHeight;

    /*
    Start drawing on the face here
    */


  //image of taniwha on face

taniwhaWidth = face.faceOval.width * 1.5;
taniwhaHeight = face.faceOval.height * 1.5;
taniwhaX = face.faceOval.centerX - taniwhaWidth / 2;
taniwhaY = face.faceOval.centerY - taniwhaHeight / 2;

    //  if (TaniwhaRed) {
      
    //     imageMode (CORNER);
    //     image (TaniwhaRed, taniwhaX, taniwhaY, taniwhaWidth, taniwhaHeight);
    //   }

      if (currentImage) {
      imageMode(CORNER);
      image(currentImage, taniwhaX, taniwhaY, taniwhaWidth, taniwhaHeight);
    }

    updateAndDrawBubbles ();

    }




    /*
    Stop drawing on the face here
    */

  }
  //------------------------------------------------------
  // You can make addtional elements here, but keep the face drawing inside the for loop. 

// Switch image when key pressed
function keyPressed() {
  if (key === '1') {
    currentImage = TaniwhaRed;
  } else if (key === '2') {
    currentImage = TaniwhaBlue;
  }
}

function createBubble(x, y) {
  if (random() < 0.3) { // control how many spawn
    bubbleAppear.push({
      x: x + random(-20, 20),
      y: y + random(-10, 10),
      size: random(100, 160),
      speed: random(0.5, 1.5),
      away: 255
    });
  }
}

function updateAndDrawBubbles() {
  for (let i = bubbleAppear.length - 1; i >= 0; i--) {
    let b = bubbleAppear[i];
    b.y -= b.speed; // float up
    b.away -= 2;   // fade

    if (bubbles) {
      tint(255, bubbleAway * (b.away / 255)); // apply fade
      imageMode(CORNER);
      image(bubbles, b.x, b.y, b.size, b.size);
      noTint();
    } else {
      noFill();
      stroke(173, 216, 230, bubbleAway * (b.away / 255));
      ellipse(b.x, b.y, b.size);
    }

    if (b.away <= 0) bubbleAppear.splice(i, 1); // remove dead bubbles
  }
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