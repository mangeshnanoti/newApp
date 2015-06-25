if (Meteor.isServer) {
  Meteor.startup(function () {

//UserSession = new Meteor.Collection("user_sessions");
if(Posts.find().count() === 0)
{
	Posts.update({_id:1},{$set : {maleCount:0 , femaleCount : 0}}, {upsert:true});
	//Posts.update({_id:'1'},{$set:{id: 1,maleCount:4,femaleCount:5}});
	//post.insert({_id:'0'},{$set:{_id: "0" , 'maleCount' : 11 , 'femaleCount' : 0}});
	//post.update({_id:'0'},{$set:{_id: "0" , 'maleCount' : 0 , 'femaleCount' : 11}});
	//post.update({_id:"1"}, {$set: {'_id':'1', 'maleCount' : 'maleCount' , 'femaleCount' : 'femaleCount'}} , {upsert:true});
	//post.insert({_id:"1" , 'maleCount' : 'maleCount' , 'femaleCount' : 'femaleCount'});
	//post.update(uid,{_id:"1"}, {$set : {_id:'1','maleCount ' : 'maleCount' , 'femaleCount' : 'femaleCount'} } , {upsert : true});
}

      
});
}



