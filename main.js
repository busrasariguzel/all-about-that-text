
const resultBiggify = document.querySelector(".biggify").addEventListener('click', function(){
    let inputBox = document.querySelector('#user-input').value
    console.log()
    document.querySelector(".result").innerText = biggify(Number(inputBox))
});

const resultNasafy = document.querySelector(".nasafy").addEventListener('click', function(){
    for (const element of nasafy()){
    let inputBox1 = document.querySelector('#user-input').value
    newOl = document.createElement('ol')
    newLi= document.createElement('li')
    newList = newLi.appendChild(newOl)
    answer = document.querySelector('.result').appendChild(newList).innerText = nasafy(Number(inputBox1))
    }
    });




const resultCrazify = document.querySelector(".crazify").addEventListener('click', function(){
    let inputBox2 = document.querySelector('#user-input').value
    console.log(inputBox2)
    document.querySelector(".result").innerText = crazify(inputBox2)
});

const resultReversify = document.querySelector(".reversify").addEventListener('click' , function(){
    let inputBox3 = document.querySelector('#user-input').value
    document.querySelector(".result").innerText = reversify(inputBox3)
});
const resultTitleify = document.querySelector(".titleify").addEventListener('click' , function(){
    let inputBox4 = document.querySelector('#user-input').value
    document.querySelector(".result").innerText = titleify(inputBox4)
});

