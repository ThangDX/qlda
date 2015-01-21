var postsData = [
    {
        title: 'Introducing Telescope',
        url: 'http://google.com'
    },
    {
        title: 'Meteor',
        url: 'http://google.com'
    },
    {
        title: 'The Meteor Book',
        url: 'http://google.com'
    }
];

Template.postsList.helpers({
    posts: postsData
});
