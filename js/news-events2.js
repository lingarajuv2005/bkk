// 1. Get all news/event cards
const cards = Array.from(document.querySelectorAll('.news-card'));
const newsList = document.querySelector('.news-list');

// 2. Utility: Get field from card
function getCardTitle(card) {
  return card.querySelector('h2').textContent.trim().toLowerCase();
}
function getCardDate(card) {
  const dateText = card.querySelector('.news-date').textContent.trim();
  // Date should be in "Month Day, Year" format
  return new Date(dateText);
}
function getCardType(card) {
  return card.dataset.type || '';
}

// 3. Current filter/sort selections
let currentType = ''; // 'event', 'news', or '' for all
let currentSort = 'latest'; // 'latest', 'oldest', 'title'

// 4. Filter and Sort and update list
function updateCards() {
  let filtered = cards.filter(card => {
    return !currentType || getCardType(card) === currentType;
  });
  if (currentSort === 'latest') {
    filtered.sort((a, b) => getCardDate(b) - getCardDate(a));
  } else if (currentSort === 'oldest') {
    filtered.sort((a, b) => getCardDate(a) - getCardDate(b));
  } else if (currentSort === 'title') {
    filtered.sort((a, b) => getCardTitle(a).localeCompare(getCardTitle(b)));
  }
  // Hide all cards, then show sorted/filtered ones
  cards.forEach(card => card.style.display = 'none');
  filtered.forEach(card => card.style.display = '');
  // Physically reorder in DOM
  filtered.forEach(card => newsList.appendChild(card));
}

// 5. UI handlers
function filterByType(type) {
  currentType = type;
  updateCards();
}
function sortByType(order) {
  currentSort = order;
  updateCards();
}

// 6. Initial update
updateCards();
