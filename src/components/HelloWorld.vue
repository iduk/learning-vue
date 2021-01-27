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

    <ul class="space-y-4">
      <li>
        <div class="w-64 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600">
          1
        </div>
      </li>
      <li>
        <div class="w-56 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600">
          2
        </div>
      </li>
      <li>
        <div class="w-48 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600">
          3
        </div>
      </li>
      <li>
        <div class="w-40 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600">
          4
        </div>
      </li>
      <li>
        <div class="w-32 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600">
          5
        </div>
      </li>
      <li>
        <div
          class="w-24 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"
        ></div>
      </li>
      <li>
        <div
          class="w-20 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"
        ></div>
      </li>
      <li>
        <div
          class="w-16 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"
        ></div>
      </li>
      <li>
        <div
          class="w-12 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"
        ></div>
      </li>
      <li>
        <div
          class="w-10 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"
        ></div>
      </li>
    </ul>
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
