<script setup>
//
import Navbar from "../components/navbar/navbar.vue";

import { Carousel } from "flowbite-vue";
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
</script>
<template>
  <Navbar />

  <!--  -->

  <header class="container mx-auto mt-8 px-20">
    <Carousel :pictures="pictures"></Carousel>
  </header>

  <!-- kategori -->

  <div class="container mx-auto mt-8 lg:px-20 md:px-10 px-3">
    <div
      class="lg:flex inline-block items-center justify-between bg-gray-100 rounded-md py-4 lg:px-10 px-5 shadow lg:w-auto w-full"
    >
      <div class="md:flex gap-5 items-center">
        <div>
          <img
            src="./../assets/cara-ngopi-01.svg"
            class="w-[130px] md:mx-0 mx-auto"
          />
        </div>
        <div>
          <h5>Hello Ilham</h5>
          <h4 class="text-2xl font-semibold">
            Yuk Pilih Kategori yang Kamu Mau
          </h4>
        </div>
      </div>
      <div>
        <ul class="flex justify-center gap-10 lg:mt-0 mt-3">
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
  </div>

  <!-- Rekomendasi -->

  <div class="container mx-auto lg:px-20 md:px-10 px-3 mt-10">
    <h2 class="text-2xl font-semibold mr-5 flex gap-2 items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-7 text-red-500"
      >
        <path
          fill-rule="evenodd"
          d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
          clip-rule="evenodd"
        />
      </svg>

      Produk Pilihan
    </h2>
    <div
      class="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 mt-5 place-items-center"
    >
      <div
        class="card border border-gray-200 rounded-md overflow-hidden shadow-md relative md:block hidden"
      >
        <div class="border-b border-gray-200">
          <img src="./../assets/product/laptop/1.webp" alt="" />
        </div>
        <div class="p-2">
          <h3 class="font-semibold mb-2">
            <a href="./pages/detail.html">LAPTOP ASUS S4T</a>
          </h3>
          <span>
            <small>Price :</small>
            <h5 class="font-semibold">Rp 50.000</h5>
          </span>
          <button
            class="bg-indigo-500 hover:bg-indigo-400 text-white p-2 rounded absolute bottom-[10px] right-[10px]"
          >
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
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        class="card border border-gray-200 rounded-md overflow-hidden shadow-md relative"
      >
        <div class="border-b border-gray-200">
          <img src="./../assets/product/laptop/1.webp" alt="" />
        </div>
        <div class="p-2">
          <h3 class="font-semibold mb-2">
            <a href="./pages/detail.html">LAPTOP ASUS S4T</a>
          </h3>
          <span>
            <small>Price :</small>
            <h5 class="font-semibold">Rp 50.000</h5>
          </span>
          <button
            class="bg-indigo-500 hover:bg-indigo-400 text-white p-2 rounded absolute bottom-[10px] right-[10px]"
          >
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
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        class="card border border-gray-200 rounded-md overflow-hidden shadow-md relative"
      >
        <div class="border-b border-gray-200">
          <img src="./../assets/product/laptop/1.webp" alt="" />
        </div>
        <div class="p-2">
          <h3 class="font-semibold mb-2">
            <a href="./pages/detail.html">LAPTOP ASUS S4T</a>
          </h3>
          <span>
            <small>Price :</small>
            <h5 class="font-semibold">Rp 50.000</h5>
          </span>
          <button
            class="bg-indigo-500 hover:bg-indigo-400 text-white p-2 rounded absolute bottom-[10px] right-[10px]"
          >
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
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        class="card border border-gray-200 rounded-md overflow-hidden shadow-md relative"
      >
        <div class="border-b border-gray-200">
          <img src="./../assets/product/laptop/1.webp" alt="" />
        </div>
        <div class="p-2">
          <h3 class="font-semibold mb-2">
            <a href="./pages/detail.html">LAPTOP ASUS S4T</a>
          </h3>
          <span>
            <small>Price :</small>
            <h5 class="font-semibold">Rp 50.000</h5>
          </span>
          <button
            class="bg-indigo-500 hover:bg-indigo-400 text-white p-2 rounded absolute bottom-[10px] right-[10px]"
          >
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
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="">
        <div class="grid grid-cols-2 gap-5">
          <img src="./../assets/product/laptop/2.webp" class="rounded-md" />
          <img src="./../assets/product/laptop/3.webp" class="rounded-md" />
          <img src="./../assets/product/laptop/4.webp" class="rounded-md" />
          <img src="./../assets/product/laptop/5.webp" class="rounded-md" />
        </div>
        <button
          class="border-2 rounded-md border-indigo-500 w-full py-3 text-indigo-400 font-semibold flex items-center justify-center gap-3 hover:bg-indigo-500 hover:text-white mt-5"
        >
          Lihat Lainnya
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-indigo-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!--  -->

  <div class="container mx-auto mt-8 lg:px-20 md:px-10 px-3">
    <div class="bg-[#9e0f0f] rounded-md pb-5 pt-2">
      <div class="grid lg:grid-cols-2 gap-5 mt-5">
        <div>
          <img src="./../assets/banner/flashsale.png" class="w-full" />
        </div>
        <div>
          <div class="flex justify-between px-7 mb-5">
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
          </div>
          <div
            class="md:flex md:justify-end sm:grid sm:grid-cols-3 hidden gap-5 px-7"
          >
            <div
              class="card border border-gray-200 bg-white rounded-md overflow-hidden shadow-md relative w-[200px]"
            >
              <div class="border-b border-gray-200">
                <img
                  src="./../assets/product/laptop/1.webp"
                  class="w-full h-[174px] object-cover"
                />
              </div>
              <div class="p-2">
                <h3 class="font-semibold mb-2">
                  <a href="./pages/detail.html">LAPTOP ASUS S4T</a>
                </h3>
                <span>
                  <small>Price :</small>
                  <h5 class="font-semibold">Rp 50.000</h5>
                </span>
                <button
                  class="bg-indigo-500 hover:bg-indigo-400 text-white p-2 rounded absolute bottom-[10px] right-[10px]"
                >
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
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div
              class="card border border-gray-200 bg-white rounded-md overflow-hidden shadow-md relative w-[200px]"
            >
              <div class="border-b border-gray-200">
                <img
                  src="./../assets/product/laptop/1.webp"
                  class="w-full h-[174px] object-cover"
                />
              </div>
              <div class="p-2">
                <h3 class="font-semibold mb-2">
                  <a href="./pages/detail.html">LAPTOP ASUS S4T</a>
                </h3>
                <span>
                  <small>Price :</small>
                  <h5 class="font-semibold">Rp 50.000</h5>
                </span>
                <button
                  class="bg-indigo-500 hover:bg-indigo-400 text-white p-2 rounded absolute bottom-[10px] right-[10px]"
                >
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
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div
              class="card border border-gray-200 bg-white rounded-md overflow-hidden shadow-md relative w-[200px]"
            >
              <div class="border-b border-gray-200">
                <img
                  src="./../assets/product/laptop/1.webp"
                  class="w-full h-[174px] object-cover"
                />
              </div>
              <div class="p-2">
                <h3 class="font-semibold mb-2">
                  <a href="./pages/detail.html">LAPTOP ASUS S4T</a>
                </h3>
                <span>
                  <small>Price :</small>
                  <h5 class="font-semibold">Rp 50.000</h5>
                </span>
                <button
                  class="bg-indigo-500 hover:bg-indigo-400 text-white p-2 rounded absolute bottom-[10px] right-[10px]"
                >
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
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <!--  -->
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
              <button
                class="rounded-md w-full py-3 text-white font-semibold flex items-center justify-center gap-3 hover:bg-yellow-400 hover:text-white mt-5 bg-yellow-500"
              >
                Lihat Promo
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
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--  -->

  <div class="container mx-auto lg:px-20 md:px-10 px-3 mt-10">
    <div class="sm:flex sm:items-end">
      <h2 class="text-2xl font-semibold mr-5">Promo Menarik 🎉</h2>
      <small class="text-gray-500 inline-block mr-3"
        >Promo berakhir pada :
      </small>
      <div id="countdown">
        <span
          id="hour"
          class="bg-indigo-500 w-[23px] py-[1px] inline-flex justify-center rounded text-white font-semibold text-sm"
        ></span>
        <span class="font-semibold text-xl text-indigo-500">:</span>
        <span
          id="minute"
          class="bg-indigo-500 w-[23px] py-[1px] inline-flex justify-center rounded text-white font-semibold text-sm"
        ></span>
        <span class="font-semibold text-xl text-indigo-500">:</span>
        <span
          id="second"
          class="bg-indigo-500 w-[23px] py-[1px] inline-flex justify-center rounded text-white font-semibold text-sm"
        ></span>
      </div>
    </div>
    <div class="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 mt-5">
      <div
        class="card border border-gray-200 rounded-md overflow-hidden shadow-md relative"
      >
        <div class="border-b border-gray-200">
          <img src="./../assets/product/laptop/1.webp" alt="" />
        </div>
        <div class="p-2">
          <h3 class="font-semibold mb-2">
            <a href="./pages/detail.html">LAPTOP ASUS S4T</a>
          </h3>
          <span>
            <small>Price :</small>
            <h5 class="font-semibold">Rp 50.000</h5>
          </span>
          <button
            class="bg-indigo-500 hover:bg-indigo-400 text-white p-2 rounded absolute bottom-[10px] right-[10px]"
          >
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
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        class="card border border-gray-200 rounded-md overflow-hidden shadow-md relative"
      >
        <div class="border-b border-gray-200">
          <img src="./../assets/product/laptop/1.webp" alt="" />
        </div>
        <div class="p-2">
          <h3 class="font-semibold mb-2">
            <a href="./pages/detail.html">LAPTOP ASUS S4T</a>
          </h3>
          <span>
            <small>Price :</small>
            <h5 class="font-semibold">Rp 50.000</h5>
          </span>
          <button
            class="bg-indigo-500 hover:bg-indigo-400 text-white p-2 rounded absolute bottom-[10px] right-[10px]"
          >
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
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        class="card border border-gray-200 rounded-md overflow-hidden shadow-md relative"
      >
        <div class="border-b border-gray-200">
          <img src="./../assets/product/laptop/1.webp" alt="" />
        </div>
        <div class="p-2">
          <h3 class="font-semibold mb-2">
            <a href="./pages/detail.html">LAPTOP ASUS S4T</a>
          </h3>
          <span>
            <small>Price :</small>
            <h5 class="font-semibold">Rp 50.000</h5>
          </span>
          <button
            class="bg-indigo-500 hover:bg-indigo-400 text-white p-2 rounded absolute bottom-[10px] right-[10px]"
          >
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
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        class="card border border-gray-200 rounded-md overflow-hidden shadow-md relative"
      >
        <div class="border-b border-gray-200">
          <img src="./../assets/product/laptop/1.webp" alt="" />
        </div>
        <div class="p-2">
          <h3 class="font-semibold mb-2">
            <a href="./pages/detail.html">LAPTOP ASUS S4T</a>
          </h3>
          <span>
            <small>Price :</small>
            <h5 class="font-semibold">Rp 50.000</h5>
          </span>
          <button
            class="bg-indigo-500 hover:bg-indigo-400 text-white p-2 rounded absolute bottom-[10px] right-[10px]"
          >
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
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        class="card border border-gray-200 rounded-md overflow-hidden shadow-md relative"
      >
        <div class="border-b border-gray-200">
          <img src="./../assets/product/laptop/1.webp" alt="" />
        </div>
        <div class="p-2">
          <h3 class="font-semibold mb-2">
            <a href="./pages/detail.html">LAPTOP ASUS S4T</a>
          </h3>
          <span>
            <small>Price :</small>
            <h5 class="font-semibold">Rp 50.000</h5>
          </span>
          <button
            class="bg-indigo-500 hover:bg-indigo-400 text-white p-2 rounded absolute bottom-[10px] right-[10px]"
          >
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
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!--  -->

  <section class="container mx-auto lg:px-20 md:px-10 px-3 mt-10">
    <div>
      <button
        class="border border-indigo-500 bg-indigo-500/40 text-indigo-500 font-semibold px-5 py-2 rounded list"
        data-filter="forYou"
      >
        For You
      </button>
      <button
        class="border border-indigo-500 bg-indigo-500/40 text-indigo-500 font-semibold px-5 py-2 rounded list"
        data-filter="trending"
      >
        Trending
      </button>
      <button
        class="border border-indigo-500 bg-indigo-500/40 text-indigo-500 font-semibold px-5 py-2 rounded list"
        data-filter="new"
      >
        Terbaru
      </button>
    </div>
    <div class="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 mt-5">
      <div
        class="card border border-gray-200 rounded-md overflow-hidden shadow-md relative itemBox"
        data-item="forYou"
      >
        <div class="border-b border-gray-200">
          <img src="./../assets/product/laptop/1.webp" alt="" />
        </div>
        <div class="p-2">
          <h3 class="font-semibold mb-2">
            <a href="./pages/detail.html">LAPTOP ASUS S4T</a>
          </h3>
          <span>
            <small>Price :</small>
            <h5 class="font-semibold">Rp 50.000</h5>
          </span>
          <button
            class="bg-indigo-500 hover:bg-indigo-400 text-white p-2 rounded absolute bottom-[10px] right-[10px]"
          >
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
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        class="card border border-gray-200 rounded-md overflow-hidden shadow-md relative itemBox"
        data-item="trending"
      >
        <div class="border-b border-gray-200">
          <img src="./../assets/product/laptop/1.webp" alt="" />
        </div>
        <div class="p-2">
          <h3 class="font-semibold mb-2">
            <a href="./pages/detail.html">LAPTOP ASUS S4T</a>
          </h3>
          <span>
            <small>Price :</small>
            <h5 class="font-semibold">Rp 50.000</h5>
          </span>
          <button
            class="bg-indigo-500 hover:bg-indigo-400 text-white p-2 rounded absolute bottom-[10px] right-[10px]"
          >
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
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        class="card border border-gray-200 rounded-md overflow-hidden shadow-md relative itemBox"
        data-item="new"
      >
        <div class="border-b border-gray-200">
          <img src="./../assets/product/laptop/1.webp" alt="" />
        </div>
        <div class="p-2">
          <h3 class="font-semibold mb-2">
            <a href="./pages/detail.html">LAPTOP ASUS S4T</a>
          </h3>
          <span>
            <small>Price :</small>
            <h5 class="font-semibold">Rp 50.000</h5>
          </span>
          <button
            class="bg-indigo-500 hover:bg-indigo-400 text-white p-2 rounded absolute bottom-[10px] right-[10px]"
          >
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
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        class="card border border-gray-200 rounded-md overflow-hidden shadow-md relative itemBox"
        data-item="forYou"
      >
        <div class="border-b border-gray-200">
          <img src="./../assets/product/laptop/1.webp" alt="" />
        </div>
        <div class="p-2">
          <h3 class="font-semibold mb-2">
            <a href="./pages/detail.html">LAPTOP ASUS S4T</a>
          </h3>
          <span>
            <small>Price :</small>
            <h5 class="font-semibold">Rp 50.000</h5>
          </span>
          <button
            class="bg-indigo-500 hover:bg-indigo-400 text-white p-2 rounded absolute bottom-[10px] right-[10px]"
          >
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
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        class="card border border-gray-200 rounded-md overflow-hidden shadow-md relative itemBox"
        data-item="trending"
      >
        <div class="border-b border-gray-200">
          <img src="./../assets/product/laptop/1.webp" alt="" />
        </div>
        <div class="p-2">
          <h3 class="font-semibold mb-2">
            <a href="./pages/detail.html">LAPTOP ASUS S4T</a>
          </h3>
          <span>
            <small>Price :</small>
            <h5 class="font-semibold">Rp 50.000</h5>
          </span>
          <button
            class="bg-indigo-500 hover:bg-indigo-400 text-white p-2 rounded absolute bottom-[10px] right-[10px]"
          >
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
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>

  <!--  -->

  <footer
    class="container mx-auto lg:px-20 px-10 md:grid flex flex-col grid-cols-4 mt-20 border-t border-gray-200 py-5 md:gap-0 gap-10"
  >
    <div class="md:col-span-2">
      <h2 class="text-xl font-semibold mb-5">Kontak Kami</h2>
      <ul>
        <li class="flex items-center mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 mr-3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          customercare@alopestore.co.id
        </li>
        <li class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 mr-3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>
          083871352030
        </li>
      </ul>
      <h2 class="text-xl font-semibold mb-5 mt-7">Sosial Media Kami</h2>
      <div class="flex">
        <img src="./../assets/icon/ic-instagram.svg" class="w-[35px] mr-2" />
        <img src="./../assets/icon/ic-facebook.svg" class="w-[35px] mr-2" />
        <img src="./../assets/icon/ic-twitter.svg" class="w-[35px] mr-2" />
        <img src="./../assets/icon/ic-youtube.svg" class="w-[35px] mr-2" />
        <img src="./../assets/icon/ic-tiktok.svg" class="w-[35px] mr-2" />
      </div>
    </div>
    <div>
      <h2 class="text-xl font-semibold mb-5">Bantuan</h2>
      <ul>
        <li>
          <a href="" class="text-sm">Pengiriman</a>
        </li>
        <li>
          <a href="" class="text-sm">Pengembalian Produk</a>
        </li>
        <li>
          <a href="" class="text-sm">Garansi</a>
        </li>
        <li>
          <a href="" class="text-sm">Panduan Pembayaran</a>
        </li>
        <li>
          <a href="" class="text-sm">Panduan Voucher</a>
        </li>
        <li>
          <a href="" class="text-sm">Syarat dan Ketentuan</a>
        </li>
        <li>
          <a href="" class="text-sm">Kebijakan Provasi</a>
        </li>
      </ul>
    </div>
    <div>
      <h2 class="text-xl font-semibold mb-5">Customer Care</h2>
      <ul>
        <li>
          <a href="" class="text-sm">Hubungi Kami</a>
        </li>
        <li>
          <a href="" class="text-sm">Harga Grosir</a>
        </li>
        <li>
          <a href="" class="text-sm">Konfirmasi Pembayaran</a>
        </li>
        <li>
          <a href="" class="text-sm">FAQ / Bantuan</a>
        </li>
      </ul>
    </div>

    <!--  -->

    <div
      class="col-span-4 border-y border-gray-200 py-5 mt-10 sm:flex sm:justify-between sm:items-center sm:text-left text-center"
    >
      <h3>Belanja makin mudah menggunakan aplikasi</h3>
      <img
        src="./../assets/googlePlay.png"
        width="150"
        class="sm:mx-0 mx-auto sm:mt-0 mt-3"
      />
    </div>
  </footer>
  <div
    class="col-span-4 bg-indigo-500 text-center py-5 text-white md:text-base text-sm"
  >
    © 2023 Hak Cipta Terpelihara PT Alope Indonesia
  </div>

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
export default {};
</script>

<style>
</style>