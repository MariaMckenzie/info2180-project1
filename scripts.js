"use strict";

/*
  JAVASCRIPT FOR INDEX.html
  Maria McKenzie
*/

//LOAD THE DOCUMENT
document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementsByTagName("form")[0];
  let btn = document.getElementsByClassName("btn")[1];

  console.log(email);
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    //console.log(document.querySelector(".message").innerHTML = "Thank you!");
    //console.log(document.querySelector("#email").value);
    
    document.querySelector(".message").innerHTML = "Thank you! Your email address "
                                                    + document.querySelector("#email").value
                                                    +" has been added to our mailing lists!";
  });
});
