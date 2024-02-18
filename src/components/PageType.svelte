<script>
    document.addEventListener("DOMContentLoaded", function() {
        const starsContainer = document.querySelector('.stars');
        const stars = starsContainer.querySelectorAll('.star');
        const commentText = document.getElementById('comment-text');
        const submitButton = document.getElementById('submit-comment');
        const commentSection = document.getElementById('comment-section');
      
        stars.forEach(star => {
          star.addEventListener('mouseover', () => {
            const rating = star.getAttribute('data-value');
            highlightStars(rating);
          });
      
          star.addEventListener('click', () => {
            const rating = star.getAttribute('data-value');
            starsContainer.setAttribute('data-rating', rating);
            highlightStars(rating);
          });
        });
      
        submitButton.addEventListener('click', () => {
          const comment = commentText.value.trim();
          const rating = starsContainer.getAttribute('data-rating');
          
          if (comment !== '' && rating !== '0') {
            addComment(comment, rating);
            clearForm();
          } else {
            alert('Veuillez sélectionner une note et écrire un commentaire.');
          }
        });
      
        function highlightStars(value) {
          stars.forEach(star => {
            if (star.getAttribute('data-value') <= value) {
              star.classList.add('selected');
            } else {
              star.classList.remove('selected');
            }
          });
        }
      
        function addComment(comment, rating) {
          const commentDiv = document.createElement('div');
          commentDiv.classList.add('comment');
          commentDiv.innerHTML = `
            <div class="stars">
              ${'&#9733;'.repeat(rating)}
              ${'&#9734;'.repeat(5 - rating)}
            </div>
            <p>${comment}</p>
            <button class="delete-comment">Effacer</button>
          `;
          commentSection.appendChild(commentDiv);
      
          // Attacher un gestionnaire d'événements au bouton Effacer
          const deleteButton = commentDiv.querySelector('.delete-comment');
          deleteButton.addEventListener('click', () => {
            commentSection.removeChild(commentDiv);
          });
        }
        
    
        function clearForm() {
          commentText.value = '';
          stars.forEach(star => {
            star.classList.remove('selected');
          });
        }
      });
      
    </script>
    
    <body>
        <main>
            <header>
                <a href="#">Ville</a><a>></a><a href="#">Brunch à ...</a><a>></a><a href="#">Nom du Restaurant</a>
                <div class="img_type">
                    <img src="./public/images/Paris/Brunch Paris 1.jpg" alt="..." />
                    <img src="./public/images/Paris/Brunch Paris 2.jpg" alt="..." />
                    <img src="./public/images/Paris/Brunch Paris 3.jpg" alt="..." />
                </div>
    
                <a href="#">Pays,Genre</a>
                <h1>Nom du Restaurant</h1>
                <br>
                <br>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, molestias accusamus? Culpa, ratione
                    asperiores. Eveniet similique mollitia facere perferendis magnam blanditiis sed modi nobis ipsam
                    inventore adipisci distinctio ipsum at dignissimos tempora, deleniti molestiae id omnis veritatis
                    beatae! Corrupti deserunt tempore, atque delectus quos culpa iure ipsa ipsum doloribus, sequi nisi dolor
                    odit error doloremque dicta. Architecto obcaecati corporis soluta modi facilis omnis quod, dolor at? Qui
                    adipisci iste expedita. Quas dolore obcaecati quasi delectus recusandae odit dignissimos, doloribus cum!
                </p>
            </header>
            <br>
            <div class="address">
                <address>
    
                    31 Jump street <br>
                    69008Lyonne<br>
                    <a href="#">Pays</a>
                </address>
            </div>
    
    
    
            <p>Prix Moyen</p>
    
    
            <div class="commentaires">
                <h2>Laissez-nous un commentaire !</h2>
                <div class="stars" data-rating="0">
                    <span class="star" data-value="1">&#9733;</span>
                    <span class="star" data-value="2">&#9733;</span>
                    <span class="star" data-value="3">&#9733;</span>
                    <span class="star" data-value="4">&#9733;</span>
                    <span class="star" data-value="5">&#9733;</span>
                </div>
                <textarea id="comment-text" placeholder="Entrez votre commentaire ici..."></textarea>
                <button id="submit-comment">Soumettre</button>
            </div>
    
            <div id="comment-section" class="comment-section">
                <!-- Les commentaires soumis seront affichés ici -->
            </div>
    
    
        </main>
        <script src="script.js"></script>
    </body>