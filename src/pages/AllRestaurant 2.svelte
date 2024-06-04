<script>
  import { onMount } from "svelte";
  // Pour faire comme si on recevait des données au format JSON depuis le serveur,
  // on crée un tableau de données qui contient les données des espaces
  import Card from "../components/Card.svelte";
  import TitleSecondary from "../components/TitleSecondary.svelte";
  import FilterForm from "../components/FilterForm.svelte";

  export let restaurants = [];
  export let params = {};

  export const fetchRestaurants = async () => {
    if (!params || !params.townId) {
      const response = await fetch(
        "http://issajaguraga-server.eddi.cloud:8080/items/Restaurant",
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        restaurants = data.data;
      }
    } else {
      const response = await fetch(
        `http://issajaguraga-server.eddi.cloud:8080/items/Restaurant/?filter[Town_id][_eq]=${params.townId}`,
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Restaurant by town", data);
        restaurants = data.data;
      }
    }
  };

  // chargement des cartes et des utilisateurs au chargement du composant
  fetchRestaurants();
  $: if (params.townId) {
    //watch the params.id for changes
    fetchRestaurants(); //invoke your method to reload data
  }
</script>

<main>
  <section class="search">
    <TitleSecondary
      title="Recherchez votre prochain brunch préféré"
      variant="white"
    />
    <FilterForm />
  </section>
  <h1 class="featured-text">
    Retrouvez ici les meilleurs restaurants pour bruncher, dans les plus grandes
    villes du monde.
  </h1>

  <section class="restaurants" aria-label="Tous les restaurants">
    
    <TitleSecondary title="" />

    <div class="card-list">
      {#each restaurants as restaurant}
        <Card
          id={restaurant.id}
          note={restaurant.rate}
          price={restaurant.price}
          title={restaurant.name}
         
          image={`http://issajaguraga-server.eddi.cloud:8080/assets/${restaurant.picture}`}
        />
      {/each}
      

    </div>
  </section>
</main>
