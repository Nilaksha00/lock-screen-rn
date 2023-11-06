# Lock Screen Interface with React Native

This project is a simple lock screen interface developed using React Native. The lock screen interface allows the user to enter a 4-digit PIN to unlock the app. If the correct PIN is entered, an "Unlocked" alert appears. If an incorrect PIN is entered, the user is given a maximum of 3 attempts, and after three incorrect attempts, the keypad is locked for a minute.

<br/>

## User Interface


<b>Font:</b> Roboto (https://fonts.google.com/specimen/Roboto)

<b>Colors:</b> #FAFAFA, #E15646, #5A7FD6

The sample lock screen interfaces are shown below

<img src="https://github.com/Nilaksha00/lock-screen-rn/assets/86180339/2a6b59ca-7d12-4d0c-b5be-5480eba9cfd6" width="250"> 
<img src="https://github.com/Nilaksha00/lock-screen-rn/assets/86180339/6134cb08-59df-4a5e-9b01-93d89b94e7cc" width="250">
<img src="https://github.com/Nilaksha00/lock-screen-rn/assets/86180339/db1d0707-991f-44b9-99d4-1fb0c28a02bf" width="250">

<br/>

## Features

<li>Custom keypad design using FlatList.</li>
<li>Keypad feedback for each key press and a delete button to clear the last entered digit.</li>
<li>Acceptance of a 4-digit PIN with the correct combination being '1234'.</li>
<li>Display of error messages and feedback to the user based on PIN entry.</li>
<li>Use of the default OS alert for notifications.</li>
<li>Error states that change the UI based on the user's input.</li>


<br/>

## SetUp Instructions

<ol>
   <li>Ensure you have Node.js and npm installed on your computer</li>
  <li>Clone the repository from GitHub

  ``` git clone https://github.com/Nilaksha00/lock-screen-rn.git```
  </li>
   <li>Install React Native CLI by running the following command
      
   ```npm install -g react-native-cli```
   </li>
   
   <li>Navigate to the project directory
   
   ```cd lock-screen-rn```
   </li>
   <li>
    Install project dependencies

```npm install```
   </li>
   <li> Run the Application
   
   ```react-native run-android```</li>
   <li>Run on Android or IOS emulator</li>
</ol>




