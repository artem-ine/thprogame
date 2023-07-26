export const PageList = (argument = "") => {
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
              <div class="card-inner">
                <!-- Front of the card: Image -->
                <div class="card-front">
                  <div class="card-image">
                    <img src="${article.background_image}" alt="Card image cap">
                  </div>
                </div>
                <!-- Back of the card: Additional details like release date, editor, etc. -->
                <div class="card-back">
                  <div class="card-content">
                    <p>${article.released}</p>
                    <p>${article.name}</p>
                    <p>${article.publishers}</p>
                    <p>${article.rating}/${article.rating_top}</p>
                    <p>${article.tags}</p>
                  </div>
                </div>
              </div>
              <!-- Card contents: Name and platform icons, clickable -->
              <div class="card-content">
                <h5 class="card-title">
                  <a href="#pagedetail/${article.id}">${article.name}</a>
                </h5>
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

  const handlePlatformFilter = () => {
    const platformFilterDropdown = document.getElementById("platform");
    const selectedPlatform = platformFilterDropdown.value;
    totalItemsDisplayed = 0; // Reset the total items displayed counter

    console.log("Selected platform:", selectedPlatform);

    fetchList(
      `https://api.rawg.io/api/games?key=${process.env.API_KEY}&page_size=9`,
      cleanedArgument,
      selectedPlatform
    );
  };

  const fetchList = (url, argument, platformFilter) => {
    let finalURL = argument ? `${url}&search=${argument}` : url;

    // Add platform filtering if a specific platform is selected
    if (platformFilter && platformFilter !== "any") {
      finalURL += `&platform=${platformFilter}`;
    }

    console.log("Final URL:", finalURL);

    fetch(finalURL)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData.results);
        displayResults(responseData.results);
      });
  };

  const preparePage = () => {
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

    fetchList(
      `https://api.rawg.io/api/games?key=${process.env.API_KEY}&page_size=9`,
      cleanedArgument
    );
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="intro">
        <h2>Welcome,</h2>
        <p>The Hyper Progame is the world’s premier event for computer and video games and related products. At The Hyper Progame,
        the video game industry’s top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best,
        brightest, and most innovative in the interactive entertainment industry. For three exciting days, leading-edge companies,
        groundbreaking new technologies, and never-before-seen products will be showcased. The Hyper Progame connects you
        with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure
        </p>
      </section>
      <section class="page-list">
        <div class="filter">
          <label for="platform">Platform:</label>
          <select id="platform">
            <option value="any" selected>Any</option>
            <option value="playstation">PlayStation</option>
            <option value="xbox">Xbox</option>
            <option value="nintendo">Nintendo</option>
            <option value="pc">PC</option>
            <option value="linux">Linux</option>
            <option value="macos">macOS</option>
            <option value="mobile">Mobile</option>
          </select>
        </div>
        <div class="articles row">Loading...</div>
      </section>
    `;

    const platformFilterDropdown = document.getElementById("platform");
    platformFilterDropdown.addEventListener("change", handlePlatformFilter);

    preparePage();
  };

  render();
};
