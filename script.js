let form = document.querySelector('.contact-us')
let formMask = document.querySelector('.form-mask')

let clickedButton = () =>  {
     
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    formMask.style.visibility = 'visible'
}

let hideMask = () => {

    form.style.left = "-335px"
    form.style.transform = "translateX(0)"
    formMask.style.visibility = 'hidden'
}


