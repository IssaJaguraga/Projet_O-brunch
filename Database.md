## Dictionnaire de données de l'application oBrunch

### Table Restaurant (restaurant)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|AUTO_INCREMENT, PRIMARY_KEY(UNIQUE), <br />UNSIGNED, NOT_NULL|L'identifiant unique du produit|
|name|VARCHAR(64)|NOT_NULL|Le nom du restaurant|
|description|TEXT|NOT NULL|La description du restaurant|
|picture|VARCHAR(128)|NULL|l'URL de l'image du produit|
|price|TINYINT(1))|NOT_NULL, DEFAULT 0|Le niveau de tarification du restaurant|
|rate|TINYINT(1)|NOT_NULL, DEFAULT 0|L'avis des utilisateurs sur le produit (valeur de 1 a 5)|
|adress| VARCHAR(128)|NOT_NULL|L'adresse du restaurant|
|town| VARCHAR(64) | NOT NULL |Ville du restaurant|
|country| VARCHAR(64) | NOT NULL|Pays|
|continent| VARCHAR(64) | NOT NULL|Continent|
|created_at|TIMESTAMP|DEFAULT_CURRENT_TIMESTAMP|La date de création|
|updated_at|TIMESTAMP|NULL|La date de la dernière mise a jour|
|deleted_at|TIMESTAMP|NULL|La date de la dernière mise a jour|

### Table User (user)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|AUTO_INCREMENT, PRIMARY_KEY(UNIQUE), <br />UNSIGNED, NOT_NULL |L'identifiant de l'utilisateur|
|role|VARCHAR(64)|NOT_NULL |Le rôle de l'utilisateur|
|lastname|VARCHAR(64)|NOT NULL |Nom de l'utilisateur|
|firstname|VARCHAR(64)|NOT NULL |Prénom de l'utilisateur|
|age|TINYINT(1)|NULL, DEFAULT 0 | Age de l'utilisateur|
|email|VARCHAR(128)|NOT NULL |Email de l'utilisateur|
|password|VARCHAR(128)|NOT NULL |Mot de passe de l'utilisateur|
|created_at|TIMESTAMP|DEFAULT_CURRENT_TIMESTAMP |La date de création|
|updated_at|TIMESTAMP |NULL |La date de modification|
|deleted_at|TIMESTAMP |NULL |La date de suppression|


### Table Commentaires (comment)

| Champ      | Type        | Spécificités                                                 | Description                |
| ---------- | ----------- | ------------------------------------------------------------ | -------------------------- |
| id         | INT         | AUTO_INCREMENT, PRIMARY_KEY(UNIQUE), <br />UNSIGNED, NOT_NULL | L'identifiant du commentaire |
| comment    | TEXT         | NOT_NULL                                                     | Le commentaire                |
| date       | DATE         | NOT_NULL                                                     | La date du commentaire        |
| created_at | TIMESTAMP   | DEFAULT_CURRENT_TIMESTAMP                                    | La date de création           |
| deleted_at | TIMESTAMP   | NULL                                                         | La date de suppression       |
| user       | ENTITY      | NULL                                                         |L'utilisateur qui a posté le commentaire|
