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
        developers,
        platforms,
        stores,
      } = gameData;
      const articleDOM = document.querySelector(".page-detail .article");
      // articleDOM.querySelector("h1.title").innerHTML = name;
      // articleDOM.querySelector("p.release-date span").innerHTML = released;
      // articleDOM.querySelector("p.description").innerHTML = description;
      articleDOM.innerHTML = `
        <div class = "info">
          <img src="${background_image}" class="banner">
          <div class="description">
            <h2>${name},</h2>
            <p>${description}</p>
          </div>
          <div class = "makers">
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

          <div class = "etc">
            <div>
              <p><b>Genre</b></p>
              <p>${genres.map((genre) => genre.name).join(", ")}</p>
            </div>

            <div>
              <p><b>Tags</b></p>
              <p>${tags.map((tag) => tag.name).join(", ")}</p>
            </div>
          </div>
          <div class = "stores">
            <div>
              <h2 class="buyhead">BUY</h2>
              <p>${stores
                .map(
                  (store) =>
                    `<a href="https://www.${store.store.domain}/game/${gameData.name}" target="_blank">${store.store.name}</a><br>`
                )
                .join("")}
              </p>

            </div>
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
