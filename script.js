$(document).ready(function () {
  const ele = document.querySelector(".home .home-content a");
  const ele2 = document.querySelector("#typing-1");
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navBar").addClass("sticky");
      $(".scroll-up-button").addClass("show");
      ele.style.backgroundColor = "#0c2461";
      ele.style.borderColor = "#0c2461";
      ele.style.color = "white";
      ele2.style.color = "#0c2461";

    } else {
      $(".navBar").removeClass("sticky");
      $(".scroll-up-button").removeClass("show");
      ele.style.backgroundColor = "crimson";
      ele.style.borderColor = "crimson";
      ele.style.color = "white";
      ele2.style.color = "crimson";
    }
  });
  //slide up script
  $(".scroll-up-button").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  // toggle between menu and navbar
  $(".menu-btn").click(function () {
    $(".navBar .menus").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing animation script
  var typed = new Typed("#typing-1", {
    strings: [" ", "Web Developer", "Student", "Front end Specialist"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed("#typing-2", {
    strings: [" ", "Web Developer", "Student", "Front end Specialist"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl - carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

// counters js
const lnikedIn = document.getElementById("lnikedIn");
const instagram = document.getElementById("instagram");
const facebook = document.getElementById("facebook");
const siteVisitors = document.getElementById("siteVisitors");

function counters() {
  let i = 0;
  let j = 0;
  let k = 0;
  let l = 0;
  let paji = setInterval(function () {
    if (j < 40) {
      instagram.innerHTML = j;
      j += 1;
    } else {
      clearInterval(paji);
    }
  });

  paji = setInterval(function () {
    if (i < 27) {
      lnikedIn.innerHTML = i;
      i += 1;
    } else {
      clearInterval(paji);
    }
  });

  paji = setInterval(function () {
    if (k < 40) {
      facebook.innerHTML = k;
      k += 1;
    } else {
      clearInterval(paji);
    }
  });

  paji = setInterval(function () {
    if (l < 80) {
      siteVisitors.innerHTML = l;
      l += 1;
    } else {
      clearInterval(paji);
    }
  });
}
counters();

// on read more adding contents

const dynamicContent = `
            <div class="bars">
              <div class="info">
                <span>BOOTSTRAP</span>
                <span>80%</span>
              </div>
            </div>
            <div class="line bootstrap"></div>

            <div class="bars">
              <div class="info">
                <span>SASS</span>
                <span>85%</span>
              </div>
            </div>
            <div class="line sass"></div>

            <div class="bars">
              <div class="info">
                <span>JQUERY</span>
                <span>70%</span>
              </div>
            </div>
            <div class="line jquery"></div>

            <div class="bars">
              <div class="info">
                <span>MongoDB</span>
                <span>45%</span>
              </div>
            </div>
            <div class="line mongodb"></div>

            <div class="bars">
              <div class="info">
                <span>LARAVEL</span>
                <span>55%</span>
              </div>
            </div>
            <div class="line laravel"></div>

            <div class="bars">
              <div class="info">
                <span>GIT</span>
                <span>85%</span>
              </div>
            </div>
            <div class="line git"></div>

            <div class="bars">
              <div class="info">
                <span>GITHUB</span>
                <span>65%</span>
              </div>
            </div>
            <div class="line github"></div>`;
const paraContent = `
<br>
<br>
<h2>Certifications </h2>
The web developer Bootcamp  <h4>Udemy </h4>
<br>
<h2>Work experience </h2>
Intern at <b>'Lets Grow More'<b> - (sept 2022).
<br>
<br>
<h2>Projects</h2>
<ul>
<li>Calculator</li>
<li>Todo list application</li>
<li>Stopwatch</li>
<li>Sticky Notes</li>
<li>Stone Paper Scissor Game</li>
<li>Contact Forms</li>
</ul>
`;
let counter = 1;
$("#readMore").click(function () {
  counter++;
  if (counter == 2) {
    $(".skills .column.right").append(dynamicContent);
    $(".skills p").append(paraContent);
  } else {
  }
});
