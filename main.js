// const inputBox = document.querySelector('#user-input').value
// let numberVersion = Number(inputBox)

const resultText = document.querySelector(".biggify").addEventListener('click', function(){
    let inputBox = document.querySelector('#user-input').value
    console.log()
    document.querySelector(".result").innerText = biggify(Number(inputBox))
});


