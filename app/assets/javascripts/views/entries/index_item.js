NewsReader.Views.EntryItem = Backbone.CompositeView.extend({

  template: JST['entries/index_item'],

  render: function () {
    this.$el.html(this.template({ entry: this.model }));

    return this;
  }

});
