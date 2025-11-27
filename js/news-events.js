document.addEventListener('DOMContentLoaded', function () {
  const search = document.getElementById('searchBox');
  const typeFilter = document.getElementById('filterType');
  const sortBy = document.getElementById('sortBy');
  // const cards = Array.from(document.querySelectorAll('.news-card'));
  const newsList = document.querySelector('.news-list');
  
  const cards = Array.from(document.querySelectorAll('.news-card'));

  cards.forEach(card => {
    card.addEventListener('click', function() {
      const url = card.dataset.url;
      if (url) {
        window.location.href = url;
      }
    });
  });


  // Get all relevant text in the card for searching
  function getCardText(card) {
    return card.querySelector('.news-content').textContent.toLowerCase();
  }

  // Each card should have data-type="event" or data-type="news" in HTML for best results
  function getCardType(card) {
    return card.dataset.type || '';
  }

  // Parse date
  function getCardDate(card) {
    const dateStr = card.querySelector('.news-date').textContent;
    return new Date(dateStr);
  }

  // Get title for sorting
  function getCardTitle(card) {
    return card.querySelector('h2').textContent.toLowerCase();
  }

  function filterAndSort() {
    const query = (search.value || '').toLowerCase();
    const type = typeFilter.value;
    const order = sortBy.value;

  
    // Filter cards by search and type
    let filtered = cards.filter(card => {
      const textMatch = !query || getCardText(card).includes(query);
      const typeMatch = !type || getCardType(card) === type;
      return textMatch && typeMatch;
    });

    // Sort cards
    if (order === 'latest') {
      filtered.sort((a, b) => getCardDate(b) - getCardDate(a));
    } else if (order === 'oldest') {
      filtered.sort((a, b) => getCardDate(a) - getCardDate(b));
    } else if (order === 'title') {
      filtered.sort((a, b) => getCardTitle(a).localeCompare(getCardTitle(b)));
    }

    // Hide all, show sorted filtered in order
    cards.forEach(card => card.style.display = 'none');
    filtered.forEach(card => card.style.display = '');

    // Physically reorder DOM elements
    filtered.forEach(card => newsList.appendChild(card));

    // Show "No results" message if needed
    let noResult = document.getElementById('noResultMsg');
    if (!noResult) {
      noResult = document.createElement('div');
      noResult.id = 'noResultMsg';
      noResult.style.color = '#b00';
      noResult.style.textAlign = 'center';
      noResult.style.margin = '22px';
      newsList.appendChild(noResult);
    }
    noResult.style.display = filtered.length === 0 ? '' : 'none';
    noResult.textContent = filtered.length === 0 ? 'No news/events found.' : '';
  }

  // Attach event listeners
  search.addEventListener('input', filterAndSort);
  typeFilter.addEventListener('change', filterAndSort);
  sortBy.addEventListener('change', filterAndSort);

  // Set default data-type for each card (customize if you want manual control)
  cards.forEach(card => {
    const title = getCardTitle(card);
    if (title.includes('event') || title.includes('celebration') || title.includes('camp')) {
      card.dataset.type = 'event';
    } else {
      card.dataset.type = 'news';
    }
  });

  filterAndSort(); // Initial display
});



// cards.forEach(card => {
//   card.addEventListener('click', function() {
//     const url = card.dataset.url;
//     if (url) {
//       window.location.href = url;
//     }
//   });
// });


