<template>
  <div id="index">
    <p>......</p>
    <p>......</p>
    <p><br /></p>
    <p>学习如何搭建一个网站？
      阿里云租的服务器系统选择了 Windows Server2019，后端使用 NodeJS，前端框架选择 Vue。
      现在开始记录怎么摸索着搭建好一个网站</p>
    <p>......</p>
    <p>......</p>
    <p><br /></p>
    <p>普通的展示网页，在IIS中设置一下就可以了 <a href="https://www.jb51.net/article/180451.htm" style="color:purple">点此查看</a></p>
    <p>......</p>
    <p>......</p>
    <p><br /></p>
    <p>高级一点的需要在服务器端安装 NodeJS，通过 express 框架设置静态文件的路径，路径设置为 Vue 通过 npm run build 打包的 dist 文件夹路径，通过 NodeJS 运行 js 文件，并在 80
      端口监听</p>
    <p>......</p>
    <p>......</p>
    <p><br /></p>
    <p>通过域名访问的话，需要设置域名解析到相应的服务器 IP 地址</p>
    <editby>
      <div>---- EDIT BY XUGH ----</div>
    </editby>
    <!-- <p>巴尔扎克<span class="note" data-content="法国作家那样成"><img src="@/assets/note.png" alt="注"></span></p> -->
  </div>
</template>

<script>
  const editby = () => import("@/components/main/editby.vue");
  export default {
    name: "index",
    components: {
      editby
    }
  }
</script>

<style scoped>

</style>