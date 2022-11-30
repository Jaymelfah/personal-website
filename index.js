(function () {
  var width,
    height,
    largeHeader,
    canvas,
    ctx,
    points,
    target,
    animateHeader = true;

  // Main
  initHeader();
  initAnimation();
  addListeners();

  function initHeader() {
    width = window.innerWidth;
    height = window.innerHeight;
    target = { x: width / 2, y: height / 2 };

    largeHeader = document.getElementById("large-header");
    largeHeader.style.height = height + "px";

    canvas = document.getElementById("canvas");
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext("2d");

    // create points
    points = [];
    for (var x = 0; x < width; x = x + width / 20) {
      for (var y = 0; y < height; y = y + height / 20) {
        var px = x + (Math.random() * width) / 20;
        var py = y + (Math.random() * height) / 20;
        var p = { x: px, originX: px, y: py, originY: py };
        points.push(p);
      }
    }

    // for each point find the 5 closest points
    for (var i = 0; i < points.length; i++) {
      var closest = [];
      var p1 = points[i];
      for (var j = 0; j < points.length; j++) {
        var p2 = points[j];
        if (!(p1 == p2)) {
          var placed = false;
          for (var k = 0; k < 5; k++) {
            if (!placed) {
              if (closest[k] == undefined) {
                closest[k] = p2;
                placed = true;
              }
            }
          }

          for (var k = 0; k < 5; k++) {
            if (!placed) {
              if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                closest[k] = p2;
                placed = true;
              }
            }
          }
        }
      }
      p1.closest = closest;
    }

    // assign a circle to each point
    for (var i in points) {
      var c = new Circle(
        points[i],
        2 + Math.random() * 2,
        "rgba(255,255,255,0.3)"
      );
      points[i].circle = c;
    }
  }

  // Event handling
  function addListeners() {
    if (!("ontouchstart" in window)) {
      window.addEventListener("mousemove", mouseMove);
    }
    window.addEventListener("scroll", scrollCheck);
    window.addEventListener("resize", resize);
  }

  function mouseMove(e) {
    var posx = (posy = 0);
    if (e.pageX || e.pageY) {
      posx = e.pageX;
      posy = e.pageY;
    } else if (e.clientX || e.clientY) {
      posx =
        e.clientX +
        document.body.scrollLeft +
        document.documentElement.scrollLeft;
      posy =
        e.clientY +
        document.body.scrollTop +
        document.documentElement.scrollTop;
    }
    target.x = posx;
    target.y = posy;
  }

  function scrollCheck() {
    if (document.body.scrollTop > height) animateHeader = false;
    else animateHeader = true;
  }

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    largeHeader.style.height = height + "px";
    canvas.width = width;
    canvas.height = height;
  }

  // animation
  function initAnimation() {
    animate();
    for (var i in points) {
      shiftPoint(points[i]);
    }
  }

  function animate() {
    if (animateHeader) {
      ctx.clearRect(0, 0, width, height);
      for (var i in points) {
        // detect points in range
        if (Math.abs(getDistance(target, points[i])) < 4000) {
          points[i].active = 0.3;
          points[i].circle.active = 0.6;
        } else if (Math.abs(getDistance(target, points[i])) < 20000) {
          points[i].active = 0.1;
          points[i].circle.active = 0.3;
        } else if (Math.abs(getDistance(target, points[i])) < 40000) {
          points[i].active = 0.02;
          points[i].circle.active = 0.1;
        } else {
          points[i].active = 0;
          points[i].circle.active = 0;
        }

        drawLines(points[i]);
        points[i].circle.draw();
      }
    }
    requestAnimationFrame(animate);
  }

  function shiftPoint(p) {
    TweenLite.to(p, 1 + 1 * Math.random(), {
      x: p.originX - 50 + Math.random() * 100,
      y: p.originY - 50 + Math.random() * 100,
      // ease: Circ.easeInOut,
      onComplete: function () {
        shiftPoint(p);
      }
    });
  }

  // Canvas manipulation
  function drawLines(p) {
    if (!p.active) return;
    for (var i in p.closest) {
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.closest[i].x, p.closest[i].y);
      ctx.strokeStyle = "rgba(156,217,249," + p.active + ")";
      ctx.stroke();
    }
  }

  function Circle(pos, rad, color) {
    var _this = this;

    // constructor
    (function () {
      _this.pos = pos || null;
      _this.radius = rad || null;
      _this.color = color || null;
    })();

    this.draw = function () {
      if (!_this.active) return;
      ctx.beginPath();
      ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = "rgba(156,217,249," + _this.active + ")";
      ctx.fill();
    };
  }

  // Util
  function getDistance(p1, p2) {
    return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
  }
})();


const info = document.querySelector(".information");
const container = document.querySelector(".content");
const about = document.querySelector(".linkabout");
const blog = document.querySelector(".linkblog");
const projects = document.querySelector(".linkprojects");
const contact = document.querySelector(".linkcontact");
const close = document.getElementById("closebtn");

about.addEventListener("click", () => {
  container.style.display = "none";
  document.body.classList.add("displayprofile");
  info.innerHTML = `<h3>About</h3>
  <i id="closebtn" class="fa-solid fa-circle-xmark"></i>
  <p>Hi friends! My name is Jeremiah and my passion is to develop software applications that make the world a better place to live in. I am open to work and looking for my next developer job! Some projects I recently completed include developing an e-commerce application and an interactive Quiz app using React. I’m currently developing an application for a car rental company called Aldo to increase its reach and customer base.</p>`;
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-circle-xmark")) {
    document.body.classList.remove("displayprofile");
    container.style.display = "block";
  }
});

blog.addEventListener("click", () => {
  container.style.display = "none";
  document.body.classList.add("displayprofile");
  info.innerHTML = `<i id="closebtn" class="fa-solid fa-circle-xmark"></i>
  <p>How I began my Coding Journey
   <a href="https://medium.com/@jerasterix/how-i-began-my-coding-journey-fb278c3671cd">
   <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
   </p>`;
});

projects.addEventListener("click", () => {
  container.style.display = "none";
  document.body.classList.add("displayprofile");
  info.innerHTML = `
  <i id="closebtn" class="fa-solid fa-circle-xmark"></i>
  <ul>
   <li>Cryto-Market 
     <a href="https://effervescent-stroopwafel-cbea62.netlify.app/">Live
     <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
     <a href="https://github.com/Jaymelfah/crypto-market.git"><i class="fa-brands fa-github"></i></a>
   </li>

   <li>Space-travelers-hub 
   <a href="https://sthub.netlify.app/">Live
   <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
   <a href="https://github.com/Jaymelfah/space-travelers-hub.git"><i class="fa-brands fa-github"></i></a>
 </li>

 <li>Pokedex 
 <a href="https://kaizipaul.github.io/module-2-capstone/">Live
 <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
 <a href="https://github.com/Jaymelfah/Pokedex.git"><i class="fa-brands fa-github"></i></a>
</li>

<li>Quizzical 
<a href="https://elaborate-empanada-0e9a43.netlify.app/">Live
<i class="fa-solid fa-arrow-up-right-from-square"></i></a>
<a href="https://github.com/Jaymelfah/Quizzical.git"><i class="fa-brands fa-github"></i></a>
</li>

<li>Math Magician 
<a href="https://chic-blini-714a0e.netlify.app/">Live
<i class="fa-solid fa-arrow-up-right-from-square"></i></a>
<a href="https://github.com/Jaymelfah/Math-Magician.git"><i class="fa-brands fa-github"></i></a>
</li>

<li>Leaderboard 
<a href="https://jaymelfah.github.io/Leaderboard/dist/">Live
<i class="fa-solid fa-arrow-up-right-from-square"></i></a>
<a href="https://github.com/Jaymelfah/Leaderboard.git"><i class="fa-brands fa-github"></i></a>
</li>
  </ul>`;
});

contact.addEventListener('click', () => {
  container.style.display = "none";
  document.body.classList.add("displayprofile");
  info.innerHTML = `
  <i id="closebtn" class="fa-solid fa-circle-xmark"></i>
  <ul class="contact flex">
   <li>
     <a href="https://www.linkedin.com/in/jeremiah-melfah"><i class="fa-brands fa-linkedin"></i></a>
   </li>
    <li>
      <a href="https://github.com/Jaymelfah"><i class="fa-brands fa-github"></i></a>
    </li>
    <li>
      <a href="https://twitter.com/JMelfah1"><i class="fa-brands fa-twitter"></i></a>
    </li>
    <li>
      <a href="https://medium.com/@jerasterix"><i class="fa-brands fa-medium"></i></a>
    </li>
  </ul>`;
});
