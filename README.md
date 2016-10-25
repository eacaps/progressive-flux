# progressive-flux
This project is a demonstration of using some Progressive Web App technologies with React and Flux. This code loosely follows a presentation I gave for [ReactDC](http://slides.com/ecaps/deck#/).

## Running the demo
First off clone or fork this repo. Then use  a few npm commands to get going:

```
npm install
npm start
```

This will start the demo on port 3000, so just put `http://localhost:3000` in your browser to load it up.

## The application
This is a fairly boring TODO application where you can add a few TODOs to a list. The cool part about is its use of WebWorkers and a ServiceWorker to make any TODOs you add available in offline mode as well. To demonstrate this, add a few TODOs, then open your Web Console`(CMD+ALT+I)` on Chrome on a MAC. You should see a **Network** tab. Click on it and then click the checkbox for **Offline**. Now refresh the page and the TODOs you have entered will still be there! You can check out the (presentation)(http://slides.com/ecaps/deck#/) for an explaination of whats going on behind the scenese.

## The future
When I have some more downtime I'll be working to update this example with a little more robustness and some documentation.
