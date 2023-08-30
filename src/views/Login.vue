<script setup>
import { Input } from "flowbite-vue";
import { Button } from "flowbite-vue";
</script>
<template>
  <img
    src="../assets/login.jpg"
    class="w-[1000px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
  />
  <main
    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:mt-0 mt-20"
  >
    <img src="./../assets/textLogo.png" class="w-[120px] mx-auto" />
    <section class="bg-white p-7 shadow-lg rounded-md md:w-[430px] w-screen">
      <h2 class="font-semibold mb-8">Masuk Untuk Melanjutkan</h2>
      <form>
        <Input
          size="sm"
          placeholder="Nomor Handphone atau Email"
          label="Nomor Handphone atau Email"
          class="mb-3"
        />
        <Input
          size="sm"
          placeholder="Kata Sandi"
          label="Kata Sandi"
          class="mb-5"
        />

        <Button
          gradient="purple-blue"
          class="w-full py-3"
          @click="redirectToHome()"
        >
          Masuk
        </Button>
      </form>

      <div class="my-10 relative">
        <hr />
        <span
          class="text-[12px] absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-5 text-gray-400"
        >
          Atau Masuk Dengan
        </span>
      </div>

      <button
        class="flex justify-center gap-3 items-center w-full bg-gray-300 hover:bg-gray-400 rounded-md py-2 text-white"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <path
              d="M3.54594 9.66899L2.989 11.7481L0.953406 11.7912C0.345063 10.6628 0 9.37186 0 7.99999C0 6.67339 0.322625 5.42239 0.8945 4.32086H0.894938L2.70719 4.65311L3.50106 6.45449C3.33491 6.93889 3.24434 7.45889 3.24434 7.99999C3.24441 8.58724 3.35078 9.14989 3.54594 9.66899Z"
              fill="#FBBB00"
            ></path>
            <path
              d="M15.8602 6.50549C15.9521 6.98943 16 7.48921 16 7.99999C16 8.57274 15.9398 9.13143 15.8251 9.67034C15.4357 11.5042 14.4181 13.1055 13.0084 14.2387L13.008 14.2382L10.7253 14.1218L10.4023 12.1051C11.3377 11.5565 12.0687 10.698 12.4537 9.67034H8.1759V6.50549H12.5161H15.8602Z"
              fill="#518EF8"
            ></path>
            <path
              d="M13.0079 14.2382L13.0083 14.2387C11.6373 15.3406 9.89577 16 7.99996 16C4.95337 16 2.30459 14.2971 0.953369 11.7912L3.5459 9.66901C4.22149 11.4721 5.96084 12.7556 7.99996 12.7556C8.87643 12.7556 9.69756 12.5187 10.4022 12.105L13.0079 14.2382Z"
              fill="#28B446"
            ></path>
            <path
              d="M13.1063 1.84175L10.5147 3.9635C9.78547 3.50769 8.92347 3.24437 7.99997 3.24437C5.91469 3.24437 4.14281 4.58678 3.50106 6.4545L0.894908 4.32088H0.89447C2.22591 1.75384 4.9081 0 7.99997 0C9.94106 0 11.7208 0.691437 13.1063 1.84175Z"
              fill="#F14336"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="16" height="16" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
        Login dengan Google
      </button>

      <p class="text-center mt-3 text-sm">
        Belum Punya Akun ?
        <a href="" class="text-indigo-500 font-semibold">Daftar</a>
      </p>

      <p class="w-[86%] mx-auto text-center text-[12px] mt-10">
        Butuh bantuan atau pertanyaan hubungi kami di
        <span class="font-semibold">customer.care@alopetech.co.id</span> atau
        kirim pesan via
        <a href="" class="text-emerald-500">WhatsApp</a>
      </p>
    </section>

    <footer class="text-sm mt-10 text-center md:mb-0 mb-8">
      © 2023 Hak Cipta Terpelihara
      <span class="font-semibold">PT ALOPE Tech Indonesia</span>
    </footer>
  </main>
</template>

<script>
export default {
  methods: {
    redirectToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>