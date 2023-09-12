
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
          <Button gradient="purple-blue" outline class="m-1">
            Laptop Untuk Siswa
          </Button>
          <Button gradient="purple-blue" outline class="m-1"
            >Laptop IL Series
          </Button>
          <Button gradient="purple-blue" outline class="m-1">
            HAM HP Gaming
          </Button>

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
                <router-link to="/detail">
                  <h5>ALOPE Galaxy Wings</h5>
                </router-link>
              </div>
            </div>
            <div class="rounded-md shadow-md p-2">
              <img src="@/assets/product/laptop/4.png" class="rounded" />
              <div class="mt-2">
                <router-link to="/detail">
                  <h5>Laptop IL PRO 14</h5>
                </router-link>
              </div>
            </div>
            <div class="rounded-md shadow-md p-2">
              <img src="@/assets/product/workbench/1.png" class="rounded" />
              <div class="mt-2">
                <router-link to="/detail">
                  <h5>ALOPE Alien Ware</h5>
                </router-link>
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
          <MoonIcon myClass="w-6 h-6 text-yellow-300" />

          <SunIcon myClass="w-6 h-6 text-yellow-500" />

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
              <div
                class="bg-blue-500/30 hover:bg-blue-500/10 cursor-pointer px-5 py-3 dark:text-gray-200"
              >
                <h3 class="font-semibold">Terimakasih Sudah Berbelanja</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  Silahkan berikan ulasan untuk produk yang lebih baik nantinya
                </p>
              </div>
              <div
                class="text-blue-500 text-center cursor-pointer border-t dark:border-slate-700 pt-3"
              >
                Tandai sudah dibaca
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
                <LogoutIcon myClass="w-4" />
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
          @click="toggleModalCart()"
        >
          <CartIcon myClass="w-6 h-6 text-indigo-500" />
          <span
            class="absolute top-0 right-0 bg-red-500 px-1 rounded text-[13px] text-white"
          >
            2
          </span>
        </button>

        <!--  -->

        <div>
          <button
            class="mr-2 hover:bg-gray-200 dark:hover:bg-slate-700/50 p-2 rounded cursor-pointer relative"
            @click="toggleModalNotification()"
          >
            <NotificationIcon myClass="w-6 h-6 text-indigo-500" />
            <span
              class="absolute top-0 right-0 bg-red-500 px-1 rounded text-[13px] text-white"
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

  <!-- modal search -->
  <section id="modalSearch" class="fixed inset-0 bg-black/30 z-40 hidden">
    <div
      class="bg-white dark:bg-slate-800 p-5 rounded shadow-md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] dark:text-gray-200"
    >
      <div class="relative">
        <SearchIcon myClass="w-6 h-6 absolute top-1/2 -translate-y-1/2 ml-3" />
        <input
          type="text"
          class="w-full border py-4 rounded pl-12"
          placeholder="Cari Produk..."
        />
        <button
          @click="showModalSearch()"
          class="absolute top-1/2 -translate-y-1/2 right-0 bg-indigo-500 px-4 rounded-r-lg flex text-sm gap-1 text-white h-full"
        >
          <CloseIcon myClass="w-6" />
        </button>
      </div>
      <!--  -->
      <div class="h-[350px] overflow-y-auto mt-10">
        <h3 class="font-semibold">Pencarian Populer</h3>
        <div>
          <Button gradient="purple-blue" outline class="m-1">
            Laptop Untuk Siswa
          </Button>
          <Button gradient="purple-blue" outline class="m-1"
            >Laptop IL Series
          </Button>
          <Button gradient="purple-blue" outline class="m-1">
            HAM HP Gaming
          </Button>
        </div>
        <hr class="my-4" />

        <h3 class="font-semibold">Promo Hari Ini</h3>
        <div>
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
        </div>

        <hr class="my-4" />

        <h3 class="font-semibold">Produk Rekomendasi</h3>
        <div class="grid grid-cols-3 gap-5">
          <div class="rounded-md shadow-md p-2">
            <img src="@/assets/product/phone/1.png" class="rounded" />
            <div class="mt-2">
              <router-link to="/detail">
                <h5>ALOPE Galaxy Wings</h5>
              </router-link>
            </div>
          </div>
          <div class="rounded-md shadow-md p-2">
            <img src="@/assets/product/laptop/4.png" class="rounded" />
            <div class="mt-2">
              <router-link to="/detail">
                <h5>Laptop IL PRO 14</h5>
              </router-link>
            </div>
          </div>
          <div class="rounded-md shadow-md p-2">
            <img src="@/assets/product/workbench/1.png" class="rounded" />
            <div class="mt-2">
              <router-link to="/detail">
                <h5>ALOPE Alien Ware</h5>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- modal cart -->
  <section id="modalCart" class="fixed inset-0 bg-black/30 z-[60] hidden">
    <div
      class="bg-white dark:bg-slate-800 p-5 rounded shadow-md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] dark:text-gray-200"
    >
      <!--  -->
      <div class="">
        <div class="flex justify-between items-center">
          <h3 class="font-semibold text-xl">Keranjang</h3>
          <button class="hover:text-blue-500" @click="toggleModalCart()">
            <CloseIcon myClass="w-6" />
          </button>
        </div>

        <hr class="my-5 dark:border-slate-700" />

        <div class="mt-5 flex justify-between">
          <div class="flex gap-5">
            <div>
              <img
                src="@/assets/product/laptop/4.png"
                class="w-[100px] rounded"
              />
            </div>
            <div>
              <h4 class="font-semibold mt-1">ALOPE IL PRO SERIES 14</h4>
              <span class="text-gray-500">Intel Core i3 Gen5 - 8GB/512GB</span>
              <h5 class="text-blue-500 mt-2 font-semibold">Rp 12.000.000</h5>
            </div>
          </div>
          <div>
            <p class="font-semibold text-xl">x1</p>
          </div>
        </div>

        <Button
          gradient="purple-blue"
          class="w-full mt-5"
          @click="redirectToDetail()"
        >
          Lihat Keranjang
        </Button>
      </div>
    </div>
  </section>

  <!-- modal notification -->
  <section
    id="modalNotification"
    class="fixed inset-0 bg-black/30 z-[60] hidden"
  >
    <div
      class="bg-white dark:bg-slate-800 p-5 rounded shadow-md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] dark:text-gray-200"
    >
      <div>
        <div class="flex justify-between items-center">
          <h3 class="font-semibold text-xl">Notifikasi</h3>
          <button
            class="hover:text-blue-500"
            @click="toggleModalNotification()"
          >
            <CloseIcon myClass="w-6" />
          </button>
        </div>

        <hr class="my-5 dark:border-slate-700" />

        <div
          class="bg-blue-500/30 hover:bg-blue-500/10 cursor-pointer px-5 py-3 dark:text-gray-200 rounded"
        >
          <h3 class="font-semibold">Terimakasih Sudah Berbelanja</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            Silahkan berikan ulasan untuk produk yang lebih baik nantinya
          </p>
        </div>

        <Button gradient="purple-blue" class="w-full mt-5">
          Tandai semua sudah dibaca
        </Button>
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
import SunIcon from "../icons/sunIcon.vue";
import MoonIcon from "../icons/moonIcon.vue";
import CloseIcon from "../icons/closeIcon.vue";

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
    redirectToDetail() {
      this.toggleModalCart();
      setTimeout(() => {
        this.$router.push("/detail");
      }, 1000);
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

    toggleModalCart() {
      const modalCart = document.getElementById("modalCart");
      modalCart.classList.toggle("hidden");
    },

    toggleModalNotification() {
      const modalNotification = document.getElementById("modalNotification");
      modalNotification.classList.toggle("hidden");
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