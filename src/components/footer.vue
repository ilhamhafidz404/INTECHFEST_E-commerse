<template>
  <footer
    class="container mx-auto lg:px-20 px-10 md:grid flex flex-col grid-cols-4 mt-20 border-t border-gray-200 py-5 md:gap-0 gap-10"
  >
    <div class="md:col-span-2">
      <h2 class="text-xl font-semibold mb-5">
        {{ language == "id" ? "Kontak Kami" : "Our Contact" }}
      </h2>
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
      <h2 class="text-xl font-semibold mb-5 mt-7">
        {{ language == "id" ? "Sosial Media Kami" : "Our Social Media" }}
      </h2>
      <div class="flex">
        <img src="./../assets/icon/ic-instagram.svg" class="w-[35px] mr-2" />
        <img src="./../assets/icon/ic-facebook.svg" class="w-[35px] mr-2" />
        <img src="./../assets/icon/ic-twitter.svg" class="w-[35px] mr-2" />
        <img src="./../assets/icon/ic-youtube.svg" class="w-[35px] mr-2" />
        <img src="./../assets/icon/ic-tiktok.svg" class="w-[35px] mr-2" />
      </div>
    </div>
    <div>
      <h2 class="text-xl font-semibold mb-5">
        {{ language == "id" ? "Bantuan" : "Help" }}
      </h2>
      <ul v-html="language == 'id' ? content.help.id : content.help.en"></ul>
    </div>
    <div>
      <h2 class="text-xl font-semibold mb-5">
        {{ language == "id" ? "Layanan Pelanggan" : "Customer Care" }}
      </h2>
      <ul v-html="language == 'id' ? content.care.id : content.care.en"></ul>
    </div>

    <!--  -->

    <div
      class="col-span-4 border-y border-gray-200 py-5 mt-10 sm:flex sm:justify-between sm:items-center sm:text-left text-center"
    >
      <h3>
        {{
          language == "id"
            ? "Belanja makin mudah menggunakan aplikasi"
            : "Shopping becomes easier using the application"
        }}
      </h3>
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
    © 2023
    {{ language == "id" ? "Hak Cipta Terpelihara" : "Copyright Preserved" }} PT
    Alope Indonesia
  </div>
</template>

<script>
export default {
  props: ["language"],
  data() {
    return {
      content: {
        help: {
          id: "<li><a href='' class='text-sm'>Pengiriman</a></li><li><a href='' class='text-sm'>Pengembalian Produk</a></li><li><a href='' class='text-sm'>Garansi</a></li><li>  <a href='' class='text-sm'>Panduan Pembayaran</a></li><li>  <a href='' class='text-sm'>Panduan Voucher</a></li><li>  <a href='' class='text-sm'>Syarat dan Ketentuan</a></li><li>  <a href='' class='text-sm'>Kebijakan Provasi</a></li>",
          en: "<li><a href='' class='text-sm'>Delivery</a></li><li><a href='' class='text-sm'>Product Returns</a></li><li><a href='' class='text-sm'>Warranty</a></li><li><a href='' class='text-sm'>Payment Guide</a></li><li> <a href='' class='text-sm'>Voucher Guide</a></li><li><a href='' class='text-sm'>Terms and Conditions</a></li><li><a href='' class='text-sm'>Provation Policy</a></li>",
        },
        care: {
          id: "<li><a href='' class='text-sm'>Hubungi Kami</a></li><li>  <a href='' class='text-sm'>Harga Grosir</a></li><li>  <a href='' class='text-sm'>Konfirmasi Pembayaran</a></li><li>  <a href='' class='text-sm'>FAQ / Bantuan</a></li>",
          en: "<li><a href='' class='text-sm'>Contact Us</a></li><li>  <a href='' class='text-sm'>Wholesale Price</a></li><li>  <a href='' class='text-sm'>Confirm Payment</a></li><li>  <a href='' class='text-sm'>FAQ / Help</a></li>",
        },
      },
    };
  },
};
</script>

<style>
</style>