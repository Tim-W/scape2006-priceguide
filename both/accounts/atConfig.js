/**
 * Created by timwissel on 28-06-15.
 */
AccountsTemplates.addField({
    _id: 'username',
    type: 'text',
    required: true,
    func: function (value) {
        if(Meteor.isClient) {
            var self = this;
            Meteor.call('userExists', value, function (error, userExists) {
                if(!userExists) {
                    self.setSuccess();
                } else {
                    self.setError(userExists);
                }
                self.setValidating(false);
            })
        }
    }
});

AccountsTemplates.configure({
    homeRoutePath: '/'
});