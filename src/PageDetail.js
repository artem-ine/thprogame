export const PageDetail = (argument) => {
  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, "-");
    const displayGame = (gameData) => {
      const {
        name,
        released,
        description,
        background_image,
        tags,
        genres,
        publishers,
        rating,
        rating_top,
        developers,
        platforms,
        stores,
        id,
        website,
        reviews_count,
      } = gameData;

      const articleDOM = document.querySelector(".page-detail .article");

      fetch(
        `https://api.rawg.io/api/games/${id}/movies?key=${process.env.API_KEY}`
      )
        .then((response) => response.json())
        .then((responseData) => {
          if (responseData.results[0]) {
            const trailerDiv = document.querySelector(".trailer");
            trailerDiv.innerHTML = `
                <h2 class="header">TRAILER</h2>
                <div id="video">
                  <iframe
                    src="${responseData.results[0].data.max}"
                    title="Game Trailer"
                    frameborder="0"
                    allowfullscreen
                    autoplay="0"
                  ></iframe>
                </div>
              `;
          } else {
            const trailerDiv = document.querySelector(".trailer");
            trailerDiv.innerHTML = `
                <h2 class="header">TRAILER</h2>
                <p>No trailer available for now.</p>
                `;
          }
        })
        .catch((error) => {
          console.error(error);
        });

      fetch(
        `https://api.rawg.io/api/games/${id}/screenshots?key=${process.env.API_KEY}`
      )
        .then((response) => response.json())
        .then((responseData) => {
          console.log(responseData);
          if (responseData.results.length > 0) {
            const screenshotDiv = document.querySelector(".screenshots");
            let screenshotsHTML = `
              <h2 class="header">SCREENSHOTS</h2>
              <div id="screenshots">
            `;
            responseData.results.forEach((screenshot) => {
              screenshotsHTML += `
                <img
                  src="${screenshot.image}"
                  alt="Screenshot"
                  class="card"
                >
              `;
            });
            screenshotsHTML += `
          </div>
          `;
            screenshotDiv.innerHTML = screenshotsHTML;
          } else {
            const screenshotDiv = document.querySelector(".screenshots");
            screenshotDiv.innerHTML = `
            <h2 class="header">SCREENSHOTS</h2>
            <p>No screenshots available for now.</p>
          `;
          }
        })
        .catch((error) => {
          console.error(error);
        });

      articleDOM.innerHTML = `
        <section class="game-info">
          <img src="${background_image}" class="banner">
          <div class="ctacontainer">
            <button class="cta button"><a href="${website}">Check Website        ➤</a></button>
          </div>
          <div class="detail-heading">
            <h2>${name},</h2>
            <p class="header">${rating}/${rating_top} - for ${reviews_count} reviews</p>
          </div>
          <div>
            <p>${description}</p>
          </div>
          <div class="makers">
            <div class="grid">
              <h3 class="subtitle">Release Date</h3>
              <p>${released}</p>
            </div>

            <div class="grid">
              <h3 class="subtitle">Developer</h3>
              <p>${developers.map((dev) => dev.name).join(", ")}</p>
            </div>

            <div class="grid">
              <h3 class="subtitle">Platform</h3>
              <p>${platforms
                .map((platform) => platform.platform.name)
                .join(", ")}</p>
            </div>

            <div class="grid">
              <h3 class="subtitle">Publisher</h3>
              <p>${publishers.map((publisher) => publisher.name).join(", ")}</p>
            </div>
          </div>

          <div class="add-info">
            <div class="grid">
              <h3 class="subtitle">Genre</h3>
              <p>${genres.map((genre) => genre.name).join(", ")}</p>
            </div>

            <div class="grid">
              <h3 class="subtitle">Tags</h3>
              <p>${tags.map((tag) => tag.name).join(", ")}</p>
            </div>
          </div>

          <div class="stores">
            <div>
              <h2 class="header">BUY</h2>
              <p>${stores
                .map(
                  (store) =>
                    `<a href="https://www.${store.store.domain}/game/${gameData.name}" target="_blank">${store.store.name}</a><br>`
                )
                .join("")}
              </p>
            </div>
          </div>
          <div class="trailer">
          </div>
          <div class="screenshots">
          </div>
        </div>
      `;
    };

    const fetchGame = (url, argument) => {
      fetch(`${url}/${argument}?key=${process.env.API_KEY}`)
        .then((response) => response.json())
        .then((responseData) => {
          displayGame(responseData);
        });
    };

    fetchGame("https://api.rawg.io/api/games", cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-detail">
        <div class="article">
        </div>
      </section>
    `;

    preparePage();
  };

  render();
};
