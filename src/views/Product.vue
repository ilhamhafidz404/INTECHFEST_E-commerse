<script setup>
import Footer from "../components/footer.vue";
</script>
<template>
  <div id="main">
    <div class="nav md:justify-between justify-center">
      <router-link to="/" class="md:block hidden">TOKO</router-link>
      <router-link to="/" id="our" class="font-semibold text-xl"
        >ALOPE IL PRO 14</router-link
      >
      <router-link to="/detail" class="md:block hidden"
        >Beli Sekarang</router-link
      >
    </div>
    <div class="content">
      <div class="dots-div">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <h1 class="-mt-16 md:text-2xl text-xl">
        extraordinary laptops for awesome people <br />
        <span class="text-xl">This is</span> <br />
        <span class="font-semibold text-3xl">ALOPE IL PRO SERIES 14</span>
      </h1>
      <div class="dots-div">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>
    <!--  -->

    <section class="bg-white pt-32">
      <section class="lg:w-[70%] w-[90%] !mx-auto">
        <div class="grid grid-cols-2 lg:gap-10 gap-5">
          <div
            data-aos="fade-right"
            class="text-center bg-[#f5f5f7] md:row-span-2 md:col-span-1 col-span-2 p-5 rounded-md"
          >
            <h4 class="font-semibold text-3xl mb-5">Desain minimalis</h4>
            <img
              src="./../assets/superior/1.jpg"
              width="500"
              class="mx-auto rounded"
            />
            <p class="mt-5 text-gray-500">dengan ukuran layar</p>
            <h5 class="text-2xl font-semibold">14Inch</h5>
          </div>
          <div
            data-aos="fade-left"
            class="text-center bg-[#f5f5f7] p-5 rounded-md flex items-center justify-center"
          >
            <div>
              <img
                src="https://www.apple.com/id/iphone-14/images/key-features/endcap/battery__dio46990h6qa_large.png"
                width="70"
                class="mx-auto"
              />
              <p class="mt-5 text-xl">
                Daya tahan baterai yang lama hingga
                <span class="text-xl font-semibold">28 jam</span>
              </p>
            </div>
          </div>
          <div
            data-aos="fade-left"
            class="text-center bg-[#f5f5f7] p-5 rounded-md flex items-center justify-center"
          >
            <div>
              <h4 class="font-semibold text-3xl mb-5">Cepat dan Tangguh</h4>

              <p class="mt-5 text-gray-500">
                lebih cepat dibandingkan MacBook Air.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div class="w-[80%] !mx-auto mt-20">
        <h2 data-aos="fade-right" class="text-6xl font-[500]">
          Didesain untuk <br />
          membuat <br />
          perubahan.
        </h2>

        <div class="grid lg:grid-cols-3 gap-10 mt-20">
          <div
            data-aos="zoom-in"
            class="bg-[#f5f5f7] rounded px-5 py-20 text-center"
          >
            <div
              data-aos="zoom-in"
              class="bg-red-500 w-[70px] h-[70px] rounded-full flex items-center justify-center mx-auto text-white mb-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-10"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-semibold mb-3">
              Privasi Fokus Utama Kami
            </h3>
            <a
              href="/product"
              class="!text-blue-600 w-[90%] mx-auto !underline"
            >
              Lihat fitur baru kami untuk menjaga privasi pengguna >
            </a>
          </div>
          <div
            data-aos="zoom-in"
            class="bg-[#f5f5f7] rounded px-5 py-20 text-center"
          >
            <div
              class="bg-yellow-300 w-[70px] h-[70px] rounded-full flex items-center justify-center mx-auto text-white mb-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-semibold mb-3">ALOPE Untuk Semua</h3>
            <a
              href="/product"
              class="!text-blue-600 w-[90%] mx-auto !underline"
            >
              Fitur aksesibilitas untuk penderita buta warna sampai VoiceOver >
            </a>
          </div>
          <div
            data-aos="zoom-in"
            class="bg-[#f5f5f7] rounded px-5 py-20 text-center"
          >
            <div
              class="bg-emerald-500 w-[70px] h-[70px] rounded-full flex items-center justify-center mx-auto text-white mb-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-10"
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
            </div>
            <h3 class="text-2xl font-semibold mb-3">Harga Terjangkau</h3>
            <a
              href="/product"
              class="!text-blue-600 w-[90%] mx-auto !underline"
            >
              Murah bukan berarti jelek, lihat bagaimana cara kami bisa
              mengatasi harga >
            </a>
          </div>
        </div>
      </div>

      <!--  -->
      <div class="img-div lg:!flex !hidden">
        <div
          class="img flex items-center justify-center text-xl text-white font-bold"
        >
          Ini Adalah Laptop Impianmu!
        </div>
      </div>
    </section>
  </div>

  <Footer :language="language" />
</template>

<script>
import "aos/dist/aos.css";
import AOS from "aos";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  mounted() {
    AOS.init();

    gsap.registerPlugin(ScrollTrigger);

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#main",
        // markers: true,
        start: "86% 50%",
        end: "100% 50%",
        scrub: 5,
        duration: 1,
        pin: true,
      },
    });
    tl.to(".img", {
      width: "100vw",
      height: "100vh",
      fontSize: "60px",
    });
  },
};
</script>

<style scoped>
@font-face {
  font-family: fontone;
  src: url(Fonts/PPMigra-Regular.fb0ee287.otf);
}

@font-face {
  font-family: fontthree;
  src: url(Fonts/TTCommons-Regular.7ec989a7.otf);
}

a {
  text-decoration: none;
  color: #000;
  font-family: fontthree;
}
#main {
  width: 100%;
  min-height: 100vh;
  background-color: #daeefb;
}

.nav {
  display: flex;
  align-items: center;
  width: 100%;
  height: 10vh;
  padding: 0vw 5vw;
  /* background-color: aquamarine; */
}

#our {
  font-family: fontone;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15vh;
  width: 100%;
  height: 90vh;
  font-family: fontone;
  font-size: 1.5vw;
  letter-spacing: 0.1vw;
  /* background-color: rgb(168, 255, 165); */
}

.content h1 {
  text-align: center;
}

.dots-div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 5vh;
  /* background-color: orange; */
}

.dot {
  width: 0.3vw;
  height: 0.3vw;
  border-radius: 50px;
  background-color: rgb(0, 0, 0);
}

.img-div {
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  /* background-color: rgb(100, 183, 255); */
}

.img {
  width: 25vw;
  height: 50vh;
  background-image: url(./../assets/superior/onPage.jpg);
  background-size: cover;
  background-position: center;
}
</style>