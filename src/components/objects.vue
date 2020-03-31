<template>
    <div>
    <el-checkbox-group v-model="checkList">
        <el-checkbox label="Design"></el-checkbox>
        <el-checkbox label="Implementation"></el-checkbox>
        <el-checkbox label="Option3"></el-checkbox>
        <el-checkbox label="Option4" ></el-checkbox>
    </el-checkbox-group>
    <el-row>
        <el-col :span="3" v-for="o in 7" :key="o" :offset="1" style="padding-top:10px">
            <el-card :body-style="{ padding: '0px' }">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGtk6n6E_d6UcimHHbDCMJ4c8BLgPDpE77fh3NCUGB1TYr4yjd" class="image">
            <div style="padding: 14px;">
                <span>SampleBIMObject{{o}}
                </span>
                <div class="bottom clearfix">
                <el-button type="text" class="button">Download</el-button>
                </div>
            </div>
            </el-card>
        </el-col>
</el-row>
    </div>
</template>

<script>
export default {
  data () {
    return {
      checkList: ['scale-down', 'sdfs']
    }
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
