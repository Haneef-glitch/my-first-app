// This file would contain the main logic for a web app.
// To use this code with the HTML file, you would typically use a framework like React,
// or use vanilla JavaScript to manipulate the DOM.

// Example of a simple component to render a campus location
const renderCampusItem = (item) => {
  const container = document.createElement('div');
  container.className = 'campus-item';
  container.innerHTML = `
    <h2>${item.name}</h2>
    <p>Location: ${item.location}</p>
    <p>Description: ${item.description}</p>
    <a href="${item.mapLink}" target="_blank">View on Map</a>
  `;
  return container;
};

// Example data
const campusData = [
  {
    name: 'Tech University',
    location: 'Bengaluru',
    description: 'A leading institution for technology and engineering.',
    mapLink: 'https://maps.app.goo.gl/yFqGf8E123ABCDEF'
  },
  {
    name: 'Green View Hostel',
    location: 'Bengaluru',
    description: 'Affordable and well-maintained hostel with good amenities.',
    mapLink: 'https://maps.app.goo.gl/yFqGf8E123ABCDEF'
  },
];

// Function to render all items to the page
const renderCampusList = (data) => {
  const appContainer = document.getElementById('app');
  appContainer.innerHTML = '';
  data.forEach(item => {
    appContainer.appendChild(renderCampusItem(item));
  });
};

// Initial render
document.addEventListener('DOMContentLoaded', () => {
  renderCampusList(campusData);
});
