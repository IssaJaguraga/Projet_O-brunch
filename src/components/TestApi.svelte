<script>
    


  // fonction appelée lors du chargement du composant
  const init = async() => {
    const AllRestaurant = await getAllRestaurant();
    console.log(AllRestaurant);

    const token = await login();
    console.log('Token ' + token);

    // liste des commentaires en étant authentifié
    const Comments = await getComments(token);
    console.log(Comments);
  }

  // On veut récupérer la liste des espaces depuis le serveur Directus
  // Fonction qui envoie une requête au serveur
  // et récupère les résultats
  const getAllRestaurant = async() => {
    // Appel du serveur : on fait une demande
    //                    - fetch permet de faire une demande
    //                    - on indique à fetch la ressource
    //                    - on fait une demande avec fetch, on veut avoir une réponse :
    //                      - on va stocker le résultat dans une variable
    //                      - mais on doit attendre la réponse (await)
    //                      - pour ne pas bloquer le reste du programme, la fonction
    //                        doit être asynchrone (async)
    // Analogie : le client demande une pizza
    //            - on indique au pizzaiolo la pizza que l'on souhaite avoir
    //            - on souhaite donc à la fin obtenir la pizza
    //              - mais il faut attendre le temps de préparation + cuisson (await)
    //              - et on peut faire d'autres choses pendant la cuisson (asynchrone)

    // ! On utilise la variable import.meta.env.VITE_URL_DIRECTUS qui permet
    //   de lire l'information sur l'adresse du serveur depuis le fichier .env
    const response = await fetch(import.meta.env.VITE_URL_DIRECTUS + 'items/Restaurant');

    // quand on a la réponse, on veut avoir les résultats / les données
    // Analogie : le pizzaiolo donne la pizza dans un carton, 
    //            on veut sortir la pizza du carton
    const results = await response.json();

    // on peut travailler avec les résultats
    // Analogie : on peut couper et manger la pizza
    return results.data;
  }

  // Fonction qui permet de s'authentifier et de récupérer un token
  const login = async() => {
    // Exécution de la requête et attente de la réponse
    // Pour s'authentifier, il envoyer les informations de connexion
    // en utilisant la méthode POST
    const response = await fetch(import.meta.env.VITE_URL_DIRECTUS + 'auth/login', {
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

  // Lecture des commentaire avec le token
  const getComments = async(token) => {
    // Appel du serveur : on fait une demande
    const response = await fetch(import.meta.env.VITE_URL_DIRECTUS + 'items/Comments', {
        // On ajoute l'authorization et le token pour faire la requête en mode utilisateur connecté / authentifié
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });

    // quand on a la réponse, on veut avoir les résultats / les données
    const results = await response.json();

    // on peut travailler avec les résultats
    return results;
  }

  init();
</script>

<!-- on appelle la fonction getSpaces() pour afficher les espaces
     - la fonction est asynchrone, donc on doit attendre la réponse -->
{#await getAllRestaurant()}
    <!-- dans la partie await, on peut mettre du code qui est affiché
         en attendant que les résultats soient là -->
   
<!-- on peut récupérer directement le résultat de la fonction dans une variable -->
{:then AllRestaurant}
    <!-- dans la partie then, on peut afficher du code une fois que l'on a
         les résultats -->
   
    <!-- on peut travailler sur la variable qui contient le résultat -->
    {AllRestaurant}
{/await}
<!-- on appelle la fonction getSpaces() pour afficher les espaces
     - la fonction est asynchrone, donc on doit attendre la réponse -->
     {#await getAllRestaurant()}
     <!-- dans la partie await, on peut mettre du code qui est affiché
          en attendant que les résultats soient là -->
     
 <!-- on peut récupérer directement le résultat de la fonction dans une variable -->
 {:then AllRestaurant}
     <!-- dans la partie then, on peut afficher du code une fois que l'on a
          les résultats -->
   
     <!-- on peut travailler sur la variable qui contient le résultat -->
     {AllRestaurant}
 {/await}