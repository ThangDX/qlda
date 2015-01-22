/**
 * Created by thangdx on 22/01/2015.
 */
Meteor.publish('posts', function() {
    return Posts.find();
});