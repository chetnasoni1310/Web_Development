var searchQuery = document.querySelector("#searchbar");


const nodelist = document.querySelectorAll(".container"); //this is a node-list
const containers = [...nodelist];
var faceName;

// searchbar.addEventListener("input",filterFaces);

searchQuery.addEventListener("input", function () {
  containers.forEach(function (element) {
    //loop through the container array
    //get its h3 text directly and compare with input search
    //hide or show the container immediately
    //this only works in small lists not in a largee project

    var h3 = element.querySelector("h3");
    faceName = h3.textContent.toLowerCase().trim();
    var query = searchQuery.value.toLowerCase().trim();
    if(faceName.startsWith(query))
    {
      element.style.display = 'block';
    }
    else
    {
        element.style.display = 'none'; 
    }
  });
});
