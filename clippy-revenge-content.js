clippy.load('Clippy', function(agent){
    // do anything with the loaded agent
    agent.show();

    $('input').keypress(function(){
      agent.stop();
      agent.speak("I see you're trying to type into a field. Would you like me to help you with that?");
    });
});