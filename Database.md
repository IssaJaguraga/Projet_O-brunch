## Dictionnaire de données de l'application oBrunch

### Table Restaurant (restaurant)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|AUTO_INCREMENT, PRIMARY_KEY(UNIQUE), <br />UNSIGNED, NOT_NULL|L'identifiant unique du produit|
|name|VARCHAR(64)|NOT_NULL|Le nom du restaurant|
|description|TEXT|NULL|La description du restaurant|
|picture|varchar(128)|NULL|l'URL de l'image du produit|
|price rate|DECIMAL(10, 2)|NOT_NULL, DEFAULT 0|Le niveau de tarif du restaurant|
|adress|TINYINT(1)|NOT_NULL|L'adresse du restaurant|
|country|entity <br />(INT brand_id)|NOT NULL|Pays|
|continent|entity<br />(INT category_id)|NULL|Continent|
|created_at|TIMESTAMP|DEFAULT_CURRENT_TIMESTAMP|La date de création|
|updated_at|TIMESTAMP|NULL|La date de la dernière mise a jour|
|deleted_at|TIMESTAMP|NULL|La date de la dernière mise a jour|


### Table User (user)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|AUTO_INCREMENT, PRIMARY_KEY(UNIQUE), <br />UNSIGNED, NOT_NULL |L'identifiant de la categorie|
|role|VARCHAR(64)|NOT_NULL |Le rôle de l'utilisateur|
|lastname|VARCHAR(64)|NULL |Nom de l'utilisateur|
|firstname|VARCHAR(128)|NULL |Prénom de l'utilisateur|
|age|TINYINT(1)|NOT_NULL, DEFAULT 0 | Age de l'utilisateur|
|email|VARCHAR(128)|NULL |Email de l'utilisateur|
|password|VARCHAR(128)|NULL |Mot de passe de l'utilisateur|
|created_at|TIMESTAMP|DEFAULT_CURRENT_TIMESTAMP |La date de création|
|updated_at|TIMESTAMP|NULL |La date de modification|
|deleted_at|TIMESTAMP|NULL|La date de suppression|


### Table Commentaires (comment)

| Champ      | Type        | Spécificités                                                 | Description                |
| ---------- | ----------- | ------------------------------------------------------------ | -------------------------- |
| id         | INT         | AUTO_INCREMENT, PRIMARY_KEY(UNIQUE), <br />UNSIGNED, NOT_NULL | L'identifiant de la marque |
| name       | VARCHAR(64) | NOT_NULL                                                     | Le nom de la marque        |
| created_at | TIMESTAMP   | DEFAULT_CURRENT_TIMESTAMP                                    | La date de création        |
| updated_at | TIMESTAMP   | NULL                                                         | La date de modification    |
