let classNames = document.querySelectorAll('[className]')

classNames.forEach((className, index) => {
    let names = className.getAttribute('className').split(' ');
    names.forEach((name) => {
        className.classList.add(name);
    })
    className.removeAttribute('className')
})

let count = 0;
function showWindowSize(){
    console.log(`width: ${window.innerWidth} Height: ${window.innerHeight}`);
    count ++ ;
    if (count >= 10) {
        count = 0;
        console.clear();
    }
}

showWindowSize();
window.onresize = showWindowSize;