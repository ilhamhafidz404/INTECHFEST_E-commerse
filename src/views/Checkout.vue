<script setup>
// components
import Navbar from "../components/navbar/navbar.vue";
import Footer from "../components/footer.vue";
import ModalPromo from "../components/modalPromo.vue";
import StepWizard from "../components/stepWizard.vue";

// flowbite
import { Checkbox, Button } from "flowbite-vue";

// icons
import GiftIcon from "../components/icons/giftIcon.vue";

import { ref } from "vue";
const ref1 = ref(false);
</script>
<template>
  <Navbar />

  <!--  -->

  <StepWizard />

  <br />
  <br />
  <br />
  <main class="container mx-auto mt-8 px-20">
    <h1 class="text-3xl font-semibold">Checkout</h1>
    <div class="grid grid-cols-3 gap-10 mt-5">
      <div class="col-span-2">
        <div class="border p-5 rounded">
          <div class="flex justify-between items-center mb-3">
            <h3 class="text-xl font-semibold">Alamat Pengiriman</h3>
            <button class="font-semibold text-indigo-500">Ubah</button>
          </div>
          <div class="flex gap-20 bg-gray-100 p-5 rounded-md">
            <div class="font-semibold">
              <h4>Ilham Hafidz</h4>
              <h6>083871352030</h6>
            </div>
            <div>
              <p>
                (Rumah)
                <br />
                Jl. Tugu Monas No.1, Gambir, Kecamatan Gambir, Kota Jakarta
                Pusat, Daerah Khusus Ibukota Jakarta 10110, Indonesia
              </p>
            </div>
          </div>
          <!--  -->
          <div class="border-t mt-5 text-center">
            <button class="mt-5 font-semibold text-indigo-500">
              Tambah Catatan Pemesanan
            </button>
          </div>
        </div>
        <!--  -->
        <div class="border p-5 rounded mt-10">
          <h3 class="text-xl font-semibold mb-5">Produk</h3>

          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <img
                src="./../assets/product/laptop/1.png"
                class="w-[110px] h-[90px] object-cover rounded mr-3"
              />
              <h4>Laptop IL Series Pro Max 12</h4>
            </div>
            <div>
              <h6>Rp 2.5000.000</h6>
            </div>
            <div class="w-[100px]">x1</div>
          </div>

          <div
            class="px-5 py-3 rounded border mt-5 bg-gradient-to-l to-gray-300/30 from-blue-500/0 text-blue-500 font-semibold flex items-center justify-between"
          >
            <span class="flex items-center gap-3">
              <img src="./../assets/icon/free-delivery.png" class="w-[50px]" />
              Pilih Jasa Pengirimanmu
            </span>
            <!--  -->
            <span
              ><svg
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
            </span>
          </div>
        </div>
        <div class="border p-5 rounded mt-3 flex items-center">
          <Checkbox v-model="ref1" class="mr-3" />
          <p>kirim sebagai hadiah / dropship</p>
        </div>
      </div>

      <!--  -->

      <div>
        <div class="border rounded-md p-5">
          <h2 class="font-bold text-xl mb-5">Rincian Pembelian</h2>
          <div>
            <button
              class="flex justify-between w-full px-5 py-3 rounded border hover:border-blue-400"
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
          <hr class="my-5" />
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
          <hr class="my-5" />
          <div class="flex justify-between mb-5">
            <h3 class="font-bold">Total Harga</h3>
            <h5>Rp 2.500.000</h5>
          </div>
          <router-link to="/checkout">
            <Button gradient="purple-blue" class="w-full py-3"
              >Pilih Pembayaran</Button
            >
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
      modalPromo: false,
    };
  },
  methods: {
    //
    toggleModalPromo() {
      this.modalPromo = !this.modalPromo;
    },
  },
};
</script>

<style>
</style>