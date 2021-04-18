<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

/* App.vue */
<style lang="scss">
	@import "uview-ui/uview-ui/index.scss";
</style>
<style>
	/*每个页面公共css */
	@import "components/main.css";
	@import "components/icon.css";
	@import "static/css/index-app.css";
	/*每个页面公共css */
	.page{
		width: 100%;
		height: 100%;
		background-color:#f7f7f7;
		position: absolute;
	}
	.page-block {
		background-color: #FFFFFF;
	}	
</style>
