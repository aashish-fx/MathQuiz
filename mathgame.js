var playing = false;
var score ;
var timeinterval;
document.getElementById("start").onclick = function(){
    if(playing==true){
        location.reload();
    }
    else{
        playing = true;

        score = 0;
        document.getElementById("score").innerHTML = score;
        show("time");
        document.getElementById("start").innerHTML = "Reset Game";
        timeinterval = 30;
        document.getElementById("timetaken").innerHTML = timeinterval;
        startCountdown();
        AskQ();
    }

}
function startCountdown(){
    a = setInterval(function(){timeinterval-=1; 
        document.getElementById("timetaken").innerHTML = timeinterval;if(timeinterval==0){ clearInterval(a); show("gameover");
        document.getElementById("score").innerHTML=score; hide("time");document.getElementById("start").innerHTML = "Start Game"}},1000);
}
function hide(id){
    document.getElementById(id).style.display="none";
}
function show(id){
    document.getElementById(id).style.display="block";
}

function AskQ(){
    var a = Math.floor(Math.random()*100)+1;
    var b = Math.floor(Math.random()*100)+1;
    var c = Math.floor(Math.random()*4)+1;
    var correct;
    if(c==1)
    {
        document.getElementById("sign").innerHTML='*';
        correct = a*b;
        document.getElementById("box1").innerHTML=correct;
        answer = [correct]
        for(i=1;i<5;i++)
        {
            if(i!=c)
            {
                v1 = Math.floor(Math.random()*76)+1;
                v2 = Math.floor(Math.random()*90)+1;
                while(answer.indexOf(v1*v2)>-1)
                {
                    v2 = Math.floor(Math.random()*90)+1;
                }
                answer.push(v1*v2)

                document.getElementById("box"+i).innerHTML=v1*v2;
            }
        }
        
    }
    if(c==2){
        document.getElementById("sign").innerHTML='+';
        correct = a+b;
        document.getElementById("box2").innerHTML=correct;
        answer = [correct]
        for(i=1;i<5;i++)
        {
            if(i!=c)
            {
                v1 = Math.floor(Math.random()*76)+1;
                v2 = Math.floor(Math.random()*90)+1;
                while(answer.indexOf(v1+v2)>-1)
                {
                    v2 = Math.floor(Math.random()*90)+1;
                }
                answer.push(v1+v2)

                document.getElementById("box"+i).innerHTML=v1+v2;
            }
        }
        
    }
    if(c==3){
        document.getElementById("sign").innerHTML='-';
        correct = a-b;
        document.getElementById("box3").innerHTML=correct;
        answer = [correct]
        for(i=1;i<5;i++)
        {
            if(i!=c)
            {
                v1 = Math.floor(Math.random()*76)+1;
                v2 = Math.floor(Math.random()*90)+1;
                while(answer.indexOf(v1-v2)>-1)
                {
                    v2 = Math.floor(Math.random()*90)+1;
                }
                answer.push(v1-v2)

                document.getElementById("box"+i).innerHTML=v1-v2;
            }
        }
        
    }
    if(c==4){
        document.getElementById("sign").innerHTML='/';
        correct = a/b
        correct = correct.toFixed(2);
        document.getElementById("box4").innerHTML=correct;
        answer = [correct]
        for(i=1;i<5;i++)
        {
            if(i!=c)
            {
                v1 = Math.floor(Math.random()*76)+1;
                v2 = Math.floor(Math.random()*90)+1;
                while(answer.indexOf(v1/v2)>-1)
                {
                    v2 = Math.floor(Math.random()*90)+1;
                }
                answer.push(v1/v2)

                document.getElementById("box"+i).innerHTML=(v1/v2).toFixed(2);
            }
        }
    }
    document.getElementById("q1").innerHTML = a;
    document.getElementById("q2").innerHTML = b;
    
    document.getElementById("box1").onclick=function(){
        v = document.getElementById("box1").innerHTML;
        if(v==correct)
        {   hide("wrong");
            show("correct") 
            setTimeout(function(){hide("correct")},1000)
            score+=1;
            document.getElementById("score1").innerHTML=score;    
            document.getElementById("score").innerHTML=score;
            
            timeinterval = 30;
             document.getElementById("timetaken").innerHTML = timeinterval;
             AskQ();
        }
        else{
            hide("correct");
            show("wrong");
            setTimeout(function(){hide("wrong")},1000);

        }
    }
    document.getElementById("box2").onclick=function(){
        v = document.getElementById("box2").innerHTML;
        if(v==correct)
        {   hide("wrong");
            show("correct") 
            setTimeout(function(){hide("correct")},1000)
            score+=1;
            document.getElementById("score1").innerHTML=score;  
            document.getElementById("score").innerHTML=score;    
            
            timeinterval = 30;
            document.getElementById("timetaken").innerHTML = timeinterval;
            AskQ();
        }
        else{
            hide("correct");
            show("wrong");
            setTimeout(function(){hide("wrong")},1000);

        }
    }
    document.getElementById("box3").onclick=function(){
        v = document.getElementById("box3").innerHTML;
        if(v==correct)
        {   hide("wrong");
            show("correct") 
            setTimeout(function(){hide("correct")},1000)
            score+=1;
            document.getElementById("score1").innerHTML=score; 
            document.getElementById("score").innerHTML=score;     
            
            timeinterval = 30;
            document.getElementById("timetaken").innerHTML = timeinterval;
            
            AskQ();
        }
        else{
            hide("correct");
            show("wrong");
            setTimeout(function(){hide("wrong")},1000);

        }
    }
    document.getElementById("box4").onclick=function(){
        v = document.getElementById("box4").innerHTML;
        if(v==correct)
        {   hide("wrong");
            show("correct") 
            setTimeout(function(){hide("correct")},1000)
            score+=1;
            document.getElementById("score1").innerHTML=score; 
            document.getElementById("score").innerHTML=score;     
            AskQ();
            timeinterval = 30;
            document.getElementById("timetaken").innerHTML = timeinterval;
            AskQ();
        }
        else{
            hide("correct");
            show("wrong");
            setTimeout(function(){hide("wrong")},1000);

        }
    }
    
}