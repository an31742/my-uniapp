<template>
	    <view class="game-box">
	        <template
	        v-for="(val, idx) of boundList">
	        <view v-if="idx == 4" class="game-item game-begin" 
	            :key="idx"
	            @click="beginGame">
	            开始游戏
	        </view>
	        <view v-else :key="idx"
	            class="game-item"
	            :class="{
	            active: idx === curGameIdx
	            }">
	            {{val}}
	        </view>
	        </template>
	    </view>

</template>
<script>
	class Game {
	  constructor(idx) {
	    this.idx = idx;
	    this.speed = 400;
	    this.oil = true;
	    this.isFinish = false;
	    this.endIdx = null;
	    this.finishCb = function() {}
	    // 常量
	    this.Max_Speed = 100;
	    this.Min_Speed = 500;
	    this.Order_List = [0,1,2,5,8,7,6,3];
	    this.Game_Box_Num = 8;
	  }
	
	  speedUp() {
	    this.speed -= 60;
	  }
	
	  speedDown() {
	    this.speed += 200;
	  }
	
	  speedControl() {
	    if (this.speed > this.Max_Speed) {
	      if (this.oil) {
	        this.speedUp();
	      }
	    }
	    if (!this.oil) {
	      if (this.speed < this.Min_Speed) {
	        this.speedDown();
	      } else if (this.endIdx === this.idx) {
	        this.isFinish = true;
	        typeof this.finishCb === 'function' && this.finishCb();
	      }
	    }
	  }
	
	  finish(num, finishCb) {
	    this.oil = false;
	    this.endIdx = num;
	    this.finishCb = finishCb;
	  }
	
	  addIdx() {
	    this.idx = (++this.idx % this.Game_Box_Num);
	  }
	
	  run(cb) {
	    this.addIdx();
	    typeof cb === 'function' && cb(this.Order_List[this.idx]);
	    this.speedControl();
	    setTimeout(() => {
	      !this.isFinish && this.run(cb);
	    }, this.speed);
	  }
	}

	export default {
			
		data(){
				
			return{
				boundList:[1,2,3,4,5,6,7,8,9],
				curGameIdx:null,
			}
		},
		  // vue 代码
		  methods: {
		    updateGameIdx(order) {
		      this.curGameIdx = order; 
		    },
		    gameFinish() {
		      this.playing = false;
		      console.log(this.curGameIdx, 'curGameIdx')
		    },
		    beginGame() {
		      if (this.playing) return;
		      this.playing = true;
		      this.curGameIdx = 0;
		      const game = new Game(this.curGameIdx);
		      game.run(this.updateGameIdx);
		      // 通过请求终止
		      setTimeout(() => {
		        game.finish(2, this.gameFinish)
		      }, 3000);
		    }
		  }

		}

</script>
<style lang="less" scoped>
	    .game-box {
	        display: flex;
	        flex-wrap: wrap;
	        text-align: center;
	        .game-item {
				font-size: 20px;
	            width: 100px;
	            height: 70px;
				line-height: 70px;
	            background: yellow;
	            border: 1px solid transparent;
	            transition: all 0.2s;
	            &.game-begin {
	                background: transparent;
					line-height: 70px;
					text-align: center;
					
	            }
	            &.active {
	                border: 1px solid black;
	            }
	        }
	    }

	
</style>