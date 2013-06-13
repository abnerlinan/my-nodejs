
/*
* GET users listing.
*/

var mongo = require('../db/mydb');

exports.user = function(req, res){
  var user = {
    'email': req.query.email,
    'pwd': req.query.password
  };
  var userName = '';
  function render(username){
    res.render('user',{
      title: 'Wish',
      userName: userName
    })
  };
  
  if(user.email ==  '' || user.pwd == ''){
    res.redirect('/login');
  }else{
    //console.log(mongo)
    mongo.open(function(e,db){
      db.collection('test',function(e,collection){
        collection.find({email:user.email,password:user.pwd}).toArray(function(e,arr){
          if(arr.length>0){
            userName = arr[0].email;
          }else{
            userName = 'Bad name or password!'
          }
          render(userName);
          db.close();
        })
      })
    });
    
  }
};

exports.wish = function(req, res){
  var wishid = req.query.id;
  res.render('wish', { title: 'Wish',wishid: wishid });
};

exports.jsonp = function(req, res){
  res.jsonp({ user: 'jsonp' })
};