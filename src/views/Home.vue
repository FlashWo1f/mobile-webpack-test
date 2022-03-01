<template>
  <div class="home">
    <div class="home-header">电商沙盘</div>
    <div class="home-rest">
      <div class="home-rest--desc">当前任务剩余时间</div>
      <div class="home-rest--time">05：00</div>
    </div>
    <div class="home-main">
      <div class="home-main__img"></div>
      <div class="home-main__info">
        <div class="home-main__info-title">Part2 职位分配</div>
        <div class="home-main__info-target"></div>
        <div class="home-main__info-desc"></div>
      </div>
      <div class="van-home-main__btn">333</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>

<style lang="less">
.home {
  width: 100vw;
  height: 100vh;
  background-color: #000;
  font-size: 32px;
  color: #fff;
  .home-header {
    font-weight: bold;
    text-align: center;
    padding: 44px 0;
  }
  .home-rest {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    .home-rest--desc {
      font-size: 24px;
      margin-right: 32px;
    }
    .home-rest--time {
      font-size: 54px;
      padding: 4px 0;
    }
  }
  .home-main {
    padding: 40px 80px;
    .home-main__img {
      width: 590px;
      height: 590px;
      background-image: url(~@/assets/frame2.png);
      background-size: contain;
    }
    .home-main__info {
      margin-top: 40px;
      text-align: left;
      font-size: 42px;
      line-height: 48px;
      font-weight: bold;
    }
  }
  .van-home-main__btn {
    font-size: 16px;
  }
}
</style>
