//javascript document


window.onload=function () {
    var wrap=document.getElementById('hc_wrap');

    var prev=document.getElementsByClassName('prev')[0];//注意prev[0]  getelementbyclassname返回是数组
    var next=document.getElementsByClassName('next')[0];

    var p2 = document.getElementsByClassName('p2')[0];//获取图片对象
    var p1 = document.getElementsByClassName('p1')[0];
    var p3 = document.getElementsByClassName('p3')[0];

    var spanEle=document.getElementsByClassName('bar')[0].getElementsByTagName('span'); //获取底部导航条三个节点，保存在barSpan数组中
    var imgObj = [p1,p2,p3];//图片数组
    var barSpan = [spanEle[0],spanEle[1],spanEle[2]]
    barSpan[1].style.backgroundColor='yellow';//初始状态

    prev.onclick=function () {
        hc(imgObj,false);
    }
    next.onclick=function(){
        hc(imgObj,true);
    }

    //var imgTime=window.setInterval(function(){hc(imgObj,true)},4000);  //setInterval执行带参数函数的一种实现
    var imgTime=window.setInterval(hc,4000,imgObj,true);


    //鼠标移入画布停止轮播，移出继续轮播
    wrap.onmouseover=function (){
        //console.log(imgTime);
        window.clearInterval(imgTime);
    }
    wrap.onmouseout=function (){

        imgTime=window.setInterval(hc,4000,imgObj,true);
        //console.log(imgTime);
    }




    //数组循环移动  boolean值为移动方向 true为正向（右）  false则相反
    function arrRecyc(arr,boolean) {
        if(boolean==true){
            var temp=arr.shift();
            arr.push(temp);
            temp=barSpan.shift();
            barSpan.push(temp);

        }
        else if(boolean==false){
            var temp=arr.pop();
            arr.unshift(temp);
            temp=barSpan.pop();
            barSpan.unshift(temp);
        }

    }
    //imgObjArr为图片数组  boolean控制轮转方向  true正向（右移） false反向（左移）
    function hc(imgObjArr,boolean) {
        barSpan[1].style.backgroundColor='aquamarine';
        //定义一个轮转函数
        var i;  //轮转变量
        var num = [//参数变量数组
            ['matrix(0.85,0,0,0.85,-200,0)', '3', '0.8'],
            ['matrix(1,0,0,1,0,0)', '4', '1'],
            ['matrix(0.85,0,0,0.85,200,0)', '3', '0.8']
        ];
        arrRecyc(imgObjArr, boolean);//图片移动
        for (i = 0; i < 3; i++) {
            imgObjArr[i].style.transform = num[i][0];
            imgObjArr[i].style.zIndex = num[i][1];
            imgObjArr[i].style.opacity = num[i][2];
        }
        barSpan[1].style.backgroundColor='yellow';
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



