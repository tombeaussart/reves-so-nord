window.onscroll=function(){!function(){let e=document.documentElement.clientHeight,t=document.documentElement.scrollTop;t>e-1?document.getElementById("navbar").style.top="0":document.getElementById("navbar").style.top="-100px"}()},window.onload=function(){let e=document.querySelector(".logoPlaneteContainer"),t=document.querySelector(".logoPlaneteContainer img:nth-child(1)"),n=document.querySelector(".logoPlaneteContainer img:nth-child(2)"),o=document.querySelector(".logoPlaneteContainer img:nth-child(3)"),l=document.querySelector(".logoPlaneteContainer img:nth-child(4)"),r=document.querySelector(".logoPlaneteContainer img:nth-child(5)"),a=document.querySelector(".logoPlaneteContainer img:nth-child(6)");e.addEventListener("mousemove",e=>{let c=e.screenX+1195,m=e.screenY-775;t.style.transform=`
        translate(
            ${-c/500}%,
            ${-m/500}%
    
        )`,n.style.transform=`
        translate(
            ${-c/250}%,
            ${-m/250}%
    
        )`,o.style.transform=`
        translate(
            ${-c/200}%,
            ${-m/200}%
    
        )`,l.style.transform=`
        translate(
            ${-c/200}%,
            ${-m/200}%
    
        )`,r.style.transform=`
        translate(
            ${-c/250}%,
            ${-m/250}%
    
        )`,a.style.transform=`
        translate(
            ${-c/700}%,
            ${-m/700}%
    
        )`});let c=document.querySelector(".plane");window.addEventListener("scroll",function(){c.style.transform=`translate( ${window.scrollY/5-250}%)`})};//# sourceMappingURL=index.1995f96c.js.map

//# sourceMappingURL=index.1995f96c.js.map
