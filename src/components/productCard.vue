<script setup>
import { TheCard, Button, Badge } from "flowbite-vue";

import CartIcon from "./icons/cartIcon.vue";
</script>
<template>
  <the-card variant="image" :img-src="image" img-alt="Laptop" class="relative">
    <span
      v-if="isDiscount"
      class="absolute top-0 right-0 my-2 text-white bg-gradient-to-r from-[#ef4f4f] to-[#ca1f1f] text-base px-5 py-1 rounded-l"
    >
      Diskon 70%
    </span>
    <span
      v-if="isPopular"
      class="absolute top-0 right-0 my-2 text-white bg-gradient-to-r from-yellow-400 to-yellow-300 text-base px-5 py-1 rounded-l"
    >
      Rating Tertinggi
    </span>
    <span
      v-if="isNew"
      class="absolute top-0 right-0 my-2 text-white bg-gradient-to-r from-indigo-400 to-indigo-300 text-base px-5 py-1 rounded-l"
    >
      Produk Baru
    </span>
    <!--  -->
    <div
      v-if="hasColors"
      class="absolute bottom-[100px] left-1/2 -translate-x-1/2 inline-flex w-full items-end"
    >
      <p
        class="text-sm w-full px-5 bg-white pt-2 rounded-r font-semibold text-purple-500"
      >
        Varian Warna
      </p>
      <span
        class="inline-flex items-center justify-center w-full h-[15px] bg-[#9692aa] cursor-pointer"
        @click="changeLaptopColor('/src/assets/product/laptop/2.png')"
      ></span>
      <span
        class="inline-flex items-center justify-center w-full h-[15px] bg-[#bb181c] cursor-pointer"
        @click="changeLaptopColor('/src/assets/product/laptop/2-RED.png')"
      ></span>
    </div>
    <section class="md:flex justify-between items-end">
      <div>
        <h5
          class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Laptop Asus S4T
        </h5>
        <div class="relative">
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Rp 1.200.000
          </p>
          <p
            v-if="isDiscount"
            class="absolute left-[10px] font-normal text-red-400 text-[12px]"
          >
            <del>Rp 5.000.000</del>
          </p>
        </div>
      </div>
      <div>
        <Button
          v-if="!isFlashSale"
          gradient="purple-blue"
          class="md:w-auto w-full"
        >
          <CartIcon myClass="w-6" />
        </Button>
        <Button v-else gradient="red" class="md:w-auto w-full">
          <CartIcon myClass="w-6" />
        </Button>
      </div>
    </section>
  </the-card>
</template>

<script>
export default {
  props: [
    "img",
    "isDiscount",
    "isPopular",
    "isNew",
    "hasColors",
    "isFlashSale",
  ],
  data() {
    return {
      image: this.img,
    };
  },
  methods: {
    changeLaptopColor(value) {
      this.image = value;
    },
  },
};
</script>

<style scoped>
img.rounded-t-lg {
  min-height: 330px !important;
  height: 330px !important;
}
</style>