  window.onload = function() {
  // Get the Image element
  var imgElements = document.querySelectorAll("img");

  // New image
  var imageUrl = 'https://www.anunciarbr.net/wp-content/uploads/2023/03/forbidden-nao-permitido.png';

  imgElements.forEach(function(element, index, array) {

    if (element.src.toLowerCase().includes("cyto")) {
      setTimeout(function() {
        element.setAttribute("src", imageUrl);
      }, 1000);
    }
  });

}

