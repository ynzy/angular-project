# TourismTodo（旅游清单）
## 功能实现
1. 项目首页展示已经去过的旅游地点和路线，地图路线由百度api实现。
2. 在首页添加未来的旅游规划和预算表单
3. 我的大陆展示你去过的和即将要去的路线，可以进行相关操作。

## 错误
1. Can't bind to 'formGroup' since it isn't a known property of 'form'.
  * 解决方案：需要从@angular/forms导入ReactiveFormsModule。因为FormGroupDirective 指令属于ReactiveFormsModule一部分。
  * 在app.module.ts导入ReactiveFormsModule模块
  * `import { FormsModule, ReactiveFormsModule } from '@angular/forms';`
2. Uncaught TypeError: Cannot read property 'gc' of undefined
  * 问题原因：百度地图，错误，页面上缺少渲染地图的div元素
  * 解决方案：页面初始化一个绑定id值的div