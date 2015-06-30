/**
 * Created by timwissel on 28-06-15.
 */
Template.home.helpers({
    //offers: function () {
    //    var searchValue = Template.instance().viewmodel.search();
    //
    //    if(searchValue) {
    //        return Offers.find({
    //            item: searchValue
    //        }, {sort: {createdAt: -1}});
    //    } else {
    //        return Offers.find({}, {sort: {createdAt: -1}});
    //    }
    //},
    username: function () {
        return Meteor.user() && Meteor.user().username;
    }
});

Template.home.viewmodel({
    search: null,
    offers: function () {
        if(this.search()) {
            var searchValue = new RegExp(this.search().toLowerCase(), 'i');
            return Offers.find({item: searchValue}, {sort: {createdAt: -1}});
        } else {
            return Offers.find({}, {sort: {createdAt: -1}});
        }
    }
},
'offers');

Template.home.events({
    'click #logout': function () {
        Meteor.logout(function () {
            Router.go('/accounts');
        });
    },
    'change #search': function (event, template) {
        Session.set('search', event.text());
    }
});