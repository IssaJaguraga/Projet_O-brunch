<script>
  // Pour faire comme si on recevait des données au format JSON depuis le serveur,
  // on crée un tableau de données qui contient les données des espaces
  import Card from "../components/Card.svelte";
  import TitleSecondary from "../components/TitleSecondary.svelte";
  import Button from "../components/Button.svelte";

  export let continents = [];
  export let countries = [];
  export let towns = [];
  export let restaurants = [];

  const fetchCountriesFromContinents = async (continentId) => {
    fetch(`http://issajaguraga-server.eddi.cloud:8080/items/Country?filter[Continent_id][_eq]=${continentId}`)
      .then(response => response.json())
      .then(data => {
        countries = data.data;
      });
  };

  const fetchContinents = async () => {
    const response = await fetch('http://issajaguraga-server.eddi.cloud:8080/items/Continent/');

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      continents = data.data;
    }
  };

  const handleContinentSelected = (event) => {
    const continentId = event.currentTarget.value;
    fetchCountriesFromContinents(continentId);
   
  };

  const handleCountrySelected = (event) => {
    const countryId = event.currentTarget.value;
    fetchTownsFromCountries(countryId);
   
  };

  const fetchTownsFromCountries = async (countryId) => {
    fetch(`http://issajaguraga-server.eddi.cloud:8080/items/Town?filter[Country_id][_eq]=${countryId}`)
      .then(response => response.json())
      .then(data => {
        towns = data.data;
      });
  }
  
const fetchTowns = async () => {
    const response = await fetch('http://issajaguraga-server.eddi.cloud:8080/items/Town/');

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      towns = data.data;
    }
  };
  
  
  const fetchRestaurants = async () => {
    const response = await fetch(
      "http://issajaguraga-server.eddi.cloud:8080/items/Restaurant",
    );

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      restaurants = data.data;
    }
  };

  fetchRestaurants();

  fetchContinents();
 
</script>


<main>

  <section class="search">
    <TitleSecondary
      title="Recherchez votre prochain brunch préféré"
      variant="white"
    />
    <form class="home-search__form">
      <select name="continent" id="continent-select" disabled={!continents.length} on:change={handleContinentSelected}>
        <option value="">Continent</option>
        {#each continents as continent}
          <option value={continent.id}>{continent.name}</option>
        {/each}
      </select>

      <select name="country" id="country-select" disabled={!countries.length} on:change={handleCountrySelected} >
        <option value="">--Pays--</option>
        {#each countries as country}
          <option value={country.id}>{country.name}</option>
        {/each}
      </select>

      <select name="city" id="city-select" disabled={!towns.length} >
        <option value="">--Ville--</option>
        {#each towns as town}
          <option value={town.id}>{town.name}</option>
        {/each}
      </select>

      <!-- <input
          type="text"
          name="nom"
          placeholder="Rechercher où bruncher..."
          value=""
          size="30"
        /> -->

      <Button on:click>Rechercher</Button>
      
    </form>
  </section>
  <h1 class="featured-text">
    Retrouvez ici les meilleurs restaurants pour bruncher, dans les plus grandes villes du monde.
  </h1>

  <section class="restaurants" aria-label="Tous les restaurants">
    <TitleSecondary title="Les meilleurs brunchs à Paris" />
    <div class="card-list">
      {#each restaurants as restaurant}
        <Card
        
          id={restaurant.id}
          note={restaurant.note}
          price={restaurant.price}
          title={restaurant.name}
          image={`http://issajaguraga-server.eddi.cloud:8080/assets/${restaurant.picture}`}
        />
      {/each}
    </div>
        

  </section>
</main>
