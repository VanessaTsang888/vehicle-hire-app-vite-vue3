# Vehicle Hire Booking System

This dynamic application is for users group (individual users) one to hire one vehicle at a time and for users group two whom are companies who have multiple vehicles on hire at any one time. The hire cmpany has many vehicles of the same make and model. Vehicles are hired on a daily basis, rather than hourly.

Users group two can use this system to keep a record of the vehicles they own and which ones are currently hired out to customers.

## Project setup

This project is created using (Vue 3 + Vite)[https://vuejs.org/guide/quick-start.html]
I had manually installed the Vue Router, the Vuex.js for state management and Tailwinds CSS.

Fronend Development:
This application is created with version 3 of Vue.js and with the following tools:

- Vue Router
- Vuex
- Tailwinds CSS

Vuex for state management and to store dat.
Need Vuex as this app has multiple views and we need to keep data centralised and to be able to pass data to all components so all components would be aware of any changes (mutations) that happens to our data.

This application uses Tailwind CSS as this CSS Framework make developing large apps with multiple developers more future proof.
Example, this framework makes most styles available through classes that can be used in HTML. Therefore, if we need to change some styles, we just change it in the HTML, don't need to add anymore CSS. Tailwinds is Component-friendly. Therefore, if we need to use something over and over again, we would use 'Utilities Classes'.
Hot-reloads is used for the development of this Vue app.

### Start Frontend Server

To run the frontend of this Vue.js application cd into the directory named: vehicle-hire-app. Then use this command in your Terminal:

```
npm run dev
```

In the Terminal of your VSCode, you will see the following displayed:

App running at:

- Local: http://localhost:8080/
- Network: http://192.168.1.245:8080/

Copy the Local link and past into your Google Chrome browser. Now the Vue application will be displayed in the UI for you to test the application.

## Backend Development

I used VSCode IDE to write the API and the file is named: db.json (db stands for database). This API has x5 resources (endpoints) which are:

http://localhost:3000/vehicles
This is all the vehicles that the company owns.
http://localhost:3000/available_vehicles
This is all the vehicles that is available for user to book for hire.
http://localhost:3000/hired_vehicles
This is all vehicles that is currently hired out.
http://localhost:3000/cost_calc
This is the total cost of the hire.
http://localhost:3000/booking
This is the summary of the confirmed booking including the vehicle details, customer ID, total cost and dates.

You can expose the endpoints in the browser using/testing these url's in the browser. To do this use you need to start the json server using this command:

```
json-server data/db.json
```

The Home url is: http://localhost:3000/

I used (json-server)[https://github.com/typicode/json-server#getting-started] to mockup the backend with mock data that is hardcoded so no lodgic in the backend as my focus is the frontend development using Vue.js version 3.

### Start Backend Server

To test test or expose the Endpoints in your browser, you need to start the JSON Server. Simply cd into the directory named: vehicle-hire-app. Then use the below command in your Terminal:

```
json-server --watch data/db.json
```

Now you will see the three different Resources and you can simply hold down the command key and click on a resource that has been output in the Terminal within VSCode. For each different Endpoint you can see the object. Each object is a vehicle or a REST Service.

#### Frontend and Backend Development Tools

Vue.js devtools:
This is a Chrome browser extension that use to inspect the state and getters in the screen/UI to check that our code is doing what we expect it to be doing. It is best practice that we use this tool as much as possible to help minise us from creating bugs in our code.

VSCode Plugins:

- VSCode for Vite.
- Prettier Code Formatter
- ESLint
- GitLens
- Auto Rename Tag (Auto rename paired HTML/XML tag)
-

JSON Viewer Awesome:
This is an Chrome as an extension or addon you can add to your Chrome broswers. This will make your life easier when working json data.
This allows you to view the data in a couple of different structures including a Tree
structure. You can copy the path, you can copy the value. You can collapse certain pieces of data as there may be many items in this API and you may only be interested in a particular item or resource at one time?

Postman:
This tool is used to test the API's.
