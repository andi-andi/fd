<template>
<div>
    <my-header></my-header>
    <div>
        <div class="w-100">
            <el-image class="w-100" src="/images/cultuer1.jpg"></el-image>
        </div>
        <div class="container pt-4">
            <div>
            <div><h3 class="center">火锅文化</h3></div>
            <div class="mt-4 video-relate">
                <video id="video" height="100%" src="/video/big.mp4" poster="/images/cultuer6.jpg"></video>
                <div class="video-absote" :class="msg">
                    <div @click="videoplay"><img :src="iconimg" class="icon-play"></div>
                </div>
                </div>
            </div>
            <!-- 视频结束 -->
            <!-- 企业文化 -->
            <div class="bj-1">
                <h3 class="center">企业文化</h3>
                <p>海底捞始终秉承“服务至上、顾客至上”的理念，以创新为核心，改变传统的标准化、单一化的服务，提倡个性化的特色服务，将用心服务作为基本理念，致力于为顾客提供“贴心、温心、舒心”的服务；在管理上，倡导双手改变命运的价值观，为员工创建公平公正的工作环境，实施人性化和亲情化的管理模式，提升员工价值。</p>
            </div>
            <!-- 企业文化end -->
            <ul class="bj-2" @mouseover="culterimg">
                <li data-cultuer="1">海底捞使命</li>
                <li data-cultuer="2">价值观</li>
                <li data-cultuer="3">内涵</li>
                <li data-cultuer="4">经典品质</li>
            </ul>
            <!-- 图片 1-->
            <div class="cultuer-relate">
                <transition name="el-zoom-in-center">
                    <div v-show="active==1" class="row bj-4">
                        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-8" ><img class="w-100" src="/images/cultuer2.jpg" alt=""></div>
                        <div class="col-sm-12 col-md-12  col-lg-12 col-xl-4 bj-3">
                            <h3 class="">海底捞使命</h3>
                            <p>通过精心挑选的产品和创新的服务，创造欢乐火锅时光，向世界各国美食爱好者传递健康火锅饮食文化。</p>
                        </div>
                    </div>
                </transition>

                <!-- 图片2 -->
                <transition name="el-zoom-in-center">
                    <div v-show="active==2" class="row bj-4">
                        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-8" ><img  class="w-100" src="/images/cultuer3.jpg" alt=""></div>
                        <div class="col-sm-12 col-md-12  col-lg-12 col-xl-4 bj-3 pl-5">
                            <h3 class="">价值观</h3>
                            <p>一个中心：双手改变命运</p>
                            <p>两个基本点：以顾客为中心，以“勤奋者”为本</p>
                        </div>
                    </div>
                </transition>

                <!-- 图片3 -->
                <transition name="el-zoom-in-center">
                    <div v-show="active==3" class="row bj-4">
                        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-8" ><img  class="w-100" src="/images/cultuer4.jpg" alt=""></div>
                        <div class="col-sm-12 col-md-12  col-lg-12 col-xl-4 bj-3 pl-5">
                            <h3 class="">内涵</h3>
                            <p>倡导平等，充分授权；</p>
                            <p>学习进取，持续创新；</p>
                            <p>诚实守信，敢于负责；</p>
                        </div>
                    </div>
                </transition>
                <!-- 图片4 -->
                <transition name="el-zoom-in-center">
                    <div v-show="active==4" class="row bj-4">
                        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-8" ><img  class="w-100" src="/images/cultuer5.jpg" alt=""></div>
                        <div class="col-sm-12 col-md-12  col-lg-12 col-xl-4 bj-3 pl-5">
                            <h3 class="">海底捞人品质</h3>
                            <p>诚信、创新、谦虚、勤奋</p>
                            <p>激情、与人为善、责任感</p>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
    <div style="margin-top: 650px;">
        <my-footer></my-footer>
    </div>
</div>
</template>
<style  scoped>
    @import '../assets/css/cultuer.css';
</style>

<script>
    export default {
       data(){
           return{
               msg:{
                   videoabsotes:false
               },
               iconimg:'/images/icon/zt.png',
               active:1
           }
       },
       methods:{
           videoplay(){
               var video=document.getElementById("video");
               if(video.paused){
                   video.play();
                   this.msg.videoabsotes=true;
                   this.iconimg='/images/icon/bf.png';
               }else{
                   video.pause();
                   this.iconimg='/images/icon/zt.png';
               }
           },
           culterimg(e){
               if(e.target.innerHTML=="海底捞使命"){
                  this.active=1;
               }
               if(e.target.innerHTML=="价值观"){
                  this.active=2;
               }
               if(e.target.innerHTML=="内涵"){
                  this.active=3;
               }
               if(e.target.innerHTML=="经典品质"){
                  this.active=4;
               }
           }
       }

    }
</script>