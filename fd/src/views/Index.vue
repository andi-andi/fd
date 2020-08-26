<template>
    <div>
        <my-header></my-header>
        <!-- 轮播图区域 -->
         <div>
			<el-carousel height="550px" trigger="click">
				<el-carousel-item v-for="i in 5" :key="i">
					<div class="lbt-bgcolor">
                        <div><img :src="`/images/hg${i}.jpg`"></div>
                        <div class="lbt-bgcolo"></div>
                    </div>
				</el-carousel-item>
			</el-carousel>
        </div>
        <!-- 轮播图区域结束 -->
        <indexProduct></indexProduct>
        <indexCard></indexCard>
        <my-footer></my-footer>
        
    </div>
</template>

<style scoped>
    @import '../assets/css/index.css';
</style>

<script>
    import indexCard from './index-card';
    import indexProduct from './index-product';
    export default {
        components:{
            indexCard,indexCard,
            indexProduct,indexProduct
        }
    }
</script>