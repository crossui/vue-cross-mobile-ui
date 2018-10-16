# Table 表格


```handlebars
<template>
  <div class="demo-block padding-tb-20">
    <v-load-more tip="default" :show-loading="false" background-color="#fbf9fe"></v-load-more>
    <div style="padding:0 15px;">
      <v-table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Apple</td>
            <td>$1.25</td>
          </tr>
          <tr>
            <td>Banana</td>
            <td>$1.20</td>
          </tr>
        </tbody>
      </v-table>
    </div>
    <div>
      <v-load-more tip="cell-bordered=false" :show-loading="false" background-color="#fbf9fe"></v-load-more>
      <v-table :cell-bordered="false" style="background-color:#fff;">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Apple</td>
            <td>$1.25</td>
            <td> x 1</td>
          </tr>
          <tr>
            <td>Banana</td>
            <td>$1.20</td>
            <td> x 2</td>
          </tr>
        </tbody>
      </v-table>

      <v-load-more tip="content-bordered=false" :show-loading="false" background-color="#fbf9fe"></v-load-more>

      <v-table :cell-bordered="false" :content-bordered="false" style="background-color:#fff;">
        <thead>
          <tr style="background-color: #F7F7F7">
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Apple</td>
            <td>$1.25</td>
            <td> x 1</td>
          </tr>
          <tr>
            <td>Banana</td>
            <td>$1.20</td>
            <td> x 2</td>
          </tr>
        </tbody>
      </v-table>
    </div>
    <div style="padding:15px;">
      <v-load-more tip="full-bordered" :show-loading="false" background-color="#fbf9fe"></v-load-more>
      <v-table full-bordered style="background-color:#fff;">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Apple</td>
            <td colspan="2">$1.25 x 10</td>
          </tr>
          <tr>
            <td>Banana</td>
            <td>$1.20</td>
            <td>x 08</td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </div>
</template>

```


## API

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| full-bordered | Boolean | false | '是否显示表格左右边框' | 
| content-bordered | Boolean | true | '是否显示 body tr 的下边框' | 
| cell-bordered | Boolean | true | '是否显示表格的右边边框' | 

### slots
| 名字 | 说明 |
| --- | --- |
| default | 表格内容 |
