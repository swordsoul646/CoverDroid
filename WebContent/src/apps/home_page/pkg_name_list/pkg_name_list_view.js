import {CompositeView, ItemView} from 'marionette';
import entryTpl from './pkg_name_entry.hbs';
import listTpl from './pkg_name_list.hbs';

let entryView = ItemView.extend({
    tagName: 'option',
    template: entryTpl,

    initialize: function (_options) {
        this.model = _options.model;
        this.el.value = this.model.get('pkgName');
    }
});

export default CompositeView.extend({
    tagName: 'div',
    className: 'input-group',
    template: listTpl,
    childView: entryView,
    childViewContainer: '#pkg-list',

    updateData: function (_options) {
        this.collection = _options.collection;
        if (_options.controller) {
            this.controller = _options.controller;
        }
        this.render();
    }
})