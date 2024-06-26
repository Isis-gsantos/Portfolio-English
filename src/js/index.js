//Typing effect
document.addEventListener('DOMContentLoaded', () => {
    const phrases = [
        "Hello! My name is Isis Gonçalves Santos",
        "I'm a Frontend Developer"
    ];

    const outputElement = document.getElementById('typed-output');
    var index = 0;
    var charIndex = 0;

    function type() {
        outputElement.textContent += phrases[index][charIndex];
        charIndex++;

        if (charIndex < phrases[index].length) {
            setTimeout(type, 50);
        } else {
            setTimeout(erase, 1000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            outputElement.textContent = phrases[index].substring(0, charIndex - 1);
            charIndex--;

            setTimeout(erase, 50);
        } else {
            index = (index + 1) % phrases.length;
            setTimeout(type, 500);
        }
    }

    type();
});

//Fading animation
const controller = new ScrollMagic.Controller();
const elements = document.querySelectorAll('.fading');

elements.forEach((element, index) => {
    const scene = new ScrollMagic.Scene({
        triggerElement: element,
        triggerHook: 0.8,
    })
        .on('enter', function () {
            element.classList.add('show');
            scene.off('enter');
        })
        .addTo(controller);
});


//Show and hide e-mail button
const socials = document.querySelectorAll('.show-info');
const showInfo = document.querySelectorAll('.social-email');

socials.forEach((social, index) => {
    social.addEventListener('click', () => {
        showInfo[index].classList.toggle('show-email')
    })
})

//A button that returns to the top of the page
document.addEventListener('DOMContentLoaded', function () {
    const btnTop = document.getElementById("up-arrow");

    btnTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            btnTop.style.opacity = "1";
        } else {
            btnTop.style.opacity = "0";
        }
    });
});