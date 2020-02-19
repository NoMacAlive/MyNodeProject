<template>
  <div class="hello">
    <h2>Welcome to your standard {{ Id }}</h2>
    <div class="block">
    <el-image
      style="width: 300px; height: 300px"
      src="/static/StandardSampleImage.png"
      fit="contain"></el-image>
    </div>
    <div>
    <h2>NEW - PAS 1192-6:2018</h2>
    <h3>Specification for collaborative sharing and use of structured Health and Safety information using BIM</h3>
    <el-divider></el-divider>
    <p>PAS 1192-6 specifies requirements for the collaborative sharing of structured H&S information throughout the project and asset life-cycles. This PAS standard supports the development of structured H&S information for all construction projects progressively from the outset.</p>
    <p>The PAS provides guidance on how H&S information is produced, flows and can be used throughout the project and asset lifecycle. Whilst all H&S risk information can be included within an information model, this PAS requires the contextualization and filtering of hazards and risks to prioritize the elevated risks and aspects that are safety critical.</p>
    <p>PAS 1192-6 sets out a framework (risk information cycle) for the application of H&S information-use through BIM processes and applications. The principles and requirements of this PAS can be applied equally to non-BIM projects. </p>
    <el-button type="primary" class="button">Download</el-button>
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
