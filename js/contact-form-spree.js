(function () {
    const form = document.querySelector(".form-contact");
    
    function handleSubmit(event) {
        if (!form.checkValidity()) return;{
      event.preventDefault();
      const status = document.querySelector(".contact-formspree-status");
      fetch("https://formspree.io/f/mdobrzrj", {
        method: "POST",
        body: new FormData(form),
        headers: {
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
    // form.addEventListener("submit", handleSubmit)
    document.querySelector(".btn-submit-spree").addEventListener('click', handleSubmit)
    // document.querySelector(".btn-submit-nodejs")

    // window.onbeforeunload = () => {
    //     for(const form of document.querySelector(".form-contact")) {
    //       form.reset();
    //     }
    //   }
})();