<template>
  <view class="content">
    <view class="header">
      <image src="../../static/pics/avater_img.png"></image>
    </view>

    <view class="list">
      <view class="list-call">
        <image class="img" src="../../static/pics/phone.png"></image>
        <input class="sl-input" v-model="phone" type="number" maxlength="11" placeholder="输入手机号" />
      </view>
      <view class="list-call">
        <image class="img" src="../../static/pics/password.png"></image>
        <input class="sl-input" v-model="password" type="text" maxlength="32" placeholder="输入密码" password="true" />
      </view>
    </view>

    <view class="button-login" hover-class="button-hover" @tap="bindLogin()">
      <text>登录</text>
    </view>

    <view class="agreenment">
      <navigator url="forget" open-type="navigate">忘记密码</navigator>
      <text>|</text>
      <navigator url="reg" open-type="navigate">注册账户</navigator>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        phone: '',
        password: ''
      };
    },
    methods: {
      bindLogin() {
			const that = this;
			if (that.phone.length != 11) {
				uni.showToast({
					icon: 'none',
					title: '手机号不正确'
				});
			return;
			}
			if (that.password.length < 6) {
			uni.showToast({
				icon: 'none',
				title: '密码不正确'
			});
			return;
			}			
			uni.request({
				url: 'http://106.13.225.94:5000/login',
				data: {
					phone: that.phone,
					password: that.password
				},
				method: 'POST',
				header: {
					'content-type': 'application/x-www-form-urlencoded', 
				},
				success: (res) => {
					console.log(res.data);
					console.log(res.statusCode);
					if(res.statusCode==200){
						// 返回的is_ok中：1：成功，0：用户为注册，2：密码错误
						if (res.data['is_ok']==1) {			
							uni.showToast({									
								title: res.data['msg'],
								duration: 2000
							});
							// 返回个人中心，并携带登录成功的数据
							getApp().globalData.is_login = true
							uni.switchTab({
								url:'/pages/me/me'
							});
						}else{
							if(res.data['is_ok']==0){
								uni.showToast({
									title: res.data['msg'],
									duration: 2000
								});
							}else{
								if(res.data['is_ok']==2){
									uni.showToast({
										title: res.data['msg'],
										duration: 2000
								});
								}else{}
							}			
						}
					}else{
						uni.showToast({
							title: '请求错误',
							duration: 2000
						});
					}			
				}		
			});
	
      }
    }
  }
</script>

<style>
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .header {
    width: 161rpx;
    height: 161rpx;
    background: rgba(63, 205, 235, 1);
    box-shadow: 0rpx 12rpx 13rpx 0rpx rgba(63, 205, 235, 0.47);
    border-radius: 50%;
    margin-top: 30rpx;
    margin-left: auto;
    margin-right: auto;
  }

  .header image {
    width: 161rpx;
    height: 161rpx;
    border-radius: 50%;
  }

  .list {
    display: flex;
    flex-direction: column;
    padding-top: 50rpx;
    padding-left: 70rpx;
    padding-right: 70rpx;
  }

  .list-call {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100rpx;
    color: #333333;
    border-bottom: 0.5px solid #e2e2e2;
  }

  .list-call .img {
    width: 40rpx;
    height: 40rpx;
  }

  .list-call .sl-input {
    flex: 1;
    text-align: left;
    font-size: 32rpx;
    margin-left: 16rpx;
  }

  .button-login {
    color: #FFFFFF;
    font-size: 34rpx;
    width: 470rpx;
    height: 100rpx;
    background: linear-gradient(-90deg, rgba(63, 205, 235, 1), rgba(188, 226, 158, 1));
    box-shadow: 0rpx 0rpx 13rpx 0rpx rgba(164, 217, 228, 0.2);
    border-radius: 50rpx;
    line-height: 100rpx;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100rpx;
  }

  .button-hover {
    background: linear-gradient(-90deg, rgba(63, 205, 235, 0.8), rgba(188, 226, 158, 0.8));
  }

  .agreenment {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 30rpx;
    margin-top: 80rpx;
    color: #FFA800;
    text-align: center;
    height: 40rpx;
    line-height: 40rpx;
  }

  .agreenment text {
    font-size: 24rpx;
    margin-left: 15rpx;
    margin-right: 15rpx;
  }
</style>
