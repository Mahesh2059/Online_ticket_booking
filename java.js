const movies = [
  {
    
    title: "mission impossible",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/MI_%E2%80%93_Fallout.jpg/250px-MI_%E2%80%93_Fallout.jpg"
  },
  {
    title: "Barbie",
    image: "https://upload.wikimedia.org/wikipedia/en/0/0b/Barbie_2023_poster.jpg"
  },
  {
    title: "Sikandar",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Sikandar_2025_film_poster.jpg/250px-Sikandar_2025_film_poster.jpg"
  },
  {
    title: "Avatar: The Way of Water",
    image: "https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg"
  },
  {
    title: "Spider-Man: No Way Home",
    image: "https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg"
  },
  {
    title: "Dune",
    image: "https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg"
  }
];

const movieGrid = document.getElementById("movieGrid");

movies.forEach((movie) => {
  const card = document.createElement("div");
  card.className = "movie-card";
  card.innerHTML = `
    <img src="${movie.image}" alt="${movie.title}">
       <h1class="movie-title">${movie.title}</h1>
    <button class="book-btn" onclick="bookMovie('${movie.title}')">Book Now</button>
  `;
  movieGrid.appendChild(card);
});

function bookMovie(title) {
  alert(`Booking page for: ${title}`);
  // You can redirect to a real booking page like:
  //window.location.href = `booking.html?movie=${encodeURIComponent(title)}`;
}
function bookMovie(title) {
  window.location.href = `booking.html?movie=${encodeURIComponent(title)}`;
}
