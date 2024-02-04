const dezDate=prompt("enter the date in the form of 1 jan 2024");
document.getElementById('enterDate').innerHTML=`${dezDate}`;
function countdown(){
    const reqDate=new Date(dezDate);
    const current=new Date();
     
    const sec=(reqDate-current)/1000;

    const days=Math.floor(sec/3600/24);
    const hours=Math.floor(sec/3600)%24;
    const min=Math.floor(sec/60)%60;
    const tsec=Math.floor(sec)%60;


    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('min').innerHTML = min;
    document.getElementById('sec').innerHTML = tsec;

    console.log(sec);
}
countdown();
setInterval(countdown,1000);

// daysel=document.getElementsByClassName('.days')
// daysel.innerHtml='days';