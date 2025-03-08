let popupDismissed = false;

function createPopup() {
  if (popupDismissed) return;

  const popUp = document.createElement("div");

  popUp.innerHTML = `
    <div id='popUp'>
      <p style="font-size: 18px">This site uses cookies to help improve your user experience.</p>
      <button id="dismissBtn">Dismiss</button>
      <button id="acceptBtn">Accept</button>
      <p>Click here to see our <a href="#" id="privacy">Privacy Notice</a></p>
    </div>
  `;

  popUp.style.backgroundColor = '#0505b1';
  popUp.style.position = 'fixed';
  popUp.style.bottom = '30px';
  popUp.style.padding = '20px';
  popUp.style.textAlign = 'center';
  popUp.style.color = 'white';
  popUp.style.width = '100%';
  popUp.style.margin ='' ;
  popUp.style.height = '150px'

  document.body.appendChild(popUp);

  document.getElementById("dismissBtn").addEventListener("click", function () {
    popUp.remove();
    popupDismissed = true;
  });

  document.getElementById("acceptBtn").addEventListener("click", function () {
    alert('Cookies accepted');
    popUp.remove();
    popupDismissed = true;
  });
}
const popupInterval = setInterval(createPopup, 2000);



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

const weAreImage = document.querySelector('.imgscroll');
window.addEventListener('scroll', () => {
  if (window.scrollY > 150) {
    weAreImage.style.transform = 'translateY(-10px)';
  } else {
    weAreImage.style.transform = 'translateY(0)';
  }
});
  