<template>
  <div id="main">
    <div class="nav">
      <router-link to="/">TOKO</router-link>
      <router-link to="/" id="our">ALOPE IL PRO 14</router-link>
      <router-link to="/detail">Beli Sekarang</router-link>
    </div>
    <div class="content">
      <div class="dots-div">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <h1>
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
    <div class="img-div">
      <div class="img"></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#main",
        // markers: true,
        start: "65% 50%",
        end: "100% 50%",
        scrub: 5,
        duration: 1,
        pin: true,
      },
    });
    tl.to(".img", {
      width: "100vw",
      height: "100vh",
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

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
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
  justify-content: space-between;
  width: 100%;
  height: 10vh;
  padding: 0vw 5vw;
  /* background-color: aquamarine; */
}

#our {
  font-size: 2vw;
  font-family: fontone;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15vh;
  width: 100%;
  height: 70vh;
  padding: 0vw 15vw;
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
  display: flex;
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