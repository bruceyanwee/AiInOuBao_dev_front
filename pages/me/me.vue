<template>
	<view class="page_content">
		<view class="header">
			<text class="header-title"> 个人中心 </text>
			<view class="touxiang">
				<image class="logo" src="../../static/pics/avater_img.png"></image>
				<navigator url="../login/login">
					<text class="uer-name">Hi，{{login ? uerInfo.name : '您未登录'}}</text>
				</navigator>				
			</view>						
		</view>		
		<swiper @change="swiperChange" previous-margin="50px" next-margin="50px" class="swiper" :indicator-dots="false"
		 :autoplay="false" :interval="3000" :duration="1000" :current="bigIdx">
		
			<template v-for="(p, i) in prefers">
				<swiper-item :key="'p_'+i">
					<view :class="['swiper-item',bigIdx === i ? 'big' : 'small']" :style="{background:p.bg,'box-shadow':p.shadow}">
						<image class="img" :src="p.icon"></image>
						<navigator :url="p.page_url">
							<text class="title">{{p.title}}</text>
						</navigator>						
						<text class="sub_title">{{p.subTitle}}</text>
					</view>
				</swiper-item>
			</template>
		
		</swiper>
		
		<view class="title_line">
			<text class="title">温州宝宝</text>
			<text class="more">查看更多</text>
		</view>
		
		<scroll-view class="slider" scroll-x="true">
			<template v-for="(task,i) in tasks">
				<view :key="'task_'+i" class="s_item">
					<view class="content">
						<image :src="task.icon" class="img"></image>
						<text class="name">{{task.name}}</text>
						<text class="desc">{{task.desc}}</text>
						<text class="btn" @click="goto_page" :id="task.page_url">试一试</text>
					</view>
				</view>
			</template>
		</scroll-view>

		<view class="title_line">
			<text class="title">宝宝福利</text>
			<text class="more">查看更多</text>
		</view>

		<view class="welfare">
			<template v-for="(info,i) in welfare">
				<view class="item" :key="'welfare_'+i">
					<view class="border">
						<image class="img" :src="info.icon"></image>
					</view>
					<text class="txt">{{info.name}}</text>
				</view>
			</template>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				login:false,
				avater_src:'../../static/pics/avater_img.png',
				uerInfo:{
					name:'温宝_Andy',					
				},
				avater_text:'温宝_Andy',
				title: 'Hello',				
				bigIdx: 1,
				prefers: [{
					bg: 'linear-gradient(94deg,rgba(150,147,168,1),rgba(150,147,164,1))',
					shadow: '0px 3px 12px 0px rgba(195,164,110,0.23)',
					title: '测评报告',
					icon:'/static/pics/baogao.png',
					subTitle: '根据宝宝测评形成的个性化报告',
					page_url:'../test_report/test_report'
				}, {
					bg: 'linear-gradient(94deg,rgba(150,147,168,1),rgba(150,147,164,1))',
					shadow: '0px 3px 12px 0px rgba(195,164,110,0.23)',
					title: '宝宝偏好',
					icon:'/static/pics/like.png',
					subTitle: '根据平时浏览记录形成的宝宝偏好',
					page_url:'../vis_text_use/vis_text_use',
				}],
				tasks: [{
						icon: '/static/pics/ouxiu.jpeg',
						name: '温州瓯绣',
						desc: '瓯绣，与苏绣...',
						page_url:'../RcSimPhoto/RcSimPhoto'
					},
					{
						icon: '/static/pics/bandenglong.jpeg',
						name: '民间舞蹈(板凳龙)',
						desc: '板凳龙起源于...',
						page_url:'../RcPhotoCourse/RcPhotoCourse'
					},
					{
						icon: '/static/pics/guci.jpeg',
						name: '民间故事',
						desc: '温州鼓词',
						page_url:'../RcPhotoTheory/RcPhotoTheory'
					}
				],
				welfare: [{
						icon: '/static/pics/zuoping.png',
						name: '我的作品'
					},
					{
						icon: '/static/pics/liwu.png',
						name: '礼物'
					},
					{
						icon: '/static/pics/shoucang.png',
						name: '收藏'
					},
					{
						icon: '/static/pics/friend.png',
						name: '好友'
					}
				]

			}
		},
		onLoad() {
			this.login = getApp().globalData.is_login
		},
		onShow(){
			this.login = getApp().globalData.is_login
		},
		methods: {
			swiperChange(e) {
				this.bigIdx = e.detail.current
			}
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		background-color: white;
	}
</style>
<style lang="scss" scoped>
	@function realSize($args) {
		@return $args / 1.5;
	}

	.page_content {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.header {
		margin-top: 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.header-title {
		margin-top: 20px;
		font-size: 30px;
		font-weight: 500;
		color: rgba(43, 43, 43, 1);
		line-height: 41px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.touxiang{
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.uer-name{
		font-size: 20px;
		
	}
	.logo {
		margin-top: 10px;
		width: 80px;
		height: 80px;
	}

	.swiper {
		width: 100%;
		margin-top: 10px;

		.swiper-item {
			border-radius: 16px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin-left: 10px;
			margin-right: 10px;
		}

		.big {
			margin-top: 0;

			.img {
				margin-top: 15px;
				width: 40px;
				height: 40px;
			}

			.title {
				font-size: 25px;
				font-weight: 500;
				color: rgba(255, 255, 255, 1);
				line-height: 41px;
			}

			.sub_title {
				font-size: 11px;
				font-weight: 300;
				color: rgba(255, 255, 255, 1);
				line-height: 41px;
			}
		}

		.small {
			margin-top: 14px;
			height: 75%;

			// transition: all 0.3s;
			.img {
				margin-top: 5px;
				width: 25px;
				height: 25px;
			}

			.title {
				font-size: 15px;
				font-weight: 500;
				color: rgba(255, 255, 255, 1);
				line-height: 31px;
			}

			.sub_title {
				font-size: 7px;
				font-weight: 300;
				color: rgba(255, 255, 255, 1);
			}
		}
	}

	.title_line {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		.title {
			margin-left: 20px;
			font-size: 18px;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
			line-height: 41px;
		}

		.more {
			margin-right: 20px;
			font-size: 10px;
			font-weight: 300;
			color: rgba(153, 153, 153, 1);
			line-height: 41px;
		}
	}

	.slider {
		white-space: nowrap;
		width: 100%;

		.s_item {
			display: inline-block;
			width: 35%;
			margin-left: 20px;
			margin-bottom: 10px;

			.content {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				border-radius: 8px;
				background: white;
				margin-top: 5px;
				box-shadow: 0px 2px 6px 0px rgba(103, 103, 103, 0.2);

				.img {
					width: 100px;
					height:100px;
				}

				.name {
					margin-top: 10px;
					font-size: 12px;
					font-weight: 400;
					color: rgba(51, 51, 51, 1);
					line-height: 21px;
				}

				.desc {
					font-size: 10px;
					font-weight: 400;
					color: rgba(153, 153, 153, 1);
					line-height: 21px;
				}

				.btn {
					width: 80px;
					height: 30px;
					margin-bottom: 10px;
					background: linear-gradient(94deg, rgba(192, 160, 105, 1), rgba(233, 213, 172, 1));
					box-shadow: 0px 9px 28px 0px rgba(195, 164, 110, 0.23);
					border-radius: 29px;
					font-size: 12px;
					font-weight: 400;
					color: rgba(255, 255, 255, 1);
					line-height: 21px;
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}
		}
	}

	.welfare {
		width: 92%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 1px 21px 0px rgba(103, 103, 103, 0.2);
		border-radius: 10px;
		margin-bottom: 10px;

		.item {
			padding: 10px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			.border {
				margin-top: 5px;
				border: 2px solid #c9ac7a;
				border-radius: 50%;
				display: flex;
				align-items: center;
				justify-content: center;

				.img {
					width: 40px;
					height: 40px;
				}
			}

			.txt {
				margin-top: 5px;
				font-size: 10px;
				font-weight: 300;
				color: rgba(153, 153, 153, 1);
			}
		}
	}
</style>
