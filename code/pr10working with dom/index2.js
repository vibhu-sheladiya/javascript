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
  var imgElement = boxElement.getElementsByTagName('img')[0];
  imgElement.src = '';
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
// var box = document.getElementById('box');

// box.addEventListener('mouseover', function() {
//   fetchImage()
//     .then(function(imageUrl) {
//       var imgElement = box.getElementsByTagName('img')[0];
//       imgElement.src = imageUrl;
//     })
//     .catch(function(error) {
//       console.error('Error:', error);
//     });
// });

// box.addEventListener('mouseout', function() {
//   var imgElement = boxElement.getElementsByTagName('img')[0];
//   imgElement.src = 'imageUrl';
// });

// function fetchImage() {
//   return fetch('https://picsum.photos/200/200')
//     .then(function(response) {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.url;
//     });
// }
// const box = document.querySelector('.box');

// const getRandomImageUrl = async ()=> {
// const response = await fetch('https://picsum.photos/200/200');
// return response.url;
// };
// box.onmouseover = async ()=> {
// const newImageUrl = await getRandomImageUrl();
// box.style.backgroundImage = 'url(${newImageUrl})';
// };
// box.onmouseleave = () => {
// box.style.beckgroundImage ='';
// };