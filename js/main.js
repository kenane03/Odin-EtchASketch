function main() {
    const slider = document.querySelector("input");
    const value = document.querySelector("#value");
    const container = document.querySelector(".right-side");
    const resetBtn = document.querySelector("#reset-btn");
    const colorBtns = document.querySelectorAll(".color-btn");
    let count = slider.value;
    const containerHeight = container.clientHeight;
    const containerWidth = container.clientWidth;
    let colorValue = "black";

    colorBtns.forEach(button => button.addEventListener("click", () => {
        switch (button.textContent) {
            case "BLACK":
                colorValue = "black";
                break;
            case "GREY":
                colorValue = "grey";
                break;
            case "RED":
                colorValue = "red";
                break;
            case "GREEN":
                colorValue = "green";
                break;
            case "BLUE":
                colorValue = "blue";
                break;
        }
    }))
    


    for (let index = 0; index < slider.value * slider.value; index++) {
        const boxDiv = document.createElement('div');
        boxDiv.classList.add('pixel');
        container.appendChild(boxDiv);
        count = container.querySelectorAll(".pixel").length;
    }
    let height = containerHeight / slider.value;
    let width = containerWidth / slider.value;
    console.log(height, width);
    
    const boxDivs = document.querySelectorAll(".pixel");
    boxDivs.forEach(boxDiv => boxDiv.style.height = `${height}px`); 
    boxDivs.forEach(boxDiv => boxDiv.style.width = `${width}px`);


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

    boxDivs.forEach(boxDiv => boxDiv.addEventListener("mouseover", () => {
        boxDiv.style.backgroundColor = colorValue;

    
    }))
    resetBtn.addEventListener("click", () => {
        boxDivs.forEach(boxDiv => boxDiv.style.backgroundColor = "white");
    })
    };


    boxDivs.forEach(boxDiv => boxDiv.addEventListener("mouseover", () => {
        boxDiv.style.backgroundColor = colorValue;
    }))

    resetBtn.addEventListener("click", () => {
        boxDivs.forEach(boxDiv => boxDiv.style.backgroundColor = "white");
    })

    

    
};

main();