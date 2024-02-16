<script>

    // Fonction qui permet de s'authentifier et de récupérer un token
    const login = async() => {
      // Exécution de la requête et attente de la réponse
      // Pour s'authentifier, il envoyer les informations de connexion
      // en utilisant la méthode POST
      const response = await fetch(import.meta.env.VITE_URL_DIRECTUS + '/auth/login', {
          method: 'POST', // on est en méthode POST
          headers: {
              // on indique que les données sont au format json
              'Content-Type': 'application/json'
          },
          // on envoie les informations dans le corps de la requête (body)
          // ! en JavaScript, la syntaxe { cle: valeur } est un objet
          //   Pour la requête, on doit envoyer les données sous forme de texte
          //   Donc on doit "transformer" notre objet JavaScript qui contient les données
          //   en une représentation texte.
          //   JSON.stringify() permet de transformer un objet JavaScript en sa représentation
          //   sous forme de texte.
          body: JSON.stringify({
              "email": "admin@obrunch.io",
              "password": "1234"
          })
      });
  
      // lecture des résultats
      const results = await response.json();
      console.log(results);
  
      // on récupère le token
      const token = results.data.access_token;
  
      // on retourne le token
      return token;
    }
    
  </script>