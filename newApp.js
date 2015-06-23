counter1 = 0;
counter2 = 0;
c1=0;
c2=0;

/*function incMale(c1)
{
    this.maleCount = maleCount + c1;
    Session.set('c1' , 0);
}*/

maleCount = 0;
femaleCount = 0;

if (Meteor.isClient) {
  // counter starts at 0
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
      Session.set('counter1', Session.get('counter1') + 1);
        //incMale(c1);
      console.log(counter1);
      
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
  });
}

