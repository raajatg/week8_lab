// Below is the last activity in lab which puts together everything we've
// covered in the lab thus far. It has ond main buttons: "Add Random Doggo".
// "Add Random Doggo" fetches a randmo dog image using the Dog API
// https://dog.ceo/dog-api/documentation

// array to keep track of saved dogs locally
let dogArray = [];

function CardTemplate(parentEl, headerText, bodyText, imgUrl) {
  // to fill in
  let divContainer = document.createElement("div");
  divContainer.className = "card";
  parentEl.appendChild(divContainer);

  let img = document.createElement("img");
  img.src = imgUrl;
  img.width = 200;
  divContainer.appendChild(img);

  let divTextContainer = document.createElement("div");
  divTextContainer.className = "text";
  divContainer.appendChild(divTextContainer);

  let header = document.createElement("h2");
  header.innerHTML = headerText;
  divTextContainer.appendChild(header);

  let pBodyText = document.createElement("p");
  pBodyText.innerHTML = bodyText;
  divTextContainer.appendChild(pBodyText);

  // new content to save dogs - walk through this in exercise
  let saveDogBtn = document.createElement('button');
  saveDogBtn.textContent = 'Save!';
  saveDogBtn.onclick = function () {
    const dog = {
      header: headerText,
      body: bodyText,
      imgUrl: imgUrl
    }
    dogArray.push(dog);
    const json = JSON.stringify(dogArray);
    localStorage.setItem("myDogs", json);
  };
  divContainer.appendChild(saveDogBtn);

  return divContainer;
}

function getBreedName(msgUrl) {
  // URL is formatted for example https://images.dog.ceo/breeds/basenji/n02110806_5381.jpg
  let pathComponents = msgUrl.split("/");
  return pathComponents.slice(-2, -1);
}

  // new function to load dogs from localStorage - walk through this in exercise
function onLoad() {
  const myDogs = localStorage.getItem("myDogs");
  if(myDogs === null) {
    console.log('no dogs!');
  }
  else {
    const savedDogs = JSON.parse(myDogs);
    savedDogs.forEach((dog) => {
      CardTemplate(divDoggoContainer, dog.header, dog.body, dog.imgUrl);
      dogArray.push(dog);
    });
  }
}

function createNewRandomDoggoCard(containerEl) {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let breed = getBreedName(data.message);
      CardTemplate(containerEl, breed, "🐶 🐕 ❤️", data.message);
    });
}

let aCreateRandom = document.getElementById("a-create-random");
const divDoggoContainer = document.getElementById("div-doggos");
aCreateRandom.onclick = function (e) {
  e.preventDefault();
  createNewRandomDoggoCard(divDoggoContainer);
};

  // new function to remove dogs from localStorage - walk through this in exercise
let clearButton = document.getElementById('clear-session-btn');
clearButton.onclick = function (e) {
  localStorage.removeItem('myDogs');
}
