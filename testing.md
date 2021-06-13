# Testing 

The following sections are the results of the testing throughout the SDLC for MSP-2. This information has been included in a separate document in order to keep the README document uncluttered.

## Unit Testing:
The following evidence captures were collected when testing was conducted throughout development of this project.

### Round One - Testing on MVP
13/06/2021 @ 18:08
        Typos in the JS when processed via the JShint validator
                compatability issue which required "/*jshint esversion: 6 */" to be added to the start of the JS file
        No errors located in the CSS Jigsaw,
        One warning message in the HTML validator. It isdicates the Section element should contain a h element of some type.

## Functionality Testing:
The following evidence captures were collected when testing was conducted via the GUI throughout development.

### Round One - Testing on MVP
13/06/2021 @ 18:08
        Functionality available:
                Basic HTML and CSS settings, Javascript enabled for initial geo location of weather, along with basic search (using either enter or left click to submit)
        Test Results:
                Initial location (using long/lat from browser) is operational if user allows
                Ability to search for a city (user enter to sumbit) partially successful.
                Ability to search for a city (user left mouse click to sumbit) partially successful.
                Currently any City name entered will default to the American location. 
                        Need to implement a way to locate nearest match to user browser location? Or based on history?

        Functionality to be developed
                - field validation re city entry 
                        - based on allowed entries from openweathermap? 
                        - error message surrounding initial geo location (maybe plant in the html.)
                - background picture updating based on api response
                - creation of humourous sayings/texts to be updating based on api weather results (temp or description)

## Compatability testing:

The following Gifs are evidence collected from the compatability testing of the MSP-2 project

__iphone6/7/8 plus:__
Device width: 414px

<p float="left">
<img src="" width="150" height="300" />
<img src="" width="150" height="300" />
<img src="" width="150" height="300" />
<img src="" width="150" height="300" />
<img src="" width="150" height="300" />
<img src="" width="150" height="300" />
</p>

__samsung galaxy s5:__
Device width 360px

<p float="left">
<img src="" width="150" height="300" />
<img src="" width="150" height="300" />
<img src="" width="150" height="300" />
<img src="" width="150" height="300" />
<img src="" width="150" height="300" />
<img src="" width="150" height="300" />
</p>

__Moto G4:__

Device width 360px

<p float="left">
<img src="" width="150" height="300" />
<img src="" width="150" height="300" />
<img src="" width="150" height="300" />
<img src="" width="150" height="300" />
<img src="" width="150" height="300" />
<img src="" width="150" height="300" />
</p>

__Pixel 2:__

Device width 411px

<p float="left">
<img src="" width="150" height="300" />
<img src="" width="150" height="300" />
<img src="" width="150" height="300" />
<img src="" width="150" height="300" />
<img src="" width="150" height="300" />
<img src="" width="150" height="300" />
</p>

__iPad Pro:__

Device width 1024px

<p float="left">
<img src="" width="300" height="400" />
<img src="" width="300" height="400" />
<img src="" width="300" height="400" />
<img src="" width="300" height="400" />
<img src="" width="300" height="400" />
<img src="" width="300" height="400" />
</p>

__Surface Duo:__

Device width 540px

<p float="left">
<img src="" width="250" height="400" />
<img src="" width="250" height="400" />
<img src="" width="250" height="400" />
<img src="" width="250" height="400" />
<img src="" width="250" height="400" />
<img src="" width="250" height="400" />
</p>

__Desktop Chrome:__

<p float="left">
<img src="" width="600" height="400" />
<img src="" width="600" height="400" />
<img src="" width="600" height="400" />
<img src="" width="600" height="400" />
<img src="" width="600" height="400" />
<img src="" width="600" height="400" />
</p>

__Desktop Firefox:__

<p float="left">
<img src="" width="600" height="400" />
<img src="" width="600" height="400" />
<img src="" width="600" height="400" />
<img src="" width="600" height="400" />
<img src="" width="600" height="400" />
<img src="" width="600" height="400" />
</p>

__Desktop Edge:__

<p float="left">
<img src="" width="600" height="400" />
<img src="" width="600" height="400" />
<img src="" width="600" height="400" />
<img src="" width="600" height="400" />
<img src="" width="600" height="400" />
<img src="" width="600" height="400" />
</p>

## User Acceptance Testing:
The following structured test cases were provided to End Users.
- 
- 


The follwoing are the results from the structured User Testing:



The following is the feedback provided from the end users from their exploratory test session:



Summarisation and decisions to improve:


## Performance Testing:
The following evidence are the results from the performance speed tests conducted on the deployed site:

