/**
 * Created by timwissel on 28-06-15.
 */
Meteor.methods({
    userExists: function (username) {
        return !!Meteor.users.findOne({username: username});
    }
});