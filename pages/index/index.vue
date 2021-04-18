<template>
	<view class="page">
		<!--轮播图 start-->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="carousel">
			<swiper-item>
				<image src="../../static/test/lunbo1.jpeg" class="carousel"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/test/lunbo2.jpeg" class="carousel"></image>
			</swiper-item>
		</swiper>
		<!--轮播图 end-->
		<!--热门展示 start-->
		<view class="page-block super-hot">
			<view class="hot-title-wapper">
				<image src="../../static/hot-icon.png" class="hot-icon"></image>
				<view class="hot-title">
					热门项目
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
				test_data:"dada",
				hot_items:[
					{
						id:1,
						title:'建构游戏一',
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
						video_url:'../../static/test/spontaneous-trailer-1_h720p.mov',
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
</style>
