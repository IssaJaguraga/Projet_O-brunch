<script>
  // Pour faire comme si on recevait des données au format JSON depuis le serveur,
  // on crée un tableau de données qui contient les données des espaces
  import Card from "../components/Card.svelte";
  import TitleSecondary from "../components/TitleSecondary.svelte";

  import Button from "../components/Button.svelte";

  export let continents = [];
  export let countries = [];
  export let towns = [];

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

      <Button>Rechercher</Button>
      
    </form>
  </section>
  <h1 class="featured-text">
    Retrouvez ici les meilleurs restaurants pour bruncher, dans les plus grandes villes du monde.
  </h1>

  <section class="restaurants" aria-label="Tous les restaurants">
    <TitleSecondary title="Les meilleurs brunchs à Paris" />
    <div class="card-list">
      <Card
        id={1}
        note={4}
        price={35}
        title="Restaurant La Turca"
        image="/images/Paris/Brunch Paris1.jpg"
      />
      <Card
        id={2}
        note={5}
        price={20}
        title="Restaurant Nara"
        image="/images/Paris/Brunch Paris2.jpg"
      />
      <Card
        id={3}
        note={3}
        price={57}
        title="Restaurant Safran"
        image="/images/Paris/Brunch Paris3.jpg"
      />
      <Card
        id={4}
        note={4}
        price={80}
        title="Restaurant Mina's"
        image="/images/Paris/Brunch Paris4.jpeg"
      />
      <Card
        id={4}
        note={4}
        price={80}
        title="Restaurant Musk"
        image="/images/Paris/Brunch Paris5.jpg"
      />
    </div>

    <TitleSecondary title="Les meilleurs brunchs à Marrakech" />
    <div class="card-list">
      <Card
        id={4}
        note={4}
        price={57}
        title="Restaurant Marrakech"
        image="/images/Marrakech/Brunch Marrakech1.jpg"
      />
      <Card
        id={5}
        note={5}
        price={57}
        title="Restaurant Marrakech"
        image="/images/Marrakech/Brunch Marrakech2.jpg"
      />
      <Card
        id={6}
        note={3}
        price={57}
        title="Restaurant Marrakech"
        image="/images/Marrakech/Brunch Marrakech3.jpg"
      />
      <Card
        id={7}
        note={4}
        price={57}
        title="Restaurant Marrakech"
        image="/images/Marrakech/Brunch Marrakech4.jpg"
      />
      <Card
        id={7}
        note={4}
        price={57}
        title="Restaurant Marrakech"
        image="/images/Marrakech/Brunch Marrakech5.jpg"
      />
      </div>
     <TitleSecondary title="Les meuilleurs brunch de Dubaï" />
    <div class="card-list">
      <Card
        id={7}
        note={4}
        price={57}
        title="Restaurant Nara"
        image="/images/Dubai/Brunch Dubai1.jpg"
      />
      <Card
        id={7}
        note={4}
        price={57}
        title="Restaurant Nara"
        image="/images/Dubai/Brunch Dubai2.jpg"
      />
      <Card
        id={7}
        note={4}
        price={57}
        title="Restaurant Nara"
        image="/images/Dubai/Brunch Dubai3.jpg"
      />
      <Card
        id={7}
        note={4}
        price={57}
        title="Restaurant Nara"
        image="/images/Dubai/Brunch Dubai4.jpg"
      />
      <Card
        id={7}
        note={4}
        price={57}
        title="Restaurant Nara"
        image="/images/Dubai/Brunch Dubai5.jpg"
      />
      </div>
    <TitleSecondary title="Les meilleurs brunch de New york" />
    <div class="card-list">
      <Card
        id={4}
        note={4}
        price={57}
        title="Restaurant La Turca"
        image="/images/New York/Brunch New York1.jpg"
      />
      <Card
        id={5}
        note={5}
        price={57}
        title="Restaurant Safran"
        image="/images/New York/Brunch New York2.jpg"
      />
      <Card
        id={6}
        note={3}
        price={57}
        title="Restaurant Mina's"
        image="/images/New York/Brunch New York3.jpg"
        />
       <Card
        id={7}
        note={4}
        price={57}
        title="Restaurant Musk"
        image="/images/New York/Brunch New York4.jpg"
      />
      </div> 
    <TitleSecondary title="Les meilleurs brunch de Milan" />
    <div class="card-list">
        <Card
          id={4}
          note={4}
          price={57}
          title="Restaurant La Turca"
          image="/images/Milan/Brunch Milan1.jpg"
        />
        <Card
          id={5}
          note={5}
          price={57}
          title="Restaurant Nara"
          image="/images/Milan/Brunch Milan2.jpg"
        />
        <Card
          id={6}
          note={3}
          price={57}
          title="Restaurant Safran"
          image="/images/Milan/Brunch Milan3.jpg"
        />
        <Card
          id={7}
          note={4}
          price={57}
          title="Restaurant Mina's"
          image="/images/Milan/Brunch Milan4.jpg"
        />
        <Card
          id={7}
          note={4}
          price={57}
          title="Restaurant Musk"
          image="/images/Milan/Brunch Milan5.jpg"
        />
        </div>
      <TitleSecondary title="Les meilleurs brunch de Suva" />
      <div class="card-list">
          <Card
            id={4}
            note={4}
            price={57}
            title="Restaurant La Turca"
            image="/images/Suva/Brunch Suva1.jpeg"
          />
          <Card
            id={5}
            note={5}
            price={57}
            title="Restaurant Nara"
            image="/images/Suva/Brunch Suva2.jpg"
          />
          <Card
            id={6}
            note={3}
            price={57}
            title="Restaurant Safran"
            image="/images/Suva/Brunch Suva3.jpg"
          />
          <Card
            id={7}
            note={4}
            price={57}
            title="Restaurant Mina's"
            image="/images/Suva/Brunch Suva4.jpg"
          />
          </div>
        <TitleSecondary title="Les meilleurs brunch d'Abidjan" />
        <div class="card-list">
          <Card
            id={4}
            note={4}
            price={57}
            title="Restaurant La Turca"
            image="/images/Abidjan/Brunch Abidjan1.jpg"
          />
          <Card
            id={5}
            note={5}
            price={57}
            title="Restaurant Nara"
            image="/images/Abidjan/Brunch Abidjan2.jpg"
          />
          <Card
            id={6}
            note={3}
            price={57}
            title="Restaurant Safran"
            image="/images/Abidjan/Brunch Abidjan3.jpg"
          />
          <Card
            id={7}
            note={4}
            price={57}
            title="Restaurant Mina's"
            image="/images/Abidjan/Brunch Abidjan4.jpg"
          />
          <Card
            id={7}
            note={4}
            price={57}
            title="Restaurant Mina's"
            image="/images/Abidjan/Brunch Abidjan5.jpg"
          />
          </div>
        <TitleSecondary title="Les meilleurs brunch à Bogota" />
        <div class="card-list">
          <Card
            id={4}
            note={4}
            price={57}
            title="Restaurant La Turca"
            image="/images/Bogota/Brunch Bogota1.jpg"
          />
          <Card
            id={5}
            note={5}
            price={57}
            title="Restaurant Nara"
            image="/images/Bogota/Brunch Bogota2.jpg"
          />
          <Card
            id={6}
            note={3}
            price={57}
            title="Restaurant Safran"
            image="/images/Bogota/Brunch Bogota3.jpg"
          />
          <Card
            id={7}
            note={4}
            price={57}
            title="Restaurant Mina's"
            image="/images/Bogota/Brunch Bogota4.jpg"
          />
          <Card
            id={7}
            note={4}
            price={57}
            title="Restaurant Mina's"
            image="/images/Bogota/Brunch Bogota5.jpg"
          />
          </div>
        <TitleSecondary title="Les meilleurs brunch de Séoul" />
        <div class="card-list">
          <Card
            id={4}
            note={4}
            price={57}
            title="Restaurant La Turca"
            image="/images/Seoul/Brunch Séoul1.jpg"
          />
          <Card
            id={5}
            note={5}
            price={57}
            title="Restaurant Nara"
            image="/images/Seoul/Brunch Séoul2.jpg"
          />
          <Card
            id={6}
            note={3}
            price={57}
            title="Restaurant Safran"
            image="/images/Seoul/Brunch Séoul3.jpg"
          />
          <Card
            id={7}
            note={4}
            price={57}
            title="Restaurant Mina's"
            image="/images/Seoul/Brunch Séoul4.jpg"
          />
          <Card
            id={7}
            note={4}
            price={57}
            title="Restaurant Mina's"
            image="/images/Seoul/Brunch Séoul5.jpg"
          />
          </div>
        <TitleSecondary title="Les meilleurs brunch à Sydney" />
        <div class="card-list">
          <Card
            id={4}
            note={4}
            price={57}
            title="Restaurant La Turca"
            image="/images/Sydney/Brunch Sydney1.png"
          />
          <Card
            id={5}
            note={5}
            price={57}
            title="Restaurant Nara"
            image="/images/Sydney/Brunch Sydney2.png"
          />
          <Card
            id={6}
            note={3}
            price={57}
            title="Restaurant Safran"
            image="/images/Sydney/Brunch Sydney3.jpg"
          />
          <Card
            id={7}
            note={4}
            price={57}
            title="Restaurant Mina's"
            image="/images/Sydney/Brunch Sydney4.jpg"
          />
          <Card
            id={7}
            note={4}
            price={57}
            title="Restaurant Mina's"
            image="/images/Sydney/Brunch Sydney5.jpg"
          />
          <Card
            id={7}
            note={4}
            price={57}
            title="Restaurant Mina's"
            image="/images/Sydney/Brunch Sydney6.jpg"
          />
          </div>

  </section>
</main>
