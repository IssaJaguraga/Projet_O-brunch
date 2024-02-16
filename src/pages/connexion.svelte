<script>
  import { link, push } from "svelte-spa-router";

  let email = "";
  let password = "";

  // Fonction qui permet de s'authentifier et de récupérer un token
  const login = async (event) => {
    event.preventDefault();

    try {
      // Exécution de la requête et attente de la réponse
      // Pour s'authentifier, il envoyer les informations de connexion
      // en utilisant la méthode POST
      const response = await fetch(
        import.meta.env.VITE_URL_DIRECTUS + "/auth/login",
        {
          method: "POST", // on est en méthode POST
          headers: {
            // on indique que les données sont au format json
            "Content-Type": "application/json",
          },
          // on envoie les informations dans le corps de la requête (body)
          // ! en JavaScript, la syntaxe { cle: valeur } est un objet
          //   Pour la requête, on doit envoyer les données sous forme de texte
          //   Donc on doit "transformer" notre objet JavaScript qui contient les données
          //   en une représentation texte.
          //   JSON.stringify() permet de transformer un objet JavaScript en sa représentation
          //   sous forme de texte.
          body: JSON.stringify({
            email: email, // "admin@obrunch.io",
            password: password, // "1234",
          }),
        },
      );

      // lecture des résultats
      const results = await response.json();
      console.log(results);

      // on récupère le token
      const token = results.data.access_token;

      // TODO: il va falloir le stocker quelque part pour pouvoir le réutiliser dans d'autres appels
      // on retourne le token
      localStorage.setItem("TOKEN", token);

      push('/');
    } catch (e) {
      alert("Mauvais MDP");
    }
  };
</script>

<!-- Corps de la page -->
<main class="main_login">
  <!-- Titre de la page -->
  <h1>Se connecter</h1>

  <!-- Formulaire d'inscription -->
  <form class="theme-form" method="GET" on:submit={login}>
    <!-- Champ email -->
    <div class="theme-form__input">
      <input
        class="theme-input"
        type="email"
        id="email"
        name="email-address"
        aria-label="adresse email"
        bind:value={email}
        placeholder="Votre adresse e-mail"
      />
    </div>

    <!-- Champ mot de passe -->
    <div class="theme-form__input">
      <input
        class="theme-input"
        type="password"
        id="password"
        name="password"
        bind:value={password}
        aria-label="mot de passe"
        placeholder="Votre mot de passe"
      />
    </div>

    <!-- envoi formulaire -->
    <input
      type="submit"
      class="theme-button"
      value="Connexion"
      aria-label="soumission formulaire"
    />
  </form>

  <!-- Lien vers page de connexion -->
  <a
    class="theme-minor-link"
    href="/register"
    aria-label="Créez-vous un compte"
    use:link
    >Vous n'avez pas de compte ?
  </a>
</main>
