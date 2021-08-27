<template>
  <div class="col-md-11 col-12 d-flex align-items-center bg-white rounded shadow mt-2 py-3">
    <h1>{{ member.name }}</h1>
    <!-- <div class="p-0 d-flex mr-3">
      <img class="profile-img" :src="player.picture" :alt="player.name">
    </div>
    <h5 class="m-0 text-break">
      {{ player.name }}
    </h5> -->
  </div>
</template>

<script>
export default {
  props: {
    member: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-img{
  border-radius: 50%;
  height: 13vh;
  width: 13vh;
  object-fit: cover;
  object-position: center;
}
</style>
