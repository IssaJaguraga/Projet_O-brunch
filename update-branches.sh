#!/bin/bash

# Définir le commit à fusionner
commit_hash="e4b3a5ec213d873814bbd76391307abbd6706296"

# Liste des branches à mettre à jour
branches=("AllRestaurant" "Database" "Intégration-Header" "JEREMYRONCEHENDRIKS-add-burger-menu-icon" "JEREMYRONCEHENDRIKS-createlogo" "Login" "about-and-history" "acceuil" "accueil" "commentaires" "conditions" "dev" "favoris" "header-and-footer" "icons" "link_between_bdd_and_login" "page_type")

# Fonction pour mettre à jour une branche
update_branch() {
    branch="$1"
    git checkout "$branch"
    git merge "$commit_hash" --no-edit
    git push origin "$branch"
}

# Mettre à jour chaque branche
for branch in "${branches[@]}"; do
    update_branch "$branch"
done
