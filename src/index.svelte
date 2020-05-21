<script>
  import { Route } from "svelte-router-spa";
  export let currentRoute;
  import { onlinePath } from "./libs/some";
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
    <a href="{onlinePath}/book">bookstore</a>
  </li>
  <li>
    <a href="{onlinePath}/ex_a">example A</a>
  </li>
</ul>

<section class="section">
  <Route {currentRoute} />
</section>
