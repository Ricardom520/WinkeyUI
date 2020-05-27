<template>
  <div class="IndexContainer" @click="cancel_lang">
    <div class="headerWrapper">
      <header class="header">
        <div class="container">
          <router-link to="/">
            <img src="@/assets/logo.png" class="logo">
          </router-link>
          <ul class="nav">
            <li>
              <router-link to="/guide">指南</router-link>
            </li>
            <li>
              <router-link to="/rooms">组件</router-link>
            </li>
            <li>
              <router-link to="/theme">主题</router-link>
            </li>
            <li>
              <router-link to="/resources">资源</router-link>
            </li>
            <div class="nav-dropdown" @click.stop="show = !show">中文</div>
            <div :class="show?'language active':'language'">
              <ul>
                <li>中文</li>
                <li>English</li>
                <li>Español</li>
                <li>Français</li>
              </ul>
            </div>
          </ul>
        </div> 
      </header>
    </div>
    <div class="main-cnt">
      <div>
        <div class="banner">
          <div class="banner-bg">
            <ul>
              <li v-for="(item, index) in bubbles" :key="index"></li>
            </ul>
          </div>
          <div class="banner-desc">
            <h1>Winkey UI</h1>
            <p>WinkeyUI, 一套为开发者、设计师和产品经理准备的基于 Vue 3.0 的桌面端组件库</p>
            <p>企业级产品设计体系，创造高效愉悦的工作体验</p>
            <p class="banner-btn">
              <button class="primary">开始使用</button>
              <button>设计语言</button>
            </p>
          </div>
        </div>
        <div class="cards">
          <h2>设计语言与研发框架</h2>
          <ul>
            <li>
              <router-link to="/guide">
                <div class="card">
                  <img src="@/assets/index/guide.png">
                  指南
                  <p>了解设计指南，帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品。</p>
                  <div class="btn">
                    <button>查看详情</button>
                  </div>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="/component">
                <div class="card">
                  <img src="@/assets/index/component.png">
                  组件
                  <p>使用组件 Demo 快速体验交互细节；使用前端框架封装的代码帮助工程师快速开发。</p>
                  <div class="btn">
                    <button>查看详情</button>
                  </div>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="/theme">
                <div class="card">
                  <img src="@/assets/index/guide.png">
                  主题
                  <p>在线主题编辑器，可视化定制和管理站点主题、组件样式。</p>
                  <div class="btn">
                    <button>查看详情</button>
                  </div>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="/resources">
                <div class="card">
                  <img src="@/assets/index/resource.png">
                  资源
                  <p>下载相关资源，用其快速搭建页面原型或高保真视觉稿，提升产品设计效率。</p>
                  <div class="btn">
                    <button>查看详情</button>
                  </div>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="container">
        <p>公司名称：深圳前海盈余科技有限公司</p>
        <p>官网：<a href="http://www.winkeytech.com/" target="_blank" >http://www.winkeytech.com/</a></p>
        <p>电话：0755-33942973</p>
        <p>地址：深圳市前海深港合作区前湾一路1号A栋201室(入驻深圳市前海商务秘书有限公司)</p>
      </div>
    </footer>
    <canvas style="position: fixed;bottom: 0;z-index: 0;height: 100px;width: 100%" ref="canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      bubbles: [],
      show: false
    }
  },
  created() {
    this.bubbles.length = 10;
  },
  mounted() {
    this.init_Water();
  },
  methods: {
    init_Water: function() { // 初始化canvas
      // 获取canvas容器
      let canvas = this.$refs.canvas;
      // 获得画笔
      let ctx = canvas.getContext('2d');
      //如果浏览器支持requestAnimFrame则使用requestAnimFrame否则使用setTimeout 
      let requestAnimationFrame = (function() {
        return window.requestAnimationFrame ||
               window.webkitRequestAnimationFrame ||
               window.mozRequestAnimationFrame ||
               function( callback ) {
                 window.setTimeout(callback, 1000 / 60);
               }
      })();
      // 波浪大小
      let boHeight = canvas.height / 2;
      let posHeight = canvas.height / 1.2;
      // 初始化角度为0
      let step = 0;
      // 定义三条不同波浪的颜色
      let lines = ["rgba(0,222,255, 0.2)", "rgba(157,192,249, 0.2)", "rgba(0,168,255, 0.2)"];
      function loop(){ 
        //清除canvas内容
          ctx.clearRect(0,0,canvas.width,canvas.height); 
          step++; 
          //画3个不同颜色的矩形 
          for(var j = lines.length - 1; j >= 0; j--) { 
          ctx.fillStyle = lines[j]; 
          //每个矩形的角度都不同，每个之间相差45度 
          var angle = (step+j*50)*Math.PI/180; 
          var deltaHeight = Math.sin(angle) * boHeight;
          var deltaHeightRight = Math.cos(angle) * boHeight; 
          ctx.beginPath();
          ctx.moveTo(0, posHeight+deltaHeight); 
          ctx.bezierCurveTo(canvas.width/2, posHeight+deltaHeight-boHeight, canvas.width / 2, posHeight+deltaHeightRight-boHeight, canvas.width, posHeight+deltaHeightRight); 
          ctx.lineTo(canvas.width, canvas.height); 
          ctx.lineTo(0, canvas.height); 
          ctx.lineTo(0, posHeight+deltaHeight); 
          ctx.closePath(); 
          ctx.fill(); 
        }
        requestAnimationFrame(loop);
      } 
      loop();
    },
    cancel_lang: function() { // 取消语言选择框
      if (this.show) {
        this.show = false
      }
    }
  }
}
</script>


<style lang="less" scoped>
.IndexContainer {
  position: relative;
  .headerWrapper {
    position: absolute;
    z-index: 900;
    width: 100%;
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 1140px;
      margin: 0 auto;
      padding: 20px 0;
      border-bottom: 1px solid #DCDFE6;
      .logo {
        width: 100px;
      }
      .nav {
        position: relative;
        display: flex;
        align-items: center;
        font-size: 16px;
        li {
          margin: 0 20px;
          color: #8CC4FD;
          transition: color ease-in-out .2s;
        }
        li:hover {
          color: #1989FA;
        }
        .nav-dropdown {
          position: relative;
          margin-left: 55px;
          margin-right: 35px;
          font-size: 17px;
          color: #A4A4A4;
          transition: color ease-in-out .2s;
        }
        .nav-dropdown::after {
          position: absolute;
          content: ' ';
          top: 50%;
          right: -10px;
          width: 6px;
          height: 6px;
          border-right: 1px solid #A4A4A4;
          border-bottom: 1px solid #A4A4A4;
          transform: rotate(45deg) translateY(-6px);
        }
        .nav-dropdown:hover {
          cursor: pointer;
          color: #1989FA;
        }
        .nav-dropdown:hover::after {
          border-right: 1px solid #1989FA;
          border-bottom: 1px solid #1989FA;
        }
        .language {
          position: absolute;
          right: 0;
          top: 54px;
          height: 0;
          opacity: 0;
          border: 1px solid #EBEEF5;
          box-shadow: 0 0 5px #EBEEF5;
          background: #fff;
          transition: all ease-in-out .5s;
          overflow: hidden;
          ul {
            padding: 10px 0;
            li {
              color: #000;
              font-weight: 300;
              margin: 0;
              padding: 10px 20px;
            }
            li:hover {
              cursor: pointer;
              background-color: #ECF5FF;
            }
          }
        }
        .language::after {
          position: absolute;
          content: ' ';
          top: -9px;
          left: 50%;
          width: 15px;
          height: 15px;
          border-left: 1px solid #EBEEF5;
          border-top: 1px solid #EBEEF5;
          background: #fff;
          transform: rotate(45deg);
        }
        .language.active {
          height: auto;
          opacity: 1;
          overflow: visible;
        }
      }
    }
  }
  .main-cnt {
    position: relative;
    .banner {
      position: relative;
      height: 448px;
      .banner-bg {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #F2F8FE;
        ul {
          position: relative;
          height: 100%;
          li {
            position: absolute;
            bottom: 0px;
            width: 40px;
            height: 40px;
            background-color: rgba(252,253,254,.85);
            animation: square 15s infinite;
            transition-timing-function: linear;
            &:nth-child(1) {
              left: 10%;
            }
            &:nth-child(2) {
              left: 20%;
              width: 90px;
              height: 90px;
              animation-delay: 2s;
              animation-duration: 7s;
            }
            &:nth-child(3) {
              left: 25%;
              animation-delay: 4s;
            }
            &:nth-child(4) {
              left: 40%;
              width: 60px;
              height: 60px;
              animation-duration: 8s;
              background-color: rgba(255, 255, 255, .3);
            }
            &:nth-child(5) {
              left: 70%;
            }
            &:nth-child(6) {
              left: 80%;
              width: 120px;
              height: 120px;
              animation-delay: 3s;
              background-color: rgba(255, 255, 255, .2);
            }
            &:nth-child(7) {
              left: 32%;
              width: 160px;
              height: 160px;
            }
            &:nth-child(8) {
              left: 55%;
              width: 20px;
              height: 20px;
              animation-delay: 4s;
              animation-duration: 15s;
            }
            &:nth-child(9) {
              left: 25%;
              width: 10px;
              height: 10px;
              animation-delay: 2s;
              animation-duration: 12s;
              background-color: rgba(255, 255, 255, .3)
            }
            &:nth-child(10) {
              left: 85%;
              width: 160px;
              height: 160px;
              animation-delay: 5s;
            }
          }
        }
      }
      .banner-desc {
        position: relative;
        z-index: 1;
        text-align: center;
        padding-top: 160px;
        h1 {
          font-size: 58px;
          color: #555555;
        }
        p {
          margin-top: 20px;
          font-size: 20px;
          color: #888888;
        }
        p.banner-btn {
          button {
            outline: none;
            margin: 20px;
            padding: 10px 20px;
            font-size: 16px;
            color: #0170FE;
            border: 1px solid #0170FE;
            border-radius: 30px;
            background-color: transparent;
          }
          button.primary {
            color: #fff;
            background-color: #0170FE;
            transition: all ease-in-out .2s;
          }
          button:hover {
            cursor: pointer;
          }
          button.primary:hover {
            border: 1px solid #71AFFE;
            background-color: #71AFFE;
          }
        }
      }
    }
    .cards {
      width: 1140px;
      margin: 0 auto;
      padding: 50px 0;
      h2 {
        font-weight: 300;
        font-size: 30px;
      }
      ul {
        position: relative;
        display: flex;
        justify-content: space-between;
        margin-top: 50px;
        li {
          position: relative;
          width: 22%;
          height: 400px;
          border: 1px solid #EAEEFB;
          border-radius: 5px;
          transition: all ease-in-out .5s;
          .card {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100%;
            font-size: 24px;
            img {
              width: 160px;
              height: 120px;
              margin: 40px 0;
            }
            p {
              margin-top: 20px;
              padding: 0 15px;
              text-align: center;
              font-size: 14px;
              letter-spacing: 1px;
              line-height: 24px;
              color: #B7BFD0;
            }
            .btn {
              position: absolute;
              bottom: 0;
              width: 100%;
              padding: 10px 0 20px 0;
              text-align: center;
              border-top: 1px solid #EAEEFB;
              border-radius: 0 0 5px 5px;
              transition: all ease-in-out .2s;
              button {
                border: none;
                color: #409EFF;
                background-color: transparent;
              }
            }
            .btn:hover {
              cursor: pointer;
              background-color: #409EFF;
              button {
                color: #fff;
              }
            }
          }
        }
        li:hover {
          top: -10px;
          box-shadow: 0px 2px 5px #EAEEFB;
          animation: top .5s ease-in-out;
        }
      }
    }
  }
  .footer {
    position: relative;
    width: 100%;
    padding: 40px 150px;
    border-top: 1px solid #E5EAEC;
    background-color: #F9FAFB;
    p {
      color: #666666;
      font-size: 20px;
      padding: 10px 0;
    }
  }
}
@keyframes square {
  0% {
    opacity: 0.9;
    transform: translateY(0px) rotate(45deg);
  }
  25% {
    opacity: 0.95;
    transform: translateY(-400px) rotate(90deg)
  }
  50% {
    opacity: 1;
    transform: translateY(-600px) rotate(135deg);
  }
  100% {
    opacity: 0;
    transform: translateY(-1000px) rotate(180deg);
  }
}
@keyframes top {
  0% {
    top: 0;
  }
  100% {
    top: -10px;
  }
}
</style>
