<script setup>
// components
import Navbar from "../components/navbar/navbar.vue";
import Footer from "../components/footer.vue";
import ModalPromo from "../components/modalPromo.vue";
import StepWizard from "../components/stepWizard.vue";

// flowbite
import { Checkbox, Button, Badge } from "flowbite-vue";

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

  <StepWizard on="verification" />

  <br />
  <br />
  <br />
  <main class="container mx-auto mt-8 lg:px-20 px-5 dark:text-gray-300">
    <h1 class="text-3xl font-semibold">Verifikasi Pembayaran</h1>
    <div class="grid lg:grid-cols-3 gap-10 mt-5">
      <div class="lg:col-span-2">
        <div class="border dark:border-slate-700 rounded p-5">
          <div>
            <span class="text-gray-500">Batas akhir pembayaran</span>
            <h3 class="text-xl font-semibold mt-1">
              Minggu, 01 Oktober 2023 12:47 WIB
            </h3>
          </div>
          <hr class="my-5 dark:border-slate-700" />
          <div>
            <span class="text-gray-500">Metode pembayaran</span>
            <h3 class="text-xl font-semibold mt-1 flex gap-5">
              <img
                src="./../assets/payment/dana.png"
                class="w-[70px] border dark:border-slate-700 p-1 rounded"
              />
              E-Wallet : DANA
            </h3>
          </div>
          <hr class="my-5 dark:border-slate-700" />
          <div>
            <span class="text-gray-500">Total pembayaran</span>
            <h3 class="text-xl font-semibold mt-1 text-blue-500">
              Rp 2.512.000
            </h3>
          </div>
          <Button gradient="purple-blue" class="w-full py-3 mt-5">
            Lihat Detail Pesanan
          </Button>
        </div>

        <Accordion :open-first-item="false" class="mt-10">
          <accordion-panel>
            <accordion-header>Panduan Pembayaran</accordion-header>
            <accordion-content>
              <ul>
                <li class="flex mb-2">
                  <Badge class="mr-2">
                    <p>1</p>
                  </Badge>
                  Pilih metode pembayaran pada saat checkout, lalu pilih “Uang
                  Elektronik”, pilih “DANA”, kemudian klik “Bayar sekarang”.
                </li>
                <li class="flex mb-2">
                  <Badge class="mr-2">
                    <p>2</p>
                  </Badge>
                  Selanjutnya kamu akan diarahkan ke laman konfirmasi nominal
                  transaksi dengan DANA.
                </li>
                <li class="flex mb-2">
                  <Badge class="mr-2">
                    <p>3</p>
                  </Badge>
                  Cek kembali nominal transaksi kamu, lalu jenis untuk membayar.
                </li>
                <li class="flex mb-2">
                  <Badge class="mr-2">
                    <p>4</p>
                  </Badge>
                  Klik “Bayar” lalu masukkan PIN DANA kamu.
                </li>
                <li class="flex mb-2">
                  <Badge class="mr-2">
                    <p>5</p>
                  </Badge>
                  Pembayaran berhasil.
                </li>
              </ul>

              <div
                class="bg-[#f7f7f7] dark:bg-slate-800 text-gray-500 dark:text-gray-300 p-5 rounded mt-10"
              >
                <p>Apakah informasi ini membantu?</p>
                <div class="mt-4 flex gap-10">
                  <button class="flex gap-2 items-center">
                    <img
                      src="./../assets/icon/smile.jpg"
                      class="w-[50px] rounded-full"
                    />
                    Ya, sangat membantu
                  </button>
                  <button class="flex gap-2 items-center">
                    <img
                      src="./../assets/icon/sad.jpg"
                      class="w-[50px] rounded-full"
                    />
                    Tidak, kurang membantu
                  </button>
                </div>
              </div>
            </accordion-content>
          </accordion-panel>
        </Accordion>
      </div>

      <!--  -->

      <div>
        <Accordion always-open>
          <accordion-panel>
            <accordion-header>Detail Pembayaran</accordion-header>
            <accordion-content>
              <div class="flex justify-between mb-1">
                <p>Harga Produk</p>
                <p>Rp. 2.500.000</p>
              </div>
              <div class="flex justify-between">
                <p>Harga Ongkos Kirim</p>
                <p>Rp. 12.000</p>
              </div>
              <hr class="my-5 dark:border-slate-700" />
              <div class="flex justify-between">
                <p>Total Pembayaran</p>
                <p class="text-blue-500 font-semibold">Rp. 2.512.000</p>
              </div>
            </accordion-content>
          </accordion-panel>
          <accordion-panel>
            <accordion-header>Pesanan Anda</accordion-header>
            <accordion-content>
              <div>
                <div class="flex gap-4">
                  <div>
                    <img
                      src="./../assets/product/laptop/1.webp"
                      loading="lazy"
                      class="w-[120px] rounded"
                    />
                  </div>
                  <div>
                    <h4 class="font-semibold mt-2">ALOPE IL SERIES PRO MAX</h4>
                    <span class="text-sm text-gray-500"
                      >Series PRO Core i5 Gen6 | 8GB/512GB</span
                    >
                    <h5 class="mt-2 font-semibold text-blue-500">
                      Rp 2.500.000
                    </h5>
                  </div>
                </div>
              </div>
            </accordion-content>
          </accordion-panel>
        </Accordion>
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