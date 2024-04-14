# Mini Marketplace App

## Overview
This repository contains a frontend application developed using NextJs 14 and TypeScript to build a mini marketplace where users can browse and add projects to their cart, along with a cart preview.

## Features

### 1. Marketplace: 
Display the list of products available, search, filter and add to cart functionality.

### 2. Cart: 
Visualize the products added in the cart, show total amount, delivery date, update the quanity.


## Installation and Usage
1. Clone this repository.
2. Install dependencies using npm install.
3. Run the application with 'npm start'.
4. Access the app in your browser at (http://localhost:3000)[http://localhost:3000].

OR

access via (codesandbox.io)[https://codesandbox.io/p/github/mk21mahto/ceezer-challenge/draft/frosty-tdd]

## Folder Structure
    .src
    |--- .cart              #cart page
    |--- .context           #useContext to handle common data across the application
    |--- .components        #common place for all the components
    |--- .utils             #dummyData, types, constants

## If I had more time
1. Add more advance filtering and search feature
2. Make UX look more user friendly
3. Display SDGs (I didn't understand what are SDGs are in the dummy json data, SDGs was an array [1,2,3]. If it means, showing multiple images with clickable information. In this case I would have added a modal, which triggers when you click on the project in the main marketplace page)
4. Add form validation for quantity input
5. Show error message if anything apart from number is entered in the quantity input
6. Handle loading states, create loading skeletons
