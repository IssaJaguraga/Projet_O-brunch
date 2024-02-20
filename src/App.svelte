<script>

import Header from "./components/Header.svelte";
import Footer from "./components/Footer.svelte";
 //import Conditions from "./pages/Conditions.svelte";

import Router, {location} from "svelte-spa-router";
import routes from "./routes";


</script>



<Header />
<Router {routes} />
<Footer />
