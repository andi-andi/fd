<template>
    <main class="aaa">
        <div class="headerhide">
            <div>
                <div class="row">
                <div class="col-10 center-1"><img src="/images/icon/log.png"></div>
                <div class="col-2 center-2">
                    <router-link v-if="this.$store.state.isLogin==false" to="/login" target="_blank"><i class="el-icon-user-solid"></i>登录</router-link>
                    <span v-if="this.$store.state.isLogin==false">/</span>
                    <router-link v-if="this.$store.state.isLogin==false" to="/loginzc">注册</router-link>
                    <a @click="loginout" v-else href="javascript:;"><i class="el-icon-s-promotion"></i>注销</a>
                    <router-link to="/shopping" class="pl-3"><i class="el-icon-shopping-cart-full"></i>购物车</router-link>
                </div>
            </div>
            <div class="bg-1">
                <ul class="p-0">
                    <li><router-link to="/">网站首页</router-link></li>
                    <li class="bg-3" style="position: relative;"><router-link to="/finefood">海底捞美食
                        <div class="bg-2">
                            <router-link to="/product/1">锅底</router-link>
                            <router-link to="/product/2">涮菜</router-link>
                            <router-link to="/product/10">特色蘸料</router-link>
                            <router-link to="/product/11">小吃甜品</router-link>
                            <router-link to="/product/12">特色饮品</router-link>
                        </div>
                        </router-link>
                    </li>
                    <li><router-link to="/finefood">火锅介绍</router-link></li>
                    <li><router-link to="/cultuer">美食文化</router-link></li>
                    <li><router-link to="/food">食品安全</router-link></li>
                    <li><router-link to="/index1">联系我们</router-link></li>
                </ul>
            </div>
            </div>
        </div>
        <header class="header-block">
        <div class="header">
			<div class="header-top">
				<div class="header-top-first">
					<a href="index.html"><img src="/images/icon/log.png"></a>
				</div>
				<div class="header-top-three">
					<ul class="header-top-three-ul list-unstyled" @click="headerBlock">
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
				<div class="header-top-four header1" v-show="index==true">
					<ul class="list-unstyled">
						<li><router-link to="/">网站首页</router-link></li>
						<li><router-link to="/product/3">海底捞美食</router-link></li>
						<li><router-link to="/finefood">火锅介绍</router-link></li>
						<li><router-link to="/cultuer">美食文化</router-link></li>
						<li><router-link to="/food">食品安全</router-link></li>
						<li><router-link to="/index1">联系我们</router-link></li>
					</ul>
				</div>
			</div>
		</div>
    </header>
    </main> 
</template>

<style  scoped>
    @import '../assets/css/header.css';
</style>

<script>
    export default {
        data(){
            return{
               index:false
            }
        },
        methods:{
            loginout(){
                 this.$store.commit('login')
                 sessionStorage.removeItem("isLogin")
            },
            headerBlock(){
                this.index=!this.index
            }
        }
    }
</script>