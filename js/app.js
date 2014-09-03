var App = Ember.Application.create({
	LOG_TRANSITIONS: true
});

App.Router.map(function() {
  this.route('about', {path: '/aboutus'}); // {} not needed if path is same as route. Index behavior is loaded as default
  this.route('buy', {path:'/random-name'});
});

// App.IndexRoute = Ember.Route.extend({
//   model: function() {
//     return ['red', 'yellow', 'blue'];
//   }
// });

App.AboutController = Ember.Controller.extend({
	productsCount:7,
	logo: 'img/on.png',
	time: function() {
		return (new Date()).toTimeString()
	}.property()
});


