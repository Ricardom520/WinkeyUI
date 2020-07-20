```html
<div class="block">
  <span class="demonstration">页数较少小于7页时的效果</span>
  <wk-pagination
    layout="prev, pager, next"
    :total="50">
  </wk-pagination>
</div>
<div class="block">
  <span class="demonstration">大于 7 页时的效果</span>
  <wk-pagination
    layout="prev, pager, next"
    :total="1000">
  </wk-pagination>
</div>
```