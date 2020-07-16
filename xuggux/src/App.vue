<template>
  <div id="app">
    <div id="link">
      <div class="xugh--img"><img src="@/assets/imgs/icon.png" alt="icon" width="50px"></div>
      <router-link to="/index" tag="div" class="xugh--nav">我的红呢</router-link>
      <router-link to="/notebook" tag="div" class="xugh--nav">我的橙呢</router-link>
      <router-link to="/about" tag="div" class="xugh--nav">我的黄呢</router-link>
      <router-link to="/green" tag="div" class="xugh--nav">我的绿呢</router-link>
      <router-link to="/cyan" tag="div" class="xugh--nav">我的青呢</router-link>
      <router-link to="/blue" tag="div" class="xugh--nav">我的蓝呢</router-link>
      <router-link to="/purple" tag="div" class="xugh--nav">我的紫呢</router-link>
      <!-- <div class="aside"><img :src="balzac_h" alt="human" width="100%">
        <div @click="coffee" class="coffee">COFFEE</div>
      </div> -->
    </div>
    <div id="view">
      <router-view></router-view>
      <!-- <img src="@/assets/imgs/beian.png"> -->
      <div class="beian">
        <a href="http://www.beian.miit.gov.cn">苏ICP备20041414</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {
    },
    data() {
      return {

      }
    },
    methods: {
      // coffee() {
      //   this.balzac_h = !this.balzac_h_active ? require("@/assets/imgs/balzac_ha.png") : require("@/assets/imgs/balzac_h.png");
      //   this.balzac_h_active = !this.balzac_h_active;
      // }
    }
  }
</script>

<style>
  @import url("./assets/css/main.css");

  #link {
    width: 10%;
    height: 100%;
    box-shadow: 5px 5px 10px rgb(80, 00, 80, 0.05);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1000;
    background-color: rgb(80, 00, 80, 0.01);
  }

  .content {
    z-index: 10000;
  }

  #view {
    position: absolute;
    top: 10%;
    left: 12%;
    right: 4%;
    /* overflow: hidden; */
    z-index: 100;
  }

  #link div.xugh--img {
    text-align: center;
    margin: auto;
    margin-top: 3em;
  }

  .xugh--nav {
    text-align: center;
    margin: auto;
    margin-top: 1.3em;
    line-height: 1.5em;
    color: rgb(80, 00, 80, 0.9);
    cursor: pointer;
    font-family: "biaoSong";
    font-size: 0.95em;
  }

  .xugh--nav:hover {
    background-color: rgb(80, 00, 80, 0.02);
  }

  .aside {
    width: 100%;
    position: absolute;
    margin-top: 15%;
    bottom: 30%;
  }

  .coffee {
    width: 70px;
    color: #fff;
    font-family: 'Courier New', Courier, monospace;
    background-color: rgb(80, 00, 80, 0.5);
    text-align: center;
    margin: auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
  }
</style>