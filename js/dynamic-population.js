


let bands = [];

// Constructor for each Band
function Band(name, image, country, description) {
  this.name = name;
  this.image = image;
  this.country = country;
  this.description = description;
}

// Create array of Band objects
bands = [
  new Band('Obscura', 'obscura', 'Germany', 'Groundbreaking polyrhythms, dramatic songwriting, and jaw-dropping virtuosity, combining different forms of technical, cerebral metal into a coherent synthesis of death, thrash and black metal merged with progressive elements'),

  new Band('Ne Obliviscaris', 'ne-obliviscaris', 'Australia', 'Extreme progressive metal, combining a duality of blasting black and death metal, with softer classically-influenced progressive tendencies, including violin, clean singing and acoustic'),

  new Band('Dark Tranquillity', 'dark-tranquillity', 'Sweden', 'One of the pioneers of the Gothenburg sound and creators of the explosive subgenre that combined death metal\'s intensity, progressive, and gothic experimentation with hooky, melodic, groove-oriented riffs and twin-guitar lead lines'),

  new Band('Opeth', 'opeth', 'Sweden', 'Leading force in progressive metal with death roots, fusioning death metal and prog with soft vocals, mellow ballads and acoustic instrumentation and establishing themselves as one of the most influential bands in the genre'),

  new Band('Ulcerate', 'ulcerate', 'New Zealand', 'A maelstrom of abrasive, dissonant art-metal guitars, ultra-atmospheric blend, thunderous blastbeats, and vocal roars evoking an all-encompassing sense of crushing dread'),

  new Band('Alkaloid', 'alkaloid', 'Germany', 'Defined through the field of tension created between musical opposites, merging extreme metal and other more diverse genres of music into a unique style, making death metal more than just blastbeats and growls.')
];

//Create elements for band card
function createCard(band) {
  return {
    'band' : 
      createElement('div', 'band flex-col m-b-60 d-m-r-45'),
    'band-image' :
      createElement('img', 'band-image flex-row m-b-10', 
      { src: `./images/bands/${band.image}.png`,
        alt: `Logo of ${band.name}`,
      }),
    'band-country' :
      createElement('span', 'band-country border-bottom flex-col italic color-orange m-b-15', {}, `${band.country}`),
    'band-description' :
      createElement('p', 'band-description flex-row font-smallest', {}, `${band.description}`) 
  }
}

//Append elements of band card to direct parent
function structureCard(card) {
  card['band'].append(card['band-image'], card['band-country'], card['band-description']);
  return card['band'];
}

//Append every 3 band cards to a band col, and append every band col to a band col container
function appendCard(bandColContainer, bandCol, card, index) {
  bandCol.append(card);
  if ((index + 1) % 3 === 0) {
    bandColContainer.appendChild(bandCol.cloneNode(true));
    bandCol.innerHTML = '';
  }
}

//For each band object, create card elements, structure them, and append to parents
function populateFeaturedSection() {
  let bandSection = document.getElementById('bands');
  let bandColContainer = createElement('div', 'band-col-container flex-row wrap');
  let bandCol = createElement('div', 'band-col flex-col w-100 d-w-50');
  bands.forEach((band, index) => {
    let card = createCard(band);
    card = structureCard(card);
    appendCard(bandColContainer, bandCol, card, index);
  });
  bandSection.append(bandColContainer);
}

// Create HTML for Featured Bands section after whole page has loaded
window.addEventListener('load', populateFeaturedSection);