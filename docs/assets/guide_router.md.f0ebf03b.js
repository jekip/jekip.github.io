import{o as n,c as s,a}from"./app.c63f43cd.js";const t='{"title":"路由","description":"","frontmatter":{},"headers":[{"level":2,"title":"配置","slug":"配置"},{"level":3,"title":"模块说明","slug":"模块说明"},{"level":3,"title":"多级路由","slug":"多级路由"},{"level":3,"title":"Meta 配置说明","slug":"meta-配置说明"},{"level":2,"title":"图标","slug":"图标"},{"level":2,"title":"新增路由","slug":"新增路由"},{"level":3,"title":"如何新增一个路由模块","slug":"如何新增一个路由模块"},{"level":3,"title":"验证","slug":"验证"},{"level":2,"title":"路由刷新","slug":"路由刷新"},{"level":3,"title":"实现","slug":"实现"},{"level":3,"title":"Redirect","slug":"redirect"},{"level":3,"title":"如何开启单个页面缓存","slug":"如何开启单个页面缓存"}],"relativePath":"guide/router.md","lastUpdated":1627605913834}',p={},o=a('<h1 id="路由"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h1><p>项目路由配置存放于 <a href="https://github.com/jekip/naive-ui-admin/tree/main/src/router" target="_blank" rel="noopener noreferrer">src/router</a> 下面。 <a href="https://github.com/jekip/naive-ui-admin.git/tree/main/src/router/modules" target="_blank" rel="noopener noreferrer">src/router/modules</a>用于存放路由模块，在该目录下的文件会自动注册。</p><h2 id="配置"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><h3 id="模块说明"><a class="header-anchor" href="#模块说明" aria-hidden="true">#</a> 模块说明</h3><p>在 <a href="https://github.com/jekip/naive-ui-admin.git/tree/main/src/router/modules" target="_blank" rel="noopener noreferrer">src/router/modules</a> 内的 <code>.ts</code> 文件会被视为一个路由模块。</p><p>一个路由模块包含以下结构</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> RouteRecordRaw <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Layout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/router/constant&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> DashboardOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vicons/antd&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> renderIcon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/index&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> routeName <span class="token operator">=</span> <span class="token string">&#39;dashboard&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> routes<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>RouteRecordRaw<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span> \n        path<span class="token operator">:</span> <span class="token string">&#39;/dashboard&#39;</span><span class="token punctuation">,</span>\n        name<span class="token operator">:</span> routeName<span class="token punctuation">,</span>\n        redirect<span class="token operator">:</span> <span class="token string">&#39;/dashboard/console&#39;</span><span class="token punctuation">,</span>\n        component<span class="token operator">:</span> Layout<span class="token punctuation">,</span>\n        meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n            title<span class="token operator">:</span> <span class="token string">&#39;Dashboard&#39;</span><span class="token punctuation">,</span>\n            icon<span class="token operator">:</span> <span class="token function">renderIcon</span><span class="token punctuation">(</span>DashboardOutlined<span class="token punctuation">)</span><span class="token punctuation">,</span>\n            permission<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;dashboard_console&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;dashboard_console&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;dashboard_workplace&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n            sort<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        children<span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n                path<span class="token operator">:</span> <span class="token string">&#39;console&#39;</span><span class="token punctuation">,</span>\n                name<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>routeName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">_console</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n                meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n                    title<span class="token operator">:</span> <span class="token string">&#39;主控台&#39;</span><span class="token punctuation">,</span>\n                    permission<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;dashboard_console&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/dashboard/console/console.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n                path<span class="token operator">:</span> <span class="token string">&#39;workplace&#39;</span><span class="token punctuation">,</span>\n                name<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>routeName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">_workplace</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n                meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n                    title<span class="token operator">:</span> <span class="token string">&#39;工作台&#39;</span><span class="token punctuation">,</span>\n                    keepAlive<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                    permission<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;dashboard_workplace&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/dashboard/workplace/workplace.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> routes<span class="token punctuation">;</span>\n</code></pre></div><h3 id="多级路由"><a class="header-anchor" href="#多级路由" aria-hidden="true">#</a> 多级路由</h3><div class="warning custom-block"><p class="custom-block-title">注意事项</p><ul><li>整个项目所有路由 <code>name</code> 不能重复</li><li>除了 layout 对应的 path 前面需要加 <code>/</code>，其余子路由都不要以<code>/</code>开头</li></ul></div><p><strong>示例</strong></p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> RouteRecordRaw <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Layout<span class="token punctuation">,</span> ParentLayout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/router/constant&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> WalletOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vicons/antd&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> renderIcon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/index&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> routeName <span class="token operator">=</span> <span class="token string">&#39;comp&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> routes<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>RouteRecordRaw<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n        path<span class="token operator">:</span> <span class="token string">&#39;/comp&#39;</span><span class="token punctuation">,</span>\n        name<span class="token operator">:</span> routeName<span class="token punctuation">,</span>\n        component<span class="token operator">:</span> Layout<span class="token punctuation">,</span>\n        redirect<span class="token operator">:</span> <span class="token string">&#39;/comp/table&#39;</span><span class="token punctuation">,</span>\n        meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n            title<span class="token operator">:</span> <span class="token string">&#39;组件示例&#39;</span><span class="token punctuation">,</span>\n            icon<span class="token operator">:</span> <span class="token function">renderIcon</span><span class="token punctuation">(</span>WalletOutlined<span class="token punctuation">)</span><span class="token punctuation">,</span>\n            sort<span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        children<span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n                path<span class="token operator">:</span> <span class="token string">&#39;table&#39;</span><span class="token punctuation">,</span>\n                name<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>routeName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">_table</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n                redirect<span class="token operator">:</span> <span class="token string">&#39;/comp/table/basic&#39;</span><span class="token punctuation">,</span>\n                component<span class="token operator">:</span> ParentLayout<span class="token punctuation">,</span>\n                meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n                    title<span class="token operator">:</span> <span class="token string">&#39;表格&#39;</span><span class="token punctuation">,</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                children<span class="token operator">:</span> <span class="token punctuation">[</span>\n                    <span class="token punctuation">{</span>\n                        path<span class="token operator">:</span> <span class="token string">&#39;basic&#39;</span><span class="token punctuation">,</span>\n                        name<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>routeName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">_table_basic</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n                        meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n                            title<span class="token operator">:</span> <span class="token string">&#39;基础表格&#39;</span><span class="token punctuation">,</span>\n                        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/comp/table/basic.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                    <span class="token punctuation">{</span>\n                        path<span class="token operator">:</span> <span class="token string">&#39;editCell&#39;</span><span class="token punctuation">,</span>\n                        name<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>routeName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">_table_editCell</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n                        meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n                            title<span class="token operator">:</span> <span class="token string">&#39;单元格编辑&#39;</span><span class="token punctuation">,</span>\n                        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/comp/table/editCell.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                    <span class="token punctuation">{</span>\n                        path<span class="token operator">:</span> <span class="token string">&#39;editRow&#39;</span><span class="token punctuation">,</span>\n                        name<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>routeName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">_table_editRow</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n                        meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n                            title<span class="token operator">:</span> <span class="token string">&#39;整行编辑&#39;</span><span class="token punctuation">,</span>\n                        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/comp/table/editRow.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token punctuation">]</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n                path<span class="token operator">:</span> <span class="token string">&#39;upload&#39;</span><span class="token punctuation">,</span>\n                name<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>routeName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">_upload</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n                meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n                    title<span class="token operator">:</span> <span class="token string">&#39;上传&#39;</span><span class="token punctuation">,</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/comp/upload/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> routes<span class="token punctuation">;</span>\n</code></pre></div><h3 id="meta-配置说明"><a class="header-anchor" href="#meta-配置说明" aria-hidden="true">#</a> Meta 配置说明</h3><div class="language-ts"><pre><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">RouteMeta</span> <span class="token punctuation">{</span>\n  <span class="token comment">//菜单名称 一般必填</span>\n  title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  <span class="token comment">//禁用菜单</span>\n  disabled<span class="token operator">:</span><span class="token builtin">boolean</span><span class="token punctuation">;</span>\n  <span class="token comment">// 菜单图标  </span>\n  icon<span class="token operator">:</span> VNode<span class="token punctuation">;</span>\n  <span class="token comment">//缓存该路由</span>\n  keepAlive<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>\n  <span class="token comment">//排序越小越排前</span>\n  sort<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="图标"><a class="header-anchor" href="#图标" aria-hidden="true">#</a> 图标</h2><p>为了简化使用，只需用renderIcon(WalletOutlined)方法，传入 <a href="https://www.xicons.org/" target="_blank" rel="noopener noreferrer">xicons</a> 中图标即可</p><h2 id="新增路由"><a class="header-anchor" href="#新增路由" aria-hidden="true">#</a> 新增路由</h2><h3 id="如何新增一个路由模块"><a class="header-anchor" href="#如何新增一个路由模块" aria-hidden="true">#</a> 如何新增一个路由模块</h3><ol><li>在 <a href="https://github.com/jekip/naive-ui-admin.git/tree/main/src/router/modules" target="_blank" rel="noopener noreferrer">src/router/modules</a> 内新增一个模块文件。</li></ol><p>示例，新增 test.ts 文件</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> RouteRecordRaw <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Layout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/router/constant&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> CheckCircleOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vicons/antd&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> renderIcon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/index&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> routes<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>RouteRecordRaw<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n        path<span class="token operator">:</span> <span class="token string">&#39;/result&#39;</span><span class="token punctuation">,</span>\n        name<span class="token operator">:</span> <span class="token string">&#39;Result&#39;</span><span class="token punctuation">,</span>\n        redirect<span class="token operator">:</span> <span class="token string">&#39;/result/success&#39;</span><span class="token punctuation">,</span>\n        component<span class="token operator">:</span> Layout<span class="token punctuation">,</span>\n        meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n            title<span class="token operator">:</span> <span class="token string">&#39;结果页面&#39;</span><span class="token punctuation">,</span>\n            icon<span class="token operator">:</span> <span class="token function">renderIcon</span><span class="token punctuation">(</span>CheckCircleOutlined<span class="token punctuation">)</span><span class="token punctuation">,</span>\n            sort<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        children<span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n                path<span class="token operator">:</span> <span class="token string">&#39;success&#39;</span><span class="token punctuation">,</span>\n                name<span class="token operator">:</span> <span class="token string">&#39;result-success&#39;</span><span class="token punctuation">,</span>\n                meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n                    title<span class="token operator">:</span> <span class="token string">&#39;成功页&#39;</span><span class="token punctuation">,</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/result/success.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> routes<span class="token punctuation">;</span>\n</code></pre></div><p>此时路由已添加完成，不需要手动引入，放在<a href="https://github.com/jekip/naive-ui-admin.git/tree/main/src/router/modules" target="_blank" rel="noopener noreferrer">src/router/modules</a> 内的文件会自动被加载。</p><h3 id="验证"><a class="header-anchor" href="#验证" aria-hidden="true">#</a> 验证</h3><p>访问 <strong>ip:端口/result/success</strong> 出现对应组件内容即代表成功</p><h2 id="路由刷新"><a class="header-anchor" href="#路由刷新" aria-hidden="true">#</a> 路由刷新</h2><p>项目中采用的是<strong>重定向</strong>方式</p><h3 id="实现"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h3><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRoute <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nrouter<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    path<span class="token operator">:</span> <span class="token string">&#39;/redirect&#39;</span> <span class="token operator">+</span> <span class="token function">unref</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span><span class="token punctuation">.</span>fullPath<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h3 id="redirect"><a class="header-anchor" href="#redirect" aria-hidden="true">#</a> Redirect</h3><p><a href="https://github.com/jekip/naive-ui-admin.git/tree/main/src/views/redirect/index.vue" target="_blank" rel="noopener noreferrer">src/views/redirect/index.vue</a></p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> onBeforeMount <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useRoute<span class="token punctuation">,</span> useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> NEmpty <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;naive-ui&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">&#39;Redirect&#39;</span><span class="token punctuation">,</span>\n    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">onBeforeMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n            <span class="token keyword">const</span> <span class="token punctuation">{</span> params<span class="token punctuation">,</span> query <span class="token punctuation">}</span> <span class="token operator">=</span> route<span class="token punctuation">;</span>\n            <span class="token keyword">const</span> <span class="token punctuation">{</span> path <span class="token punctuation">}</span> <span class="token operator">=</span> params<span class="token punctuation">;</span>\n            router<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n                path<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token operator">?</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token operator">:</span> path<span class="token punctuation">)</span><span class="token punctuation">,</span>\n                query<span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">&lt;</span>NEmpty <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h3 id="如何开启单个页面缓存"><a class="header-anchor" href="#如何开启单个页面缓存" aria-hidden="true">#</a> 如何开启单个页面缓存</h3><p>开启缓存有 3 个条件</p><ol><li>在router中meta内将<code>keepAlive</code> 设置为 <code>true</code></li><li>路由设置 <code>name</code>，且<strong>不能重复</strong></li><li>路由对应的组件加上 <code>name</code>，与路由设置的 <code>name</code> 保持一致</li></ol><div class="language-ts"><pre><code> <span class="token punctuation">{</span>\n   <span class="token operator">...</span><span class="token punctuation">,</span>\n    <span class="token comment">// name</span>\n    name<span class="token operator">:</span> <span class="token string">&#39;Login&#39;</span><span class="token punctuation">,</span>\n    <span class="token comment">// 对应组件组件的name</span>\n    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/login/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token operator">...</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  <span class="token comment">// @/views/login/index.vue</span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token comment">// 需要和路由的name一致</span>\n    name<span class="token operator">:</span><span class="token string">&quot;Login&quot;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p>keep-alive 生效的前提是：需要将路由的 <code>name</code> 属性及对应的页面的 <code>name</code> 设置成一样。因为：</p><p><strong>include - 字符串或正则表达式，只有名称匹配的组件会被缓存</strong></p></div>',35);p.render=function(a,t,p,e,c,u){return n(),s("div",null,[o])};export default p;export{t as __pageData};
