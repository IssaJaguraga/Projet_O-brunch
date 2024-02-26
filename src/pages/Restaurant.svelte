<script>
    import Card from "../components/Card.svelte";
    import TitleSecondary from "../components/TitleSecondary.svelte";
    export let params;

    console.log(params);

    export let restaurant = [];
    const fetchRestaurant = async (id) => {
        const response = await fetch(
            `http://issajaguraga-server.eddi.cloud:8080/items/Restaurant/${id}`,
        );

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            restaurant = data.data;
        }
    };

    fetchRestaurant(params.restaurantId);

    
    
    
</script>

<main>
    <section class="home-restaurants">
        <TitleSecondary title={restaurant.name} />
        <div class="restaurant-card__img-container">
        <img
        class="restaurant-card__img"
            src={`http://issajaguraga-server.eddi.cloud:8080/assets/${restaurant.picture}`}
            alt=""
           
        />
        </div>
        <p>{restaurant.Adress}</p>

        <p>
            {restaurant.discription}
        </p>
        {#each Array(5) as _, index (index)}
            {#if index < restaurant.rate}
                <i class="fa fa-star yellow-star" aria-hidden="true"></i>
            {:else}
                <i class="fa fa-star-o yellow-star" aria-hidden="true"></i>
            {/if}
        {/each}
        <!-- <img src="/icons/star/1.svg" alt="note" class="card__icon" / -->
        <span class="card__price">Prix moyen {restaurant.price}€</span>
    </section>


    

  

    <style>
        .yellow-star{
            color: gold;
        }
        .restaurant-card__img-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 20px; 
        }
    </style>
</main>
