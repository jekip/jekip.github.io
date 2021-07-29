import{o as n,c as s,b as a,d as t}from"./app.7966acca.js";const e='{"title":"构建&部署","description":"","frontmatter":{},"headers":[{"level":2,"title":"构建","slug":"构建"},{"level":3,"title":"旧版浏览器兼容","slug":"旧版浏览器兼容"},{"level":3,"title":"预览","slug":"预览"},{"level":3,"title":"分析构建文件体积","slug":"分析构建文件体积"},{"level":2,"title":"压缩","slug":"压缩"},{"level":3,"title":"开启 gzip 压缩","slug":"开启-gzip-压缩"},{"level":3,"title":"开启 brotli 压缩","slug":"开启-brotli-压缩"},{"level":3,"title":"同时开启 gzip 与 brotli","slug":"同时开启-gzip-与-brotli"},{"level":3,"title":"gzip 与 brotli 在 nginx 内的配置","slug":"gzip-与-brotli-在-nginx-内的配置"},{"level":2,"title":"部署","slug":"部署"},{"level":3,"title":"发布","slug":"发布"},{"level":3,"title":"前端路由与服务端的结合","slug":"前端路由与服务端的结合"},{"level":3,"title":"history 路由模式下服务端配置","slug":"history-路由模式下服务端配置"},{"level":3,"title":"使用 nginx 处理跨域","slug":"使用-nginx-处理跨域"}],"relativePath":"guide/deploy.md","lastUpdated":1627523487072}',l={},o=a("h1",{id:"构建-部署"},[a("a",{class:"header-anchor",href:"#构建-部署","aria-hidden":"true"},"#"),t(" 构建&部署")],-1),c=a("div",{class:"tip custom-block"},[a("p",{class:"custom-block-title"},"前言"),a("p",null,"由于是展示项目，所以打包后可能较大，如果项目中没有用到的插件，可以删除对应的文件或者路由，不引用即可，没有引用就不会打包。")],-1),i=a("h2",{id:"构建"},[a("a",{class:"header-anchor",href:"#构建","aria-hidden":"true"},"#"),t(" 构建")],-1),p=a("p",null,"项目开发完成之后，执行以下命令进行构建",-1),u=a("div",{class:"language-bash"},[a("pre",null,[a("code",null,[a("span",{class:"token function"},"yarn"),t(" build\n")])])],-1),r=a("p",null,"构建打包成功之后，会在根目录生成 dist 文件夹，里面就是构建打包好的文件",-1),d=a("h3",{id:"旧版浏览器兼容"},[a("a",{class:"header-anchor",href:"#旧版浏览器兼容","aria-hidden":"true"},"#"),t(" 旧版浏览器兼容")],-1),k=a("p",null,[t("在 "),a("strong",null,".env.production"),t(" 内")],-1),h=a("p",null,[t("设置 "),a("code",null,"VITE_LEGACY=true"),t(" 即可打包出兼容旧版浏览器的代码")],-1),g=a("div",{class:"language-bash"},[a("pre",null,[a("code",null,[t("VITE_LEGACY "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token boolean"},"true"),t("\n")])])],-1),m=a("h3",{id:"预览"},[a("a",{class:"header-anchor",href:"#预览","aria-hidden":"true"},"#"),t(" 预览")],-1),b=a("p",null,"发布之前可以在本地进行预览，有多种方式，这里介绍两种",-1),v=a("p",null,[a("strong",null,"不能直接打开构建后的 html 文件")],-1),_=a("ul",null,[a("li",null,"使用项目自定的命令进行预览(推荐)")],-1),x=a("div",{class:"language-bash"},[a("pre",null,[a("code",null,[a("span",{class:"token comment"},"# 先打包在进行预览"),t("\n"),a("span",{class:"token function"},"yarn"),t(" preview\n"),a("span",{class:"token comment"},"# 直接预览本地 dist 文件目录"),t("\n"),a("span",{class:"token function"},"yarn"),t(" preview:dist\n")])])],-1),f=a("ul",null,[a("li",null,"本地服务器预览(通过 live-server)")],-1),z=a("div",{class:"language-bash"},[a("pre",null,[a("code",null,[a("span",{class:"token comment"},"# 1.全局安装live-server"),t("\n"),a("span",{class:"token function"},"yarn"),t(" global "),a("span",{class:"token function"},"add"),t(" live-server\n"),a("span",{class:"token comment"},"# 2. 进入打包的后目录"),t("\n"),a("span",{class:"token builtin class-name"},"cd"),t(" ./dist\n"),a("span",{class:"token comment"},"# 本地预览，默认端口8080"),t("\nlive-server\n"),a("span",{class:"token comment"},"# 指定端口"),t("\nlive-server --port "),a("span",{class:"token number"},"9000"),t("\n")])])],-1),y=a("h3",{id:"分析构建文件体积"},[a("a",{class:"header-anchor",href:"#分析构建文件体积","aria-hidden":"true"},"#"),t(" 分析构建文件体积")],-1),I=a("p",null,[t("如果你的构建文件很大，可以通过项目内置 "),a("a",{href:"https://github.com/doesdev/rollup-plugin-analyzer",target:"_blank",rel:"noopener noreferrer"},"rollup-plugin-analyzer"),t(" 插件进行代码体积分析，从而优化你的代码。")],-1),T=a("div",{class:"language-bash"},[a("pre",null,[a("code",null,[a("span",{class:"token function"},"yarn"),t(" report\n\n")])])],-1),P=a("p",null,"运行之后，在自动打开的页面可以看到具体的体积分布，以分析哪些依赖有问题。",-1),E=a("div",{class:"tip custom-block"},[a("p",{class:"custom-block-title"},"TIP"),a("p",null,"左上角可以切换 显示 gzip 或者 brotli")],-1),w=a("p",null,[a("img",{src:"/docs/images/report.png",alt:""})],-1),C=a("h2",{id:"压缩"},[a("a",{class:"header-anchor",href:"#压缩","aria-hidden":"true"},"#"),t(" 压缩")],-1),A=a("h3",{id:"开启-gzip-压缩"},[a("a",{class:"header-anchor",href:"#开启-gzip-压缩","aria-hidden":"true"},"#"),t(" 开启 gzip 压缩")],-1),H=a("p",null,[t("开启 gzip，并配合 nginx 的 "),a("code",null,"gzip_static"),t(" 功能可以大大加快页面访问速度")],-1),j=a("div",{class:"tip custom-block"},[a("p",{class:"custom-block-title"},"TIP"),a("p",null,[t("只需开启 "),a("code",null,"VITE_BUILD_COMPRESS='gzip'"),t(" 即可在打包的同时生成 .gz 文件")])],-1),L=a("div",{class:"language-bash"},[a("pre",null,[a("code",null,[a("span",{class:"token comment"},"# 根据自己路径来配置更改"),t("\n"),a("span",{class:"token comment"},"# 例如部署在nginx /next/路径下  则VITE_PUBLIC_PATH=/next/"),t("\n"),a("span",{class:"token assign-left variable"},"VITE_PUBLIC_PATH"),a("span",{class:"token operator"},"="),t("/\n")])])],-1),V=a("h3",{id:"开启-brotli-压缩"},[a("a",{class:"header-anchor",href:"#开启-brotli-压缩","aria-hidden":"true"},"#"),t(" 开启 brotli 压缩")],-1),U=a("p",null,"brotli 是比 gzip 压缩率更高的算法，可以与 gzip 共存不会冲突，需要 nginx 安装指定模块并开启即可。",-1),B=a("div",{class:"tip custom-block"},[a("p",{class:"custom-block-title"},"TIP"),a("p",null,[t("只需开启 "),a("code",null,"VITE_BUILD_COMPRESS='brotli'"),t(" 即可在打包的同时生成 .br 文件")])],-1),S=a("div",{class:"language-bash"},[a("pre",null,[a("code",null,[a("span",{class:"token comment"},"# 根据自己路径来配置更改"),t("\n"),a("span",{class:"token comment"},"# 例如部署在nginx /next/路径下  则VITE_PUBLIC_PATH=/next/"),t("\n"),a("span",{class:"token assign-left variable"},"VITE_PUBLIC_PATH"),a("span",{class:"token operator"},"="),t("/\n")])])],-1),$=a("h3",{id:"同时开启-gzip-与-brotli"},[a("a",{class:"header-anchor",href:"#同时开启-gzip-与-brotli","aria-hidden":"true"},"#"),t(" 同时开启 gzip 与 brotli")],-1),M=a("p",null,[t("只需开启 "),a("code",null,"VITE_BUILD_COMPRESS='brotli,gzip'"),t(" 即可在打包的同时生成 "),a("code",null,".gz"),t(" 和 "),a("code",null,".br"),t(" 文件。")],-1),O=a("h3",{id:"gzip-与-brotli-在-nginx-内的配置"},[a("a",{class:"header-anchor",href:"#gzip-与-brotli-在-nginx-内的配置","aria-hidden":"true"},"#"),t(" gzip 与 brotli 在 nginx 内的配置")],-1),R=a("div",{class:"language-bash"},[a("pre",null,[a("code",null,[t("http "),a("span",{class:"token punctuation"},"{"),t("\n  "),a("span",{class:"token comment"},"# 开启gzip"),t("\n  "),a("span",{class:"token function"},"gzip"),t(" on"),a("span",{class:"token punctuation"},";"),t("\n  "),a("span",{class:"token comment"},"# 开启gzip_static"),t("\n  "),a("span",{class:"token comment"},"# gzip_static 开启后可能会报错，需要安装相应的模块, 具体安装方式可以自行查询"),t("\n  "),a("span",{class:"token comment"},"# 只有这个开启，vue文件打包的.gz文件才会有效果，否则不需要开启gzip进行打包"),t("\n  gzip_static on"),a("span",{class:"token punctuation"},";"),t("\n  gzip_proxied any"),a("span",{class:"token punctuation"},";"),t("\n  gzip_min_length 1k"),a("span",{class:"token punctuation"},";"),t("\n  gzip_buffers "),a("span",{class:"token number"},"4"),t(" 16k"),a("span",{class:"token punctuation"},";"),t("\n  "),a("span",{class:"token comment"},"#如果nginx中使用了多层代理 必须设置这个才可以开启gzip。"),t("\n  gzip_http_version "),a("span",{class:"token number"},"1.0"),a("span",{class:"token punctuation"},";"),t("\n  gzip_comp_level "),a("span",{class:"token number"},"2"),a("span",{class:"token punctuation"},";"),t("\n  gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png"),a("span",{class:"token punctuation"},";"),t("\n  gzip_vary off"),a("span",{class:"token punctuation"},";"),t("\n  gzip_disable "),a("span",{class:"token string"},'"MSIE [1-6]\\."'),a("span",{class:"token punctuation"},";"),t("\n\n  "),a("span",{class:"token comment"},"# 开启 brotli压缩"),t("\n  "),a("span",{class:"token comment"},"# 需要安装对应的nginx模块,具体安装方式可以自行查询"),t("\n  "),a("span",{class:"token comment"},"# 可以与gzip共存不会冲突"),t("\n  brotli on"),a("span",{class:"token punctuation"},";"),t("\n  brotli_comp_level "),a("span",{class:"token number"},"6"),a("span",{class:"token punctuation"},";"),t("\n  brotli_buffers "),a("span",{class:"token number"},"16"),t(" 8k"),a("span",{class:"token punctuation"},";"),t("\n  brotli_min_length "),a("span",{class:"token number"},"20"),a("span",{class:"token punctuation"},";"),t("\n  brotli_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript application/javascript image/svg+xml"),a("span",{class:"token punctuation"},";"),t("\n"),a("span",{class:"token punctuation"},"}"),t("\n")])])],-1),W=a("h2",{id:"部署"},[a("a",{class:"header-anchor",href:"#部署","aria-hidden":"true"},"#"),t(" 部署")],-1),G=a("div",{class:"danger custom-block"},[a("p",{class:"custom-block-title"},"注意"),a("p",null,"项目默认是在生产环境开启 Mock，这样做非常不好，只是为了演示环境有数据，不建议在生产环境使用 Mock，而应该使用真实的后台接口，并将 Mock 关闭。")],-1),D=a("h3",{id:"发布"},[a("a",{class:"header-anchor",href:"#发布","aria-hidden":"true"},"#"),t(" 发布")],-1),X=a("p",null,"简单的部署只需要将最终生成的静态文件，dist 文件夹的静态文件发布到你的 cdn 或者静态服务器即可，需要注意的是其中的 index.html 通常会是你后台服务的入口页面，在确定了 js 和 css 的静态之后可能需要改变页面的引入路径。",-1),q=a("p",null,"例如上传到 nginx",-1),F=a("p",null,[a("code",null,"/srv/www/project/index.html")],-1),Y=a("div",{class:"language-bash"},[a("pre",null,[a("code",null,[a("span",{class:"token comment"},"# nginx配置"),t("\nlocation / "),a("span",{class:"token punctuation"},"{"),t("\n  "),a("span",{class:"token comment"},"# 不缓存html，防止程序更新后缓存继续生效"),t("\n  "),a("span",{class:"token keyword"},"if"),t(),a("span",{class:"token punctuation"},"("),a("span",{class:"token variable"},"$request_filename"),t(" ~* .*"),a("span",{class:"token punctuation"},"\\"),t("."),a("span",{class:"token punctuation"},"("),t("?:htm"),a("span",{class:"token operator"},"|"),t("html"),a("span",{class:"token punctuation"},")"),t("$"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n    add_header Cache-Control "),a("span",{class:"token string"},'"private, no-store, no-cache, must-revalidate, proxy-revalidate"'),a("span",{class:"token punctuation"},";"),t("\n    access_log on"),a("span",{class:"token punctuation"},";"),t("\n  "),a("span",{class:"token punctuation"},"}"),t("\n  "),a("span",{class:"token comment"},"# 这里是vue打包文件dist内的文件的存放路径"),t("\n  root   /srv/www/project/"),a("span",{class:"token punctuation"},";"),t("\n  index  index.html index.htm"),a("span",{class:"token punctuation"},";"),t("\n"),a("span",{class:"token punctuation"},"}"),t("\n\n")])])],-1),N=a("p",null,[a("strong",null,[t("部署时可能会发现资源路径不对，只需要修改"),a("code",null,".env.production"),t("文件即可。")])],-1),J=a("div",{class:"language-bash"},[a("pre",null,[a("code",null,[a("span",{class:"token comment"},"# 根据自己路径来配置更改"),t("\n"),a("span",{class:"token comment"},"# 注意需要以 / 开头和结尾"),t("\n"),a("span",{class:"token assign-left variable"},"VITE_PUBLIC_PATH"),a("span",{class:"token operator"},"="),t("/\n"),a("span",{class:"token assign-left variable"},"VITE_PUBLIC_PATH"),a("span",{class:"token operator"},"="),t("/xxx/\n")])])],-1),K=a("h3",{id:"前端路由与服务端的结合"},[a("a",{class:"header-anchor",href:"#前端路由与服务端的结合","aria-hidden":"true"},"#"),t(" 前端路由与服务端的结合")],-1),Q=a("p",null,"项目前端路由使用的是 vue-router，所以你可以选择两种方式：history 和 hash。",-1),Z=a("ul",null,[a("li",null,[a("strong",null,"hash"),t(" 默认会在 url 后面拼接"),a("code",null,"#")]),a("li",null,[a("strong",null,"history"),t(" 则不会，不过 "),a("code",null,"history"),t(" 需要服务器配合")])],-1),nn=a("p",null,[t("可在 "),a("a",{href:"https://github.com/jekip/naive-ui-admin.git/tree/main/src/router/index.ts",target:"_blank",rel:"noopener noreferrer"},"src/router/index.ts"),t(" 内进行 mode 修改")],-1),sn=a("div",{class:"language-ts"},[a("pre",null,[a("code",null,[a("span",{class:"token keyword"},"import"),t(),a("span",{class:"token punctuation"},"{"),t(" createRouter"),a("span",{class:"token punctuation"},","),t(" createWebHashHistory"),a("span",{class:"token punctuation"},","),t(" createWebHistory "),a("span",{class:"token punctuation"},"}"),t(),a("span",{class:"token keyword"},"from"),t(),a("span",{class:"token string"},"'vue-router'"),a("span",{class:"token punctuation"},";"),t("\n\n"),a("span",{class:"token function"},"createRouter"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),t("\n  history"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token function"},"createWebHashHistory"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},","),t("\n  "),a("span",{class:"token comment"},"// or"),t("\n  history"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token function"},"createWebHistory"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},","),t("\n"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n")])])],-1),an=a("h3",{id:"history-路由模式下服务端配置"},[a("a",{class:"header-anchor",href:"#history-路由模式下服务端配置","aria-hidden":"true"},"#"),t(" history 路由模式下服务端配置")],-1),tn=a("p",null,[t("开启 history 模式需要服务器配置，更多的服务器配置详情可以看 "),a("a",{href:"https://next.router.vuejs.org/guide/essentials/history-mode.html#html5-mode",target:"_blank",rel:"noopener noreferrer"},"history-mode")],-1),en=a("p",null,"这里以 nginx 配置为例",-1),ln=a("p",null,[a("strong",null,"部署到根目录")],-1),on=a("div",{class:"language-bash"},[a("pre",null,[a("code",null,[t("server "),a("span",{class:"token punctuation"},"{"),t("\n  listen "),a("span",{class:"token number"},"80"),a("span",{class:"token punctuation"},";"),t("\n  location / "),a("span",{class:"token punctuation"},"{"),t("\n    "),a("span",{class:"token comment"},"# 用于配合 History 使用"),t("\n    try_files "),a("span",{class:"token variable"},"$uri"),t(),a("span",{class:"token variable"},"$uri"),t("/ /index.html"),a("span",{class:"token punctuation"},";"),t("\n  "),a("span",{class:"token punctuation"},"}"),t("\n"),a("span",{class:"token punctuation"},"}"),t("\n")])])],-1),cn=a("p",null,[a("strong",null,"部署到非根目录")],-1),pn=a("ol",null,[a("li",null,"首先需要在打包的时候更改配置")],-1),un=a("div",{class:"language-bash"},[a("pre",null,[a("code",null,[a("span",{class:"token comment"},"# 在.env.production内，配置子目录路径"),t("\nVITE_PUBLIC_PATH "),a("span",{class:"token operator"},"="),t(" /sub/\n")])])],-1),rn=a("div",{class:"language-bash"},[a("pre",null,[a("code",null,[t("server "),a("span",{class:"token punctuation"},"{"),t("\n    listen       "),a("span",{class:"token number"},"80"),a("span",{class:"token punctuation"},";"),t("\n    server_name  localhost"),a("span",{class:"token punctuation"},";"),t("\n    location /sub/ "),a("span",{class:"token punctuation"},"{"),t("\n      "),a("span",{class:"token comment"},"# 这里是vue打包文件dist内的文件的存放路径"),t("\n      "),a("span",{class:"token builtin class-name"},"alias"),t("   /srv/www/project/"),a("span",{class:"token punctuation"},";"),t("\n      index index.html index.htm"),a("span",{class:"token punctuation"},";"),t("\n      try_files "),a("span",{class:"token variable"},"$uri"),t(),a("span",{class:"token variable"},"$uri"),t("/ /sub/index.html"),a("span",{class:"token punctuation"},";"),t("\n    "),a("span",{class:"token punctuation"},"}"),t("\n"),a("span",{class:"token punctuation"},"}"),t("\n")])])],-1),dn=a("h3",{id:"使用-nginx-处理跨域"},[a("a",{class:"header-anchor",href:"#使用-nginx-处理跨域","aria-hidden":"true"},"#"),t(" 使用 nginx 处理跨域")],-1),kn=a("p",null,"使用 nginx 处理项目部署后的跨域问题",-1),hn=a("ol",null,[a("li",null,"配置前端项目接口地址")],-1),gn=a("div",{class:"language-bash"},[a("pre",null,[a("code",null,[a("span",{class:"token comment"},"# 在.env.production内，配置接口地址"),t("\n"),a("span",{class:"token assign-left variable"},"VITE_GLOB_API_URL"),a("span",{class:"token operator"},"="),t("/api\n")])])],-1),mn=a("ol",{start:"2"},[a("li",null,"在 nginx 配置请求转发到后台")],-1),bn=a("div",{class:"language-bash"},[a("pre",null,[a("code",null,[t("server "),a("span",{class:"token punctuation"},"{"),t("\n  listen       "),a("span",{class:"token number"},"8080"),a("span",{class:"token punctuation"},";"),t("\n  server_name  localhost"),a("span",{class:"token punctuation"},";"),t("\n  "),a("span",{class:"token comment"},"# 接口代理，用于解决跨域问题"),t("\n  location /api "),a("span",{class:"token punctuation"},"{"),t("\n    proxy_set_header Host "),a("span",{class:"token variable"},"$host"),a("span",{class:"token punctuation"},";"),t("\n    proxy_set_header X-Real-IP "),a("span",{class:"token variable"},"$remote_addr"),a("span",{class:"token punctuation"},";"),t("\n    proxy_set_header X-Forwarded-For "),a("span",{class:"token variable"},"$proxy_add_x_forwarded_for"),a("span",{class:"token punctuation"},";"),t("\n    "),a("span",{class:"token comment"},"# 后台接口地址"),t("\n    proxy_pass http://110.110.1.1:8080/api"),a("span",{class:"token punctuation"},";"),t("\n    proxy_redirect default"),a("span",{class:"token punctuation"},";"),t("\n    add_header Access-Control-Allow-Origin *"),a("span",{class:"token punctuation"},";"),t("\n    add_header Access-Control-Allow-Headers X-Requested-With"),a("span",{class:"token punctuation"},";"),t("\n    add_header Access-Control-Allow-Methods GET,POST,OPTIONS"),a("span",{class:"token punctuation"},";"),t("\n  "),a("span",{class:"token punctuation"},"}"),t("\n"),a("span",{class:"token punctuation"},"}"),t("\n")])])],-1);l.render=function(a,t,e,l,vn,_n){return n(),s("div",null,[o,c,i,p,u,r,d,k,h,g,m,b,v,_,x,f,z,y,I,T,P,E,w,C,A,H,j,L,V,U,B,S,$,M,O,R,W,G,D,X,q,F,Y,N,J,K,Q,Z,nn,sn,an,tn,en,ln,on,cn,pn,un,rn,dn,kn,hn,gn,mn,bn])};export default l;export{e as __pageData};
