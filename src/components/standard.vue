<template>
  <div class="hello">
    <h2>Welcome to your standard {{ Id }}</h2>
    <div class="block" v-for="fit in fits" :key="fit">
    <el-image
      style="width: 100px; height: 100px"
      :src="url"
      :fit="fit"></el-image>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      Id: this.$route.query.Id,
      activeNames: ['1']
    }
  },
  methods: {
    handleChange (val) {
      console.log(val)
    }
  }
}
</script>
