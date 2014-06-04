clippy.load('Clippy', function(agent){
    // do anything with the loaded agent
  agent.show();

  var callsf = function(yescall){
    return function(){
      $('.clippyyes').click(function(ev){
        ev.preventDefault();
        yescall();
        agent.stopCurrent();
        agent.stop();
        agent.speak("Done.");
        agent.play('EmptyTrash');
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


  var urlchangy = function(){
    var yescall = function(){window.location.href = 'http://champd.com/';}
    agent.speak("I can't help but notice you are on some stupid web page. Want to let me just take you to a cool page?<br /><br /><a href=\"#\" class=\"clippyyes\">YES</a>    <a href=\"#\" class=\"clippyno\">NO</a>", true, callsf(yescall));
  };

  var insulty = function(){
    agent.play('GetAttention');
    agent.speak("You are bad at web browsing, and you should feel bad.");
  };

  var formfilly = function(){
    if(($('input').length == 0) && ($('textarea').length == 0)){return;}

    var yescall = function(){
      $('input').val('Clippy input');
      $('textarea').val('You can fill this part out with alot of text! Bet you didnt know that!');
    };
    agent.play('Wave');
    agent.speak("Did you know there are some forms to fill out on this page? Want me to fill them out for you?<br /><br /><a href=\"#\" class=\"clippyyes\">YES</a>    <a href=\"#\" class=\"clippyno\">NO</a>", true, callsf(yescall));
  };

  var scrolly = function(){
    var yescall = function(){
      var toScroll = $('body').scrollTop() + 500;
      $('body').scrollTop(toScroll);
    }
    agent.speak("You seem to be taking your time. Want me to scroll down for you?<br /><br /><a href=\"#\" class=\"clippyyes\">YES</a>    <a href=\"#\" class=\"clippyno\">NO</a>", true, callsf(yescall));
  };

  var cat1 = function(){
    agent.play('GetTechy');
    agent.speak("Did you know, the term \"surfing the web\" came about when a popular surfer ran into a spider web while on his laptop?");
  };

  var cat2 = function(){
    agent.speak("Web fact: the internet was first created by Gilbert von Interneterhausen. True story.");
  };

  var cat3 = function(){
    agent.speak("Web fact: Internet Explorer is the worst. No one likes it. No one likes developing for it.");
  };

  var cat4 = function(){
    agent.play('Pleased');
    agent.speak("Hmmm.... yes indeed.");
  };

  var cat6 = function(){
    var yescall = function(){
      $('a').css({ color: "red", background: "blue" });
    }
    agent.speak("Hey did you know there are links on this page? Want me to highlight them for you?<br /><br /><a href=\"#\" class=\"clippyyes\">YES</a>    <a href=\"#\" class=\"clippyno\">NO</a>", true, callsf(yescall));
  };

  var cat7 = function(){
    agent.speak("Web fact: the internet was first created by Gilbert von Interneterhausen. True story.");
  };

  var animate = function(){
    agent.animate();
  }

  $('#clippy-2b3aef30-125c-11e2-892e-0800200c9a66').click(function(){
    agent.stopCurrent();
    agent.stop();
    agent.animate();
  });

  $('body').ajaxStart(function() {
    agent.stopCurrent();
    agent.stop();
    agent.speak("Sending request in the background...");
    agent.play('Processing');
  });

  $('body').ajaxSuccess(function() {
    agent.stopCurrent();
    agent.stop();
    agent.speak("Background request succeeded in some way!")
    agent.play('Congratulate');
  });

  $('body').ajaxError(function() {
    agent.stopCurrent();
    agent.stop();
    agent.speak("Something went horribly wrong with the background request!")
    agent.animate();
  });

  $('body').ajaxComplete(function() {
    agent.stopCurrent();
    agent.stop();
  });

  var arr = [
    urlchangy,
    insulty,
    cat1,
    cat2,
    cat3,
    cat4,
    cat6,
    cat7,
    animate,
    formfilly,
    scrolly,
    animate
  ]
  window.setInterval(function(){
    var fun = arr[Math.floor(Math.random()*arr.length)];
    if(!clippy.isEmpty()){
      fun();
    }
  }, 10000);
});
