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

  <StepWizard on="checkout" />

  <br />
  <br />
  <br />
  <main class="container mx-auto mt-8 lg:px-20 px-5 dark:text-gray-200">
    <h1 class="text-3xl font-semibold">Checkout</h1>
    <div class="grid lg:grid-cols-3 gap-10 mt-5">
      <div class="lg:col-span-2">
        <div class="border dark:border-slate-700 p-5 rounded">
          <div class="flex justify-between items-center mb-3">
            <h3 class="text-xl font-semibold">Alamat Pengiriman</h3>
            <button class="font-semibold text-indigo-500">Ubah</button>
          </div>
          <div
            class="md:flex gap-20 bg-gray-100 dark:bg-slate-700 p-5 rounded-md"
          >
            <div class="font-semibold">
              <h4>Ilham Hafidz</h4>
              <h6>083871352030</h6>
            </div>
            <div class="md:mt-0 mt-3">
              <p>
                (Rumah)
                <br />
                Jl. Tugu Monas No.1, Gambir, Kecamatan Gambir, Kota Jakarta
                Pusat, Daerah Khusus Ibukota Jakarta 10110, Indonesia
              </p>
            </div>
          </div>
          <!--  -->
          <div class="border-t dark:border-slate-700 mt-5 text-center">
            <button class="mt-5 font-semibold text-indigo-500">
              Tambah Catatan Pemesanan
            </button>
          </div>
        </div>
        <!--  -->
        <div class="border dark:border-slate-700 p-5 rounded mt-10">
          <h3 class="text-xl font-semibold mb-5">Produk</h3>

          <div class="sm:flex justify-between items-center">
            <div class="flex items-center">
              <img
                src="./../assets/product/laptop/1.png"
                class="w-[110px] h-[90px] object-cover rounded mr-3"
              />
              <h4>Laptop IL Series Pro Max 12</h4>
            </div>
            <div class="flex justify-between sm:mt-0 mt-4">
              <div>
                <h6>Rp 2.5000.000</h6>
              </div>
              <div class="sm:w-[100px] text-right">x1</div>
            </div>
          </div>

          <div
            class="px-5 py-3 rounded border dark:border-slate-700 mt-5 bg-gradient-to-l to-gray-300/30 from-blue-500/0 text-blue-500 font-semibold flex items-center justify-between cursor-pointer relative"
            @click="toggleExpress()"
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
            <!--  -->
            <div
              id="selectExpress"
              class="absolute bottom-0 bg-white dark:bg-slate-800 shadow w-full left-0 translate-y-full rounded-b h-[300px] overflow-auto hidden"
            >
              <section>
                <div
                  class="flex items-end text-gray-800 dark:text-gray-300 bg-gray-100 dark:bg-slate-700 p-5"
                >
                  <h3 class="font-semibold text-xl mr-4">Instant</h3>
                  <span class="text-sm text-gray-500"
                    >Estimasi tiba hari ini</span
                  >
                </div>
                <div class="p-5">
                  <div class="flex items-center justify-between pb-4">
                    <div>
                      <div class="flex items-center text-gray-800">
                        <img
                          src="./../assets/express/gosend.png"
                          class="w-[50px] border dark:border-slate-700 p-1 rounded mr-3"
                        />
                        Gosend Instant
                      </div>
                      <p class="mt-2 text-sm text-gray-400">
                        Pesanan di atas jam 15.00 WIB berpotensi dikirim di hari
                        selanjutnya
                      </p>
                    </div>
                    <div>
                      <h5>Rp 25.000</h5>
                    </div>
                  </div>
                  <div class="flex items-center justify-between py-4">
                    <div>
                      <div class="flex items-center text-gray-800">
                        <img
                          src="./../assets/express/grabExpresspng.png"
                          class="w-[50px] border dark:border-slate-700 p-1 rounded mr-3"
                        />
                        Grab Express
                      </div>
                      <p class="mt-2 text-sm text-gray-400">
                        Pesanan di atas jam 15.00 WIB berpotensi dikirim di hari
                        selanjutnya
                      </p>
                    </div>
                    <div>
                      <h5>Rp 25.000</h5>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <div
                  class="flex items-end text-gray-800 dark:text-gray-300 bg-gray-100 dark:bg-slate-700 p-5"
                >
                  <h3 class="font-semibold text-xl mr-4">Same Day</h3>
                  <span class="text-sm text-gray-500"
                    >Estimasi tiba hari ini - besok</span
                  >
                </div>
                <div class="p-5">
                  <div class="flex items-center justify-between pb-4">
                    <div>
                      <div class="flex items-center text-gray-800">
                        <img
                          src="./../assets/express/grabExpresspng.png"
                          class="w-[50px] border dark:border-slate-700 p-1 rounded mr-3"
                        />
                        Grab Express Car
                      </div>
                      <!-- <p class="mt-2 text-sm text-red-400">Minum Berat 10kg</p> -->
                    </div>
                    <div>
                      <p class="mt-2 text-sm text-red-400">Minum Berat 10kg</p>
                    </div>
                  </div>
                  <div class="flex items-center justify-between py-4">
                    <div>
                      <div class="flex items-center text-gray-800">
                        <img
                          src="./../assets/express/gosend.png"
                          class="w-[50px] border dark:border-slate-700 p-1 rounded mr-3"
                        />
                        Gosend Sameday
                      </div>
                      <p class="mt-2 text-sm text-gray-400">
                        Pesanan di atas jam 15.00 WIB berpotensi dikirim di hari
                        selanjutnya
                      </p>
                    </div>
                    <div>
                      <h5>Rp 25.000</h5>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <div
                  class="flex items-end text-gray-800 dark:text-gray-300 bg-gray-100 dark:bg-slate-700 p-5"
                >
                  <h3 class="font-semibold text-xl mr-4">Next Day</h3>
                  <span class="text-sm text-gray-500">Estimasi tiba besok</span>
                </div>
                <div class="p-5">
                  <div class="flex items-center justify-between pb-4">
                    <div>
                      <div class="flex items-center text-gray-800">
                        <img
                          src="./../assets/express/JNEYes.png"
                          class="w-[50px] border dark:border-slate-700 p-1 rounded mr-3"
                        />
                        JNE YES
                      </div>
                      <p class="mt-2 text-sm text-gray-500">
                        Estimasi tiba besok
                      </p>
                    </div>
                    <div>
                      <h5>Rp 25.000</h5>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <div
                  class="flex items-end text-gray-800 dark:text-gray-300 bg-gray-100 dark:bg-slate-700 p-5"
                >
                  <h3 class="font-semibold text-xl mr-4">Regular</h3>
                  <span class="text-sm text-gray-500"
                    >Estimasi tiba besok - 25 Sep</span
                  >
                </div>
                <div class="p-5">
                  <div class="flex items-center justify-between pb-4">
                    <div>
                      <div class="flex items-center text-gray-800">
                        <img
                          src="./../assets/express/JNT.png"
                          class="w-[50px] border dark:border-slate-700 p-1 rounded mr-3"
                        />
                        J&T
                      </div>
                    </div>
                    <div>
                      <h5>Rp 25.000</h5>
                    </div>
                  </div>
                  <div class="flex items-center justify-between py-4">
                    <div>
                      <div class="flex items-center text-gray-800">
                        <img
                          src="./../assets/express/JNEReguler.png"
                          class="w-[50px] border dark:border-slate-700 p-1 rounded mr-3"
                        />
                        JNE Regular
                      </div>
                      <span class="text-sm text-gray-500"
                        >Estimasi tiba besok - 25 Sep</span
                      >
                    </div>
                    <div>
                      <h5>Rp 25.000</h5>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <div
                  class="flex items-end text-gray-800 dark:text-gray-300 bg-gray-100 dark:bg-slate-700 p-5"
                >
                  <h3 class="font-semibold text-xl mr-4">Cargo</h3>
                  <span class="text-sm text-gray-500"
                    >Estimasi tiba 24 - 25 Sep</span
                  >
                </div>
                <div class="p-5">
                  <div class="flex items-center justify-between pb-4">
                    <div>
                      <div class="flex items-center text-gray-800">
                        <img
                          src="./../assets/express/JNETrucking.png"
                          class="w-[50px] border dark:border-slate-700 p-1 rounded mr-3"
                        />
                        JNE Regular
                      </div>
                      <span class="text-sm text-gray-500"
                        >Estimasi tiba 24 - 25 Sep</span
                      >
                    </div>
                    <div>
                      <h5>Rp 25.000</h5>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div
          class="border dark:border-slate-700 p-5 rounded mt-3 flex items-center"
        >
          <Checkbox v-model="ref1" class="mr-3" />
          <p>kirim sebagai hadiah / dropship</p>
        </div>
      </div>

      <!--  -->

      <div>
        <div class="border dark:border-slate-700 rounded-md p-5">
          <h2 class="font-bold text-xl mb-5">Rincian Pembelian</h2>
          <div>
            <button
              class="flex justify-between w-full px-5 py-3 rounded border dark:border-slate-700 hoverlue-400"
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
          <router-link to="/payment">
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

    toggleExpress() {
      document.getElementById("selectExpress").classList.toggle("hidden");
    },
    //
  },
};
</script>

<style>
</style>