import "./style/index.scss"; // Attention ici, il faut bien mettre l'extension `.scss`
import { routes } from "./routes.js";
import { Home } from "./Home.js";

const renderHome = () => {
  const contentContainer = document.getElementById("pageContent");
  contentContainer.innerHTML = Home();
};

const callRoute = () => {
  renderHome();

  const { hash } = window.location;
  const pathParts = hash.substring(1).split("/");

  const pageName = pathParts[0].toLowerCase(); // Convert to lowercase for consistency
  const pageArgument = pathParts[1] || "";
  const pageFunction = routes[pageName];

  if (pageFunction !== undefined) {
    pageFunction(pageArgument);
  } else {
    // Handle cases where the route is not found (e.g., display a 404 page)
    // For now, let's just display a default message in the pageContent container
    renderHome();
  }
};

window.addEventListener("DOMContentLoaded", callRoute);
window.addEventListener("hashchange", callRoute);
