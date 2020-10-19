// Below is the last activity in lab which puts together everything we've
// covered in the lab thus far. It has ond main buttons: "Add Random Doggo".
// "Add Random Doggo" fetches a randmo dog image using the Dog API
// https://dog.ceo/dog-api/documentation

let myDogArray = [];

function CardTemplate(parentEl, headerText, bodyText, imgUrl) {
  // to fill in
  let divContainer = document.createElement("div");
  divContainer.className = "card";
  parentEl.appendChild(divContainer);

  let img = document.createElement("img");
  img.src = imgUrl;
  console.log(imgUrl);
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

  let saveButton = document.createElement("button");
  saveButton.textContent = "save";
  divContainer.appendChild(saveButton);
  saveButton.onclick = function() {
    const dog = {
      dogType: headerText,
      dogEmojis: bodyText,
      dogPic: imgUrl
    }
    myDogArray.push(dog);
    console.log(dog);
    console.log(myDogArray);
    const jsonDog = JSON.stringify(myDogArray);
    localStorage.setItem("myDogs",jsonDog);
  };
  

  return divContainer;
}

function onLoad() {
  const myDogs = localStorage.getItem("myDogs");
  if(myDogs === null) {
    console.log('no dogs!');
    return;
  }
  else {
    const savedDogs = JSON.parse(myDogs);
    console.log(savedDogs);
    savedDogs.forEach((dog) => {
      CardTemplate(divDoggoContainer, dog.dogType, dog.dogEmojis, dog.dogPic);
      myDogArray.push(dog);
    });
    
   }
};

function getBreedName(msgUrl) {
  // URL is formatted for example https://images.dog.ceo/breeds/basenji/n02110806_5381.jpg
  let pathComponents = msgUrl.split("/");
  return pathComponents.slice(-2, -1);
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

let dog = {
  breed: "basenji",
  name: "Frodo",
  getBreedName: function () {
    console.log('function this', this);
    return this.breed + " " + this.name;
  },
  getBreedNameArrow: () => {
    console.log('arrow this', this);
    return this.breed + " " + this.name;
  }
}

let aCreateRandom = document.getElementById("a-create-random");
const divDoggoContainer = document.getElementById("div-doggos");
aCreateRandom.onclick = function (e) {
  e.preventDefault();
  console.log(dog);
  console.log('this will return a dog name', dog.getBreedName());
  console.log('this will return undefined because the this keyword is not operating at the dog scope', dog.getBreedNameArrow());
  createNewRandomDoggoCard(divDoggoContainer);
};

let clearButton = document.getElementById("remove-dogs");
clearButton.onclick = function() {
  localStorage.removeItem("myDogs");
}