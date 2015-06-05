NewsReader.Views.FeedsIndex = Backbone.CompositeView.extend({

  initialize: function () {
    this.listenTo(this.collection, 'sync destroy', this.render);
  },

  events: {
    'click button.remove-feed': 'removeFeed',
    'submit form.add-feed': 'addFeed'
  },

  template: JST['feeds/index'],

  addFeed: function (event) {
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON();
    var feed = new NewsReader.Models.Feed();
    feed.save(params, {
      success: function () {
        this.collection.add(feed);
      }.bind(this),
      error: function (model, response) {
        console.log(arguments)
        $('div.errors').html(response.errors);
      }.bind(this)
    });
  },

  removeFeed: function (event) {
    var modelID = $(event.currentTarget).data('id');

    this.collection.get(modelID).destroy();
  },

  render: function () {
    this.$el.html(this.template({ feeds: this.collection }));
    this.$el.append(JST['feeds/form']());
    return this;
  }

});
