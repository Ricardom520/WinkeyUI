<table>
  <tbody>
    <tr>
      <th  width="10%">参数</th><th width="20%">说明</th><th width="10%">类型</th><th width="45%">可选值</th><th width="15%">默认值</th>
    </tr>
    <tr>
      <td width="10%">placeholder</td><td width="20%">输入框占位文本</td><td width="10%">string</td><td width="45%">—</td><td width="15%">—</td>
    </tr>
    <tr>
      <td width="10%">disabled</td><td width="20%">禁用</td><td width="10%">boolean</td><td width="45%">—</td><td width="15%">false</td>
    </tr>
    <tr>
      <td width="10%">value-key</td><td width="20%">输入建议对象中用于显示的键名</td><td width="10%">string</td><td width="45%">—</td><td width="15%">value</td>
    </tr>
    <tr>
      <td width="10%">value</td><td width="20%">必填值，输入绑定值</td><td width="10%">string</td><td width="45%">—</td><td width="15%">—	</td>
    </tr>
    <tr>
      <td width="10%">debounce</td><td width="20%">获取输入建议的去抖延时</td><td width="10%">number</td><td width="45%">—</td><td width="15%">300</td>
    </tr>
    <tr>
      <td width="10%">placement</td><td width="20%">菜单弹出位置</td><td width="10%">string</td><td width="45%">—</td><td width="15%">—</td>
    </tr>
    <tr>
      <td width="10%">clearable</td><td width="20%">是否可清空</td><td width="10%">boolean</td><td width="45%">top / top-start / top-end / bottom / bottom-start / bottom-end</td><td width="15%">bottom-start</td>
    </tr>
    <tr>
      <td width="10%">show-password</td><td width="20%">是否显示切换密码图标</td><td width="10%">boolean</td><td width="45%">—</td><td width="15%">false</td>
    </tr>
    <tr>
      <td width="10%">fetch-suggestions</td><td width="20%">返回输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback(data:[]) 来返回它</td><td width="10%">Function(queryString, callback)</td><td width="45%">—</td><td width="15%">—</td>
    </tr>
    <tr>
      <td width="10%">popper-class</td><td width="20%">Autocomplete 下拉列表的类名</td><td width="10%">string</td><td width="45%">—</td><td width="15%">—</td>
    </tr>
    <tr>
      <td width="10%">trigger-on-focus</td><td width="20%">是否在输入框 focus 时显示建议列表</td><td width="10%">boolean</td><td width="45%">—</td><td width="15%">true</td>
    </tr>
    <tr>
      <td width="10%">name</td><td width="20%">原生属性</td><td width="10%">string</td><td width="45%">—</td><td width="15%">—</td>
    </tr>
    <tr>
      <td width="10%">select-when-unmatched</td><td width="20%">在输入没有任何匹配建议的情况下，按下回车是否触发 select 事件</td><td width="10%">boolean </td><td width="45%">—</td><td width="15%">false</td>
    </tr>
    <tr>
      <td width="10%">label</td><td width="20%">输入框关联的label文字</td><td width="10%">string</td><td width="45%">—</td><td width="15%">true</td>
    </tr>
    <tr>
      <td width="10%">prefix-icon</td><td width="20%">输入框头部图标</td><td width="10%">string</td><td width="45%">—</td><td width="15%">—</td>
    </tr>
    <tr>
      <td width="10%">suffix-icon</td><td width="20%">输入框尾部图标</td><td width="10%">string </td><td width="45%">—</td><td width="15%">false</td>
    </tr>
    <tr>
      <td width="10%">hide-loading</td><td width="20%">是否隐藏远程加载时的加载图标</td><td width="10%">boolean</td><td width="45%">—</td><td width="15%">false</td>
    </tr>
    <tr>
      <td width="10%">popper-append-to-body</td><td width="20%">是否将下拉列表插入至 body 元素。在下拉列表的定位出现问题时，可将该属性设置为 false</td><td width="10%">boolean</td><td width="45%">—</td><td width="15%">true</td>
    </tr>
    <tr>
      <td width="10%">highlight-first-item</td><td width="20%">是否默认突出显示远程搜索建议中的第一项</td><td width="10%">boolean </td><td width="45%">—</td><td width="15%">false</td>
    </tr>
  </tbody>
</table>