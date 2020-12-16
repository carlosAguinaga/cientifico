import Header from "../templates/Header";
import Home from "../pages/Home";
import Character from "../pages/Character";
import Error404 from "../pages/Error404";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

const routes = {
  "/": Home,
  "/:id": Character,
  "/Contact": "Contact",
};

const router = async () => {
  const header = null || document.getElementById("header");
  const content = null || document.getElementById("content");
  header.innerHTML = await Header();

  let hash = getHash();
  let route = await resolveRoutes(hash);

  let render = routes[route] ? routes[route] : Error404;
  content.innerHTML = await render();

  // botón switch dartmode
  const btnSwith = document.querySelector("#switch");

  btnSwith.addEventListener("click", () => {
    document.body.classList.toggle("darkmode");
    btnSwith.classList.toggle("active");

    //save mode in local storage
    if (document.body.classList.contains('darkmode')) {
      localStorage.setItem('dark-mode', true);
    }else{
      localStorage.setItem('dark-mode', false);
    }
  });

// Obtenemos el modo actual
if(localStorage.getItem('dark-mode') === 'true'){
  document.body.classList.add('darkmode');
  btnSwith.classList.add("active");
}else{
  document.body.classList.remove('darkmode');
  btnSwith.classList.remove("active");
}

};

export default router;
