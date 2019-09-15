# Sprint Challenge: React - Star Wars

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored ReactJS, Function Components, component state and side effects. In your challenge for this Sprint, you will demonstrate proficiency by creating an application that uses ReactJS to consume live data retrieved from the World Wide Web and style that data nicely on the page.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency with ReactJS Fundamentals and your command of the concepts and techniques in the Functional Components.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your Team Lead.

## Description

In this challenge, create a web page that presents a styled list of Star Wars characters. Being able to render out data to a web page is a large part of what JavaScript developers do, this challenge assesses your ability to achieve such a task.

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [ ] What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a library that seeks to provide an answer to the problem DONT REPEAT YOURSELF. This is solved by introducing the concept of component creation. The components made and styled once can be reused by you at any point elsewhere in the project and if compartmentalized correctly can also be imported to other projects. In class we saw just this as reactstrap allowed us to import pre-built/pre-styled components into our projects.

- [ ] What does it mean to _think_ in react?

I believe this refers to thinking in small chunks and big picture. Big picture is to think "how can I reuse my work here later on" and small picture is to think "how can I compartmentalize this down to make debugging easier as well as more customizable." React is a giant puzzle where the pieces you make will ultimately fit together to make the larger picture.

- [ ] Describe state.

State is the only place that memory can be stored. In JS you can do this in a simple variable. However, with react the code gets re-run and re-rendered over and over which cleans the slate every time. State is a variable value that can be updated by use of setState(). Without state we could not make a website dynamic or implement JS logic statements to control the behavior of components on a webpage. 

- [ ] Describe props.
Props can be thought of as the value that was passed down to the child component in an inheritance model. The parent gets a variable, the child gets access through the family tree by use of props.variable name, grandchild gets access to the same variable by calling props.variable name and so forth. Without Props there is no way to access the data passed into the parent function. 

- [ ] What are side effects, and how do you sync effects in a React component to state or prop changes?
Side effects are what happen upon the re-render of a page due to a change in some slice of state. This allows the desired effect to take place 1. every time the referenced state changes 2. Only the first time the referenced state changes or 3. only upon the first render of the webpage. The way that the effects are synced to a state is by referencing that state or prop within the dependency array at the end of the effect: ,[ stateIsFoodReady];.


## Project Set Up

Follow these steps to set up and work on your project:

- [X ] Create a forked copy of this project.
- [ X] Add TL as collaborator on Github.
- [ X] Clone your OWN version of Repo. **(Not Lambda's by mistake!)**
- [ X] Create a new Branch locally: `git checkout -b <firstName-lastName>`.
- [ X] Change directories into `./starwars` (`cd starwars`) and run `yarn install` or `npm install` to retrieve all needed dependencies.
- [ ] Once you have installed the _node_modules_, run `yarn start` or `npm start` to get your server up and running.
- [ ] With the server up and running, open Chrome and head over to `localhost:3000` and view your beautiful app. Maybe it's not _that_ pretty... _yet_, your goal is to ensure this project becomes a thing of beauty.
Follow these steps for completing your project.
- [ ] Implement the project on this Branch, **committing progress & changes often.**
- [ ] Push commits: `git push origin <firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request.
- [ ] PM then will count the HW as done by merging the branch back into master.


## Minimum Viable Product

Your finished project must include all of the following requirements:

- [ ] Fetch a list of Star Wars characters from the [Star Wars API (or SWAPI)](https://swapi.co/) and render them to the screen. 
- [ ] Follow the documentation to learn how to fetch a list of "people". However, don't spend _too_ long on this. Here is a link for you to follow if you've looked around the docs for about 15 minutes or so and haven't found where to go - [Secret Link to Awesomeness 🤫](https://swapi.co/documentation#people).
- [ x] Set the data you fetch to state.
- [ x] Map over the list and render a component for each character on the page.
- [ x] You must display at least one element for each star wars character in the data set.
- [ x] The elements must be styled with either Reactstrap or styled-components - don't rely on browser default styles.

#### Required best practices:

- [ ] Consistent naming. Examples: variables, functions, Components, and file/folder organization.
- [ ] Consistent spacing. Examples: line breaks, around arguments and before/after functions.
- [ ] Consistent quotation usage.
- [ ] Spell-check.
- [ ] Schedule time to review, refine and reassess your work.


It is better to submit a challenge that meets [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product) than one that attempts too much and fails.

## Stretch Problems

- [ ] Add at least one test using a testing tool:
  - [react-testing-library](https://github.com/testing-library/react-testing-library#basic-example)
  - [Cypress](https://docs.cypress.io/guides/overview/why-cypress.html)

- [x] Build a pagination system that will allow you to load the next page of data.
  - `console.log()` the data coming back from the server.
  - Notice that there are `next` and `previous` fields that give you a URL.
  - You can build a function that will get characters called `getCharacters` that you can use dynamically to get the next or previous set of characters. You would need to supply it with the proper fields, and you'll need to set up more state to do this.

<!--
- [ ] Build another app from scratch that looks very similar to this one. Inside of your main `App` component fetch some data in this same fashion from this url `https://dog.ceo/dog-api/#all` you'll have to follow the documentation at that website and figure out how to change up the code you've seen here in this Star Wars app in order to properly fetch the data and store it on Component State.
-->
