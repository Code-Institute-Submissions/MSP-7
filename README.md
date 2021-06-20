# Wether Application

The purpose of Milestone Project 2 is to create a simple weather application

# Project Summary

The Project will enable a user to:
- See the weather for their current location by default on opening
- Manually enter a city to search for weather results



## Benefits and Rational

Such an application will:
-	Enable the user to view Local weather
- Enable the User to search for a city and;
    - view the chosen citys local weather
    - view the chosen citys local time
- Have a new background on the basis of the weather results


## User Stories

Below is a high-level list of User Stories for the purposes of development, testing and delivery.

Business Case User stories:

-	As a User I want to easily determine where content has been obtained from (if from, or maintained on, external sources)
-	As a Visually impaired user I want to know that all non-text elements have planned alt text equivalents
-	As a User I want to be able to quickly view the weather for my local area
- As a User I want to be able to change the location of the weather information being provided 
- As a User I want to be notified if an incorrect city has been entered

Functional Developer stories:
-	As a Developer I want all external links to open in a new browser tab
-	As a Developer I want to ensure the website HTML code passes through the official W3C validator without faults
-	As a Developer I want to ensure the website CSS code passes through the official (Jigsaw) validator without faults
-	As a Developer I want to ensure the website JavaScript code passes successfully through a linter (eg Jshint)
-	As a Developer I want to ensure that the website is responsive accross multiple devices
-	As a Developer I want to ensure the website is quick to load and responsive to User interaction.
-	As a Developer I want to ensure that images are displayed without pixelization irrespective of screen size
-	As a Developer I want to ensure there are screen captures of the finished project within the README document
-	As a Developer I want to ensure the website meets accessibility guidelines
-	As a Developer I want to ensure the website follows the principles of UX design and presents a structured layout and navigation model
-	As a Developer I want to ensure all unnecessary comments and code bits are removed before deployment
-	As a Developer I want to be able to easily deploy this site to the cloud
*Interpreted from the Assignment document*

# Functional Requirements Scope

## Design Consistancies
The following are a list of design aspects that must be maintained throughout the site. 

The application must be clear and concise. It should display, at a minimun:
- The location
- The local time
- The days weather (text format)
- The high/low temperature for the day
- A background that reflects the weather results without detracting from the text
- Ability to search for a particular city, easily

![initialwireframe](https://github.com/Sphere42/MSP-2/blob/master/assets/images/readme/weather_wireframe.png)

# Final/Existing Feature Outcomes
The final site will appears as follows:

![multidevicesiteview]()



- __Weather Page__

  - 
  - 
  - 


![weatherpage]()



# Future Features to be Implemented
- Currently there is a default browser message requesting permission to know the users location. In order for the application to be GDPR compliant, A concent message will be needed inorder to obtain the initial geo location details to enable autoload of the users local weather. 


# Testing 

The subsections detail the proposed approach for testing of the final product. Due to the size and nature of this project, full details and evidence of testing will be maintained in a seperate document.

## Unit Testing
 
A formal round of unit testing will not be conducted for this project. Instead, there will be a form of self-peer review whereby code writing will occur on day one and code review and refactoring will occur on the following day.
This will reduce the effect of reading what should be there instead of what is actually there.

## Functionality/User Testing
 
A once a stable working prototype each page is available the code will be validated via the W3C html validator, the CSS jigsaw and the JavaScript JShint.

At regular intervals this validation will occur.

## User Acceptance Testing
 
User acceptance testing will be conducted on an ongoing basis. Prior to each git push, an exploratory testing session will occur via the GUI interface.

Time will be spent testing the website in desktop browsers (Chrome, firefox, edge), tablet sizes, mobile size.

Once a working prototype is available, a third-party individual(s) will review the website as an independent user with no prior knowledge of its purpose (or project criteria). This session will consist of a structured test suite based on the described User Stories and a time-box exploratory test session.
Feedback from this session will be used to further develop and/or amend the site.

## Production Shakedown

Once the site has been deployed the HTML code will be passed throught the official W3C validator for the HTML portions:

![w3cvalidator]()

Once the site has been deployed the CSS code will be passed throught the official Jigsaw validator for the CSS portions:

![jigsawvalidator]()

Once the site has been deployed the JavaScript code will be passed throught the official Jshint validator for the JavaScript portions:

![jshintvalidator]()

All elements will be visually inspected to ensure all information has been correctly populated and loaded.

All visual elements have been validated by the WAI approved Luminosity Colour Contrast Ratio Analysis checker. These results are located within the testing document.
(https://juicystudio.com/services/luminositycontrastratio.php#specify)

Once the site has been deployed the sites loading/performance will be tested to ensure there are no undue delays for the User


### Unfixed bugs

- currently no check error if the API is not working
- Currently no validation on the search bar for entry
- currently cities entered automatically default to their American version
- Currently media query settings in the CSS document do not seem to apply to the JS implamented image.
- Website requires a favicon



# Deployment Process

## Direct Deployment
The site was deployed to GitHub pages. 
The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab

![stepone]()

  - Scroll down to the GitHub Pages section, The latest GitHub version now maintains the GitHub Pages in a new page, click the "Check it out here!" page to be redirected. 

![steptwp]()

  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, click the Save button

![stepthree]()

  - The page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 
    Note: It takes time to build the site, please wait 5-10 mins before clicking on the link to access the deployed site.

![finallink]()

The repository link can be found here - https://github.com/Sphere42/MSP-2



## Copying the Repository
To copy the code to your own repository, complete the following steps:
- 


# Credits 
This project could not have been created without the following:

## Code 
- Tyler Potts https://www.youtube.com/watch?v=n4dtwWgRueI

## API
- Open Weather Map site and APIs
      https://home.openweathermap.org/


## Media

The anow/sun/rain backgrounds.
    - https://cdn.hipwallpaper.com/i/62/98/HolfGB.jpg

thunderstorm
    - https://www.freepik.com/free-vector/background-with-rain-dark-sky_2095873.htm

mist
    - https://www.freepik.com/free-vector/evening-fog-tops-trees-pine-forest_6804326.htm#page=1&query=fog%20trees&position=5

cloud
    - https://unsplash.com/photos/fC_RaKIC9ao



## Additional Thanks

Independant Reviewers: Tom Walsh, Daragh Curtis, 

Code Institute (https://codeinstitute.net/)

Mentor: Felipe Souza Alarco