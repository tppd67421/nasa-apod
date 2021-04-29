# Project description

Deployed application: [tppd67421.github.io/nasa-apod/](https://tppd67421.github.io/nasa-apod/)

## Technologies used:

* `React/Redux`;
* `Webpack`;
* `SCSS`.

## Project description

This project use NASA API and get Astronomy Picture of the Day ([link to api](https://api.nasa.gov/)). Page responsive for all screens.

When entering the site you will see preloader. After loaded you will see image or video of the day on full screen. A little bit bottom you can will see title, input element with date, for select content of the target day. If you set another date, you will see new image on top page. Date will be set to local storage and after reload page you will see setted date with her image.

After this will be gallery with 24 elements (images or video). Each from them is picture (or video) of the day. First element of the yesterday. Second - the day before yesterday and etc. If you scroll to end will be work infinity loader and you will see next 24 elements. This process will be continue to infinity.

If you click on any element, will be open modal window. In this modal window will be show element title, uncutted element (video or image), description and date. If you click to image in modal window, for you will be showed full size image in new tab.

Each night we have small time interval, when application don't working. You will see errow message. It happens because NASA will set new image of the day and in this time will give null respond to api.

Nice to use :)

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

## Scripts:

`npm start` – start project in development mode;
<br>
`npm run build` – build production version.
