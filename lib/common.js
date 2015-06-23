post = new Mongo.Collection("posts");
Schema={};

Schema.post = new SimpleSchema({_id:{type:String},
                       maleCount:       {type: Number,    label: "Title",        max: 200 },
                       femaleCount:       {type: Number,    label: "Title",        max: 200}
                       }
                       );
post.attachSchema(Schema.post);
if(post.find().count() === 0)
{
	post.insert({_id:"1", maleCount :2 , femaleCount : 2});
}
cnt = post.find('1');


isValid = Match.test(cnt, Schema.post);


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
