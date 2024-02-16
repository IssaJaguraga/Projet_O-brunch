import About from "./pages/about.svelte";
import History from "./pages/history.svelte";
import Connexion from "./pages/connexion.svelte";
import Register from "./pages/Register.svelte";
import Home from "./pages/Home.svelte";


export default {
  "/": Home,
  "/about": About,
  "/history": History,
  "/login": Connexion,
  "/register": Register,
};