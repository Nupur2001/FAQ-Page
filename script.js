let toggleButtons=document.querySelectorAll(".toggle")
toggleButtons.forEach(toggleButton=>{
    toggleButton.addEventListener('click',()=>{
        toggleButton.parentNode.classList.toggle("active")
        // toggleButton.classList.toggle("active")
    })
})
