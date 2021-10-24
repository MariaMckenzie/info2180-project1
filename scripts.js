"use strict";

/*
  JAVASCRIPT FOR INDEX.html
  Maria McKenzie
*/

//LOAD THE DOCUMENT
document.addEventListener("DOMContentLoaded", () => {
  let email = document.getElementById("email").value;
  let forms = document.getElementsByTagName("form");
  let form = forms[0];
  let btns = document.getElementsByClassName("btn");
  let btn = btns[1];

  //console.log(btn.value);
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    //document.getElementsByClassName("message").innerHTML = "Thank you! Your email address "
                                                        //    + email
                                        //                    +" has been added to our mailing lists!";;
    console.log(email);
  });
});
