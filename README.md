# Geolocation API Project

This Project enables you to view the locations of places on the Google map as well as it stores those places in the database. 
These stored locations can also be viewed / checked .


# Database used -
MYSQL

# Requirements & Versions
npm - 5.6.0, 
node - v8.11.1
MYSQL Server 5.1 and above or MYSQL Server Workbench

# To run the application
Enter the commands in the Terminal -

[1] npm install

[2] node server.js

# To view the Outcome or the UI (User Interface)
[1]
Open in browser -

locahost:8080


# Caution 
No need to create a database and table in MYSQL. It is already created through the application.  And once created , again if you re-run node server.js , you will get error as Database already exists. So please drop the database locationsdata by running the command -

drop database locationsdata;

And then run 
node server.js


Good Luck !
