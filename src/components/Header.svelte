<script>
    import { link } from "svelte-spa-router";

    // Fonction pour afficher le menu en mobile
    function displayMenu() {
        const navMenu = document.querySelector(".nav-menu");
        navMenu.style.display = "flex";
        navMenu.style.right = 0;
        
    }

    // Masquer le menu en mobile
    function hideMenu() {
        const navMenu = document.querySelector(".nav-menu");
        navMenu.style.display = "none";
    }
</script>

<header>
    
    <a
        href="#/"
        class="home-link-logo"
        aria-label="Aller à la page d'accueil"
        use:link
    />

    <!-- Le bouton n'est visible qu'au format mobile & tablette -->
        
    <button
        type="button"
        id="menubutton"
        class="menu-button"
        aria-label="Accès menu"
        aria-haspopup="true"
        aria-expanded="false"
        aria-controls="main-menu"
        on:click={displayMenu}
    />

    <!-- La navigation n'est visible qu'au format desktop -->
    <nav class="nav-menu" aria-label="header navigation">
        <button
            type="button"
            id="closebutton"
            class="menu-button menu-button--close"
            aria-label="Fermer menu"
            aria-haspopup="true"
            aria-expanded="false"
            aria-controls="close-menu"
            on:click={hideMenu}
        />
        <!-- Notre liste comprenant notre menu -->
        <ul id="main-menu" role="menu" aria-labelledby="menubutton">

                <li role="menuitem">
                <a
                    href="/history"
                    class="nav-menu__link"
                    aria-label="Historique du brunch"
                    on:click={hideMenu}
                    use:link>Historique</a
                >
            </li>
            <li role="menuitem">
                <a
                    href="/about"
                    class="nav-menu__link"
                    aria-label="A propos d'OBrunch"
                    on:click={hideMenu}
                    use:link>A propos d'Obrunch</a
                >
            </li>

            <li role="menuitem">
                <a
                    href="/login"
                    class="nav-menu__link"
                    aria-label="Se connecter à votre compte"
                    on:click={hideMenu}
                    use:link>Se connecter</a
                >
            </li>
        </ul>
    </nav>
</header>
