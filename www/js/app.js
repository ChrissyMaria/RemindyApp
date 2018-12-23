// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
      medicationList: [thyroxin, aristelle]
      /*medicationList: [
        {type:"Aristelle", img: "./images/packshot_Aristelle-0-03-mg-2-mg-Filmtabletten.png.jpeg"},
        {type:"Thyroxin", img:"./images/Thyroxin.png"},
      ]*/
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
  on: {
    pageInit: function () {

      for(var i=0; i<this.data.medicationList.length; i++) {
        console.log("bla");
        var test = $$('.cabinet').toArray();
        var my_src = this.data.medicationList[i].img;
        var img = $$('<img class="cabinet_img" alt="Medicament"/>');
        img.attr("src",my_src);
        $$(test[i]).append(img);
      }
    },
  }
});

var login = app.loginScreen.create({
  el: '#my-login-screen'
})

login.open(function () {

});

login.close(function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.create({
    title: 'Remindy',
    text: 'Welcome ' + username + '!',
  }).open();

  setTimeout(function () {
    app.dialog.close();
  }, 2000);
});


$$('.login-screen .list-button').on('click', function () {
  var username = $$('.login-screen input[name = "username"]').val();
  var pwd = $$('.login-screen input[name = "password"]').val();
  app.dialog.create({
    title: 'Remindy',
    text: 'Welcome ' + username + '!',
  }).open();
  setTimeout(function () {
    app.dialog.close();
  }, 2000);
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});





