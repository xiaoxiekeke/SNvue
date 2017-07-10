#SNWeChat

----
##使用方法：
<br>
###1、安装npm：https://nodejs.org/en/
<br>
#####windows平台直接安装node.js，系统会自动安装npm 包管理工具，项目中的包和依赖都是通过npm 进行管理的
<br>
###2、安装cnpm：http://npm.taobao.org/
<br>
#####由于国内某些“不可描述”的原因，我们在下载国外的一些资源的时候速度缓慢，且常常报错。因此，使用国内的淘宝镜像cnpm来管理我们的依赖。具体安装和用法参考cnpm的官网
<br>
###3、克隆项目：
<br>
```
    git clone https://git.oschina.net/hicks/SNWeChat.git
```
<br>
###4、安装依赖：<br>
```
    cd SNWeChat  //进入项目目录
```
    <br>
```
    cnpm install  //利用cnpm安装依赖
```
    <br>
###5、本地开发调试：
<br>
```
    npm run dev  //启动webpack-dev-server
```
###6、在浏览器中输入：localhost:8080  查看运行效果    
<br>
###7、前端发布：
<br>
```
    npm run build
```
<br>
###8、前端发布完成后，会在/static/目录下多出一个index.js文件，整个项目的资源就被压缩在了一个js文件里了，此时可以在浏览器环境下直接运行index.html文件了！！！
