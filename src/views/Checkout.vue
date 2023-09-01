<script setup>
// components
import Navbar from "../components/navbar/navbar.vue";
import Footer from "../components/footer.vue";

// flowbite
import { Button, Checkbox } from "flowbite-vue";

// icons
import GiftIcon from "../components/icons/giftIcon.vue";
import MinusIcon from "../components/icons/minusIcon.vue";
import PlusIcon from "../components/icons/plusIcon.vue";
import TrashIcon from "../components/icons/trashIcon.vue";

//
import { ref } from "vue";

const ref1 = ref(false);
</script>
<template>
  <Navbar />

  <!--  -->
  <main class="container mx-auto mt-8 px-20">
    <!--  -->
  </main>

  <Footer />
</template>

<script>
export default {
  data() {
    return {
      count: 1,
    };
  },
  methods: {
    incrementCount() {
      this.count += 1;
    },
    decrementCount() {
      if (this.count > 0) {
        this.count -= 1;
      }
    },
  },
};
</script>

<style>
</style>