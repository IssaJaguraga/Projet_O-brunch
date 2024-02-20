<script>

import Header from "./components/Header.svelte";
import Footer from "./components/Footer.svelte";



import TestApi from "./components/TestApi.svelte";
import Router, {location} from "svelte-spa-router";
import routes from "./routes";
import { beforeUpdate } from "svelte";


beforeUpdate(() => {
    $location === "/"
      ? document.body.classList.add("homepage")
      : document.body.classList.remove("homepage");
  });
</script>





<Header />
<TestApi />

<Router {routes} />
<Footer />










