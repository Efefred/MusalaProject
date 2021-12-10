# MusalaProject
# My Insights

> **Question 01:** **Which tools you picked for the job and why** 
>
> **Answer 01:** I used **Cypress.io** as the test automation tool and **Visual Studio Code (VS Code)** as the IDE. Cypress is easy to install, user-friendly, blazing fast with real-time execution of commands ith clear visual feedback. Cypress does not require the user to add implicit or explicit wait commands unlike Selenium. VS Code is light-weight IDE with support for over one hundred programming languages. Live coding assistance, quick debugging, auto-identation, bracket-matching, box-selection and Team Collaboration are feature that make VS Code standout.

> **Question 02:** **How would you present the output of the automated tests?** 
>
> **Answer 02:** The output of the tests will be presented using the Mochawesome Reporter. The reprts can be seen in the mochawesome-report folder

> **Question 03:** **Which user actions and/or page elements you have decided to test and why?** 
>
> **Answer 03:** .click() method was used to simulate user action of clicking the 'VIEW HOT ROLES' and the "Apply Button". While .type() was used to simulate the user typing text into the text fields of the Apply form. The CAPTCHA was not automated because it will require collaboration with the developer(s) to configure the website in certain ways in order to disable/bypass the CAPTCHA for testing purposes. 

> **Question 04:** **How do you run the test cases?** 
>
> **Answer 04:** I launch the Cypress runner by using the command **npx cypress open**. Then I use **CTRL + S** to save the project which also triggers the execution of the test cases.
