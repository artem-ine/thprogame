import "./style/index.scss"; // Attention ici, il faut bien mettre l'extension `.scss`
import { routes } from "./routes.js";
import { handleSearch } from "./search.js";

const callRoute = () => {
  const { hash } = window.location;
  const pathParts = hash.substring(1).split("/");

  const pageName = pathParts[0].toLowerCase();
  const pageArgument = pathParts[1] || "";
  const pageFunction = routes[pageName];

  if (pageFunction !== undefined) {
    pageFunction(pageArgument);
  } else {
    pageContent.innerHTML = `
      <p>Page Not Found</p>
    `;
  }

  handleSearch();
};

window.addEventListener("DOMContentLoaded", callRoute);
window.addEventListener("hashchange", callRoute);
