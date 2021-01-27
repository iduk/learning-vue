<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the vue-cli documentation.
    </p>
    <div>
      <!-- Using utilities -->
      <button
        class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"
      >
        Click me
      </button>

      <!-- Extracting classes using @apply -->
      <button class="btn btn-green">
        Button
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn {
  @apply py-2 px-4 font-semibold rounded-lg shadow-md;
  outline: none;
}
.btn-green {
  @apply text-white bg-green-500 hover:bg-green-700;
}
</style>
