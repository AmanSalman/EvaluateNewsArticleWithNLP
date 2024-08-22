# Webpack Project with Service Worker

This project is a simple Webpack setup that includes SCSS for styling, Babel for JavaScript transpilation, and a service worker for offline functionality.

## Project Description

The project demonstrates how to set up a basic Webpack configuration for bundling JavaScript and SCSS files. It also includes a service worker for enabling offline capabilities.

## How to Run the App

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/your-repo.git
    ```
   
2. **Navigate to the project directory**:
    ```bash
    cd your-repo
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Run the app in development mode**:
    ```bash
    npm run start
    ```

5. **Build the project for production**:
    ```bash
    npm run build
    ```
6. **Run the server**:
    ```bash 
    navigate to the src/server/
    nodemon server.js or node server.js
    ```
## Project Structure
├── src/
│ ├── client/
│ │ ├── js/
│ │ │ ├── app.js
│ │ │ └── index.js
│ │ ├── styles/
│ │ │ ├── base.scss
│ │ │ ├── header.scss
│ │ │ ├── footer.scss
│ │ │ ├── form.scss
│ │ │ └── resets.scss
│ │ ├── views/
│ │ │ └── index.html
│ │ └── service-worker.js
│ ├── server/
│ │ └── index.js
├── dist/
├── node_modules/
├── .gitignore
├── webpack.dev.js
├── webpack.prod.js
├── package.json
└── README.md


## Dependencies

- **Webpack**: Module bundler.
- **Babel**: JavaScript compiler.
- **Sass**: CSS preprocessor.
- **Axios**: Promise-based HTTP client.
- **Service Worker**: For offline functionality.

## Offline Functionality

The project includes a service worker that gets registered when the app loads, enabling offline support.

```html
<script>
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js');
        });
    }
</script>

