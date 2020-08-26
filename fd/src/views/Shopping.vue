<template>
    <div>
        <!-- 网页头部 -->
        <my-header></my-header>
        <!-- 购物车区域 -->
       <div class="shopping-width">
           <!-- 购物清单栏 -->
           <div class="shopping-form">购物清单</div>
           <!-- 购物车导航栏信息 -->
           <ul class="list-unstyled shopping-ul">
               <li><span class="radio-span mr-1" @click="all">{{select}}</span><span>全选</span></li>
               <li>商品</li>
               <li>数量</li>
               <li>单价(元)</li>
               <li>金额(元)</li>
               <li>操作</li>
           </ul>

           <!-- 商品详细信息 -->
           <div class="shopping-detalis">
               <ul class="detalis-ul list-unstyled" v-for="(p,i) of this.$store.state.shopping" :key="i">
                   <li>
                       <span class="radio-span radios-span">{{select}}</span>
                   </li>
                   <li>
                       <!-- 图片区域 -->
                      <div class="img-deatalis">
                          <img :src="p.image" class="w-100"> 
                      </div>
                      <!-- 文字区域 -->
                      <div class="detalis-title">
                          <h6>{{p.title}}</h6>
                          <p>分量：{{p.size}}</p>
                          <p>规格/纯度:99.7%  起定量：215千克</p>
                      </div>
                   </li>
                   <li>
                       <div class="product-jia">
                           <span>{{p.content}}</span>
                       </div>
                   </li>
                   <li>
                       <div class="product-product">
                           ￥{{p.price}}.00
                       </div>
                   </li>
                   <li>
                       <div class="product-product">
                           ￥{{p.price}}.00
                       </div>
                   </li>
                   <li>
                       <div class="product-font" @click="deletes(i)">删除</div>
                   </li>
               </ul>
           </div>

           <!-- 删除操作 -->
           <div class="detalie-f">
               <span class="img-span-product" @click="clear">删除所选商品</span>
               <router-link to="/product/5" class="router-link">继续购物</router-link>
               <div class="zongji">
                   <span>{{this.$store.state.shopping.length}}</span>
                  <span> 件商品总计 （不含运费）：</span>
                   <span>￥{{products}}.00</span>
               </div>
               <router-link to="/indexnjdsndvn" class="jisuang">去结算</router-link>
           </div>

           <!-- 绑定操作 -->
           <div class="product-jiewei">
               绑定跟单员
           </div>
       </div>
       <!-- 网页脚部 -->
        <my-footer></my-footer>
    </div>  
</template>

<style scoped>
    @import '../assets/css/shopping.css';
</style>

<script>
    export default {
        data(){
            return{
                select:"",
                product:[],
                value:1
            }
        },
        methods:{
            all(){
                this.select!="√" ? this.select="√" : this.select=""
            },
            content1(content){
                if(this.value>1){
                    this.value--
                }

            },
            content2(content){
                var value=content;
                value++;
                content=value;
            },
            deletes(index){
                this.$confirm('确认删除商品吗, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true
                    }).then(() => {
                            this.$store.commit('del',index)
                            this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                    }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除',
                    });
                });
            },
            clear(){
                if(this.select=="√" && this.$store.state.shopping.length!=0){
                    this.select="";
                    this.$confirm('此操作将请空购物车, 是否继续?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning',
                        center: true
                    }).then(() => {
                               this.$store.commit('clears')
                                this.$message({
                                type: 'success',
                                message: '删除成功!'
                            });
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消删除',
                        });
                    });
                }else{
                    this.$message.error("当前没有选中的商品或购物车为空");
                }
            }
        },
        mounted(){
            //  console.log(this.$store.state.shopping)
        },
        computed:{
            products(){
                var leng=this.$store.state.shopping;
                var produs=0;
                leng.forEach(element=>{
                    produs+=parseInt(element.price)
                });
                return produs
            }
        }
    }
</script>