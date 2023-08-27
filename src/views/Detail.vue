<template>
  <section
    id="backdrop"
    class="fixed inset-0 bg-black/30 z-40 hidden"
    onclick="clickBackdrop()"
  ></section>

  <section>
    <div
      class="bg-indigo-500 flex sm:gap-10 gap-5 p-2 justify-center relative z-50"
    >
      <span class="flex items-center text-white sm:text-sm text-[10px]">
        <img
          src="./../assets/icon/ic-guarantee.svg"
          class="mr-2 sm:w-auto w-[20px]"
        />
        Garansi 2 Tahun
      </span>
      <span class="flex items-center text-white sm:text-sm text-[10px]">
        <img
          src="./../assets/icon/ic-delivery-truck.svg"
          class="mr-2 sm:w-auto w-[20px]"
        />
        Gratis Ongkir*
      </span>
      <span class="flex items-center text-white sm:text-sm text-[10px]">
        <img
          src="./../assets/icon/ic-shield.svg"
          class="mr-2 sm:w-auto w-[20px]"
        />
        Produk Original
      </span>
    </div>
    <nav
      class="relative flex items-center justify-between py-4 shadow-md lg:px-20 md:px-10 px-5 z-50 left-0 right-0 bg-white top-0"
    >
      <div class="lg:w-[20%]">
        <a href="./../index.html">
          <h2 class="text-indigo-500 font-bold text-2xl">ALOPE STORE</h2>
        </a>
      </div>
      <!--  -->
      <div class="relative w-[40%] lg:flex hidden items-center">
        <input
          onfocus="showSearchBox()"
          type="text"
          placeholder="Search..."
          class="w-full py-2 px-3 rounded bg-gray-100 border"
        />
        <span
          class="absolute bg-indigo-500 right-[5px] flex justify-center items-center p-1 text-white rounded"
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
        <div
          id="searchBox"
          class="bg-white shadow-md absolute top-[50px] p-5 w-full rounded hidden max-h-[300px] overflow-y-auto"
        >
          <h3 class="font-semibold">Pencarian Populer</h3>
          <div>
            <ul class="flex gap-3 mt-5">
              <li class="bg-gray-100 py-1 px-5 rounded text-gray-700">Asus</li>
              <li class="bg-gray-100 py-1 px-5 rounded text-gray-700">
                Lenovo
              </li>
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
      <!--  -->
      <div class="sm:flex hidden text-white w-[20%] justify-end">
        <div class="flex items-center justify-end">
          <!-- search -->
          <button
            onclick="showModalSearch()"
            class="mr-2 hover:bg-gray-200/50 p-2 rounded cursor-pointer relative lg:hidden md:inline-block hidden"
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
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>

          <button
            onclick="showCart()"
            class="mr-2 hover:bg-gray-200/50 p-2 rounded cursor-pointer relative"
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
            <div
              id="cart"
              class="absolute bg-white text-black rounded shadow-md top-[52px] z-20 w-[400px] -translate-x-1/2 py-3 hidden"
            >
              <div class="px-5 py-2 text-left">
                <h5 class="font-semibold tracking-wide text-gray-800">
                  Subtotal (2 Produk)
                </h5>
              </div>
              <hr class="w-[90%] mx-auto" />
              <div class="flex justify-between items-center px-5 gap-3">
                <div class="flex items-center gap-3">
                  <img src="./assets/product/laptop/1.webp" class="w-[60px]" />
                  <span class="text-left">
                    <a
                      href="./pages/detail.html"
                      class="font-semibold text-gray-800 block"
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
                <a
                  href=""
                  class="bg-indigo-500 hover:bg-indigo-600 w-full py-2 rounded text-white inline-block text-center"
                >
                  Lihat Keranjang
                </a>
              </div>
            </div>
          </button>

          <!--  -->

          <div class="mr-5">
            <button
              onclick="showNotification()"
              class="mr-2 hover:bg-gray-200/50 p-2 rounded cursor-pointer relative"
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

            <div
              id="notification"
              class="absolute bg-white text-black rounded shadow-md top-[52px] z-20 w-[300px] -translate-x-1/2 py-3 hidden"
            >
              <div class="px-5 py-2">
                <h5 class="font-semibold tracking-wide text-gray-800">
                  Notifikasi
                </h5>
              </div>
              <hr class="w-[90%] mx-auto" />
              <div class="flex justify-between items-center px-5 mt-5">
                <a
                  href=""
                  class="hover:bg-gray-200 text-center p-2 rounded w-1/4 box-border"
                >
                  <img src="./../assets/icon/5e972574.svg" class="mx-auto" />
                  <p class="-leading-3 inline-block text-[12px]">
                    Pesanan Pending
                  </p>
                </a>
                <a
                  href=""
                  class="hover:bg-gray-200 text-center p-2 rounded w-1/4 box-border"
                >
                  <img src="./../assets/icon/7764102f.svg" class="mx-auto" />
                  <p class="-leading-3 inline-block text-[12px]">
                    Pesanan Diproses
                  </p>
                </a>
                <a
                  href=""
                  class="hover:bg-gray-200 text-center p-2 rounded w-1/4 box-border"
                >
                  <img src="./../assets/icon/a39f2a72.svg" class="mx-auto" />
                  <p class="-leading-3 inline-block text-[12px]">
                    Sedang Dikirim
                  </p>
                </a>
                <a
                  href=""
                  class="hover:bg-gray-200 text-center p-2 rounded w-1/4 box-border"
                >
                  <img src="./../assets/icon/b590a65c.svg" class="mx-auto" />
                  <p class="-leading-3 inline-block text-[12px]">
                    Sampai Tujuan
                  </p>
                </a>
              </div>
            </div>
          </div>

          <!--  -->

          <!-- <div class="relative">
              <button
                class="mr-5 hover:bg-gray-200/50 p-2 rounded cursor-pointer"
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
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </button>
              <div
                id="notification"
                class="absolute bg-white text-black rounded shadow-md top-[52px] z-20 w-[300px] -translate-x-1/2 py-3 hidden"
              >
                <div class="px-5 py-2">
                  <h5 class="font-semibold tracking-wide text-gray-800">
                    Notifikasi
                  </h5>
                </div>
                <hr class="w-[90%] mx-auto" />
                <div class="flex justify-between items-center px-5 mt-5">
                  <a
                    href=""
                    class="hover:bg-gray-200 text-center p-2 rounded w-1/4 box-border"
                  >
                    <img src="./../assets/icon/5e972574.svg" class="mx-auto" />
                    <p class="-leading-3 inline-block text-[12px]">
                      Pesanan Pending
                    </p>
                  </a>
                  <a
                    href=""
                    class="hover:bg-gray-200 text-center p-2 rounded w-1/4 box-border"
                  >
                    <img src="./../assets/icon/7764102f.svg" class="mx-auto" />
                    <p class="-leading-3 inline-block text-[12px]">
                      Pesanan Diproses
                    </p>
                  </a>
                  <a
                    href=""
                    class="hover:bg-gray-200 text-center p-2 rounded w-1/4 box-border"
                  >
                    <img src="./../assets/icon/a39f2a72.svg" class="mx-auto" />
                    <p class="-leading-3 inline-block text-[12px]">
                      Sedang Dikirim
                    </p>
                  </a>
                  <a
                    href=""
                    class="hover:bg-gray-200 text-center p-2 rounded w-1/4 box-border"
                  >
                    <img src="./../assets/icon/b590a65c.svg" class="mx-auto" />
                    <p class="-leading-3 inline-block text-[12px]">
                      Sampai Tujuan
                    </p>
                  </a>
                </div>
              </div>
            </div> -->
        </div>
        <div class="relative">
          <button
            class="border-gray-200 border-l-2 flex items-center"
            onclick="showUserBox()"
          >
            <img
              src="/assets/logo.jpeg"
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <small>Profile</small>
              </li>
              <li
                class="flex items-center gap-3 text-red-500 hover:bg-gray-100 py-2 px-5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                  />
                </svg>
                <small>Logout</small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- hamburger -->
      <div class="sm:hidden flex">
        <button
          onclick="showMobileNav()"
          class="cursor-pointer hover:text-indigo-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </nav>
    <!--  -->
    <div
      id="mobileNav"
      class="bg-white shadow-md p-5 mx-auto items-center gap-5 justify-between z-[60] absolute right-0 left-0 top-[100px] hidden sm:!hidden"
    >
      <div class="relative items-center w-[80%]">
        <input
          type="text"
          placeholder="Search..."
          class="w-full py-2 px-3 rounded bg-gray-100 border"
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
          class="mr-2 hover:bg-gray-200/50 p-2 rounded cursor-pointer relative"
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
            class="mr-2 hover:bg-gray-200/50 p-2 rounded cursor-pointer relative"
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

  <!--  -->

  <section class="container mx-auto mt-8 px-20">
    <div class="grid grid-cols-7 gap-10">
      <div class="inline-flex col-span-3">
        <div class="w-[80px] text-center">
          <ul>
            <li class="border p-1 rounded border-indigo-500 mb-2">
              <img
                src="./../assets/product/laptop/detail/1.webp"
                class="w-[70px] h-[70px] object-cover"
              />
            </li>
            <li
              class="border p-1 rounded hover:border-indigo-500 mb-2 border-transparent"
            >
              <img
                src="./../assets/product/laptop/detail/2.webp"
                class="w-[70px] h-[70px] object-cover"
              />
            </li>
            <li
              class="border p-1 rounded hover:border-indigo-500 mb-2 border-transparent"
            >
              <img
                src="./../assets/product/laptop/detail/3.webp"
                class="w-[70px] h-[70px] object-cover"
              />
            </li>
          </ul>
        </div>
        <div>
          <img src="./../assets/product/laptop/detail/1.webp" />
        </div>
      </div>
      <div class="col-span-4">
        <h1 class="text-xl font-bold mb-2">
          HP Elitebook 840 G3 Core i5 Gen6 RAM 8GB SSD 256GB 14inch FULLHD Slim
          - 11 G1 I3 5TH, 16GB/512GB
        </h1>
        <span class="flex mb-5">
          Terjual 22
          <span class="inline-block mx-3">•</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-4 mr-1 text-yellow-400"
          >
            <path
              fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clip-rule="evenodd"
            />
          </svg>
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
          <div class="mt-3">
            <button
              class="p-2 rounded-lg border px-4 border-indigo-500 bg-indigo-500/20 text-indigo-500 font-semibold"
            >
              840 G3 i5 Gen6
            </button>
            <button
              class="p-2 rounded-lg border px-4 border-gray-400 hover:border-indigo-500 hover:bg-indigo-500/20 hover:text-indigo-500 font-semibold text-gray-400"
            >
              840 G3 i5 Gen6
            </button>
            <button
              class="p-2 rounded-lg border px-4 border-gray-400 hover:border-indigo-500 hover:bg-indigo-500/20 hover:text-indigo-500 font-semibold text-gray-400"
            >
              840 G3 i5 Gen6
            </button>
            <button
              class="p-2 rounded-lg border px-4 border-gray-400 hover:border-indigo-500 hover:bg-indigo-500/20 hover:text-indigo-500 font-semibold text-gray-400"
            >
              840 G3 i5 Gen6
            </button>
          </div>
        </section>
        <section class="mt-10">
          <div class="flex items-center gap-5">
            <h4 class="font-bold">Pilih kapasitas memori :</h4>
            <span class="text-sm text-gray-500 font-semibold">16GB/512GB</span>
          </div>
          <div class="mt-3">
            <button
              class="p-2 rounded-lg border px-4 border-indigo-500 bg-indigo-500/20 text-indigo-500 font-semibold"
            >
              16GB/512GB
            </button>
            <button
              class="p-2 rounded-lg border px-4 border-gray-400 hover:border-indigo-500 hover:bg-indigo-500/20 hover:text-indigo-500 font-semibold text-gray-400"
            >
              16GB/512GB
            </button>
            <button
              class="p-2 rounded-lg border px-4 border-gray-400 hover:border-indigo-500 hover:bg-indigo-500/20 hover:text-indigo-500 font-semibold text-gray-400"
            >
              16GB/512GB
            </button>
            <button
              class="p-2 rounded-lg border px-4 border-gray-400 hover:border-indigo-500 hover:bg-indigo-500/20 hover:text-indigo-500 font-semibold text-gray-400"
            >
              16GB/512GB
            </button>
          </div>
        </section>
        <section class="mt-10 mb-5 border p-5 rounded-md border-indigo-500">
          <h4 class="font-bold mb-3">Atur Jumlah Pembelian & catatan :</h4>
          <div class="flex items-center gap-10">
            <div class="flex items-center gap-3">
              <button class="border rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.25 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <input
                type="text"
                value="1"
                class="border border-gray-400 rounded w-[30px] text-center py-1"
              />
              <button class="border rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-4 mr-3"
              >
                <path
                  d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"
                />
              </svg>
              Tambah catatan pembelian
            </div>
          </div>
          <div class="mt-4 flex items-end gap-5">
            <p>Subtotal :</p>
            <h5 class="text-2xl font-bold">Rp 2.500.000</h5>
          </div>
          <div class="flex gap-4 mt-5">
            <a
              href="./cart.html"
              class="flex items-center gap-2 bg-indigo-500 rounded-md px-6 py-2 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                />
              </svg>
              Tambah ke Keranjang
            </a>
            <button
              class="flex items-center gap-2 border border-indigo-500 rounded-md px-6 py-2 text-indigo-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                <path
                  fill-rule="evenodd"
                  d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                  clip-rule="evenodd"
                />
                <path
                  d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z"
                />
              </svg>
              Beli Langsung
            </button>
          </div>
        </section>
      </div>
    </div>
    <hr />
    <div>
      <h2 class="text-2xl font-bold my-3">Ulasan</h2>
      <div
        class="bg-gradient-to-r from-[#f8f6f2] to-white p-5 rounded-md flex justify-between items-center"
      >
        <div class="flex gap-2 text-xl items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-8 text-yellow-400"
          >
            <path
              fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clip-rule="evenodd"
            />
          </svg>
          <span> 4.8 </span>
          <p>/ 5</p>
          <span class="text-gray-400">(6 ulasan)</span>
        </div>
        <div class="flex gap-3">
          <div class="border rounded py-3 px-5 text-center">
            <span class="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-7 mr-2 text-yellow-400"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd"
                />
              </svg>
              <p class="text-xl">5</p>
            </span>
            <span class="inline-block mt-2 text-gray-400">5 Ulasan</span>
          </div>
          <div class="border rounded py-3 px-5 text-center">
            <span class="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-7 mr-2 text-yellow-400"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd"
                />
              </svg>
              <p class="text-xl">4</p>
            </span>
            <span class="inline-block mt-2 text-gray-400">5 Ulasan</span>
          </div>
          <div class="border rounded py-3 px-5 text-center">
            <span class="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-7 mr-2 text-yellow-400"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd"
                />
              </svg>
              <p class="text-xl">3</p>
            </span>
            <span class="inline-block mt-2 text-gray-400">5 Ulasan</span>
          </div>
          <div class="border rounded py-3 px-5 text-center">
            <span class="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-7 mr-2 text-yellow-400"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd"
                />
              </svg>
              <p class="text-xl">2</p>
            </span>
            <span class="inline-block mt-2 text-gray-400">5 Ulasan</span>
          </div>
          <div class="border rounded py-3 px-5 text-center">
            <span class="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-7 mr-2 text-yellow-400"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd"
                />
              </svg>
              <p class="text-xl">1</p>
            </span>
            <span class="inline-block mt-2 text-gray-400">5 Ulasan</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--  -->

  <footer
    class="container mx-auto px-20 grid grid-cols-4 mt-20 border-t border-gray-200 py-5"
  >
    <div class="col-span-2">
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
      class="col-span-4 border-y border-gray-200 py-5 mt-10 flex justify-between"
    >
      <h3>Belanja makin mudah menggunakan aplikasi</h3>
      <p>Download on Play Store</p>
    </div>
  </footer>
  <div class="col-span-4 bg-indigo-500 text-center py-5 text-white">
    © 2023 Hak Cipta Terpelihara PT Alope Indonesia
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>