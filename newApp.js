/*post = new Mongo.Collection("posts");

post = [{'maleCount':10},{'femaleCount':10}];*/

counter1 = 0;
counter2 = 0;
c1=0;
c2=0;

/*function incMale(c1)
{
    this.maleCount = maleCount + c1;
    Session.set('c1' , 0);
}*/


//post.attachSchema(ManCount);

// post.createCollection('malec');
// post.createCollection('femalec');
/*mc = post.findOne('maleCount');
fc = post.findOne('femaleCount');*/
maleCount = 0;
femaleCount = 0;

if (Meteor.isClient) {
  // counter starts at 0
  //maleCount = post.findOne('maleCount').fetch();
  //femaleCount = post.findOne('femaleCount').fetch();;
  Session.setDefault('counter1', 0);
  Session.setDefault('counter2', 0);
  Session.set('maleCount', maleCount);
  Session.set('femaleCount', femaleCount);
    
    

  Template.hello.helpers({

    counter1: function () {
      c1 = Session.get('counter1');
      //Session.set('maleCount', maleCount+c1);
    
      return c1;
                         
      //return counter1;
    console.log(c1);
    

    },
    counter2: function () {
    
      c2 = Session.get('counter2');
      return c2;
      
      //return counter2;
    },
                         
    maleCount: function() {
    mc = Session.get('maleCount'); 
    return  mc;
    },
                         
    femaleCount: function() {
    fc = Session.get('femaleCount');
    return fc;
    }
  });

    Template.hello.events({
    'click #maleb': function () {
      // increment the counter when button is clicked
                          //maleCount=maleCount+c1
      Session.set('counter1', Session.get('counter1') + 1);
        //incMale(c1);
                        //Session.set('maleCount', maleCount+c1);
     // a = post.insert({'maleCount' : counter1});
      console.log(counter1);
      
    },

    'click #femaleb': function () {
      // increment the counter when button is clicked
      Session.set('counter2', Session.get('counter2') + 1);
     // post.insert({'maleCount' : counter2});
    },

    'click #malec': function () {
      // increment the counter when button is clicked
      Session.set('counter1', Session.get('counter1') - 1);
     // post.insert({'maleCount' : counter1});

    },

    'click #femalec': function () {
      // increment the counter when button is clicked
      Session.set('counter2', Session.get('counter2') - 1);
     // post.insert({'femaleCount' : counter2});
    },

    'mouseleave #maleb' : function() {
    Session.set('maleCount', maleCount);
      //Session.set('maleCount', mc);
                          
    },
                          
    'mouseleave #femaleb' : function() {
    Session.set('femaleCount', fc);
    },
                          
    'mouseleave #malec' : function() {
    Session.set('maleCount', mc);
    },
                          
    'mouseleave #femalec' : function() {
    Session.set('femaleCount', mc);
    }



  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
   // maleCount = post.findOne('maleCount');
  });
}

