# Christoffel Digital Menu – Part 3 (Final PoE)

## Project overview
A React Native + TypeScript menu management app for a chef and guests. Part 3 moves menu creation to a dedicated screen, adds menu management/removal, course filtering for guests, and average price statistics by course.

## Requirements implemented
- Home shows the complete menu, total count and average price for Starter, Main and Dessert.
- Add Menu Item is a separate screen with validation and predefined course choices.
- Menu items are held in a typed array in React state and can be removed from Manage Menu.
- Guest Menu filters by All, Starter, Main or Dessert.
- Details screen displays one selected dish.
- Code is refactored into screens, components, context, types and utility functions.
- TypeScript `for` and `while` loops are used in `src/utils/menuUtils.ts`.
- A module-level `currentMenuSnapshot` is updated from React state and used as a shared snapshot for helper logic. React state remains the source that triggers UI updates.

## Setup
1. Install Node.js LTS.
2. Extract this folder.
3. Run `npm install`.
4. Run `npx expo start`.
5. Install Expo Go on an Android phone, scan the QR code while both devices are on the same network.
6. For web preview, run `npm run web` after dependencies are installed.

## Test guide
1. Start with an empty Home screen. Confirm count is 0 and course averages show a dash.
2. Add a Starter, Main and Dessert using Add menu item.
3. Return Home. Confirm all items appear and the count updates.
4. Check each average: the value must equal the sum of prices in that course divided by the number of items in that course.
5. Open Manage menu and remove one item; confirm the Home list, count and average update.
6. Open Guest menu; choose Starter, Main, Dessert and All courses. Confirm only matching items appear.
7. Open a menu item to view its Details screen.
8. Try an empty form, a blank price and a zero/negative price; the app should reject invalid data.

## Data and limitations
The menu array is stored in React state for the current app session. This build does not use a database or persistent local storage, because persistence was not explicitly required in the supplied Part 3 excerpt. Items reset when the app is restarted. Add persistence only if the lecturer has separately required it.

## GitHub submission
Create a repository, upload the extracted project, and paste the real repository URL into your portfolio. Do not submit a sample URL. Add commits with clear messages such as `Add average course prices`, `Separate add and manage screens`, and `Add guest course filtering`.

## Student completion checklist
- [ ] Replace student name, student number and date in the portfolio.
- [ ] Install dependencies and run the app on an Android device.
- [ ] Capture genuine screenshots from the running app for each test in the evidence section.
- [ ] Push the source folder to your GitHub repository and add the real URL below.
- [ ] Record your own screen demonstration with voice-over and upload it; add the real video URL below.

GitHub repository URL: [PASTE YOUR REAL REPOSITORY URL HERE]
Video recording URL: [PASTE YOUR REAL VIDEO URL HERE]
