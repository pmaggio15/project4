// template_yvmnzs9
// service_aou6bn7
//CI_FwyBFaqAfQM_CS

 function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";

    emailjs
        .sendForm (
            'service_aou6bn7' ,
            'template_yvmnzs9',
            event.target,
            'CI_FwyBFaqAfQM_CS'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }).catch(() => {
        loading.classList += " modal__overlay--visible"
        alert(
            "The email service is temporarily unavailable. Please contact me directly on pmaggio15@gmail.com"
        );
    })
}


let isModalOpen = false; 
function toggleModal() {
    if (ismodalOpen) {
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = !isModalOpen;
    document.body.classList += " modal--open";
}