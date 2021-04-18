<template name='item_star'>
	<view class="item-score-wrapper">
		<image 
			v-for="(y,index) in yellow_num"
			src="../static/poster_test/star_1.png" 
			class="star-icon">
		</image>
		<image 
			v-for="(g,index) in gray_num"
			src="../static/poster_test/star_0.png" 
			class="star-icon">
		</image>
		<view class="item-score-text">
			{{score}}
		</view>
	</view>
</template>

<script>
	export default {
		name:"item_star",
		data() {
			return {			
				yellow_num :0,
				gray_num:5
			};
		},
		props:{
			score:0, //定义外部传入的值
			show:0   //显示分数
		},
		//生命周期组件被完成后调用
		created(){	
			var temp = 0;
			if(this.score!=null && this.score!= undefined && this.score!=''){
				temp = this.score;				
			}
			var yellow_num = parseInt(temp / 2);
			var gray_num = 5 - yellow_num;
			this.yellow_num = yellow_num;				
			this.gray_num = gray_num;
		}
	}
</script>

<style>
.item-score-wrapper{
	display: flex;
	flex-direction: row;
}
.star-icon{
	width:20upx ;
	height: 20upx;
	margin-top: 5upx;
}
.item-score-text{
	font-size: 12px;
	color: #999999;
	margin-left: 10upx;
}
</style>
