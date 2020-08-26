<template>
<div>
    <my-header></my-header>
    <div class="container">
        <div class="row" v-show="fid!=1">
           <div class="col-12" v-show="fid!=10">
               <div v-show="fid!=11">
                    <ul class="mt-5 product_nav list-unstyled" v-show="fid!=12">
                        <li><router-link :class="{productactive:fid==2}" to="/product/2">新品</router-link></li>
                        <li><router-link :class="{productactive:fid==3}" to="/product/3">捞派特色菜</router-link></li>
                        <li><router-link :class="{productactive:fid==4}" to="/product/4">肉类</router-link></li>
                        <li><router-link :class="{productactive:fid==5}" to="/product/5">河鲜海鲜</router-link></li>
                        <li><router-link :class="{productactive:fid==6}" to="/product/6">丸滑类</router-link></li>
                        <li><router-link :class="{productactive:fid==7}" to="/product/7">蔬菜类</router-link></li>
                        <li><router-link :class="{productactive:fid==8}" to="/product/8">豆面制品类</router-link></li>
                        <li><router-link :class="{productactive:fid==9}" to="/product/9">菌菇类</router-link></li>
                    </ul>
               </div>
           </div>
        </div>

       <div class="w-25 m-auto" @keyup="search">
            <el-input
                placeholder="请输入想要搜索的商品"
                v-model="input"
                clearable>
            </el-input>
       </div>

        <div class="row">
            <div class="col-sm-6 col-lg-4 mt-5 mb-3" v-for="(p,i) of avatar" :key="i">
                <el-card shadow="hover">
                    <el-image :src="p.product_img" class="w-100 product_img" lazy></el-image>
                    <!-- 内容区域 -->
                    <div class="product_car">
                        <div class="product_cars mb-3">{{p.product_title}}</div>
                        <div class="product-nba mb-3">
                            <div class="product-nba-title">价格</div>
                            <div class="product-nba-text">$ {{p.product_zc}}.00 整份</div>
                            <div @click="product1(p.product_img,p.product_title,p.product_zc,size1)"><i class="icon-color el-icon-circle-plus" @click="product"></i></div>
                        </div>
                        <div class="product-nba" v-show="fid!=1">
                            <div class="product-nba-text">煮{{p.product_text}}分钟</div>
                            <div class="product-nba-text">$ {{p.product_bf}}.00 半份</div>
                            <div @click="product1(p.product_img,p.product_title,p.product_bf,size2)"><i class="icon-color el-icon-circle-plus"></i></div>
                        </div>
                    </div>
                </el-card>
            </div>
        </div>
    </div>
    <my-footer></my-footer>
</div>
</template>

<style scoped>
    @import '../assets/css/product.css';
</style>

<script>
    export default {
        props:["fid"],
        data(){
            return{
                avatar:[],
                size1:'整份',
                size2:'半份',
                input:''

            }
        },
        methods:{
            //页面搜索功能
            search(e){
                if(this.input!='' && e.keyCode==13){
                    this.axios.get('detalis/search',{
                        params:{input:this.input}
                    }).then(res=>{
                         if(res.data.result.length!=0){
                             this.avatar=res.data.result;
                         }else{
                             this.$message("此商品为未收录 敬请期待")
                         }
                    })
                }
            },
            //页面挂载时发送请求
            product(){
                this.axios.get('detalis/product',{
                    params:{fid:this.fid}
                }).then(res=>{
                    this.avatar=res.data.result;
                });
            },
            product1(image,title,price,size){
                if(this.$store.state.isLogin!=false){
                    let obj={
                        image:image,
                        title:title,
                        price:price,
                        content:1,
                        size:size
                    }
                    this.$store.commit('products',obj)
                    this.$message({
                        showClose: true,
                        message: '添加购物车成功',
                        type: 'success',
                        duration: '1000'
                    });
                }else{
                    this.$message.error('当前未登陆 即将跳转登陆页面');
                    setTimeout(()=>{
                    this.$router.push('/login')
                    },3000);

                    
                }
            },
        },
        mounted(){
            this.product();
        },
        watch:{
            //监听fid值发生变化时 就发送请求
            fid(){
                this.product();
            }
        }
    }
</script>
