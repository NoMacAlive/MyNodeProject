<template>
  <div id="app">
    <el-container style="height: 1000px" class ="is-vertical">
      <!-- HEADER -->
      <header class="el-header" style="height: 200px; background-color: #409EFF;">
        <el-row>
        <!-- LOGO -->
        <el-col :span="6">
        <div>
          <div class="block" v-for="fit in fits" :key="fit">
            <el-image
              style="width: 220px; height: 220px"
              :src="url"
              :fit="fit"></el-image>
          </div>
        </div>
        </el-col>
        <div style="margin-top:100px">
        <!-- BIM OBJECT -->
        <el-col :span="3">
          <el-button round>BIM OBJECT</el-button>
        </el-col>

        <!-- CASE STUDY -->
        <el-col :span="3">
          <el-button round>CASE STUDY</el-button>
        </el-col>

        <!-- STANDARD -->
        <el-col :span="3">
          <el-button round>STANDARD</el-button>
        </el-col>
        </div>

        <!-- search and filter -->
        <el-col :span= 6>
        <div>
          <el-autocomplete
            v-model="state"
            :fetch-suggestions="querySearchAsync"
            placeholder="Search "
            @select="handleSelect"
          ></el-autocomplete>
          <el-button type="primary" icon="el-icon-search">Search</el-button>
        </div>
        </el-col>

        <el-col :span= 3>
          <el-button type="success" icon="el-icon-help">SignUp</el-button>
          <el-button type="primary" icon="el-icon-user">Login</el-button>
        </el-col>
        </el-row>

      </header>
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
  name: 'App',
  data () {
    return {
      fits: ['scale-down'],
      url: './static/logo_transparent.png'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
