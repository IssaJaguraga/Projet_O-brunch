<script>
  // on crée des propriétés pour pouvoir utiliser
  // notre composant avec différentes données
  // (= les données propres à chaque espace)
  export let id, note, price, title, image;
</script>

<article class="card">
  <a href="/restaurant/{id}">
    <div class="card__informations">
      <div class="card__img-container">
        <img class="card__img" src={image} alt="" />
      </div>
      <p class="card__description">
        {title}
        <span class="card__note"
          >
          {#each Array(5) as _, index (index)}
            {#if index < note}
              <i class="fa fa-star" aria-hidden="true"></i>
            {:else}
              <i class="fa fa-star-o" aria-hidden="true"></i>
            {/if}
          {/each}
        </span>
        <!-- <img src="/icons/star/1.svg" alt="note" class="card__icon" / -->
        <span class="card__price">Prix moyen {price}€</span>
      </p>
    </div>
  </a>
</article>
