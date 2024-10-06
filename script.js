const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


//   let url = "https://script.google.com/macros/s/AKfycbzWMuEajUXjNABzWHesGEzyqVntxkBDaCGqtwAMOmVxqpd2WNJBO-2rQ7HFb6YOyHwb4w/exec";
//   let form = document.querySelector('#form');
//   form.addEventListener("submit", (e) => {
//     let d = new FormData(form);
//     fetch(url, {
//       method: "POST",
//       body: d
//     }).then((res) => res.text())
//     .then((finalRes) => {
//       console.log(finalRes);
//       // Show a success message in a popup
//       alert("Your message has been successfully submitted! We will get back to you soon.");
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//       alert("Something went wrong. Please try again.");
//     });

//     e.preventDefault();
//   });


let url = "https://script.google.com/macros/s/AKfycbzWMuEajUXjNABzWHesGEzyqVntxkBDaCGqtwAMOmVxqpd2WNJBO-2rQ7HFb6YOyHwb4w/exec";
  let form = document.querySelector('#form');
  form.addEventListener("submit", (e) => {
    let d = new FormData(form);
    fetch(url, {
      method: "POST",
      body: d
    }).then((res) => res.text())
    .then((finalRes) => {
      console.log(finalRes);
      // Trigger Bootstrap modal popup
      let myModal = new bootstrap.Modal(document.getElementById('contactModal'));
      myModal.show();
    })
    .catch((error) => {
      console.error('Error:', error);
      alert("Something went wrong. Please try again.");
    });

    e.preventDefault();
  });


