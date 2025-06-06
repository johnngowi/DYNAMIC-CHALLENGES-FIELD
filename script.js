const gallery = document.getElementById('gallery');
const loading = document.getElementById('loading');
const filter = document.getElementById('filter');
const themeToggle = document.getElementById('themeToggle');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const closeLightbox = document.getElementById('closeLightbox');
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');


// let photos=[];
// let filteredPhotos = [];
// let currentIndex = 0;


// fetchData();

// async function fetchData(){


//   try{

//     const filter=document.getElementById("filter").value.toLocaleLowerCase();
//     const response =await fetch(`https://pokeapi.co/api/v2/pokemon/${filter}`);
//     if (!response.ok){
//       throw new Error("could not fetch resource");

//     }

//     const data =await response.json();
//     const pokemonSprite = data.sprites.front_default;
//     const imgElement = document.getElementById("pokemonSprite");
//     imgElement.src = pokemonSprite;
//     imgElement.style.display = "block";
//   }
//   catch (error) {
//     console.log("error");
// }
// }

async function fetchData() {
  const photo = document.getElementById("filter").value.toLowerCase();

  if (!photo) {
    alert("Please enter a Pokémon name!");
    return;
  }

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${photo}`);
    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;

    const imgElement = document.getElementById("pokemonSprite");
    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
  } catch (error) {
    alert("Pokémon not found! Check the name and try again.");
    console.error(error);
  }
}

async function fetchPokemon(pokemonName) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
    if (!response.ok) {
      throw new Error("Could not fetch Pokémon");
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;

    const imgElement = document.getElementById("pokemonSprite");
    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
  } catch (error) {
    alert("Pokémon not found!");
    console.error(error);
  }
}

const pokemonList = [
  "charmander",
  "charmeleon",
  "raichu",
  "sandslash",
  "nidoking",
  "zubat",
  "persian",
  "venomoth",
  "muk",
  "hypno"
];

let currentIndex = 0;

async function fetchPokemon(pokemonName) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
    if (!response.ok) {
      throw new Error("Could not fetch Pokémon");
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;

    const imgElement = document.getElementById("pokemonSprite");
    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
  } catch (error) {
    alert("Pokémon not found!");
    console.error(error);
  }
}


function prev() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = pokemonList.length - 1; // loop to last
  }
  fetchPokemon(pokemonList[currentIndex]);
}

function next() {
  currentIndex++;
  if (currentIndex >= pokemonList.length) {
    currentIndex = 0; // loop to first
  }
  fetchPokemon(pokemonList[currentIndex]);
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}



















