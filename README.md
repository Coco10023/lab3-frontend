# Work Experience Website

Detta är en webbapplikation byggd med HTML, CSS och JavaScript.

Webbplatsen konsumerar en REST-baserad webbtjänst och används för att visa, lägga till och radera arbetserfarenheter.

## Tekniker

- HTML
- CSS
- JavaScript
- Fetch API

## Funktionalitet

Webbplatsen använder Fetch API för att kommunicera med en extern webbtjänst.

Följande funktioner finns:

- Hämta data (GET)
- Skicka data (POST)
- Radera data (DELETE)
- Validering av formulär innan data skickas

## Sidor

### index.html
Visar alla arbetserfarenheter som hämtas från API:t.  
Användaren kan även radera poster.

### add.html
Innehåller ett formulär för att lägga till en ny arbetserfarenhet.  
Formuläret valideras med JavaScript innan data skickas till API:t.

### about.html
Beskriver webbplatsens syfte, vilka tekniker som används och slutsatser från uppgiften.

## API

Webbplatsen använder följande webbtjänst:

Bas-URL:  
https://lab3-backend-k7rv.onrender.com/

Endpoint:  
https://lab3-backend-k7rv.onrender.com/api/experiences

## Validering

Formulärdata valideras med JavaScript innan POST-anrop skickas.

Om obligatoriska fält saknas visas tydliga felmeddelanden för användaren.

## Hur man kör projektet

1. Klona repot

```bash
git clone
