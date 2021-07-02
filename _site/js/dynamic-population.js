/* global createElement */

let programs = [];
let bands = [];

// Constructor for each Program
function Program(image, title, description) {
  this.image = image;
  this.title = title;
  this.description = description;
}

// Constructor for each Band
function Band(name, image, country, description) {
  this.name = name;
  this.image = image;
  this.country = country;
  this.description = description;
}

// Create array of Program objects
programs = [
  new Program('bands', 'Bands', 'Watch live some of the best Death Metal bands out there on a spectacular stage.'),

  new Program('talks', 'Talks', 'More than growls and blast beats. Hear what musicians have to say.'),

  new Program('shows', 'Shows', 'Adrenaline-fuelled shows with fire acts, acrobatics, sword fights, and more.'),

  new Program('karaoke', 'Karaoke', 'At the end of each day, Metal karaokes to relax around or show your talents.'),
];

// Create array of Band objects
bands = [
  new Band('Obscura', 'obscura', 'Germany', 'Groundbreaking polyrhythms, dramatic songwriting, and jaw-dropping virtuosity, combining different forms of technical, cerebral metal into a coherent synthesis of death, thrash and black metal merged with progressive elements'),

  new Band('Ne Obliviscaris', 'ne-obliviscaris', 'Australia', 'Extreme progressive metal, combining a duality of blasting black and death metal, with softer classically-influenced progressive tendencies, including violin, clean singing and acoustic'),

  new Band('Dark Tranquillity', 'dark-tranquillity', 'Sweden', 'One of the pioneers of the Gothenburg sound and creators of the explosive subgenre that combined death metal\'s intensity, progressive, and gothic experimentation with hooky, melodic, groove-oriented riffs and twin-guitar lead lines'),

  new Band('Opeth', 'opeth', 'Sweden', 'Leading force in progressive metal with death roots, fusioning death metal and prog with soft vocals, mellow ballads and acoustic instrumentation and establishing themselves as one of the most influential bands in the genre'),

  new Band('Ulcerate', 'ulcerate', 'New Zealand', 'A maelstrom of abrasive, dissonant art-metal guitars, ultra-atmospheric blend, thunderous blastbeats, and vocal roars evoking an all-encompassing sense of crushing dread'),

  new Band('Alkaloid', 'alkaloid', 'Germany', 'Defined through the field of tension created between musical opposites, merging extreme metal and other more diverse genres of music into a unique style, making death metal more than just blastbeats and growls.'),
];

// Structure elements of program/band card among themselves
function structureCard(card, object) {
  switch (object.constructor.name) {
    case 'Program':

      card['program-card'].append(card['program-image'], card['program-title'], card['program-description']);
      card['program-image'].append(card.image);
      return card['program-card'];

    default:
      card.band.append(card['band-image'], card['band-country'], card['band-description']);
      return card.band;
  }
}

// Create elements for program/card card
function createCard(object, index) {
  switch (object.constructor.name) {
    case 'Program':

      return {
        'program-card':
          createElement('div', 'program-card justify-between d-justify-unset flex-row d-flex-col d-wrap d-w-24 p-20 m-b-15'),
        'program-image':
          createElement('div', 'program-image flex-col d-flex-row justify-center w-30 d-w-100'),
        image:
          createElement('img', 'h-100 d-w-100 fit-cover',
            {
              src: `./images/program/${object.image}.webp`,
              alt: `Photo of ${object.title}`,
            }),
        'program-title':
          createElement('span', 'program-title flex-col d-flex-row justify-center center-text w-25 d-w-100 color-orange font-big weight-bold vertical-center d-m-t-15', {}, `${object.title}`),
        'program-description':
          createElement('p', 'program-description flex-col d-flex-row justify-center w-40 d-w-100 font-small d-m-t-1', {}, `${object.description}`),
      };

    default:

      return {
        band:
          createElement('div', `band flex-col${index === 5 ? '' : ' m-b-60'}`),
        'band-image':
          createElement('img', 'band-image flex-row m-b-10',
            {
              src: `./images/bands/${object.image}.webp`,
              alt: `Logo of ${object.name}`,
            }),
        'band-country':
          createElement('span', 'band-country border-bottom flex-col italic color-orange m-b-15', {}, `${object.country}`),
        'band-description':
          createElement('p', 'band-description flex-row font-smallest', {}, `${object.description}`),
      };
  }
}

// For each band object, create card elements, structure them, and append to parents
function populateFeaturedSection() {
  const bandSection = document.getElementById('bands');
  const bandColContainer = createElement('div', 'band-col-container flex-row justify-between wrap');
  const bandCol = createElement('div', 'band-col flex-col w-100 d-w-45');
  bands.forEach((band, index) => {
    let card = createCard(band, index);
    card = structureCard(card, band);

    // Append every 3 band cards to a band col, and append every band col to a band col container
    bandCol.append(card);
    if ((index + 1) % 3 === 0) {
      bandColContainer.appendChild(bandCol.cloneNode(true));
      bandCol.innerHTML = '';
    }
  });
  bandSection.append(bandColContainer);
}

// For each program object, create card elements, structure them, and append to parents
function populateProgramSection() {
  const programsContainer = document.querySelector('.programs-container');
  programs.forEach((program, index) => {
    let card = createCard(program, index);
    card = structureCard(card, program);
    programsContainer.append(card);
  });
}

function populateSections() {
  populateProgramSection();
  populateFeaturedSection();
}

// Create HTML for Featured Bands section after whole page has loaded
window.addEventListener('load', populateSections);