<template>
    <div>
        <my-header></my-header>
        <div class="row p-5">
            <div class="col-12">
                <!-- 网页标题 -->
                <div class="mt_detail_tit text-center">
                    <h1>{{avatar.title}}</h1>
                    <p class="date">{{avatar.time}}</p>
                </div>
                <!-- 网页内容区域 -->
                <div class="mt_detail_con" v-html="avatar.text">
                    
                </div>
                <!-- 文本链接 -->
                <div class="w-100 mt-2 lianjie">
                    <div v-show="avatar.a1!=''"><span class="mr-2">上一篇</span><router-link :to="`/detalisfd/${avatar.uid-1}`">{{avatar.a1}}</router-link></div>
                    <div v-show="avatar.a2!=''"><span class="mr-2">下一篇</span><router-link :to="`/detalisfd/${avatar.uid+1}`">{{avatar.a2}}</router-link></div>
                </div>
            </div>
        </div>
        <my-footer></my-footer>
    </div>
</template>

<style scoped>
    @import '../assets/css/detalisfd.css';
</style>

<script>
    export default {
        props:["uid"],
        data(){
            return{
                avatar:{}
            }
        },
        mounted(){
            this.axios.get('/detalis/uid',{
                params:{uid:this.uid}
            }).then(res=>{
                this.avatar=res.data.result;
            })
        },
        watch:{
            uid(){
                this.axios.get('/detalis/uid',{
                params:{uid:this.uid}
                }).then(res=>{
                    this.avatar=res.data.result;
                    //上线启用  history.go(0);
                })
            }
        }

    }
</script>