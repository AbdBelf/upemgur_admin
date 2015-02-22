App.PublicImagesController = Ember.Controller.extend({


actions : {
		
}

});

Ember.Handlebars.helper('getImageName', function(url) {
  return url.replace(/^.*[\\\/]/, '');
});
