<template>
<div class="demo container mt-5">
    <div class="text-center mb-5"><h2>经营理念</h2></div>
    <div class="row">
        <div class="col-12 demo-2">
            <div class="box" v-for="(v,i) of fz" :key="i">
        <img :src="v.img" alt=""/>
        <div class="box-content">
            <h3 class="title">{{v.title}}</h3>
            <span class="post">Earl Grey</span>
            <p class="description">
                {{v.title2}}
            </p>
            <p class="description">{{v.title3}}</p>
            <p class="description">{{v.title4}}</p>
        </div>
    </div> 
        </div>
    </div>
</div>
</template>
<style scoped>

.demo-2{
    display: flex;
}
.box{
   border: 1px solid #333;
   position: relative;
   overflow: hidden;
   margin-right: 25px;
   border-radius: 5px;
}
.box img{
   width:100%;
   height: auto;
}
.box .box-content{
   width: 100%;
   height: 100%;
   position: absolute;
   top: 0;
   left: 0;
   color: #fff;
   text-align: center;
   padding: 20% 20px;
   background: rgba(0,0,0,0.6);
   transform:rotate(-180deg);
   transform-origin:left top 0;
   transition:all 0.5s ease 0s;
}

.box .title{
   display: inline-block;
   font-size: 22%;
   color: red;
   /* margin: 0 0 15px 0; */
   position: relative;
   transform-origin: right top 0;
   transition: all .3s ease-in-out 0.2s;
}
.box .post{
   display: block;
   font-size: 18%;
   /* margin-bottom: 15px; */
   /* 旋转180deg */
   transform: rotate(180deg);
   transform-origin: right top 0;
   transition: all .3s ease-in-out 0.4s;
}
.box .description{
   font-size: 15%;
   /* margin-bottom: 20px; */
   padding: 0 20%;
   transform: rotate(180deg);
   transform-origin: right top 0;
   transition: all .3s ease-in-out 0.6s;
}
.box .read{
   font-size: 20%;
   font-weight: bold;
   color: #999;
   display: block;
   letter-spacing:2px;
   text-transform: uppercase;
   transform: rotate(180deg);
   transform-origin: right top 0;
   transition: all 0.8s ease-in-out 0.1s;
}
.box .read:hover{
   color: #e8802e;
   text-decoration: none;
}
.box:hover .box-content,
.box:hover .title,
.box:hover .post,
.box:hover .description,
.box:hover .read {
   transform:rotate(0deg);
}
</style>
<script>
export default {
    data(){
        return{
            fz:[
                {img:'/images/fz1.png',title:'品牌理念',title2:' 通过精心挑选的产品和创新的服务',title3:'创造欢乐火锅时光',title4:'向世界各国美食爱好者传递健康火锅饮食文化'},
                {img:'/images/fz2.png',title:'品牌理念',title2:' 交流是人与人之间传递的刚需',title3:'而来自中国的火锅是天生的社交餐饮',title4:'海底捞致力于让更多人在餐桌敞开心扉，吃的开心'},
                {img:'/images/fz3.png',title:'特色服务',title2:' 海底捞始终从顾客体验出发',title3:'创新性地为顾客提供愉悦的用餐服务',title4:'门店全部的个性化服务都来自于服务员的创意'},
                {img:'/images/fz4.png',title:'海底捞大学',title2:' 海底捞大学创建于2010年',title3:'主要致力于推动企业战略发展、传承企业文化制度',title4:'沉淀企业最佳业务实践、培养最具实战后备人才干部的功能'}
            ]
        }
    }
}
</script>