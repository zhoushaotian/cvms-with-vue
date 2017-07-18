# cvms-with-vue
## 如何在cvms项目中结合webpack与vue开发  
- 在app目录下新建build文件夹，所有vue单文件模板都放在这个文件夹中，
build文件夹的结构与vuecli生成src目录结构一样。webpack打包生成的app.min.js放入public/static/js/中。
## webpack的配置  
除了一些loader的配置外，还要加上以下选项
```json
 resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
   }
```
