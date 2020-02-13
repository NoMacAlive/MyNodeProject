<template>
  <div class="hello">
    <h2>Welcome to your CaseStudy {{ Id }}</h2>
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item class="submenu" title="Summary" name="1">
        <p>Building Information Modeling (BIM) is the process of creating and managing 3D building data during its development. BIM is a complex multiphase process that gathers input from team members to model the components and tools that will be used during the construction process to create a unique perspective of the building process.</p>

        <p> The 3D process is aimed at achieving savings through collaboration and visualization of building components into an early design process that will dictate changes and modifications to the actual construction process. It is a very powerful tool that when used properly will save money, time and simplify the construction process.</p>

        <p> BIM Is Not Only for Architects Over the years, the industry has commercialized BIM towards architectural related professionals, however, the real purpose and benefits of BIM relate to all construction industry professionals. The 3D representation of the building and now used in roads and utilities too and is geared towards all construction professionals, and all of you are responsible for understanding the process and participate in providing input to the software.</p>
      </el-collapse-item>
      <el-collapse-item class="submenu" title="Introduction" name="2">
        <p>Building Information Modeling (BIM) is the process of creating and managing 3D building data during its development. BIM is a complex multiphase process that gathers input from team members to model the components and tools that will be used during the construction process to create a unique perspective of the building process.</p>

        <p> The 3D process is aimed at achieving savings through collaboration and visualization of building components into an early design process that will dictate changes and modifications to the actual construction process. It is a very powerful tool that when used properly will save money, time and simplify the construction process.</p>

        <p> BIM Is Not Only for Architects Over the years, the industry has commercialized BIM towards architectural related professionals, however, the real purpose and benefits of BIM relate to all construction industry professionals. The 3D representation of the building and now used in roads and utilities too and is geared towards all construction professionals, and all of you are responsible for understanding the process and participate in providing input to the software.</p>
      </el-collapse-item>
      <el-collapse-item class="submenu" title="Workflow" name="3">
        <!-- Unfinished VUE-BPMN -->
          <div style="height: 300px">
            <vue-bpmn
            url= '/static/bpmnExample.bpmn'
            v-on:error="handleError"
            v-on:shown="handleShown"
            v-on:loading="handleLoading"
          ></vue-bpmn>
          </div>
      </el-collapse-item>
      <el-collapse-item title="Project Phase" name="4">
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import VueBpmn from 'vue-bpmn'

export default {
  components: {
    VueBpmn
  },
  data () {
    return {
      Id: this.$route.query.Id,
      activeNames: ['1']
    }
  },
  methods: {
    handleChange (val) {
      console.log(val)
    },
    handleError: function (err) {
      console.error('failed to show diagram', err)
    },
    handleShown: function () {
      console.log('diagram shown')
    },
    handleLoading: function () {
      console.log('diagram loading')
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
.submenu{
      font-size: larger
}
</style>
