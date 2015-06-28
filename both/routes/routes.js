/**
 * Created by timwissel on 28-06-15.
 */

Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function () {
    this.route('/', {
        name: 'home'
    });

    this.route('/accounts', {
        name: 'accounts'
    });
});