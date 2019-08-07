# tweedCollection
A collection of tweed suits that can be dynamically added, updated, and deleted. Tweed-ly is deployed at https://tweedcollection.herokuapp.com/

Tweed-ly is created by Aaron Neme for the sole use and purpose of fulfilling project requirements in Unit 2 of General Assembly. 

Tweed-ly, is an application that features Men's Custom Tweed Suits in a vast collection. The target market is men who want to add and edit their personal collection. The collection is meant for idea purposes currently. Future expansion of the application will allow users to view the actual item listing on a featured website so they can shop and customize according to the specifications they laid out in Tweed-ly.

Tweed-ly features a login authentication, multiple viewpages, the ability  to add to a collection of suits and the ability to create their own suit and edit it how they wish.

Tweed-ly was built using HTML5, CSS3, NodeJS (Mongoose, Express, bcrypt, etc.), jQuery, Javascript, and EJS. This application is a CRUD application and features all 7 REST Routes.

USER STORIES
------------
This application upon entering the landing page will allow you to sign up or login and also prominently feature the different aspects of the application and what you can do in a helpful video and content containers below in the page.

The user upon registering a new username and password can login with that username and password and see the options to log out OR to click a button that will take them to the TWeed-ly collection.

The collection index page is where users will end up upon clicking that Tweed-ly button. This page features each and every suit created thus far including a helpful rating system (still under development), pictures of each tweed suit (unless there is no picture) and the kind of fabric it is. 

The user can click any image which will take them to a more comprehensive breakdown of the specifications of the tweed suit. There is a vast array of specifications which will play into creating and editing a tweed suit. These options provide a range of customization options from pockets to pleats and vents to linings. 

The user can, during the creating and editing process, see a color wheel that is currently under development and unusable but can be hovered over for a little effect.

Tweed-ly seeks to expand on creating a great user experience for making a tweed suit collection. 

CHALLENGES
----------
The biggest challenges of this application presents itself in styling and functionality. There are plenty of features I would have loved to incorporate into this application that I did not have time to complete.

Google maps was challenging to incorporate and could never get incorporated due to an error preventing the map from loading.

The rating system can only affect 1 tweed suit with filling in the stars. Also, the stars cannot be removed from clicking them again, which is another challenge to overcome in the future. The third aspect of this is that you cannot place stars on any other tweed suits.

An additional challenge presented in adding more customization options which ended up breaking my application a couple times. Was able to correct these errors. Anmot

The final challenge presented in the color wheel and determining how to grab values based on what you clicked in the color wheel. It would have likely required alot more Javascript to determine the click event and specific value the user clicked. Thus, I avoided that challenge until my application was functional.
