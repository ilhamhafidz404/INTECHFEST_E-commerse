<script setup>
//
import Navbar from "../components/navbar/navbar.vue";
import Footer from "../components/footer.vue";

//
import ProductCard from "../components/productCard.vue";

// icons
import FilterIcon from "../components/icons/filterIcon.vue";
import ChevronDownIcon from "../components/icons/chevronDownIcon.vue";
import SortByIcon from "../components/icons/sortByIcon.vue";

import "vanilla-tilt";
import { Button, Pagination, Breadcrumb, BreadcrumbItem } from "flowbite-vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";

const products = [
  {
    dataFilter: "laptop",
    img: "/src/assets/product/laptop/1.webp",
    isDiscount: true,
    isPopular: false,
    isNew: false,
    hasColors: false,
    isFlashSale: false,
    name: "Laptop ALOPE IL 14",
  },
  {
    dataFilter: "laptop",
    img: "/src/assets/product/laptop/2.webp",
    isDiscount: false,
    isPopular: true,
    isNew: false,
    hasColors: true,
    isFlashSale: false,
    name: "Laptop ALOPE IL 14 PRO",
  },
  {
    dataFilter: "laptop",
    img: "/src/assets/product/laptop/3.webp",
    isDiscount: false,
    isPopular: false,
    isNew: false,
    hasColors: false,
    isFlashSale: false,
    name: "ALOPE Notebook S4T",
  },
  {
    dataFilter: "handphone",
    img: "/src/assets/product/phone/3.webp",
    isDiscount: false,
    isPopular: false,
    isNew: false,
    hasColors: false,
    isFlashSale: false,
    name: "ALOPE Phone Ultron",
  },
  {
    dataFilter: "handphone",
    img: "/src/assets/product/phone/2.webp",
    isDiscount: false,
    isPopular: false,
    isNew: false,
    hasColors: false,
    isFlashSale: false,
    name: "ALOPE Galaxy Wings",
  },
  {
    dataFilter: "monitor",
    img: "/src/assets/product/monitor/1.webp",
    isDiscount: false,
    isPopular: false,
    isNew: true,
    hasColors: false,
    isFlashSale: false,
    name: "ALOPE Monitor 14inc",
  },
  {
    dataFilter: "monitor",
    img: "/src/assets/product/monitor/2.webp",
    isDiscount: false,
    isPopular: false,
    isNew: false,
    hasColors: false,
    isFlashSale: false,
    name: "ALOPE 4K Monitor",
  },
  {
    dataFilter: "workbench",
    img: "/src/assets/product/workbench/1.webp",
    isDiscount: false,
    isPopular: false,
    isNew: false,
    hasColors: false,
    isFlashSale: false,
    name: "ALOPE Alien Ware",
  },
];
</script>
<template>
  <Navbar @changeLanguage="changeLanguage" />

  <div
    class="container mx-auto lg:px-20 md:px-10 px-3 mt-10 dark:text-gray-200"
  >
    <!-- breadcrumb -->
    <Breadcrumb>
      <BreadcrumbItem href="#" home>
        <router-link to="/">Beranda</router-link>
      </BreadcrumbItem>
      <BreadcrumbItem href="#"> Rekomendasi </BreadcrumbItem>
      <BreadcrumbItem v-if="slug == 'student'"> Pelajar </BreadcrumbItem>
      <BreadcrumbItem v-if="slug == 'work'"> Pekerja </BreadcrumbItem>
      <BreadcrumbItem v-if="slug == 'gamer'"> Gamer </BreadcrumbItem>
    </Breadcrumb>

    <!--  -->
    <img
      v-if="slug == 'student'"
      src="./../assets/banner/student.png"
      class="rounded my-3 w-full lg:h-[450px] object-cover"
      loading="lazy"
    />
    <img
      v-if="slug == 'work'"
      src="./../assets/banner/work.png"
      class="rounded my-3 w-full lg:h-[450px] object-cover"
      loading="lazy"
    />
    <img
      v-if="slug == 'gamer'"
      src="./../assets/banner/gamer.png"
      class="rounded my-3 w-full lg:h-[450px] object-cover"
      loading="lazy"
    />
    <p v-if="slug == 'student'" class="md:text-[16px] text-base mt-3">
      Set untuk pelajar. Kumpulan Laptop, HP sampai Workbench yang
      direkomendasikan untuk para pelajar dan mahasiswa. Harga terjangkau dengan
      spek standar untuk mengerjakan tugas tugas di sekolah dan nyaman untuk
      dipakai.
    </p>
    <p v-if="slug == 'work'" class="md:text-[16px] text-base mt-3">
      Set untuk pekerja kantoran. Kumpulan Laptop, HP sampai Workbench yang
      direkomendasikan untuk kalian yang bekerja di kantor dalam bidang IT
      maupun non-IT. Spesifikasi yang cukup tinggi dengan harga terjangkau dan
      kualitas standar untuk pekerja kantoran maupun WFH.
    </p>
    <p v-if="slug == 'gamer'" class="md:text-[16px] text-base mt-3">
      Set untuk para Gamer yang berfokus bermain game dalam waktu jangka panjang
      maupun sekedar menghilangkan jenuh. Spesifikasi yang besar dengan
      mendukung untuk bermain game cukup lama dengan daya tahan baterai yang
      kuat untuk diajak bermain seharian.
    </p>

    <!--  -->
    <div
      class="bg-gray-200 dark:bg-slate-900 rounded grid grid-cols-3 p-5 mt-5 mb-10"
    >
      <div class="text-center">
        <button
          @click="$router.push('/recomended/student')"
          class="md:text-base text-sm"
          :class="{ 'text-blue-500 font-semibold': slug == 'student' }"
        >
          Set Pelajar
        </button>
      </div>
      <div class="text-center">
        <button
          @click="$router.push('/recomended/work')"
          class="md:text-base text-sm"
          :class="{ 'text-blue-500 font-semibold': slug == 'work' }"
        >
          Set Pekerja
        </button>
      </div>
      <div class="text-center">
        <button
          @click="$router.push('/recomended/gamer')"
          class="md:text-base text-sm"
          :class="{ 'text-blue-500 font-semibold': slug == 'gamer' }"
        >
          Set Gamer
        </button>
      </div>
    </div>

    <div>
      <h5 class="text-gray-500">34 Produk Tersedia</h5>
      <h1 class="text-2xl mt-2 font-semibold">
        <span v-if="slug == 'student'">Set Pelajar Terbaik Untukmu</span>
        <span v-if="slug == 'work'">Set Pekerja Terbaik Untukmu</span>
        <span v-if="slug == 'gamer'">Set Gamer Terbaik Untukmu</span>
      </h1>
      <div class="flex gap-6 mt-5">
        <Button outline gradient="purple-blue">
          <span class="flex">
            <FilterIcon myClass="w-5 mr-1" />
            Filter
          </span>
          <template #suffix>
            <ChevronDownIcon myClass="w-3" />
          </template>
        </Button>
        <Button outline gradient="purple-blue">
          <span class="flex">
            <SortByIcon myClass="w-5 mr-1" />
            Urutkan
          </span>
          <template #suffix>
            <ChevronDownIcon myClass="w-3" />
          </template>
        </Button>
      </div>
    </div>

    <!--  -->
    <div
      class="lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-7 place-items-center md:grid hidden"
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

  <!-- footer -->
  <Footer :language="language" />
</template>

<script>
export default {
  props: ["slug"],
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      dataFilter: "all",
      language: "id",
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