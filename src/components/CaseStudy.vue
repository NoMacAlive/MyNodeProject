<template>
  <div class="hello">
    <h2>{{data.title}}</h2>
    <el-divider></el-divider>
    <img :src=data.imgUrl class="image">
    <el-divider></el-divider>
    <h3>Introduction</h3>
    <p>{{data.introduction}}</p>
    <el-divider></el-divider>
    <el-button type='primary'>Download</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      d: this.$route.query.data,
      activeNames: ['1'],
      data: {title: 'sample topic'}
    }
  },
  beforeMount () {
    console.log('-------getData')
    var that = this
    var url = '/getProject/'
    var u = url.concat(this.$route.query.data.id)
    this.axios.get(process.env.API_HOST + u)
              .then(function (response) {
                console.log(JSON.parse(JSON.stringify(response.data)))
                that.data = JSON.parse(JSON.stringify(response.data))
                console.log(that.data)
              })
              .catch(function (error) {
                console.log(error)
              })
              console.log('--------------gotData')
  },
  methods: {
    handleChange (val) {
      console.log(val)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
