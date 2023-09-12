<template>
  <ul class="steps mt-10 dark:text-gray-200 mx-auto">
    <li :class="{ active: on == 'checkout' }">Checkout</li>
    <li :class="{ active: on == 'payment' }">Pembayaran</li>
    <li :class="{ active: on == 'verification' }">Verifikasi Pembayaran</li>
    <li :class="{ active: on == 'express' }">Selesai</li>
  </ul>
</template>

<script>
export default {
  props: ["on"],
};
</script>

<style scoped>
.steps {
  position: relative;
  margin-bottom: 30px;
  counter-reset: step; /*创建步骤数字计数器*/
}
/*步骤描述*/
.steps li {
  list-style-type: none;
  font-size: 12px;
  text-align: center;
  width: 25%;
  position: relative;
  float: left;
}

/*步骤数字*/
.steps li:before {
  display: block;
  content: counter(step); /*设定计数器内容*/
  counter-increment: step; /*计数器值递增*/
  width: 32px;
  height: 32px;
  background-color: #7a3df2;
  line-height: 32px;
  border-radius: 32px;
  font-size: 16px;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin: 0 auto 8px auto;
}

/*连接线*/
.steps li ~ li:after {
  content: "";
  width: 100%;
  height: 2px;
  background-color: #7a3df2;
  position: absolute;
  left: -50%;
  top: 15px;
  z-index: -1; /*放置在数字层后面*/
}

/*将当前/完成步骤之前连接线变绿*/
.steps li.active:after {
  background-color: #7a3df2;
}

/*将当前/完成步骤之后的数字及连接线变灰*/
.steps li.active ~ li:before,
.steps li.active ~ li:after {
  background-color: #777;
}
</style>