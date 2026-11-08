# Outils texte (Text tools)

Three tools for working on a text: compare two versions line by line, count everything live (words, characters, reading time, social media limits) and check spelling and typography in French or English.

*Version française : [README.md](README.md)*

## Compare

Paste the **original text** on the left and the **edited text** on the right: the result shows, line by line, what was removed, added or changed. Two options:

- **Ignore case**: "Hello" and "hello" count as the same;
- **Ignore spaces**: differences in spacing do not count.

If nothing changed, it says so.

## Count

Type or paste a text: everything is counted as you type.

- **Words**, **characters** (with and without spaces), **sentences**.
- **Reading**: silent reading time (230 words per minute) and reading aloud (150 words per minute).
- **Distinct words**, with the longest.
- **Most used words**, without common small words ("le", "de", "et", "the"…).
- **Limits**: a gauge for each format, turning red if the text is too long: Tweet / X (280 characters), SMS (160), SEO title (60), SEO description (155), Instagram bio (150).

## Spelling

Paste or type a text in French or English, then click **Check**.

- Unknown words are underlined; **right-click** a word for suggestions, to **ignore** it or to **add it to the dictionary** (it will no longer be flagged, on all your PCs).
- Typography is checked too: double spaces, missing space before ! ? ; : (French rule), space before a comma or full stop, repeated word, sentence starting with a lowercase letter.
- **Fix all** applies the first suggestion to every mistake: read the text again afterwards.

The check uses NeoDex's dictionaries.

## Data and sync

Words added to the dictionary and ignored words are stored by NeoDex, backed up and synced between your PCs when sync is on. Pasted texts are not kept. On first launch, the plugin picks up what you already had in NeoDex.

## Install

In NeoDex: **NeoStore → Discover → Outils texte → Install**.

Building a plugin: see the [NeoDex SDK](https://github.com/NDesumeur/neodex-sdk).
