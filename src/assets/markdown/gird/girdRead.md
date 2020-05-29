### Row

<table>
  <tbody>
    <tr>
      <th  width="15%">成员</th><th width="35%">说明</th><th width="35%">类型</th><th width="15%">默认值</th>
    </tr>
    <tr>
      <td width="15%">align</td><td width="35%">垂直对齐方式</td><td width="35%">`top` | `middle` | `bottom`</td><td width="15%">`top`</td>
    </tr>
    <tr>
      <td width="15%">gutter</td><td width="35%">栅格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔 { xs: 8, sm: 16, md: 24}。或者使用数组形式同时设置 [水平间距, 垂直间距]。</td><td width="35%">number/object/array</td><td width="15%">0</td>
    </tr>
    <tr>
      <td width="15%">justify</td><td width="35%">水平排列方式</td><td width="35%">`start` | `end` | `center` | `space-around` | `space-between`</td><td width="15%">`start`</td>
    </tr>
  </tbody>
</table>


### Col

<table>
  <tbody>
    <tr>
      <th  width="15%">成员</th><th width="45%">说明</th><th width="25%">类型</th><th width="15%">默认值</th>
    </tr>
    <tr>
      <td width="15%">flex</td><td width="45%">flex 布局属性</td><td width="25%">string | number</td><td width="15%">-</td>
    </tr>
    <tr>
      <td width="15%">offset</td><td width="45%">栅格左侧的间隔格数，间隔内不可以有栅格</td><td width="25%">number</td><td width="15%">0</td>
    </tr>
    <tr>
      <td width="15%">xs</td><td width="45%">&lt;576px 响应式栅格，可为栅格数或一个包含其他属性的对象</td><td width="25%">number|object</td><td width="15%">-</td>
    </tr>
    <tr>
      <td width="15%">sm</td><td width="45%">&ge;576px 响应式栅格，可为栅格数或一个包含其他属性的对象</td><td width="25%">number|object</td><td width="15%">-</td>
    </tr>
    <tr>
      <td width="15%">md</td><td width="45%">&ge;768px 响应式栅格，可为栅格数或一个包含其他属性的对象</td><td width="25%">number|object</td><td width="15%">-</td>
    </tr>
    <tr>
      <td width="15%">lg</td><td width="45%">&ge;992px 响应式栅格，可为栅格数或一个包含其他属性的对象</td><td width="25%">number|object</td><td width="15%">-</td>
    </tr>
    <tr>
      <td width="15%">lg</td><td width="45%">&ge;1200px 响应式栅格，可为栅格数或一个包含其他属性的对象</td><td width="25%">number|object</td><td width="15%">-</td>
    </tr>
    <tr>
      <td width="15%">lg</td><td width="45%">&ge;1600px 响应式栅格，可为栅格数或一个包含其他属性的对象</td><td width="25%">number|object</td><td width="15%">-</td>
    </tr>
  </tbody>
</table>