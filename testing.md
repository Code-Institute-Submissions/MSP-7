# Testing 

The following sections are the results of the testing throughout the software development lifecycle for MSP-2. This information has been included in a separate document in order to keep the README document uncluttered.

## Initial Unit Testing:
The following evidence captures were collected when testing was conducted throughout development of this project.

### Round One - Testing on pre-MVP
13/06/2021 @ 18:08
        Typos in the JS when processed via the JShint validator
                compatability issue which required "/*jshint esversion: 6 */" to be added to the start of the JS file
        No errors located in the CSS Jigsaw,
        One warning message in the HTML validator. It indicates the Section element should contain a h element of some type. 
                - Due to the minimalist size of the HTML, section tags were replaced with divs. If future development causes the HTML to expand, the use of Section will be reconsidered.

## Functionality Testing:
The following evidence captures were collected when testing was conducted via the GUI throughout development.

### Round One - Testing on MVP
13/06/2021 @ 18:08
        Functionality available:
                Basic HTML and CSS settings, Javascript enabled for initial geo location of weather, along with basic search (using either enter or left click to submit)
        Test Results:
                Initial location (using long/lat from browser) is operational if user allows
                Ability to search for a city (using enter button to submit) partially successful.
                Ability to search for a city (using left mouse click to submit) partially successful.
                Currently any City name entered will default to the American location. 
                        Need to implement a way to locate nearest match to user browser location? Or based on history?

        Functionality to be developed
                - field validation re city entry 
                        - based on allowed entries from openweathermap? 
                        - error message surrounding initial geo location (maybe plant in the html.)
                - background picture updating based on api response
                - creation of humourous sayings/texts to be updating based on api weather results (temp or description)

<p float="left">
<img src="https://github.com/Sphere42/MSP-2/blob/master/assets/images/testing/code/js13621result.PNG" width="600" height="400" />
<img src="https://github.com/Sphere42/MSP-2/blob/master/assets/images/testing/code/html13621result.PNG" width="600" height="400" />
<img src="https://github.com/Sphere42/MSP-2/blob/master/assets/images/testing/code/css13621result.PNG" width="600" height="400" />
</p>


### Round Two - Testing on MVP
19/06/2021
        Functionality available:
                Basic HTML and CSS settings, 
                Javascript enabled for initial geo location of weather, 
                Basic search (using either the enter key or left mouse click to submit)
                Background updates based on weather main content
        Test Results:
                Initial location (using long/lat from browser) is operational if user allows - message on page if geolocation request declined
                Ability to search for a city (using enter key to submit) 
                Ability to search for a city (user left mouse click to sumbit) 
                Invalid submittion does not currently produce an error
                Still exists -  any City name entered will default to the American location. 
                        - Need to implement a way to locate nearest match to user browser location? Or based on history?

        Functionality to be developed
                - field validation re city entry 
                        - based on allowed entries from openweathermap? 
                        - error message surrounding initial geo location (maybe plant in the html.)
                - background picture updating based on api response
                - creation of humourous sayings/texts to be updating based on api weather results (temp or description)

<p float="left">
<img src="https://github.com/Sphere42/MSP-2/blob/master/assets/images/testing/code/js19621result.PNG" width="600" height="400" />
<img src="https://github.com/Sphere42/MSP-2/blob/master/assets/images/testing/code/html19621result.PNG" width="600" height="400" />
<img src="https://github.com/Sphere42/MSP-2/blob/master/assets/images/testing/code/css19621result.PNG" width="600" height="200" />
</p>

### Round Three - Testing on MVP
22/06/2021
        Functionality available:
                Basic HTML and CSS settings, 
                Javascript enabled for initial geo location of weather, 
                Basic search (using either the enter key or left mouse click to submit)
                Validation on the API response, limited to submit text confirmation alert
                Background updates based on weather main content
                Submit field clears on focus
        Test Results:
                Initial location (using long/lat from browser) is operational if user allows - message on page if geolocation request declined
                Ability to search for a city (using enter key to submit) 
                Ability to search for a city (user left mouse click to sumbit) 
                Invalid submittion returns an error, this error is based on the API response and not field validation
                Still exists -  any City name entered will default to the American location. 
                        - work around is to request the user enter country code alone with city name

        Functionality to be developed
                - creation of humourous sayings/texts to be updating based on api weather results (temp or description)
                - validation on the search field itself (current error based on api results)

<p float="left">
<img src="https://github.com/Sphere42/MSP-2/blob/master/assets/images/testing/code/js22621result.PNG" width="600" height="400" />
<img src="https://github.com/Sphere42/MSP-2/blob/master/assets/images/testing/code/html22621result.PNG" width="600" height="400" />
<img src="https://github.com/Sphere42/MSP-2/blob/master/assets/images/testing/code/css22621result.PNG" width="600" height="400" />
</p>

### Round Four - Final Functional/regression Testing before UAT
23/06/2021
        Functionality available:
                Basic HTML and CSS settings, 
                Javascript enabled for initial geo location of weather, 
                Basic search (using either the enter key or left mouse click to submit)
                Validation on the API response, limited to submit text confirmation alert
                Background updates based on weather main content
                Submit field clears on focus
                Humourous quote populates based on the weather description
                
        Test Results:
                Initial location (using long/lat from browser) is operational if user allows - message on page if geolocation request declined
                Ability to search for a city (using enter key to submit) 
                Ability to search for a city (user left mouse click to sumbit) 
                Invalid submittion returns an error, this error is based on the API response and not field validation
                Still exists -  any City name entered will default to the American location. 
                        - work around is to request the user enter country code alone with city name

        Functionality to be developed
                - validation on the search field itself (current error based on api results)
                        Note, as API validation has been implemented, this item has reduced priority and will be developed in the future

<p float="left">
<img src="https://github.com/Sphere42/MSP-2/blob/master/assets/images/testing/code/js23621result.PNG" width="600" height="400" />
<img src="https://github.com/Sphere42/MSP-2/blob/master/assets/images/testing/code/html23621result.PNG" width="600" height="400" />
<img src="https://github.com/Sphere42/MSP-2/blob/master/assets/images/testing/code/css23621result.PNG" width="600" height="400" />
</p>

## Compatability testing:

The following Gifs are evidence collected from the compatability testing of the MSP-2 project

__iphone6/7/8 plus:__
Device width: 414px

<p float="left">
<img src="https://github.com/Sphere42/MSP-2/blob/master/assets/images/testing/device/iphone678.gif"/>
</p>

__samsung galaxy s5:__
Device width 360px

<p float="left">
<img src="https://github.com/Sphere42/MSP-2/blob/master/assets/images/testing/device/samsungg5.gif"/>
</p>

__Moto G4:__

Device width 360px

<p float="left">
<img src="https://github.com/Sphere42/MSP-2/blob/master/assets/images/testing/device/motog4.gif"/>
</p>

__Pixel 2:__

Device width 411px

<p float="left">
<img src="https://github.com/Sphere42/MSP-2/blob/master/assets/images/testing/device/pixel2.gif"/>
</p>

__iPad:__

Device width 1024px

<p float="left">
<img src="https://github.com/Sphere42/MSP-2/blob/master/assets/images/testing/device/ipad.gif"/>
</p>

__Desktop Chrome:__

<p float="left">
<img src="https://github.com/Sphere42/MSP-2/blob/master/assets/images/testing/device/chrome.gif" width="600" height="400" />
</p>

__Desktop Firefox:__

<p float="left">
<img src="https://github.com/Sphere42/MSP-2/blob/master/assets/images/testing/device/firefox.gif" width="600" height="400" />
</p>

__Desktop Edge:__

<p float="left">
<img src="https://github.com/Sphere42/MSP-2/blob/master/assets/images/testing/device/MSedge.gif" width="600" height="400" />
</p>

## User Acceptance Testing:

Due to the size and timelines of this project, there will not be a structured Alpha/Beta stage of UAT. Instead, a selection of volunteers will conduct a time boxed exploratory session. After which feedback will be collated and transformed into bugs, improvements or new features.

The following is the feedback provided from the end users from their exploratory test session:
 - It's great that the permission box pops up and I have a choice about providing my data
 - The Application is clean and clear, very simple to use
 - The jokes are corney but funny, would be of benefit to have more.
 - While the searchbar clears when I click on it to conduct a new search, it would be cleaner if it cleard on submission
 - On the Mobile phone, the page doesn't refocus to the top after search has been submitted, causing additional user clicks...
 - It does what it says on the tin

## Performance Testing:
The following evidence are the results from the performance speed test conducted on the deployed site:
<p float="left">
<img src="https://github.com/Sphere42/MSP-2/blob/master/assets/images/testing/speedtest.PNG" />
</p>

## WAI Luminosity Colour Contrast Ratio Assessment

The following are the results of the Luminosity Colour Contract Ratio Analysis. This analysis determines the readability of the site based of background to foreground ratios as specified by the WAI. (https://www.w3.org/WAI/tips/designing/)

### Thunderstorm Background
<p float="left">
<img src="https://github.com/Sphere42/MSP-2/blob/master/assets/images/testing/waicolour/thunderstorm-results.png" />
</p>

### Rain Background
<p float="left">
<img src="https://github.com/Sphere42/MSP-2/blob/master/assets/images/testing/waicolour/rain-results.png" />
</p>

### Drizzle Background
<p float="left">
<img src="https://github.com/Sphere42/MSP-2/blob/master/assets/images/testing/waicolour/drizzle-results.png" />
</p>

### Snow Background
<p float="left">
<img src="https://github.com/Sphere42/MSP-2/blob/master/assets/images/testing/waicolour/snow-results.png" />
</p>

### Sunny Background
<p float="left">
<img src="https://github.com/Sphere42/MSP-2/blob/master/assets/images/testing/waicolour/clear-results.png" />
</p>

### Cloud Background
<p float="left">
<img src="https://github.com/Sphere42/MSP-2/blob/master/assets/images/testing/waicolour/clouds-results.png" />
</p>

### Haze Background
<p float="left">
<img src="https://github.com/Sphere42/MSP-2/blob/master/assets/images/testing/waicolour/haze-results.png" />
</p>

### Fog Background
<p float="left">
<img src="https://github.com/Sphere42/MSP-2/blob/master/assets/images/testing/waicolour/fog-results.png" />
</p>

### Default Background
<p float="left">
<img src="https://github.com/Sphere42/MSP-2/blob/master/assets/images/testing/waicolour/default-results.png" />
</p>

## Production Shakedown Pre Submission

Note to Assessor: Due to GitPods behaviour surrounding links, (and unexpected CORBS errors) there are numerous commit messages directly after the deployment that are very similar. This is due to the need to push all changes to production to verify if the implemented fixes were successful.

Once the web application had been deployed the HTML code was passed through the official W3C validator for the HTML portions:

![w3cvalidator](https://github.com/Sphere42/MSP-2/blob/master/assets/images/readme/prodhtml.PNG)

Once the web application had been deployed the CSS code was passed through the official Jigsaw validator for the CSS portions:

![jigsawvalidator](https://github.com/Sphere42/MSP-2/blob/master/assets/images/readme/prodcss.PNG)

Once the web application had been deployed the JavaScript code was passed through the official Jshint validator for the JavaScript portions:

![jshintvalidator](https://github.com/Sphere42/MSP-2/blob/master/assets/images/readme/prodjshint.PNG)

All elements have been visually inspected to ensure all information has been correctly populated and loaded.

All visual elements have been validated by the WAI approved Luminosity Colour Contrast Ratio Analysis checker. These results are located within the testing document.

Once the web application has been deployed the site loading/performance will be tested to ensure there are no undue delays for the User

### Unfixed bugs

- Currently when a city is entered without a country code, the API automatically defaults to the American location
        Workaround in place requesting the User enter City and Country code. There will be a future improvement developed to improve this process
- The searchbar retains the entered text until the user clicks on the bar to conduct another search
        Furture feature will clear the searchbar on submit
- When using the application on a mobile, upon displaying the search result, the application doesn't always automatically "bounce" to the top of the screen. This doesn't occur on emulators, or on a Samsung Galaxy Note 20 Ultra 
        Future improvement will be implemented to ensure the page displays from the top after searching