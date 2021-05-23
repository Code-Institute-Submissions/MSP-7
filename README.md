# Personal Website
The purpose of Milestone Project 2 is to create a simple website full of time filling activities.

The website will be called "Mind Candy".

# Project Summary

The Project will enable a user to:
-	View local weather
-	View top articles from a selection of popular websites (news/tech)
- 	Links to mindfullness/meditation videos (youtube)
-	A couple of mini games (suduko, slot machines)


## Benefits and Rational

Such a website will:
-	Give the user something to do when they only have a few minutes to spare. ie while waiting for/travelling on the bus, or in line at a shop, or even while dinner is cooking.


## User Stories

Below is a high-level list of User Stories for the purposes of development, testing and delivery.

Business Case User stories:

-	As a User I want to easily determine where content has been obtained from (if from, or maintained on, external sources)
-	As a Visually impaired user I want to know that all non-text elements have planned alt text equivalents
-	As a User I want to easily identify which page of the site I am on at any given time
-	As a User I want to be able to quickly view the weather for my local area
- 	As a User I want to be able to change the location of the weather information being provided
-	As a User I want to be able to view the top "7" articles from the most popular local news site
-	As a User I want to be able to select viarious article suppliers (a selection)
- 	As a User I want to be able to access to meditation video/music, both on the site, and redirection to the content origin
-	As a User I want to be able to play the mini game "suduko"
-	As a User I want to be able to play the mini game "slot machine"
- 	As a User, on the landing page, I want a snap shot view of the various four widgets (weather, news, meditation, games) 

Functional Developer stories:
-	As a Developer I want all external links to open in a new browser tab
-	As a Developer I want to ensure the website HTML code passes through the official W3C validator without faults
-	As a Developer I want to ensure the website CSS code passes through the official (Jigsaw) validator without faults
-	As a Developer I want to ensure the website JavaScript code passes successfully through a linter (eg Jshint)
-	As a Developer I want to ensure that the website is responsive accross multiple devices
-	As a Developer I want to ensure the website is quick to load and responsive to User interaction.
-	As a Developer I want to ensure that images are displayed without pixelization irrespective of screen size
-	As a Developer I want to ensure
-	As a Developer I want to ensure there are screen captures of the finished project within the README document
-	As a Developer I want to ensure the website meets accessibility guidelines
-	As a Developer I want to ensure the website follows the principles of UX design and presents a structured layout and navigation model
-	As a Developer I want to ensure all unnecessary comments and code bits are removed before deployment
-	As a Developer I want to be able to easily deploy this site to the cloud
*Interpreted from the Assignment document*



# Functional Requirements Scope

## Design Consistancies
The following are a list of design aspects that must be maintained throughout the site. 

Header will consist of:
- Site Title "Mind Candy" with a customised logo
Table of Contents / Navigation bar.
- Horizontally displayed, directly under the header.
- Each Option will be a different (light colour).
- Each option will appear darker when user is on that page (or hovers mouse over).
- Box Shaped.
- Will condense to a hamburger option on smaller devices
Body of page
- Will be a lighter/simple background to enable easy reading of content.
- Will appear directly under the Table of Contents/Navigation bar
- Will display four "widgets" for each of the available topics (weather, news, meditation, games)
	- On desktops the widgets will appear side by side
	- On tablets the widgets will appear two horizontally and two vertically
	- On mobile the widgets will appear one horizontally and four vertically
Footer
- Will appear at the base and remain static across all pages
- Will contain the following info:
- ©CourtneyMarshall2021


## Home Page

The home page is the first page a user will land on. 

This page will provide the following key features:
-	Header should be different background/colour to the body of the page
-	Main body of the site will contain widgets of the various content available on the site
	-	Weather widget, based on locality
	-	News widget, Based on local top provider (news/tech)
	-	Meditation widget, will show one of the videos available
	-	Games, links to the available mini games

Below is the initial wire frame across desktop/tablet/mobile:

![homepagewireframe]()

## Weather Page

This page will display a detailed view of the weather for a selected area.

Key features:
-	Default weather location will be Dublin
-	Selection of locations available (insert options here)
-	

Below is the initial wire frame across desktop/tablet/mobile:

![weatherwireframe]()

## News Page

This page will have a variety of news articles for the User to read 

Key features:
-	A selection of Mini widgets from 4/5 different sources
-	Each one shows the top "7" articles from each site
-	
- 	
- 	

Below is the initial wire frame across desktop/tablet/mobile:

![newswireframe]()


## Mindfullness Page

This page will contain various videos on mindfullness and meditation

Key features:
-	These videos will have the option of playing directly in the site or redirect to the content origin
-	Will contain some meditation videos and som specifically on mindfullness
-	
-	

Below is the initial wire frame across desktop/tablet/mobile:

![minfullnesswireframe]()


## Games Page

This page will enable the User to play a couple of mini games

Key features:
-	Mini games should include
		- Suduko
		- Slots
-	Game imagery will have a tech theme

Below is the initial wire frame across desktop/tablet/mobile:

![gameswireframe]()


# Final/Existing Feature Outcomes
The final site will appears as follows:

![multidevicesiteview]()


- __Header Panel__

  - Featured on all five pages.
  


![header]()


- __Navigation Bar__

  - Featured on all five pages, the full responsive navigation bar includes links to the Home, Weather, News, Mindfullness, Games pages. It will appear identical on each page. The active page for the User will have an <insert indicator here> to indicate the Users current location within the site.
  - This section will allow the user to easily navigate from page to page across all devices without having to revert back to the previous page via the ‘back’ button. 



![navbar]()

- __Footer__

  - Featured on all five pages.




![footer]()

- __Weather Page__

  - 
  - 
  - 


![weatherpage]()

- __News Page__

  - 
  - 
  - 
  - 

![newspage]()

- __Mindfullness Page__

  - 
  - 
  - 
  - 
  - 

![mindfullnesspage]()


- __Games Page__

  - 
  - 
  - 
  - 
  - 

![gamespage]()



# Features to be Implemented
- Further mini games will be included on the games page as they are developed


# Testing 

The subsections detail the proposed approach for testing of the final product. Due to the size and nature of this project, full details and evidence of testing will be maintained in a seperate document.

## Unit Testing
 
A formal round of unit testing will not be conducted for this project. Instead, there will be a form of self-peer review whereby code writing will occur on day one and code review and refactoring will occur on the following day.
This will reduce the effect of reading what should be there instead of what is actually there.

## Functionality/User Testing
 
A once a stable working prototype each page is available the code will be validated via the W3C html validator, the CSS jigsaw and the JavaScript Jshint.

At regular intervals this validation will occur.

## User Acceptance Testing
 
User acceptance testing will be conducted on an ongoing basis. Prior to each git push, an exploratory testing session will occur via the GUI interface.

Time will be spent testing the website in desktop browsers (Chrome, firefox, edge), tablet sizes, mobile size.

Once a working prototype is available, a third-party individual will review the website as an independent user with no prior knowledge of its purpose (or project criteria). This session will consist of a structured test suite based on the described User Stories and a time-box exploratory test session.
Feedback from this session will be used to further develop and/or amend the site.

## Production Shakedown

Once the site has been deployed the HTML code will be passed throught the official W3C validator for the HTML portions:

![w3cvalidator]()

Once the site has been deployed the CSS code will be passed throught the official Jigsaw validator for the CSS portions:

![jigsawvalidator]()

Once the site has been deployed the JavaScript code will be passed throught the official Jshint validator for the JavaScript portions:

![jshintvalidator]()

All links will be manually accessed to ensure that the correct page opens in a new tab.

All pages will be visually inspected to ensure all logos have loaded

Once the site has been deployed the sites loading/performance will be tested to ensure there are no undue delays for the User


### Unfixed bugs

- details of any unfixed bugs here



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



## Media




## Additional Thanks

Independant Reviewers: Tom Walsh, Daragh Curtis, 

Code Institute (https://codeinstitute.net/)

Mentor: Felipe Souza Alarco
 


