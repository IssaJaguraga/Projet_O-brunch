<!-- Scripts -->
<script>
    import { link } from "svelte-spa-router";
  
    // Déclaration des variables qui seront liées à
    // des éléments de notre code
    let lastname, firstname, age, email, password, error, success;
  
    // Fonction de vérification des caractères spéciaux
    function aDesCaracteresSpeciaux(valeurAVerifier) {
      const lesCaractereSpeciaux = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
      const ilYAunCaractereSpecial = lesCaractereSpeciaux.test(valeurAVerifier);
      return ilYAunCaractereSpecial;
    }
  
    // Fonction de vérification d'adresse email
    function estUneAdresseEmail(valeurAVerifier) {
      const formatEmail = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/;
      const estUnEmail = formatEmail.test(valeurAVerifier);
      return estUnEmail;
    }
 
    // Fonction de vérification du mot de passe
    function leMDPEstValide(valeurAVerifier) {
      if (valeurAVerifier.length < 8 || valeurAVerifier > 16) {
        return false;
      }
      const nbMaj = valeurAVerifier.match(/[A-Z]/g);
      if (nbMaj === null || nbMaj.length < 1) {
        return false;
      }
      const nbMin = valeurAVerifier.match(/[a-z]/g);
      if (nbMin === null || nbMin.length < 1) {
        return false;
      }
      const nbNumb = valeurAVerifier.match(/[0-9]/g);
      if (nbNumb === null || nbNumb.length < 1) {
        return false;
      }
      return true;
    }
  
    function checkForm() {
      // On reset nos alertes en cas de renvoi
      error.style.display = "none";
      success.style.display = "none";
  
      /* -- Version améliorée */
      // La variable me sert de témoin d'erreur
      let isError = false;
      let tabError = [];
  
      // Vérification des champs vides
      if (
        lastname.value == "" ||
        firstname.value == "" ||
        email.value == "" ||
        password.value == ""
      ) {
        isError = true;
        tabError.push("Erreur, un champ est vide");
  
        // -- ⭐⭐ SUPER-BONUS⭐⭐
        showAlert(error);
      }
  
      // Vérifie tous les autres paramètres en éclatant les tests
      if (aDesCaracteresSpeciaux(firstname.value)) {
        isError = true;
        tabError.push("Nom invalide");
      }
      if (aDesCaracteresSpeciaux(lastname.value)) {
        isError = true;
        tabError.push("Prénom invalide");
      }
      if (estUneAdresseEmail(email.value) === false) {
        isError = true;
        tabError.push("Mauvais email");
      }
      if (leMDPEstValide(password.value) === false) {
        isError = true;
        tabError.push("Mot de passe trop faible");
      }
  
      // Choisi quoi faire en fonction de la vérification
      if (isError) {
        console.log(tabError);
        showAlert(error);
      } else {
        console.log("tout va bien");
        showAlert(success);
      }
    }
  
  </script>
  
  <!-- Corps de la page -->
  <main class="main_register">
    <!-- Titre de la page -->
    <h1>Créer un compte</h1>
  
    <!-- Formulaire d'inscription -->
    <form class="theme-form" method="GET" on:submit|preventDefault={checkForm}>
      <!-- Champ nom -->
      <div class="theme-form__input">
        <input
          class="theme-input theme-input--small"
          type="text"
          id="lastname"
          name="lastname"
          aria-label="nom"
          placeholder="Votre nom"
          bind:this={lastname}
        />
        <label class="theme-label" for="lastname"></label>
      </div>
  
      <!-- Champ prénom -->
      <div class="theme-form__input">
        <input
          class="theme-input theme-input--small"
          type="text"
          id="firstname"
          name="firstname"
          aria-label="prénom"
          placeholder="Votre prénom"
          bind:this={firstname}
        />
        <label class="theme-label" for="firstname"></label>
      </div>

       <!-- Champ prénom -->
       <div class="theme-form__input">
        <input
          class="theme-input theme-input--small"
          type="text"
          id="age"
          name="age"
          aria-label="age"
          placeholder="Votre age"
          bind:this={age}
        />
        <label class="theme-label" for="age"></label>
      </div>
  
      <!-- Champ email -->
      <div class="theme-form__input">
        <input
          class="theme-input"
          type="email"
          id="email"
          name="email-address"
          aria-label="adresse email"
          placeholder="Votre adresse email"
          bind:this={email}
        />
        <label class="theme-label" for="email-address"></label>
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
          bind:this={password}
        />
        <label class="theme-label" for="password"></label>
      </div>
  
      <!-- envoi formulaire -->
      <input
        type="submit"
        class="theme-button button-validate"
        value="Envoyer"
        aria-label="soumission formulaire"
      />
    </form>
  
    <!-- Lien vers page de connexion -->
    <a
      class="theme-minor-link"
      href="/login"
      aria-label="Connectez-vous à votre compte"
      use:link>Déjà un compte ?</a
    >
  
 </main>