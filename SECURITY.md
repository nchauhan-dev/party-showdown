# Security

Party Showdown is a static web page. It has no server, accounts, passwords or payment details, and it collects no personal data beyond the display name you type, which is shared only with the people in your game.

The page sets a Content-Security-Policy that only allows scripts, styles, fonts and connections from the sites it needs (the app itself, unpkg/jsDelivr for the connection library, Google Fonts, and the game relay).

Game messages travel through public relay servers. Don't type anything private into the game.

To report a problem, open an issue on this repository.
