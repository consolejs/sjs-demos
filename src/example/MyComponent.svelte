<script>
  import OtherComponent from "./OtherComponent.svelte";

  //   const component = new OtherComponent({
  //     // `target` 是唯一的必填字段 – 类似vue中的el配置
  //     // 用来描述组件将渲染在哪里
  //     target: document.getElementsByClassName( 'ex-a' )[0],

  //     // `data` 是一个选填字段。一个组件也能有
  //     // 默认 data – 我们稍后会接触到
  //     data: {
  //       questions: ["life", "the universe", "everything"],
  //       answer: 42
  //     }
  //   });
</script>

<style>
  div {
    line-height: 28px;
  }
</style>

<div>我的第一个组件~</div>
<div>
  <OtherComponent />
</div>
