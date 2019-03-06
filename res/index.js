var girl = document.getElementById('girl');
var leaf = document.getElementById('leaf');
var title = document.getElementById('title');

var interval;
var interval2;
var status = 'after';

var g_style = 0;
var l_style = 0;
var t_style = 0;

var g_index = accDiv(8, 50);
var l_index = accDiv(5, 50);
var t_index = accDiv(8, 50);

var opacity = document.getElementById('content');
var o_index = accDiv(1, 50);
var o_style = 0;

var after = document.getElementById('to_after');

var winWidth = accDiv(getWidth(), 16) + '.';
winWidth = winWidth.split('.')[0];

function to_after() {

    after.style.display = 'none';

    setTimeout(function () {
        after.style.display = 'block';
        after.innerText = '点击，返回上一页';
        after.setAttribute('onclick', 'to_before()');
    }, 1000);

    var num = 0;
    
    interval = setInterval(function () {
        
        if (num <= 50) {
            
            g_style = accSub(winWidth, accMul(g_index, num));
            l_style = accMul(l_index, num);
            t_style = accSub(winWidth, accMul(t_index, num));

            girl.style.width = g_style + 'rem';
            leaf.style.bottom = '-' + l_style + 'rem';
            title.style.width = t_style + 'rem';

            o_style = accAdd(o_style, o_index);

            if (o_style.toString.length <= 3) {
                opacity.style.opacity = o_style;
            }

            num ++;

        }else{
            clearInterval(interval);
        }

    },20);

}

function to_before() {

    after.style.display = 'none';

    setTimeout(function () {
        after.style.display = 'block';
        after.innerText = '点击，进入下一页';
        after.setAttribute('onclick', 'to_after()');
    }, 1000);

    var num = 0;
    
    interval2 = setInterval(function () {
        
        if (num <= 50) {
            
            g_style = accAdd(g_style, g_index);
            l_style = accSub(l_style, l_index);
            t_style = accAdd(t_style, t_index);

            girl.style.width = g_style + 'rem';
            leaf.style.bottom = '-' + l_style + 'rem';
            title.style.width = t_style + 'rem';

            o_style = accSub(o_style, o_index);
            if (o_style.toString.length <= 3) {
                opacity.style.opacity = o_style;
            }

            num ++;

        }else{
            clearInterval(interval2);
        }

    },20);

}

function accDiv(arg1, arg2) {
    var t1 = 0, t2 = 0, r1, r2;
    try {t1 = arg1.toString().split(".")[1].length;}catch (e) {}
    try {t2 = arg2.toString().split(".")[1].length;}catch (e) {}
    with (Math) {
        r1 = Number(arg1.toString().replace(".", ""));
        r2 = Number(arg2.toString().replace(".", ""));
        return (r1 / r2) * pow(10, t2 - t1);
    }
}

function accMul(arg1,arg2){
    var m=0,s1=arg1.toString(),s2=arg2.toString();
    try{m+=s1.split(".")[1].length}catch(e){}
    try{m+=s2.split(".")[1].length}catch(e){}
    return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m)
}

function accSub(arg1,arg2){
    var r1,r2,m,n;
    try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
    try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
    m=Math.pow(10,Math.max(r1,r2));
    //动态控制精度长度
    n=(r1>=r2)?r1:r2;
    return ((arg1*m-arg2*m)/m).toFixed(2);
}

function accAdd(arg1,arg2){ 
    var r1,r2,m;  
    try{r1=arg1.toString().split(".")[1].length;}catch(e){r1=0;}
    try{r2=arg2.toString().split(".")[1].length;}catch(e){r2=0;}
    m=Math.pow(10,Math.max(r1,r2));
    return (arg1*m+arg2*m)/m;
}

function getWidth() {
    //浏览器的兼容
    return window.innerWidth || document.documentElement.clientWidth;
}