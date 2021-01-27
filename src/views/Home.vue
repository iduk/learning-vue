<template>
  <section :class="$style.container">
    <div :class="$style.boxing">
      <img alt="POS Image" src="@/assets/img/pos.svg" />
      <HelloWorld msg="learning Vue😎" />
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
    text-align: center;
    > img {
      display: inline-block;
      width: 400px;
      height: auto;
    }
  }
}
</style>
