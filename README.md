# Outils texte

Trois outils pour travailler un texte : comparer deux versions ligne par ligne, tout compter en direct (mots, caractères, temps de lecture, limites des réseaux sociaux) et corriger l'orthographe et la typographie en français ou en anglais.

*English version: [README.en.md](README.en.md)*

## Comparer

Colle le **texte d'origine** à gauche et le **texte modifié** à droite : le résultat montre, ligne par ligne, ce qui a été retiré, ajouté ou modifié. Deux options :

- **Ignorer les majuscules** : « Bonjour » et « bonjour » sont considérés comme pareils ;
- **Ignorer les espaces** : les différences d'espaces ne comptent pas.

Si rien n'a changé, il l'indique.

## Compter

Écris ou colle un texte : tout est compté pendant que tu tapes.

- **Mots**, **caractères** (avec et sans les espaces), **phrases**.
- **Lecture** : temps de lecture silencieuse (230 mots par minute) et à voix haute (150 mots par minute).
- **Mots différents**, avec le plus long.
- **Mots les plus utilisés**, sans les petits mots courants (« le », « de », « et », « the »…).
- **Limites** : une jauge pour chaque format, qui passe au rouge si le texte est trop long : Tweet / X (280 caractères), SMS (160), titre SEO (60), description SEO (155), bio Instagram (150).

## Orthographe

Colle ou écris un texte en français ou en anglais, puis clique sur **Vérifier**.

- Les mots inconnus sont soulignés ; **clic droit** sur un mot pour ses suggestions, l'**ignorer** ou l'**ajouter au dictionnaire** (il ne sera plus signalé, sur tous tes PC).
- La typographie est aussi vérifiée : espaces en double, espace manquante avant ! ? ; : (règle française), espace avant une virgule ou un point, mot répété, phrase qui commence par une minuscule.
- **Tout corriger** applique la première suggestion à chaque faute : relis le texte ensuite.

La vérification utilise les dictionnaires de NeoDex.

## Données et synchronisation

Les mots ajoutés au dictionnaire et ceux ignorés sont enregistrés par NeoDex, sauvegardés et synchronisés entre tes PC si la synchro est activée. Les textes collés ne sont pas gardés. Au premier lancement, le plugin reprend ce que tu avais déjà dans NeoDex.

## Installer

Dans NeoDex : **NeoStore → À découvrir → Outils texte → Installer**.

Développer un plugin : voir le [SDK NeoDex](https://github.com/NDesumeur/neodex-sdk).
