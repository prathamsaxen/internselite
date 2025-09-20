This web page demonstrates how to use the **Geolocation API** to get a user's current location. It's a fundamental example of how JavaScript can interact with the browser and device hardware.

***

### 1. HTML Structure

The HTML is straightforward and consists of just a single button:
* `<button id="get-location">Get Location</button>`: This is the user interface element. The `id` attribute makes it easy for the JavaScript code to select this specific button and attach an event listener to it.

***

### 2. JavaScript Logic

The JavaScript code is placed directly within a `<script>` tag at the end of the `<body>`. This ensures the DOM is fully loaded before the script runs, so it can find the button element.

* `const getLocation = () => { ... }`: This defines an arrow function named `getLocation` that contains all the logic for retrieving the location.
* `if ("geolocation" in navigator)`: This is a crucial **feature detection** step. It checks if the `geolocation` property exists within the `navigator` object, which is the standard way to determine if the user's browser supports the Geolocation API. It's a best practice to perform this check to prevent errors on older browsers or non-compliant environments.
* `navigator.geolocation.getCurrentPosition(...)`: This is the core method of the Geolocation API. It takes two callback functions as arguments:
    1.  The **success callback function**: This function is executed if the user's location is successfully retrieved. It receives a `position` object as an argument. The code then extracts the `latitude` and `longitude` from `position.coords` and logs them to the console. 
    2.  The **error callback function**: This function is executed if there's an error in retrieving the location (e.g., the user denies permission, or the location service is unavailable). It receives an `error` object with a `code` and a `message` that describe the issue.
* `document.getElementById('get-location').addEventListener('click', getLocation);`: This line of code connects the JavaScript function to the HTML button. It adds a **click event listener** to the button, so that when a user clicks on it, the `getLocation` function is automatically executed.