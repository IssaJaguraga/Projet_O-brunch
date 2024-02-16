<script>

import Header from "./components/Header.svelte";
import Footer from "./components/Footer.svelte";
import Router, {location} from "svelte-spa-router";
import routes from "./routes";

import ConnexionAPI from "./components/ConnexionAPI.svelte";

</script>


<Header />
<Router {routes} />
<Footer />










