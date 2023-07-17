// Hover effect for box color change
var boxes = document.getElementsByClassName('box');

for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('mouseover', function() {
    this.style.backgroundColor = 'lightblue';
  });

  boxes[i].addEventListener('mouseout', function() {
    this.style.backgroundColor = '#e9e9e9';
  });
}

// Image and text change on hover
for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('mouseover', function() {
    var img = this.getElementsByTagName('img')[0];
    var p = this.getElementsByTagName('p')[0];

    img.src = 'image3.jpg';
    p.textContent = 'New Text';
  });

  boxes[i].addEventListener('mouseout', function() {
    var img = this.getElementsByTagName('img')[0];
    var p = this.getElementsByTagName('p')[0];

    img.src = 'image' + (i + 1) + '.jpg';
    p.textContent = 'Box ' + (i + 1);
  });
}

// Button click event
var buttons = document.getElementsByTagName('button');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    var box = this.parentNode;
    box.style.Color = 'lightgreen';
  });
}
