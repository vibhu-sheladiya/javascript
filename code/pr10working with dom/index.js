function renderBoxes() {
  

var renderButton = document.getElementById('renderBtn');
var boxes=document.getElementsByClassName('box')
// Event listener for box height and width change
document.getElementById('box1').addEventListener('mouseover', function() {
    this.style.width = '250px';
    this.style.height = '250px';
    this.style.rotate= '45deg';
  });
  
  document.getElementById('box1').addEventListener('mouseout', function() {
    this.style.width = '200px';
    this.style.height = '200px';
    this.style.rotate='0deg';
  });
  
  // Event listener for box color change
  document.getElementById('box2').addEventListener('mouseover', function() {
    var randomColor = getRandomColor();
    this.style.backgroundColor = randomColor;
  });
  
  document.getElementById('box2').addEventListener('mouseout', function() {
    this.style.backgroundColor = '#e9e9e9';
    // this.style.backgroundColor = 'blue';
  });
  
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  // Attach event listener to the render button
// renderButton.addEventListener('click', function() {
//   renderBoxes();
// });
// Render the initial state of the boxes
// renderBoxes();
// Function to render the initial state of the boxes
// function renderBoxes() {
//   setInterval(() => {
//     for (var i = 0; i < boxes.length; i++) {
//       changeBoxColor(boxes[i]);
//       changeBoxImage(boxes[i]);
//       changeBoxText(boxes[i]);
//     }
//   }, 3000);
 
// }

  // Event listener for image and text change
  // document.getElementById('box3').addEventListener('mouseover', function() {
  //   this.getElementsByTagName('img')[0].src = 'newimage .jpg';
  //   this.getElementsByTagName('p')[0].textContent = 'helo';
   
  // });
  
  // document.getElementById('box3').addEventListener('mouseout', function() {
  //   this.getElementsByTagName('img')[0].src = 'image3.jpg';
  //   this.getElementsByTagName('p')[0].textContent = 'Box 3';
  // });
  var boxElement = document.getElementById('box');

boxElement.addEventListener('mouseover', function() {
  fetchImage()
    .then(function(imageUrl) {
      var imgElement = boxElement.getElementsByTagName('img')[0];
      imgElement.src = imageUrl;
    })
    .catch(function(error) {
      console.error('Error:', error);
    });
});

boxElement.addEventListener('mouseout', function() {
  // var imgElement = boxElement.getElementsByTagName('img')[0];
  this.getElementsByTagName('img')[0].src = 'image3.jpg';
    this.getElementsByTagName('p')[0].textContent = 'Box 3';
  // imgElement.src = '';
});

function fetchImage() {
  return fetch('https://picsum.photos/200/200')
    .then(function(response) {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.url;
    });
}
var boxElement = document.getElementById('box');
var buttonElement = document.getElementById('btn');

boxElement.addEventListener('mouseover', function() {
  fetchImage()
    .then(function(imageUrl) {
      var imgElement = boxElement.getElementsByTagName('img')[0];
      imgElement.src = imageUrl;
    })
    .catch(function(error) {
      console.error('Error:', error);
    });
});

boxElement.addEventListener('mouseout', function() {
  var imgElement = boxElement.getElementsByTagName('img')[0];
  imgElement.src = '';
});

// buttonElement.addEventListener('click', function() {
//   runFunction();
// });
var renderButton = document.getElementById('renderBtn');

// renderButton.addEventListener('click', function() {
//   autoRender();
// });

function autoRender() {
  renderBoxes();

  setInterval(function() {
    renderBoxes();
  }, 5000); // Render every 5 seconds
}

function runFunction() {
  // Add your custom function logic here
  document.getElementById('box1').addEventListener('Click', function() {
    this.style.width = '250px';
    this.style.height = '250px';
    this.style.rotate= '45deg';
  });
}

function fetchImage() {
  return fetch('https://picsum.photos/200/200')
    .then(function(response) {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.url;
    });
}

}

  