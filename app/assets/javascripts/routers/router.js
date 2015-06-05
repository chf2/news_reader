NewsReader.Routers.Router = Backbone.Router.extend({

  initialize: function () {
    this.$rootEl = $('div#content');
  },

  routes: {
    '': 'feedIndex',
    'feeds/:id': 'feedShow'
  },

  feedIndex: function () {
    var view = new NewsReader.Views.FeedsIndex({
      collection: this._feedsCollection()
    });

    this._swapViews(view);
  },

  feedShow: function (id) {
    var view = new NewsReader.Views.FeedShow({
      model: this._feedsCollection().getOrFetch(id)
    });

    this._swapViews(view);
  },

  _feedsCollection: function () {
    if (!this.collection) {
      this.collection = new NewsReader.Collections.Feeds();
    }

    this.collection.fetch();

    return this.collection;
  },

  _swapViews: function (newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    this.$rootEl.html(newView.render().$el);
  }

});
