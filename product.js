
const btn = document.getElementById('button');
        const userReply = document.querySelector('.userReply');

        document.getElementById('form').addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Clear previous error messages
            const errorMessages = document.querySelectorAll(".error-message");
            errorMessages.forEach(error => error.remove());
            
            let isValid = true;

            // Full Name validation
            const fullName = document.getElementById("from_name").value;
            if (fullName.trim() === "") {
                showError("from_name", "Full Name is required.");
                isValid = false;
            }

            // Email validation
            const email = document.getElementById("email_Id").value;
            if (!validateEmail(email)) {
                showError("email_Id", "Invalid email format.");
                isValid = false;
            }

            // Phone validation
            const phone = document.getElementById("phone_Id").value;
            if (!validatePhone(phone)) {
                showError("phone_Id", "Invalid phone number.");
                isValid = false;
            }

            // Message validation
            const message = document.getElementById("message").value;
            if (message.trim() === "") {
                showError("message", "Message is required.");
                isValid = false;
            }

            // If all fields are valid, submit the form data
            if (isValid) {
                btn.value = 'Sending...';

                const serviceID = 'default_service';
                const templateID = 'template_7xdyasn';

                emailjs.sendForm(serviceID, templateID, this)
                    .then(() => {
                        btn.value = 'Send Email';
                        alert('Sent!');
                        setTimeout(() => {
                            userReply.innerHTML = `Thank you ${fullName} for contacting us!`;
                        }, 1000);

                        setTimeout(() => {
                            userReply.innerHTML = '';
                        }, 5000);
                    }, (err) => {
                        btn.value = 'Send Email';
                        alert(JSON.stringify(err));
                    });

                document.getElementById('form').reset();
            }
        });

        function showError(fieldId, message) {
            const field = document.getElementById(fieldId);
            const errorDiv = document.createElement("div");
            errorDiv.className = "error-message";
            errorDiv.innerText = message;
            field.parentNode.appendChild(errorDiv);
        }

        function validateEmail(email) {
            const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            return re.test(email);
        }

        function validatePhone(phone) {
            const re = /^\+?[1-9]\d{1,14}$/;
            return re.test(phone);
        }


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
