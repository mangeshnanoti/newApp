Posts = new Mongo.Collection("posts");
//post.collection.validate(true);
Schema={};

Schema.post = new SimpleSchema({
					   _id : {type : String},
                       maleCount:       {type: Number,    label: "Title",        max: 200  , min :0 },
                       femaleCount:       {type: Number,    label: "Title",        max: 200 , min: 0 }
                       }
                       );
Posts.attachSchema(Schema.post);

  	if(Posts.find().count() === 0)
{
	try{
	Posts.update({_id:'1'},{$set : { 'maleCount':0 , 'femaleCount' : 0}}, {upsert:true});
	Posts.insert({_id: '1' , maleCount: 0, femaleCount : 0});
	Posts.insert({_id: '0' , maleCount: 0, femaleCount : 0});
    }catch(e)
    {
     console.log(e)
    }
}


var cnt = Posts.findOne('1');
var cnt1 = Posts.findOne('0');
console.log(typeof cnt);
maleCount = cnt.maleCount;
femaleCount = cnt.femaleCount;
oldmCount = cnt1.maleCount;
oldfCount = cnt1.femaleCount;
console.log(maleCount);
console.log(femaleCount);
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