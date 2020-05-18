## App for people who want to use less plastic :whale:

## Client repo of full-stack app for searching all plastic free products in your city

- Only plastic-free products will be promoted with this app, making plastic-free lifestyle available for everyone
- All users can search for products and see map with locations + list of online stores
- Only logged in users can add new locations and online stores
- Only logged in users can save locations and online stores

## Deployed version here: [https://plastic-free.herokuapp.com/]

## Technologies used

- React, React Router DOM
- Redux, Redux-Thunk, Redux-Persist
- CSS3, Sass
- REST API, superagent
- Google Maps JavaScript API, Google Places API

## Setup

In order to run this App:

- git clone git@github.com:viktoriachernykh/plastic-free-client.git
- npm install
- ensure you have Google API key set as environment variable (REACT_APP_GOOGLE_API_KEY="your key here")
- ensure you have link to server set as environment variable, choose one option:
  1.  Link to deployed server (REACT_APP_SERVER="https://plastic-free-server.herokuapp.com")
  2.  Link to localhost (REACT_APP_SERVER="http://localhost:4000") - for this link to be active, install and run server repo from here: [https://github.com/viktoriachernykh/plastic-free-server]
- ensure you have server running
- npm run start

## Features to implement

- user can choose option “use my location” in city search
- user can add to product search more than 1 product (up to 5-10 products) and get locations which have all the products
- user can create and save shopping list and search for all locations with all the products from this shopping list
- stores added by users get verified by admin + admin can approve or reject added stores and block users
