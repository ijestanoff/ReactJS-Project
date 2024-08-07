This is a ReactJS based on free Demo Project https://templatemo.com/tm-583-festava-live creating a web site for a festival event.
The interface has the ability to support authorized users who, after authentication, can add artists to the festival event.
The creator of an artist in the catalog has the functionality to delete and edit artist data.
Every logged-in user or guest has the opportunity to view the event catalog and event schedule.
Only admin with email: admin@abv.bg and password: admin can edit the schedule at the festival page.
The schedule page shows a table view of the three days of the festival, showing for each day the performers for the day and night sessions,
as well as the weather forecast got from an external API https://www.visualcrossing.com/weather/weather-data-services.  
The weather forecast is taken from the external API for the next 15 days, so the event dates should fall within this range for the forecast to be displayed correctly.
At the Artist catalog page every artist has link for a details page. Artist pages can be created by registered users. In the details page every logged-in user can add comments. Only the creator of the atrist's page can edit it. Unregidstered users can only view the page and read the comments.
"About" and "Price" pages are static, all others pages are dynamic.

To start project:
 1.Open project with Visual Studio Code
 2.Start terminal in folder server and start back-end server with command node server.js
    This will create server at http://localhost:3030/
 3.Open new terminal in client folder and start install dependences with command npm i
 4.After successful installation at client folder terminal start front-end with command npm run dev
 5.Click over link http://localhost:5173/ and project will open in browser.
