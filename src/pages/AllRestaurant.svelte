<script>
  
  import ThemeCard from "../components/ThemeCard.svelte";

// Pour faire comme si on recevait des données au format JSON depuis le serveur,
// on crée un tableau de données qui contient les données des espaces
const dataJson = [
  // on a un premier espace
  {
    id: 1,
    price: 100,
    note: 25,
    
  },
  {
    id: 2,
    price: 150,
    note: 25
  },
  {
    id: 3,
   
    price: 100,
    note: 25
  },
  {
    id: 4,
    price: 100,
    note: 25
  }
];


 
</script>
<main class="ma">

  


<h1 class="Présentation">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloremque qui excepturi nesciunt consequuntur ut distinctio, sit sequi eveniet corrupti, necessitatibus nemo maiores dolore odit eaque. </h1>

<section class="restaurant" aria-label="Tous les restaurants"> 
<div class='moi'>
<h2 class="title_restaurant"> Les meuilleurs brunch de Dubaï </h2>

    <article class="theme-card"> 
            
               <ul class="theme-card__informations">
                 <li>
                   <img class="pictures" src="/images/Dubai/Brunch Dubai1.jpg" alt="" /><span></span>
                 </li>
               </ul>
                 <span>Restaurant Nara 149 Avis Clients<br>Prix moyen 36&#8364</span>
            
              <a href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
    </article>

    <article class="theme-card"> 
              <div class="theme-card__informations">
               <ul>
                 <li>
                   <img src="/images/Dubai/Brunch Dubai2.jpg" alt="" /><span></span>
                 </li>
               </ul>
                 <span>Restaurant Safran 89 Avis Clients<br>Prix moyen 20&#8364</span>
              </div>
              <a href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
    </article>

    <article class="theme-card"> 
              <div class="theme-card__informations">
               <ul>
                 <li>
                   <img src="/images/Dubai/Brunch Dubai3.jpg" alt="" /><span></span>
                 </li>
               </ul>
                 <span>Restaurant Mina's 73 Avis Clients<br>Prix moyen 30&#8364</span>
              </div>
              <a href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
    </article>

    <article class="theme-card"> 
              <div class="theme-card__informations">
               <ul>
                 <li>
                   <img src="/images/Dubai/Brunch Dubai4.jpg" alt="" /><span></span>
                 </li>
               </ul>
                 <span>Restaurant Musk 221 Avis Clients<br>Prix moyen 25&#8364</span>
              </div>
              <a href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
    </article>

    <article class="theme-card"> 
              <div class="theme-card__informations">
               <ul>
                 <li>
                   <img src="/images/Dubai/Brunch Dubai5.jpg" alt="" /><span></span>
                 </li>
               </ul>
                 <span>Restaurant La Turca 188 Avis Clients<br>Prix moyen 39&#8364</span>
              </div>
              <a href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
    </article>
  </div>
    <h2>Les meuilleurs brunch de New york</h2>
    <article class="theme-card"> 
              <div class="theme-card__informations">
               <ul>
                 <li>
                   <img src="/images/New York/Brunch New York1.jpg" alt="" /><span></span>
                 </li>
               </ul>
                 <span>Restaurant Nara 169 Avis Clients<br>Prix moyen 39&#8364</span>
              </div>
              <a href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
    </article>

    <article class="theme-card"> 
              <div class="theme-card__informations">
               <ul>
                 <li>
                   <img src="/images/New York/Brunch New York2.jpg" alt="" /><span></span>
                 </li>
               </ul>
                 <span>Restaurant Safran 69 Avis Clients<br>Prix moyen 31&#8364</span>
              </div>
              <a href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
    </article>

    <article class="theme-card"> 
              <div class="theme-card__informations">
               <ul>
                 <li>
                   <img src="/images/New York/Brunch New York3.jpg" alt="" /><span></span>
                 </li>
               </ul>
                 <span>Restaurant Mina's 349 Avis Clients<br>Prix moyen 56&#8364</span>
              </div>
              <a href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
    </article>

    <article class="theme-card"> 
              <div class="theme-card__informations">
               <ul>
                 <li>
                   <img src="/images/New York/Brunch New York4.jpg" alt="" /><span></span>
                 </li>
               </ul>
                 <span>Restaurant Musk 349 Avis Clients<br>Prix moyen 56&#8364</span>
              </div>
              <a href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
    </article>

    <h2>Les meuilleurs brunch de Marrakech</h2>
    <article class="theme-card"> 
              <div class="theme-card__informations">
               <ul>
                 <li>
                   <img src="/images/Marrakech/Brunch Marrakech1.jpg" alt="" /><span></span>
                 </li>
               </ul>
                 <span>Restaurant La Turca 229 Avis Clients<br>Prix moyen 39&#8364</span>
              </div>
              <a href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
    </article>

    <article class="theme-card"> 
              <div class="theme-card__informations">
               <ul>
                 <li>
                   <img src="/images/Marrakech/Brunch Marrakech2.jpg" alt="" /><span></span>
                 </li>
               </ul>
                 <span>Restaurant Nara 179 Avis Clients<br>Prix moyen 26&#8364</span>
              </div>
              <a href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
    </article>

    <article class="theme-card"> 
              <div class="theme-card__informations">
               <ul>
                 <li>
                   <img src="/images/Marrakech/Brunch Marrakech3.jpg" alt="" /><span></span>
                 </li>
               </ul>
                 <span>Restaurant safran 149 Avis Clients<br>Prix moyen 36&#8364</span>
              </div>
              <a href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
    </article>

    <article class="theme-card"> 
              <div class="theme-card__informations">
               <ul>
                 <li>
                   <img src="/images/Marrakech/Brunch Marrakech4.jpg" alt="" /><span></span>
                 </li>
               </ul>
                 <span>Restaurant Mina's 189 Avis Clients<br>Prix moyen 56&#8364</span>
              </div>
              <a href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
    </article>

    <article class="theme-card"> 
              <div class="theme-card__informations">
               <ul>
                 <li>
                   <img src="/images/Marrakech/Brunch Marrakech5.jpg" alt="" /><span></span>
                 </li>
               </ul>
                 <span>Restaurant Musk 349 Avis Clients<br>Prix moyen 46&#8364</span>
              </div>
              <a href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
    </article>
    
    <h2>Les meuilleurs brunch de Milan</h2>
    <article class="theme-card">
          <div class="theme-card__informations">
           <ul>
             <li>
               <img src="/images/Milan/Brunch Milan1.jpg" alt="" /><span></span>
             </li>
           </ul>
           <span>Restaurant La Turca 189 Avis Clients<br>Prix moyen 56&#8364</span>
        </div>
        <a href="/#" class="theme-card__button"aria-label="Accéder à l'espace restaurant"></a>
    </article>

    <article class="theme-card">
           <div class="theme-card__informations">
            <ul>
              <li>
                <img src="/images/Milan/Brunch Milan2.jpg" alt="" /><span></span>
              </li>
            </ul>
              <span>Restaurant Nara 149 Avis Clients<br>Prix moyen 36&#8364</span>
           </div>
           <a href="/#" class="theme-card__button"aria-label="Accéder à l'espace restaurant"></a>
    </article>
    
    <article class="theme-card">
          <div class="theme-card__informations">
           <ul>
             <li>
               <img src="/images/Milan/Brunch Milan3.jpg" alt="" /><span></span>
             </li>
           </ul>
             <span>Restaurant safran 249 Avis Clients<br>Prix moyen 46&#8364</span>
          </div>
          <a href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
    </article>
      
    <article class="theme-card">
          <div class="theme-card__informations">
           <ul>
             <li>
               <img src="/images/Milan/Brunch Milan4.jpg" alt="" /><span></span>
             </li>
           </ul>
             <span>Restaurant Mina's 49 Avis Clients<br>Prix moyen 56&#8364</span>
          </div>
          <a href="/#" class="theme-card__button"aria-label="Accéder à l'espace restaurant"></a>
    </article>
      
    <article class="theme-card">
          <div class="theme-card__informations">
           <ul>
             <li>
               <img src="/images/Milan/Brunch Milan5.jpg" alt="" /><span></span>
             </li>
           </ul>
             <span>Restaurant Musk 64 Avis Clients<br>Prix moyen 36&#8364</span>
          </div>
          <a href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
    </article>

    <h2>Les meuilleurs brunch de Paris</h2>     
    <article class="theme-card">
          <div class="theme-card__informations">
           <ul>
             <li>
               <img src="/images/Paris/Brunch Paris1.jpg" alt="" /><span></span>
             </li>
           </ul>
             <span>Restaurant La Turca 149 Avis Clients<br>Prix moyen 36&#8364</span>
          </div>
          <a href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
    </article>
     
    <article class="theme-card">
             <div class="theme-card__informations">
              <ul>
                <li>
                  <img src="/images/Paris/Brunch Paris2.jpg" alt="" /><span></span>
                </li>
              </ul>
                <span>Restaurant Nara 149 Avis Clients<br>Prix moyen 56&#8364</span>
             </div>
             <a href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
    </article>
        
    <article class="theme-card">
            <div class="theme-card__informations">
             <ul>
               <li>
                 <img src="/images/Paris/Brunch Paris3.jpg" alt="" /><span></span>
               </li>
             </ul>
               <span>Restaurant Safran 249 Avis Clients<br>Prix moyen 56&#8364</span>
            </div>
            <a href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
    </article>
        
    <article class="theme-card">
            <div class="theme-card__informations">
             <ul>
               <li>
                 <img src="/images/Paris/Brunch Paris4.jpeg" alt="" /><span></span>
               </li>
             </ul>
               <span>Restaurant Mina's 49 Avis Clients<br>Prix moyen 46&#8364</span>
            </div>
            <a href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
    </article>
        
    <article class="theme-card">
            <div class="theme-card__informations">
             <ul>
               <li>
                 <img src="/images/Paris/Brunch Paris5.jpg" alt="" /><span></span>
               </li>
             </ul>
               <span>Restaurant Musk 349 Avis Clients<br>Prix moyen 67&#8364</span>
            </div>
            <a href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
    </article>

    <h2>Les meuilleurs brunch de Suva</h2>
    <article class="theme-card">
            <div class="theme-card__informations">
             <ul>
               <li>
                 <img src="/images/Suva/Brunch Suva1.jpeg" alt="" /><span></span>
               </li>
             </ul>
               <span>Restaurant La Turca 249 Avis Clients<br>Prix moyen 56&#8364</span>
            </div>
            <a href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
    </article>
  
    <article class="theme-card">
          
               <div class="theme-card__informations">
                <ul>
                  <li>
                    <img src="/images/Suva/Brunch Suva2.jpg" alt="" /><span></span>
                  </li>
                </ul>
                  <span>Restaurant Nara 149 Avis Clients<br>Prix moyen 36&#8364</span>
               </div>
               <a href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
    </article>
          
    <article class="theme-card"> 
              <div class="theme-card__informations">
               <ul>
                 <li>
                   <img src="/images/Suva/Brunch Suva3.jpg" alt="" /><span></span>
                 </li>
               </ul>
                 <span>Restaurant Safran 49 Avis Clients<br>Prix moyen 46&#8364</span>
              </div>
              <a href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
    </article>
          
    <article class="theme-card">
              <div class="theme-card__informations">
               <ul>
                 <li>
                   <img src="/images/Suva/Brunch Suva4.jpg" alt="" /><span></span>
                 </li>
               </ul>
                 <span>Restaurant Mina's 119 Avis Clients<br>Prix moyen 36&#8364</span>
              </div>
              <a href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
    </article>

    <h2>Les meuilleurs brunch d'Abidjan</h2>
    <article class="theme-card">
              <div class="theme-card__informations">
               <ul>
                 <li>
                   <img src="/images/Abidjan/Brunch Abidjan1.jpg" alt="" /><span></span>
                 </li>
               </ul>
                 <span>Restaurant Mina's Musk 55 Avis Clients<br>Prix moyen 37&#8364</span>
              </div>
              <a href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
    </article>
          
    <article class="theme-card">
              <div class="theme-card__informations">
               <ul>
                 <li>
                   <img src="/images/Abidjan/Brunch Abidjan2.jpg" alt="" /><span></span>
                 </li>
               </ul>
                 <span>Restaurant Mina's Musk 155 Avis Clients<br>Prix moyen 47&#8364</span>
                 
              </div>
              <a href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
    </article>
          
    <article class="theme-card">
                 <div class="theme-card__informations">
                  <ul>
                    <li>
                      <img src="/images/Abidjan/Brunch Abidjan3.jpg" alt="" /><span></span>
                    </li>
                  </ul>
                    <span>Restaurant Nara Musk 45 Avis Clients<br>Prix moyen 27&#8364</span>
                 </div>
                 <a href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
    </article>
            
    <article class="theme-card">
                <div class="theme-card__informations">
                 <ul>
                   <li>
                     <img src="/images/Abidjan/Brunch Abidjan4.jpg" alt="" /><span></span>
                   </li>
                 </ul>
                   <span>Restaurant Safran 145 Avis Clients<br>Prix moyen 66&#8364</span>
                </div>
                <a href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
    </article>
            
    <article class="theme-card">
            <div class="theme-card__informations">
                 <ul>
                   <li>
                     <img src="/images/Abidjan/Brunch Abidjan5.jpg" alt="" /><span></span>
                   </li>
                 </ul>
                   <span>Restaurant Mina's 245 Avis Clients<br>Prix moyen 46&#8364 </span>
                </div>
                <a href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
    </article>

    <h2>Les meuilleurs brunch de Bogota</h2>                   
    <article class="theme-card">
                <div class="theme-card__informations">
                 <ul>
                   <li>
                     <img src="/images/Bogota/Brunch Bogota1.jpg" alt="" /><span></span>
                   </li>
                 </ul>
                   <span>Restaurant Musk 205 Avis Clients<br>Prix moyen 26&#8364</span>
                </div>
                <a href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
    </article>
            
    <article class="theme-card">
                <div class="theme-card__informations">
                 <ul>
                   <li>
                     <img src="/images/Bogota/Brunch Bogota2.jpg" alt="" /><span></span>
                   </li>
                 </ul>
                   <span>Restaurant La Turca 205 Avis Clients<br>Prix moyen 34&#8364</span>
                </div>
                <a href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
    </article>
              
    <article class="theme-card">
                   <div class="theme-card__informations">
                    <ul>
                      <li>
                        <img src="/images/Bogota/Brunch Bogota3.jpg" alt="" /><span></span>
                      </li>
                    </ul>
                      <span>Restaurant Nara 45 Avis Clients<br>Prix moyen 16&#8364</span>
                   </div>
                   <a href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
    </article>
              
    <article class="theme-card">
                  <div class="theme-card__informations">
                   <ul>
                     <li>
                       <img src="/images/Bogota/Brunch Bogota4.jpg" alt="" /><span></span>
                     </li>
                   </ul>
                     <span>Restaurant Safran 45 Avis Clients<br>Prix moyen 26&#8364</span>
                  </div>
                  <a href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
    </article>
              
    <article class="theme-card">
                  <div class="theme-card__informations">
                   <ul>
                     <li>
                       <img src="/images/Bogota/Brunch Bogota5.jpg" alt="" /><span></span>
                     </li>
                   </ul>
                     <span>Restaurant Mina's 45 Avis Clients<br>Prix moyen 36&#8364</span>
                  </div>
                  <a href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
    </article>

    <h2>Les meuilleurs brunch de Séoul</h2>
    <article class="theme-card">
                  <div class="theme-card__informations">
                   <ul>
                     <li>
                       <img src="/images/Seoul/Brunch Séoul1.jpg" alt="" /><span></span>
                     </li>
                   </ul>
                     <span>Restaurant Musk 45 Avis Clients<br>Prix moyen 40&#8364</span>
                  </div>
                  <a href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
    </article>

    <article class="theme-card">
                  <div class="theme-card__informations">
                   <ul>
                     <li>
                       <img src="/images/Seoul/Brunch Séoul2.jpg" alt="" /><span></span>
                     </li>
                   </ul>
                     <span>Restaurant La Turca 45 Avis Clients<br>Prix moyen 40&#8364</span>
                  </div>
                  <a href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
    </article>
                
    <article class="theme-card">
                     <div class="theme-card__informations">
                      <ul>
                        <li>
                          <img src="/images/Seoul/Brunch Séoul3.jpg" alt="" /><span></span>
                        </li>
                      </ul>
                        <span>Restaurant Nara 85 Avis Clients<br>Prix moyen 47&#8364</span>
                     </div>
                     <a href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
    </article>  

    <article class="theme-card">
                    <div class="theme-card__informations">
                     <ul>
                       <li>
                         <img src="/images/Seoul/Brunch Séoul4.jpg" alt="" /><span></span>
                       </li>
                     </ul>
                       <span>Restaurant Safran 85 Avis Clients<br>Prix moyen 47&#8364</span>
                    </div>
                    <a href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
    </article>
        
    <article class="theme-card">
                    <div class="theme-card__informations">
                     <ul>
                       <li>
                         <img src="/images/Seoul/Brunch Séoul5.jpg" alt="" /><span></span>
                       </li>
                     </ul>
                       <span>Restaurant Mina's 185 Avis Clients<br>Prix moyen 37&#8364</span>
                    </div>
                    <a href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
    </article>

    <h2>Les meuilleurs brunch de Sydney</h2>       
    <article class="theme-card">
                    <div class="theme-card__informations">
                     <ul>
                       <li>
                         <img src="/images/Sydney/Brunch Sydney1.png" alt="" /><span></span>
                       </li>
                     </ul>
                       <span>Restaurant Musk 65 Avis Clients<br>Prix moyen 37&#8364</span>
                    </div>
                    <a href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
    </article>
                
    <article class="theme-card">
                
                    <div class="theme-card__informations">
                     <ul>
                       <li>
                         <img src="/images/Sydney/Brunch Sydney2.png" alt="" /><span></span>
                       </li>
                     </ul>
                       <span>Restaurant La Turca 185 Avis Clients<br>Prix moyen 27&#8364</span>
                    </div>
                    <a href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
    </article>
                 
    <article class="theme-card">
                  
                       <div class="theme-card__informations">
                        <ul>
                          <li>
                            <img src="/images/Sydney/Brunch Sydney3.jpg" alt="" /><span></span>
                          </li>
                        </ul>
                          <span>Restaurant Nara 805 Avis Clients<br>Prix moyen 47&#8364</span>
                       </div>
                       <a
                         href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
    </article>
                  
    <article class="theme-card"> 
                      <div class="theme-card__informations">
                       <ul>
                         <li>
                           <img src="/images/Sydney/Brunch Sydney4.jpg" alt="" /><span></span>
                         </li>
                       </ul>
                         <span>Restaurant safran 85 Avis Clients<br>Prix moyen 47&#8364</span>
                      </div>
                      <a href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
    </article>
                  
    <article class="theme-card">
                      <div class="theme-card__informations">
                       <ul>
                         <li>
                           <img src="/images/Sydney/Brunch Sydney5.jpg" alt="" /><span></span>
                         </li>
                       </ul>
                         <span>Restaurant Mina's 76 Avis Clients<br>Prix moyen 17&#8364</span>
                      </div>
                      <a href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
    </article>
                  
    <article class="theme-card">
                      <div class="theme-card__informations">
                       <ul>
                         <li>
                           <img src="/images/Sydney/Brunch Sydney6.jpg" alt="" /><span></span>
                         </li>
                       </ul>
                         <span>Restaurant Musk 555 Avis Clients<br>Prix moyen 57&#8364</span>
                      </div>
                      <a href="/#" class="theme-card__button" aria-label="Accéder à l'espace restaurant"></a>
    </article> 
       
    {#each dataJson as dataAllRestaurant}
      <ThemeCard {...dataAllRestaurant} />
    {/each }
   
  </section>
  

</main>

