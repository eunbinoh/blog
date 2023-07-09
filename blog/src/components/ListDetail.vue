<template>
<div>
    <!-- $route.params 로부터 router.js 정보 가져올수 있음 /:id -->
    <!-- {{ $route.params.id }} -->
    <div class="detail_box"> 

        <h4> 상세페이지 </h4>
        <h5> {{ blogData[$route.params.id].title }} </h5>
        <p> {{ blogData[$route.params.id].content }} </p>
        <p> Detail Contentens </p>
        <p> Detail Contentens </p>
        <p> {{ blogData[$route.params.id].date }} </p>
        
    </div>
    <!-- <router-link to="/list">리스트페이지</router-link> -->
</div>
</template>

<script>

export default {
    name: 'ListDetail',
    props: {
        blogData : Array,
    }
}
</script>

<style>
.detail_box{
    border : 1px solid gray;
    padding :30px 30px;
}
</style>