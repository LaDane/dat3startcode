# Frontend setup

## Before starting

> 1.  Install packages
>
> ```
>     npm install
>     npm install react-icons --save
>     npm install jwt-decode
>     npm install --save styled-components
> ```

## Deploying to a subdirectory with Ubuntu & NGINX

### Front End

> 1.  In package.json, add a homepage key
>
>     `"homepage":"/{subdirectory}",`

> 2.  In App.jsx, change basename
>     `<Router basename="/{subdirectory}">`

> 3.  In deploy.sh, change:
>     `PROJECT_NAME="{subdirectory}"` >`DROPLET_URL="{droplet IP}"`

### Ubuntu

> 1.  SSH into droplet

> 2.  `"cd /var/www/"`

> 3.  `"mkdir {subdirectory}"`

> 4.  `"chmod -R 777 {subdirectory}"`

> 5.  `"nano /etc/nginx/sites-enabled/default"`

> 6.  Create new location in NGINX config
>
> ```
> location ^~ /{subdirectory} {
> 	alias /var/www/{subdirectory};
> 	try_files $uri $uri/ /{subdirectory}/index.html;
> }
> ```

> 7.  Save + exit

### Git Bash from front-end directory

> 1.  Run deploy.sh from terminal
>     `./deploy.sh`

### Ubuntu

> 1.  Check config file for errors
>     `"nginx -t"`

> 2.  Restart NGINX service
>     `"service nginx restart"`

## Available Scripts from React

In the project directory, you can run:

### `npm start`

Open [http://localhost:3000/startcode](http://localhost:3000)

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**
If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## Learn More about React

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
