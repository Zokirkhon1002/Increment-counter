let counter = document.querySelectorAll(".counter");

counter.forEach(counter => {
    counter.innerText = '0';

    let upadateCounter = () => {
        let target = +counter.getAttribute("data-target");

        let newInputValue = +counter.innerText;
        
        let increment = target  / 200;

        if(newInputValue < target) {
            counter.innerText = `${Math.ceil(newInputValue + increment)}`;
            setTimeout(upadateCounter, 1)
        } else {
            counter.innerText = target;
        }
    }
    upadateCounter();
})