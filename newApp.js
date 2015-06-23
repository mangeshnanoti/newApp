counter1 = 0;
counter2 = 0;
c1=0;
c2=0;
maleCount = 0;
femaleCount = 0;
clk = 0
//maleCount = cnt[0].maleCount;
//femaleCount = cnt[0].femaleCount;

if (Meteor.isClient) {
  Session.setDefault('counter1', 0);
  Session.setDefault('counter2', 0);
  Session.set('maleCount', maleCount);
  Session.set('femaleCount', femaleCount);
    rec = post.find('1').fetch();
    console.log(rec[0].maleCount);
    //console.log(rec[1].maleCount);
    maleCount = rec[0].maleCount;
    console.log(rec[0].maleCount);
  Template.hello.helpers({

    counter1: function () {
      c1 = Session.get('counter1');
    
      return c1;
                         
    console.log(c1);
    

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
    }
  });

    Template.hello.events({
    'click #maleb': function () {

      // increment the counter when button is clicked
      Session.set('counter1', Session.get('counter1') + 1);
      clk++;
      console.log(clk);
      
    },

    'click #femaleb': function () {
      // increment the counter when button is clicked
      Session.set('counter2', Session.get('counter2') + 1);
    },

    'click #malec': function () {
      // increment the counter when button is clicked
      Session.set('counter1', Session.get('counter1') - 1);

    },

    'click #femalec': function () {
      // increment the counter when button is clicked
      Session.set('counter2', Session.get('counter2') - 1);
    },

    'mouseleave #maleb' : function() {
    Session.set('maleCount', maleCount);
    post.update({_id:"1"} , {$set: {'maleCount' : clk}});
    //Session.set('maleCount' , clk);
    },
                          
    'mouseleave #femaleb' : function() {
    Session.set('femaleCount', fc);
    },
                          
    'mouseleave #malec' : function() {
    Session.set('maleCount', mc);
    },
                          
    'mouseleave #femalec' : function() {
    Session.set('femaleCount', fc);
    }



  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    
  });
}

