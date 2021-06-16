<template>
	<view>
		<u-dropdown>
			<u-dropdown-item v-model="value1" title="月龄" :options="options1" @change="change_list()"></u-dropdown-item>
			<u-dropdown-item v-model="value2" title="内容" :options="options2" @change="change_list()"></u-dropdown-item>
		</u-dropdown>
		<view class="title-h2"> 结果筛选区域</view>
		<u-card :title="title" :sub-title="subTitle" :thumb="thumb">
			<view class="" slot="body" v-for="item in list_items">
				<view class="u-body-item u-flex u-border-bottom u-col-between u-p-t-0" @click="goto_detail(item)">
					<view class="text_wrapper">
						<view class="u-body-item-title u-line-2">{{item.title}}</view>
						<view class="gray_small">{{item.label_age}} {{item.label_class}}</view>						
					</view>					
					<image :src="item.img_url" mode="aspectFill"></image>
				</view>				
			</view>
			<view class="" slot="foot"><u-icon name="chat-fill" size="34" color="" label="30评论"></u-icon></view>
		</u-card>
		<view class="title-h2"> 热门项目</view>
		<u-card :title="title" :sub-title="subTitle" :thumb="thumb">
			<view class="" slot="body">
				<view class="u-body-item u-flex u-border-bottom u-col-between u-p-t-0">
					<view class="u-body-item-title u-line-2">瓶身描绘的牡丹一如你初妆，冉冉檀香透过窗心事我了然，宣纸上走笔至此搁一半</view>
					<image src="https://img11.360buyimg.com/n7/jfs/t1/94448/29/2734/524808/5dd4cc16E990dfb6b/59c256f85a8c3757.jpg" mode="aspectFill"></image>
				</view>
				<view class="u-body-item u-flex u-row-between u-p-b-0">
					<view class="u-body-item-title u-line-2">釉色渲染仕女图韵味被私藏，而你嫣然的一笑如含苞待放</view>
					<image src="https://img12.360buyimg.com/n7/jfs/t1/102191/19/9072/330688/5e0af7cfE17698872/c91c00d713bf729a.jpg" mode="aspectFill"></image>
				</view>
			</view>
			<view class="" slot="foot"><u-icon name="chat-fill" size="34" color="" label="30评论"></u-icon></view>
		</u-card>
	</view>
</template>

<script>
	const game_list_items = require('@/common/json/game_list_items.json');
export default {
	data() {
		return {
			value1: 1,
			value2: 2,			
			options1: [{
						label: '0-6月',
						value: 1,
					},
					{
						label: '6-12月',
						value: 2,
					},
					{
						label: '12-18月',
						value: 3,
					},
					{
						label: '18-24月',
						value: 4,
					},
					{
						label: '24-30月',
						value: 5,
					},
					{
						label: '30-36月',
						value: 6,
					}
				],
			options2: [{
					label: '益智游戏',
					value: 1,
				},
				{
					label: '动作游戏',
					value: 2,
				},
				{
					label: '语言游戏',
					value: 3,
				},
				{
					label: '音乐游戏',
					value: 4,
				},
				{
					label: '建构游戏',
					value: 5,
				},
				{
					label: '感官游戏',
					value: 6,
				},
			],			
			title: '宝宝游戏伴成长',
			subTitle: '2020-05-15',
			thumb: '../../static/test/lunbo2.jpeg',
			list_items:[]
		};
	},
	methods: {
			// 根据下拉菜单的选项label进行筛选
			change_list(){
				var temp_arr= [];
				var game_list = game_list_items['list'];
				for(var j = 0 ;j < game_list.length;j++) {
				   //执行代码
				   if(game_list[j].label_age_id == this.value1 && game_list[j].label_class_id == this.value2){
					   temp_arr.push(game_list[j]);
				   }else{;}				  
				}
				this.list_items = temp_arr;
			},			
		}
};
</script>

<style scoped lang="scss">
	.u-card-wrap { 
		background-color: $u-bg-color;
		padding: 1px;
	}
	
	.u-body-item {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		font-size: 32rpx;
		color: #333;
		padding: 20rpx 10rpx;
	}
		
	.u-body-item image {
		width: 120rpx;
		flex: 0 0 120rpx;
		height: 120rpx;
		border-radius: 8rpx;
		margin-left: 12rpx;
	}
	.title-h2{
		width: 100%;
		margin-top: 20px;
		padding-left:20px;
		font-weight: bold;
		font-size: 17px;
		font-style: italic;
	}
	.gray_small{		
		font-size: 13px;
		font-style: italic;
		color: #888888;
	}
	.text_wrapper{
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: flex-end ;
	}
</style>
