window.addEventListener('DOMContentLoaded',function(){

    var main = document.querySelector('main');
    var logo=document.querySelector('#logo');
    
    setTimeout(function(){

        main.className="visible";

    },300);

    main.addEventListener("mouseover",function(){
        this.className="over";
        logo.className="upsidedown";
    });
    main.addEventListener("mouseout",function(){
        this.className="visible";
        logo.className="";
    });    
    
    

});