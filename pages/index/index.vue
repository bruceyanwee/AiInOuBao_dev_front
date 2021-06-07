<template>
	<view class="page">
		<view class="page-block search-block">
			<image src="../../static/pics/icon_yueling.png" style="width: 30px;height: 30px;"></image>
			<view style="width: 200rpx;">
				<u-dropdown>
					<u-dropdown-item v-model="value1" title="月龄" :options="options1"></u-dropdown-item>						
				</u-dropdown>
			</view>			
			<u-search placeholder="宝宝失眠怎么办" v-model="keyword"></u-search>
		</view>
		<view class="page-block super-hot">
			<view class="hot-title-wapper">
				<image src="../../static/hot-icon.png" class="hot-icon"></image>
				<view class="hot-title">
					爱在瓯宝
				</view>
			</view>
		</view>	
		<!--轮播图 start-->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="carousel">
			<swiper-item>
				<image src="../../static/test/lunbo1.jpeg" class="carousel"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/test/lunbo2.jpeg" class="carousel"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/test/lunbo3.jpeg" class="carousel"></image>
			</swiper-item>
		</swiper>
		<!--轮播图 end-->
		<!--热门展示 start-->
		<view class="page-block super-hot">
			<view class="hot-title-wapper">
				<image src="../../static/hot-icon.png" class="hot-icon"></image>
				<view class="hot-title">
					常用应用
				</view>
			</view>
		</view>		
		<view class="page-block applications-block">
			<navigator url="../test/test">
			<view class="app-item-wrapper">
				<image class="app-item-img" src="../../static/pics/icon_ceping.png"></image>				
				<text>宝宝测评</text>					
			</view>
			</navigator>
			<view class="app-item-wrapper">
				<image class="app-item-img" src="../../static/pics/icon_game.png"></image>
				<text>宝宝游戏</text>
			</view>
			<view class="app-item-wrapper">
				<image class="app-item-img" src="../../static/pics/icon_yuer.png"></image>
				<text>科学育儿</text>
			</view>
			<view class="app-item-wrapper">
				<image class="app-item-img" src="../../static/pics/icon_wzbaby.png"></image>
				<text>温州宝宝</text>
			</view>
		</view>
		<view class="page-block super-hot">
			<view class="hot-title-wapper">
				<image src="../../static/hot-icon.png" class="hot-icon"></image>
				<view class="hot-title">
					宝宝游戏
				</view>
			</view>
		</view>		
		<scroll-view scroll-x="true" class="page-block scroll_item">
			<view class="single_poster" v-for="itemObject in hot_items" :key="itemObject.id">
				<view class="poster-wapper">
					<image :src=itemObject.img_url class="poster"></image>
					<view class="game-name">
						{{itemObject.title}}
					</view>
					<item_star :score="itemObject.score" ></item_star>					
				</view>
			</view>			
		</scroll-view>
		<!--热门展示 end-->
		<!--热门视频 start-->
		<view class="page-block super-hot">
			<view class="hot-title-wapper">
				<image src="../../static/test/Video.png" class="hot-icon"></image>
				<view class="hot-title">
					热门视频
				</view>
			</view>
		</view>	
		<view class="hot-video page-block">
			<video 
				v-for="videoObject in hot_videos"				
				:src="videoObject.video_url" 
				:poster="videoObject.poster"
				controls>
			</video>
		</view>
		<!--热门视频 end -->
	</view>
</template>

<script>
	import common from "../../common/common.js";
	import item_star from "../../components/item_star.vue";
	export default {
		data() {
			return {
				keyword: '',
				value1:1,
				options1: [{
						label: '0-3月',
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
				test_data:"dada",
				hot_items:[
					{
						id:1,
						title:'建构游戏',
						img_url:'../../static/test/hot-item-poster1.jpeg',
						score:9.1
						},
					{
						id:2,
						title:'益智游戏',
						img_url:'../../static/test/hot-item-poster1.jpeg',
						score:8.2
						},
					{
						id:3,
						title:'益智游戏',
						img_url:'../../static/test/hot-item-poster1.jpeg',
						score:5.9
						},
					{
						id:4,
						title:'益智游戏',
						img_url:'../../static/test/hot-item-poster1.jpeg',
						score:2.0
						}
				],
				hot_videos:[
					{
						id:1,
						video_url:'../../static/test/black-widow-trailer-legacy_h720p.mov',
						poster:'../../static/test/maxresdefault.jpeg'
					},
					{
						id:2,
						video_url:'https://haokan.baidu.com/v?vid=12132011855147805324&pd=bjh&fr=bjhauthor&type=video',
						poster:'../../static/test/spontaneous-trailer.jpeg'
					}
				]
			};
		},
		onLoad() {  
			
		},
		methods: {
			get_test:function(){
				console.log('button ok');		
				uni.request({
				    url: common.severUrl+'/test', //后端flask服务器的地址。				    
					method:"GET",					
				    success: (res) => {	
						if(res.statusCode == 200){
							console.log('request ok')
						}					
				        this.test_data = res.data['text'];
				    }
				});				
			},	
		},
		components:{
			item_star
		}
	}
</script>

<style>
	@import url("index.css");
.search-block{
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
	height: 80rpx;
	padding-left: 5px;
	padding-right: 5px;
}
.applications-block{
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	height: 250rpx;
	padding-left: 5px;
	padding-right: 5px;
}
.app-item-wrapper{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	
}
.app-item-img{
	width: 60px;
	height: 60px;
}
</style>
