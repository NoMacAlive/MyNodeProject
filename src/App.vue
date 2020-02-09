<template>
  <div id="app">
    <el-container style="height: 1000px">
        <el-aside>
        <div style="background-color: darkgrey" >
          <el-menu default-active="1-4-1" class="el-menu-vertical-demo">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-s-home"></i>
                <span slot="title">Home</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1"><span class="home">Introduction</span></el-menu-item>
                <el-menu-item index="1-2"><span class="home">GuideLines</span></el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">About Us</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">Contact Us

              </span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">FeedBack</span>
            </el-menu-item>
          </el-menu>
        </div>
        </el-aside>

        <el-main>
          <router-view></router-view>
        </el-main>
    </el-container>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  min-height: 400px;
  height: 1000px;
  /* background-color: #409EFF; */
}
.home {
  font:bold;
}

</style>
