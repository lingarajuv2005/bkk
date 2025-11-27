// Get all news/event cards and section
const cards = Array.from(document.querySelectorAll('.news-card'));
const newsList = document.querySelector('.news-list');

// Utility functions
function getCardTitle(card) {
  return card.querySelector('h2').textContent.trim().toLowerCase();
}
function getCardDate(card) {
  return new Date(card.querySelector('.news-date').textContent.trim());
}
function getCardType(card) {
  return card.dataset.type || '';
}

// Current selections
let currentType = '';
let currentSort = 'latest';

// Core update function
function updateCards() {
  let filtered = cards.filter(card => !currentType || getCardType(card) === currentType);
  if (currentSort === 'latest') {
    filtered.sort((a, b) => getCardDate(b) - getCardDate(a));
  } else if (currentSort === 'oldest') {
    filtered.sort((a, b) => getCardDate(a) - getCardDate(b));
  } else if (currentSort === 'title') {
    filtered.sort((a, b) => getCardTitle(a).localeCompare(getCardTitle(b)));
  }
  cards.forEach(card => card.style.display = 'none');
  filtered.forEach(card => card.style.display = '');
  filtered.forEach(card => newsList.appendChild(card));
}

// UI handlers
function filterByType(type) {
  currentType = type;
  updateCards();
}
function sortByType(order) {
  currentSort = order;
  updateCards();
}

// Initial sort/filter
updateCards();
