function textChange(){
    // var inElement = document.getElementById('textIn');
    var inElement = $("#textIn").val();

    var outElement = $("#p1", "#p2");

    console.log(outElement);
    // var outElements = $("#p").val();
    var outElements = document.getElementsByTagName('p');
    console.log(outItem)
    var headingElements = document.getElementsByClassName('heading');
    for(var i=0; i<outElements.length; i++){
    var outItem = outElements[i];
    headingElements[i].innerHTML = 'Updating ' + (i+1) +
    ' to ' + inElement;
    outItem.html() = inElement;
    }
    }