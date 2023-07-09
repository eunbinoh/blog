<template>
  <div>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Vue_blog</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/list">MyList</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/detail/0">Detail</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">(Disabled)</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <router-view :blogData="blog" />
  <router-link to="/list">리스트페이지</router-link>
</div>
</template>

<script>
import blogData from './assets/blog.js';
// import MyList from './components/MyList.vue';

export default {
  name: 'App',
  data(){
    return {
      blog : blogData
    }
  },
  components: {
    // MyList : MyList,
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
.container-header{
  margin : 40px 20px;
}
</style>
