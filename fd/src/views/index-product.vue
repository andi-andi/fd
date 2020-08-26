<template>
    <div>
        <div class="container mt-5">
            <div>
                <p class="case_food m-0">菜品展示</p>
            </div>
            <div class="d-flex text-center case_a mt-2 mb-5" @click="images">
                <router-link data-product="2" to="/" class="mr-4" :class="{color:value==2}">火锅菜品</router-link>
                <router-link data-product="5" to="/" class="mr-4" :class="{color:value==5}">新品菜品</router-link>
                <router-link data-product="6" to="/" class="mr-4" :class="{color:value==6}">精品推荐</router-link>
                <router-link data-product="9" to="/" class="mr-4" :class="{color:value==9}">特色菜品</router-link>
            </div>
            <div class="row">
                <div class="case col-sm-6 col-md-4" v-for="(p,i) of products" :key="i">
                    <div class="new1">
                        <div class="card-blank">
                            <div><img :src="p.product_img" class="w-100"></div>
                            <div class="card-blank-border">
                                <div class="icon-l">
                                    <img src="/images/icon/xin.png" class="w-100">
                                </div>
                                <div class="icon-r">
                                    <img src="/images/icon/search1.png" class="w-100">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="case_title w-100">
                        <p>{{p.product_title}}</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 安全通知 -->
        <div class="container">
            <div class="case_head">
                <p>管理公告</p>
                <p>MANAGEMENT BUllETIN</p>
            </div>
            <div class="row">
                <div class="col-sm-12 col-md-4 case_name mb-5" v-for="(p,i) of modern" :key="i">
                    <div class="case_img">
                        <router-link :to="`/detalisfd/${i+1}`">
                            <img :src="p.img" class="w-100" >
                        </router-link>
                    </div>
                    <router-link :to="`/detalisfd/${i+1}`">
                        <h2>{{p.title}}</h2>
                    </router-link>
                    <p>{{p.content}}</p>
                </div>
            </div>
        </div>
        <!-- 食品安全 -->
        <div class="row no-gutters mt-5">
            <div class=" col-sm-6 col-md-6">
                <img src="/images/124.jpg" class="h-100">
            </div>
            <div class=" col-sm-6 col-md-6 foot_security">
                <div class="foot_content">
                    <h2>食品安全</h2>
                    <p>FOOD SAFETY</p>
                    <p>WELCOME TO FRESH VEGE SHOP</p>
                    <p>海底捞可能有两种死法：一种是管理出问题，如果发生，死亡过程可能持续数月乃至上年；第二种是食品安全出问题，一旦发生，海底捞可能明天就会关门，生死攸关。我们明白，抓好食品安全这条路虽然曲折而艰辛，但不会白走。我们对食品质量及安全实施严格且详细的质量控制措施，规范供应链及餐厅的食品质量及安全标准。更进行全面的食品安全、质量及卫生检验。门店设立专职食品安全员，推行开展一日食品安全员活动，实现对门店的食品安全分级量化管理。让海底捞的顾客吃得满意、吃得安心！</p>
                    <router-link to="/food" target="_blank">MORE</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    @import'../assets/css/index-product.css';
</style>

<script>
    export default {
        data () {
            return {
                modern:[
                    {img:"/images/111.jpg",title:"2020年8月食品安全检查处理公告",content:"厦门11店7月5日检查库房早餐包过期，不符合食品安全要求，纳入门店食品安全考核，扣除该项分数，纳入店经理记分，要求立即整改，后期加强检查力度；..."},
                    {img:"/images/222.jpg",title:"2020年7月食品安全检查处理公告",content:"上海14店7月2日小库房垢清没有上锁管理，不符合食品安全要求，纳入门店食品安全考核，扣除该项分数，纳入店经理记分，要求立即整改；后期加强培训；"},
                    {img:"/images/333.jpg",title:"2020年6月食品安全检查处理公告",content:"桂林1店7月22日门店洗碗机挡板卫生不干净。不符合食品安全要求，纳入门店食品安全考核，扣除该项分数，纳入店经理记分，要求立即整改；后期加强培训；"},
                    {img:"/images/444.jpg",title:"2020年5月食品安全检查处理公告",content:"郑州8店7月17日酒水吧存放化学品，不符合食品安全要求，纳入门店食品安全考核，扣除该项分数，纳入店经理记分，要求立即整改；后期加强培训；"},
                    {img:"/images/555.jpg",title:"2020年4月食品安全检查处理公告",content:"天津7店7月23日后堂洗碗间净水设备漏水，不符合食品安全要求，纳入门店食品安全考核，扣除该项分数，纳入店经理记分，现场已整改；"},
                    {img:"/images/222.jpg",title:"2020年3月食品安全检查处理公告",content:"深圳18店7月20日油碟房已开封的花生碎没有加膜加盖；不符合食品安全要求，纳入门店食品安全考核，扣除该项分数，纳入店经理记分；后期加强检查力度；"}
                ],
                products:[],
                value:2
            }
        },
        methods:{
            ps(){
               this.axios.get('/detalis/product',{
                    params:{fid:this.value}
                }).then(res=>{
                    this.products=res.data.result
                }) 
            },
            images(e){
                if(e.target.nodeName=="A"){
                    this.value=e.target.getAttribute("data-product")
                }
            }
        },
        mounted(){
            this.ps()
        },
        watch:{
            value(){
               this.ps() 
            }
        }
    }
</script>