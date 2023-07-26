/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/PageDetail.js":
/*!***************************!*\
  !*** ./src/PageDetail.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PageDetail: () => (/* binding */ PageDetail)\n/* harmony export */ });\nvar PageDetail = function PageDetail(argument) {\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.trim().replace(/\\s+/g, \"-\");\n    var displayGame = function displayGame(gameData) {\n      var name = gameData.name,\n        released = gameData.released,\n        description = gameData.description,\n        background_image = gameData.background_image,\n        tags = gameData.tags,\n        genres = gameData.genres,\n        publishers = gameData.publishers,\n        rating = gameData.rating,\n        rating_top = gameData.rating_top,\n        developers = gameData.developers,\n        platforms = gameData.platforms,\n        stores = gameData.stores,\n        id = gameData.id,\n        website = gameData.website,\n        reviews_count = gameData.reviews_count;\n      var articleDOM = document.querySelector(\".page-detail .article\");\n      fetch(\"https://api.rawg.io/api/games/\".concat(id, \"/movies?key=\").concat(\"1dcc64036ceb4d1cb33462853e6baa14\")).then(function (response) {\n        return response.json();\n      }).then(function (responseData) {\n        if (responseData.results[0]) {\n          var trailerDiv = document.querySelector(\".trailer\");\n          trailerDiv.innerHTML = \"\\n                <h2 class=\\\"header\\\">TRAILER</h2>\\n                <div id=\\\"video\\\">\\n                  <iframe\\n                    src=\\\"\".concat(responseData.results[0].data.max, \"\\\"\\n                    title=\\\"Game Trailer\\\"\\n                    frameborder=\\\"0\\\"\\n                    allowfullscreen\\n                    autoplay=\\\"0\\\"\\n                  ></iframe>\\n                </div>\\n              \");\n        } else {\n          var _trailerDiv = document.querySelector(\".trailer\");\n          _trailerDiv.innerHTML = \"\\n                <h2 class=\\\"header\\\">TRAILER</h2>\\n                <p>No trailer available for now.</p>\\n                \";\n        }\n      })[\"catch\"](function (error) {\n        console.error(error);\n      });\n      fetch(\"https://api.rawg.io/api/games/\".concat(id, \"/screenshots?key=\").concat(\"1dcc64036ceb4d1cb33462853e6baa14\")).then(function (response) {\n        return response.json();\n      }).then(function (responseData) {\n        console.log(responseData);\n        if (responseData.results.length > 0) {\n          var screenshotDiv = document.querySelector(\".screenshots\");\n          var screenshotsHTML = \"\\n              <h2 class=\\\"header\\\">SCREENSHOTS</h2>\\n              <div id=\\\"screenshots\\\">\\n            \";\n          responseData.results.forEach(function (screenshot) {\n            screenshotsHTML += \"\\n                <img\\n                  src=\\\"\".concat(screenshot.image, \"\\\"\\n                  alt=\\\"Screenshot\\\"\\n                  class=\\\"card\\\"\\n                >\\n              \");\n          });\n          screenshotsHTML += \"\\n          </div>\\n          \";\n          screenshotDiv.innerHTML = screenshotsHTML;\n        } else {\n          var _screenshotDiv = document.querySelector(\".screenshots\");\n          _screenshotDiv.innerHTML = \"\\n            <h2 class=\\\"header\\\">SCREENSHOTS</h2>\\n            <p>No screenshots available for now.</p>\\n          \";\n        }\n      })[\"catch\"](function (error) {\n        console.error(error);\n      });\n      articleDOM.innerHTML = \"\\n        <section class=\\\"game-info\\\">\\n          <img src=\\\"\".concat(background_image, \"\\\" class=\\\"banner\\\">\\n          <div class=\\\"ctacontainer\\\">\\n            <button class=\\\"cta button\\\"><a href=\\\"\").concat(website, \"\\\">Check Website        \\u27A4</a></button>\\n          </div>\\n          <div class=\\\"detail-heading\\\">\\n            <h2>\").concat(name, \",</h2>\\n            <p class=\\\"header\\\">\").concat(rating, \"/\").concat(rating_top, \" - for \").concat(reviews_count, \" reviews</p>\\n          </div>\\n          <div>\\n            <p>\").concat(description, \"</p>\\n          </div>\\n          <div class=\\\"makers\\\">\\n            <div class=\\\"grid\\\">\\n              <h3 class=\\\"subtitle\\\">Release Date</h3>\\n              <p>\").concat(released, \"</p>\\n            </div>\\n\\n            <div class=\\\"grid\\\">\\n              <h3 class=\\\"subtitle\\\">Developer</h3>\\n              <p>\").concat(developers.map(function (dev) {\n        return dev.name;\n      }).join(\", \"), \"</p>\\n            </div>\\n\\n            <div class=\\\"grid\\\">\\n              <h3 class=\\\"subtitle\\\">Platform</h3>\\n              <p>\").concat(platforms.map(function (platform) {\n        return platform.platform.name;\n      }).join(\", \"), \"</p>\\n            </div>\\n\\n            <div class=\\\"grid\\\">\\n              <h3 class=\\\"subtitle\\\">Publisher</h3>\\n              <p>\").concat(publishers.map(function (publisher) {\n        return publisher.name;\n      }).join(\", \"), \"</p>\\n            </div>\\n          </div>\\n\\n          <div class=\\\"add-info\\\">\\n            <div class=\\\"grid\\\">\\n              <h3 class=\\\"subtitle\\\">Genre</h3>\\n              <p>\").concat(genres.map(function (genre) {\n        return genre.name;\n      }).join(\", \"), \"</p>\\n            </div>\\n\\n            <div class=\\\"grid\\\">\\n              <h3 class=\\\"subtitle\\\">Tags</h3>\\n              <p>\").concat(tags.map(function (tag) {\n        return tag.name;\n      }).join(\", \"), \"</p>\\n            </div>\\n          </div>\\n\\n          <div class=\\\"stores\\\">\\n            <div>\\n              <h2 class=\\\"header\\\">BUY</h2>\\n              <p>\").concat(stores.map(function (store) {\n        return \"<a href=\\\"https://www.\".concat(store.store.domain, \"/game/\").concat(gameData.name, \"\\\" target=\\\"_blank\\\">\").concat(store.store.name, \"</a><br>\");\n      }).join(\"\"), \"\\n              </p>\\n            </div>\\n          </div>\\n          <div class=\\\"trailer\\\">\\n          </div>\\n          <div class=\\\"screenshots\\\">\\n          </div>\\n        </div>\\n      \");\n    };\n    var fetchGame = function fetchGame(url, argument) {\n      fetch(\"\".concat(url, \"/\").concat(argument, \"?key=\").concat(\"1dcc64036ceb4d1cb33462853e6baa14\")).then(function (response) {\n        return response.json();\n      }).then(function (responseData) {\n        displayGame(responseData);\n      });\n    };\n    fetchGame(\"https://api.rawg.io/api/games\", cleanedArgument);\n  };\n  var render = function render() {\n    pageContent.innerHTML = \"\\n      <section class=\\\"page-detail\\\">\\n        <div class=\\\"article\\\">\\n        </div>\\n      </section>\\n    \";\n    preparePage();\n  };\n  render();\n};\n\n//# sourceURL=webpack://thprogame/./src/PageDetail.js?");

/***/ }),

/***/ "./src/PageList.js":
/*!*************************!*\
  !*** ./src/PageList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PageList: () => (/* binding */ PageList)\n/* harmony export */ });\nvar PageList = function PageList() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n  var cleanedArgument = argument.trim().replace(/\\s+/g, \"-\");\n  var platformLogos = {\n    playstation: \"src/assets/images/logos/ps4.svg\",\n    xbox: \"src/assets/images/logos/xbox.svg\",\n    nintendo: \"src/assets/images/logos/switch.svg\",\n    mobile: \"src/assets/images/logos/mobile.svg\",\n    macos: \"src/assets/images/logos/macos.svg\",\n    pc: \"src/assets/images/logos/windows.svg\",\n    linux: \"src/assets/images/logos/linux.svg\",\n    windows: \"src/assets/images/logos/windows.svg\"\n  };\n  var platformGroups = {\n    playstation: [\"playstation 4\", \"playstation 5\", \"playstation 3\", \"playstation 2\", \"playstation 1\", \"ps4\", \"ps5\", \"ps\"],\n    xbox: [\"xbox one\", \"xbox series x\", \"xbox\"],\n    nintendo: [\"nintendo switch\", \"nintendo ds\", \"nintendo dsi\", \"nintendo 3ds\", \"nintendo\", \"wii u\"],\n    pc: [\"pc\", \"windows\"],\n    linux: [\"linux\"],\n    macos: [\"macos\"],\n    mobile: [\"mobile\", \"android\"]\n  };\n  var getPlatformGroupKey = function getPlatformGroupKey(platformName) {\n    for (var groupKey in platformGroups) {\n      if (platformGroups[groupKey].some(function (name) {\n        return platformName.toLowerCase().includes(name);\n      })) {\n        return groupKey;\n      }\n    }\n    return null;\n  };\n  var totalItemsDisplayed = 0;\n  var numItemsToShow = 9;\n  var maxItems = 27;\n  var displayResults = function displayResults(articles) {\n    var resultsContainer = document.querySelector(\".page-list .articles\");\n\n    // If it's the first page, replace the content, else append it\n    if (totalItemsDisplayed === 0) {\n      resultsContainer.innerHTML = \"\";\n    }\n    var newResultsContent = articles.map(function (article) {\n      return \"\\n          <article class=\\\"cardGrid\\\">\\n            <div class=\\\"card\\\">\\n              <div class=\\\"card-inner\\\">\\n                <!-- Front of the card: Image -->\\n                <div class=\\\"card-front\\\">\\n                  <div class=\\\"card-image\\\">\\n                    <img src=\\\"\".concat(article.background_image, \"\\\" alt=\\\"Card image cap\\\">\\n                  </div>\\n                </div>\\n                <!-- Back of the card: Additional details like release date, editor, etc. -->\\n                <div class=\\\"card-back\\\">\\n                  <div class=\\\"card-content\\\">\\n                    <p>\").concat(article.released, \"</p>\\n                    <p>\").concat(article.name, \"</p>\\n                    <p>\").concat(article.publishers, \"</p>\\n                    <p>\").concat(article.rating, \"/\").concat(article.rating_top, \"</p>\\n                    <p>\").concat(article.tags, \"</p>\\n                  </div>\\n                </div>\\n              </div>\\n              <!-- Card contents: Name and platform icons, clickable -->\\n              <div class=\\\"card-content\\\">\\n                <h5 class=\\\"card-title\\\">\\n                  <a href=\\\"#pagedetail/\").concat(article.id, \"\\\">\").concat(article.name, \"</a>\\n                </h5>\\n                <p class=\\\"card-description\\\">\\n                  \").concat(article.platforms.map(function (platform) {\n        var platformGroupKey = getPlatformGroupKey(platform.platform.name);\n        var logoSrc = platformGroupKey ? platformLogos[platformGroupKey] : \"\";\n        return \"<img src=\\\"\".concat(logoSrc, \"\\\" alt=\\\"\").concat(platform.platform.name, \"\\\" class=\\\"platform-icon\\\">\");\n      }).join(\"\"), \"\\n                </p>\\n              </div>\\n            </div>\\n          </div>\\n        </div>\\n      </article>\");\n    }).join(\"\\n\");\n    resultsContainer.insertAdjacentHTML(\"beforeend\", newResultsContent);\n    totalItemsDisplayed += articles.length;\n\n    // Hide \"Show More\" button when the maxItems limit is reached\n    var showMoreButton = document.getElementById(\"showMoreButton\");\n    if (totalItemsDisplayed >= maxItems) {\n      showMoreButton.style.display = \"none\";\n    } else {\n      showMoreButton.style.display = \"block\";\n    }\n  };\n  var handlePlatformFilter = function handlePlatformFilter() {\n    var platformFilterDropdown = document.getElementById(\"platform\");\n    var selectedPlatform = platformFilterDropdown.value;\n    totalItemsDisplayed = 0; // Reset the total items displayed counter\n\n    console.log(\"Selected platform:\", selectedPlatform);\n    fetchList(\"https://api.rawg.io/api/games?key=\".concat(\"1dcc64036ceb4d1cb33462853e6baa14\", \"&page_size=9\"), cleanedArgument, selectedPlatform);\n  };\n  var fetchList = function fetchList(url, argument, platformFilter) {\n    var finalURL = argument ? \"\".concat(url, \"&search=\").concat(argument) : url;\n\n    // Add platform filtering if a specific platform is selected\n    if (platformFilter && platformFilter !== \"any\") {\n      finalURL += \"&platform=\".concat(platformFilter);\n    }\n    console.log(\"Final URL:\", finalURL);\n    fetch(finalURL).then(function (response) {\n      return response.json();\n    }).then(function (responseData) {\n      console.log(responseData.results);\n      displayResults(responseData.results);\n    });\n  };\n  var preparePage = function preparePage() {\n    // Add \"Show More\" button in the initial rendering\n    var showMoreButton = document.createElement(\"button\");\n    showMoreButton.id = \"showMoreButton\";\n    showMoreButton.className = \"button\";\n    showMoreButton.textContent = \"Show More\";\n    showMoreButton.style.display = \"none\"; // Initially hide the button\n    document.querySelector(\".page-list\").appendChild(showMoreButton);\n\n    // Add event listener for the \"Show More\" button\n    showMoreButton.addEventListener(\"click\", function () {\n      fetchList(\"https://api.rawg.io/api/games?key=\".concat(\"1dcc64036ceb4d1cb33462853e6baa14\", \"&page_size=\").concat(numItemsToShow, \"&page=\").concat(Math.ceil(totalItemsDisplayed / numItemsToShow) + 1), cleanedArgument);\n    });\n    fetchList(\"https://api.rawg.io/api/games?key=\".concat(\"1dcc64036ceb4d1cb33462853e6baa14\", \"&page_size=9\"), cleanedArgument);\n  };\n  var render = function render() {\n    pageContent.innerHTML = \"\\n      <section class=\\\"intro\\\">\\n        <h2>Welcome,</h2>\\n        <p>The Hyper Progame is the world\\u2019s premier event for computer and video games and related products. At The Hyper Progame,\\n        the video game industry\\u2019s top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best,\\n        brightest, and most innovative in the interactive entertainment industry. For three exciting days, leading-edge companies,\\n        groundbreaking new technologies, and never-before-seen products will be showcased. The Hyper Progame connects you\\n        with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure\\n        </p>\\n      </section>\\n      <section class=\\\"page-list\\\">\\n        <div class=\\\"filter\\\">\\n          <label for=\\\"platform\\\">Platform:</label>\\n          <select id=\\\"platform\\\">\\n            <option value=\\\"any\\\" selected>Any</option>\\n            <option value=\\\"playstation\\\">PlayStation</option>\\n            <option value=\\\"xbox\\\">Xbox</option>\\n            <option value=\\\"nintendo\\\">Nintendo</option>\\n            <option value=\\\"pc\\\">PC</option>\\n            <option value=\\\"linux\\\">Linux</option>\\n            <option value=\\\"macos\\\">macOS</option>\\n            <option value=\\\"mobile\\\">Mobile</option>\\n          </select>\\n        </div>\\n        <div class=\\\"articles row\\\">Loading...</div>\\n      </section>\\n    \";\n    var platformFilterDropdown = document.getElementById(\"platform\");\n    platformFilterDropdown.addEventListener(\"change\", handlePlatformFilter);\n    preparePage();\n  };\n  render();\n};\n\n//# sourceURL=webpack://thprogame/./src/PageList.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.scss */ \"./src/style/index.scss\");\n/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes.js */ \"./src/routes.js\");\n/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.js */ \"./src/search.js\");\n // Attention ici, il faut bien mettre l'extension `.scss`\n\n\nvar callRoute = function callRoute() {\n  var hash = window.location.hash;\n  var pathParts = hash.substring(1).split(\"/\");\n  var pageName = pathParts[0].toLowerCase();\n  var pageArgument = pathParts[1] || \"\";\n  var pageFunction = _routes_js__WEBPACK_IMPORTED_MODULE_1__.routes[pageName];\n  if (pageFunction !== undefined) {\n    pageFunction(pageArgument);\n  } else {\n    pageContent.innerHTML = \"\\n      <p>Page Not Found</p>\\n    \";\n  }\n  (0,_search_js__WEBPACK_IMPORTED_MODULE_2__.handleSearch)();\n};\nwindow.addEventListener(\"DOMContentLoaded\", callRoute);\nwindow.addEventListener(\"hashchange\", callRoute);\n\n//# sourceURL=webpack://thprogame/./src/index.js?");

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   routes: () => (/* binding */ routes)\n/* harmony export */ });\n/* harmony import */ var _PageList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageList.js */ \"./src/PageList.js\");\n/* harmony import */ var _PageDetail_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageDetail.js */ \"./src/PageDetail.js\");\n\n\nvar routes = {\n  \"\": _PageList_js__WEBPACK_IMPORTED_MODULE_0__.PageList,\n  pagedetail: _PageDetail_js__WEBPACK_IMPORTED_MODULE_1__.PageDetail,\n  search: function search(argument) {\n    (0,_PageList_js__WEBPACK_IMPORTED_MODULE_0__.PageList)(argument);\n  }\n};\n\n//# sourceURL=webpack://thprogame/./src/routes.js?");

/***/ }),

/***/ "./src/search.js":
/*!***********************!*\
  !*** ./src/search.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleSearch: () => (/* binding */ handleSearch)\n/* harmony export */ });\nvar handleSearch = function handleSearch() {\n  var searchForm = document.getElementById(\"search-form\");\n  var searchInput = document.getElementById(\"search-input\");\n  searchForm.addEventListener(\"submit\", function (event) {\n    event.preventDefault();\n    var searchTerm = searchInput.value.trim();\n    window.location.hash = \"search/\".concat(encodeURIComponent(searchTerm));\n  });\n};\n\n//# sourceURL=webpack://thprogame/./src/search.js?");

/***/ }),

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, ``, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://thprogame/./src/style/index.scss?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://thprogame/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://thprogame/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;