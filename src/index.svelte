<script>
  import { Route } from "svelte-router-spa";
  export let currentRoute;
//   const params = {};
</script>

<h3>Demo</h3>
<ul>
  <li>
    <a href="/book">bookstore</a>
  </li>
</ul>

<section class="section">
  <Route {currentRoute} />
</section>
