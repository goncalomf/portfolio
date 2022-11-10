function scrollToTop() {
    var element = document.querySelector('#topOfPage')
    element.scrollIntoView({ behavior: 'smooth'});
}

function scrollToAboutMe() {
    var element = document.querySelector('#second-section-page')
    element.scrollIntoView({ behavior: 'smooth'});
}

function scrollToEducationCertifications() {
    var element = document.querySelector('#third-section-page')
    element.scrollIntoView({ behavior: 'smooth'});
}   

function scrollToTech() {
    var element = document.querySelector('#fourth-section-page')
    element.scrollIntoView({ behavior: 'smooth'});
}   

function scrollToContacts() {
    var element = document.querySelector('#footer')
    element.scrollIntoView({ behavior: 'smooth'});
}   

function submitForm() {
    formData = new FormData(contactmeform);

    formData.append('firstname', document.getElementById("input-first-name").value)
    formData.append('secondname', document.getElementById("input-second-name").value)
    formData.append('email', document.getElementById("input-email").value)
    formData.append('message', document.getElementById("input-message").value)

    console.log(formData.get('firstname'))
    console.log(formData.get('secondname'))
    console.log(formData.get('email'))
    console.log(formData.get('message'))
}