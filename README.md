# AI Course Recommender

A static landing page featuring an integrated AI chatbot built with HTML, CSS, and Vanilla JavaScript. The chatbot connects to a Flowise AI API endpoint to provide course recommendations.

## Features
- Responsive grid layout for course cards.
- Floating, interactive chat widget.
- Asynchronous API requests to Flowise AI.

## Project Structure
- `index.html`: Main HTML structure.
- `css/style.css`: Styling and layout.
- `js/script.js`: Chat widget functionality and API connection.

## Setup Instructions
1. Clone the repository: `git clone <your-repo-url>`
2. Open `index.html` in your web browser.
3. (Optional) Deploy directly via GitHub Pages.

## Warning
The Flowise API endpoint is exposed client-side. Ensure that this specific endpoint is heavily rate-limited and restricted at the server level to prevent abuse.
