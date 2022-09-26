# Technical Task - React Developer Role
###### Author: Michael Shields
## Brief
<i>
You are expected to build a React web application that allows users to search for images based on a query relating to space. You are provided the NASA API endpoint for image search.
We want you to consider and add anything to your repository that should be included was this to be a live website.

The following functionalities need to be implemented:
- A Search page which allows users to search for images by keyword
- Images must be returned upon a successful search

The styling is up to you but will be taken into consideration when evaluating your application.

We estimate this task to take ​​10 hours​​. Once you have completed the task upload the repository to GitHub and send the link to xxxxx@xxx.com. ​Deadline: 5 days from receiving.

Relevant API endpoints:

image search:
GET​​ ​​https://images-api.nasa.gov/search ​Params: ​​q

Assets

You may use this asset for your application: https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg
</i>

<hr />

## Outcome

You can view the deployed application here: https://mike-shields-dev.github.io/react-technical-test/

### Screenshots
#### Desktop
<div>
  <img 
     src="https://github.com/mike-shields-dev/react-technical-test/blob/master/screenshot_HD_Portrait.png" 
     alt="screenshot of app at fullscreen size" 
     style="width: 75%"  
  />
</div>

#### Tablet 
<div>
  <img 
     src="https://github.com/mike-shields-dev/react-technical-test/blob/master/screenshot_Surface_Pro_7.png" 
     alt="screenshot of app at fullscreen size" 
     style="width: 50%"  
  />
</div>

#### Mobile
<div>
  <img 
     src="https://github.com/mike-shields-dev/react-technical-test/blob/master/screenshot_iPhone_XR.png" 
     alt="screenshot of app at fullscreen size" 
     style="width: 25%"  
   />
</div>


### Technologies Used
- [React](https://reactjs.org/), bootstrapped from [Create React App](https://github.com/facebook/create-react-app) for the UI
- [prop-types](https://www.npmjs.com/package/prop-types) for component prop type checking
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for testing of the Application overall and individual components
- [nock](https://github.com/nock/nock) for isolated testing of components that make API requests
- [axios](https://www.npmjs.com/package/axios) for handling http requests
- [uuid](https://www.npmjs.com/package/uuid) for generating unique `key` props when rendering lists
- [react-responsive-masonry](https://www.npmjs.com/package/react-responsive-masonry) for handling the layout of the search result images

## Wish List 

- Reset the textbox value after search has been submitted 
- Display a title with the search query above the search result images
- Make SearchResults component render a nested scrollable element, so that Search component remains in view when scrolling
- Make Search component responsive, switch from vertical to horizontal layout on wider screens

### Setup

- Fork this repository to your own GitHub account
- Clone the repository to your local development environment 
- Point your terminal to the cloned repository's directory using `$ cd <path to repo>`

### Available Scripts

#### `npm install`

Installs the node dependencies defined in package.json and package-lock.json.

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

