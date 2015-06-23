post = new Mongo.Collection("posts");
Schema={};

Schema.post = new SimpleSchema({_id:{type:String},
                       maleCount:       {type: Number,    label: "Title",        max: 200 },
                       femaleCount:       {type: Number,    label: "Title",        max: 200}
                       }
                       );
post.attachSchema(Schema.post);
//post.attachSchema(pos);
cnt = {_id:"2",maleCount:10 , femaleCount:10};
isValid = Match.test(cnt, Schema.post);
//post.update(post.find('1') , $set:cnt , {$set:{'upsert':'true'}});
//post.insert(cnt);
/*post = [{'maleCount':10},{'femaleCount':10}];*/