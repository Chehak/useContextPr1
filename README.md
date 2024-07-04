<ul>
  <li>Step 1: Create a context
    <br>Define a context to manage shared state across components.
  </li>
  <li>Step 2: Create a context provider
    <br>Call an API to fetch data and pass this data through the context. This file will provide the data to the rest of the application.
  </li>
  <li>Step 3: Wrap the components or the whole App.js with the context provider
    <br>Wrap the relevant components, or the entire App.js, with the context provider. This ensures that all components within this provider can access the shared data.
  </li>
  <li>Step 4: Extract and use state
    <br>Extract the state from the context and use the values wherever needed in the application.
  </li>  
</ul>
<p>When resetting the values present in the context to update upfront, use setUser({username: '', password: ''}).</p>
<p>2nd Project: Theme Switcher</p>
<p>This project focuses on switching between dark and light themes.</p>
<ul>
  <li>Step 1: Create a context file
    <br>In this file, create a ThemeProvider and a custom hook to access theme methods throughout the application.
  </li>
  <li>Step 2: Wrap the components in App.js with the ThemeProvider
    <br>Wrap the relevant components in App.js with the ThemeProvider to provide theme functions and states to the app.
  </li>
  <li>Step 3: Implement theme switching in App.js
    <br>Write the logic to switch the theme class between dark and light in App.js.
  </li>
  <li>Step 4: Add toggle functionality in Theme Button
    <br>In the Theme Button component, add functions to toggle and set the theme mode. Use the useTheme hook to access these functions and handle the toggle switch accordingly.
  </li>
</ul>
