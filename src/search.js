export const handleSearch = () => {
  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("search-input");

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchTerm = searchInput.value.trim();
    window.location.hash = `search/${encodeURIComponent(searchTerm)}`;
  });
};
