// var targetpos = 1000;
// var currentpos = 0;
// var scrollToTarget = setInterval(function(){
//     if(currentpos >= targetpos)
//     {
//         clearInterval(scrollToTarget);
//     }
//     currentpos +=50;
//     window.scrollBy(0, 50);
// }, 50);
let anchorlinks = document.querySelectorAll('a[href^="#"]')
 
for (let item of anchorlinks) { // relitere 
    item.addEventListener('click', (e)=> {
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval)
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        history.pushState(null, null, hashval)
        e.preventDefault()
    })
}
var progressBar = document.querySelectorAll('.skill-progress>div');
var skillsContainer = document.getElementById('skills-container');
window.addEventListener('scroll', checkScroll);
var animationDone = false;

function initialiseBars() {
    for(let bar of progressBar)
    {
        bar.style.width = 0 +'%';
    }
}
initialiseBars();
function fillBars() {
    for(let bar of progressBar)
    {
        let percentage = bar.getAttribute('data-bar-width');
        let count=0;
        var increment = setInterval(function(){
            if(count > percentage){
                clearInterval(increment);
                return;
            }
            count++;
            bar.style.width = count +'%';
        },3);
    }
}

function checkScroll(){
    var coordinates = skillsContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top <= window.innerHeight)
    {
        fillBars();
        animationDone = true;
    }
    else if(coordinates.top > window.innerHeight)
    {
        initialiseBars();
        animationDone = false;
    }
}