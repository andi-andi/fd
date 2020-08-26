<template>
<!-- 父级元素 -->
     <div>
         <my-header></my-header>
         <!-- 轮播 -->
        <div>
			<el-carousel height="520px" trigger="click">
				<el-carousel-item v-for="(p,i) of avatar" :key="i">
					<div class="lbt-bgcolor">
                        <div><img :src="p.img"></div>
                        <div class="BJ-1">
                            <p class="BJ-2"><span style="color:red;">招牌锅底</span>-{{p.title}}</p>
                            <p class="BJ-3"><span>{{p.text}}</span></p>
                            <p class="BJ-4">{{p.textcont}}</p>
                            <p><b>锅底分类/</b>{{p.one}}</p>
                            <p><b>覆盖区域/</b>全国覆盖</p>
                            <router-link to="/product/1">查看更多</router-link>
                        </div>
                        <div class="lbt-bgcolo"></div>
                    </div>
				</el-carousel-item>
			</el-carousel>
        </div>
        <!-- 轮播end -->
        <my-footer></my-footer>
    </div>
    <!-- 父级元素end -->
</template>

<style scoped>
    @import '../assets/css/finefood.css';
</style>

<script>
    export default {
        data(){
            return{
                avatar:[]
            }
        },
        mounted(){
            this.axios.get('/detalis/finefood').then(res=>{
                this.avatar=res.data.result;
            })
        }
    }
</script>