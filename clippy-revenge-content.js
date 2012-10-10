clippy.load('Clippy', function(agent){
    // do anything with the loaded agent
  agent.show();

  var callsf = function(yescall){
    return function(){
      $('.clippyyes').click(function(ev){
        ev.preventDefault();
        yescall();
      });

      $('.clippyno').click(function(ev){
        ev.preventDefault();
        agent.stopCurrent();
        agent.stop();
        agent.speak("I thought not.");
        agent.play('EmptyTrash');
      });
    }
  }

  $('input').keypress(function(){
    agent.stop();
    agent.play('Writing');
  });

  $('textarea').keypress(function(){
    agent.stop();
    agent.play('Writing');
  });

  $('a').live('click', function(cevent) {
    classes = $(this).attr('class');
    if(/clippy/.test(classes)){return;}


    var yescall = function(){window.location.href = $(this).attr('href');}
    agent.stop();
    agent.play('GetAttention');
    agent.speak("Looks like you are trying to click on a link! Are you sure you want to click on this thing?<br /><br /><a href=\"#\" class=\"clippyyes\">YES</a>    <a href=\"#\" class=\"clippyno\">NO</a>", true, callsf);
    cevent.preventDefault();
  });


  
  var urlchangy = function(){
    var yescall = function(){window.location.href = 'https://github.com/frausto';}
    agent.speak("I can't help but notice you are on some stupid web page. Want to let me just take you to a cool page?<br /><br /><a href=\"#\" class=\"clippyyes\">YES</a>    <a href=\"#\" class=\"clippyno\">NO</a>", true, callsf(yescall));
  };

  var insulty = function(){
    agent.speak("You are bad at web browsing, and you should feel bad.");
  };

  var formfilly = function(){
    var yescall = function(){};
    agent.play('Wave');
    agent.speak("Did you know there are some forms to fill out on this page? Want me to fill them out for you?<br /><br /><a href=\"#\" class=\"clippyyes\">YES</a>    <a href=\"#\" class=\"clippyno\">NO</a>", true, callsf(yescall));
  };

  var scrolly = function(){
    var yescall = function(){}
    agent.speak("You seem to be taking your time. Want me to scroll you to the bottom of the page?<br /><br /><a href=\"#\" class=\"clippyyes\">YES</a>    <a href=\"#\" class=\"clippyno\">NO</a>", true, callsf(yescall));
  };

  var talky = function(){
    var yescall = function(){window.location.href = 'https://github.com/frausto';}
    agent.speak("I can't help but notice you are on some stupid web page. Want to let me just take you to a cool page?<br /><br /><a href=\"#\" class=\"clippyyes\">YES</a>    <a href=\"#\" class=\"clippyno\">NO</a>", true, callsf(yescall));
  };

  var cat1 = function(){
    agent.speak("Did you know, in ancient Egypt killing a cat was punishable by death? Mee-wow!");
  };

  var movey = function(){
    agent.speak("Woah whats happening?!?! I feel flighty!!! Woooaaahhhhhhh! Where am I going to end up?!?! Don't worry you can click and drag me back");
    agent.moveTo(100,100);
    agent.moveTo(200,50);
    agent.moveTo(50,100);
    agent.moveTo(50,200);
    agent.moveTo(200,200);
  };


  var arr = [urlchangy, insulty, movey, talky, formfilly, scrolly, cat1]
  window.setTimeout(arr[Math.floor(Math.random()*arr.length)](), 60);
});