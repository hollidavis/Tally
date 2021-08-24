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
        <p class="blockquote bg-white rounded-bottom m-0 p-3 shadow">
          Tally was born at Boise CodeWorks, a software development bootcamp. Every day at lunch we would play board games together and compete for the high score. When it came time to begin working on a large project for our portfolios we all wanted to take our lunchtime leaderboard and grow it into a full stack application.
        </p>
      </div>
      <!-- The Team -->
      <div class="col-md-6 mb-3">
        <h1 class="text-center bg-dark-pink rounded-top m-0 shadow">
          The Team:
        </h1>
        <ul class="list-group">
          <!-- Aaron -->
          <li class="list-group-item d-flex align-items-center p-2">
            <img src="http://placehold.it/100x100/" alt="Aaron Peet Picture">
            <h3 class="m-0 ml-4">
              Aaron Peet
            </h3>
          </li>
          <!-- Amanda -->
          <li class="list-group-item d-flex align-items-center p-2">
            <img src="http://placehold.it/100x100/" alt="Amanda Rice Picture">
            <h3 class="m-0 ml-4">
              Amanda Rice
            </h3>
          </li>
          <!-- Holli -->
          <li class="list-group-item d-flex align-items-center p-2">
            <img src="http://placehold.it/100x100/" alt="Holli Davis Picture">
            <h3 class="m-0 ml-4">
              Holli Davis
            </h3>
          </li>
          <!-- Tim -->
          <li class="list-group-item d-flex align-items-center p-2">
            <img src="http://placehold.it/100x100/" alt="Timothy Kimble Picture">
            <h3 class="m-0 ml-4">
              Timothy Kimble
            </h3>
          </li>
          <!-- Veronica -->
          <li class="list-group-item d-flex align-items-center p-2">
            <img src="http://placehold.it/100x100/" alt="Veronica Blake Picture">
            <h3 class="m-0 ml-4">
              Veronica Blake
            </h3>
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
</style>
