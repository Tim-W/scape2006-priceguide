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
            if (this.search()) {
                var searchValue = new RegExp(this.search().toLowerCase(), 'i');
                return Offers.find({item: searchValue}, {sort: {createdAt: -1}});
            } else {
                return Offers.find({}, {sort: {createdAt: -1}});
            }
        }
    },
    'offers');

Template.home.onRendered(function () {
    //this.autorun(function () {
    //
    //})
    var initializing = true;
    Offers.find().observeChanges({
        added: function (id, doc) {
            if (!initializing) {
                var offer = Offers.findOne({_id: id});
                if(Meteor.userId() !== offer.createdBy) {
                    var createdBy = Meteor.users.findOne({_id: offer.createdBy});
                    var buyingOrSelling;

                    if (offer.buyingOrSelling === 'Buying') {
                        buyingOrSelling = 'buying';
                    } else {
                        buyingOrSelling = 'selling';
                    }

                    var notification = new Notification('Scape-2006: new offer', {
                        body: createdBy.username + ' is ' + buyingOrSelling + ' of ' + offer.amount + ' ' + offer.item + ' @ ' + offer.pricePerItem + ' GP ea'
                    });

                    setTimeout(notification.close.bind(notification), 4000);
                }
            }
        }
    });
    initializing = false;
})


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