# Testing 

The following sections are the results of the testing throughout the SDLC for MSP-2. This information has been included in a separate document in order to keep the README document uncluttered.

## Initial Unit Testing:
The following evidence captures were collected when testing was conducted throughout development of this project.

### Round One - Testing on MVP
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
                Ability to search for a city (user enter to submit) partially successful.
                Ability to search for a city (user left mouse click to submit) partially successful.
                Currently any City name entered will default to the American location. 
                        Need to implement a way to locate nearest match to user browser location? Or based on history?

        Functionality to be developed
                - field validation re city entry 
                        - based on allowed entries from openweathermap? 
                        - error message surrounding initial geo location (maybe plant in the html.)
                - background picture updating based on api response
                - creation of humourous sayings/texts to be updating based on api weather results (temp or description)

<p float="left">
<img src="https://github.com/Sphere42/MSP-2/blob/master/assets/images/testing/js%2013621%20result.PNG" width="500" height="400" />
<img src="https://github.com/Sphere42/MSP-2/blob/master/assets/images/testing/html%2013621%20result.PNG" width="500" height="400" />
<img src="https://github.com/Sphere42/MSP-2/blob/master/assets/images/testing/css%2013621%20result.PNG" width="500" height="400" />
</p>


### Round Two - Testing on MVP
19/06/2021
        Functionality available:
                Basic HTML and CSS settings, 
                Javascript enabled for initial geo location of weather, 
                Basic search (using either enter or left click to submit)
                Background updates based on weather main content
        Test Results:
                Initial location (using long/lat from browser) is operational if user allows - message on page if geolocation request declined
                Ability to search for a city (user enter to submit) 
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
<img src="https://github.com/Sphere42/MSP-2/blob/master/assets/images/testing/" width="500" height="400" />
<img src="https://github.com/Sphere42/MSP-2/blob/master/assets/images/testing/" width="500" height="400" />
<img src="https://github.com/Sphere42/MSP-2/blob/master/assets/images/testing/" width="500" height="400" />
</p>

### Round Three - Testing on MVP
22/06/2021
        Functionality available:
                Basic HTML and CSS settings, 
                Javascript enabled for initial geo location of weather, 
                Basic search (using either enter or left click to submit)
                Validation on the API response, limited to submet text confirmation alert
                Background updates based on weather main content
                Submit field clears on focus
        Test Results:
                Initial location (using long/lat from browser) is operational if user allows - message on page if geolocation request declined
                Ability to search for a city (user enter to submit) 
                Ability to search for a city (user left mouse click to sumbit) 
                Invalid submittion returns an error, this error is based on the API response and not field validation
                Still exists -  any City name entered will default to the American location. 
                        - work around is to request the user enter country code alone with city name

        Functionality to be developed
                - creation of humourous sayings/texts to be updating based on api weather results (temp or description)
                - validation on the search field itself (current error based on api results)

<p float="left">
<img src="https://github.com/Sphere42/MSP-2/blob/master/assets/images/testing/" width="500" height="400" />
<img src="https://github.com/Sphere42/MSP-2/blob/master/assets/images/testing/" width="500" height="400" />
<img src="https://github.com/Sphere42/MSP-2/blob/master/assets/images/testing/" width="500" height="400" />
</p>

### Round Four - Final Functional/regression Testing before UAT
23/06/2021
        Functionality available:
                Basic HTML and CSS settings, 
                Javascript enabled for initial geo location of weather, 
                Basic search (using either enter or left click to submit)
                Validation on the API response, limited to submet text confirmation alert
                Background updates based on weather main content
                Submit field clears on focus
                Humourous quote populates based on the weather description
                
        Test Results:
                Initial location (using long/lat from browser) is operational if user allows - message on page if geolocation request declined
                Ability to search for a city (user enter to submit) 
                Ability to search for a city (user left mouse click to sumbit) 
                Invalid submittion returns an error, this error is based on the API response and not field validation
                Still exists -  any City name entered will default to the American location. 
                        - work around is to request the user enter country code alone with city name

        Functionality to be developed
                - validation on the search field itself (current error based on api results)
                        Note, as API validation has been implemented, this item has reduced priority and will be developed in the future

<p float="left">
<img src="https://github.com/Sphere42/MSP-2/blob/master/assets/images/testing/" width="500" height="400" />
<img src="https://github.com/Sphere42/MSP-2/blob/master/assets/images/testing/" width="500" height="400" />
<img src="https://github.com/Sphere42/MSP-2/blob/master/assets/images/testing/" width="500" height="400" />
</p>

## Compatability testing:

The following Gifs are evidence collected from the compatability testing of the MSP-2 project

__iphone6/7/8 plus:__
Device width: 414px

<p float="left">
<img src="" width="150" height="300" />
</p>

__samsung galaxy s5:__
Device width 360px

<p float="left">
<img src="" width="150" height="300" />
</p>

__Moto G4:__

Device width 360px

<p float="left">
<img src="" width="150" height="300" />
</p>

__Pixel 2:__

Device width 411px

<p float="left">
<img src="" width="150" height="300" />
</p>

__iPad:__

Device width 1024px

<p float="left">
<img src="" width="300" height="400" />
</p>

__Surface Duo:__

Device width 540px

<p float="left">
<img src="" width="250" height="400" />
</p>

__Desktop Chrome:__

<p float="left">
<img src="" width="600" height="400" />
</p>

__Desktop Firefox:__

<p float="left">
<img src="" width="600" height="400" />
</p>

__Desktop Edge:__

<p float="left">
<img src="" width="600" height="400" />
</p>

## User Acceptance Testing:

Due to the size and timelines of this project, there will not be a structured Alpha/Beta stage of UAT. Instead, a selection of volunteers will conduct a time boxed exploratory session. After which feedback will be collated and transformed into bugs, improvements or new features.


The following is the feedback provided from the end users from their exploratory test session:


## Performance Testing:
The following evidence are the results from the performance speed tests conducted on the deployed site:


## WAI Luminosity Colour Contrast Ratio Assessment

The following are the results of the Luminosity Colour Contract Ratio Analysis. This analysis determines the readability of the site based of background to foreground ratios as specified by the WAI. (https://www.w3.org/WAI/tips/designing/)

### Thunderstorm Background
<p float="left">
<img src="" width="600" height="400" />
<img src="" width="600" height="400" />
</p>

### Rain Background
<p float="left">
<img src="" width="600" height="400" />
<img src="" width="600" height="400" />
</p>

### Drizzle Background
<p float="left">
<img src="" width="600" height="400" />
<img src="" width="600" height="400" />
</p>

### Snow Background
<p float="left">
<img src="" width="600" height="400" />
<img src="" width="600" height="400" />
</p>

### Sunny Background
<p float="left">
<img src="" width="600" height="400" />
<img src="" width="600" height="400" />
</p>

### Cloud Background
<p float="left">
<img src="" width="600" height="400" />
<img src="" width="600" height="400" />
</p>

### Haze Background
<p float="left">
<img src="" width="600" height="400" />
<img src="" width="600" height="400" />
</p>

### Fog Background
<p float="left">
<img src="" width="600" height="400" />
<img src="" width="600" height="400" />
</p>

### Default Background
<p float="left">
<img src="" width="600" height="400" />
<img src="" width="600" height="400" />
</p>