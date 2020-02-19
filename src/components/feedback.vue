<template>
    <div>
        <h1>Please provide your feedback in the following field</h1>
        <el-input
            type="textarea"
            autosize
            placeholder="Please enter your feedback"
            v-model="textarea1">
        </el-input>
        <el-button type="primary" class="button">submit</el-button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            textarea1: ''
        }
    }
}
</script>
