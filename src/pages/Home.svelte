<script>
  import Card from "../components/Card.svelte";
  import TitleSecondary from "../components/TitleSecondary.svelte";
  import Button from "../components/Button.svelte";

  export let continents = [];
  export let countries = [];

  

  const fetchCountriesFromContinents = async (continentId) => {
    fetch(`http://issajaguraga-server.eddi.cloud:8080/items/Country?filter[Continent_id][_eq]=${continentId}`)
      .then(response => response.json())
      .then(data => {
        countries = data.data;
      });
  };

  const fetchContinents = async () => {
    const response = await fetch('http://issajaguraga-server.eddi.cloud:8080/items/Continent');

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

  fetchContinents();
</script>

<main>
  <section class="home-search">
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
      <select name="country" id="country-select" disabled={!countries.length}>
        <option value="">--Pays--</option>
        {#each countries as country}
          <option value={country.id}>{country.name}</option>
        {/each}
      </select>
      <select name="city" id="city-select" disabled>
        <option value="">--Ville--</option>
      </select>

      <!-- <input
          type="text"
          name="nom"
          placeholder="Rechercher où bruncher..."
          value=""
          size="30"
        /> -->

      <Button disabled>Rechercher</Button>
    </form>
  </section>
  <!--presentation de la page-->
  <section class="home-presentation">
    <p class="featured-text">
      Bienvenue sur O'Brunch, le site qui vous permet de trouver les meilleurs
      brunchs du monde entier. Vous pourrez découvrir les brunchs les mieux
      notés, les plus abordables, les plus originaux, et bien d'autres encore.
      Vous pourrez également partager vos propres expériences et noter les
      brunchs que vous avez testés. Bonne recherche et bon appétit !
    </p>
  </section>

  <!--Filtres-->
  <section class="home-restaurants">
    <TitleSecondary title="Brunchs à Paris" />
    <div class="card-list">
      
      <Card
        id={1}
        note={4}
        price={35}
        title="Restaurant Paris"
        image="/images/Paris/Brunch Paris1.jpg"
      />
      <Card
        id={2}
        note={5}
        price={20}
        title="Restaurant Paris"
        image="/images/Paris/Brunch Paris2.jpg"
      />
      <Card
        id={3}
        note={3}
        price={57}
        title="Restaurant Paris"
        image="/images/Paris/Brunch Paris3.jpg"
      />
      <Card
        id={4}
        note={4}
        price={80}
        title="Restaurant Paris"
        image="/images/Paris/Brunch Paris4.jpeg"
      />
    </div>

    <TitleSecondary title="Brunchs à New York" />
    <div class="card-list">
      <Card
        id={4}
        note={4}
        price={57}
        title="Restaurant New York"
        image="/images/New York/Brunch New York1.jpg"
      />
      <Card
        id={5}
        note={5}
        price={57}
        title="Restaurant New York"
        image="/images/New York/Brunch New York2.jpg"
      />
      <Card
        id={6}
        note={3}
        price={57}
        title="Restaurant New York"
        image="/images/New York/Brunch New York3.jpg"
      />
      <Card
        id={7}
        note={4}
        price={57}
        title="Restaurant New York"
        image="/images/New York/Brunch New York4.jpg"
      />
    </div>
    <TitleSecondary title="Brunchs à Séoul" />
    <div class="card-list">
      <Card
        id={7}
        note={4}
        price={57}
        title="Restaurant Séoul"
        image="/images/Seoul/Brunch Séoul1.jpg"
      />
      <Card
        id={8}
        note={5}
        price={57}
        title="Restaurant Séoul"
        image="/images/Seoul/Brunch Séoul2.jpg"
      />
      <Card
        id={9}
        note={3}
        price={57}
        title="Restaurant Séoul"
        image="/images/Seoul/Brunch Séoul3.jpg"
      />
      <Card
        id={10}
        note={4}
        price={57}
        title="Restaurant Séoul"
        image="/images/Seoul/Brunch Séoul4.jpg"
      />
    </div>
  </section>
</main>
