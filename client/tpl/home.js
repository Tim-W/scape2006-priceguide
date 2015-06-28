/**
 * Created by timwissel on 28-06-15.
 */
Template.home.helpers({
    offers: function () {
        return Offers.find({}, {sort: {createdAt: -1}});
    },
    username: function () {
        return Meteor.user() && Meteor.user().username;
    }
});

Template.home.events({
    'click #logout': function () {
        Meteor.logout(function () {
            Router.go('/accounts');
        });
    }
});