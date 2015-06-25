counter1 = 0;
counter2 = 0;
c1=0;
c2=0; 
x=0;
y=0;


maleCount = 0;
femaleCount = 0;
 
clk = 0;
clk1 = 0;


if (Meteor.isClient) {
cnt = Posts.findOne();
maleCount = cnt.maleCount;
femaleCount = cnt.femaleCount;
counter1 = maleCount;
counter2 = femaleCount;


  Session.setDefault('counter1', counter1);
  Session.setDefault('counter2', counter2);
  Session.set('maleCount', maleCount);
  Session.set('femaleCount', femaleCount);
  Template.hello.helpers({

    counter1: function () {

      c1 = Session.get('counter1');
      return c1;
      console.log(mlcnt);

      },

    counter2: function () {
    
      c2 = Session.get('counter2');
      return c2;
      
    },
                         
    maleCount: function() {
    mc = Session.get('maleCount'); 
    return  mc;
    },
                         
    femaleCount: function() {
    fc = Session.get('femaleCount');
    return fc;
    },

    Posts: function() {
      return Posts;

    }

  });

    Template.hello.events({
    'click #maleb': function () {
      //getCount1();
      
      // increment the counter when button is clicked
      Session.set('counter1', Session.get('counter1') + 1);
      clk++;
      console.log("Number of Clicks - " + clk);
      maleCount++;

      Posts.update({_id:1} , {$set: { 'maleCount' : clk } });
      
    },

    'click #femaleb': function () {
      // increment the counter when button is clicked
      
      Session.set('counter2', Session.get('counter2') + 1);
      clk1++;
      femaleCount++;
      Posts.update({_id:1} , {$set: { 'femaleCount' : clk1 } } );
    },

    'click #malec': function () {
      // increment the counter when button is clicked
      
      Session.set('counter1', Session.get('counter1') - 1);
      clk--;

      Posts.update({_id:"1"} , {$set: { 'maleCount' : clk } } );

    },

    'click #femalec': function () {
      
      // increment the counter when button is clicked
      Session.set('counter2', Session.get('counter2') - 1);
      clk1--;
      Posts.update({_id:"1"} , {$set: { 'femaleCount' : clk1 } });
    },

    'mouseleave #maleb' : function() {
    //rec = getCount();

    //Posts.update({_id:"1"} , {$set: {'maleCount' : clk}} );
    //clk = clk+maleCount;
    //Posts.update({_id:"0"} , {$set: {'maleCount' : clk}});

    Session.set('maleCount', maleCount);
    //Session.set('maleCount' , clk);

    },
                          
    'mouseleave #femaleb' : function() {
    Session.set('femaleCount', fc);
    //Posts.update({_id:"1"} , {$set: {'femaleCount' : clk1 } } );
    },
                          
    'mouseleave #malec' : function() {
    Session.set('maleCount', mc);
    //Posts.update({_id:"1"} , {$set: {'maleCount' : clk } } );
    },
                          
    'mouseleave #femalec' : function() {
    Session.set('femaleCount', fc);
    //Posts.update({_id:"1"} , {$set: {'femaleCount' : clk1 } } );
    }



  });
}


