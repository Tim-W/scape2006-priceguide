/**
 * Created by timwissel on 28-06-15.
 */
Template.offerTableRow.helpers({
    username: function () {
        return Meteor.users.findOne({_id: this.createdBy}).username;
    },
    offer: function () {
        return Spacebars.SafeString('<b>' + this.buyingOrSelling + '</b> ' + this.amount + ' for ' + this.pricePerItem + 'GP ea');
    },
    isMine: function () {
        return Meteor.userId() === this.createdBy;
    }
});

Template.offerTableRow.events({
    'click #done': function (event, template) {
        Offers.remove(template.data._id);
    }
});