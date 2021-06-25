# Weather Web Application

The purpose of Milestone Project 2 is to create a simple weather web application

# Project Summary

The Project will enable a user to:
- See the weather for their current location, by default, on opening
- Manually enter a location to search for weather results

## Benefits and Rational

Such an application will:
-	Enable the user to view Local weather (geolocation)
- Enable the User to search for a city and:
    - view the chosen citys local weather
    - view the chosen citys local date
- Have a new background on the basis of the weather results
- Display a quirky comment or joke that changes inline with the weather results

## User Stories

Below is a high-level list of User Stories for the purposes of development, testing and delivery.

Business Case User stories:

-	As a User I want to be able to quickly view the weather for my local area
- As a User I want to be able to change the location of the weather information being provided
- As a User I want a change to the web application appearance based on various weather descriptions 
- As a User I want to be notified if an incorrect location has been entered
- As a User I want to be able to use this web application on both my desktop/computer and mobile device
-	As a Visually Impaired User I want to know that all non-text elements have planned alt text equivalents

Functional Developer stories:
-	As a Developer I want to ensure the web application HTML code passes through the official W3C validator without faults
-	As a Developer I want to ensure the web application CSS code passes through the official (Jigsaw) validator without faults
-	As a Developer I want to ensure the web application JavaScript code passes successfully through a linter (eg Jshint)
-	As a Developer I want to ensure that the web application is responsive accross multiple devices
-	As a Developer I want to ensure the web application is quick to load and responsive to User interaction
-	As a Developer I want to ensure that images are displayed without pixelization irrespective of screen size
-	As a Developer I want to ensure there are screen captures of the finished project within the README document
-	As a Developer I want to ensure the web application meets accessibility guidelines
-	As a Developer I want to ensure the web application follows the principles of UX design and presents a structured layout and navigation model
-	As a Developer I want to ensure all unnecessary comments and code bits are removed before deployment
-	As a Developer I want to be able to easily deploy this site to the cloud
*Interpreted from the Assignment document*


# Functional Requirements Scope

## Design Consistancies
The following is a list of design aspects that must be maintained throughout the web application. 

The web application must be clear and concise. It should display, at a minimun:
- The location
- The local date
- The current weather (text format)
- The high/low temperature for the day
- A background that reflects the weather results without detracting from the text
- Ability to search for a particular location, easily
- A quirky comment or quote that changes with the weather response

![initialwireframe](https://github.com/Sphere42/MSP-2/blob/master/assets/images/readme/weather_wireframe.png)


# Final/Existing Feature Outcomes
The final web application will appears as follows:

![multidevicesiteview](https://github.com/Sphere42/MSP-2/blob/master/assets/images/readme/multidevice.PNG)

 __Various Weather Pages__


![weatherpagethunderstom](https://github.com/Sphere42/MSP-2/blob/master/assets/images/readme/thunderstorm.PNG)
![weatherpagerain](https://github.com/Sphere42/MSP-2/blob/master/assets/images/readme/rain.PNG)
![weatherpagedrizzle](https://github.com/Sphere42/MSP-2/blob/master/assets/images/readme/drizzle.PNG)
![weatherpagesnow](https://github.com/Sphere42/MSP-2/blob/master/assets/images/readme/snow.PNG)
![weatherpageclear](https://github.com/Sphere42/MSP-2/blob/master/assets/images/readme/clear.PNG)
![weatherpageclouds](https://github.com/Sphere42/MSP-2/blob/master/assets/images/readme/clouds.PNG)
![weatherpagehaze](https://github.com/Sphere42/MSP-2/blob/master/assets/images/readme/haze.PNG)
![weatherpagefog](https://github.com/Sphere42/MSP-2/blob/master/assets/images/readme/fog.PNG)
![weatherpagedefault](https://github.com/Sphere42/MSP-2/blob/master/assets/images/readme/default.PNG)


# Future Features to be Implemented
- Currently, there is a default browser message requesting permission to know the users location (longitude and latitude). In order for the application to be GDPR compliant, a purposeful consent message will be required. This message will need to specify what data is being requested, what this data will be used for, and if this data will be stored anywhere
- Currently, after searching for a location, the search bar will only clear when the user re-clicks on the field. 
    - Future improvement will be to clear this field once the requested data has populated into the relevant html fields
- Currently, the only error message on the site is generated on the basis of the API response 
    - Future improvement is to develop field validation on the search bar
    - Future improvement is to increase the range of error messages available 


# Testing 

Full details and evidence of testing conducted throughout the software development life cycle of this project will be maintained in a seperate document called testing.md

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

# Deployment Process

## Direct Deployment
The site was deployed to GitHub pages. 

The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab

![stepone](https://github.com/Sphere42/MSP-2/blob/master/assets/images/readme/deploy1.PNG)

  - Scroll down to the GitHub Pages tab on the left side and select it

![steptwp](https://github.com/Sphere42/MSP-2/blob/master/assets/images/readme/deploy2.PNG)

  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, click the Save button

![stepthree](https://github.com/Sphere42/MSP-2/blob/master/assets/images/readme/deploy3.PNG)

  - The page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 
    Note: It takes time to build the site, please wait 5-10 mins before clicking on the link to access the deployed site.

![finallink](https://github.com/Sphere42/MSP-2/blob/master/assets/images/readme/deploy4.PNG)

The deployment link for this web apllication is https://sphere42.github.io/MSP-2/

## Copying the Repository

To obtain a copy of the code for this project, complete the following steps:

- Go to the code page of the project
  ![copy1](https://github.com/Sphere42/MSP-2/blob/master/assets/images/readme/copy1.PNG)

- Select the "code" buttom in the top right hand corner
  ![copy2](https://github.com/Sphere42/MSP-2/blob/master/assets/images/readme/copy2.PNG)

- From here the project code can either be
       Downloaded as a ZIP file
       Open with GitHub Desktop (if you have downloaded the app)
       Open with Visual Studio (if you have a copy of the program)

# Credits 
This project could not have been created without the following:

## Code Guidance
- Tyler Potts https://www.youtube.com/watch?v=n4dtwWgRueI

## API
- Open Weather Map site and APIs
      https://home.openweathermap.org/
      This API has a restriction of 60 requests per minute and 1,000,000 requests per month

## Media

Backgrounds
- https://www.svgbackgrounds.com/#dragon-scales

Weather puns
- https://free-funny-jokes.com/weather-puns/

## Development/Testing Validators
GitPod IDE
- https://gitpod.io

To validate the colour contrast (WAI approved)
- https://juicystudio.com/services/luminositycontrastratio.php

Javascripts checker.
- https://jshint.com/

Javascript formatter
- https://codebeautify.org/jsviewer

HTML validator
- https://validator.w3.org/

CSS
- https://jigsaw.w3.org/css-validator/

Favicon generator
- https://favicon.io/ 

Speed testing
- https://gtmetrix.com

Reduce picture size without effecting quality
- https://tinypng.com

GIFs for test evidence were created using ScreentoGif
- https://www.screentogif.com/

## Additional Thanks

Independant Reviewers: Tom Walsh, Daragh Curtis, 

Code Institute (https://codeinstitute.net/)

Mentor: Felipe Souza Alarco