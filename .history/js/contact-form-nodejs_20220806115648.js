(function () {
   const form = document.querySelector(".form-contact");
   
   function handleSubmit(event) {
       if (!form.checkValidity()) return;{
     event.preventDefault();
     const status = document.querySelector(".contact-nodejs-status");
     fetch("contacts", {
       method: "POST",
       body: JSON.strigify{
         name:document.querySelector("#contact-form > div > div > section > div.contact-form-container > form > input[name=user-name]"),
         tel:document.querySelector("#contact-form > div > div > section > div.contact-form-container > form > input[name=tel]"),
         email:document.querySelector("#contact-form > div > div > section > div.contact-form-container > form > input[name=email]"),
         comment:document.querySelector("#message")

       }),
       headers: {
           'Content-': 'application/json',
           'Accept': 'application/json'
       }
     }).then(response => {
       if (response.ok) {
         status.innerHTML = "Thanks for your submission!";
         form.reset();
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
     });}
   }
   form.addEventListener("submit", handleSubmit)
   document.querySelector(".btn-submit-nodejs").addEventListener('click', handleSubmit)

})();