export const PageList = (argument = "") => {
  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, "-");

    const platformLogos = {
      playstation: "src/assets/images/logos/ps4.svg",
      xbox: "src/assets/images/logos/xbox.svg",
      nintendo: "src/assets/images/logos/switch.svg",
      mobile: "src/assets/images/logos/mobile.svg",
      macos: "src/assets/images/logos/macos.svg",
      pc: "src/assets/images/logos/windows.svg",
      linux: "src/assets/images/logos/linux.svg",
      windows: "src/assets/images/logos/windows.svg",
    };

    const platformGroups = {
      playstation: [
        "playstation 4",
        "playstation 5",
        "playstation 3",
        "playstation 2",
        "playstation 1",
        "ps4",
        "ps5",
        "ps",
      ],
      xbox: ["xbox one", "xbox series x", "xbox"],
      nintendo: [
        "nintendo switch",
        "nintendo ds",
        "nintendo dsi",
        "nintendo 3ds",
        "nintendo",
        "wii u",
      ],
      pc: ["pc", "windows"],
      linux: ["linux"],
      macos: ["macos"],
      mobile: ["mobile", "android"],
    };

    const getPlatformGroupKey = (platformName) => {
      for (const groupKey in platformGroups) {
        if (
          platformGroups[groupKey].some((name) =>
            platformName.toLowerCase().includes(name)
          )
        ) {
          return groupKey;
        }
      }
      return null;
    };

    let totalItemsDisplayed = 0;
    const numItemsToShow = 9;
    const maxItems = 27;

    const displayResults = (articles) => {
      const resultsContainer = document.querySelector(".page-list .articles");

      // If it's the first page, replace the content, else append it
      if (totalItemsDisplayed === 0) {
        resultsContainer.innerHTML = "";
      }

      const newResultsContent = articles
        .map(
          (article) => `
            <article class="cardGrid">
              <div class="card">
                <img src="${article.background_image}" alt="Card image cap">
                <div class="card-content">
                  <h5 class="card-title">  <a href="#pagedetail/${
                    article.id
                  }">${article.name}</a></h5>
                  <p class="card-description">
                    ${article.platforms
                      .map((platform) => {
                        const platformGroupKey = getPlatformGroupKey(
                          platform.platform.name
                        );
                        const logoSrc = platformGroupKey
                          ? platformLogos[platformGroupKey]
                          : "";
                        return `<img src="${logoSrc}" alt="${platform.platform.name}" class="platform-icon">`;
                      })
                      .join("")}
                  </p>
                </div>
              </div>
            </article>`
        )
        .join("\n");

      resultsContainer.insertAdjacentHTML("beforeend", newResultsContent);
      totalItemsDisplayed += articles.length;

      // Hide "Show More" button when the maxItems limit is reached
      const showMoreButton = document.getElementById("showMoreButton");
      if (totalItemsDisplayed >= maxItems) {
        showMoreButton.style.display = "none";
      } else {
        showMoreButton.style.display = "block";
      }
    };

    const fetchList = (url, argument) => {
      const finalURL = argument ? `${url}&search=${argument}` : url;
      fetch(finalURL)
        .then((response) => response.json())
        .then((responseData) => {
          displayResults(responseData.results);
        });
    };

    fetchList(
      `https://api.rawg.io/api/games?key=${process.env.API_KEY}&page_size=9`,
      cleanedArgument
    );

    // Add "Show More" button in the initial rendering
    const showMoreButton = document.createElement("button");
    showMoreButton.id = "showMoreButton";
    showMoreButton.className = "button";
    showMoreButton.textContent = "Show More";
    showMoreButton.style.display = "none"; // Initially hide the button
    document.querySelector(".page-list").appendChild(showMoreButton);

    // Add event listener for the "Show More" button
    showMoreButton.addEventListener("click", () => {
      fetchList(
        `https://api.rawg.io/api/games?key=${
          process.env.API_KEY
        }&page_size=${numItemsToShow}&page=${
          Math.ceil(totalItemsDisplayed / numItemsToShow) + 1
        }`,
        cleanedArgument
      );
    });
  };

  const render = () => {
    pageContent.innerHTML = `
      <section>
        <h2>Welcome,</h2>
        <p>The Hyper Progame is the world’s premier event for computer and video games and related products. At The Hyper Progame,
        the video game industry’s top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best,
        brightest, and most innovative in the interactive entertainment industry. For three exciting days, leading-edge companies,
        groundbreaking new technologies, and never-before-seen products will be showcased. The Hyper Progame connects you
        with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure
        </p>
      </section>
      <section class="page-list ">
        <div class="articles row">Loading...</div>
        </div>
      </section>
    `;

    preparePage();
  };

  render();
};
