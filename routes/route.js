function route(app,routes,user,login){
  app.get('/', routes.index);
  app.get('/login', login.login);
  app.get('/user', user.user);
  app.get('/wish', user.wish);
  
}
exports.route = route;