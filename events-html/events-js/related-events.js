const allEvents = [
  {
    title: "Cycle Donation Drive",
    date: "November 25, 2025",
    img: "/images/demo.png",
    url: "cycle-donation-drive.html"
  },
  {
    title: "Children's Day Celebration",
    date: "November 14, 2025",
    img: "/images/demo.png",
    url: "childrens-day.html"
  },
  {
    title: "Community Health Camp",
    date: "October 28, 2025",
    img: "/images/demo.png",
    url: "community-health-camp.html"
  },
  // new list 
  {
    title: "2025 Annual Report Released",
    date: "October 10, 2025",
    img: "images/annual-report.jpg",
    url: "annual-report.html"
  },
  {
    title: "Teacher Training Workshop",
    date: "September 18, 2025",
    img: "images/teacher-training.jpg",
    url: "teacher-training.html"
  },
  // 10 new events/news
  {
    title: "Summer Art Camp",
    date: "November 27, 2025",
    img: "/images/demo.png",
    url: "summer-art-camp.html"
  },
  {
    type: "event",
    title: "Independence Day Program",
    date: "August 15, 2025",
    img: "images/independence-day.jpg",
    url: "independence-day.html"
  },
  {
    title: "Parent Counseling Session",
    date: "July 24, 2025",
    img: "images/parent-counseling.jpg",
    url: "parent-counseling.html"
  },
  {
    title: "Literacy Awareness Walk",
    date: "July 10, 2025",
    img: "images/literacy-walk.jpg",
    url: "literacy-walk.html"
  },
  {
    title: "Volunteer Meetup",
    date: "June 27, 2025",
    img: "images/volunteer-meetup.jpg",
    url: "volunteer-meetup.html"
  },
  {
    title: "New Library Opening",
    date: "June 12, 2025",
    img: "images/library-opening.jpg",
    url: "library-opening.html"
  },
  {
    title: "Sports Day Event",
    date: "May 20, 2025",
    img: "images/sports-day.jpg",
    url: "sports-day.html"
  },
  {
    title: "Nutrition Workshop",
    date: "May 5, 2025",
    img: "images/nutrition-workshop.jpg",
    url: "nutrition-workshop.html"
  },
  {
    title: "Exam Success Tips Seminar",
    date: "April 18, 2025",
    img: "images/exam-tips.jpg",
    url: "exam-tips.html"
  },
  {
    title: "Cleanliness Drive",
    date: "March 28, 2025",
    img: "images/cleanliness-drive.jpg",
    url: "cleanliness-drive.html"
  }

  // Add more events/news here
];

// Optionally, exclude the current page from "related"
const currentPage = window.location.pathname.split('/').pop();
const recentEvents = allEvents
  .filter(e => e.url !== currentPage)
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .slice(0, 3);

// Generate HTML
const relatedList = document.querySelector('.related-list');
if (relatedList) {
  recentEvents.forEach(event => {
    const card = document.createElement('a');
    card.className = 'related-card';
    card.href = event.url;
    card.innerHTML = `
      <img src="${event.img}" alt="${event.title}">
      <span class="related-title">${event.title}</span>
      <span class="related-date">${event.date}</span>
    `;
    relatedList.appendChild(card);
  });
}
