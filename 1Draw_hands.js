// ----=  HANDS  =----
/* load images here */
function prepareInteraction() {
  //bgImage = loadImage('/images/background.png');
}

function drawInteraction(faces, hands) {
  // hands part
  // for loop to capture if there is more than one hand on the screen. This applies the same process to all hands.
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    //console.log(hand);
    if (showKeypoints) {
      drawConnections(hand)
    }

    // This is how to load in the x and y of a point on the hand.
    let indexFingerTipX = hand.index_finger_tip.x;
    let indexFingerTipY = hand.index_finger_tip.y;

    let pinkyFingerTipX = hand.pinky_finger_tip.x;
    let pinkyFingerTipY = hand.pinky_finger_tip.y;

    let middleFingerTipX = hand.middle_finger_tip.x;
    let middleFingerTipY = hand.middle_finger_tip.y;

    let middleFingerDipX = hand.middle_finger_dip.x;
    let middleFingerDipY = hand.middle_finger_dip.y;
   
    /*
    Start drawing on the hands here
    */

    fill(200, 50, 190);
    ellipse(indexFingerTipX, indexFingerTipY, 30, 30);

    // // fill (0);
    // // line (indexFingerTipX,indexFingerTipY ,middleFingerTipX , middleFingerTipY);
    // // drawPoints(hand)

    // fingerPuppet(pinkyFingerTipX, pinkyFingerTipY); // can copy something from another code

    // fingerPuppet(middleFingerTipX, middleFingerTipY); // can copy something from another code

    // fingerPuppet (middleFingerDipX, middleFingerDipY);

    /*
    Stop drawing on the hands here
    */
  }
  // You can make addtional elements here, but keep the hand drawing inside the for loop. 
  //------------------------------------------------------
}

// This function draw's a dot on all the keypoints. It can be passed a whole face, or part of one. 
function drawPoints(feature) {
  push()
  for (let i = 0; i < feature.keypoints.length; i++) {
    let element = feature.keypoints[i];
    noStroke();
    fill(0, 255, 0);
    circle(element.x, element.y, 10);
  }
  pop()

}