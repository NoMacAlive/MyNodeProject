<template>
    <div>
    <el-checkbox-group v-model="checkList">
        <el-checkbox label="Design"></el-checkbox>
        <el-checkbox label="Implementation"></el-checkbox>
        <el-checkbox label="Option3"></el-checkbox>
        <el-checkbox label="Option4" ></el-checkbox>
    </el-checkbox-group>
    <el-row>
      <el-col :span="3" v-for="(project, index) in data" :key="index" :offset="1" style="padding-top:10px">
            <el-card :body-style="{ padding: '0px' }">
            <img :src=project.imgUrl class="image">
            <div style="padding: 14px;">
                <span>{{project.title}}
                </span>
                <div class="bottom clearfix">
                <router-link :to="{name: 'CaseStudy', query: {Id:project.id}}">
                <el-button type="text" class="button">Details</el-button>
                </router-link>
                </div>
            </div>
            </el-card>
        </el-col>
        <!-- <div>{{data}}</div> -->
    </el-row>
    </div>
</template>

<script>
export default {
  name: 'casestudies',
  data () {
    return {
      checkList: ['scale-down', 'sdfs'],
      data: [],
      loaded: false,
      project: {},
      index: 1
    }
  },
  // props: {
  //   inputValue: {}
  // },
  // watch: {
  //   inputValue: function (value) {
  //      console.log('ads')
  //    }
  // },
  beforeMount () {
    console.log('-------getData')
    var that = this
    this.axios.get('http://localhost:8888/getProjects/')
              .then(function (response) {
                console.log(JSON.parse(JSON.stringify(response.data)))
                that.data = JSON.parse(JSON.stringify(response.data))
                console.log(that.data)
              })
              .catch(function (error) {
                console.log(error)
              })
              console.log('--------------gotData')
  }
}
</script>

<style scoped>
.time {
font-size: 13px;
color: #999;
}
.bottom {
margin-top: 13px;
line-height: 12px;
}
.button {
padding: 0;
float: right;
}
.image {
width: 100%;
display: block;
min-height: 200px;
min-width: 200px;
}
.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}
.clearfix:after {
    clear: both
}
</style>
