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

var slideCyblocsIndex = 1;
showDivsCyblocs(slideCyblocsIndex);

function plusDivsCyblocs(n) {
  showDivsCyblocs((slideCyblocsIndex += n));
}

function showDivsCyblocs(n) {
    let j;
    let m = document.getElementsByClassName("left-cyblocs");
    let dotCyblocs = document.getElementsByClassName("dot-item-cybloc");
    if (n > m.length) {
      slideCyblocsIndex = 1;
    } else if (n < 1) {
      slideCyblocsIndex = m.length;
    } else {
      slideCyblocsIndex = n;
    }
    for (j = 0; j < m.length; j++) {
      m[j].style.display = "none";
      dotCyblocs[j].style.background = "#FFFFFF";
    }
    m[slideCyblocsIndex - 1].style.display = "block";
    dotCyblocs[slideCyblocsIndex - 1].style.background = "#FF00C9";
  }

  function selectCybloc(index) {
    let j;
    let m = document.getElementsByClassName("left-cyblocs");
    let dotCyblocs = document.getElementsByClassName("dot-item-cybloc");
    slideCyblocsIndex = index;
    for (j = 0; j < m.length; j++) {
      m[j].style.display = "none";
      dotCyblocs[j].style.background = "#FFFFFF";
    }
    m[slideCyblocsIndex - 1].style.display = "block";
    dotCyblocs[slideCyblocsIndex - 1].style.background = "#FF00C9";
  }
