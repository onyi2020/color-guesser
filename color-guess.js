var numofBoxes = 6;
var colors = generateColorArray(numofBoxes);
var boxes = document.querySelectorAll('.box');
var displayedColor = document.querySelector('#preferredColor');
var statusdisplay = document.querySelector('#status');
var header = document.querySelector('.heading');
var selectedColor = generateRandomColor();
var newColors = document.querySelector('#generatenewcolors');
var easy = document.querySelector('#easy');
var hard = document.querySelector('#hard');
var secondContainer = document.querySelector('.second');
var firstContainer = document.querySelector('first')


newColors.addEventListener('click', function(){
    colors = generateColorArray(numofBoxes);
    selectedColor = generateRandomColor();
    displayedColor.textContent = selectedColor;
    for (var i = 0; i < boxes.length; i++){
        boxes[i].style.backgroundColor = colors[i];
    }
    header.style.backgroundColor = 'black';
    newColors.textContent = 'New Colors'
    statusdisplay.textContent = "";
});

displayedColor.textContent = selectedColor;
function changeBoxColor(color){
    for (var i = 0; i < boxes.length; i++){
        boxes[i].style.backgroundColor = color;
    }
}

easy.addEventListener('click', function(){
    this.classList.add('selected');
    hard.classList.remove('selected');
    numofBoxes = 3;
    colors = generateColorArray(numofBoxes);
    selectedColor = generateRandomColor();
    displayedColor.textContent = selectedColor;
    for (var i = 0; i < boxes.length; i++){
        boxes[i].style.backgroundColor = colors[i];
    }
    secondContainer.style.display='none';
})

hard.addEventListener('click', function(){
    this.classList.add('selected');
    easy.classList.remove('selected');
    numofBoxes = 6;
    colors = generateColorArray(numofBoxes);
    selectedColor = generateRandomColor();
    for (var i = 0; i < boxes.length; i++){
        boxes[i].style.backgroundColor = colors[i];
    }
    secondContainer.style.display='block';
})

for (var i = 0; i < boxes.length; i++){
    boxes[i].style.backgroundColor = colors[i];
    boxes[i].addEventListener('click', function(){
        var clickedBox = this.style.backgroundColor;
        if(clickedBox === selectedColor){
                changeBoxColor(selectedColor);
                statusdisplay.textContent = "Correct!!";
                header.style.backgroundColor = selectedColor;
                newColors.textContent = 'Play Again?'
            } else{
                this.style.backgroundColor = "green";
                statusdisplay.textContent = "You are wrong!!"
                newColors.textContent = 'Play Again'
            };
        })
}


function generateRandomColor(){
    var generateColors =  Math.floor((Math.random() * colors.length));
    return colors[generateColors];
}

function generateColorArray(num){
    var arr = [];
    for (var i = 0; i < num; i++){
        arr.push(arrayColors())
    }
    return arr;
}

function arrayColors(){
    var r = Math.floor((Math.random() * 255));
    var g = Math.floor((Math.random() * 255));
    var b = Math.floor((Math.random() * 255));

    return 'rgb'+'('+ r +', ' + g + ', ' + b + ')';    
}

