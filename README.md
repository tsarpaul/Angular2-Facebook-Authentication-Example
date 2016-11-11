# Angular2-Facebook-Authentication-Example
An Angular 2 project which showcases how you can check that the user is logged on facebook before loading the site's content

The application uses authentication guards to return a promise of a boolean which then uses the UserManagementService 
to check for the status of the user's Facebook login.

The authentication guards and the UserManagementService are located in https://github.com/tsarpaul/Angular2-Facebook-Authentication-Example/tree/master/src/app/shared/services

Facebook is loaded in index.html for performance reasons.

To run this project:

1. Make sure to go to src/index.html and change the FB APP ID to your APP ID.
2. npm start in cmd when in the directory.
