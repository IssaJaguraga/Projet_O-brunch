<script>
    import { link } from "svelte-spa-router";
</script>

<footer class="main-footer">
    <a
        href="#/"
        class="footer-link-logo"
        aria-label="Aller à la page d'accueil"
        use:link
    >
        <img src="/images/logo-white.png" alt="Logo O'Brunch" class="logo" />
    </a>

    <ul id="footer-menu" role="menu" aria-label="Pages règlementaires">
        <li class="footer-menu__item">
            <a
                href="/conditions"
                class="footer-menu__item-link"
                aria-label="Conditions d'utilisation"
                use:link>Conditions d'utilisation</a
            >
        </li>
        <li class="footer-menu__item">
            <a
                href="/rgpd"
                class="footer-menu__item-link"
                aria-label="Confidentialité et gestion des cookies"
                use:link>Confidentialité et gestion des cookies</a
            >
        </li>
    </ul>

    <div class="socials">
        <ul class="socials-list">
            <li class="socials-list__item">
                <a href="facebook.com" class="socials-list__item-link" aria-label="Facebook">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
            </li>
            <li class="socials-list__item">
                <a href="instagram.com" class="socials-list__item-link" aria-label="Instagram">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
            </li>
            <li class="socials-list__item">
                <a href="twitter.com" class="socials-list__item-link" aria-label="Twitter">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
            </li>
        </ul>
    </div>

    <p class="footer-copyright">&#9426 O'Brunch 2024 - Tous droits réservés</p>
</footer>
