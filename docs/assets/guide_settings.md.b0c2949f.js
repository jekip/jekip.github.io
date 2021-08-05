import{o as n,c as s,a}from"./app.04752255.js";const t='{"title":"项目配置项","description":"","frontmatter":{},"headers":[{"level":2,"title":"环境变量配置","slug":"环境变量配置"},{"level":3,"title":"配置项说明","slug":"配置项说明"},{"level":3,"title":".env","slug":"env"},{"level":3,"title":".env.development","slug":"env-development"},{"level":3,"title":".env.production","slug":"env-production"},{"level":2,"title":"生产环境动态配置","slug":"生产环境动态配置"},{"level":3,"title":"说明","slug":"说明"},{"level":3,"title":"作用","slug":"作用"},{"level":3,"title":"如何获取全局变量","slug":"如何获取全局变量"},{"level":3,"title":"如何新增(新增一个可动态修改的配置项)","slug":"如何新增-新增一个可动态修改的配置项"},{"level":2,"title":"项目配置","slug":"项目配置"},{"level":3,"title":"组件配置","slug":"组件配置"},{"level":3,"title":"主题配置","slug":"主题配置"}],"relativePath":"guide/settings.md","lastUpdated":1627535852979}',p={},e=a('<h1 id="项目配置项"><a class="header-anchor" href="#项目配置项" aria-hidden="true">#</a> 项目配置项</h1><p>用于修改项目的配色、布局、缓存、多语言、组件默认配置</p><h2 id="环境变量配置"><a class="header-anchor" href="#环境变量配置" aria-hidden="true">#</a> 环境变量配置</h2><p>项目的环境变量配置位于项目根目录下的 <a href="https://github.com/jekip/naive-ui-admin/blob/main/.env" target="_blank" rel="noopener noreferrer">.env</a>、<a href="https://github.com/jekip/naive-ui-admin/blob/main/.env.development" target="_blank" rel="noopener noreferrer">.env.development</a>、<a href="https://github.com/jekip/naive-ui-admin/blob/main/.env.production" target="_blank" rel="noopener noreferrer">.env.production</a></p><p>具体可以参考 <a href="https://github.com/vitejs/vite#modes-and-environment-variables" target="_blank" rel="noopener noreferrer">Vite 文档</a></p><div class="language-bash"><pre><code>.env                <span class="token comment"># 在所有的环境中被载入</span>\n.env.local          <span class="token comment"># 在所有的环境中被载入，但会被 git 忽略</span>\n.env.<span class="token punctuation">[</span>mode<span class="token punctuation">]</span>         <span class="token comment"># 只在指定的模式中被载入</span>\n.env.<span class="token punctuation">[</span>mode<span class="token punctuation">]</span>.local   <span class="token comment"># 只在指定的模式中被载入，但会被 git 忽略</span>\n\n</code></pre></div><div class="tip custom-block"><p class="custom-block-title">温馨提醒</p><ul><li>只有以 <code>VITE_ </code> 开头的变量会被嵌入到客户端侧的包中，你可以项目代码中这样访问它们：</li></ul><div class="language-js"><pre><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_PROT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><ul><li>以 <code>VITE_GLOB_*</code> 开头的的变量，在打包的时候，会被加入<a href="#%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83%E5%8A%A8%E6%80%81%E9%85%8D%E7%BD%AE">_app.config.js</a>配置文件当中.</li></ul></div><h3 id="配置项说明"><a class="header-anchor" href="#配置项说明" aria-hidden="true">#</a> 配置项说明</h3><h3 id="env"><a class="header-anchor" href="#env" aria-hidden="true">#</a> .env</h3><p>所有环境适用</p><div class="language-bash"><pre><code><span class="token comment"># 端口号</span>\n<span class="token assign-left variable">VITE_PORT</span><span class="token operator">=</span><span class="token number">3100</span>\n<span class="token comment"># 网站标题</span>\n<span class="token assign-left variable">VITE_GLOB_APP_TITLE</span><span class="token operator">=</span>Naive Ui Admin\n<span class="token comment"># 简称，用于配置文件名字 不要出现空格、数字开头等特殊字符</span>\n<span class="token assign-left variable">VITE_GLOB_APP_SHORT_NAME</span><span class="token operator">=</span>naive_ui_admin\n</code></pre></div><h3 id="env-development"><a class="header-anchor" href="#env-development" aria-hidden="true">#</a> .env.development</h3><p>开发环境适用</p><div class="language-bash"><pre><code><span class="token comment"># 是否开启mock数据，关闭时需要自行对接后台接口</span>\n<span class="token assign-left variable">VITE_USE_MOCK</span><span class="token operator">=</span>true\n<span class="token comment"># 资源公共路径,需要以 /开头和结尾</span>\n<span class="token assign-left variable">VITE_PUBLIC_PATH</span><span class="token operator">=</span>/\n<span class="token comment"># 是否删除Console.log</span>\n<span class="token assign-left variable">VITE_DROP_CONSOLE</span><span class="token operator">=</span>false\n<span class="token comment"># 接口地址</span>\n<span class="token comment"># 如果没有跨域问题，直接在这里配置即可</span>\n<span class="token assign-left variable">VITE_GLOB_API_URL</span><span class="token operator">=</span>/api\n<span class="token comment"># 图片上传地址</span>\n<span class="token assign-left variable">VITE_GLOB_UPLOAD_URL</span><span class="token operator">=</span>/upload\n<span class="token comment"># 图片前缀地址</span>\n<span class="token assign-left variable">VITE_GLOB_IMG_URL</span><span class="token operator">=</span>/\n<span class="token comment"># 接口前缀</span>\n<span class="token assign-left variable">VITE_GLOB_API_URL_PREFIX</span><span class="token operator">=</span>\n</code></pre></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p>这里配置的 <code>VITE_PROXY</code> 以及 <code>VITE_GLOB_API_URL</code>, /api 需要是唯一的，不要和接口有的名字冲突</p><p>如果你的接口是 <code>http://localhost:3000/api</code> 之类的，请考虑将 <code>VITE_GLOB_API_URL=/xxxx</code> 换成别的名字</p></div><h3 id="env-production"><a class="header-anchor" href="#env-production" aria-hidden="true">#</a> .env.production</h3><p>生产环境适用</p><div class="language-bash"><pre><code><span class="token comment"># 是否开启mock</span>\n<span class="token assign-left variable">VITE_USE_MOCK</span><span class="token operator">=</span>true\n<span class="token comment"># 接口地址 可以由nginx做转发或者直接写实际地址</span>\n<span class="token assign-left variable">VITE_GLOB_API_URL</span><span class="token operator">=</span>/api\n<span class="token comment"># 文件上传地址 可以由nginx做转发或者直接写实际地址</span>\n<span class="token assign-left variable">VITE_GLOB_UPLOAD_URL</span><span class="token operator">=</span>/upload\n<span class="token comment"># 接口地址前缀，有些系统所有接口地址都有前缀，可以在这里统一加，方便切换</span>\n<span class="token assign-left variable">VITE_GLOB_API_URL_PREFIX</span><span class="token operator">=</span>\n<span class="token comment"># 是否删除Console.log</span>\n<span class="token assign-left variable">VITE_DROP_CONSOLE</span><span class="token operator">=</span>true\n<span class="token comment"># 资源公共路径,需要以 / 开头和结尾</span>\n<span class="token assign-left variable">VITE_PUBLIC_PATH</span><span class="token operator">=</span>/\n</code></pre></div><h2 id="生产环境动态配置"><a class="header-anchor" href="#生产环境动态配置" aria-hidden="true">#</a> 生产环境动态配置</h2><h3 id="说明"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h3><p>当执行<code>yarn build</code>构建项目之后，会自动生成 <code>_app.config.js</code> 文件并插入 <code>index.html</code>。</p><p><strong>注意: 开发环境不会生成</strong></p><div class="language-js"><pre><code><span class="token comment">// _app.config.js</span>\n<span class="token comment">// 变量名命名规则  __PRODUCTION__xxx_CONF__   xxx：为.env配置的VITE_GLOB_APP_SHORT_NAME</span>\nwindow<span class="token punctuation">.</span>__PRODUCTION__VUE_VBEN_ADMIN__CONF__ <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token constant">VITE_GLOB_APP_TITLE</span><span class="token operator">:</span> <span class="token string">&#39;Naive Ui Admin&#39;</span><span class="token punctuation">,</span>\n  <span class="token constant">VITE_GLOB_APP_SHORT_NAME</span><span class="token operator">:</span> <span class="token string">&#39;naive-ui-admin&#39;</span><span class="token punctuation">,</span>\n  <span class="token constant">VITE_GLOB_API_URL</span><span class="token operator">:</span> <span class="token string">&#39;/app&#39;</span><span class="token punctuation">,</span>\n  <span class="token constant">VITE_GLOB_API_URL_PREFIX</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>\n  <span class="token constant">VITE_GLOB_UPLOAD_URL</span><span class="token operator">:</span> <span class="token string">&#39;/upload&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div><h3 id="作用"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h3><p><code>_app.config.js</code> 用于项目在打包后，需要动态修改配置的需求，如接口地址。不用重新进行打包，可在打包后修改 <code>/dist/_app.config.js</code> 内的变量，刷新即可更新代码内的局部变量。</p><h3 id="如何获取全局变量"><a class="header-anchor" href="#如何获取全局变量" aria-hidden="true">#</a> 如何获取全局变量</h3><p>想要获取 <code>_app.config.js</code> 内的变量，可以使用 <a href="https://github.com/jekip/naive-ui-admin.git/tree/main/src/hooks/setting/index.ts" target="_blank" rel="noopener noreferrer">src/hooks/setting/index.ts</a> 提供的函数来进行获取</p><h3 id="如何新增-新增一个可动态修改的配置项"><a class="header-anchor" href="#如何新增-新增一个可动态修改的配置项" aria-hidden="true">#</a> 如何新增(新增一个可动态修改的配置项)</h3><ol><li><p>首先在 <code>.env</code> 或者对应的开发环境配置文件内，新增需要可动态配置的变量，需要以 <code>VITE_GLOB_</code>开头</p></li><li><p><code>VITE_GLOB_</code> 开头的变量会自动加入环境变量，通过在 <code>src/types/config.d.ts</code> 内修改 <code>GlobEnvConfig</code> 和 <code>GlobConfig</code> 两个环境变量的值来定义新添加的类型</p></li><li><p><a href="https://github.com/jekip/naive-ui-admin.git/tree/main/src/hooks/setting/index.ts" target="_blank" rel="noopener noreferrer">useGlobSetting</a> 函数中添加刚新增的返回值即可</p></li></ol><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span>\n  <span class="token constant">VITE_GLOB_APP_TITLE</span><span class="token punctuation">,</span>\n  <span class="token constant">VITE_GLOB_API_URL</span><span class="token punctuation">,</span>\n  <span class="token constant">VITE_GLOB_APP_SHORT_NAME</span><span class="token punctuation">,</span>\n  <span class="token constant">VITE_GLOB_API_URL_PREFIX</span><span class="token punctuation">,</span>\n  <span class="token constant">VITE_GLOB_UPLOAD_URL</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token constant">ENV</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> useGlobSetting <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">SettingWrap</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token comment">// Take global configuration</span>\n  <span class="token keyword">const</span> glob<span class="token operator">:</span> Readonly<span class="token operator">&lt;</span>GlobConfig<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n    title<span class="token operator">:</span> <span class="token constant">VITE_GLOB_APP_TITLE</span><span class="token punctuation">,</span>\n    apiUrl<span class="token operator">:</span> <span class="token constant">VITE_GLOB_API_URL</span><span class="token punctuation">,</span>\n    shortName<span class="token operator">:</span> <span class="token constant">VITE_GLOB_APP_SHORT_NAME</span><span class="token punctuation">,</span>\n    urlPrefix<span class="token operator">:</span> <span class="token constant">VITE_GLOB_API_URL_PREFIX</span><span class="token punctuation">,</span>\n    uploadUrl<span class="token operator">:</span> <span class="token constant">VITE_GLOB_UPLOAD_URL</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> glob <span class="token keyword">as</span> Readonly<span class="token operator">&lt;</span>GlobConfig<span class="token operator">&gt;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n</code></pre></div><h2 id="项目配置"><a class="header-anchor" href="#项目配置" aria-hidden="true">#</a> 项目配置</h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>项目配置文件用于配置项目内展示的内容、布局、文本等效果，该配置，暂时没有存于<code>localStorage</code>中。刷新则恢复初始值。</p></div><p><a href="https://github.com/jekip/naive-ui-admin.git/tree/main/src/settings/projectSetting.ts" target="_blank" rel="noopener noreferrer">src/settings/projectSetting.ts</a></p><div class="language-ts"><pre><code><span class="token keyword">const</span> setting <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token comment">//导航模式 vertical 左侧菜单模式 horizontal 顶部菜单模式</span>\n    navMode<span class="token operator">:</span> <span class="token string">&#39;vertical&#39;</span><span class="token punctuation">,</span>\n    <span class="token comment">//导航风格 dark 暗色侧边栏 light 白色侧边栏 header-dark 暗色顶栏</span>\n    navTheme<span class="token operator">:</span> <span class="token string">&#39;dark&#39;</span><span class="token punctuation">,</span>\n    <span class="token comment">//顶部</span>\n    headerSetting<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">//背景色</span>\n        bgColor<span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>\n        <span class="token comment">//固定顶部</span>\n        fixed<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token comment">//显示重载按钮</span>\n        isReload<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token comment">//页脚</span>\n    showFooter<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token comment">//多标签</span>\n    multiTabsSetting<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">//背景色</span>\n        bgColor<span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>\n        <span class="token comment">//是否显示</span>\n        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token comment">//固定多标签</span>\n        fixed<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token comment">//菜单</span>\n    menuSetting<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">//最小宽度</span>\n        minMenuWidth<span class="token operator">:</span> <span class="token number">64</span><span class="token punctuation">,</span>\n        <span class="token comment">//菜单宽度</span>\n        menuWidth<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>\n        <span class="token comment">//固定菜单</span>\n        fixed<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token comment">//面包屑</span>\n    crumbsSetting<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">//是否显示</span>\n        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token comment">//显示图标</span>\n        showIcon<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token comment">//菜单权限模式 ROLE 前端固定角色  BACK 动态获取</span>\n    permissionMode<span class="token operator">:</span> <span class="token string">&#39;ROLE&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> setting<span class="token punctuation">;</span>\n</code></pre></div><h3 id="组件配置"><a class="header-anchor" href="#组件配置" aria-hidden="true">#</a> 组件配置</h3><p><a href="https://github.com/jekip/naive-ui-admin.git/tree/main/src/settings/componentSetting.ts" target="_blank" rel="noopener noreferrer">src/settings/componentSetting.ts</a></p><div class="language-ts"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    table<span class="token operator">:</span> <span class="token punctuation">{</span>\n        apiSetting<span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token comment">// 当前页的字段名</span>\n            pageField<span class="token operator">:</span> <span class="token string">&#39;page&#39;</span><span class="token punctuation">,</span>\n            <span class="token comment">// 每页数量字段名</span>\n            sizeField<span class="token operator">:</span> <span class="token string">&#39;pageSize&#39;</span><span class="token punctuation">,</span>\n            <span class="token comment">// 接口返回的数据字段名</span>\n            listField<span class="token operator">:</span> <span class="token string">&#39;list&#39;</span><span class="token punctuation">,</span>\n            <span class="token comment">// 接口返回总页数字段名</span>\n            totalField<span class="token operator">:</span> <span class="token string">&#39;pageCount&#39;</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token comment">//默认分页数量</span>\n        defaultPageSize<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>\n        <span class="token comment">//可切换每页数量集合</span>\n        pageSizes<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    upload<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">//考虑接口规范不同</span>\n        apiSetting<span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token comment">// 集合字段名</span>\n            infoField<span class="token operator">:</span> <span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span>\n            <span class="token comment">// 图片地址字段名</span>\n            imgField<span class="token operator">:</span> <span class="token string">&#39;photo&#39;</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token comment">//最大上传图片大小</span>\n        maxSize<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n        <span class="token comment">//图片上传类型</span>\n        fileType<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;image/png&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;image/jpg&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;image/jpeg&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;image/gif&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;image/svg+xml&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div><h3 id="主题配置"><a class="header-anchor" href="#主题配置" aria-hidden="true">#</a> 主题配置</h3><p><a href="https://github.com/jekip/naive-ui-admin.git/tree/main/src/settings/designSetting.ts" target="_blank" rel="noopener noreferrer">src/settings/designSetting.ts</a></p><div class="language-ts"><pre><code><span class="token comment">// app theme preset color</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> appThemeList<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token string">&#39;#2d8cf0&#39;</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;#0960bd&#39;</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;#0084f4&#39;</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;#009688&#39;</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;#536dfe&#39;</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;#ff5c93&#39;</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;#ee4f12&#39;</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;#0096c7&#39;</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;#9c27b0&#39;</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;#ff9800&#39;</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;#FF3D68&#39;</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;#00C1D4&#39;</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;#71EFA3&#39;</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;#171010&#39;</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;#78DEC7&#39;</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;#1768AC&#39;</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;#FB9300&#39;</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;#FC5404&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> setting <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token comment">//深色主题</span>\n    darkTheme<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token comment">//系统主题色</span>\n    appTheme<span class="token operator">:</span> <span class="token string">&#39;#2d8cf0&#39;</span><span class="token punctuation">,</span>\n    <span class="token comment">//系统内置主题色列表</span>\n    appThemeList<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> setting<span class="token punctuation">;</span>\n</code></pre></div>',40);p.render=function(a,t,p,o,c,l){return n(),s("div",null,[e])};export default p;export{t as __pageData};
