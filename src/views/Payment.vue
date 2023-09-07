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

import {
  Accordion,
  AccordionPanel,
  AccordionHeader,
  AccordionContent,
} from "flowbite-vue";

import { ref } from "vue";
const ref1 = ref(false);
</script>
<template>
  <Navbar />

  <!--  -->

  <StepWizard on="payment" />

  <br />
  <br />
  <br />
  <main class="container mx-auto mt-8 px-20">
    <h1 class="text-3xl font-semibold">Metode Pembayaran</h1>
    <div class="grid grid-cols-3 gap-10 mt-5">
      <div class="col-span-2">
        <Accordion>
          <accordion-panel>
            <accordion-header>E-Wallet</accordion-header>
            <accordion-content>
              <div class="border p-3 rounded mb-3">
                <div class="flex gap-4 items-center">
                  <img
                    src="./../assets/payment/gopay.png"
                    class="w-[70px] border p-1 rounded"
                  />
                  <h4 class="font-semibold">GO-Pay</h4>
                </div>
                <p class="text-indigo-500 mt-2 text-sm">Hubungkan</p>
              </div>
              <div class="border p-3 rounded mb-3">
                <div class="flex gap-4 items-center">
                  <img
                    src="./../assets/payment/ovo.png"
                    class="w-[70px] border p-1 rounded"
                  />
                  <h4 class="font-semibold">OVO</h4>
                </div>
                <p class="text-indigo-500 mt-2 text-sm">Hubungkan</p>
              </div>
              <div class="border p-3 rounded mb-3">
                <div class="flex gap-4 items-center">
                  <img
                    src="./../assets/payment/shopeepay.png"
                    class="w-[70px] border p-1 rounded"
                  />
                  <h4 class="font-semibold">Shoopee Pay / SPayLater</h4>
                </div>
              </div>
              <div class="border p-3 rounded mb-3">
                <div class="flex gap-4 items-center">
                  <img
                    src="./../assets/payment/dana.png"
                    class="w-[70px] border p-1 rounded"
                  />
                  <h4 class="font-semibold">DANA</h4>
                </div>
              </div>
              <div class="border p-3 rounded mb-3">
                <div class="flex gap-4 items-center">
                  <img
                    src="./../assets/payment/qris.png"
                    class="w-[70px] border p-1 rounded"
                  />
                  <h4 class="font-semibold">QRIS</h4>
                </div>
              </div>
            </accordion-content>
          </accordion-panel>
          <accordion-panel>
            <accordion-header>Transfer Bank</accordion-header>
            <accordion-content>
              <div class="border p-3 rounded mb-3">
                <div class="flex gap-4 items-center">
                  <img
                    src="./../assets/payment/bca.png"
                    class="w-[70px] border p-1 rounded"
                  />
                  <h4 class="font-semibold">BCA</h4>
                </div>
              </div>
              <div class="border p-3 rounded mb-3">
                <div class="flex gap-4 items-center">
                  <img
                    src="./../assets/payment/mandiri.png"
                    class="w-[70px] border p-1 rounded"
                  />
                  <h4 class="font-semibold">Mandiri</h4>
                </div>
              </div>
              <div class="border p-3 rounded mb-3">
                <div class="flex gap-4 items-center">
                  <img
                    src="./../assets/payment/bri.png"
                    class="w-[70px] border p-1 rounded"
                  />
                  <h4 class="font-semibold">BRI</h4>
                </div>
              </div>
              <div class="border p-3 rounded mb-3">
                <div class="flex gap-4 items-center">
                  <img
                    src="./../assets/payment/bni.png"
                    class="w-[70px] border p-1 rounded"
                  />
                  <h4 class="font-semibold">BNI</h4>
                </div>
              </div>
            </accordion-content>
          </accordion-panel>
          <accordion-panel>
            <accordion-header>Mini Market</accordion-header>
            <accordion-content>
              <div class="border p-3 rounded mb-3">
                <div class="flex gap-4 items-center">
                  <img
                    src="./../assets/payment/alfamart.png"
                    class="w-[70px] border p-1 rounded"
                  />
                  <h4 class="font-semibold">Alfamart</h4>
                </div>
              </div>
              <div class="border p-3 rounded mb-3">
                <div class="flex gap-4 items-center">
                  <img
                    src="./../assets/payment/indomart.png"
                    class="w-[70px] border p-1 rounded"
                  />
                  <h4 class="font-semibold">Indomart</h4>
                </div>
              </div>
            </accordion-content>
          </accordion-panel>
        </Accordion>
      </div>

      <!--  -->

      <div>
        <div class="border rounded-md p-5">
          <h2 class="font-bold text-xl mb-5">Rincian Pembelian</h2>
          <div>
            <button
              class="flex justify-between w-full px-5 py-3 rounded border hoverlue-400"
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
            <Button gradient="purple-blue" class="w-full py-3">
              Bayar Sekarang
            </Button>
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

    toggleExpress() {
      document.getElementById("selectExpress").classList.toggle("hidden");
    },
  },
};
</script>

<style>
</style>