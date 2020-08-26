<template>
    <main>
        <my-header></my-header>
        <div class="w-100 mb-2">
            <img class="w-100" src="/images/food1.jpg">
        </div>
        <!-- 总父级 -->
        <div class="container ">
            <!-- 左右父元素 -->
            <div class="row style_4">
                <!-- 左边div -->
                <div class="col-sm-12 text-center-center col-md-3 text-sm-center text-md-left" >
                    <h2 class="style_1">食品安全</h2>
                    <ul class="style_2 list-unstyled" @click="food">
                        <li class="textred" data-food="1">安全语录</li>
                        <li data-food="2">安全决心</li>
                        <li data-food="3">组织架构</li>
                        <li data-food="4">生产管理</li>
                        <li data-food="5">企业核查</li>
                        <li data-food="6">管理公告</li>
                    </ul>
                </div>
                <!-- 左边div结束 -->
                <!-- 1.安全语录右边div -->
                <div class="col-sm-12 col-md-8" v-html="context"></div>
            </div>
        </div>
        <my-footer></my-footer>
    </main>
</template>

<style scoped>
    @import '../assets/css/food.css';
</style>

<script>
    export default {
        data(){
            return{
                context:{titleContext:''}
            }
        },
        methods:{
            food(e){
                if(e.target.nodeName=="LI"){
                    var li=document.querySelector(".textred");
                    var data=e.target.getAttribute("data-food");
                    li.className=li.className.replace("textred","");
                    e.target.className+=" textred";
                    this.axios.get('/detalis/food',{
                        params:{id:data}
                    }).then(res=>{
                        this.context=res.data.result.titleContext;
                    })
                };
            }
        },
        mounted(){
            this.axios.get('/detalis/food',{
                params:{id:1}
            }).then(res=>{
                this.context=res.data.result.titleContext;
            })
        }
    }
</script>
