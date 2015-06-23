post = new Mongo.Collection("posts");
Schema={};

Schema.post = new SimpleSchema({_id:{type:String},
                       maleCount:       {type: Number,    label: "Title",        max: 200  , min :0},
                       femaleCount:       {type: Number,    label: "Title",        max: 200 , min:0}
                       }
                       );
post.attachSchema(Schema.post);
if(post.find().count() === 0)
{
	//post.update({_id:"1"}, {$set: {'_id':'1', 'maleCount' : 'maleCount' , 'femaleCount' : 'femaleCount'}} , {upsert:true});
	//post.insert({_id:"1" , 'maleCount' : 'maleCount' , 'femaleCount' : 'femaleCount'});
	post.insert({_id:"1", maleCount :2 , femaleCount : 2});
}
cnt = post.find('1');


//isValid = Match.test(cnt, Schema.post);


post.allow({
  insert: function(userId, doc){
		    return doc && doc.userId === userId;
		  },
  update: function(userId, doc){
		    return doc && doc.userId === userId;
		  },
  remove:  function(userId, doc){
		    return doc && doc.userId === userId;
		  }
});
