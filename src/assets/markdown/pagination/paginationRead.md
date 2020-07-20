<table>
  <tbody>
    <tr>
      <th  width="20%">参数</th><th width="20%">说明</th><th width="20%">类型</th><th width="25%">可选值</th><th width="15%">默认值</th>
    </tr>
    <tr>
      <td width="20%">small</td><td width="20%">是否使用小型分页样式</td><td width="20%">boolean</td><td width="25%">—</td><td width="15%">false</td>
    </tr>
    <tr>
      <td width="20%">background</td><td width="20%">是否为分页按钮添加背景色	</td><td width="20%">boolean</td><td width="25%">—</td><td width="15%">false</td>
    </tr>
    <tr>
      <th  width="20%">page-size</th><th width="20%">每页显示条目个数，支持 .sync 修饰符</th><th width="20%">number</th><th width="25%">—</th><th width="15%">10</th>
    </tr>
    <tr>
      <td width="20%">total</td><td width="20%">总条目数</td><td width="20%">number</td><td width="25%">—</td><td width="15%">—</td>
    </tr>
    <tr>
      <td width="20%">page-count</td><td width="20%">总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性	</td><td width="20%">Number</td><td width="25%">—</td><td width="15%">—</td>
    </tr>
    <tr>
      <th  width="20%">current-page</th><th width="20%">当前页数，支持 .sync 修饰符</th><th width="20%">number</th><th width="25%">—</th><th width="15%">1</th>
    </tr>
    <tr>
      <td width="20%">layout</td><td width="20%">组件布局，子组件名用逗号分隔</td><td width="20%">String</td><td width="25%">sizes, prev, pager, next, jumper, ->, total, slot</td><td width="15%">'prev, pager, next, jumper, ->, total'</td>
    </tr>
    <tr>
      <td width="20%">page-sizes</td><td width="20%">每页显示个数选择器的选项设置</td><td width="20%">number[]</td><td width="25%">—</td><td width="15%">[10, 20, 30, 40, 50, 100]</td>
    </tr>
    <tr>
      <td width="20%">popper-class</td><td width="20%">每页显示个数选择器的下拉框类名</td><td width="20%">string</td><td width="25%">—</td><td width="15%">—</td>
    </tr>
    <tr>
      <td width="20%">prev-text</td><td width="20%">替代图标显示的上一页文字</td><td width="20%">string	</td><td width="25%">—</td><td width="15%">—</td>
    </tr>
    <tr>
      <th  width="20%">next-text</th><th width="20%">替代图标显示的下一页文字</th><th width="20%">string</th><th width="25%">—</th><th width="15%">—</th>
    </tr>
    <tr>
      <td width="20%">disabled</td><td width="20%">是否禁用</td><td width="20%">boolean</td><td width="25%">—</td><td width="15%">false</td>
    </tr>
    <tr>
      <td width="20%">hide-on-single-page</td><td width="20%">只有一页时是否隐藏</td><td width="20%">boolean</td><td width="25%">—</td><td width="15%">—</td>
  </tbody>
</table>