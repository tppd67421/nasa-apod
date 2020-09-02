# Project description

Deployed application – [tppd67421.github.io/nasa-apod/](https://tppd67421.github.io/nasa-apod/)

## Technologies used:

* `React/Redux`;
* `Webpack`;
* `SCSS`.

## Project structure:

* `/src/app/` – contain all js files;
* `/src/assets` – contain another files (fonts, styles and etc);
* `/src/app/components` – all components, which rendered on screen;
* `/src/app/components/ApplicationError` – if we get error, which broke all application;
* `/src/app/components/ErrorComponent` – if we get error single component;
* `/src/app/components/ImageBlock` – image component;
* `/src/app/components/ImageCatalog` – include ImageBlock, VideoBlock, Loaders and RenderingContentDependingOnTheType;
* `/src/app/components/Loaders` – show LoaderActive if user scroll to end page, show LoaderEmpty with same size (fix bug with jumping elements);
* `/src/app/components/MainImage` – big image on first screen with title and data;
* `/src/app/components/ModalWindow` – we show ModalWindow with title, full size image (or iframe with video), image (or video) description and date;
* `/src/app/components/Preloader` – show after loaded all content;
* `/src/app/components/RenderingContentDependingOnTheType` – render ImageBlock, VideoBlock or ErrorComponent depending on the type;
* `/src/app/components/VideoBlock` – get thumbnail from video and render image, inside ModalWindow we render iframe;
* `/src/app/constants` – all constants;
* `/src/app/helpers` – functions, which don't render, but help calculate something values or help do another things;
* `/src/app/components/App.js` – main component, which render all application.

Scripts:

`npm start` – start project in development mode;
<br>
`npm run build` – build production version.
