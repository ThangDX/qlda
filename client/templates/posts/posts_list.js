var postsData = [
    {
        title: 'Introducing Telescope',
        url: 'http://www.google.com'
    },
    {
        title: 'Meteor',
        url: 'http://www.vnexpess.vn'
    },
    {
        title: 'The Meteor Book',
        url: 'http://wwww.vietnamnet.vn'
    }
];

Template.postsList.helpers({
    posts: postsData
});
