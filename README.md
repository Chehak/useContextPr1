Steps---
<ul>
  <li>Step 1 : Create a context</li>
  <li>Step 2 : Create a context provider <br>   (Call any api and send data through the context , this file provide the data) </li>
  <li>Step 3 : Wrap the components or the whole App.js to context which is providing the data , it provides data to all the components which are inside that context provider </li>
  <li>Step 4 : Extract the state where the data is present and use the values wherever you want...</li>  
</ul>

<p>When reseting the values present in context to update upfront use setUser({username:'',password:''})</p>


<p>2nd Project of themeSwitcher</p>
<p>This project is based on dark and light theme switching</p>
<ul>
  <li>Step 1 : Create a context file (in this file itself create a themeProvider and a custom hook to get the available methods everywhere</li>
  <li>Step 2 : Wrap the components in App.js which make the functions and states provide to the app</li>
  <li>Step 3 : In App.js write the actual code of switching the theme class from dark to light or vice versa</li>
  <li>Step 4 :Then in Theme Button file add functions for toggle and set the themeMode and use the functions using useTheme hook and call the function according to the toogle swich</li>
</ul>

