<script setup>
// components
import Navbar from "../components/navbar/navbar.vue";
import Footer from "../components/footer.vue";
import ModalPromo from "../components/modalPromo.vue";

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
  <main class="container mx-auto mt-8 lg:px-20 px-3 dark:text-gray-200">
    <div class="grid lg:grid-cols-3 gap-10">
      <div class="lg:col-span-2">
        <div class="p-5 border dark:border-slate-700 rounded-md">
          <h1 class="font-bold text-xl mb-5">Keranjang Belanja</h1>
          <section>
            <div class="flex items-center justify-between mb-10">
              <div class="flex">
                <Checkbox v-model="ref1" class="mr-5" />
                <label for="">Pilih semua</label>
              </div>
              <div class="w-[50px]">
                <p class="font-semibold text-red-500">Hapus</p>
              </div>
            </div>
            <!--  -->
            <div
              class="lg:flex items-center justify-between border-b dark:border-slate-700 pb-3"
            >
              <div class="md:flex items-center gap-7 text-center">
                <div class="flex items-center">
                  <Checkbox v-model="ref1" class="mr-4" />
                  <img
                    src="./../assets/product/phone/2.png"
                    class="w-[120px] rounded md:mx-0 mx-auto"
                  />
                </div>
                <div>
                  <h3 class="font-semibold md:mt-0 mt-4">
                    Laptop IL Series Pro 13 - Intel Core i5 RTX 15
                  </h3>
                </div>
              </div>
              <div
                class="flex items-center gap-8 lg:mt-0 mt-5 lg:justify-start justify-center"
              >
                <div class="flex items-center gap-3">
                  <Button
                    gradient="purple-blue"
                    class="border-4 dark:border-slate-700 !rounded-full !w-[30px] !h-[30px] flex items-center justify-center"
                    outline
                    @click="decrementCount()"
                  >
                    <MinusIcon myClass="w-5" />
                  </Button>
                  <input
                    type="text"
                    v-model="count"
                    class="border border-gray-400 rounded w-[50px] text-center py-1 dark:bg-slate-700"
                  />
                  <Button
                    gradient="purple-blue"
                    class="border-4 dark:border-slate-700 !rounded-full !w-[30px] !h-[30px] flex items-center justify-center"
                    outline
                    @click="incrementCount()"
                  >
                    <PlusIcon myClass="w-5" />
                  </Button>
                </div>
                <div>
                  <h5>Rp 2.500.000</h5>
                </div>
                <div class="min-w-[50px]">
                  <button class="cursor-pointer hover:text-red-500">
                    <TrashIcon myClass="w-6" />
                  </button>
                </div>
              </div>
            </div>
            <div
              class="lg:flex items-center justify-between border-b dark:border-slate-700 pb-3 mt-5"
            >
              <div class="md:flex items-center gap-7 text-center">
                <div class="flex items-center">
                  <Checkbox v-model="ref1" class="mr-4" />
                  <img
                    src="./../assets/product/laptop/1.png"
                    class="w-[120px] rounded md:mx-0 mx-auto"
                  />
                </div>
                <div>
                  <h3 class="font-semibold md:mt-0 mt-4">
                    Laptop IL Series Pro 13 - Intel Core i5 RTX 15
                  </h3>
                </div>
              </div>
              <div
                class="flex items-center gap-8 lg:mt-0 mt-5 lg:justify-start justify-center"
              >
                <div class="flex items-center gap-3">
                  <Button
                    gradient="purple-blue"
                    class="border-4 dark:border-slate-700 !rounded-full !w-[30px] !h-[30px] flex items-center justify-center"
                    outline
                    @click="decrementCount()"
                  >
                    <MinusIcon myClass="w-5" />
                  </Button>
                  <input
                    type="text"
                    v-model="count"
                    class="border border-gray-400 rounded w-[50px] text-center py-1 dark:bg-slate-700"
                  />
                  <Button
                    gradient="purple-blue"
                    class="border-4 dark:border-slate-700 !rounded-full !w-[30px] !h-[30px] flex items-center justify-center"
                    outline
                    @click="incrementCount()"
                  >
                    <PlusIcon myClass="w-5" />
                  </Button>
                </div>
                <div>
                  <h5>Rp 2.500.000</h5>
                </div>
                <div class="min-w-[50px]">
                  <button class="cursor-pointer hover:text-red-500">
                    <TrashIcon myClass="w-6" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <!-- sec -->

      <div>
        <div class="border dark:border-slate-700 rounded-md p-5">
          <h2 class="font-bold text-xl mb-5">Rincian Pembelian</h2>
          <div>
            <button
              class="flex justify-between w-full px-5 py-3 rounded border dark:border-slate-700 hover:border-blue-400"
              @click="toggleModalPromo()"
            >
              <span class="flex gap-3">
                <GiftIcon myClass="w-6 h-6 text-indigo-500 mr-3" />
                Makin hemat dengan Promo
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
          <hr class="my-5 dark:border-slate-700" />
          <div>
            <h3 class="font-bold mb-3">Ringkasan Belanja</h3>
            <div class="flex justify-between">
              <p>Total Harga (3 Produk)</p>
              <p>Rp 2.500.000</p>
            </div>
            <div class="flex justify-between">
              <p>Total Diskon</p>
              <p>Rp 2.500.000</p>
            </div>
          </div>
          <hr class="my-5 dark:border-slate-700" />
          <div class="flex justify-between mb-5">
            <h3 class="font-bold">Total Harga</h3>
            <h5>Rp 2.500.000</h5>
          </div>
          <router-link to="/checkout">
            <Button gradient="purple-blue" class="w-full py-3">Beli (2)</Button>
          </router-link>
        </div>
      </div>
    </div>
  </main>

  <ModalPromo :modalPromo="modalPromo" @toggleModalPromo="toggleModalPromo" />

  <Footer />
</template>

<script>
export default {
  data() {
    return {
      count: 1,
      //
      modalPromo: false,
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
    //
    toggleModalPromo() {
      this.modalPromo = !this.modalPromo;
    },
  },
};
</script>

<style>
</style>