# Website Performance Optimization Portfolio Project
Project part of Udacity Front-End Web Developer Nanodegree program.
You will optimize a provided website with a number of optimization- and performance-related issues so that it achieves a target PageSpeed score and runs at 60 frames per second.

## Getting Started
Just clone/download the repo, unzip the folder to your destination of choice install grunt dependencies, then open index.html to see the main page in your default web browser.

### Part 1: Optimize PageSpeed Insights score for index.html
index.html achieves a PageSpeed score of at least 90 for Mobile and Desktop.
#### Part 2: Optimize Frames per Second in pizza.html
Optimizations made to views/js/main.js make views/pizza.html render with a consistent frame-rate at 60fps when scrolling.
#### Part 2: Optimize Time to Resize in pizza.html
Time to resize pizzas is less than 5 ms using the pizza size slider on the views/pizza.html page. Resize time is shown in the browser developer tools.

## Improvements Implemented:

**General**

    Compressed and resized all image files (jpg and png) using grunt-contrib-imagemin
    Minified all html, css and js files using grunt-contrib-htmlmin, grunt-contrib-cssmin and grunt-contrib-uglify

**Index.html**

    Inlined css
    Included media='print' to link href="css/print.css
    Used defer to analytics.js
    Used cssLoad in google fonts

**views/js/main.js**

    function updatePositions() -> removed document.body.scrollTop from the loop
    document.addEventListener('DOMContentLoaded', function() -> decreased the initial number of pizzas generated from 200 to 5
    function changePizzaSizes(size) -> replaced document.querySelectorAll(".randomPizzaContainer") with var randomPizzas
    function changeSliderLabel(size) -> replaced document.querySelector("#pizzaSize") with var pizzaSize
    refactored function changePizzaSizes(size) -> returns the newwidth instead of calculating it inside the for loop

## Website Performance Optimization portfolio project

    Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

    To get started, check out the repository and inspect the code.

    ### Getting started

    #### Part 1: Optimize PageSpeed Insights score for index.html

    Some useful tips to help you get started:

    1. Check out the repository
    1. To inspect the site on your phone, you can run a local server

      ```bash
      $> cd /path/to/your-project-folder
      $> python -m SimpleHTTPServer 8080
      ```

    1. Open a browser and visit localhost:8080
    1. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

      ``` bash
      $> cd /path/to/your-project-folder
      $> ./ngrok http 8080
      ```

    1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

    Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

    #### Part 2: Optimize Frames per Second in pizza.html

    To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js.

    You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

    ### Optimization Tips and Tricks
    * [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
    * [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
    * [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
    * [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
    * [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
    * [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
    * <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
    * <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
    * <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
    * <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

    ### Customization with Bootstrap
    The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

    * <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
    * <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>


## License

The contents of this repository are covered under the [MIT License](https://github.com/sctkusel/frontend-nanodegree-frogger-game-project/LICENSE.txt).
