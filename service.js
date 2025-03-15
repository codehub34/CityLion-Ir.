// Image Galary
const images = document.querySelectorAll('.imag-flex img');
images.forEach(image => {
  image.addEventListener('click', () => {
    const mainImage = document.querySelector('.img-main img');
    const tempScr = mainImage.src;
    mainImage.src = image.src;
    image.src = tempScr;

    mainImage.classList.add('clicked');
    setTimeout(() => {
      mainImage.classList.remove('clicked');
    }, 1000);
  });
});


const openNav = document.querySelector('.openbtn');
const closeNav = document.querySelector('.closebtn');
const sidebar = document.querySelector('.sidebar');
const main = document.querySelector('.main');

openNav.addEventListener('click', () => {
  sidebar.style.height = '100%';
  main.style.marginBottom = '100%';
}
);

closeNav.addEventListener('click', () => {
  sidebar.style.height = '0';
  main.style.marginBottom = '0';
}
); 

const headerBar = document.querySelector('.container');
const menuItem = document.querySelectorAll('.MenuItems');
const btnHome = document.querySelector('.contact-btn');
const btnN = document.querySelector('.btn1');

window.onscroll = function() { 
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        headerBar.style.backgroundColor = '#ffffff';
        menuItem.forEach(item => {
            item.style.color = '#840505';
        });
        btnHome.style.backgroundColor = '#840505';
        btnN.style.color = 'white';
    } else {
        headerBar.style.backgroundColor = 'transparent';
        menuItem.forEach(item => {
            item.style.color = 'white'; 
        });
        btnHome.style.backgroundColor = 'white';
        btnN.style.color = '#840505';
    }
};

// Hover effect for btnHome
btnHome.addEventListener('mouseover', function() {
    btnHome.style.backgroundColor = '#840505';
    btnN.style.color = 'white';
});
btnHome.addEventListener('mouseout', function() {
    if (document.body.scrollTop <= 100 && document.documentElement.scrollTop <= 100) {
        btnHome.style.backgroundColor = 'white';
        btnN.style.color = '#840505'; 
    }
});

const scrolldown = document.querySelector('.scrolldown');
scrolldown.addEventListener('click', () => {
  window.scrollTo({
    top: 800,
    behavior: 'smooth'
  });
}
);
