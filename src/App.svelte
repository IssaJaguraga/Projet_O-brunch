<script>

import Header from "./components/Header.svelte";
import Footer from "./components/Footer.svelte";
import PageType from "./components/PageType.svelte";



import Router, {location} from "svelte-spa-router";
import routes from "./routes";
import { beforeUpdate } from "svelte";


beforeUpdate(() => {
    $location === "/"
      ? document.body.classList.add("homepage")
      : document.body.classList.remove("homepage");
  });



<<<<<<< Updated upstream
</script>






<Header />


<Router {routes} />
<Footer />







=======
import Router, {location} from "svelte-spa-router";
import routes from "./routes";

</script>

<Header />
<Router {routes} />
<Footer />
>>>>>>> Stashed changes



