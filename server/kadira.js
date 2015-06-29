if (Meteor.isServer) {
  Meteor.startup(function () {

  	if(Posts.find().count() === 0)
{
	Posts.update({_id:1},{$set : { maleCount:0 , femaleCount : 0}}, {upsert:true});
}


      
});
}



