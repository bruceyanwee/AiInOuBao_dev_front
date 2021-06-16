<template>
	<view class="page">		
		<text class="title">宝宝测评报告可视化</text>					
		<!-- 情感雷达图的显示 -->
		<view class="charts-box">
		  <qiun-data-charts
		    type="radar"
		    :chartData="chartData_radar"
		    background="none"
		    :animation="true"
		  />
		</view>
		<u-line color="gray" />
		<view>
			<text class="sub_title">报告词云图</text>
		</view>
		<!-- 词云图的显示 -->
		<view class="charts-box">
		  <qiun-data-charts
		    type="word"
		    :chartData="chartData_WC"
		    :echartsApp="false"
		    background="none"
		    :animation="true"
		  />
		</view>
		<view>
			<text class="sub_title">报告关键词</text>
		</view>
		<view class="tag_area">			
			<view class="top_scenes">
				<u-button type="primary" size="medium" class="custom-style" style="width: 150rpx;margin: 10px;">语言表现:</u-button>
				<u-tag shape="circle" :text="tag.name" type="success" style="margin-left: 3px;" v-for="tag in top_scenes"/>
			</view>
			<view class="top_topics">
				<u-button type="success" size="medium" class="custom-style" style="width: 150rpx;margin: 10px;">发展策略:</u-button>
				<u-tag shape="circle" :text="tag.name" type="warning" style="margin-left: 3px;" v-for="tag in top_topics"/>
			</view>
			<!-- <view class="top_emotions">
				<u-button type="warning" size="medium" class="custom-style" style="width: 150rpx;margin: 10px;">多模态情感:</u-button>
				<u-tag shape="circle" :text="tag.name" type="primary" style="margin-left: 3px;" v-for="tag in top_emotions"/>
			</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				top_scenes:[
					{
						name:"用词代句",
					},{
						name:"重叠音",
					},
					{
						name:"有趣"
					}],
				top_topics:[
					{
						name:'启发提问',
					},{
						name:'共同阅读'	
					}],
				top_emotions:[
					{
						name:'愉悦'
					},{
						name:'满足'
					}
				],
				chartData_radar:{
					"categories": [
						"认知",
						"语言",
						"运动",
						"情绪",
						"社会性"
					],
					"series": [
						{
							"name": "发育指标",
							"data": [
								90,
								110,
								165,
								87,
								130
							]
						},					
					]
				},
				chartData_WC:{
				  categories:[],
				  series:[
					   {
						  "name": "单词句阶段",
						  "textSize": 25
					   },{
						  "name": "互动式",
						  "textSize": 40
					   },{
						  "name": "协调性",
						  "textSize": 21
					   },{
						  "name": "精细动作",
						  "textSize": 9
					   },{
						  "name": "抓取",
						  "textSize": 13
					   },{
						  "name": "鼓励",
						  "textSize": 29
					   }					   
				  ],
				},		
				}
		},
		methods: {
			
		}
	}
</script>

<style>
.page{
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
}
.title {
			font-size: 18px;
			font-weight: 500;
			color: rgba(43, 43, 43, 1);
			line-height: 41px;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
.charts-box{
	width: 100%;
	height: 500rpx;
}
.sub_title {	
	margin-left: 10px;
	font-size: 14px;
	font-weight: 90%;				
	line-height: 40px;
			}
.tag_area{
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	height: 400upx;
	width: 90%;
	margin-left:5%;
	margin-right:5%;
}
.top_scenes{
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
}
</style>
