// Get references to DOM elements
const sortOptions = document.getElementById("sort-options");
const tracklist = document.getElementById("tracklist");
const tracks = Array.from(tracklist.children);

// Helper functions
function sortTracks(option) {
  let sortedTracks;
  if (option === "alphabetical") {
    sortedTracks = tracks.sort((a, b) => {
      const titleA = a.dataset.title.toLowerCase();
      const titleB = b.dataset.title.toLowerCase();
      return titleA.localeCompare(titleB);
    });
  } else if (option === "duration") {
    sortedTracks = tracks.sort((a, b) => {
      const timeToSeconds = (time) => {
        const [mins, secs] = time.split(":").map(Number);
        return mins * 60 + secs;
      };
      return timeToSeconds(a.dataset.duration) - timeToSeconds(b.dataset.duration);
    });
  } else {
    sortedTracks = tracks; // Default order
  }

  // Clear and re-append sorted tracks
  tracklist.innerHTML = "";
  sortedTracks.forEach((track) => tracklist.appendChild(track));
}

// Event listener for dropdown
sortOptions.addEventListener("change", (event) => {
  const selectedOption = event.target.value;
  sortTracks(selectedOption);
});
