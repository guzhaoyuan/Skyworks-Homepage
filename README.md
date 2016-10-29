#网页步骤
##部署

首先安装docker,然后编译镜像，最后运行容器。

	git clone https://github.com/thu-skyworks/Skyworks-Homepage.git
	cd Skyworks-Homepage
	docker build -t <user>:Skyworks-Homepage . # <user> can be select
	docker run -p 3000:3000 -d <user>:Skyworks-Homepage

用浏览器查看本机的3000端口。

##TODO
- [ ] 添加项目和团队的图片，文字介绍
- [ ] 增加网页消息的邮件通知
- [ ] 进一步设计UI