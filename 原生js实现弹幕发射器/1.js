var accept = document.getElementsByClassName("accept-box")[0];
var Input = document.getElementById("input-box");
var btn = document.getElementById('btn');

btn.addEventListener('click',function(){
    if(Input.value==""){
        alert('请重新输入')
    }else{
        event();
        Input.value='';
        return;
    }
})

function event(){
    var barrage = document.createElement('div');
    barrage.className = 'danmu';
    barrage.style.left = '600px';
    barrage.style.top = 20*Math.floor(Math.random()*10) + 'px';
    var color1 = parseInt(Math.random()*256);
    var color2 = Math.floor(Math.random()*256);
    var color3 = Math.floor(Math.random()*256);
    // barrage.style.color = "rgb('+'color1'+','+color2+','+color3+')";
    barrage.style.color = "rgb("+color1+","+color2+","+color3+")";
    
    console.log(typeof(barrage.style.left));
  
    barrage.innerHTML = Input.value;
    accept.appendChild(barrage);

    var timer = setInterval(function(){
        if(parseInt(barrage.style.left) == -100){
            accept.removeChild(barrage);
            clearInterval(timer);
        }else{
            barrage.style.left = parseInt(barrage.style.left) - 1 +'px'}
    },10)

}

