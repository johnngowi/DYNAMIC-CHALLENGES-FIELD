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


fetchData();

async function fetchData(){


  try{

    const filter=document.getElementById("filter").value.toLocaleLowerCase();
    const response =await fetch(`https://pokeapi.co/api/v2/pokemon/${filter}`);
    if (!response.ok){
      throw new Error("could not fetch resource");

    }

    const data =await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");
    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
  }
  catch (error) {
    console.log("error");
}
}
















