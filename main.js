const backButton = document.getElementById('backbutton')
const frontButton = document.getElementById('frontbutton')
const boxInner = document.getElementById('boxInner')


frontButton.addEventListener('click', ()=>{
    boxInner.style.transform = 'rotateY(-180deg)'
})
backButton.addEventListener('click', ()=>{
    boxInner.style.transform = 'rotateY(0deg)'
})