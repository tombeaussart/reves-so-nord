window.onload = function () {

    const logoPlaneteContainer = document.querySelector('.logoPlaneteContainer');
    const comete = document.querySelector('.logoPlaneteContainer img:nth-child(1)');
    const planet4 = document.querySelector('.logoPlaneteContainer img:nth-child(2)');
    const planet1 = document.querySelector('.logoPlaneteContainer img:nth-child(3)');
    const planete_rouge = document.querySelector('.logoPlaneteContainer img:nth-child(4)');
    const planete_bleue = document.querySelector('.logoPlaneteContainer img:nth-child(5)');
    const logo = document.querySelector('.logoPlaneteContainer img:nth-child(6)');



    logoPlaneteContainer.addEventListener('mousemove', e => {
        const x = (e.screenX) + 1195;
        const y = (e.screenY) - 775;

        comete.style.transform = `
        translate(
            ${-x / 500}%,
            ${-y / 500}%
    
        )`
        planet4.style.transform = `
        translate(
            ${-x / 250}%,
            ${-y / 250}%
    
        )`
        planet1.style.transform = `
        translate(
            ${-x / 200}%,
            ${-y / 200}%
    
        )`
        planete_rouge.style.transform = `
        translate(
            ${-x / 200}%,
            ${-y / 200}%
    
        )`
        planete_bleue.style.transform = `
        translate(
            ${-x / 250}%,
            ${-y / 250}%
    
        )`
        logo.style.transform = `
        translate(
            ${-x / 700}%,
            ${-y / 700}%
    
        )`
    })

    const plane = document.querySelector('.plane');


    window.addEventListener('scroll', function () {
        plane.style.transform = `translate( ${(window.scrollY / 5) - 250}%)`
    })
}