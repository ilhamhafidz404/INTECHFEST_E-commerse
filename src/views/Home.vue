<script setup>
import { ref } from "vue";
//
import Navbar from "../components/navbar/navbar.vue";
import Footer from "../components/footer.vue";

//
import ProductCard from "../components/productCard.vue";

// icons
import FireIcon from "../components/icons/fireIcon.vue";
import ChevronRightIcon from "../components/icons/chevronRightIcon.vue";
import BoxIcon from "../components/icons/boxIcon.vue";
import OfficeIcon from "../components/icons/officeIcon.vue";

import "vanilla-tilt";
import { Carousel, Button, Pagination } from "flowbite-vue";

import { Splide, SplideSlide } from "@splidejs/vue-splide";
const pictures = [
  {
    src: "./src/assets/slider/1.png",
    alt: "Picture 1",
  },
  {
    src: "./src/assets/slider/2.png",
    alt: "Picture 2",
  },
];

const products = [
  {
    dataFilter: "laptop",
    img: "/src/assets/product/laptop/1.png",
    isDiscount: true,
    isPopular: false,
    isNew: false,
    hasColors: false,
    isFlashSale: false,
    name: "Laptop ALOPE IL 14",
  },
  {
    dataFilter: "laptop",
    img: "/src/assets/product/laptop/2.png",
    isDiscount: false,
    isPopular: true,
    isNew: false,
    hasColors: true,
    isFlashSale: false,
    name: "Laptop ALOPE IL 14 PRO",
  },
  {
    dataFilter: "laptop",
    img: "/src/assets/product/laptop/3.png",
    isDiscount: false,
    isPopular: false,
    isNew: false,
    hasColors: false,
    isFlashSale: false,
    name: "ALOPE Notebook S4T",
  },
  {
    dataFilter: "handphone",
    img: "/src/assets/product/phone/3.png",
    isDiscount: false,
    isPopular: false,
    isNew: false,
    hasColors: false,
    isFlashSale: false,
    name: "ALOPE Phone Ultron",
  },
  {
    dataFilter: "handphone",
    img: "/src/assets/product/phone/2.png",
    isDiscount: false,
    isPopular: false,
    isNew: false,
    hasColors: false,
    isFlashSale: false,
    name: "ALOPE Galaxy Wings",
  },
  {
    dataFilter: "monitor",
    img: "/src/assets/product/monitor/1.png",
    isDiscount: false,
    isPopular: false,
    isNew: true,
    hasColors: false,
    isFlashSale: false,
    name: "ALOPE Monitor 14inc",
  },
  {
    dataFilter: "monitor",
    img: "/src/assets/product/monitor/2.png",
    isDiscount: false,
    isPopular: false,
    isNew: false,
    hasColors: false,
    isFlashSale: false,
    name: "ALOPE 4K Monitor",
  },
  {
    dataFilter: "workbench",
    img: "/src/assets/product/workbench/1.png",
    isDiscount: false,
    isPopular: false,
    isNew: false,
    hasColors: false,
    isFlashSale: false,
    name: "ALOPE Alien Ware",
  },
];

const recomendedProducts = [
  {
    img: "/src/assets/product/laptop/1.png",
    isDiscount: true,
    isPopular: false,
    isNew: false,
    hasColors: false,
    isFlashSale: false,
    name: "ALOPE IL Vostro",
  },
  {
    img: "/src/assets/product/laptop/2.png",
    isDiscount: false,
    isPopular: true,
    isNew: false,
    hasColors: true,
    isFlashSale: false,
    name: "ALOPE YUEX Pro Series",
  },
  {
    img: "/src/assets/product/phone/3.png",
    isDiscount: false,
    isPopular: false,
    isNew: true,
    hasColors: false,
    isFlashSale: false,
    name: "ALOPE Phone Ultron",
  },
];

const currentPage = ref(1);
</script>
<template>
  <Navbar @changeLanguage="changeLanguage" />

  <!--  -->

  <header class="container mx-auto mt-8 lg:px-20 md:px-10 px-3">
    <Carousel :pictures="pictures"></Carousel>
  </header>

  <!-- kategori -->
  <section class="container mx-auto mt-8 lg:px-20 md:px-10 px-3">
    <div
      class="lg:flex inline-block items-center justify-between bg-gray-100 dark:bg-slate-900 rounded-md py-4 lg:px-10 px-5 shadow lg:w-auto w-full dark:text-gray-200"
    >
      <div class="md:flex gap-5 items-center">
        <div>
          <img
            loading="lazy"
            src="./../assets/categoryVector.png"
            class="w-[190px] md:mx-0 mx-auto"
          />
        </div>
        <div>
          <h5>Hello Ilham</h5>
          <h4 class="text-2xl font-semibold">
            {{ language == "id" ? content.category.id : content.category.en }}
          </h4>
        </div>
      </div>
      <div>
        <ul
          class="md:flex md:justify-center grid grid-cols-2 md:gap-10 gap-2 place-items-center lg:mt-0 mt-3"
        >
          <li
            class="w-[100px] hover:bg-gray-300 dark:hover:bg-slate-800 text-center py-2 rounded"
          >
            <img
              loading="lazy"
              src="./../assets/icon/ic-laptop.svg"
              class="mx-auto"
            />
            Laptop
          </li>
          <li
            class="w-[100px] hover:bg-gray-300 dark:hover:bg-slate-800 text-center py-2 rounded"
          >
            <img
              loading="lazy"
              src="./../assets/icon/ic-monitor.svg"
              class="mx-auto"
            />
            Monitor
          </li>
          <li
            class="w-[100px] hover:bg-gray-300 dark:hover:bg-slate-800 text-center py-2 rounded"
          >
            <img
              loading="lazy"
              src="./../assets/icon/ic-workbench.svg"
              class="mx-auto"
            />
            Workbench
          </li>
          <li
            class="w-[100px] hover:bg-gray-300 dark:hover:bg-slate-800 text-center py-2 rounded"
          >
            <img
              loading="lazy"
              src="./../assets/icon/ic-phone.svg"
              class="mx-auto"
            />
            Phone
          </li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Flash Sale -->
  <div class="container mx-auto mt-8 lg:px-20 md:px-10 px-3">
    <div
      class="bg-gradient-to-r from-red-500/90 to-red-500/60 rounded-md pb-5 pt-2"
    >
      <div class="grid lg:grid-cols-2 gap-5 mt-5 place-items-center">
        <div>
          <div class="flex ml-10">
            <p class="text-gray-100 inline-block mr-3 font-bold">
              Promo berakhir pada :
            </p>
            <div id="countdown">
              <span
                id="hour"
                class="bg-[#dd2323] w-[23px] py-[1px] inline-flex justify-center rounded text-white font-semibold"
              ></span>
              <span class="font-semibold text-xl mx-2 inline-block text-white"
                >:</span
              >
              <span
                id="minute"
                class="bg-[#dd2323] w-[23px] py-[1px] inline-flex justify-center rounded text-white font-semibold"
              ></span>
              <span class="font-semibold text-xl mx-2 inline-block text-white"
                >:</span
              >
              <span
                id="second"
                class="bg-[#dd2323] w-[23px] py-[1px] inline-flex justify-center rounded text-white font-semibold"
              ></span>
            </div>
          </div>
          <img loading="lazy" src="./../assets/flashSale.png" class="w-full" />
        </div>
        <div>
          <div class="md:flex md:justify-end hidden gap-5 px-7">
            <ProductCard
              img="/src/assets/product/phone/1.png"
              :isDiscount="false"
              :isPopular="false"
              :isNew="false"
              :hasColors="false"
              :isFlashSale="true"
              :language="language"
              name="ALOPE E12 Pro"
            />
            <ProductCard
              img="/src/assets/product/laptop/4.png"
              :isDiscount="false"
              :isPopular="false"
              :isNew="false"
              :hasColors="false"
              :isFlashSale="true"
              :language="language"
              name="ALOPE IL MAX Laptop"
            />
          </div>
          <div class="md:hidden inline-block mx-6 mt-8">
            <div class="">
              <div class="grid grid-cols-2 gap-5">
                <img
                  loading="lazy"
                  src="./../assets/product/laptop/2.webp"
                  class="rounded-md"
                />
                <img
                  loading="lazy"
                  src="./../assets/product/laptop/3.webp"
                  class="rounded-md"
                />
                <img
                  loading="lazy"
                  src="./../assets/product/laptop/4.webp"
                  class="rounded-md"
                />
                <img
                  loading="lazy"
                  src="./../assets/product/laptop/5.webp"
                  class="rounded-md"
                />
              </div>
              <Button gradient="red" class="w-full font-semibold mt-5">
                Lihat Promo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Rekomendasi -->
  <div class="container mx-auto lg:px-20 md:px-10 px-3 mt-10">
    <h2
      class="text-2xl font-semibold mr-5 flex gap-2 items-center dark:text-gray-200"
    >
      <FireIcon myClass="w-7 text-red-500" />

      Produk Pilihan
    </h2>
    <div
      class="hidden md:grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-5 place-items-center"
    >
      <ProductCard
        v-for="product in recomendedProducts"
        :key="product"
        :img="product.img"
        :isDiscount="product.isDiscount"
        :isPopular="product.isPopular"
        :isNew="product.isNew"
        :hasColors="product.hasColors"
        :isFlashSale="product.isFlashSale"
        :language="language"
        :name="product.name"
      />
      <div class="">
        <div class="grid grid-cols-2 gap-5">
          <img
            loading="lazy"
            src="./../assets/product/laptop/2.webp"
            class="rounded-md"
          />
          <img
            loading="lazy"
            src="./../assets/product/laptop/3.webp"
            class="rounded-md"
          />
          <img
            loading="lazy"
            src="./../assets/product/laptop/4.webp"
            class="rounded-md"
          />
          <img
            loading="lazy"
            src="./../assets/product/laptop/5.webp"
            class="rounded-md"
          />
        </div>
        <Button gradient="purple-blue" class="w-full py-4 mt-5 text-center">
          {{ language == "id" ? "Lihat Lainnya" : "View more" }}
        </Button>
      </div>
    </div>
    <!--  -->
    <section class="mt-10 block md:hidden">
      <Splide
        :options="{
          rewind: true,
          // perPage: 4,
          // perMove: 1,
          autoWidth: true,
          gap: '1rem',
        }"
        aria-label="Products"
      >
        <SplideSlide v-for="product in recomendedProducts" :key="product">
          <ProductCard
            :img="product.img"
            :isDiscount="product.isDiscount"
            :isPopular="product.isPopular"
            :isNew="product.isNew"
            :hasColors="product.hasColors"
            :isFlashSale="product.isFlashSale"
            :language="language"
          />
        </SplideSlide>
      </Splide>
    </section>
  </div>

  <!-- Unggulan -->
  <div class="container mx-auto lg:px-20 md:px-10 px-3 mt-10">
    <div
      class="bg-gray-100 dark:bg-slate-900 sm:p-5 p-3 rounded relative dark:text-gray-200"
    >
      <img
        loading="lazy"
        src="./../assets/ribbon.png"
        class="absolute right-[-25px] top-[-25px] w-[200px] z-10"
      />
      <div class="grid lg:grid-cols-2 grid-cols-1 gap-10 place-items-center">
        <div class="relative">
          <img
            id="superior"
            loading="lazy"
            src="./../assets/superior/1.jpg"
            class="rounded w-full h-[440px] object-cover object-center"
          />
          <div
            class="absolute bottom-[10px] flex gap-6 left-1/2 -translate-x-1/2 bg-black/20 py-2 px-10 rounded"
          >
            <div
              @click="swapSuperior('./src/assets/superior/1.jpg')"
              class="border-2 border-white hover:border-purple-500 rounded-full flex items-center justify-center"
              :class="{
                '!border-purple-500':
                  superiorImage == './src/assets/superior/1.jpg',
              }"
            >
              <span
                class="w-[30px] h-[30px] cursor-pointer bg-[#2e3642] rounded-full"
              ></span>
            </div>
            <div
              @click="swapSuperior('./src/assets/superior/2.jpg')"
              class="border-2 border-white hover:border-purple-500 rounded-full flex items-center justify-center"
              :class="{
                '!border-purple-500':
                  superiorImage == './src/assets/superior/2.jpg',
              }"
            >
              <span
                class="w-[30px] h-[30px] cursor-pointer bg-white rounded-full"
              ></span>
            </div>
            <div
              @click="swapSuperior('./src/assets/superior/3.jpg')"
              class="border-2 border-white hover:border-purple-500 rounded-full flex items-center justify-center"
              :class="{
                '!border-purple-500':
                  superiorImage == './src/assets/superior/3.jpg',
              }"
            >
              <span
                class="w-[30px] h-[30px] cursor-pointer bg-[#b02f4d] rounded-full"
              ></span>
            </div>
            <div
              @click="swapSuperior('./src/assets/superior/4.jpg')"
              class="border-2 border-white hover:border-purple-500 rounded-full flex items-center justify-center"
              :class="{
                '!border-purple-500':
                  superiorImage == './src/assets/superior/4.jpg',
              }"
            >
              <span
                class="w-[30px] h-[30px] cursor-pointer bg-[#57619e] rounded-full"
              ></span>
            </div>
          </div>
        </div>
        <div class="text-left">
          <h2 class="md:text-3xl text-2xl font-bold mb-7">ALOPE IL PRO 14</h2>
          <p
            class="md:mb-16 mb-10 md:text-base text-sm"
            v-html="
              language == 'id'
                ? content.superior.primary.id
                : content.superior.primary.en
            "
          ></p>
          <div class="sm:flex block md:gap-6 gap-3 mb-6 md:text-base text-sm">
            <div
              class="sm:w-1/3 sm:block sm:mb-0 flex gap-10 items-center mb-5"
            >
              <div class="sm:w-auto w-1/2 sm:text-left text-right">
                Hingga <br />
                <span class="text-3xl font-semibold block">1,4x</span>
              </div>
              <div
                class="sm:w-auto w-1/2"
                v-html="
                  language == 'id'
                    ? content.superior.note1.id
                    : content.superior.note1.en
                "
              ></div>
            </div>
            <div
              class="sm:w-1/3 sm:block sm:mb-0 flex gap-10 items-center justify-between mb-5"
            >
              <div class="sm:w-auto w-1/2 sm:text-left text-right">
                Tahan Baterai <br />
                <span class="text-3xl font-semibold block">38 jam</span>
              </div>
              <div
                class="sm:w-auto w-1/2"
                v-html="
                  language == 'id'
                    ? content.superior.note2.id
                    : content.superior.note2.en
                "
              ></div>
            </div>
            <div
              class="sm:w-1/3 sm:block sm:mb-0 flex gap-10 items-center mb-5"
            >
              <div class="sm:w-auto w-1/2 sm:text-left text-right">
                Ukuran Layar <br />
                <span class="text-3xl font-semibold block">17 inch</span>
              </div>
              <div
                class="sm:w-auto w-1/2"
                v-html="
                  language == 'id'
                    ? content.superior.note3.id
                    : content.superior.note3.en
                "
              ></div>
            </div>
          </div>
          <router-link
            to="/product"
            target="_blank"
            class="text-blue-400 underline font-semibold"
          >
            {{ language == "id" ? "Lihat selengkapnya >" : "View more >" }}
          </router-link>
        </div>
      </div>
    </div>
  </div>

  <!-- For -->
  <div
    class="container mx-auto lg:px-20 md:px-10 px-3 mt-10 grid md:grid-cols-3 lg:gap-5 gap-3"
  >
    <div
      class="your-element w-full rounded lg:h-[300px] h-[200px] bg-cover relative overflow-hidden flex items-center justify-center after:content-[''] after:absolute after:inset-0 after:z-10 after:bg-black/40 cursor-pointer"
      style="background-image: url('./src/assets/for/student.jpg')"
      data-tilt
      @click="$router.push('/recomended/student')"
    >
      <div class="relative z-20 text-center">
        <h3 class="text-2xl text-white font-bold tracking-wide">
          {{
            language == "id"
              ? content.suitable.student.title.id
              : content.suitable.student.title.en
          }}
        </h3>
        <p class="text-gray-200">
          {{
            language == "id"
              ? content.suitable.student.subtitle.id
              : content.suitable.student.subtitle.en
          }}
        </p>
      </div>
    </div>
    <div
      class="your-element w-full rounded lg:h-[300px] h-[200px] bg-cover bg-bottom relative overflow-hidden flex items-center justify-center after:content-[''] after:absolute after:inset-0 after:z-10 after:bg-black/40 cursor-pointer"
      style="background-image: url('./src/assets/for/work.jpg')"
      data-tilt
      @click="$router.push('/recomended/work')"
    >
      <div class="relative z-20 text-center">
        <h3 class="text-2xl text-white font-bold tracking-wide">
          {{
            language == "id"
              ? content.suitable.work.title.id
              : content.suitable.work.title.en
          }}
        </h3>
        <p class="text-gray-200">
          {{
            language == "id"
              ? content.suitable.work.subtitle.id
              : content.suitable.work.subtitle.en
          }}
        </p>
      </div>
    </div>
    <div
      class="your-element w-full rounded lg:h-[300px] h-[200px] bg-cover bg-center relative overflow-hidden flex items-center justify-center after:content-[''] after:absolute after:inset-0 after:z-10 after:bg-black/40 cursor-pointer"
      style="background-image: url('./src/assets/for/gamer.jpg')"
      data-tilt
      @click="$router.push('/recomended/gamer')"
    >
      <div class="relative z-20 text-center">
        <h3 class="text-2xl text-white font-bold tracking-wide">
          {{
            language == "id"
              ? content.suitable.gaming.title.id
              : content.suitable.gaming.title.en
          }}
        </h3>
        <p class="text-gray-200">
          {{
            language == "id"
              ? content.suitable.gaming.subtitle.id
              : content.suitable.gaming.subtitle.en
          }}
        </p>
      </div>
    </div>
  </div>

  <!-- Lainnya -->
  <div class="container mx-auto lg:px-20 md:px-10 px-3 mt-16">
    <h2
      class="text-2xl font-semibold mr-5 flex gap-2 items-center mb-7 dark:text-gray-200"
    >
      <BoxIcon myClass="w-7 text-yellow-400" />

      <span v-if="language == 'id'">Produk Kami</span>
      <span v-else>Our Product</span>
    </h2>
    <div class="grid md:grid-cols-5 grid-cols-3 md:gap-5 gap-2">
      <button
        class="categories inline-block md:h-[100px] h-[70px] w-full bg-cover rounded p-2 bg-center text-white text-xl relative overflow-hidden font-semibold after:content-[''] after:absolute after:inset-0 after:bg-black/50 cursor-pointer"
        style="background-image: url('./src/assets/category/all.png')"
        @click="filterProduct('all')"
      >
        <span class="relative z-10">{{
          language == "id" ? "Semua" : "All"
        }}</span>
      </button>
      <button
        class="categories inline-block md:h-[100px] h-[70px] w-full bg-cover rounded p-2 bg-center text-white text-xl relative overflow-hidden font-semibold after:content-[''] after:absolute after:inset-0 after:bg-black/50 cursor-pointer"
        style="background-image: url('./src/assets/category/laptop.jpg')"
        @click="filterProduct('laptop')"
      >
        <span class="relative z-10">Laptop</span>
      </button>
      <button
        class="categories inline-block md:h-[100px] h-[70px] w-full bg-cover rounded p-2 bg-center text-white text-xl relative overflow-hidden font-semibold after:content-[''] after:absolute after:inset-0 after:bg-black/50 cursor-pointer"
        style="background-image: url('./src/assets/category/handphone.jpg')"
        @click="filterProduct('handphone')"
      >
        <span class="relative z-10">Handphone</span>
      </button>
      <button
        class="categories inline-block md:h-[100px] h-[70px] w-full bg-cover rounded p-2 bg-center text-white text-xl relative overflow-hidden font-semibold after:content-[''] after:absolute after:inset-0 after:bg-black/50 cursor-pointer"
        style="background-image: url('./src/assets/category/monitor.jpg')"
        @click="filterProduct('monitor')"
      >
        <span class="relative z-10">Monitor</span>
      </button>
      <button
        class="categories inline-block md:h-[100px] h-[70px] w-full bg-cover rounded p-2 bg-center text-white text-xl relative overflow-hidden font-semibold after:content-[''] after:absolute after:inset-0 after:bg-black/50 cursor-pointer"
        style="background-image: url('./src/assets/category/workbench.jpg')"
        @click="filterProduct('workbench')"
      >
        <span class="relative z-10">Workbench</span>
      </button>
    </div>

    <!--  -->
    <div
      class="lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-5 place-items-center md:grid hidden"
    >
      <div
        v-for="product in products"
        :key="product"
        :class="{
          hidden: dataFilter != 'all' && dataFilter != product.dataFilter,
        }"
      >
        <ProductCard
          :img="product.img"
          :isDiscount="product.isDiscount"
          :isPopular="product.isPopular"
          :isNew="product.isNew"
          :hasColors="product.hasColors"
          :isFlashSale="product.isFlashSale"
          :language="language"
          :name="product.name"
        />
      </div>
    </div>

    <!--  -->
    <section class="mt-10 block md:hidden">
      <Splide
        :options="{
          rewind: true,
          // perPage: 4,
          // perMove: 1,
          autoWidth: true,
          gap: '1rem',
        }"
        aria-label="Products"
      >
        <SplideSlide v-for="product in products" :key="product">
          <ProductCard
            :class="{
              hidden: dataFilter != 'all' && dataFilter != product.dataFilter,
            }"
            :img="product.img"
            :isDiscount="product.isDiscount"
            :isPopular="product.isPopular"
            :isNew="product.isNew"
            :hasColors="product.hasColors"
            :isFlashSale="product.isFlashSale"
            :language="language"
          />
        </SplideSlide>
      </Splide>
    </section>

    <Pagination
      v-if="dataFilter == 'all'"
      class="mt-10 sm:block hidden"
      v-model="currentPage"
      :total-pages="3"
      show-icons
    ></Pagination>
  </div>

  <!-- office -->
  <div class="container mx-auto lg:px-20 md:px-10 px-3 mt-20">
    <h2
      class="text-2xl font-semibold mr-5 flex gap-2 items-center mb-7 dark:text-gray-200"
    >
      <OfficeIcon myClass="w-7 text-blue-500" />

      <span v-if="language == 'id'"> Kantor Kami</span>
      <span v-else> Our Office</span>
    </h2>

    <!--  -->
    <div class="grid lg:grid-cols-4 grid-cols-2 md:gap-10 gap-3">
      <div class="cursor-pointer">
        <img
          src="./../assets/office/1.jpg"
          class="rounded w-full h-[200px] object-cover"
        />
        <div
          class="bg-gradient-to-r from-[#427ff8] to-[#7840f2] shadow-md shadow-blue-400 w-[90%] mx-auto -translate-y-1/2 p-4 rounded text-white flex items-center justify-between"
        >
          <h4>
            ALOPE Center Bandung
            <span v-if="language == 'id'" class="text-sm text-gray-300 block"
              >lihat di map</span
            >
            <span v-else class="text-sm text-gray-300 block">see on maps</span>
          </h4>
          <ChevronRightIcon myClass="w-6 md:block hidden" />
        </div>
      </div>
      <div class="cursor-pointer">
        <img
          src="./../assets/office/2.jpg"
          class="rounded w-full h-[200px] object-cover"
        />
        <div
          class="bg-gradient-to-r from-[#427ff8] to-[#7840f2] shadow-md shadow-blue-400 w-[90%] mx-auto -translate-y-1/2 p-4 rounded text-white flex items-center justify-between"
        >
          <h4>
            ALOPE Center Kuningan
            <span v-if="language == 'id'" class="text-sm text-gray-300 block"
              >lihat di map</span
            >
            <span v-else class="text-sm text-gray-300 block">see on maps</span>
          </h4>
          <ChevronRightIcon myClass="w-6 md:block hidden" />
        </div>
      </div>
      <div class="cursor-pointer">
        <img
          src="./../assets/office/3.jpg"
          class="rounded w-full h-[200px] object-cover"
        />
        <div
          class="bg-gradient-to-r from-[#427ff8] to-[#7840f2] shadow-md shadow-blue-400 w-[90%] mx-auto -translate-y-1/2 p-4 rounded text-white flex items-center justify-between"
        >
          <h4>
            ALOPE Center Bali
            <span v-if="language == 'id'" class="text-sm text-gray-300 block"
              >lihat di map</span
            >
            <span v-else class="text-sm text-gray-300 block">see on maps</span>
          </h4>
          <ChevronRightIcon myClass="w-6 md:block hidden" />
        </div>
      </div>
      <div class="cursor-pointer">
        <img
          src="./../assets/office/4.jpg"
          class="rounded w-full h-[200px] object-cover"
        />
        <div
          class="bg-gradient-to-r from-[#427ff8] to-[#7840f2] shadow-md shadow-blue-400 w-[90%] mx-auto -translate-y-1/2 p-4 rounded text-white flex items-center justify-between"
        >
          <h4>
            ALOPE Center Jakarta
            <span v-if="language == 'id'" class="text-sm text-gray-300 block"
              >lihat di map</span
            >
            <span v-else class="text-sm text-gray-300 block">see on maps</span>
          </h4>
          <ChevronRightIcon myClass="w-6 md:block hidden" />
        </div>
      </div>
    </div>
  </div>

  <!-- footer -->
  <Footer :language="language" />
</template>

<script>
export default {
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      dataFilter: "all",
      language: "id",
      superiorImage: "./src/assets/superior/1.jpg",

      //
      content: {
        category: {
          id: "Apa yang kamu cari?",
          en: "What are you looking for?",
        },
        suitable: {
          student: {
            title: {
              id: "Untuk Pelajar",
              en: "For Student",
            },
            subtitle: {
              id: "Cocok untuk pelajar atau mahasiswa",
              en: "Suitable for students and college",
            },
          },
          work: {
            title: {
              id: "Untuk Kerja",
              en: "For Work",
            },
            subtitle: {
              id: "Cocok untuk pekerja IT",
              en: "suitable for IT workers or programmer",
            },
          },
          gaming: {
            title: {
              id: "Untuk Game",
              en: "For Gaming",
            },
            subtitle: {
              id: "Cocok untuk para gamer",
              en: "suitable for Gamers",
            },
          },
        },
        superior: {
          primary: {
            id: "<span class='font-semibold'>ALOPE IL PRO 14</span> memberi lebih banyak ruang untuk segala hal yang Anda sukai <br />dengan layar Liquid Retina yang luas dengan model layar 13 inci.<br /> Bertenaga super berkat chip M2 dan dengan kekuatan baterai hingga 18 jam. <br /> Laptop ini menghadirkan performa secepat kilat dalam desain ultra portabel.",
            en: "<span class='font-semibold'>ALOPE IL PRO 14</span> gives you more space for everything you love <br />with a spacious Liquid Retina display in a 13 inch screen model.<br /> Super powerful thanks to the M2 chip and with up to 18 hours of battery life. <br /> This laptop delivers lightning-fast performance in an ultra-portable design.",
          },
          note1: {
            id: "lebih cepat dibandingkan MacBook Air. ",
            en: "faster than MacBook Air.",
          },
          note2: {
            id: "lebih hemat dan mampu bekerja lebih lama tanpa takut lemah baterai. ",
            en: "more economical and able to work longer without fear of low battery",
          },
          note3: {
            id: "Membuat pandangan mata nyaman dan tidak cepat lelah. ",
            en: "Makes your eyes comfortable and doesn't get tired quickly.",
          },
        },
      },
    };
  },
  methods: {
    filterProduct(dataFilter = "all") {
      this.dataFilter = dataFilter;
    },
    changeLanguage(lang) {
      this.language = lang;
    },
    //
    swapSuperior(valueSrc) {
      this.superiorImage = valueSrc;
      document.getElementById("superior").src = valueSrc;
    },
  },
  mounted() {
    // Set the date we're counting down to
    var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      // document.getElementById("demo").innerHTML =
      //   days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
      // document.getElementById("demo").innerHTML =
      //   hours + "Jam " + minutes + "menit " + seconds + "detik ";
      document.getElementById("hour").innerHTML = hours;
      document.getElementById("minute").innerHTML = minutes;
      document.getElementById("second").innerHTML = seconds;

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);

    VanillaTilt.init(document.querySelectorAll(".your-element"), {
      max: 5,
      speed: 300,
      glare: true,
      "max-glare": 0.4,
    });

    VanillaTilt.init(document.querySelectorAll(".categories"), {
      max: 0,
      speed: 300,
      glare: true,
      "max-glare": 1,
    });
  },
};
</script>

<style>
</style>