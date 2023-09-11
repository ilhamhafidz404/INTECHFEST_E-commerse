<script setup>
import { Modal, Input, Button } from "flowbite-vue";
</script>
<template>
  <Modal size="xl" v-if="modalPromo" @close="closeModal">
    <template #header>
      <div class="flex items-center text-lg font-semibold dark:text-gray-200">
        Pakai Promo
      </div>
    </template>
    <template #body>
      <div class="flex justify-between gap-1">
        <div class="w-[90%]">
          <Input placeholder="Masukkan kode promo" v-model="promoValue">
            <template #helper>
              Ikuti instagram
              <a href="" class="text-blue-500 font-semibold">@alopetech</a>
              untuk mendapatkan kode promo lainnya.
            </template>
          </Input>
        </div>
        <div>
          <Button
            gradient="purple-blue"
            class="py-[11px]"
            @click="closeModal()"
          >
            Pakai
          </Button>
        </div>
      </div>

      <hr class="mt-4 dark:border-slate-600" />
      <h4
        class="mb-4 text-xl font-semibold text-gray-500 mt-1 dark:text-gray-200"
      >
        Promo Tersedia
      </h4>

      <div
        class="w-full rounded-md p-3 border dark:border-slate-600 mb-2 cursor-pointer"
        @click="changePromoValue('INTECHFEST2023')"
        :class="{
          'bg-gradient-to-r to-[#7a3ef2]/20 from-[#4180f8]/20 border-blue-500':
            promoValue == 'INTECHFEST2023',
          'bg-gray-100 dark:bg-slate-800': promoValue != 'INTECHFEST2023',
        }"
      >
        <h3
          class="font-semibold mb-2 text-xl"
          :class="{
            'text-transparent bg-clip-text bg-gradient-to-r to-[#7a3ef2] from-[#4180f8] ':
              promoValue == 'INTECHFEST2023',
            'text-gray-500 dark:text-gray-300': promoValue != 'INTECHFEST2023',
          }"
        >
          PROMO MERIAH PERLOMBAAN INTECHFEST
        </h3>
        <p
          class="text-base leading-relaxed"
          :class="{
            'text-blue-500': promoValue == 'INTECHFEST2023',
            'text-gray-500 dark:text-gray-400': promoValue != 'INTECHFEST2023',
          }"
        >
          Turun harga hingga 1,7 juta
          <br />
          Mulai 3 menit lagi!
        </p>
      </div>
      <div
        class="w-full rounded-md p-3 border dark:border-slate-600 mb-2 cursor-pointer"
        @click="changePromoValue('HARIJADIALOPE')"
        :class="{
          'bg-gradient-to-r to-[#7a3ef2]/20 from-[#4180f8]/20 border-blue-500':
            promoValue == 'HARIJADIALOPE',
          'bg-gray-100 dark:bg-slate-800': promoValue != 'HARIJADIALOPE',
        }"
      >
        <h3
          class="font-semibold mb-2 text-xl"
          :class="{
            'text-transparent bg-clip-text bg-gradient-to-r to-[#7a3ef2] from-[#4180f8] ':
              promoValue == 'HARIJADIALOPE',
            'text-gray-500 dark:text-gray-300': promoValue != 'HARIJADIALOPE',
          }"
        >
          PROMO HARI JADI
        </h3>
        <p
          class="text-base leading-relaxed"
          :class="{
            'text-blue-500': promoValue == 'HARIJADIALOPE',
            'text-gray-500 dark:text-gray-400': promoValue != 'HARIJADIALOPE',
          }"
        >
          Turun harga hingga 1,7 juta
          <br />
          Mulai 3 menit lagi!
        </p>
      </div>

      <hr class="mt-7 dark:border-slate-600" />
      <h4
        class="mb-4 text-xl font-semibold text-gray-500 mt-1 dark:text-gray-200"
      >
        Promo mendatang
      </h4>

      <div
        class="w-full bg-gray-100 dark:bg-slate-800 rounded-md p-3 border dark:border-slate-600 cursor-not-allowed"
      >
        <h3 class="text-gray-500 dark:text-gray-400 font-semibold text-xl mb-2">
          PROMO TAHUN BARU
        </h3>
        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-300">
          Turun harga hingga 1,7 juta
          <br />
          Mulai 3 menit lagi!
        </p>
      </div>
    </template>
  </Modal>
</template>

<script>
export default {
  props: ["modalPromo"],
  data() {
    return {
      promoValue: "",
    };
  },
  methods: {
    closeModal() {
      this.$emit("toggleModalPromo");
      this.promoValue = "";
    },
    changePromoValue(value) {
      this.promoValue = value;
    },
  },
};
</script>

<style>
</style>