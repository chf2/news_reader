NewsReader.Views.FeedShow = Backbone.CompositeView.extend({

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.entries(), 'add', this.addEntrySubview);
    this.model.entries().each(function (entry) {
      this.addEntrySubview(entry);
    }.bind(this));
  },

  template: JST['feeds/show'],

  events: {
    'click button': "refersh"
  },

  addEntrySubview: function (entry) {
    var subview = new NewsReader.Views.EntryItem({ model: entry });
    this.addSubview('ul.entry-list', subview, true);

    return this;
  },

  render: function () {
    this.$el.html(this.template({ feed: this.model }));
    this.attachSubviews();
    return this;
  },

  refersh: function () {
    this.model.fetch();
  }

});
