<template>
  <div
    class="bg-gradient-to-r from-[#4180f8] to-[#7a3ef2] flex justify-center items-center relative"
  >
    <div class="flex sm:gap-10 gap-5 p-2 justify-center relative z-40">
      <span class="flex items-center text-white sm:text-sm text-[10px]">
        <img
          src="./../../assets/icon/ic-guarantee.svg"
          class="mr-2 sm:w-auto w-[20px]"
        />
        {{ language == "id" ? content.id[0] : content.en[0] }}
      </span>
      <span class="flex items-center text-white sm:text-sm text-[10px]">
        <img
          src="./../../assets/icon/ic-delivery-truck.svg"
          class="mr-2 sm:w-auto w-[20px]"
        />
        {{ language == "id" ? content.id[1] : content.en[1] }}
      </span>
      <span class="flex items-center text-white sm:text-sm text-[10px]">
        <img
          src="./../../assets/icon/ic-shield.svg"
          class="mr-2 sm:w-auto w-[20px]"
        />
        {{ language == "id" ? content.id[2] : content.en[2] }}
      </span>
    </div>
    <div
      class="absolute right-0 w-[300px] text-white lg:flex lg:items-center hidden"
    >
      <small> {{ language == "id" ? "Bahasa :" : "Language :" }}</small>
      <img
        src="./../../assets/language/indonesia.png"
        class="w-[20px] h-[20px] object-cover ml-5 mr-1"
        :class="{ hidden: language == 'en' }"
      />
      <img
        src="./../../assets/language/united-kingdom.png"
        class="w-[20px] h-[20px] object-cover ml-5 mr-1"
        :class="{ hidden: language == 'id' }"
      />
      <select class="bg-transparent border-0" @change="changeLanguange()">
        <option value="id" selected>Indonesia</option>
        <option value="en">English</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      language: "id",
      //
      content: {
        id: ["Garansi 2 Tahun", "Gratis Ongkir*", "Produk Original"],
        en: ["2 Year Warranty", "Free Shipping", "Original Product"],
      },
    };
  },
  methods: {
    changeLanguange() {
      this.language == "id" ? (this.language = "en") : (this.language = "id");
      this.$emit("changeLanguage", this.language);
    },
  },
};
</script>

<style>
</style>