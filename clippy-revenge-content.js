clippy.load('Clippy', function(agent){
    // do anything with the loaded agent
    agent.show();

    $('input').keypress(function(){
      agent.stop();
      agent.speak("I see you're trying to type into a field. Would you like me to help you with that?");
    });

    $('textarea').keypress(function(){
      agent.stop();
      agent.play('Writing');
    });

    $('a').live('click', function(cevent) {
      classes = $(this).attr('class');
      if(/clippy/.test(classes)){return;}

      red = $(this).attr('href');
      agent.stop();
      agent.play('GetAttention');
      var callsb = function(){
        $('.clippyyes').click(function(ev){
          ev.preventDefault();
          window.location.href = red;
        });

        $('.clippyno').click(function(ev){
          ev.preventDefault();
          agent.stop();
          agent.speak("I thought not.");  
        });
      }

      agent.speak("Looks like you are trying to click on a link! Are you sure you want to click on this thing?<br /><br /><a href=\"#\" class=\"clippyyes\">YES</a>    <a href=\"#\" class=\"clippyno\">NO</a>", true, callsb);
      cevent.preventDefault();
    });
});