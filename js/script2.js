    
const words = ["هي مبادرة تعليمية مميزة","لتعزيز المعرفة والمهارات"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;
const delay = 60;
var animateCard=document.querySelectorAll('.services .card .card-photo ');
setInterval(() => {
    for (let i = 0; i < animateCard.length; i++) {
        animateCard[i].classList.add('animate')
        
       setTimeout(() => {
        animateCard[i].classList.remove('animate')
       }, 700);
         
     }
}, 3000);



document.addEventListener('scroll',function() {
     
    if (window.scrollY>=581) {
      
        
        document.getElementById('navbar-example2').style.backgroundColor='#FE5A91'
    }
    else{
         document.getElementById('navbar-example2').style.backgroundColor='#1c1c1c15'
    }
})

function typeAnimation() {
    let textElement = document.getElementById("animatedText");

    if (i < words.length) {
        if (!isDeleting && j <= words[i].length) {
            currentText = words[i].slice(0, ++j);
            textElement.textContent = currentText;
        }

        if (isDeleting && j > 0) {
            currentText = words[i].slice(0, --j);
            textElement.textContent = currentText;
        }

        if (j === words[i].length) {
            isDeleting = true;
            setTimeout(typeAnimation, 1000); 
            return;
        }

        if (isDeleting && j === 0) {
            isDeleting = false;
            i++;
        }
    } else {
        i = 0; 
    }

    setTimeout(typeAnimation, delay);
}

typeAnimation();

