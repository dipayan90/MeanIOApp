'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Dipayanapp = new Module('dipayanapp');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Dipayanapp.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Dipayanapp.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Dipayanapp.menus.add({
    title: 'dipayanapp example page',
    link: 'dipayanapp example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Dipayanapp.aggregateAsset('css', 'dipayanapp.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Dipayanapp.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Dipayanapp.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Dipayanapp.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Dipayanapp;
});
