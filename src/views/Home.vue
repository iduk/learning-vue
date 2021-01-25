<template>
  <section :class="$style.container">
    <div :class="$style.boxing">
      <img alt="Vue logo" src="../assets/logo.png" />
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss" module>
$primary-color: #e1f5ff;

.container {
  background-color: #0b3144;
  color: white;
  .boxing {
    padding: 3rem;
  }
}
</style>
