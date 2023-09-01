<script setup>
import { ref } from "vue";
//
import Navbar from "../components/navbar/navbar.vue";
import Footer from "../components/footer.vue";

//
import ProductCard from "../components/productCard.vue";

// icons
import FireIcon from "../components/icons/fireIcon.vue";

import { Carousel, Button, Pagination, Toast } from "flowbite-vue";
const pictures = [
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg",
    alt: "Picture 1",
  },
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    alt: "Picture 2",
  },
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    alt: "Picture 3",
  },
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    alt: "Picture 4",
  },
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
    alt: "Picture 5",
  },
];

const currentPage = ref(1);

let list = document.querySelectorAll(".list");
let itemBox = document.querySelectorAll(".itemBox");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    // for (let j = 0; j < list.length; j++) {
    //   list[j].classList.remove("active");
    // }

    let dataFilter = this.getAttribute("data-filter");

    for (let k = 0; k < itemBox.length; k++) {
      itemBox[k].classList.add("hidden");

      if (
        itemBox[k].getAttribute("data-item") == dataFilter ||
        dataFilter == "all"
      ) {
        itemBox[k].classList.remove("hidden");
      }
    }
  });
}
</script>
<template>
  <Toast
    :type="'success'"
    closable
    class="fixed z-[60] shadow-md top-0 right-0 m-5"
  >
    Produk telah ditambahkan kedalam keranjang
  </Toast>

  <Navbar />

  <!--  -->

  <header class="container mx-auto mt-8 lg:px-20 md:px-10 px-3">
    <Carousel :pictures="pictures"></Carousel>
  </header>

  <!-- kategori -->
  <section class="container mx-auto mt-8 lg:px-20 md:px-10 px-3">
    <div
      class="lg:flex inline-block items-center justify-between bg-gray-100 rounded-md py-4 lg:px-10 px-5 shadow lg:w-auto w-full"
    >
      <div class="md:flex gap-5 items-center">
        <div>
          <img
            src="./../assets/categoryVector.png"
            class="w-[190px] md:mx-0 mx-auto"
          />
        </div>
        <div>
          <h5>Hello Ilham</h5>
          <h4 class="text-2xl font-semibold">Apa yang sedang kamu cari?</h4>
        </div>
      </div>
      <div>
        <ul
          class="md:flex md:justify-center grid grid-cols-2 md:gap-10 gap-2 place-items-center lg:mt-0 mt-3"
        >
          <li class="w-[100px] hover:bg-gray-300 text-center py-2 rounded">
            <img src="./../assets/icon/ic-laptop.svg" class="mx-auto" />
            Laptop
          </li>
          <li class="w-[100px] hover:bg-gray-300 text-center py-2 rounded">
            <img src="./../assets/icon/ic-monitor.svg" class="mx-auto" />
            Monitor
          </li>
          <li class="w-[100px] hover:bg-gray-300 text-center py-2 rounded">
            <img src="./../assets/icon/ic-workbench.svg" class="mx-auto" />
            Workbench
          </li>
          <li class="w-[100px] hover:bg-gray-300 text-center py-2 rounded">
            <img src="./../assets/icon/ic-phone.svg" class="mx-auto" />
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
          <img src="./../assets/flashSale.png" class="w-full" />
        </div>
        <div>
          <!-- <div class="flex justify-between px-7 mb-5">
            <div class="flex">
              <p class="text-gray-100 inline-block mr-3 font-bold">
                Promo berakhir pada :
              </p>
              <div id="countdown">
                <span
                  id="hour"
                  class="bg-red-500 w-[23px] py-[1px] inline-flex justify-center rounded text-white font-semibold text-sm"
                ></span>
                <span class="font-semibold text-xl text-red-500">:</span>
                <span
                  id="minute"
                  class="bg-red-500 w-[23px] py-[1px] inline-flex justify-center rounded text-white font-semibold text-sm"
                ></span>
                <span class="font-semibold text-xl text-red-500">:</span>
                <span
                  id="second"
                  class="bg-red-500 w-[23px] py-[1px] inline-flex justify-center rounded text-white font-semibold text-sm"
                ></span>
              </div>
            </div>
            <div class="md:inline-block hidden">
              <p class="text-white">Lihat Semua ></p>
            </div>
          </div> -->
          <div
            class="md:flex md:justify-end sm:grid sm:grid-cols-3 hidden gap-5 px-7"
          >
            <ProductCard
              img="/src/assets/product/phone/1.png"
              :isDiscount="false"
              :isPopular="false"
              :isNew="false"
              :hasColors="false"
              :isFlashSale="true"
            />
            <ProductCard
              img="/src/assets/product/phone/1.png"
              :isDiscount="false"
              :isPopular="false"
              :isNew="false"
              :hasColors="false"
              :isFlashSale="true"
            />
          </div>
          <div class="md:hidden inline-block mx-6 mt-8">
            <div class="">
              <div class="grid grid-cols-2 gap-5">
                <img
                  src="./../assets/product/laptop/2.webp"
                  class="rounded-md"
                />
                <img
                  src="./../assets/product/laptop/3.webp"
                  class="rounded-md"
                />
                <img
                  src="./../assets/product/laptop/4.webp"
                  class="rounded-md"
                />
                <img
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
    <h2 class="text-2xl font-semibold mr-5 flex gap-2 items-center">
      <FireIcon myClass="w-7 text-red-500" />

      Produk Pilihan
    </h2>
    <div
      class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-5 place-items-center"
    >
      <ProductCard
        img="/src/assets/product/laptop/1.png"
        :isDiscount="true"
        :isPopular="false"
        :isNew="false"
        :hasColors="false"
        :isFlashSale="false"
      />
      <ProductCard
        img="/src/assets/product/laptop/2.png"
        :isDiscount="false"
        :isPopular="true"
        :isNew="false"
        :hasColors="true"
        :isFlashSale="false"
      />
      <ProductCard
        img="/src/assets/product/laptop/3.png"
        :isDiscount="false"
        :isPopular="false"
        :isNew="true"
        :hasColors="false"
        :isFlashSale="false"
      />
      <div class="">
        <div class="grid grid-cols-2 gap-5">
          <img src="./../assets/product/laptop/2.webp" class="rounded-md" />
          <img src="./../assets/product/laptop/3.webp" class="rounded-md" />
          <img src="./../assets/product/laptop/4.webp" class="rounded-md" />
          <img src="./../assets/product/laptop/5.webp" class="rounded-md" />
        </div>
        <Button gradient="purple-blue" class="w-full py-4 mt-5 text-center">
          Lihat Lainnya
        </Button>
      </div>
    </div>
  </div>

  <!-- Unggulan -->
  <div class="container mx-auto lg:px-20 md:px-10 px-3 mt-10">
    <div class="bg-gray-100 p-5 rounded relative">
      <img
        src="./../assets/ribbon.png"
        class="absolute right-[-25px] top-[-25px] w-[200px] z-10"
      />
      <div class="grid lg:grid-cols-2 grid-cols-1 gap-10 place-items-center">
        <div class="relative">
          <img
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
            class="rounded"
          />
          <div
            class="absolute bottom-[10px] flex gap-6 left-1/2 -translate-x-1/2"
          >
            <div
              class="border-2 border-indigo-500 rounded-full flex items-center justify-center"
            >
              <span
                class="w-[30px] h-[30px] cursor-pointer bg-[#2e3642] rounded-full"
              ></span>
            </div>
            <div
              class="border-2 border-indigo-500 rounded-full flex items-center justify-center"
            >
              <span
                class="w-[30px] h-[30px] cursor-pointer bg-[#f0e4d3] rounded-full"
              ></span>
            </div>
            <div
              class="border-2 border-indigo-500 rounded-full flex items-center justify-center"
            >
              <span
                class="w-[30px] h-[30px] cursor-pointer bg-[#7d7e80] rounded-full"
              ></span>
            </div>
            <div
              class="border-2 border-indigo-500 rounded-full flex items-center justify-center"
            >
              <span
                class="w-[30px] h-[30px] cursor-pointer bg-[#e3e4e6] rounded-full"
              ></span>
            </div>
          </div>
        </div>
        <div class="text-left">
          <h2 class="md:text-3xl text-2xl font-bold mb-7">ALOPE IL PRO 14</h2>
          <p class="md:mb-16 mb-10 md:text-base text-sm">
            <span class="font-semibold">ALOPE IL PRO 14</span> memberi lebih
            banyak ruang untuk segala hal yang Anda sukai <br />
            dengan layar Liquid Retina yang luas dengan model layar 13 inci.
            <br />
            Bertenaga super berkat chip M2 dan dengan kekuatan baterai hingga 18
            jam. <br />
            Laptop ini menghadirkan performa secepat kilat dalam desain ultra
            portabel.
          </p>
          <div class="flex md:gap-6 gap-3 mb-6 md:text-base text-sm">
            <div class="w-1/3">
              Hingga <br />
              <span class="text-3xl font-semibold block">1,4x</span>
              lebih cepat dibandingkan MacBook Air (M1)2
            </div>
            <div class="w-1/3">
              Hingga <br />
              <span class="text-3xl font-semibold block">12x</span>
              lebih cepat dibandingkan MacBook Air tercepat berbasis Intel3
            </div>
            <div class="w-1/3">
              Hingga <br />
              <span class="text-3xl font-semibold block">1,4x</span>
              lebih cepat dibandingkan MacBook Air (M1)2
            </div>
          </div>
          <a href="" class="text-blue-400 underline font-semibold"
            >Lihat Selengkapnya >
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- For -->
  <div
    class="container mx-auto lg:px-20 md:px-10 px-3 mt-10 grid md:grid-cols-3 lg:gap-5 gap-3"
  >
    <div
      class="your-element w-full rounded lg:h-[300px] h-[200px] bg-cover relative overflow-hidden flex items-center justify-center after:content-[''] after:absolute after:inset-0 after:z-10 after:bg-black/40"
      style="
        background-image: url('https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg');
        /* transform-style: preserve-3d;
        transform: perspective(1000px);
        transform: translateZ(20px); */
      "
      data-tilt
    >
      <div class="relative z-20 text-center">
        <h3 class="text-2xl text-white font-bold tracking-wide">For Student</h3>
        <p class="text-gray-200">Cocok untuk pelajar atau Mahasiswa</p>
      </div>
    </div>
    <div
      class="your-element w-full rounded lg:h-[300px] h-[200px] bg-cover relative overflow-hidden flex items-center justify-center after:content-[''] after:absolute after:inset-0 after:z-10 after:bg-black/40"
      style="
        background-image: url('https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg');
        /* transform-style: preserve-3d;
        transform: perspective(1000px);
        transform: translateZ(20px); */
      "
      data-tilt
    >
      <div class="relative z-20 text-center">
        <h3 class="text-2xl text-white font-bold tracking-wide">For Work</h3>
        <p class="text-gray-200">Cocok untuk Pekerja IT</p>
      </div>
    </div>
    <div
      class="your-element w-full rounded lg:h-[300px] h-[200px] bg-cover relative overflow-hidden flex items-center justify-center after:content-[''] after:absolute after:inset-0 after:z-10 after:bg-black/40"
      style="
        background-image: url('https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg');
        /* transform-style: preserve-3d;
        transform: perspective(1000px);
        transform: translateZ(20px); */
      "
      data-tilt
    >
      <div class="relative z-20 text-center">
        <h3 class="text-2xl text-white font-bold tracking-wide">For Gaming</h3>
        <p class="text-gray-200">Cocok untuk Para Gamers</p>
      </div>
    </div>
  </div>

  <!-- Lainnya -->
  <div class="container mx-auto lg:px-20 md:px-10 px-3 mt-10">
    <h2 class="text-2xl font-semibold mr-5 flex gap-2 items-center mb-10">
      <FireIcon myClass="w-7 text-red-500" />

      Produk Kami
    </h2>
    <div class="grid md:grid-cols-5 grid-cols-3 md:gap-5 gap-2">
      <button
        class="categories inline-block md:h-[100px] h-[70px] w-full bg-cover rounded p-2 bg-center text-white text-xl relative overflow-hidden font-semibold after:content-[''] after:absolute after:inset-0 after:bg-black/50 cursor-pointer"
        style="background-image: url('./src/assets/category/laptop.jpg')"
        @click="filterProduct('all')"
      >
        <span class="relative z-10">Semua</span>
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
    <div
      class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-5 place-items-center"
    >
      <ProductCard
        v-if="dataFilter == 'all' || dataFilter == 'laptop'"
        img="/src/assets/product/laptop/1.png"
        :isDiscount="true"
        :isPopular="false"
        :isNew="false"
        :hasColors="false"
        :isFlashSale="false"
      />
      <ProductCard
        v-if="dataFilter == 'all' || dataFilter == 'laptop'"
        img="/src/assets/product/laptop/2.png"
        :isDiscount="false"
        :isPopular="true"
        :isNew="false"
        :hasColors="true"
        :isFlashSale="false"
      />
      <ProductCard
        v-if="dataFilter == 'all' || dataFilter == 'laptop'"
        img="/src/assets/product/laptop/3.png"
        :isDiscount="false"
        :isPopular="false"
        :isNew="true"
        :hasColors="false"
        :isFlashSale="false"
      />
      <ProductCard
        v-if="dataFilter == 'all' || dataFilter == 'handphone'"
        img="/src/assets/product/phone/2.png"
        :isDiscount="false"
        :isPopular="false"
        :isNew="true"
        :hasColors="false"
        :isFlashSale="false"
      />
      <ProductCard
        v-if="dataFilter == 'all' || dataFilter == 'handphone'"
        img="/src/assets/product/phone/3.png"
        :isDiscount="false"
        :isPopular="false"
        :isNew="true"
        :hasColors="false"
        :isFlashSale="false"
      />
      <ProductCard
        v-if="dataFilter == 'all' || dataFilter == 'monitor'"
        img="/src/assets/product/monitor/1.png"
        :isDiscount="false"
        :isPopular="false"
        :isNew="true"
        :hasColors="false"
        :isFlashSale="false"
      />
      <ProductCard
        v-if="dataFilter == 'all' || dataFilter == 'monitor'"
        img="/src/assets/product/monitor/2.png"
        :isDiscount="false"
        :isPopular="false"
        :isNew="true"
        :hasColors="false"
        :isFlashSale="false"
      />
      <ProductCard
        v-if="dataFilter == 'all' || dataFilter == 'workbench'"
        img="/src/assets/product/laptop/3.png"
        :isDiscount="false"
        :isPopular="false"
        :isNew="true"
        :hasColors="false"
        :isFlashSale="false"
      />
    </div>

    <Pagination
      v-if="dataFilter == 'all'"
      class="mt-10 sm:block hidden"
      v-model="currentPage"
      :total-pages="3"
      show-icons
    ></Pagination>
  </div>

  <!-- footer -->
  <Footer />

  <!-- modal search -->
  <section id="modalSearch" class="fixed inset-0 bg-black/30 z-40 hidden">
    <div
      class="bg-white p-5 rounded shadow-md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%]"
    >
      <div class="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 absolute top-1/2 -translate-y-1/2 ml-3"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <input
          type="text"
          class="w-full border py-4 rounded pl-12"
          placeholder="Cari Produk..."
        />
        <button
          onclick="showModalSearch()"
          class="absolute top-1/2 -translate-y-1/2 right-0 bg-indigo-500 px-4 rounded-r-lg flex text-sm gap-1 text-white h-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <!--  -->
      <div class="h-[350px] overflow-y-auto mt-10">
        <h3 class="font-semibold">Pencarian Populer</h3>
        <div>
          <ul class="flex gap-3 mt-5">
            <li class="bg-gray-100 py-1 px-5 rounded text-gray-700">Asus</li>
            <li class="bg-gray-100 py-1 px-5 rounded text-gray-700">Lenovo</li>
            <li class="bg-gray-100 py-1 px-5 rounded text-gray-700">DELL</li>
          </ul>
        </div>
        <hr class="my-4" />

        <h3 class="font-semibold">Promo Hari Ini</h3>
        <div>
          <ul class="mt-3">
            <li class="mb-3">
              <a
                href=""
                class="inline-flex gap-2 bg-gray-100 rounded px-5 py-2 text-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6 text-red-500"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                    clip-rule="evenodd"
                  />
                </svg>
                Gratis Ongkir Bos
              </a>
            </li>
            <li class="mb-3">
              <a
                href=""
                class="inline-flex gap-2 bg-gray-100 rounded px-5 py-2 text-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6 text-red-500"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                    clip-rule="evenodd"
                  />
                </svg>
                Laptop Gaming cuman 2 Juta
              </a>
            </li>
            <li class="mb-3">
              <a
                href=""
                class="inline-flex gap-2 bg-gray-100 rounded px-5 py-2 text-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6 text-red-500"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                    clip-rule="evenodd"
                  />
                </svg>
                Beli Asus Vivobook dapat Gratis Mouse
              </a>
            </li>
            <li class="mb-3">
              <a
                href=""
                class="inline-flex gap-2 bg-gray-100 rounded px-5 py-2 text-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6 text-red-500"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                    clip-rule="evenodd"
                  />
                </svg>
                Rayakan Hari Kemerdekaan
              </a>
            </li>
          </ul>
        </div>

        <hr class="my-4" />

        <h3 class="font-semibold">Produk Rekomendasi</h3>
        <div class="flex gap-5">
          <div class="rounded-md shadow-md p-5 text-center">
            <img src="./../assets/product/laptop/1.webp" alt="" />
            <div>
              <h5>Laptop Asus Zen 10</h5>
            </div>
          </div>
          <div class="rounded-md shadow-md p-5 text-center">
            <img src="./../assets/product/laptop/1.webp" alt="" />
            <div>
              <h5>Laptop Asus Zen 10</h5>
            </div>
          </div>
          <div class="rounded-md shadow-md p-5 text-center">
            <img src="./../assets/product/laptop/1.webp" alt="" />
            <div>
              <h5>Laptop Asus Zen 10</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import "vanilla-tilt";
export default {
  data() {
    return {
      dataFilter: "all",
    };
  },
  methods: {
    filterProduct(dataFilter = "all") {
      this.dataFilter = dataFilter;
    },
  },
  mounted() {
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