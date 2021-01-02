function imageNext() {
  var image = document.getElementById("kitten");
  var imageGroup = [
    "https://cdn.glitch.com/fa0a632f-d46e-46da-8adc-11f2e4f71ea5%2Fdownload.jfif?v=1609611264372",
    "https://cdn.glitch.com/fa0a632f-d46e-46da-8adc-11f2e4f71ea5%2Fimage.jfif?v=1609611248253",
    "https://cdn.glitch.com/fa0a632f-d46e-46da-8adc-11f2e4f71ea5%2FKittenFluffs4.jpg?v=1609611263777",
    "https://cdn.glitch.com/fa0a632f-d46e-46da-8adc-11f2e4f71ea5%2F259729697-H.jpg?v=1609611245505",
    "https://cdn.glitch.com/fa0a632f-d46e-46da-8adc-11f2e4f71ea5%2Fthere-s-a-kitten-cuddle-taking-place-in-cork-this-week.jpg?v=1609611252711"
  ];
  if(imageGroup.indexOf(image.src) == imageGroup.length-1) {
    image.src = imageGroup[0];
  }
  else {
    image.src = imageGroup[imageGroup.indexOf(image.src) +1];
  }
}