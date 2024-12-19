	// Tableau des slides avec leurs images et textes associés
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



 // Nombre total de slides dans le tableau
  const tabSize = slides.length; 

  // Slide actuellement affichée
  let indexcourant = 0; 
  
  // Initialisation des éléments HTML
  const img = document.getElementById("banner-img"); 
  const tagline = document.getElementById("tagline"); 
  const dotsContainer = document.getElementById("dots"); 
  const arrowLeft = document.querySelector('.arrow_left'); 
  const arrowRight = document.querySelector('.arrow_right'); 
  
  // Fonction mise à jour de la slide affichée
  function updateSlide() {
	
	img.setAttribute("src", `./assets/images/slideshow/${slides[indexcourant].image}`);
	console.log( slides[indexcourant].image);

	tagline.innerHTML = slides[indexcourant].tagLine;
	  console.log( slides[indexcourant].tagLine);

	document.querySelectorAll(".dot").forEach((dot, i) => {
	  dot.classList.toggle("dot_selected", i === indexcourant);
	});
	console.log( indexcourant);
  }
  
  // Initialisation des points (dots)
  slides.forEach((_, i) => {
	const dot = document.createElement("div");
	
	if (i === 0) {
	  dot.className = "dot dot_selected"; 
	} else {
	  dot.className = "dot"; 
	}
	
	dot.id = i; // On attribue l'ID correspondant à l'index
	dotsContainer.appendChild(dot); // On ajoute le point au conteneur
  });
  console.log( dotsContainer.children.length, );
  // Affiche la première slide
  updateSlide();
  
  // Fonction pour changer de slide
  function changeSlide(direction) {
	// Calcul de la nouvelle slide (gestion circulaire:opérateur modulo)
	indexcourant = (indexcourant + direction + tabSize) % tabSize;
	// Mise à jour de l'affichage
	updateSlide();
  }
  
  // Écouteurs d'événements pour les flèches
  arrowLeft.addEventListener("click", () => changeSlide(-1));
  arrowRight.addEventListener("click", () => changeSlide(1));
  

  
  