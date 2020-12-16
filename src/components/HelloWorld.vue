<template>
    <div>
        <el-input
        type="file"
        name="file"
        :value="dape.file"
        v-model="dape.file"
        accept="image/*"
        @change="update(dape)">上传</el-input>
    </div>
</template>
<script>

export default {
	name:'HelloWorld',
    data() {
        return {
            dape:{file:''}
        }
    },
	mounted(){
		
	},
    methods: {
        update(e){
            let _upimg = document.getElementsByName('file')[0].files[0];
			console.log(_upimg)
			let formData = new FormData();
			formData.append('file',_upimg);
			console.log(formData)
			/* 上传文件 */
			/* headers 需要设置时添加 对应的apilist内 接口函数要进行接值 */
			let params = {
				formData, 
				headers :{headers:{'Content-Type': 'multipart/form-data'}}
			}
			this.$http
				.slpost(params)
				.then((res) => {
					console.log("正确数据", res);
				})
				.catch((err) => {
					console.log("错误数据", err), (this.show = false);
				});
			/* 普通调用接口 */

     		this.$http
				.sl1post({name:1})
				.then((res) => {
					console.log("正确数据", res);
				})
				.catch((err) => {
					console.log("错误数据", err), (this.show = false);
				});

    },
}
}
</script>