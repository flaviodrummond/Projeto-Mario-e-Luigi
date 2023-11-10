let form = document.querySelector('.contact-us')
let formMask = document.querySelector('.form-mask')

let clickedButton = () =>  {
     
    formMask.style.visibility = 'visible'
    return form.style.left = "750px";
}

let submitForm = () => form.style.left = "-320px"