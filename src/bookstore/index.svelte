<script>
  //   export let name, symbol;
  import BookCard from "./BookCard.svelte";

  let title = "";
  let price = 10;
  let description = "";

  let books = [];
  let booksInCart = [];

  // 添加图书
  function handleAddBook() {
    if (title.length == 0) return; //禁为空
    books = books.concat({ title, price, description });
    title = "";
    price = 10;
    description = "";
  }

  // 加入购物车
  let prevTitle = "";
  function handleAddToCart(title) {
    let bookNeededToBeAdded = books.find(book => book.title == title);
    if (title === prevTitle) return; //禁添加同一本书
    booksInCart = booksInCart.concat(bookNeededToBeAdded);
    prevTitle = title;
  }

  // 统计购物车内总数
  $: booksNumInCart = booksInCart.length;
  $: totalCheckoutPrice = booksInCart.reduce(
    (sum, book) => sum + book.price,
    0
  );
</script>

<style>
  .bookstore {
    text-align: center;
    padding: 1em;
    max-width: 320px;
    margin: 0 auto;
  }
  section {
    border-bottom: 1px solid #ec5c5c;
    padding: 10px 0;
  }
  section:last-child {
      border-bottom: 0 none;
    }
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
  
  /* .para {
    color: green;
  }
  .zara {
    color: goldenrod;
  } */

  @media (min-width: 640px) {
    main {
      /* max-width: none; */
    }
  }
</style>

<div class="bookstore">
  <!-- 
	<h1>Hello {name} {symbol}</h1>
	<p>
		Visit the
		<a href="https://svelte.dev/tutorial">Svelte tutorial</a>
		to learn how to build Svelte apps.
	</p>
	<div class="para">xxxxxx</div>
	<div class="zara">yyyyy</div> 
	-->

  <h1>Bookstore</h1>
  <section>
    <h2>添加一本新书</h2>
    <label for="title">标题:</label>
    <input
      type="text"
      id="title"
      bind:value={title}
      placeholder="请输入书名~" />
    <label for="price">价格:</label>
    <input type="number" id="price" bind:value={price} />
    <label for="description">图书描述:</label>
    <textarea
      rows="3"
      id="description"
      bind:value={description}
      placeholder="请输入图书描述~~" />
    <div>
      <button on:click={handleAddBook}>add book</button>
    </div>
  </section>

  <section>
    <h2>购物车</h2>
    <div>书本总数：{booksNumInCart}</div>
    <div>订单金额：{totalCheckoutPrice}</div>

    {#if booksInCart.length === 0}
      <p>购物车空的哦~</p>
    {:else}
      {#each booksInCart as { title, price }}
        <div>名称: {title}, 价钱: {price}</div>
      {/each}
    {/if}
  </section>
  <section class="card-wrap">
    <h2>书单</h2>
    {#each books as { title, price, description }}
      <BookCard {title} {price} {description} {handleAddToCart} />
    {/each}
  </section>

</div>
