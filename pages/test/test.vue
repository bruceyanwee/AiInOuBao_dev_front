<template>
	<view>
		<Answer :questtionList='questtionList' @submit='handleSubmit' @onChange='onChange'></Answer>
	</view>
	
</template>
<script>
	import Answer from '@/components/dyw-answer/answer.vue';
	// 儿童潜能测试题 20题 https://www.sohu.com/a/165658304_649240
	const data_test = require('@/common/json/test_qiannneg.json');	
	export default {
		data() {
			return {
				questtionList: data_test['list']
			}
		},
		components:{
			Answer
		},
		methods: {
			/* 提交答案
			 */
			handleSubmit(answerList){
				console.log(answerList)
				uni.navigateTo({
					url:"../test_report/test_report"
				})
			},
			/* 题目答案变化
			 */
			onChange(answer){
				console.log(answer)
			}
		}
	}
</script>

<style>

</style>
