# Outils texte (Text tools)

Three tools for working on a text: compare two versions line by line, count everything live (words, characters, reading time, social media limits) and check spelling and typography in French or English.

*Version française : [README.md](README.md)*

## Lines and find-replace (new in 1.3.0)

Sort lines, remove duplicates, find and replace with or without a regular expression.

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

## Clean up

Paste a text from a PDF, an email or a web page: the cleaned version appears next to it. Tick what to fix (double spaces, spaces at line ends, lines broken mid-sentence, extra blank lines, invisible characters) and pick the case. « Sentence case » lowers shouted words but keeps lone acronyms (PDF, NASA). Then copy the result or replace the text.

## Lines and find-replace (1.3.0)

In **CLEAN UP**, a second row works on lines and text:

- **Sort** A to Z (numbers in the right order: 9 before 10), Z to A, shortest first, or reverse the order.
- **Remove duplicate lines**: a line already seen above disappears, ignoring capitals and surrounding spaces.
- **Find and replace**, as plain text or as a **regular expression** (`\d+` a number, `^` and `$` the start and end of each line, `$1` brings back the first parenthesis). The number of replacements is shown; an invalid expression is flagged in red.
