var square = document.body.querySelector('.dragElement');

square.onmousedown = function(e) {

  var coords = getCoords(square);
  var shiftX = e.pageX - coords.left;
  var shiftY = e.pageY - coords.top;
  square.style.position = 'absolute';
  document.body.appendChild(square);
  moveAt(e);
  square.style.zIndex = 1000;

  function moveAt(e) {
    square.style.left = e.pageX - shiftX + 'px';
    square.style.top = e.pageY - shiftY + 'px';
  }

  document.onmousemove = function(e) {
    moveAt(e);
  };

  square.onmouseup = function() {
    document.onmousemove = null;
    square.onmouseup = null;
  };
}

square.ondragstart = function() {
  return false;
};

function getCoords(elem) {
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}
