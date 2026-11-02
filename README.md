# Party Showdown

A party game for 2–12 people where everyone plays on their own phone. One person hosts, everyone else joins with a 4-letter code.

**Play:** https://nchauhan-dev.github.io/party-showdown/

## Game modes
- **Classic Trivia**: everyone answers every question. Easy 1 point, medium 2, hard 3.
- **Showdown Board**: pick a square, then race to buzz in. Wrong answers cost points.
- **Last One Standing**: 3 lives each.
- **High Roller**: see the category, bet your points, then answer.
- **Team Battle**: two teams; your team's answer is what most of you pick.
- **Closest Wins**: guess a number, closest scores.
- **Charades**: act out a secret word while others shout or type guesses.

## Install on your phone
- **iPhone:** open the link in Safari, tap Share, then **Add to Home Screen**.
- **Android:** open the link in Chrome and tap **Install**.

## How it works
It's a single static page with no accounts, no database and no tracking. The host's phone runs the game; players' phones connect to it through a public relay. Nothing is stored except your name and settings on your own phone.

## Files
| File | What it is |
|---|---|
| `index.html` | The whole app, including the question bank |
| `sw.js` | Saves the app on the phone so it opens fast and works offline |
| `manifest.webmanifest` | App name, colours and icons for Add to Home Screen |
| `*.png` | App icons |
| `.nojekyll` | Tells GitHub Pages to serve the files as-is |
