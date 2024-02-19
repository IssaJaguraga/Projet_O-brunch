<script>
 import { link } from "svelte-spa-router";

    // on crée des propriétés pour pouvoir utiliser
    // notre composant avec différentes données
    // (= les données propres à chaque espace)
    export let id, note, price ;
</script>
<article class="theme-card">
    <div class="theme-card__informations">
     <ul>
       <li>
         <img src="/images/Sydney/Brunch Sydney6.jpg" alt="" /><span></span>
       </li>
     </ul>
       <span>Restaurant Musk 555 Avis Clients{note}<br>Prix moyen 57&#8364{price}€</span>
    </div>
    <a href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
</article> 

