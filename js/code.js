var MicroPHP = {};

var codeapp;

/*************************************************
* Packages VIEW
*************************************************/
MicroPHP.CodeView = Backbone.View.extend({

	// a collection
	'packages' : null,

	'templates' : {
		'package': _.template([
				"<li>",
				"	<h4><a href='<%=link%>' class='title'><%=title%></a></h3>",
				"	<div class='description'><%=description%></div>",
				"	<div class='tags'><% _.each(tags, function(tag) { %><span class='tag'>#<%=tag%></span><% }); %></div>",
				"</li>"
			].join(''))
	},

	'initialize' : function() {
		_.bindAll(this, 'render', 'render_package');

		this.packages = new MicroPHP.Packages({'view':this});
	},


	'add_package' : function(data) {
		//
	},

	'add_packages' : function(data) {
		//
	},

	'reset_packages' : function(entities) {
		this.packages.reset(entities);
		this.render();
	},

	'render' : function() {
		this.el = $('#gb-assets');
		$(this.el).empty();
		_.each(this.packages.toJSON(), this.render_package);

		this.super_list = new List('code-list', {
			valueNames: [ 'title', 'description', 'tags' ]
		});

		return this; //recommended as this enables calls to be chained.
	},

	'render_package' : function(p) {
		$(this.el).append( codeapp.templates['package'](p) );
	},



	'get_data' : function (limit, skip) {

		if (!limit) { limit = 10; }
		if (!skip) { skip = 0; }

		$.getJSON(
			'https://gimmebar.com/api/v0/public/assets/funkatron/micro-php.json?limit=' + limit + '&skip=' + skip + '&jsonp_callback=?',
			_.bind(function(data) {
				var entities = [];
				_.each(data.records, function(record) {
					entities.push({
						'title' : record.title,
						'link' : record.content.original,
						'description' : record.description,
						'tags' : record.tags
					});
				});

				this.reset_packages(entities);
			}, this)
		);
	}

});




/*************************************************
* Packages MODEL
*************************************************/
MicroPHP.Package = Backbone.Model.extend({

	'defaults': {
		title: "The Title",
		description: [
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
				"tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
				"quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
				"consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
				"cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non",
				"proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			].join(''),
		link: "http://funkatron.com",
		tags: ['foo','bar','baz']
	},

	'initialize': function() {},

	'validate': function(attribs) {}
});



/*************************************************
* Packages COLLECTION
*************************************************/
MicroPHP.Packages = Backbone.Collection.extend({

	'model': MicroPHP.Package,

	// a view
	'view': null,

	'initialize': function(opts) {
		if (opts && opts.view) {
			this.view = opts.view;
		}

		this.bind("reset", function(eventName) {
			this.on_reset();
		}, this);
	},

	'matches': function() {
		return this.filter(function() {
			// stuff
		});
	},

	'on_reset': function(e) {
		this.view.render();
	},

	'more' : true,
	'total' : 100
});




/*************************************************
* Package VIEW
*************************************************/
MicroPHP.PackageView = Backbone.View.extend({
	'tagName' : 'LI',

	'render' : function() {
		this.el.innerHTML = codeapp.templates['package'](this.model.toJSON());
	}
});



$(document).ready(function() {
	codeapp = new MicroPHP.CodeView();
	codeapp.get_data(50,0);
});