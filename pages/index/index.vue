<template>
	<view class="page">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="carousel">
			<swiper-item>
				<image src="../../static/logo.png" class="carousel"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/tabBar/icon_index.png" class="carousel"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onLoad() {  

		},
		methods: {

		}
	}
</script>

<style>
	@import url("index.css");
</style>
