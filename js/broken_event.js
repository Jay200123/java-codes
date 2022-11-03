function clickHandler(e,objId,num,msg){
    var obj = document.getElementById(objId);
    obj.innerHTML = 'DIV ' + num + ' says ' + msg +' at X postion: ' + e.screenX;
    }

    //heading = objId
    function yesWrapper(e){
    clickHandler(e, 'heading', 1, 'Yiiiee nag Yes Syaa hehehe');
    e.target.removeEventListener('click', yesWrapper);
    }
    function noWrapper(e){
    clickHandler(e, 'heading', 2, 'Wawa Ka Naman');
    e.target.removeEventListener('click', noWrapper);
    }
    function onloadHandler(){
    document.getElementById('div1').addEventListener('click', yesWrapper, false);
    document.getElementById('div2').addEventListener('click', noWrapper, false);
    }