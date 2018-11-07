//javascript document


window.onload=function () {
    var wrap=document.getElementById('hc_wrap');

    var prev=document.getElementsByClassName('prev')[0];//注意prev[0]  getelementbyclassname返回是数组
    var next=document.getElementsByClassName('next')[0];

    var p2 = document.getElementsByClassName('p2')[0];//获取图片对象
    var p1 = document.getElementsByClassName('p1')[0];
    var p3 = document.getElementsByClassName('p3')[0];

    var imgObj = [p1,p2,p3];//图片数组

    prev.onclick=function () {
        hc(imgObj,false);
    }
    next.onclick=function(){
        hc(imgObj,true);
    }

    var imgTime=window.setInterval(hc(imgObj,true),4000); //带参函数执行定时器需注意函数内return

    wrap.onmouseover=function (){
        window.clearInterval(imgTime);
    }
    wrap.onmouseout=function (){
        var imgTime=window.setInterval(hc(imgObj,true),4000);
    }
}

//js获取css样式函数
/*

function getElementStyle(obj,attr){

    if(obj.currentStyle){
        return obj.currentStyle[attr];  //兼容ie
    }
    else{
        return window.getComputedStyle(obj,false)[attr];
    }
}

*/

//数组循环移动  boolean值为移动方向 true为正向（右）  false则相反
function arrRecyc(arr,boolean) {
    if(boolean==true){
        var temp=arr.shift();
        arr.push(temp);

    }
    else if(boolean==false){
        var temp=arr.pop();
        arr.unshift(temp);
    }
    else{
        return;
    }
}
//imgObjArr为图片数组  boolean控制轮转方向  true正向（右移） false反向（左移）
function hc(imgObjArr,boolean) {
    //定义一个轮转函数
    var i;  //轮转变量
    var num = [//参数变量数组
        ['matrix(0.85,0,0,0.85,-200,0)', '3', '0.8'],
        ['', '4', '1'],
        ['matrix(0.85,0,0,0.85,200,0)', '3', '0.8']
    ];
    arrRecyc(imgObjArr,boolean);//图片移动
    for(i=0;i<3;i++){
        imgObjArr[i].style.transform=num[i][0];
        imgObjArr[i].style.zIndex=num[i][1];
        imgObjArr[i].style.opacity=num[i][2];
    }

    return function () {
        hc(imgObjArr,boolean);              //保证定时器
    }
};

