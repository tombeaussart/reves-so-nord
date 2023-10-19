window.onload=function(){let e=document.querySelector(".logoPlaneteContainer"),t=document.querySelector(".logoPlaneteContainer img:nth-child(1)"),n=document.querySelector(".logoPlaneteContainer img:nth-child(2)"),o=document.querySelector(".logoPlaneteContainer img:nth-child(3)"),l=document.querySelector(".logoPlaneteContainer img:nth-child(4)"),r=document.querySelector(".logoPlaneteContainer img:nth-child(5)"),a=document.querySelector(".logoPlaneteContainer img:nth-child(6)");e.addEventListener("mousemove",e=>{let c=e.screenX+1195,s=e.screenY-775;t.style.transform=`
        translate(
            ${-c/500}%,
            ${-s/500}%
    
        )`,n.style.transform=`
        translate(
            ${-c/250}%,
            ${-s/250}%
    
        )`,o.style.transform=`
        translate(
            ${-c/200}%,
            ${-s/200}%
    
        )`,l.style.transform=`
        translate(
            ${-c/200}%,
            ${-s/200}%
    
        )`,r.style.transform=`
        translate(
            ${-c/250}%,
            ${-s/250}%
    
        )`,a.style.transform=`
        translate(
            ${-c/700}%,
            ${-s/700}%
    
        )`});let c=document.querySelector(".plane");window.addEventListener("scroll",function(){c.style.transform=`translate( ${window.scrollY/8-250}%)`})};//# sourceMappingURL=index.126ea3f4.js.map

//# sourceMappingURL=index.126ea3f4.js.map
