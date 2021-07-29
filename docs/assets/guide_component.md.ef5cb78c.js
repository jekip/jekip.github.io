import{o as n,c as s,a}from"./app.7966acca.js";const t='{"title":"组件注册","description":"","frontmatter":{},"headers":[{"level":2,"title":"按需引入","slug":"按需引入"},{"level":2,"title":"tsx 文件注册","slug":"tsx-文件注册"},{"level":2,"title":"全局注册","slug":"全局注册"}],"relativePath":"guide/component.md","lastUpdated":1627468378965}',p={},e=a('<h1 id="组件注册"><a class="header-anchor" href="#组件注册" aria-hidden="true">#</a> 组件注册</h1><h2 id="按需引入"><a class="header-anchor" href="#按需引入" aria-hidden="true">#</a> 按需引入</h2><p>项目目前用到的组件，都在这引入了，需要其他的在这加即可 <a href="https://github.com/jekip/naive-ui-admin.git/tree/main/src/plugins/naive.ts" target="_blank" rel="noopener noreferrer">src/plugins/naive.ts</a>。</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NMenu <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;naive-ui&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> naive <span class="token operator">=</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    components<span class="token operator">:</span> <span class="token punctuation">[</span>\n        NMenu\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><h2 id="tsx-文件注册"><a class="header-anchor" href="#tsx-文件注册" aria-hidden="true">#</a> tsx 文件注册</h2><p><strong>tsx 文件内不能使用全局注册组件</strong></p><div class="language-jsx"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NMenu <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;naive-ui&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NMenu</span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="全局注册"><a class="header-anchor" href="#全局注册" aria-hidden="true">#</a> 全局注册</h2><p>如果不习惯按需引入方式，可以进行全局注册，可参考一下官网文档。</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> naive <span class="token keyword">from</span> <span class="token string">&#39;naive-ui&#39;</span>\n\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>naive<span class="token punctuation">)</span>\n</code></pre></div>',10);p.render=function(a,t,p,o,c,u){return n(),s("div",null,[e])};export default p;export{t as __pageData};
