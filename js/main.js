function main() {
    const slider = document.querySelector("input");
    const value = document.querySelector("#value");
    const container = document.querySelector(".right-side");
    let count = slider.value;
    const containerHeight = container.clientHeight;
    const containerWidth = container.clientWidth;
    console.log(containerHeight);
    console.log(containerWidth);


    slider.oninput = () => {
        value.textContent = `${slider.value}x${slider.value}`;

        

    for (let index = 0; index < slider.value * slider.value; index++) {
        const boxDiv = document.createElement('div');
        boxDiv.classList.add('pixel');
        container.appendChild(boxDiv);
        count = container.querySelectorAll(".pixel").length;
    }
    for (let j = count; count > slider.value * slider.value; count--) {
        const boxDiv = document.querySelector(".pixel");
        container.removeChild(boxDiv);
    };

    let height = containerHeight / slider.value;
    let width = containerWidth / slider.value;
    console.log(height, width);
    
    const boxDivs = document.querySelectorAll(".pixel");
    boxDivs.forEach(boxDiv => boxDiv.style.height = `${height}px`); 
    boxDivs.forEach(boxDiv => boxDiv.style.width = `${width}px`); 
    };

    
};

main();