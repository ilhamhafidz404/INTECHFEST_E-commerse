<script setup>
// icon
import StarIcon from "./../components/icons/starIcon.vue";
import CartIcon from "./../components/icons/cartIcon.vue";
import PencilIcon from "./../components/icons/pencilIcon.vue";
import PlusIcon from "./../components/icons/plusIcon.vue";
import MinusIcon from "./../components/icons/minusIcon.vue";
import MoneyIcon from "./../components/icons/moneyIcon.vue";
import ZoomIcon from "./../components/icons/zoomIcon.vue";

// components
import Navbar from "../components/navbar/navbar.vue";
import Footer from "../components/footer.vue";

//

import { Button, Tabs, Tab } from "flowbite-vue";
import { ref } from "vue";
const activeTab = ref("first");
</script>
<template>
  <Navbar />

  <!--  -->

  <section class="container mx-auto mt-8 px-20">
    <div class="grid grid-cols-7 gap-10">
      <div class="grid grid-cols-5 gap-5 col-span-3">
        <div class="text-center h-full flex items-end">
          <ul>
            <li
              @click="changeImage('./src/assets/product/laptop/detail/1.png')"
              class="border p-1 rounded hover:border-indigo-500 mb-2 border-transparent"
              :class="{
                '!border-indigo-500':
                  imageValue == './src/assets/product/laptop/detail/1.png',
              }"
            >
              <img
                src="./../assets/product/laptop/detail/1.png"
                class="object-cover"
              />
            </li>
            <li
              @click="changeImage('./src/assets/product/laptop/detail/2.png')"
              class="border p-1 rounded hover:border-indigo-500 mb-2 border-transparent"
              :class="{
                '!border-indigo-500':
                  imageValue == './src/assets/product/laptop/detail/2.png',
              }"
            >
              <img
                src="./../assets/product/laptop/detail/2.png"
                class="object-cover"
              />
            </li>
            <li
              @click="changeImage('./src/assets/product/laptop/detail/3.png')"
              class="border p-1 rounded hover:border-indigo-500 mb-2 border-transparent"
              :class="{
                '!border-indigo-500':
                  imageValue == './src/assets/product/laptop/detail/3.png',
              }"
            >
              <img
                src="./../assets/product/laptop/detail/3.png"
                class="object-cover"
              />
            </li>
            <li
              @click="changeImage('./src/assets/product/laptop/detail/1.png')"
              class="border p-1 rounded hover:border-indigo-500 mb-2 border-transparent"
              :class="{
                '!border-indigo-500':
                  imageValue == './src/assets/product/laptop/detail/1.png',
              }"
            >
              <img
                src="./../assets/product/laptop/detail/1.png"
                class="object-cover"
              />
            </li>
          </ul>
        </div>
        <div class="relative col-span-4">
          <img
            id="wideImage"
            src="./../assets/product/laptop/detail/1.png"
            class="rounded"
          />
          <button
            class="w-[45px] h-[45px] bg-white border absolute top-0 flex items-center justify-center rounded-full m-2 right-0 hover:bg-white/80"
          >
            <ZoomIcon myClass="w-6" />
          </button>
        </div>

        <section
          class="col-span-5 mb-5 border p-5 rounded-md border-indigo-500"
        >
          <h4 class="font-bold mb-3">Atur Jumlah Pembelian & catatan :</h4>
          <div class="flex items-center gap-10">
            <div class="flex items-center gap-3">
              <button class="border rounded-full" @click="decrementTotalBuy()">
                <MinusIcon myClass="w-5" />
              </button>
              <input
                type="text"
                :value="totalBuy"
                class="border border-gray-400 rounded w-[50px] text-center py-1"
              />
              <button class="border rounded-full" @click="incrementTotalBuy()">
                <PlusIcon myClass="w-5" />
              </button>
            </div>
            <div class="flex items-center">
              <PencilIcon myClass="w-4 mr-3" />
              Tambah catatan pembelian
            </div>
          </div>
          <div class="mt-4 flex items-end gap-5">
            <p>Subtotal :</p>
            <h5 class="text-2xl font-bold">Rp 2.500.000</h5>
          </div>
          <div class="flex gap-4 mt-5">
            <Button gradient="purple-blue">
              <template #prefix>
                <CartIcon myClass="w-6" />
              </template>
              Tambah ke Keranjang
            </Button>
            <Button gradient="purple-blue" outline>
              <template #prefix>
                <MoneyIcon myClass="w-6" />
              </template>
              Beli Langsung
            </Button>
          </div>
        </section>
      </div>
      <div class="col-span-4">
        <h1 class="text-xl font-bold mb-2">
          HP Elitebook 840 G3 Core i5 Gen6 RAM 8GB SSD 256GB 14inch FULLHD Slim
          - 11 G1 I3 5TH, 16GB/512GB
        </h1>
        <span class="flex mb-5">
          Terjual 22
          <span class="inline-block mx-3">•</span>
          <StarIcon myClass="w-4 mr-1 text-yellow-400" />
          4,5 (5 rating)
          <span class="inline-block mx-3">•</span>
          Diskusi (4)
        </span>
        <h2 class="text-3xl font-bold">Rp 2.400.000</h2>
        <hr class="my-4" />
        <section>
          <div class="flex items-center gap-5">
            <h4 class="font-bold">Pilih Tipe :</h4>
            <span class="text-sm text-gray-500 font-semibold"
              >840 G3 i5 Gen6</span
            >
          </div>
          <div class="mt-3 flex gap-2">
            <Button gradient="purple-blue"> 840 G3 i5 Gen6 </Button>
            <Button gradient="purple-blue" outline> 840 G3 i5 Gen6 </Button>
            <Button gradient="purple-blue" outline> 840 G3 i5 Gen6 </Button>
            <Button gradient="purple-blue" outline> 840 G3 i5 Gen6 </Button>
          </div>
        </section>
        <section class="mt-10">
          <div class="flex items-center gap-5">
            <h4 class="font-bold">Pilih kapasitas memori :</h4>
            <span class="text-sm text-gray-500 font-semibold">16GB/512GB</span>
          </div>
          <div class="mt-3 flex gap-2">
            <Button gradient="purple-blue"> 16GB/512GB </Button>
            <Button gradient="purple-blue" outline> 16GB/512GB </Button>
            <Button gradient="purple-blue" outline> 16GB/512GB </Button>
            <Button gradient="purple-blue" outline> 16GB/512GB </Button>
          </div>
        </section>
        <!--  -->
        <div class="mt-10">
          <tabs variant="underline" v-model="activeTab" class="p-5">
            <!-- class appends to content DIV for all tabs -->
            <tab name="first" title="Deskripsi">
              <p class="mb-1">
                <span class="font-semibold">
                  HP Elitebook 840 memiliki layar FHD IPS sebesar 14 inch
                </span>
                dan resolusi 1920 x 1080 pixels. Laptop yang ringan dan ringkas
                ini dibuat untuk para profesional yang membutuhkan performa
                terbaik saat bepergian. Tampilan layar dengan bezel yang tipis
                serta desain aluminium memberikan tampilan yang premium pada
                laptop.
              </p>
              <p class="mb-1">
                Teknologi BIOS ke browser HP Sure Start Gen5 dan HP Sure Click,
                hal ini dapat membantu mengamankan PC dari ancaman hardware.
                Menghasilkan suara jernih dan tajam dengan fitur kolaborasi
                canggih seperti HP Noise Cancellation, laptop ini cocok saat
                Anda meeting dimana saja tanpa khawatir terganggu suara orang
                lain.
              </p>
            </tab>
            <tab name="second" title="Spesifikasi">
              <p class="font-semibold">
                Laptop HP Elitebook 840 G3 ( Core i5 generasi 6 )
              </p>
              <ul>
                <li>- Core i5 6300u 2.40 Ghz - 2.90 Ghz</li>
                <li>- Ram 4GB, 8 Gb - Ssd 256GB</li>
                <li>- Layar 14 inch ( 1366x768 )</li>
                <li>- Vga intel Hd Graphic 520</li>
                <li>- Wifi , Webcam , Bluetooth , Lan</li>
                <li>- Jacksound port, Simcard port ,Usb 3.0</li>
                <li>- Rgb Vga port & HD display port</li>
                <li>- Windows 10 64 bit</li>
              </ul>
            </tab>
          </tabs>
        </div>
      </div>
    </div>
    <hr />
    <div>
      <h2 class="text-2xl font-bold my-3">Ulasan</h2>
      <div
        class="bg-gradient-to-r from-[#f8f6f2] to-white p-5 rounded-md flex justify-between items-center"
      >
        <div class="flex gap-2 text-xl items-center">
          <StarIcon myClass="w-8 text-yellow-400" />
          <span> 4.8 </span>
          <p>/ 5</p>
          <span class="text-gray-400">(6 ulasan)</span>
        </div>
        <div class="flex gap-3">
          <div class="border rounded py-3 px-5 text-center">
            <span class="flex items-center justify-center">
              <StarIcon myClass="w-7 mr-2 text-yellow-400" />
              <p class="text-xl">5</p>
            </span>
            <span class="inline-block mt-2 text-gray-400">5 Ulasan</span>
          </div>
          <div class="border rounded py-3 px-5 text-center">
            <span class="flex items-center justify-center">
              <StarIcon myClass="w-7 mr-2 text-yellow-400" />
              <p class="text-xl">4</p>
            </span>
            <span class="inline-block mt-2 text-gray-400">5 Ulasan</span>
          </div>
          <div class="border rounded py-3 px-5 text-center">
            <span class="flex items-center justify-center">
              <StarIcon myClass="w-7 mr-2 text-yellow-400" />
              <p class="text-xl">3</p>
            </span>
            <span class="inline-block mt-2 text-gray-400">5 Ulasan</span>
          </div>
          <div class="border rounded py-3 px-5 text-center">
            <span class="flex items-center justify-center">
              <StarIcon myClass="w-7 mr-2 text-yellow-400" />
              <p class="text-xl">2</p>
            </span>
            <span class="inline-block mt-2 text-gray-400">5 Ulasan</span>
          </div>
          <div class="border rounded py-3 px-5 text-center">
            <span class="flex items-center justify-center">
              <StarIcon myClass="w-7 mr-2 text-yellow-400" />
              <p class="text-xl">1</p>
            </span>
            <span class="inline-block mt-2 text-gray-400">5 Ulasan</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--  -->

  <Footer />
</template>

<script>
export default {
  data() {
    return {
      imageValue: "./src/assets/product/laptop/detail/1.png",
      totalBuy: 1,
    };
  },
  methods: {
    changeImage(value) {
      this.imageValue = value;
      document.getElementById("wideImage").src = value;
    },
    //
    incrementTotalBuy() {
      this.totalBuy += 1;
    },
    decrementTotalBuy() {
      if (this.totalBuy > 0) {
        this.totalBuy -= 1;
      }
    },
  },
};
</script>

<style scoped>
</style>