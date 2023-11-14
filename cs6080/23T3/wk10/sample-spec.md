# 1. The Exam

## 1.1 Overview

You are to build a small single page application (with either ReactJS or Vanilla JS) that has three basic interactive games, along with a dashboard acting as a homepage.

## 1.2 Features

### 1.2.0 Dashboard

- The overall document/page should have a margin of 0px. (0.5)
- All screens shall have a sidebar bar that is
  - 100px wide. (0.5)
  - On the right hand side of the page. (0.5)
  - Has a height that spans the full height of the viewport. (0.5)
  - Has a background colour of #eee. (0.5)
  - Contains a logo (any random image from the internet) that at the top of the sidebar, centre aligned. (0.5)
  - Contains 2 lines of text that are links: (1)
    - Home (linking to /home)
    - Game (linking to /game)
- The content in the landing page (i.e. everything excluding the sidebar should be positioned in the middle of the page.)
- The only content in the landing page should be a heading that says Welcome to the landing page! (0.5)

### 1.2.1 Game 1 - Scissors paper rock

- This page exists on route /game and contains the header and footer from 1.2.0. (0.5)
- This main page contains two sections: 
  - The left hand side should contain the player section where the player can choose hands (1)
  - The right hand side should contain the computer section (0.5)
- The user should be able to click a button of the hand of their choice and if the user's hand beats the computer's hand (randomly generated), the user should be alerted with a message saying "You win :D" (2)
- If the computer's hand beats the user's hand, the user should be alerted with a message saying "You lose!" and if the computer's hand ties with the user's hand, the user should be alerted with a message saying "You tied" (2)
- A button below the player/computer section should exist to reset the game back to its original state (1)

# 2. Marking Criteria

For each of sections, marks will be awarded according to the following criteria:

- 80%: Providing the features and functionality required at least one of desktop, tablet, or mobile.
- 20%: Ensuring responsiveness on desktop, tablet, mobile
  - Desktop testing will be done on a 1800px x 800px viewport size
  - Tablet testing will be done on a 1200px x 500px viewport size
  - Mobile testing will be done on a 600px x 500px viewport size