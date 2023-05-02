# Intro to ITWS - Lab 3: Build a Website

## Create a personal Intro to ITWS website and deploy it to your personal web servers

### Setup:
#### Clone the GitHub Classroom repository for this class into a **separate** area of your computer. *Outside* of your iit repository. For example;
   * Let's say that your ClassFolder == `Desktop/Classes/Spring23/ITWS1100` and that your class GitHub repo (iit folder) is in `ClassFolder/iit`
      * Let's create a folder in ClassFolder named `GitHubLabs`,
      * Now, when you open the repo in GitHub Desktop, and are asked to clone it, place it into your `ClassFolder/GitHubLabs/itws1100-lab03-yourGitHubID`
* Copy your `index.html` file from your `iit` repo into the root of your `itws1100-lab03-yourGitHubID` folder.

* When completed, The web site will be placed in the "iit" subdirectory of your Azure instance.
  * Locally;
    * Copy the necessary files from your `itws1100-lab03-yourGitHubID` repo into your `iit` repo. 
    * **DO NOT** copy the `.git` folder.
    * Do not copy the template html file.
    * Make sure to follow the IA plan that you designed in last class.
  * Switch to yout iit repo in GitHub Desktop
  * Commit and push your changes to your iit repo
  * Start and Telnet over to your instance using SSH
  * Navigate to the root of your class website (/var/www/html/iit)
  * Pull your changes down to your instance
  * Refer to the tutorials from Lab 1 for reminders on the workflow for this.
#### Guidelines:
  * You must have at least four pages: home, projects, and your lab01 and lab02 pages. Name these files:
    * index.html (this will be your landing page, or home page - it already exists in your `iit` repo)
    * projects.html (this will be the main page to introduce your labs and should reside somewhere other than the root of your iit folder - think about your site map from last class)
    * whatever you like for the individual lab pages (e.g. labs/lab01/index.html)
  * You must have a consistent header, menu, content area, and footer across all pages of your website.
  * The only files in your class root (iit) folder are to be the index.html, README.md and .htaccess (ie do not palce any new files into the `iit/` folder)
  * All resources (e.g. CSS files) should be kept in a separate area(s) as per your design.
  * Populate your projects page with links to the labs, beginning with your lab01 and lab02; continue to do this as we move forward this semester.
  * You will also need a place to hold your lab03 specific documents, containing (at least) your README.md, and your IA document.
  * As covered in class, your code must be valid and properly indented. (And don't forget to set the `<title>` tag on each page.)
  * You should plan on having a landing page for each lab for this class, including links to the instructions and  your solution.  You may choose to put the instructions on your labX landing page, which is fine, but then you will still need to link to the solution.

* NOTE: You already have an index.html page ('Hello World') from Lab 1. You will edit this file to make it more suited to your personal 'brand'
* We will work through some of this in class.
* You will graded using the following as a guideline. Creativity will be rewarded.
  * Validity : 20
  * Indentation : 10
  * Completeness : 50
  * Quality/creativity : 20
* I have included an HTML template to help you get started: [HTML5 template](iit-html5-template.html)
* Feel free to experiment and be creative - and **use the web as a reference!!** (e.g. [W3Schools](http://www.w3schools.com))
* **This lab is due by the date on the LMS assignment panel** It must be posted to your Azure instance/Personal website located at [FQDN/iit/index.html](#).

Update your README.md file in your root directory and with comments regarding your site. In the file, include the correct URL for your site. (remove any password entries from Lab 1)

You should also have a lab03 folder which will contain (at least)

* The site-maps/mockups that you created in the IA class 
* a new README.md file for this lab containing (at a minimum), your reasoning for the choices you made in your IA

By the time you complete this lab, you should have a copy of your iit folder;

* on your local machine for editing
* in your GitHub repositories
* on your Azure instance

Create a zip file of your iit directory, name it - _**yourRCSid**\-ITWS1100-Lab3.zip_ and submit it to the _Assignments_ area of LMS. (it will contain your entire repository, with your HTML, CSS, README, and any other files/resources relevant to your site)