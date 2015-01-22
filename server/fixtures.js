/**
 * Created by thangdx on 22/01/2015.
 */
if(Posts.find().count() === 0) {
    Posts.insert({
        title: 'Introducing Telescope',
        url: 'http://google.com'
    });
    Posts.insert({
        title: 'Meteor',
        url: 'http://meteor.com'
    });
    Posts.insert({
        title: 'Meteor Book',
        url: 'http://google.com/meteorjs'
    });
}