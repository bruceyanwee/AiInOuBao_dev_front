## 客服聊天机器人(非第三方sdk)

### 此页面处理了关于聊天的常见问题(消息体遮掩,键盘上推消息体等用户问题),已经多种机器人客服常用的消息模板
### 代码简洁,注释详细,没有做多余的业务操作,方便二次开发
### 流程思路->(后端配合)前端将问题发送到后端,后端应进行分词,模糊匹配知识库->然后把返回的数据加入到消息体数组即可
### (纯前端)前端提前写好问题和答案,直接进行分词,模糊匹配返回答案

### 使用方法

1. colorui文件夹及静态资源导入你的项目
2. 复制app.vue 的依赖css即可