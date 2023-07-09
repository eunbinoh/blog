<template>
  <div>  
    <!-- $router.go(-1) 뒤로가기 -->
    <div class="blog_content">
        <h5 @click="$router.push('/detail/0')">{{ blogData[0].title }}</h5>
        <p>{{ blogData[0].date }}</p>
        <p>{{ blogData[0].content }}</p>
    </div>
    <div class="blog_content">
        <h5 @click="$router.push('/detail/1')">{{ blogData[1].title }}</h5>
        <p>{{ blogData[1].date }}</p>
        <p>{{ blogData[1].content }}</p>
    </div>
    <div class="blog_content">
        <h5 @click="$router.push('/detail/2')">{{ blogData[2].title }}</h5>
        <p>{{ blogData[2].date }}</p>
        <p>{{ blogData[2].content }}</p>
    </div>

    <router-link to="/">go HOME</router-link>
    <router-view :blogData="blog" />
  </div>
</template>

<script>
export default {
    name : 'MyList',
    props: {
        blogData : Array
    }
}
</script>

<style>
.blog_content{
    margin: 50px 10px;
    padding: 30px 10px;
    border: 1px solid silver;
    border-radius: 8px;
}
</style>