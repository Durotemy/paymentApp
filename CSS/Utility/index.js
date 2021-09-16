// Decleration
let open_About = document.querySelector('.open_About')
let About_section = document.querySelector('.About_section')
let About_text = document.querySelector('.About_text')
let close_text = document.querySelector('.close_About')
let body = document.querySelector('.body')

let title = document.querySelector('#title')
let title_image = document.querySelector('.title-image')


let open_Contact = document.querySelector('.open_Contact')
let Contact_section = document.querySelector('.Contact_section')
let contact_Text = document.querySelector('.Contact_text')
let close_contact = document.querySelector('.close_contact')


// Adding Event Listener

open_Contact.addEventListener('click',() => {
    title.classList.add('show');
    Contact_section.classList.add('show')
    title_image.classList.add('imgOpacity')
    title_image.style.opacity='0.2'
    document.body.style.overflow = 'hidden';
})

close_contact.addEventListener('click', () => {
    Contact_section.classList.remove('show')
    title.classList.remove('show')
    title_image.style.opacity='0.9';
    document.body.style.overflow = 'scroll';
})


open_About.addEventListener('click', () => {
    title.classList.add('show')
    About_section.classList.add('show')
    title_image.classList.add('imgOpacity')
    title_image.style.opacity='0.2'
    document.body.style.overflow = 'hidden';
})
close_text.addEventListener('click', () => {
    About_section.classList.remove('show')
    title.classList.remove('show')
    title_image.style.opacity='0.9';
    document.body.style.overflow = 'scroll';
})
