
<template>
  <Loading :show="isLoading" />

  <section
    id="backdrop"
    class="fixed inset-0 bg-black/30 z-[31] hidden"
    @click="clickBackdrop()"
  ></section>

  <section>
    <Topbar @changeLanguage="changeLanguage" />
    <nav
      class="relative flex items-center justify-between py-4 shadow-md lg:px-20 md:px-10 px-5 z-40 left-0 right-0 bg-white dark:bg-slate-900 top-0"
    >
      <div class="lg:w-[20%]">
        <h2 class="text-indigo-500 font-bold text-2xl">
          <router-link to="/">ALOPE Tech</router-link>
        </h2>
        <!-- <img src="@/assets/textLogo.png" class="w-[50px] mx-auto" /> -->
      </div>
      <!--  -->
      <div class="relative w-[40%] lg:flex hidden items-center">
        <input
          @focus="showSearchBox()"
          type="text"
          placeholder="Search..."
          class="w-full py-2 px-3 rounded bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-900"
        />
        <span
          @click="redirectToSearch()"
          class="absolute bg-gradient-to-r from-[#7a3ef2] to-[#427ef8] right-[5px] flex justify-center items-center p-1 text-white rounded"
        >
          <SearchIcon myClass="w-6" />
        </span>
        <div
          id="searchBox"
          class="bg-white dark:bg-slate-800 shadow-md absolute top-[50px] p-5 w-full rounded hidden max-h-[300px] overflow-y-auto dark:text-gray-200"
        >
          <h3 class="font-semibold mb-3">Pencarian Populer</h3>
          <!--  -->
          <Button gradient="purple-blue" outline class="m-1"
            >Laptop Untuk Siswa</Button
          >
          <Button gradient="purple-blue" outline class="m-1"
            >Laptop IL Series</Button
          >
          <Button gradient="purple-blue" outline class="m-1"
            >HAM HP Gaming</Button
          >

          <hr class="my-4" />

          <h3 class="font-semibold mb-3">Promo Hari Ini</h3>
          <!--  -->
          <Button gradient="pink-orange" outline class="m-1">
            <template #prefix>
              <FireIcon myClass="w-6 h-6" />
            </template>
            Gratis Ongkir
          </Button>
          <Button gradient="pink-orange" outline class="m-1">
            <template #prefix>
              <FireIcon myClass="w-6 h-6" />
            </template>
            Laptop Gaming hanya 2 Juta
          </Button>
          <Button gradient="pink-orange" outline class="m-1">
            <template #prefix>
              <FireIcon myClass="w-6 h-6" />
            </template>
            Produk Baru Alope IL Series
          </Button>
          <Button gradient="pink-orange" outline class="m-1">
            <template #prefix>
              <FireIcon myClass="w-6 h-6" />
            </template>
            Ramaikan Hari Kemerdekaan
          </Button>

          <hr class="my-4" />

          <h3 class="font-semibold mb-3">Produk Rekomendasi</h3>
          <div class="grid grid-cols-3 gap-5">
            <div class="rounded-md shadow-md p-2">
              <img src="@/assets/product/phone/1.png" class="rounded" />
              <div class="mt-2">
                <h5>Laptop Asus Zen 10</h5>
              </div>
            </div>
            <div class="rounded-md shadow-md p-2">
              <img src="@/assets/product/phone/1.png" class="rounded" />
              <div class="mt-2">
                <h5>Laptop Asus Zen 10</h5>
              </div>
            </div>
            <div class="rounded-md shadow-md p-2">
              <img src="@/assets/product/phone/1.png" class="rounded" />
              <div class="mt-2">
                <h5>Laptop Asus Zen 10</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--  -->

      <div>
        <input
          type="checkbox"
          class="checkbox"
          id="checkbox"
          @click="toggleDarkMode()"
        />
        <label
          for="checkbox"
          class="checkbox-label dark:bg-gray-100 bg-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6 text-yellow-300"
          >
            <path
              fill-rule="evenodd"
              d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
              clip-rule="evenodd"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6 text-yellow-500"
          >
            <path
              d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
            />
          </svg>

          <span class="ball bg-white dark:bg-slate-800"></span>
        </label>
      </div>

      <div class="sm:flex hidden text-white w-[20%] justify-end">
        <div class="flex items-center justify-end">
          <!-- search -->
          <button
            @click="showModalSearch()"
            class="mr-2 hover:bg-gray-200 dark:hover:bg-slate-700/50 p-2 rounded cursor-pointer relative lg:hidden md:inline-block hidden"
          >
            <SearchIcon myClass="w-6 h-6 text-indigo-500" />
          </button>

          <button
            @click="showCart()"
            class="mr-2 hover:bg-gray-200 dark:hover:bg-slate-700/50 p-2 rounded cursor-pointer relative"
          >
            <CartIcon myClass="w-6 h-6 text-indigo-500" />
            <span
              class="absolute top-0 right-0 bg-red-500 px-1 rounded text-[13px]"
            >
              2
            </span>
            <div
              id="cart"
              class="absolute bg-white dark:bg-slate-800 text-black rounded shadow-md top-[52px] z-20 w-[400px] -translate-x-1/2 py-3 hidden"
            >
              <div class="px-5 py-2 text-left">
                <h5
                  class="font-semibold tracking-wide text-gray-800 dark:text-gray-200"
                >
                  Subtotal (2 Produk)
                </h5>
              </div>
              <hr class="w-[90%] mx-auto mb-3 dark:border-slate-700" />
              <div class="flex justify-between items-center px-5 gap-3">
                <div class="flex items-center gap-3">
                  <img src="@/assets/product/laptop/1.png" class="w-[60px]" />
                  <span class="text-left">
                    <a
                      href="./pages/detail.html"
                      class="font-semibold text-gray-800 dark:text-gray-300 block"
                    >
                      Laptop ASUS S4T
                    </a>
                    <small class="!-mt-3 inline-block text-gray-500">
                      1 barang (1kg)
                    </small>
                  </span>
                </div>
                <div>
                  <p class="text-indigo-500 font-semibold">Rp 2.500.000</p>
                </div>
              </div>
              <div class="px-2 mt-5">
                <router-link to="/cart" @click="showCart()">
                  <Button gradient="purple-blue" class="w-full">
                    Lihat Keranjang
                  </Button>
                </router-link>
              </div>
            </div>
          </button>

          <!--  -->

          <div class="mr-5">
            <button
              @click="showNotification()"
              class="mr-2 hover:bg-gray-200 dark:hover:bg-slate-700/50 p-2 rounded cursor-pointer relative"
            >
              <NotificationIcon myClass="w-6 h-6 text-indigo-500" />
              <span
                class="absolute top-0 right-0 bg-red-500 px-1 rounded text-[13px]"
              >
                1
              </span>
            </button>

            <div
              id="notification"
              class="absolute bg-white dark:bg-slate-800 text-black rounded shadow-md top-[52px] z-20 w-[300px] -translate-x-1/2 py-3 hidden"
            >
              <div class="px-5 py-2">
                <h5
                  class="font-semibold tracking-wide text-gray-800 dark:text-gray-200"
                >
                  Notifikasi
                </h5>
              </div>
              <hr class="w-[90%] mx-auto dark:border-slate-700" />
              <div class="flex justify-between items-center px-5 mt-5">
                <a
                  href=""
                  class="hover:bg-gray-200 dark:hover:bg-slate-700 text-center p-2 rounded w-1/4 box-border"
                >
                  <img src="@/assets/icon/7764102f.svg" class="mx-auto" />
                  <p
                    class="-leading-3 inline-block text-[12px] dark:text-gray-300"
                  >
                    Pesanan Diproses
                  </p>
                </a>
                <a
                  href=""
                  class="hover:bg-gray-200 dark:hover:bg-slate-700 text-center p-2 rounded w-1/4 box-border"
                >
                  <img src="@/assets/icon/a39f2a72.svg" class="mx-auto" />
                  <p
                    class="-leading-3 inline-block text-[12px] dark:text-gray-300"
                  >
                    Sedang Dikirim
                  </p>
                </a>
                <a
                  href=""
                  class="hover:bg-gray-200 dark:hover:bg-slate-700 text-center p-2 rounded w-1/4 box-border"
                >
                  <img src="@/assets/icon/b590a65c.svg" class="mx-auto" />
                  <p
                    class="-leading-3 inline-block text-[12px] dark:text-gray-300"
                  >
                    Sampai Tujuan
                  </p>
                </a>
              </div>
            </div>
          </div>

          <!--  -->
        </div>
        <div class="relative">
          <button
            class="border-gray-200 border-l-2 flex items-center"
            @click="showUserBox()"
          >
            <img
              src="@/assets/logo.jpeg"
              alt="user profile"
              class="w-[35px] h-[35px] rounded-full object-cover ml-5 mr-2 border border-gray-200 p-[2px]"
            />
            <span class="font-bold">Ilham</span>
          </button>
          <div
            id="userBox"
            class="absolute py-2 rounded text-gray-800 bg-white shadow-md w-[200px] -translate-x-1/2 top-[52px] hidden"
          >
            <ul>
              <li class="flex items-center gap-3 hover:bg-gray-100 py-2 px-5">
                <UserCircleIcon myClass="w-4" />
                <small>Profile</small>
              </li>
              <li
                class="flex items-center gap-3 text-red-500 hover:bg-gray-100 py-2 px-5"
              >
                <logoutIcon myClass="w-4" />
                <small>Logout</small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- hamburger -->
      <div class="sm:hidden flex">
        <button
          @click="showMobileNav()"
          class="cursor-pointer hover:text-indigo-500"
        >
          <HamburgerIcon myClass="w-7 dark:text-gray-200" />
        </button>
      </div>
    </nav>
    <!--  -->
    <div
      id="mobileNav"
      class="bg-white dark:bg-slate-800 shadow-md p-5 mx-auto items-center gap-5 justify-between z-[60] absolute right-0 left-0 top-[100px] hidden sm:!hidden"
    >
      <div class="relative items-center w-[80%]">
        <input
          type="text"
          placeholder="Search..."
          class="w-full py-2 px-3 rounded bg-gray-100 dark:bg-slate-700 border dark:text-gray-200"
        />
        <span
          class="absolute bg-indigo-500 right-[5px] flex justify-center items-center p-1 text-white rounded top-1/2 -translate-y-1/2"
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
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </span>
      </div>
      <!--  -->
      <div class="flex justify-end">
        <button
          class="mr-2 hover:bg-gray-200 dark:hover:bg-slate-700/50 p-2 rounded cursor-pointer relative"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-indigo-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <span
            class="absolute top-0 right-0 bg-red-500 px-1 rounded text-[13px]"
          >
            2
          </span>
        </button>

        <!--  -->

        <div>
          <button
            class="mr-2 hover:bg-gray-200 dark:hover:bg-slate-700/50 p-2 rounded cursor-pointer relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-indigo-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
            <span
              class="absolute top-0 right-0 bg-red-500 px-1 rounded text-[13px]"
            >
              1
            </span>
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- modal navbar -->
  <section class="fixed inset-0 bg-black/30 z-40 hidden">
    <div
      class="bg-white fixed w-[90%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] rounded p-5 shadow-md"
    >
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-semibold tracking-wider">Keranjang</h2>
        <button class="hover:text-indigo-500">
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <hr class="my-5" />
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-2">
          <img src="@/assets/product/laptop/1.webp" class="w-[100px]" />
          <span>
            <h3>Laptop ASUS ROG Intel i3</h3>
            <small>1 Brang (1 kg)</small>
          </span>
        </div>
        <div>
          <h6 class="font-semibold text-indigo-500">Rp 2.500.000</h6>
        </div>
      </div>
      <hr class="my-5" />
      <div>
        <Button gradient="purple-blue">Lihat Keranjang</Button>
      </div>
    </div>
  </section>
</template>
<script setup>
import { Button } from "flowbite-vue";
//
import Topbar from "./topbar.vue";

// icons
import SearchIcon from "../icons/searchIcon.vue";
import HamburgerIcon from "../icons/hamburgerIcon.vue";
import CartIcon from "../icons/cartIcon.vue";
import FireIcon from "../icons/fireIcon.vue";
import NotificationIcon from "../icons/notificationIcon.vue";
import UserCircleIcon from "../icons/userCircleIcon.vue";
import LogoutIcon from "../icons/logoutIcon.vue";

import Loading from "../../components/loading.vue";

//
const cart = document.getElementById("cart");
const searchBox = document.getElementById("searchBox");
const backdrop = document.getElementById("backdrop");
const notification = document.getElementById("notification");
const userBox = document.getElementById("userBox");
</script>
<script>
export default {
  data() {
    return {
      onBackdrop: 1,

      isLoading: false,
    };
  },
  methods: {
    redirectToSearch() {
      this.$router.push("/search");
    },
    toggleDarkMode() {
      setTimeout(() => {
        const htmlElement = document.documentElement;
        htmlElement.classList.toggle("dark");
      }, 1500);

      this.isLoading = !this.isLoading;

      setTimeout(() => {
        this.isLoading = false;
      }, 3000);
    },
    hiddenLoading() {
      this.isLoading = false;
    },
    //
    showCart() {
      cart.classList.toggle("hidden");
      //
      if (this.onBackdrop == 1) {
        backdrop.classList.toggle("hidden");
      } else {
        backdrop.classList.remove("hidden");
      }
      this.onBackdrop = 1;
      //
      const searchBoxIsActive = searchBox.classList.contains("hidden");
      if (!searchBoxIsActive) {
        searchBox.classList.add("hidden");
      }

      const notificationIsActive = notification.classList.contains("hidden");
      if (!notificationIsActive) {
        notification.classList.add("hidden");
      }

      const userBoxIsActive = userBox.classList.contains("hidden");
      if (!userBoxIsActive) {
        userBox.classList.add("hidden");
      }
    },

    showSearchBox() {
      searchBox.classList.toggle("hidden");
      //
      if (this.onBackdrop == 2) {
        backdrop.classList.toggle("hidden");
      } else {
        backdrop.classList.remove("hidden");
      }
      this.onBackdrop = 2;
      //
      const cartIsActive = cart.classList.contains("hidden");
      if (!cartIsActive) {
        cart.classList.add("hidden");
      }

      const notificationIsActive = notification.classList.contains("hidden");
      if (!notificationIsActive) {
        notification.classList.add("hidden");
      }

      const userBoxIsActive = userBox.classList.contains("hidden");
      if (!userBoxIsActive) {
        userBox.classList.add("hidden");
      }
    },

    showNotification() {
      notification.classList.toggle("hidden");
      //
      if (this.onBackdrop == 3) {
        backdrop.classList.toggle("hidden");
      } else {
        backdrop.classList.remove("hidden");
      }
      this.onBackdrop = 3;
      //
      const searchBoxIsActive = searchBox.classList.contains("hidden");
      if (!searchBoxIsActive) {
        searchBox.classList.add("hidden");
      }

      const cartIsActive = cart.classList.contains("hidden");
      if (!cartIsActive) {
        cart.classList.add("hidden");
      }

      const userBoxIsActive = userBox.classList.contains("hidden");
      if (!userBoxIsActive) {
        userBox.classList.add("hidden");
      }
    },

    showUserBox() {
      userBox.classList.toggle("hidden");
      //
      if (this.onBackdrop == 4) {
        backdrop.classList.toggle("hidden");
      } else {
        backdrop.classList.remove("hidden");
      }
      this.onBackdrop = 4;
      //
      const searchBoxIsActive = searchBox.classList.contains("hidden");
      if (!searchBoxIsActive) {
        searchBox.classList.add("hidden");
      }

      const cartIsActive = cart.classList.contains("hidden");
      if (!cartIsActive) {
        cart.classList.add("hidden");
      }

      const notificationIsActive = notification.classList.contains("hidden");
      if (!notificationIsActive) {
        notification.classList.add("hidden");
      }
    },

    clickBackdrop() {
      if (this.onBackdrop == 1) {
        this.showCart();
      } else if (this.onBackdrop == 2) {
        this.showSearchBox();
      } else if (this.onBackdrop == 3) {
        this.showNotification();
      } else if (this.onBackdrop == 4) {
        this.showUserBox();
      }

      backdrop.classList.add("hidden");
    },

    showModalSearch() {
      const modalSearch = document.getElementById("modalSearch");
      modalSearch.classList.toggle("hidden");
    },

    showMobileNav() {
      const mobileNav = document.getElementById("mobileNav");
      mobileNav.classList.toggle("hidden");
      mobileNav.classList.toggle("flex");
    },

    changeLanguage(lang) {
      this.$emit("changeLanguage", lang);
    },
  },
};
</script>

<style scoped>
.checkbox {
  opacity: 0;
  position: absolute;
}

.checkbox-label {
  width: 50px;
  height: 26px;
  border-radius: 50px;
  position: relative;
  padding: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.checkbox-label .ball {
  width: 22px;
  height: 22px;
  position: absolute;
  left: 2px;
  top: 2px;
  border-radius: 50%;
  transition: transform 0.2s linear;
}

.checkbox:checked + .checkbox-label .ball {
  transform: translateX(24px);
}
</style>