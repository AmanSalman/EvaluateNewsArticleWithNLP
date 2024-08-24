# Webpack Project with Service Worker

This project is a simple Webpack setup that includes SCSS for styling, Babel for JavaScript transpilation, and a service worker for offline functionality.

## Project Description

The project demonstrates how to set up a basic Webpack configuration for bundling JavaScript and SCSS files. It also includes a service worker for enabling offline capabilities.

## How to Run the App

1. **Clone the repository**:
    ```bash
    git clone https://github.com/AmanSalman/EvaluateNewsArticleWithNLP.git
    ```
   
2. **Navigate to the project directory**:
    ```bash
    cd EvaluateNewsArticleWithNLP
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Build the project for production**:
    ```bash
    npm run build
    ```
5.  **Run the app in development mode**:
    ```bash
    npm run start
    ```
6. **Run the server**:
    ```bash 
    npm run server
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
					navigator.serviceWorker.register('/service-worker.js').then(registration => {
						console.log('Service Worker registered with scope:', registration.scope);
					}).catch(error => {
						console.error('Service Worker registration failed:', error);
					});
				});
			}
		</script>
```

## Test the Service Worker Registration

1. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000).
2. **Open Developer Tools**:
   - Press `F12` on your keyboard, or right-click on the page and select "Inspect".
3. Go to the **"Console" tab** in Developer Tools.
4. Check for any logs related to the service worker registration.
   ```plaintext
   Service Worker registered with scope: /
