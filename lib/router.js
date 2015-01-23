/**
 * Created by KPMS on 23/01/15.
 */

Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() {
        Meteor.subscribe('posts');
    }
});

Router.route('/', {name: 'postsList'});