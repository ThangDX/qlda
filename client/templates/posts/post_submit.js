/**
 * Created by thangdx on 25/01/2015.
 */
Template.postSubmit.events({
   'submit form': function(e) {
       e.preventDefault();

       var post = {
           url: $(e.target).find('[name=url]').val(),
           title: $(e.target).find('[name=title]').val()
       };

       Meteor.call('postInsert', post, function(error, result) {
           if(error)
           return alert(error.reason);

           if(result.postExits)
            alert('Bài này đã được đăng');
           Router.go('postPage', {_id: result._id});
       });
   }
});

