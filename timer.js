var count = 5;
started = false;

function start() {

  if (started) {return};
  var start_time = new Date(); 
  var stop_time = start_time.setMinutes(start_time.getMinutes() + count); 


  var countdown = setInterval(function() {

    var now = new Date().getTime();

    var remain = stop_time - now; 

    var min = Math.floor( (remain % (1000 * 60 * 60)) / (1000 * 60) );
    var sec = Math.floor( (remain % (1000 * 60)) / 1000 );

    sec = sec < 10 ? "0" + sec : sec;

    document.getElementById("timer").innerHTML = min + ":" + sec;

    if (remain < 0) {

      clearInterval(countdown);

      document.getElementById("timer").innerHTML = "Конец";
     }
  }, 1000);

  started = true;
}