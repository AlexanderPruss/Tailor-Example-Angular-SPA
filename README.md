# Tailor-Example-Angular-SPA

An example repository showing how to embed an Angular SPA into a webpage with Zalando's Tailor.

See https://github.com/zalando/tailor.

# Running the example

## Starting the Angular App

The `AngularApp` directory contains a basic Angular app. It's packaged by Webpack into a UMD module.

To start the app:

- `cd AngularApp`
- `npm run start`

## Starting the Tailor Server

The `Tailor` directory contains a barebones Tailor server.

To start the server:

- `cd Tailor`
- `node tailor.js`

## What should I see?

The Angular app deploys to `localhost:8080`; once loaded, it should display the name of the app 
and a celebratory message, "We've loaded everything!"

The Tailor app shows a template at `localhost:8081/home`. It should load up the Angular app and flank it by 
some `<p>` tags.

# Future Improvements

I based the Angular app in this example off of an app I'm currently developing. Once I get the basics working,
I'll make it a bit more complicated, by adding e.g. multiple components and routing to the app.
