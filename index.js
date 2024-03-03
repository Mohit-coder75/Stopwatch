// Assigning the values using an array
let [ms, sec,min,hr] = [0, 0, 0, 0];
let showTime= document.getElementById("showTime");
let timer=null;

//Created a function for the stopwatch
function stopWatch()
{
    ms += 10; //increasing millisecods by 10 after each encouter.
    if(ms == 1000) 
    {
        ms=0o0;  //when ms reaches to 1000 change ms to 00 and increment the sec.
        sec++;
        if(sec == 60) //when seconds reaches to 60, changew it to 0 and increase minutes by 1.
        {
            sec=0;
            min++;
            if(min == 60) 
            {
                min=0;
                hr++;
            }
        }
    }
    // if hour is less than 10 add a 0 prior to hours and store it in a local variable for further use purpose.
    let h=hr<10 ?"0" + hr : hr;

    let m = min<10 ? "0" + min : min;

    let s = sec < 10 ? "0" + sec : sec;
    
    let mili = ms < 10 ? "00" + ms : ms < 100 ? "0" + ms : ms;
     //latest time display...............
    showTime.innerHTML = h + ":" + m + ":" + s  + "." + ms;
} 
//function to start the stopwatch.
function watchStart()
{
    // if any ongoing interval is present (or running) stop it and then restart it 
   if(timer !== null)
   {
    clearInterval(timer);
   }
   timer=setInterval(stopWatch,10);
}
// created a function to stop the StopWatch
function watchStop(){
    // clear the previous interval
    clearInterval(timer);
}

// created a function to reset the StopWatch
function watchReset(){
    clearInterval(timer);
    // clear the previous interval and assign the default values to the timer 
    [ms, sec, min, hr] = [0, 0, 0, 0];
    showTime.innerHTML = "00:00:00.000"
}