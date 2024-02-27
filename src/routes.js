import Home from "./pages/Home.svelte";
import Login from "./pages/Login.svelte";
import Register from "./pages/Register.svelte";
import AllRestaurant from "./pages/AllRestaurant.svelte";
import History from "./pages/History.svelte";
import About from "./pages/About.svelte";
import Conditions from "./pages/Conditions.svelte";
import Rgpd from "./pages/Rgpd.svelte";
import Restaurant from "./pages/Restaurant.svelte";

export default {
  "/restaurant/:restaurantId": Restaurant,
  "/login": Login,
  "/register": Register,
  "/restaurants/town/:townId": AllRestaurant,
  "/restaurants": AllRestaurant,
  "/history": History,
  "/about": About,
  "/rgpd": Rgpd,
  "/conditions": Conditions,
  "/": Home,
};
