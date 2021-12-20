var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

var slideFeatureIndex = 1;
showDivsFeatures(slideIndex);

function showDivsFeatures(n) {
    console.log(n)
    var j;
    var m = document.getElementsByClassName("slider-feature-content");
    var dot = document.getElementsByClassName("dot-item")
    slideFeatureIndex = n;
    for (j = 0; j < m.length; j++) {
      m[j].style.display = "none";
      dot[j].style.opacity = "0.5";
    }
    m[slideFeatureIndex - 1].style.display = "flex";
    dot[slideFeatureIndex - 1].style.opacity = "0.8";
  }
