<template>
  <div id="app">
    <el-container style="height: 1000px; width:1910px" class ="is-vertical">
      <!-- HEADER -->
      <header class="el-header" style="height: 200px; background-color: #409EFF;">
        <el-row :gutter="20">
        <!-- LOGO -->
        <el-col :span= "6">
        <div>
          <router-link to="/">
          <div class="block">
            <el-image
              style="width: 220px; height: 220px"
              :src="url"
              ></el-image>

          </div>
          </router-link >
        </div>
        </el-col>
        <div style="margin-top:100px">
        <!-- BIM OBJECT -->
        <el-col :span= "2" :gutter="20">
          <router-link to="objects"><el-button style="min-width:100px" round>Object</el-button></router-link>
        </el-col>

        <!-- CASE STUDY -->
        <el-col :span= "2" :gutter="20">
          <router-link to="casestudies"><el-button style="min-width:100px" round>Casestudy</el-button></router-link>
        </el-col>

        <!-- STANDARD -->
        <el-col :span= "2" :gutter="20">
          <router-link to="standards"><el-button style="min-width:100px" round>Standard</el-button></router-link>
        </el-col>
        </div>

        <!-- search and filter -->
        <el-col :span= "8">
        <div>
          <el-input placeholder="Search" v-model="input3" class="input-with-select">
              <el-select v-model="select" slot="prepend" placeholder="Category">
                <el-option label="Commercial" value="1"></el-option>
                <el-option label="Education" value="2"></el-option>
                <el-option label="New Category" value="3"></el-option>
              </el-select>
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
        </el-col>

        <el-col :span= "4">
          <el-button type="success" icon="el-icon-help">SignUp</el-button>
          <el-button type="primary" icon="el-icon-user">Login</el-button>
        </el-col>
        </el-row>

      </header>
    <el-container>
      <el-aside>
      <div style="background-color: darkgrey" >
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-home"></i>
              <span slot="title">Home</span>
            </template>
            <el-menu-item-group>
              <el-menu-item @click="goAssignBlock('Introduction',50)" index="1-1"><span class="home">Introduction</span></el-menu-item>
              <el-menu-item @click="goAssignBlock('Guideline',50)" index="1-2"><span class="home">GuideLines</span></el-menu-item>
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
        <router-view ref="view"></router-view>
      </el-main>
      </el-container>
    <el-tooltip placement="top" content="Back To Top">
      <el-backtop :custom-style="myBackToTopStyle" :visibility-height="300" :back-position="0" transition-name="fade"/>
    </el-tooltip>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      fits: ['scale-down'],
      url: './static/logo_transparent.png',
      input1: '',
      input2: '',
      input3: '',
      select: '',
      myBackToTopStyle: {
        right: '50px',
        bottom: '50px',
        width: '40px',
        height: '40px',
        borderRadius: '4px',
        lineHeight: '45px', // 请保持与高度一致以垂直居中
        background: '#e7eaf1'// 按钮的背景颜色
      }
    }
  },
  methods: {
    goAssignBlock: function (el, speed) {
      this.$refs.view.viewFunction(el, speed)
    }
  }
}
</script>

<style>
html,body {
  height: 100%;
}
@import url("element-ui/lib/theme-chalk/index.css");
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
.el-select .el-input {
  width: 110px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.el-scrollbar__wrap {
    overflow: scroll;
    height: 100%;
}
.page-component__scroll  {
    height: 100%;
}
</style>
