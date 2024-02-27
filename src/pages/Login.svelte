<script>
  import { link } from "svelte-spa-router";
<<<<<<< Updated upstream
=======
  import user from "../store/userStore";

  export let email = '';
  export let password = '';

  const login = async (e) => {
    e.preventDefault();
    const response = await fetch('http://issajaguraga-server.eddi.cloud:8080/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      user.set({
        token: data.data.access_token,
        user: data.data.user
    
      });
      console.log(user);
    }
  };
>>>>>>> Stashed changes
</script>


<!-- Corps de la page -->
<main class= "main_login">
  <!-- Titre de la page -->
  <h1>Se connecter</h1>

  <!-- Formulaire d'inscription -->
  <form class="theme-form" method="GET">
    <!-- Champ email -->
    <div class="theme-form__input">
      <input
        class="theme-input"
        type="email"
        id="email"
        name="email-address"
        aria-label="adresse email"
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
        aria-label="mot de passe"
        placeholder="Votre mot de passe"
      />
    </div>

    <!-- envoi formulaire -->
    <input
      type="submit"
      class="theme-button"
      value="Envoyer le formulaire"
      aria-label="soumission formulaire"
    />
  </form>

  <!-- Lien vers page de connexion -->
  <a
    class="theme-minor-link"
    href="/register"
    aria-label="Créez-vous un compte"
    use:link>Vous n'avez pas de compte ?
    </a>
</main>
