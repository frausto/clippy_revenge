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

    $('button').click(function(event) {
      agent.stop();
      agent.play('GetAttention');
      agent.speak("Looks like you are trying to click on a button! Are you sure you want to click on this thing?");
      event.preventDefault();
      $.trigger(event); 
    });

    $('a').click(function(event) {
      agent.stop();
      agent.play('GetAttention');
      agent.speak("Looks like you are trying to click on a link! Are you sure you want to click on this thing?<br /><div class=\"clippyyes\">YES</div>", true);
      $('.clippyyes')
      event.preventDefault();
      $.trigger(event); 
    });
});