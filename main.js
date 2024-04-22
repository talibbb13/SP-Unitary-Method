function calculateMe() {
  let fr = document.getElementById("first-rupee").value;
  let fi = document.getElementById("first-item").value;
  let sr = document.getElementById("second-rupee").value;
  let si = document.getElementById("second-item").value;



  if (isNaN(fr) || fr == "") {
    // ADD errorThrow CLASS NAME
    document.getElementsByClassName("showAns")[0].classList.add("errorThrow");
    // MAKING VISIBILITY 
    document.getElementsByClassName("showAns")[0].style.visibility = 'visible';
    // SENDING MSG OF ERROR
    document.getElementById("showCase").innerHTML = "Oops! Invalid Character in First Amount ☹️";
    // REMOVING MSG AFTER 3s
    setTimeout(function() {
      document.getElementsByClassName("showAns")[0].style.visibility = 'hidden';
    }, 3000)
  }

  else if (isNaN(fi) || fi == "") {
    document.getElementsByClassName("showAns")[0].classList.add("errorThrow");
    document.getElementsByClassName("showAns")[0].style.visibility = 'visible';
    document.getElementById("showCase").innerHTML = "Oops! Invalid Character in First Quantity ☹️";

    setTimeout(function() {
      document.getElementsByClassName("showAns")[0].style.visibility = 'hidden';
    }, 3000)
  }
  else if (isNaN(sr) && sr != "?" || sr == "") {
    document.getElementsByClassName("showAns")[0].classList.add("errorThrow");
    document.getElementsByClassName("showAns")[0].style.visibility = 'visible';
    document.getElementById("showCase").innerHTML = "Oops! Invalid Character in Second Amount ☹️";

    setTimeout(function() {
      document.getElementsByClassName("showAns")[0].style.visibility = 'hidden';
    }, 3000)
  }

  else if (isNaN(si) && si != "?" || si == "") {
    document.getElementsByClassName("showAns")[0].classList.add("errorThrow");
    document.getElementsByClassName("showAns")[0].style.visibility = 'visible';
    document.getElementById("showCase").innerHTML = "Oops! Invalid Character in Second Quantity ☹️";

    setTimeout(function() {
      document.getElementsByClassName("showAns")[0].style.visibility = 'hidden';
    }, 3000)
  }
  else if (sr == "?" && si == "?" || sr == "" && si == "" || sr == "?" && si == "" || sr == "" && si == "?") {
    document.getElementsByClassName("showAns")[0].style.visibility = 'visible';
    document.getElementById("showCase").innerHTML = "Oops! Invalid Character in Second Amount and Quantity."
    setTimeout(function() {
      document.getElementsByClassName("showAns")[0].style.visibility = 'hidden';
    }, 3000)
  }

  else if (si == "?") {
    document.getElementsByClassName("show-ans")[0].style.visibility = 'visible';
    let calculation = (fi * sr) / fr;
    document.getElementById("show-case").innerHTML = "Your Answer is " + calculation;
  }

  else if (sr == "?") {
    document.getElementsByClassName("show-ans")[0].style.visibility = 'visible';
    let calculation = (fr * si) / fi;
    document.getElementById("show-case").innerHTML = "Answer is " + calculation;
  }

  else {
    document.getElementsByClassName("show-ans")[0].style.visibility = 'visible';
    document.getElementById("show-case").innerHTML = "Please Put only Numbers in the Inputs !"
  }
}