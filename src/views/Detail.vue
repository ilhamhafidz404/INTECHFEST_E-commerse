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

import { Button, Tabs, Tab, Breadcrumb, BreadcrumbItem } from "flowbite-vue";
import { ref } from "vue";
const activeTab = ref("first");
</script>
<template>
  <Navbar @changeLanguage="changeLanguage" />

  <!--  -->

  <section
    class="container mx-auto mt-8 lg:px- md:px-0 px-4 dark:text-gray-200"
  >
    <Breadcrumb>
      <BreadcrumbItem href="#" home>
        <router-link to="/">
          <span v-if="language == 'id'">Beranda</span>
          <span v-else>Home</span>
        </router-link>
      </BreadcrumbItem>
      <BreadcrumbItem href="#"> Detail </BreadcrumbItem>
      <BreadcrumbItem> Alope IL PRO 14 </BreadcrumbItem>
    </Breadcrumb>
    <br />

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
              @click="changeImage('./src/assets/product/laptop/detail/4.png')"
              class="border p-1 rounded hover:border-indigo-500 mb-2 border-transparent"
              :class="{
                '!border-indigo-500':
                  imageValue == './src/assets/product/laptop/detail/4.png',
              }"
            >
              <img
                src="./../assets/product/laptop/detail/4.png"
                class="object-cover"
              />
            </li>
          </ul>
        </div>
        <div class="relative col-span-4">
          <figure
            class="zoom"
            @mousemove="zoom"
            :style="[
              imageValue == './src/assets/product/laptop/detail/1.png'
                ? {
                    'background-image':
                      'url(./src/assets/product/laptop/zoom1.png)',
                  }
                : '',
              imageValue == './src/assets/product/laptop/detail/2.png'
                ? {
                    'background-image':
                      'url(./src/assets/product/laptop/zoom2.png)',
                  }
                : '',
              ,
              imageValue == './src/assets/product/laptop/detail/3.png'
                ? {
                    'background-image':
                      'url(./src/assets/product/laptop/zoom3.png)',
                  }
                : '',
              ,
              imageValue == './src/assets/product/laptop/detail/4.png'
                ? {
                    'background-image':
                      'url(./src/assets/product/laptop/detail/4.png)',
                  }
                : '',
              ,
            ]"
          >
            <img
              id="wideImage"
              src="./../assets/product/laptop/1.png"
              class="rounded w-full"
            />
          </figure>
          <button
            class="w-[45px] h-[45px] bg-white dark:bg-slate-700 border dark:border-slate-800 absolute top-0 flex items-center justify-center rounded-full m-2 right-0 hover:bg-white/80 hover:dark:bg-slate-700/80"
          >
            <ZoomIcon myClass="w-6" />
          </button>
        </div>

        <section
          class="col-span-5 mb-5 border p-5 rounded-md border-indigo-500 lg:block hidden"
        >
          <h4 class="font-bold mb-3">
            <span v-if="language == 'id'">
              Atur Jumlah Pembelian & catatan :
            </span>
            <span v-else>Set Purchase Amount & notes:</span>
          </h4>
          <div class="flex items-center gap-10">
            <div class="flex items-center gap-3">
              <button class="border rounded-full" @click="decrementTotalBuy()">
                <MinusIcon myClass="w-5" />
              </button>
              <input
                type="text"
                :value="totalBuy"
                class="border border-gray-400 rounded w-[50px] text-center py-1 dark:bg-slate-700"
              />
              <button class="border rounded-full" @click="incrementTotalBuy()">
                <PlusIcon myClass="w-5" />
              </button>
            </div>
            <div class="flex items-center">
              <PencilIcon myClass="w-4 mr-3" />
              <span v-if="language == 'id'"> Tambah catatan pembelian </span>
              <span v-else>Add purchase note</span>
            </div>
          </div>
          <div class="mt-4 flex items-end gap-5">
            <p>Subtotal :</p>
            <h5 class="text-2xl font-bold">
              <span v-if="language == 'id'">Rp</span>
              <span v-else>IDR</span> 12.500.000
            </h5>
          </div>
          <div class="flex gap-4 mt-5">
            <router-link to="/cart">
              <Button gradient="purple-blue" class="py-[10px]">
                <template #prefix>
                  <CartIcon myClass="w-6" />
                </template>
                <span v-if="language == 'id'">Tambah ke keranjang</span>
                <span v-else>Add to cart</span>
              </Button>
            </router-link>
            <router-link to="/transaction">
              <Button gradient="purple-blue" outline>
                <template #prefix>
                  <MoneyIcon myClass="w-6" />
                </template>
                <span v-if="language == 'id'">Beli langsung</span>
                <span v-else>Buy directly</span>
              </Button>
            </router-link>
          </div>
        </section>
      </div>
      <div class="col-span-4">
        <h1 class="text-4xl font-bold mb-2">ALOPE IL SERIES 14</h1>
        <span class="flex mb-5">
          <span v-if="language == 'id'">Terjual 22</span>
          <span v-else>Sold 22</span>
          <span class="inline-block mx-3">•</span>
          <StarIcon myClass="w-4 mr-1 text-yellow-400" />
          4,5 (5 rating)
          <span class="inline-block mx-3">•</span>
          <span v-if="language == 'id'">Ulasan (3)</span>
          <span v-else>Review (3)</span>
        </span>
        <h2 class="text-3xl font-bold">
          <span v-if="language == 'id'">Rp</span>
          <span v-else>IDR</span> 12.400.000
        </h2>
        <hr class="my-4 dark:border-slate-700" />
        <section>
          <div class="flex items-center gap-5">
            <h4 class="font-bold">
              <span v-if="language == 'id'">Pilih Tipe :</span>
              <span v-else>Select Type :</span>
            </h4>
            <span
              class="text-sm dark:text-gray-400 text-gray-500 font-semibold"
            >
              {{ type }}
            </span>
          </div>
          <div class="mt-3 flex gap-2">
            <Button
              gradient="purple-blue"
              :outline="type != 'Series PRO Core i5 Gen6'"
              @click="changeType('Series PRO Core i5 Gen6')"
            >
              Series PRO Core i5 Gen6
            </Button>
            <Button
              gradient="purple-blue"
              :outline="type != 'Series LITE Core i5 Gen3'"
              @click="changeType('Series LITE Core i5 Gen3')"
            >
              Series LITE Core i5 Gen3
            </Button>
            <Button
              gradient="purple-blue"
              :outline="type != 'Series Normal Core Ryzen5 Gen3'"
              @click="changeType('Series Normal Core Ryzen5 Gen3')"
            >
              Series Normal Core Ryzen5 Gen3
            </Button>
          </div>
        </section>
        <section class="mt-10">
          <div class="flex items-center gap-5">
            <h4 class="font-bold">
              <span v-if="language == 'id'">Pilih kapasitas memory :</span>
              <span v-else>Select memory capacity :</span>
            </h4>
            <span
              class="text-sm dark:text-gray-400 text-gray-500 font-semibold"
              >{{ memory }}</span
            >
          </div>
          <div class="mt-3 flex gap-2">
            <Button
              gradient="purple-blue"
              :outline="memory != '8GB/512GB'"
              @click="changeMemory('8GB/512GB')"
            >
              8GB/512GB
            </Button>
            <Button
              gradient="purple-blue"
              :outline="memory != '8GB/1024GB'"
              @click="changeMemory('8GB/1024GB')"
            >
              8GB/1024GB
            </Button>
            <Button
              gradient="purple-blue"
              :outline="memory != '16GB/512GB'"
              @click="changeMemory('16GB/512GB')"
            >
              16GB/512GB
            </Button>
            <Button
              gradient="purple-blue"
              :outline="memory != '16GB/1024GB'"
              @click="changeMemory('16GB/1024GB')"
            >
              16GB/1024GB
            </Button>
          </div>
        </section>
        <!--  -->
        <div v-if="language == 'id'" class="mt-10">
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
        <div v-else class="mt-10">
          <tabs variant="underline" v-model="activeTab" class="p-5">
            <!-- class appends to content DIV for all tabs -->
            <tab name="first" title="Description">
              <p class="mb-1">
                <span class="font-semibold">
                  The HP Elitebook 840 has a 14 inch FHD IPS screen
                </span>
                and a resolution of 1920 x 1080 pixels. Light and compact laptop
                This is made for professionals who need performance best when
                traveling. Screen display with thin bezels and the aluminum
                design gives it a premium appearance laptops.
              </p>
              <p class="mb-1">
                BIOS technology to the HP Sure Start Gen5 and HP Sure Click
                browsers, This can help secure your PC from hardware threats.
                Produces clear and crisp sound with collaboration features As
                sophisticated as HP Noise Cancellation is, this laptop is
                perfect for when You can meet anywhere without worrying about
                being disturbed by people's voices other.
              </p>
            </tab>
            <tab name="second" title="Spesification">
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
        <h4 class="font-bold mb-3">
          <span v-if="language == 'id'">Atur Jumlah Pembelian & catatan :</span>
          <span v-else>Set Purchase Amount & notes:</span>
        </h4>
        <div class="flex items-center gap-10">
          <div class="flex items-center gap-3">
            <button class="border rounded-full" @click="decrementTotalBuy()">
              <MinusIcon myClass="w-5" />
            </button>
            <input
              type="text"
              :value="totalBuy"
              class="border border-gray-400 rounded w-[50px] text-center py-1 dark:!text-gray-800"
            />
            <button class="border rounded-full" @click="incrementTotalBuy()">
              <PlusIcon myClass="w-5" />
            </button>
          </div>
          <div class="flex items-center">
            <PencilIcon myClass="w-4 mr-3" />
            <span v-if="language == 'id'"> Tambah catatan pembelian </span>
            <span v-else>Add purchase note</span>
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
              <span v-if="language == 'id'">Tambah ke keranjang</span>
              <span v-else>Add to cart</span>
            </Button>
          </router-link>
          <router-link to="/transaction">
            <Button gradient="purple-blue" outline>
              <template #prefix>
                <MoneyIcon myClass="w-6" />
              </template>
              <span v-if="language == 'id'">Beli langsung</span>
              <span v-else>Buy directly</span>
            </Button>
          </router-link>
        </div>
      </section>
    </div>
    <hr class="dark:border-slate-700" />
    <!--  -->
    <div>
      <h2 class="text-2xl font-bold my-3">Ulasan</h2>
      <div
        class="bg-gradient-to-r from-[#f8f6f2] to-white dark:from-slate-900 dark:to-slate-800 p-5 rounded-md lg:flex block lg:justify-between lg:items-center"
      >
        <div
          class="flex gap-2 text-xl items-center lg:mb-0 mb-4 lg:justify-normal justify-center"
        >
          <StarIcon myClass="w-8 text-yellow-400" />
          <span> 4.8 </span>
          <p>/ 5</p>
          <span class="text-gray-400 dark:text-gray-300">(3 ulasan)</span>
        </div>
        <div class="flex md:gap-3 gap-1 lg:justify-normal justify-center">
          <div
            class="border dark:border-slate-700 rounded md:py-3 py-2 md:px-5 px-2 text-center cursor-pointer"
            :class="{ '!border-[#ffc400]': comment == 5 }"
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
            class="border dark:border-slate-700 rounded md:py-3 py-2 md:px-5 px-2 text-center cursor-pointer"
            :class="{ '!border-[#ffc400]': comment == 4 }"
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
            class="border dark:border-slate-700 rounded md:py-3 py-2 md:px-5 px-2 text-center cursor-pointer"
            :class="{ '!border-[#ffc400]': comment == 3 }"
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
            class="border dark:border-slate-700 rounded md:py-3 py-2 md:px-5 px-2 text-center cursor-pointer"
            :class="{ '!border-[#ffc400]': comment == 2 }"
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
            class="border dark:border-slate-700 rounded md:py-3 py-2 md:px-5 px-2 text-center cursor-pointer"
            :class="{ '!border-[#ffc400]': comment == 1 }"
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
            <span class="text-gray-400 dark:text-gray-300"
              >2 hari yang lalu</span
            >
            <p class="mt-3">
              Kualitas laptop dari ALOPE ini selalu bagus, selalu awet dari
              baterai dan tidak mudah rusak.
            </p>
            <div
              class="bg-gray-100 dark:bg-slate-900 mr-5 p-5 rounded mt-4 md:ml-10 ml-3 text-gray-600 dark:text-gray-400"
            >
              <h4>
                Balasan dari
                <span class="text-blue-500 font-semibold">ALOPE Tech</span>
              </h4>
              <span class="text-gray-400 dark:text-gray-300"
                >1 hari yang lalu</span
              >
              <p class="mt-3">
                Terimakasih untuk ulasannya. Tetap pakai produk dari ALOPE Tech
                dan tetap support kami untuk product elektronik yang lebih
                canggih lainnya.
              </p>
            </div>
            <hr class="my-5 dark:border-slate-700" />
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
            <span class="text-gray-400 dark:text-gray-300"
              >1 minggu yang lalu</span
            >
            <p class="mt-3">
              Kualitas laptopnya memang bagus. Tapi saya merasa laptop dari
              serie IL PRO ini lebih baik desain sebelumnya daripada yang
              terbaru ini.
            </p>
            <div
              class="bg-gray-100 dark:bg-slate-900 mr-5 p-5 rounded mt-4 md:ml-10 ml-3 text-gray-600 dark:text-gray-400"
            >
              <h4>
                Balasan dari
                <span class="text-blue-500 font-semibold">ALOPE Tech</span>
              </h4>
              <span class="text-gray-400 dark:text-gray-300"
                >1 hari yang lalu</span
              >
              <p class="mt-3">
                Terimakasih untuk ulasannya. Mohon untuk hubungi pihak kami
                lewat email jika anda punya saran untuk desain laptop
                kedepannya.
              </p>
            </div>
            <hr class="my-5 dark:border-slate-700" />
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
            <span class="text-gray-400 dark:text-gray-300">2023-08-23</span>
            <p class="mt-3">
              Saya memakai laptop ini untuk kuliah dan sekaligus bekerja.
              Laptopnya nyaman untuk digunakan dan desainnya juga trendy banget.
            </p>
            <div
              class="bg-gray-100 dark:bg-slate-900 mr-5 p-5 rounded mt-4 md:ml-10 ml-3 text-gray-600 dark:text-gray-400"
            >
              <h4>
                Balasan dari
                <span class="text-blue-500 font-semibold">ALOPE Tech</span>
              </h4>
              <span class="text-gray-400 dark:text-gray-300"
                >1 hari yang lalu</span
              >
              <p class="mt-3">
                Terimakasih untuk ulasannya. Tetap pakai produk dari ALOPE Tech
                dan tetap support kami untuk product elektronik yang lebih
                canggih lainnya.
              </p>
            </div>
            <hr class="my-5 dark:border-slate-700" />
          </div>

          <!--  -->
          <div class="relative">
            <textarea
              class="border rounded w-full h-[150px] dark:bg-slate-700"
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

      type: "Series PRO Core i5 Gen6",
      memory: "8GB/512GB",

      language: "id",
    };
  },
  methods: {
    changeLanguage(lang) {
      this.language = lang;
    },

    changeImage(value) {
      this.imageValue = value;
      document.getElementById("wideImage").src = value;
    },
    changeType(value) {
      this.type = value;
    },
    changeMemory(value) {
      this.memory = value;
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
    zoom(e) {
      var zoomer = e.currentTarget;
      var offsetX, offsetY;
      var x, y;
      e.offsetX ? (offsetX = e.offsetX) : (offsetX = e.touches[0].pageX);
      e.offsetY ? (offsetY = e.offsetY) : (offsetX = e.touches[0].pageX);
      x = (offsetX / zoomer.offsetWidth) * 100;
      y = (offsetY / zoomer.offsetHeight) * 100;
      zoomer.style.backgroundPosition = x + "% " + y + "%";
    },
  },
};
</script>

<style scoped>
figure.zoom {
  background-position: 50% 50%;
  background-size: cover;
  cursor: zoom-in;
}
figure.zoom img:hover {
  opacity: 0;
}
figure.zoom img {
  transition: opacity 0.5s;
  display: block;
  width: 100%;
}
</style>