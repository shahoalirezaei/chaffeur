
let headerNavbar = document.querySelector('.header-navbar')
let burgeBar = document.querySelector('.burger-bar')

// fleet
let fleetContainer = document.querySelector('.fleet-container')
let slidesContainer = document.querySelector('.slides')
let allSlide = document.querySelectorAll('.slide')
let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')


////  navbar menu
burgeBar.addEventListener('click', event => {
    headerNavbar.classList.toggle('show')
    let classListNavbar = headerNavbar.classList.value
    if(classListNavbar.includes('show')){
        headerNavbar.style.transform = 'translateX(0px)'
    }else {
         headerNavbar.style.transform = 'translateX(300px)'
    }
})

//// fleet slider
console.log(fleetContainer.clientWidth);
let fleetContainerWidth = fleetContainer.clientWidth
let slidesContainerWidth = (allSlide.length * fleetContainerWidth) + (allSlide.length * 40) + 'px'

slidesContainer.style.width = slidesContainerWidth
console.log(slidesContainerWidth);

let turn = 0
console.log(screen.width);
function changeSlide() {

        
        console.log(turn);
        let translateXRenge = allSlide[0].clientWidth + 40
        console.log(turn*translateXRenge);
        slidesContainer.style.transform = 'translateX(-'+ turn*translateXRenge +'px)'
        checkTurnToHideButton()
        



}
function checkTurnToHideButton() {
    if(turn <= 0){
        prevBtn.style.display = 'none'
    }else {
        prevBtn.style.display = 'block'
    }
    if(screen.width < 768){
        if(turn >= allSlide.length - 1){
            nextBtn.style.display = 'none'
        }else {
            nextBtn.style.display = 'block'
        }
    }else if (768 < screen.width && screen.width < 991){
        
        if(turn >= allSlide.length - 2){
            nextBtn.style.display = 'none'
        }else {
            nextBtn.style.display = 'block'
        }
    }else if (992 < screen.width) {
        if(turn >= allSlide.length - 3){
            
            nextBtn.style.display = 'none'
        }else {
            nextBtn.style.display = 'block'
        }
    }

}

function nextSlide(n){
    turn++
    changeSlide(n)
}

function previousSlide(n){
    turn --
    changeSlide()

}


/////  js for testimonials

let currentIndex = 2

function displaySlide(n){
    currentIndex = n

    let slides = document.querySelectorAll('.driver-testimonial')
    let dots = document.querySelectorAll('.dot')

    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = 'none'
        dots[i].className = dots[i].className.replace(" active", "")
    }

    slides[currentIndex - 1].style.display = 'flex'
    dots[currentIndex - 1].className = "dot active"

}
displaySlide(currentIndex)

function currentSlide(n) {
    displaySlide(n)
}

// /////// contact
let selectCarInput = document.querySelector('.select-car input')
let icon = document.querySelector('.icon')
let selectCarOption = document.querySelector('.select-car-option')
let selectCarOptionLiElem = document.querySelectorAll('.select-car-option li')
let submitBtn =document.querySelector('.submit-btn')

/// sections element
const aboutSection = document.querySelector('.about')
const servicesSection = document.querySelector('.services')
const fleetSection = document.querySelector('.fleet')
// const ourNumbersSection = document.querySelector('.our-numbers')
// const testimonialsSection = document.querySelector('.testimonials')
const callSection = document.querySelector('.call')
// const contactSection = document.querySelector('.contact')

// navbar Items for click
const nabarItems = document.querySelectorAll('.navbar-menu-item')

nabarItems.forEach(item => {
    item.addEventListener('click', (event)=> {
        console.log(item.dataset.name);
        switch (item.dataset.name) {
            case "about":{           
                window.scrollTo(0, aboutSection.getBoundingClientRect().top)
                break;
            }
            case "services":{           
                window.scrollTo(0, servicesSection.getBoundingClientRect().top)
                break;
            }
            case "fleet":{           
                window.scrollTo(0, fleetSection.getBoundingClientRect().top)
                break;
            }
            case "contact":{           
                window.scrollTo(0, callSection.getBoundingClientRect().top)
                break;
            }
                
              
        
            default:
                break;
        }
        
    })
})


// servicesBtnNav.addEventListener('click', ()=> {
//     console.log(servicesElem.getBoundingClientRect());
//     window.scrollTo(0, 1263.828125)
    
// })

function chooseCar(){
    selectCarOption.classList.toggle('visible')
   
    let isvisible = selectCarOption.classList.value.includes('visible')
    if(isvisible){
        icon.style.transform = "rotate(-90deg)";
        selectCarOptionLiElem.forEach(item => {
            item.addEventListener('click', ()=> {
                console.log(selectCarInput.value );
                selectCarInput.value = `${item.innerHTML}`
                selectCarOption.classList.remove('visible')
                icon.style.transform = "rotate(0deg)";
                
            })
        }) 
    }else {
        icon.style.transform = "rotate(0deg)";
    }
}

icon.addEventListener('click',()=>{

    chooseCar()
})
selectCarInput.addEventListener('click',()=>{
    chooseCar()
})
submitBtn.addEventListener('click',(event)=>{
    event.preventDefault()
})





