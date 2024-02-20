import Home from "./pages/Home.svelte";
import Login from "./pages/Login.svelte";
import Register from "./pages/Register.svelte";
import AllRestaurant from "./pages/AllRestaurant.svelte";
import History from "./pages/history.svelte";
import About from "./pages/about.svelte";
import Conditions from "./pages/conditions.svelte"





export default {
  "/": Home,
  "/login": Login,
  "/register": Register,
  "/AllRestaurant": AllRestaurant,
  "/history": History,
  "/about": About,

  "/conditions": Conditions,

}




