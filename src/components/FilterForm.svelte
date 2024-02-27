<script>
  import Button from "../components/Button.svelte";
  import {push} from 'svelte-spa-router'

  export let continents = [];
  export let countries = [];
  export let towns = [];
  export let townId = null;

  const fetchCountriesFromContinents = async (continentId) => {
    fetch(
      `http://issajaguraga-server.eddi.cloud:8080/items/Country?filter[Continent_id][_eq]=${continentId}`,
    )
      .then((response) => response.json())
      .then((data) => {
        countries = data.data;
      });
  };

  const fetchContinents = async () => {
    const response = await fetch(
      "http://issajaguraga-server.eddi.cloud:8080/items/Continent/",
    );

    if (response.ok) {
      const data = await response.json();
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
    fetch(
      `http://issajaguraga-server.eddi.cloud:8080/items/Town?filter[Country_id][_eq]=${countryId}`,
    )
      .then((response) => response.json())
      .then((data) => {
        towns = data.data;
      });
  };

  const fetchTowns = async () => {
    const response = await fetch(
      "http://issajaguraga-server.eddi.cloud:8080/items/Town/",
    );

    if (response.ok) {
      const data = await response.json();
      towns = data.data;
    }
  };

  const searchRestaurantsByTown = () => {
    push(`/restaurants/town/${townId}`);
  }

  fetchContinents();
</script>

<form class="home-search__form" on:submit|preventDefault={searchRestaurantsByTown}>
  <select
    name="continent"
    id="continent-select"
    disabled={!continents.length}
    on:change={handleContinentSelected}
  >
    <option value="">Continent</option>
    {#each continents as continent}
      <option value={continent.id}>{continent.name}</option>
    {/each}
  </select>

  <select
    name="country"
    id="country-select"
    disabled={!countries.length}
    on:change={handleCountrySelected}
  >
    <option value="">--Pays--</option>
    {#each countries as country}
      <option value={country.id}>{country.name}</option>
    {/each}
  </select>

  <select name="city" id="city-select" disabled={!towns.length} bind:value={townId}>
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

  <Button>Rechercher</Button>
</form>
