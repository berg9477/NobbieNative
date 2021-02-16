# Installatiehandleiding Nobbie React Native APP

[Omschrijving](#omschrijving)

[API Keys](#api-keys)

[Installatie](#installatie)

[NPM Commandos](#npm-commandos)

## Omschrijving

Deze applicatie is gemaakt voor het vinden van achtergrond informatie over een naam en gebruikers kunnen zien aan welke andere namen een specifieke naam gerelateerd is.

![](NobbieNative.png)


## API Keys

REST API Behindthename - REACT_APP_API_KEY=sa583307807


## Installatie

Kloon de repo in je terminal door de volgende stappen te volgen.

- Typ `git clone https://github.com/berg9477/NobbieNative.git` in je terminal
- Druk op enter.
Hiermee worden alle bestanden van de github naar de locale pc gekopieerd.
- Ga door middel van cd in je terminal naar de map die je zojuist hebt gemaakt.
- Typ `xcode-select --install` # alleen Mac users!
- Typ `npm install --unsafe-perm -g expo-cli` voor het installeren van alle afhankelijkheden.
- Typ `npm install axios` om Rest API toepassing van axios te installeren.
- Typ `npm i --save react-native-dash` voor het mogelijk maken van stippellijnen opmaak.
- Typ`npm install @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs @react-navigation/drawer` en `expo install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view` voor het mogelijk maken van navigatie tussen de twee pagina’s.
- Maak een (gratis) Expo account aan via https://expo.io/signup en installeer de Expo Go App op je mobiele apparaat. 
- typ `npm start` om de app lokaal uit te voeren en scan de QR-code met je mobiele apparaat.
- Om de code te bekijken, open je het project in je favoriete code-editor!


## NPM Commandos

npm start
Draait de app vanuit development modus
Open http://localhost:19002/ om het in de browser te bekijken.
