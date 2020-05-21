<script>
  import { Route } from "svelte-router-spa";
  export let currentRoute;
  //   const params = {};
</script>

<style>
  .list {
    line-height: 28px;
  }
  .list a {
    color: #ff5bae;
  }
</style>

<h3>Demo</h3>
<ul class="list">
  <li>
    <a href="/sjs-demos/book">bookstore</a>
  </li>
  <li>
    <a href="/sjs-demos/ex_a">example A</a>
  </li>
</ul>

<section class="section">
  <Route {currentRoute} />
</section>
