<template>
  <div class="hello">
    <h2>{{data.title}}</h2>
    <el-divider></el-divider>
    <img :src=data.imgUrl class="image">
    <el-divider></el-divider>
    <h3>Introduction</h3>
    <p>{{data.introduction}}</p>
    <el-divider></el-divider>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="File Name"
        width="180">
      </el-table-column>
      <el-table-column
        prop="format"
        label="File Format"
        width="180">
      </el-table-column>
      <el-table-column
        prop="description"
        label="Description">
      </el-table-column>
      <el-table-column
        label="Link">
        <template slot-scope="scope">
        <a :href="scope.row.link" target="_blank" class="buttonText">{{scope.row.link}}</a>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      d: this.$route.query.data,
      activeNames: ['1'],
      data: {title: 'sample topic'},
      tableData: [{}]
    }
  },
  beforeMount () {
    console.log('-------getData')
    var that = this
    var url = '/getProject/'
    var u = url.concat(this.$route.query.data.id)
    this.axios.get(process.env.API_HOST + u)
              .then(function (response) {
                // console.log(JSON.parse(JSON.stringify(response.data)))
                that.data = JSON.parse(JSON.stringify(response.data))
                var parsedJson = eval('(' + response.data.tableData + ')')
                that.tableData = Object.keys(parsedJson).map(key => parsedJson[key])
                console.log(that.data)
                console.log(that.tableData)
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
