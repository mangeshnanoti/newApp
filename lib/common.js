Posts = new Mongo.Collection("posts");
//post.collection.validate(true);
Schema={};

Schema.post = new SimpleSchema({
					   _id : {type : Number},
                       maleCount:       {type: Number,    label: "Title",        max: 200  , min :0 },
                       femaleCount:       {type: Number,    label: "Title",        max: 200 , min: 0 }
                       }
                       );
Posts.attachSchema(Schema.post);

cnt = Posts.findOne();
//maleCount = cnt.maleCount;
//femaleCount = cnt.femaleCount;

//isValid = Match.test(cnt, Schema.post);


Posts.allow({
  insert: function(doc){
		    return doc;
		  },
  update: function(doc){
		    return doc;
		  },
  remove:  function(doc){
		    return doc;
		  }
});
