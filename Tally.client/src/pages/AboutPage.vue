<template>
  <div class="container-fluid">
    <Navbar />
    <div class="row justify-content-around flex-row">
      <!-- Mission Statement -->
      <div class="col-md-5 mb-3">
        <h1 class="text-center bg-dark-pink rounded-top m-0 shadow">
          Mission Statement:
        </h1>
        <p class="blockquote bg-white rounded-bottom m-0 p-3 mb-3 shadow">
          Tally exists to provide a space which fosters friendly competition by making hosting and scoring game nights a breeze.
        </p>
        <!-- Our Story -->
        <h1 class="text-center bg-dark-pink rounded-top m-0 shadow">
          Our Story:
        </h1>
        <p class="blockquote bg-white rounded-bottom m-0 p-3 mb-3 shadow">
          Tally was born at Boise CodeWorks, a software development bootcamp. Every day at lunch we would play board games together and compete for the high score. When it came time to begin working on a large project for our portfolios we all wanted to take our lunchtime leaderboard and grow it into a full stack application.
        </p>
        <h1 class="text-center bg-dark-pink rounded-top m-0 shadow">
          Demo:
        </h1>
        <div class="bg-white rounded-bottom shadow p-3">
          <video width="100%" height="" controls>
            <source src="../assets/img/tally.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <!-- The Team -->
      <div class="col-md-6 mb-3">
        <h1 class="text-center bg-dark-pink rounded-top m-0 shadow">
          The Team:
        </h1>
        <ul class="rounded-bottom p-0">
          <!-- Aaron -->
          <li class="list-group-item d-flex p-2">
            <!-- Photo -->
            <div>
              <img class="rounded profile-img" src="../assets/img/teamphotos/Aaron.jpeg" alt="Aaron Peet Picture">
            </div>
            <!-- About -->
            <div class="ml-3">
              <!-- Name -->
              <h3>
                Aaron Peet
              </h3>
              <!-- Links-->
              <a class="pointer text-dark" href="https://github.com/aaronpeet"><p>
                <span class="fab fa-lg fa-github mr-2"></span>GitHub
              </p></a>
              <a class="pointer text-dark" href="https://www.linkedin.com/in/aaron-peet/"><p class="m-0">
                <span class="fab fa-lg fa-linkedin mr-2"></span>LinkedIn
              </p></a>
            </div>
          </li>
          <!-- Amanda -->
          <li class="list-group-item d-flex p-2">
            <!-- Photo -->
            <div>
              <img class="rounded profile-img" src="../assets/img/teamphotos/Amanda.jpg" alt="Amanda Rice Picture">
            </div>
            <!-- About -->
            <div class="ml-3">
              <!-- Name -->
              <h3>
                Amanda Rice
              </h3>
              <!-- Links-->
              <a class="pointer text-dark" href="https://github.com/amanda-rice"><p>
                <span class="fab fa-lg fa-github mr-2"></span>GitHub
              </p></a>
              <a class="pointer text-dark" href="https://www.linkedin.com/in/amanda--rice/"><p class="m-0">
                <span class="fab fa-lg fa-linkedin mr-2"></span>LinkedIn
              </p></a>
            </div>
          </li>
          <!-- Holli -->
          <li class="list-group-item d-flex p-2">
            <!-- Photo -->
            <div>
              <img class="rounded profile-img" src="../assets/img/teamphotos/Holli.jpg" alt="Holli Davis Picture">
            </div>
            <!-- About -->
            <div class="ml-3">
              <!-- Name -->
              <h3>
                Holli Davis
              </h3>
              <!-- Links-->
              <a class="pointer text-dark" href="https://github.com/hollidavis"><p>
                <span class="fab fa-lg fa-github mr-2"></span>GitHub
              </p></a>
              <a class="pointer text-dark" href="https://www.linkedin.com/in/holli-davis/"><p class="m-0">
                <span class="fab fa-lg fa-linkedin mr-2"></span>LinkedIn
              </p></a>
            </div>
          </li>
          <!-- Timothy -->
          <li class="list-group-item d-flex p-2">
            <!-- Photo -->
            <div>
              <img class="rounded profile-img" src="../assets/img/teamphotos/Timothy.png" alt="Timothy Kimble Picture">
            </div>
            <!-- About -->
            <div class="ml-3">
              <!-- Name -->
              <h3>
                Timothy Kimble
              </h3>
              <!-- Links-->
              <a class="pointer text-dark" href="https://github.com/TimothyKimble"><p>
                <span class="fab fa-lg fa-github mr-2"></span>GitHub
              </p></a>
              <a class="pointer text-dark" href="https://www.linkedin.com/in/timothykimble/"><p class="m-0">
                <span class="fab fa-lg fa-linkedin mr-2"></span>LinkedIn
              </p></a>
            </div>
          </li>
          <!-- Veronica -->
          <li class="list-group-item d-flex p-2">
            <!-- Photo -->
            <div>
              <img class="rounded profile-img" src="../assets/img/teamphotos/Veronica.jpg" alt="Veronica Blake Picture">
            </div>
            <!-- About -->
            <div class="ml-3">
              <!-- Name -->
              <h3>
                Veronica Blake
              </h3>
              <!-- Links-->
              <a class="pointer text-dark" href="https://github.com/VeronicaBlake"><p>
                <span class="fab fa-lg fa-github mr-2"></span>GitHub
              </p></a>
              <a class="pointer text-dark" href="https://www.linkedin.com/in/veronica-blake-noyce/"><p class="m-0">
                <span class="fab fa-lg fa-linkedin mr-2"></span>LinkedIn
              </p></a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.profile-img{
  height: 15vh;
  width: 15vh;
  object-fit: cover;
  object-position: center;
}
</style>
