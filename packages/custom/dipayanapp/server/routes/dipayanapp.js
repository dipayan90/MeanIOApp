'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Dipayanapp, app, auth, database) {

  app.get('/dipayanapp/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/dipayanapp/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/dipayanapp/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/dipayanapp/example/render', function(req, res, next) {
    Dipayanapp.render('index', {
      package: 'dipayanapp'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
