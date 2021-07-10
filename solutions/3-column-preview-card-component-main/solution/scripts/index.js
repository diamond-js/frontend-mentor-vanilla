let count = 0

const logWidowSize = async function(){
    console.log("width: ", window.innerWidth, "height: ", window.innerHeight);
    count ++;

    if(count >= 10){
        count = 0
        console.clear();
    }
}

logWidowSize();

window.addEventListener('resize', logWidowSize)