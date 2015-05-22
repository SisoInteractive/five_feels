/**
 * Created by Administrator on 2015/1/13 0013.
 */
(function(){

    /* 添加用户窗口事件 改变根字号大小 */

    document.body.addEventListener('touchstart',function(){});
    function addEvent(obj,type,fn){
        if(obj.addEventListener){
            obj.addEventListener(type,fn,false);
        } else {
            obj.attachEvent('on'+type,fn);
        }
    }
    function autoSize(){
        var win_W = $(".container").width();
            var font = Math.round(win_W / 16);
            var HTML=document.getElementById('html');
            if(win_W==360 || win_W==361){
                font=22;
                console.log(font);
            }
            HTML.style.fontSize = font + 'px';


    }
    addEvent(window,'load',autoSize);
    addEvent(window,'resize',autoSize);
    /*  end 添加用户窗口事件 */


})()
