(function () {
   const form = document.querySelector(".form-contact");
   
   function handleSubmit(event) {
       if (!form.checkValidity()) return;
     event.preventDefault();
     const status = document.querySelector(".contact-nodejs-status");
     fetch("/contacts", {
       method: "POST",
       body: JSON.stringify ({
         name:document.querySelector("#contact-form > div > div > section > div.contact-form-container > form > input[name = user-name]").value,
         tel:document.querySelector("#contact-form > div > div > section > div.contact-form-container > form > input[name = user-tel]").value,
         email:document.querySelector("#contact-form > div > div > section > div.contact-form-container > form > input[name = user-email]").value,
         comment:document.querySelector("#message").value
       }),
       headers: {
           'Content-Type': 'application/json',
           'Accept': 'application/json'
       }
     }).then(response => {
      for (key in response) {
         console.log(key)s
      }
      console.log(typeof response);
      console.log(response);
       if (response.ok) { //
         // status.innerHTML = "Thanks for your submission!";
         document.querySelector('.contact-form-container').addClassList("nonactive");
         document.querySelector('.contact-form-message').addClassList("active");
         // form.reset();
       } else {
         response.json().then(data => {
           if (Object.hasOwn(data, 'errors')) {
             status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
           } else {
             status.innerHTML = "Oops! There was a problem submitting your form"
           }
         })
      }
     }).catch(error => {
       status.innerHTML = "Oops! There was a problem submitting your form"
     });
   }  
   // form.addEventListener("submit", handleSubmit)
   document.querySelector(".btn-submit-nodejs").addEventListener('click', handleSubmit);

})();