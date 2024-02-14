import About from "./pages/about.svelte";
import History from "./pages/history.svelte";
import Login from "./pages/Login.svelte";
import Register from "./pages/Register.svelte";
import Home from "./pages/Home.svelte";


export default {
  "/": Home,
  "/about": About,
  "/history": History,
  "/login": Login,
  "/register": Register,
};