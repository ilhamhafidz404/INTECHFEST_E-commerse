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

  <section class="container mx-auto mt-8 lg:px- md:px-0 px-4">
    <div class="grid lg:grid-cols-7 grid-cols-1 gap-10">
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
            class="rounded w-full"
          />
          <button
            class="w-[45px] h-[45px] bg-white border absolute top-0 flex items-center justify-center rounded-full m-2 right-0 hover:bg-white/80"
          >
            <ZoomIcon myClass="w-6" />
          </button>
        </div>

        <section
          class="col-span-5 mb-5 border p-5 rounded-md border-indigo-500 lg:block hidden"
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
            <router-link to="/cart">
              <Button gradient="purple-blue" class="py-[10px]">
                <template #prefix>
                  <CartIcon myClass="w-6" />
                </template>
                Tambah ke Keranjang
              </Button>
            </router-link>
            <router-link to="/transaction">
              <Button gradient="purple-blue" outline>
                <template #prefix>
                  <MoneyIcon myClass="w-6" />
                </template>
                Beli Langsung
              </Button>
            </router-link>
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

      <section
        class="col-span-5 mb-5 border p-5 rounded-md border-indigo-500 lg:hidden block"
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
          <router-link to="/cart">
            <Button gradient="purple-blue" class="py-[10px]">
              <template #prefix>
                <CartIcon myClass="w-6" />
              </template>
              Tambah ke Keranjang
            </Button>
          </router-link>
          <router-link to="/transaction">
            <Button gradient="purple-blue" outline>
              <template #prefix>
                <MoneyIcon myClass="w-6" />
              </template>
              Beli Langsung
            </Button>
          </router-link>
        </div>
      </section>
    </div>
    <hr />
    <!--  -->
    <div>
      <h2 class="text-2xl font-bold my-3">Ulasan</h2>
      <div
        class="bg-gradient-to-r from-[#f8f6f2] to-white p-5 rounded-md lg:flex block lg:justify-between lg:items-center"
      >
        <div
          class="flex gap-2 text-xl items-center lg:mb-0 mb-4 lg:justify-normal justify-center"
        >
          <StarIcon myClass="w-8 text-yellow-400" />
          <span> 4.8 </span>
          <p>/ 5</p>
          <span class="text-gray-400">(6 ulasan)</span>
        </div>
        <div class="flex md:gap-3 gap-1 lg:justify-normal justify-center">
          <div
            class="border rounded md:py-3 py-2 md:px-5 px-2 text-center cursor-pointer"
            :class="{ 'border-[#ffc400]': comment == 5 }"
            @click="filterComment(5)"
          >
            <span class="flex items-center justify-center">
              <StarIcon myClass="md:w-7 w-5 md:mr-2 mr-1 text-yellow-400" />
              <p class="md:text-xl text-base">5</p>
            </span>
            <span class="sm:inline-block hidden mt-2 text-gray-400"
              >5 Ulasan</span
            >
          </div>
          <div
            class="border rounded md:py-3 py-2 md:px-5 px-2 text-center cursor-pointer"
            :class="{ 'border-[#ffc400]': comment == 4 }"
            @click="filterComment(4)"
          >
            <span class="flex items-center justify-center">
              <StarIcon myClass="md:w-7 w-5 md:mr-2 mr-1 text-yellow-400" />
              <p class="md:text-xl text-base">4</p>
            </span>
            <span class="sm:inline-block hidden mt-2 text-gray-400"
              >5 Ulasan</span
            >
          </div>
          <div
            class="border rounded md:py-3 py-2 md:px-5 px-2 text-center cursor-pointer"
            :class="{ 'border-[#ffc400]': comment == 3 }"
            @click="filterComment(3)"
          >
            <span class="flex items-center justify-center">
              <StarIcon myClass="md:w-7 w-5 md:mr-2 mr-1 text-yellow-400" />
              <p class="md:text-xl text-base">3</p>
            </span>
            <span class="sm:inline-block hidden mt-2 text-gray-400"
              >5 Ulasan</span
            >
          </div>
          <div
            class="border rounded md:py-3 py-2 md:px-5 px-2 text-center cursor-pointer"
            :class="{ 'border-[#ffc400]': comment == 2 }"
            @click="filterComment(2)"
          >
            <span class="flex items-center justify-center">
              <StarIcon myClass="md:w-7 w-5 md:mr-2 mr-1 text-yellow-400" />
              <p class="md:text-xl text-base">2</p>
            </span>
            <span class="sm:inline-block hidden mt-2 text-gray-400"
              >5 Ulasan</span
            >
          </div>
          <div
            class="border rounded md:py-3 py-2 md:px-5 px-2 text-center cursor-pointer"
            :class="{ 'border-[#ffc400]': comment == 1 }"
            @click="filterComment(1)"
          >
            <span class="flex items-center justify-center">
              <StarIcon myClass="md:w-7 w-5 md:mr-2 mr-1 text-yellow-400" />
              <p class="md:text-xl text-base">1</p>
            </span>
            <span class="sm:inline-block hidden mt-2 text-gray-400"
              >5 Ulasan</span
            >
          </div>
        </div>
      </div>
      <!--  -->

      <div class="flex gap-5">
        <div class="mt-5 lg:w-[70%]">
          <div v-if="comment == 5 || comment == 0">
            <h3 class="text-xl font-semibold">Ilham Hafidz</h3>
            <div class="flex mb-1">
              <StarIcon myClass="w-4 text-yellow-400" />
              <StarIcon myClass="w-4 text-yellow-400" />
              <StarIcon myClass="w-4 text-yellow-400" />
              <StarIcon myClass="w-4 text-yellow-400" />
              <StarIcon myClass="w-4 text-yellow-400" />
            </div>
            <span class="text-gray-400">2 hari yang lalu</span>
            <p class="mt-3">
              Kualitas laptop dari ALOPE ini selalu bagus, selalu awet dari
              baterai dan tidak mudah rusak.
            </p>
            <div
              class="bg-gray-100 mr-5 p-5 rounded mt-4 md:ml-10 ml-3 text-gray-600"
            >
              <h4>
                Balasan dari
                <span class="text-blue-500 font-semibold">ALOPE Tech</span>
              </h4>
              <span class="text-gray-400">1 hari yang lalu</span>
              <p class="mt-3">
                Terimakasih untuk ulasannya. Tetap pakai produk dari ALOPE Tech
                dan tetap support kami untuk product elektronik yang lebih
                canggih lainnya.
              </p>
            </div>
            <hr class="my-5" />
          </div>
          <div v-if="comment == 4 || comment == 0">
            <h3 class="text-xl font-semibold">Agran Pujiana</h3>
            <div class="flex mb-1">
              <StarIcon myClass="w-4 text-yellow-400" />
              <StarIcon myClass="w-4 text-yellow-400" />
              <StarIcon myClass="w-4 text-yellow-400" />
              <StarIcon myClass="w-4 text-yellow-400" />
              <StarIcon myClass="w-4 text-gray-400" />
            </div>
            <span class="text-gray-400">1 minggu yang lalu</span>
            <p class="mt-3">
              Kualitas laptopnya memang bagus. Tapi saya merasa laptop dari
              serie IL PRO ini lebih baik desain sebelumnya daripada yang
              terbaru ini.
            </p>
            <div
              class="bg-gray-100 mr-5 p-5 rounded mt-4 md:ml-10 ml-3 text-gray-600"
            >
              <h4>
                Balasan dari
                <span class="text-blue-500 font-semibold">ALOPE Tech</span>
              </h4>
              <span class="text-gray-400">1 hari yang lalu</span>
              <p class="mt-3">
                Terimakasih untuk ulasannya. Mohon untuk hubungi pihak kami
                lewat email jika anda punya saran untuk desain laptop
                kedepannya.
              </p>
            </div>
            <hr class="my-5" />
          </div>
          <div v-if="comment == 5 || comment == 0">
            <h3 class="text-xl font-semibold">Ian Andira</h3>
            <div class="flex mb-1">
              <StarIcon myClass="w-4 text-yellow-400" />
              <StarIcon myClass="w-4 text-yellow-400" />
              <StarIcon myClass="w-4 text-yellow-400" />
              <StarIcon myClass="w-4 text-yellow-400" />
              <StarIcon myClass="w-4 text-yellow-400" />
            </div>
            <span class="text-gray-400">2023-08-23</span>
            <p class="mt-3">
              Saya memakai laptop ini untuk kuliah dan sekaligus bekerja.
              Laptopnya nyaman untuk digunakan dan desainnya juga trendy banget.
            </p>
            <div
              class="bg-gray-100 mr-5 p-5 rounded mt-4 md:ml-10 ml-3 text-gray-600"
            >
              <h4>
                Balasan dari
                <span class="text-blue-500 font-semibold">ALOPE Tech</span>
              </h4>
              <span class="text-gray-400">1 hari yang lalu</span>
              <p class="mt-3">
                Terimakasih untuk ulasannya. Tetap pakai produk dari ALOPE Tech
                dan tetap support kami untuk product elektronik yang lebih
                canggih lainnya.
              </p>
            </div>
            <hr class="my-5" />
          </div>

          <!--  -->
          <div class="relative">
            <textarea
              class="border rounded w-full h-[150px]"
              placeholder="Tulis ulasanmu mengenai produk ini"
            ></textarea>
            <span class="absolute right-0 bottom-0 m-3">
              <Button gradient="cyan-blue" outline> Kirim </Button>
            </span>
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
      //
      comment: 0,
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
    filterComment(value) {
      if (this.comment == value) {
        this.comment = 0;
      } else {
        this.comment = value;
      }
    },
  },
};
</script>

<style scoped>
</style>