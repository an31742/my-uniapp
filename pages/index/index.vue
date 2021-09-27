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
		<ul class="serve">
			<li v-for="item in serveList">
				<image v-if="item.src" src="item.src"></image>
				<view v-else class="serve-item"></view>
				<span>{{item.name}}</span>
			</li>
		</ul>
		<view class="theme">
			<image src="../../static/4.jpeg" class="theme-image"></image>
		</view>
		<ul class="card">
			<li class="card-item" v-for="(item,index) in cardList" :key="index">

				<image :src="item.src"></image>
				<p>
					{{item.marke}}
				</p>
				<p class="card-item-yuan">
					<span>¥</span><span>{{item.yuan}}</span>
				</p>
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

					},
					{
						name: "商城家电",

					},
					{
						name: "商城手机",

					},
					{
						name: "商城服装",

					},
					{
						name: "新人福利",

					},
					{
						name: "促销打折",

					},
					{
						name: "低价爆款",

					},
					{
						name: "商城超市",

					},

				],

				cardList: [{
						marke: "日式餐具焗饭碗青花瓷拉泡面碗家用仿复古7.5寸韩式陶瓷双耳汤碗",
						yuan: 34
					},
					{
						marke: "日式餐具焗饭碗青花瓷拉泡面碗家用仿复古7.5寸韩式陶瓷双耳汤碗",
						yuan: 26
					}
				]
			}
		},
		created() {
			this.cardList.forEach((item, index) => {
				item.src = (require('../../static/' + 10 + index + '.webp'))
			})
		},
	}
</script>
<style scoped lang="less">
	.serve {
		margin: 10px;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;

		.serve-item {
			margin: 7px;
			width: 50px;
			height: 50px;
			background-color: #4CD964;
		}

		span {
			font-size: 14px;
		}
	}



	.theme-image {
		width: 100%;
		height: 100px;
	}

	.card {
		margin-top: 20px;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;

		.card-item {
			border-radius: 5px;
			width: 45%;
			height: 185px;
			border: 1px solid #C0C0C0;

			p {
				width: 100%;
				font-size: 12px;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
			}

			image {
				width: 100%;
				height: 120px;
			}

			.card-item-yuan {
				padding-top: 10px;
				padding-left: 10px;
				color: red;
			}
		}
	}
</style>
