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
        slug,
      } = gameData;

      const articleDOM = document.querySelector(".page-detail .article");
      // articleDOM.querySelector("h1.title").innerHTML = name;
      // articleDOM.querySelector("p.release-date span").innerHTML = released;
      // articleDOM.querySelector("p.description").innerHTML = description;

      fetch(
        `https://api.rawg.io/api/games/${id}/movies?key=${process.env.API_KEY}`
      )
        .then((response) => response.json())
        .then((responseData) => {
          console.log(responseData.results[0]);
          if (responseData.results[0]) {
            const trailerDiv = document.querySelector(".trailer");
            trailerDiv.innerHTML = `
                <h2 class="header">test</h2>
                <div id="video">
                  <iframe
                    width="100%"
                    height="315"
                    src="${responseData.results[0].data.max}"
                    title="Game Trailer"
                    frameborder="0"
                    allowfullscreen
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

      articleDOM.innerHTML = `
        <div class="info">
          <img src="${background_image}" class="banner">
          <div class="ctacontainer">
            <button class="cta button">Check Website</button>
          </div>
          <div class="description">
            <h2>${name},</h2>
            <p class="header">${rating}/${rating_top}</p>
            <p>${description}</p>
          </div>
          <div class="makers">
            <div>
              <p><b>Release Date</b></p>
              <p>${released}</p>
            </div>

            <div>
              <p><b>Developer</b></p>
              <p>${developers.map((dev) => dev.name).join(", ")}</p>
            </div>

            <div>
              <p><b>Platforms</b></p>
              <p>${platforms
                .map((platform) => platform.platform.name)
                .join(", ")}</p>
            </div>

            <div>
              <p><b>Publisher</b></p>
              <p>${publishers.map((publisher) => publisher.name).join(", ")}</p>
            </div>
          </div>

          <div class="etc">
            <div>
              <p><b>Genre</b></p>
              <p>${genres.map((genre) => genre.name).join(", ")}</p>
            </div>

            <div>
              <p><b>Tags</b></p>
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
            <h2 class="header">TRAILER</h2>
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
