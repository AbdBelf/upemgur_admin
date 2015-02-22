App.Router.map(function () {
  // Add your routes here

this.resource('publicImages', { path: 'publicImages' }, function() {
		this.resource('publicImage', { path: ':image_id' }, function() {
			
		});
	});


});


