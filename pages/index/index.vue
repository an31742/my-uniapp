<template>
	<view>
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
						:duration="duration">
						<swiper-item>
							<image src="../../static/1.webp" style="width: 100%;"></image>
						</swiper-item>
						<swiper-item>
							<image src="../../static/2.webp" style="width: 100%;"></image>
						</swiper-item>
						<swiper-item>
							<image src="../../static/3.jpeg" style="width: 100%;"></image>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		<ul class="serve" >
			<li v-for="item in serveList">
				<view 	class="serve-item"></view>
				<span>{{item.name}}</span>
			</li>
		</ul>

	</view>
</template>
<script>
	export default {
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				serveList: [{
						name: "商城超市",
						src: "../../static/logo.png"
					},
					{
						name: "商城家电",
						src: "../../static/logo.png"
					},
					{
						name: "商城手机",
						src: "../../static/logo.png"
					},
					{
						name: "商城服装",
						src: "../../static/logo.png"
					},
					{
						name: "新人福利",
						src: "../../static/logo.png"
					},
					{
						name: "促销打折",
						src: "../../static/logo.png"
					},
					{
						name: "低价爆款",
						src: "../../static/logo.png"
					},
					{
						name: "商城超市",
						src: "../../static/logo.png"
					},

				]
			}
		},
		methods: {

		}
	}
</script>
<style scoped >
	.serve {
		margin: 10px;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content:space-around
	
	}
	.serve-item{
	   margin: 7px;
				width: 50px;
				height: 50px;
				background-color:#4CD964;
					
			
			}
			span{
				font-size: 14px;
			}
</style>
