<script>
    import Card from "../components/Card.svelte";
    import TitleSecondary from "../components/TitleSecondary.svelte";
    
    let Restaurant = [];

    const viewRestaurant = (restaurantId) => {
        window.location.href = (`/restaurants/${restaurantId}`);
    };


    const fetchRestaurantsFromTowns = async (restaurantId) => {
        fetch(
            `http://issajaguraga-server.eddi.cloud:8080/items/Restaurant?filter[Restaurant_id][_eq]=${restaurantId}`,
        )
            .then((response) => response.json())
            .then((data) => {
                Restaurant = data.data;
            });
    };

    const fetchRestaurants = async () => {
        const response = await fetch(
            "http://issajaguraga-server.eddi.cloud:8080/items/Restaurant",
        );

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            Restaurant = data.data;
        }
    };

    const handleRestaurantSelected = (event) => {
        const restaurantId = event.currentTarget.value;
        fetchRestaurantsFromTowns(restaurantId);
    };

    fetchRestaurants();
</script>

<main>
    <section class="home-restaurants">
        <TitleSecondary title="Brunchs à Paris" />
        <div class="card-list">
            <Card
                id={1}
                note={4}
                price={35}
                title="Restaurant Paris"
                image="/images/Paris/Brunch Paris1.jpg"
                on:click={() => viewRestaurant(1)}
            />
        </div>
    </section>
</main>
