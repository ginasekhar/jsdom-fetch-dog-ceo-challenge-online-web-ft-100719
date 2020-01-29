//console.log('%c HI', 'color: firebrick')



function fetchDogImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    return fetch(imgUrl)
    .then((response) => response.json())
    .then((data) => {
      renderDogImages(data);
    }); 
  }
  
  function renderDogImages(json) {
    const dogImgCont = document.getElementById('dog-image-container');

    json.message.forEach(dogImage => {
      const img = document.createElement('img')
      img.src  = `${dogImage}`
      dogImgCont.appendChild(img)
    })
  }
  
  function fetchDogBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    return fetch(breedUrl)
    .then((response) => response.json())
    .then((data) => {
      renderDogBreeds(Object.keys(data.message));
    }); 
  }

  function renderDogBreeds(json) {
    const dogBreedList = document.getElementById('dog-breeds');
    
    json.forEach(dogBreed => {
      let newLI = document.createElement('li')
      newLI.innerText = dogBreed
      dogBreedList.appendChild(newLI)
    })
    listItems = document.querySelectorAll("li");

    listItems.forEach(function(item) {
        item.addEventListener('click', function() {
            changeColor(event);
        });
    });

    breedSelectListener(json);
  }
    
  document.addEventListener('DOMContentLoaded', function() {
    fetchDogImages();
    fetchDogBreeds();
    })

   
function breedSelectListener(json) {
    letterOption = document.getElementById('breed-dropdown');
    letterOption.addEventListener('change', function() {
        selectedLetter = letterOption.value;

        const dogBreedList = document.getElementById('dog-breeds');
        let child = dogBreedList.lastElementChild;
        while (child) {
            dogBreedList.removeChild(child);
            child = dogBreedList.lastElementChild;
        }

        filteredList = json.filter(breed => breed.startsWith(selectedLetter));
        renderDogBreeds(filteredList);
     });
    } //breedSelectListener
    
    
  function changeColor(event) {
    event.target.style.color = 'blue';
  }

//   function filterByLetter(letter) {
//     const dogBreedList = document.getElementById('dog-breeds');
    
//     json.forEach(dogBreed => {
//       let newLI = document.createElement('li')
//       newLI.innerText = dogBreed
//       dogBreedList.appendChild(newLI)
//     })
//     listItems = document.querySelectorAll("li");

//   }