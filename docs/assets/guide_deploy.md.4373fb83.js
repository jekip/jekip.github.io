import{_ as s,c as n,o as a,a as l}from"./app.97352854.js";const p="/report.png",C=JSON.parse('{"title":"\u6784\u5EFA&\u90E8\u7F72","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6784\u5EFA","slug":"\u6784\u5EFA","link":"#\u6784\u5EFA","children":[{"level":3,"title":"\u65E7\u7248\u6D4F\u89C8\u5668\u517C\u5BB9","slug":"\u65E7\u7248\u6D4F\u89C8\u5668\u517C\u5BB9","link":"#\u65E7\u7248\u6D4F\u89C8\u5668\u517C\u5BB9","children":[]},{"level":3,"title":"\u9884\u89C8","slug":"\u9884\u89C8","link":"#\u9884\u89C8","children":[]},{"level":3,"title":"\u5206\u6790\u6784\u5EFA\u6587\u4EF6\u4F53\u79EF","slug":"\u5206\u6790\u6784\u5EFA\u6587\u4EF6\u4F53\u79EF","link":"#\u5206\u6790\u6784\u5EFA\u6587\u4EF6\u4F53\u79EF","children":[]}]},{"level":2,"title":"\u538B\u7F29","slug":"\u538B\u7F29","link":"#\u538B\u7F29","children":[{"level":3,"title":"\u5F00\u542F gzip \u538B\u7F29","slug":"\u5F00\u542F-gzip-\u538B\u7F29","link":"#\u5F00\u542F-gzip-\u538B\u7F29","children":[]},{"level":3,"title":"\u5F00\u542F brotli \u538B\u7F29","slug":"\u5F00\u542F-brotli-\u538B\u7F29","link":"#\u5F00\u542F-brotli-\u538B\u7F29","children":[]},{"level":3,"title":"\u540C\u65F6\u5F00\u542F gzip \u4E0E brotli","slug":"\u540C\u65F6\u5F00\u542F-gzip-\u4E0E-brotli","link":"#\u540C\u65F6\u5F00\u542F-gzip-\u4E0E-brotli","children":[]},{"level":3,"title":"gzip \u4E0E brotli \u5728 nginx \u5185\u7684\u914D\u7F6E","slug":"gzip-\u4E0E-brotli-\u5728-nginx-\u5185\u7684\u914D\u7F6E","link":"#gzip-\u4E0E-brotli-\u5728-nginx-\u5185\u7684\u914D\u7F6E","children":[]}]},{"level":2,"title":"\u90E8\u7F72","slug":"\u90E8\u7F72","link":"#\u90E8\u7F72","children":[{"level":3,"title":"\u53D1\u5E03","slug":"\u53D1\u5E03","link":"#\u53D1\u5E03","children":[]},{"level":3,"title":"\u524D\u7AEF\u8DEF\u7531\u4E0E\u670D\u52A1\u7AEF\u7684\u7ED3\u5408","slug":"\u524D\u7AEF\u8DEF\u7531\u4E0E\u670D\u52A1\u7AEF\u7684\u7ED3\u5408","link":"#\u524D\u7AEF\u8DEF\u7531\u4E0E\u670D\u52A1\u7AEF\u7684\u7ED3\u5408","children":[]},{"level":3,"title":"history \u8DEF\u7531\u6A21\u5F0F\u4E0B\u670D\u52A1\u7AEF\u914D\u7F6E","slug":"history-\u8DEF\u7531\u6A21\u5F0F\u4E0B\u670D\u52A1\u7AEF\u914D\u7F6E","link":"#history-\u8DEF\u7531\u6A21\u5F0F\u4E0B\u670D\u52A1\u7AEF\u914D\u7F6E","children":[]},{"level":3,"title":"\u4F7F\u7528 nginx \u5904\u7406\u8DE8\u57DF","slug":"\u4F7F\u7528-nginx-\u5904\u7406\u8DE8\u57DF","link":"#\u4F7F\u7528-nginx-\u5904\u7406\u8DE8\u57DF","children":[]}]}],"relativePath":"guide/deploy.md"}'),e={name:"guide/deploy.md"},o=l(`<h1 id="\u6784\u5EFA-\u90E8\u7F72" tabindex="-1">\u6784\u5EFA&amp;\u90E8\u7F72 <a class="header-anchor" href="#\u6784\u5EFA-\u90E8\u7F72" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\u524D\u8A00</p><p>\u7531\u4E8E\u662F\u5C55\u793A\u9879\u76EE\uFF0C\u6240\u4EE5\u6253\u5305\u540E\u53EF\u80FD\u8F83\u5927\uFF0C\u5982\u679C\u9879\u76EE\u4E2D\u6CA1\u6709\u7528\u5230\u7684\u63D2\u4EF6\uFF0C\u53EF\u4EE5\u5220\u9664\u5BF9\u5E94\u7684\u6587\u4EF6\u6216\u8005\u8DEF\u7531\uFF0C\u4E0D\u5F15\u7528\u5373\u53EF\uFF0C\u6CA1\u6709\u5F15\u7528\u5C31\u4E0D\u4F1A\u6253\u5305\u3002</p></div><h2 id="\u6784\u5EFA" tabindex="-1">\u6784\u5EFA <a class="header-anchor" href="#\u6784\u5EFA" aria-hidden="true">#</a></h2><p>\u9879\u76EE\u5F00\u53D1\u5B8C\u6210\u4E4B\u540E\uFF0C\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u8FDB\u884C\u6784\u5EFA</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn build</span></span>
<span class="line"></span></code></pre></div><p>\u6784\u5EFA\u6253\u5305\u6210\u529F\u4E4B\u540E\uFF0C\u4F1A\u5728\u6839\u76EE\u5F55\u751F\u6210 dist \u6587\u4EF6\u5939\uFF0C\u91CC\u9762\u5C31\u662F\u6784\u5EFA\u6253\u5305\u597D\u7684\u6587\u4EF6</p><h3 id="\u65E7\u7248\u6D4F\u89C8\u5668\u517C\u5BB9" tabindex="-1">\u65E7\u7248\u6D4F\u89C8\u5668\u517C\u5BB9 <a class="header-anchor" href="#\u65E7\u7248\u6D4F\u89C8\u5668\u517C\u5BB9" aria-hidden="true">#</a></h3><p>\u5728 <strong>.env.production</strong> \u5185</p><p>\u8BBE\u7F6E <code>VITE_LEGACY=true</code> \u5373\u53EF\u6253\u5305\u51FA\u517C\u5BB9\u65E7\u7248\u6D4F\u89C8\u5668\u7684\u4EE3\u7801</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">VITE_LEGACY = </span><span style="color:#82AAFF;">true</span></span>
<span class="line"></span></code></pre></div><h3 id="\u9884\u89C8" tabindex="-1">\u9884\u89C8 <a class="header-anchor" href="#\u9884\u89C8" aria-hidden="true">#</a></h3><p>\u53D1\u5E03\u4E4B\u524D\u53EF\u4EE5\u5728\u672C\u5730\u8FDB\u884C\u9884\u89C8\uFF0C\u6709\u591A\u79CD\u65B9\u5F0F\uFF0C\u8FD9\u91CC\u4ECB\u7ECD\u4E24\u79CD</p><p><strong>\u4E0D\u80FD\u76F4\u63A5\u6253\u5F00\u6784\u5EFA\u540E\u7684 html \u6587\u4EF6</strong></p><ul><li>\u4F7F\u7528\u9879\u76EE\u81EA\u5B9A\u7684\u547D\u4EE4\u8FDB\u884C\u9884\u89C8(\u63A8\u8350)</li></ul><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># \u5148\u6253\u5305\u5728\u8FDB\u884C\u9884\u89C8</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn preview</span></span>
<span class="line"><span style="color:#676E95;"># \u76F4\u63A5\u9884\u89C8\u672C\u5730 dist \u6587\u4EF6\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn preview:dist</span></span>
<span class="line"></span></code></pre></div><ul><li>\u672C\u5730\u670D\u52A1\u5668\u9884\u89C8(\u901A\u8FC7 live-server)</li></ul><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># 1.\u5168\u5C40\u5B89\u88C5live-server</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn global add live-server</span></span>
<span class="line"><span style="color:#676E95;"># 2. \u8FDB\u5165\u6253\u5305\u7684\u540E\u76EE\u5F55</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> ./dist</span></span>
<span class="line"><span style="color:#676E95;"># \u672C\u5730\u9884\u89C8\uFF0C\u9ED8\u8BA4\u7AEF\u53E38080</span></span>
<span class="line"><span style="color:#A6ACCD;">live-server</span></span>
<span class="line"><span style="color:#676E95;"># \u6307\u5B9A\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">live-server --port 9000</span></span>
<span class="line"></span></code></pre></div><h3 id="\u5206\u6790\u6784\u5EFA\u6587\u4EF6\u4F53\u79EF" tabindex="-1">\u5206\u6790\u6784\u5EFA\u6587\u4EF6\u4F53\u79EF <a class="header-anchor" href="#\u5206\u6790\u6784\u5EFA\u6587\u4EF6\u4F53\u79EF" aria-hidden="true">#</a></h3><p>\u5982\u679C\u4F60\u7684\u6784\u5EFA\u6587\u4EF6\u5F88\u5927\uFF0C\u53EF\u4EE5\u901A\u8FC7\u9879\u76EE\u5185\u7F6E <a href="https://github.com/doesdev/rollup-plugin-analyzer" target="_blank" rel="noreferrer">rollup-plugin-analyzer</a> \u63D2\u4EF6\u8FDB\u884C\u4EE3\u7801\u4F53\u79EF\u5206\u6790\uFF0C\u4ECE\u800C\u4F18\u5316\u4F60\u7684\u4EE3\u7801\u3002</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn report</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>\u8FD0\u884C\u4E4B\u540E\uFF0C\u5728\u81EA\u52A8\u6253\u5F00\u7684\u9875\u9762\u53EF\u4EE5\u770B\u5230\u5177\u4F53\u7684\u4F53\u79EF\u5206\u5E03\uFF0C\u4EE5\u5206\u6790\u54EA\u4E9B\u4F9D\u8D56\u6709\u95EE\u9898\u3002</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5DE6\u4E0A\u89D2\u53EF\u4EE5\u5207\u6362 \u663E\u793A gzip \u6216\u8005 brotli</p></div><p><img src="`+p+`" alt=""></p><h2 id="\u538B\u7F29" tabindex="-1">\u538B\u7F29 <a class="header-anchor" href="#\u538B\u7F29" aria-hidden="true">#</a></h2><h3 id="\u5F00\u542F-gzip-\u538B\u7F29" tabindex="-1">\u5F00\u542F gzip \u538B\u7F29 <a class="header-anchor" href="#\u5F00\u542F-gzip-\u538B\u7F29" aria-hidden="true">#</a></h3><p>\u5F00\u542F gzip\uFF0C\u5E76\u914D\u5408 nginx \u7684 <code>gzip_static</code> \u529F\u80FD\u53EF\u4EE5\u5927\u5927\u52A0\u5FEB\u9875\u9762\u8BBF\u95EE\u901F\u5EA6</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u53EA\u9700\u5F00\u542F <code>VITE_BUILD_COMPRESS=&#39;gzip&#39;</code> \u5373\u53EF\u5728\u6253\u5305\u7684\u540C\u65F6\u751F\u6210 .gz \u6587\u4EF6</p></div><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># \u6839\u636E\u81EA\u5DF1\u8DEF\u5F84\u6765\u914D\u7F6E\u66F4\u6539</span></span>
<span class="line"><span style="color:#676E95;"># \u4F8B\u5982\u90E8\u7F72\u5728nginx /next/\u8DEF\u5F84\u4E0B  \u5219VITE_PUBLIC_PATH=/next/</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_PUBLIC_PATH=/</span></span>
<span class="line"></span></code></pre></div><h3 id="\u5F00\u542F-brotli-\u538B\u7F29" tabindex="-1">\u5F00\u542F brotli \u538B\u7F29 <a class="header-anchor" href="#\u5F00\u542F-brotli-\u538B\u7F29" aria-hidden="true">#</a></h3><p>brotli \u662F\u6BD4 gzip \u538B\u7F29\u7387\u66F4\u9AD8\u7684\u7B97\u6CD5\uFF0C\u53EF\u4EE5\u4E0E gzip \u5171\u5B58\u4E0D\u4F1A\u51B2\u7A81\uFF0C\u9700\u8981 nginx \u5B89\u88C5\u6307\u5B9A\u6A21\u5757\u5E76\u5F00\u542F\u5373\u53EF\u3002</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u53EA\u9700\u5F00\u542F <code>VITE_BUILD_COMPRESS=&#39;brotli&#39;</code> \u5373\u53EF\u5728\u6253\u5305\u7684\u540C\u65F6\u751F\u6210 .br \u6587\u4EF6</p></div><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># \u6839\u636E\u81EA\u5DF1\u8DEF\u5F84\u6765\u914D\u7F6E\u66F4\u6539</span></span>
<span class="line"><span style="color:#676E95;"># \u4F8B\u5982\u90E8\u7F72\u5728nginx /next/\u8DEF\u5F84\u4E0B  \u5219VITE_PUBLIC_PATH=/next/</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_PUBLIC_PATH=/</span></span>
<span class="line"></span></code></pre></div><h3 id="\u540C\u65F6\u5F00\u542F-gzip-\u4E0E-brotli" tabindex="-1">\u540C\u65F6\u5F00\u542F gzip \u4E0E brotli <a class="header-anchor" href="#\u540C\u65F6\u5F00\u542F-gzip-\u4E0E-brotli" aria-hidden="true">#</a></h3><p>\u53EA\u9700\u5F00\u542F <code>VITE_BUILD_COMPRESS=&#39;brotli,gzip&#39;</code> \u5373\u53EF\u5728\u6253\u5305\u7684\u540C\u65F6\u751F\u6210 <code>.gz</code> \u548C <code>.br</code> \u6587\u4EF6\u3002</p><h3 id="gzip-\u4E0E-brotli-\u5728-nginx-\u5185\u7684\u914D\u7F6E" tabindex="-1">gzip \u4E0E brotli \u5728 nginx \u5185\u7684\u914D\u7F6E <a class="header-anchor" href="#gzip-\u4E0E-brotli-\u5728-nginx-\u5185\u7684\u914D\u7F6E" aria-hidden="true">#</a></h3><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">http </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># \u5F00\u542Fgzip</span></span>
<span class="line"><span style="color:#A6ACCD;">  gzip on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># \u5F00\u542Fgzip_static</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># gzip_static \u5F00\u542F\u540E\u53EF\u80FD\u4F1A\u62A5\u9519\uFF0C\u9700\u8981\u5B89\u88C5\u76F8\u5E94\u7684\u6A21\u5757, \u5177\u4F53\u5B89\u88C5\u65B9\u5F0F\u53EF\u4EE5\u81EA\u884C\u67E5\u8BE2</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># \u53EA\u6709\u8FD9\u4E2A\u5F00\u542F\uFF0Cvue\u6587\u4EF6\u6253\u5305\u7684.gz\u6587\u4EF6\u624D\u4F1A\u6709\u6548\u679C\uFF0C\u5426\u5219\u4E0D\u9700\u8981\u5F00\u542Fgzip\u8FDB\u884C\u6253\u5305</span></span>
<span class="line"><span style="color:#A6ACCD;">  gzip_static on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  gzip_proxied any</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  gzip_min_length 1k</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  gzip_buffers 4 16k</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#\u5982\u679Cnginx\u4E2D\u4F7F\u7528\u4E86\u591A\u5C42\u4EE3\u7406 \u5FC5\u987B\u8BBE\u7F6E\u8FD9\u4E2A\u624D\u53EF\u4EE5\u5F00\u542Fgzip\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">  gzip_http_version 1.0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  gzip_comp_level 2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  gzip_vary off</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  gzip_disable </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">MSIE [1-6]\\.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># \u5F00\u542F brotli\u538B\u7F29</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># \u9700\u8981\u5B89\u88C5\u5BF9\u5E94\u7684nginx\u6A21\u5757,\u5177\u4F53\u5B89\u88C5\u65B9\u5F0F\u53EF\u4EE5\u81EA\u884C\u67E5\u8BE2</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># \u53EF\u4EE5\u4E0Egzip\u5171\u5B58\u4E0D\u4F1A\u51B2\u7A81</span></span>
<span class="line"><span style="color:#A6ACCD;">  brotli on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  brotli_comp_level 6</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  brotli_buffers 16 8k</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  brotli_min_length 20</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  brotli_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript application/javascript image/svg+xml</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u90E8\u7F72" tabindex="-1">\u90E8\u7F72 <a class="header-anchor" href="#\u90E8\u7F72" aria-hidden="true">#</a></h2><div class="danger custom-block"><p class="custom-block-title">\u6CE8\u610F</p><p>\u9879\u76EE\u9ED8\u8BA4\u662F\u5728\u751F\u4EA7\u73AF\u5883\u5F00\u542F Mock\uFF0C\u8FD9\u6837\u505A\u975E\u5E38\u4E0D\u597D\uFF0C\u53EA\u662F\u4E3A\u4E86\u6F14\u793A\u73AF\u5883\u6709\u6570\u636E\uFF0C\u4E0D\u5EFA\u8BAE\u5728\u751F\u4EA7\u73AF\u5883\u4F7F\u7528 Mock\uFF0C\u800C\u5E94\u8BE5\u4F7F\u7528\u771F\u5B9E\u7684\u540E\u53F0\u63A5\u53E3\uFF0C\u5E76\u5C06 Mock \u5173\u95ED\u3002</p></div><h3 id="\u53D1\u5E03" tabindex="-1">\u53D1\u5E03 <a class="header-anchor" href="#\u53D1\u5E03" aria-hidden="true">#</a></h3><p>\u7B80\u5355\u7684\u90E8\u7F72\u53EA\u9700\u8981\u5C06\u6700\u7EC8\u751F\u6210\u7684\u9759\u6001\u6587\u4EF6\uFF0Cdist \u6587\u4EF6\u5939\u7684\u9759\u6001\u6587\u4EF6\u53D1\u5E03\u5230\u4F60\u7684 cdn \u6216\u8005\u9759\u6001\u670D\u52A1\u5668\u5373\u53EF\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\u5176\u4E2D\u7684 index.html \u901A\u5E38\u4F1A\u662F\u4F60\u540E\u53F0\u670D\u52A1\u7684\u5165\u53E3\u9875\u9762\uFF0C\u5728\u786E\u5B9A\u4E86 js \u548C css \u7684\u9759\u6001\u4E4B\u540E\u53EF\u80FD\u9700\u8981\u6539\u53D8\u9875\u9762\u7684\u5F15\u5165\u8DEF\u5F84\u3002</p><p>\u4F8B\u5982\u4E0A\u4F20\u5230 nginx</p><p><code>/srv/www/project/index.html</code></p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># nginx\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">location / </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># \u4E0D\u7F13\u5B58html\uFF0C\u9632\u6B62\u7A0B\u5E8F\u66F4\u65B0\u540E\u7F13\u5B58\u7EE7\u7EED\u751F\u6548</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">request_filename </span><span style="color:#89DDFF;">~*</span><span style="color:#A6ACCD;"> .</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">\\.</span><span style="color:#89DDFF;">(?</span><span style="color:#A6ACCD;">:htm</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">html</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">$</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    add_header Cache-Control </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">private, no-store, no-cache, must-revalidate, proxy-revalidate</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    access_log on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># \u8FD9\u91CC\u662Fvue\u6253\u5305\u6587\u4EF6dist\u5185\u7684\u6587\u4EF6\u7684\u5B58\u653E\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;">  root   /srv/www/project/</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  index  index.html index.htm</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p><strong>\u90E8\u7F72\u65F6\u53EF\u80FD\u4F1A\u53D1\u73B0\u8D44\u6E90\u8DEF\u5F84\u4E0D\u5BF9\uFF0C\u53EA\u9700\u8981\u4FEE\u6539<code>.env.production</code>\u6587\u4EF6\u5373\u53EF\u3002</strong></p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># \u6839\u636E\u81EA\u5DF1\u8DEF\u5F84\u6765\u914D\u7F6E\u66F4\u6539</span></span>
<span class="line"><span style="color:#676E95;"># \u6CE8\u610F\u9700\u8981\u4EE5 / \u5F00\u5934\u548C\u7ED3\u5C3E</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_PUBLIC_PATH=/</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_PUBLIC_PATH=/xxx/</span></span>
<span class="line"></span></code></pre></div><h3 id="\u524D\u7AEF\u8DEF\u7531\u4E0E\u670D\u52A1\u7AEF\u7684\u7ED3\u5408" tabindex="-1">\u524D\u7AEF\u8DEF\u7531\u4E0E\u670D\u52A1\u7AEF\u7684\u7ED3\u5408 <a class="header-anchor" href="#\u524D\u7AEF\u8DEF\u7531\u4E0E\u670D\u52A1\u7AEF\u7684\u7ED3\u5408" aria-hidden="true">#</a></h3><p>\u9879\u76EE\u524D\u7AEF\u8DEF\u7531\u4F7F\u7528\u7684\u662F vue-router\uFF0C\u6240\u4EE5\u4F60\u53EF\u4EE5\u9009\u62E9\u4E24\u79CD\u65B9\u5F0F\uFF1Ahistory \u548C hash\u3002</p><ul><li><strong>hash</strong> \u9ED8\u8BA4\u4F1A\u5728 url \u540E\u9762\u62FC\u63A5<code>#</code></li><li><strong>history</strong> \u5219\u4E0D\u4F1A\uFF0C\u4E0D\u8FC7 <code>history</code> \u9700\u8981\u670D\u52A1\u5668\u914D\u5408</li></ul><p>\u53EF\u5728 <a href="https://github.com/jekip/naive-ui-admin/tree/main/src/router/index.ts" target="_blank" rel="noreferrer">src/router/index.ts</a> \u5185\u8FDB\u884C mode \u4FEE\u6539</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createRouter</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createWebHashHistory</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createWebHistory</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue-router</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">createRouter</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">history</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createWebHashHistory</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// or</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">history</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createWebHistory</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="history-\u8DEF\u7531\u6A21\u5F0F\u4E0B\u670D\u52A1\u7AEF\u914D\u7F6E" tabindex="-1">history \u8DEF\u7531\u6A21\u5F0F\u4E0B\u670D\u52A1\u7AEF\u914D\u7F6E <a class="header-anchor" href="#history-\u8DEF\u7531\u6A21\u5F0F\u4E0B\u670D\u52A1\u7AEF\u914D\u7F6E" aria-hidden="true">#</a></h3><p>\u5F00\u542F history \u6A21\u5F0F\u9700\u8981\u670D\u52A1\u5668\u914D\u7F6E\uFF0C\u66F4\u591A\u7684\u670D\u52A1\u5668\u914D\u7F6E\u8BE6\u60C5\u53EF\u4EE5\u770B <a href="https://next.router.vuejs.org/guide/essentials/history-mode.html#html5-mode" target="_blank" rel="noreferrer">history-mode</a></p><p>\u8FD9\u91CC\u4EE5 nginx \u914D\u7F6E\u4E3A\u4F8B</p><p><strong>\u90E8\u7F72\u5230\u6839\u76EE\u5F55</strong></p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">server </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  listen 80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  location / </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;"># \u7528\u4E8E\u914D\u5408 History \u4F7F\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">    try_files </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">uri </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">uri/ /index.html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><strong>\u90E8\u7F72\u5230\u975E\u6839\u76EE\u5F55</strong></p><ol><li>\u9996\u5148\u9700\u8981\u5728\u6253\u5305\u7684\u65F6\u5019\u66F4\u6539\u914D\u7F6E</li></ol><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># \u5728.env.production\u5185\uFF0C\u914D\u7F6E\u5B50\u76EE\u5F55\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_PUBLIC_PATH = /sub/</span></span>
<span class="line"></span></code></pre></div><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">server </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    listen       80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    server_name  localhost</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    location /sub/ </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;"># \u8FD9\u91CC\u662Fvue\u6253\u5305\u6587\u4EF6dist\u5185\u7684\u6587\u4EF6\u7684\u5B58\u653E\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;">   /srv/www/project/</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      index index.html index.htm</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      try_files </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">uri </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">uri/ /sub/index.html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="\u4F7F\u7528-nginx-\u5904\u7406\u8DE8\u57DF" tabindex="-1">\u4F7F\u7528 nginx \u5904\u7406\u8DE8\u57DF <a class="header-anchor" href="#\u4F7F\u7528-nginx-\u5904\u7406\u8DE8\u57DF" aria-hidden="true">#</a></h3><p>\u4F7F\u7528 nginx \u5904\u7406\u9879\u76EE\u90E8\u7F72\u540E\u7684\u8DE8\u57DF\u95EE\u9898</p><ol><li>\u914D\u7F6E\u524D\u7AEF\u9879\u76EE\u63A5\u53E3\u5730\u5740</li></ol><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># \u5728.env.production\u5185\uFF0C\u914D\u7F6E\u63A5\u53E3\u5730\u5740</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_GLOB_API_URL=/api</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>\u5728 nginx \u914D\u7F6E\u8BF7\u6C42\u8F6C\u53D1\u5230\u540E\u53F0</li></ol><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">server </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  listen       8080</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  server_name  localhost</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># \u63A5\u53E3\u4EE3\u7406\uFF0C\u7528\u4E8E\u89E3\u51B3\u8DE8\u57DF\u95EE\u9898</span></span>
<span class="line"><span style="color:#A6ACCD;">  location /api </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_set_header Host </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">host</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_set_header X-Real-IP </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">remote_addr</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_set_header X-Forwarded-For </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">proxy_add_x_forwarded_for</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;"># \u540E\u53F0\u63A5\u53E3\u5730\u5740</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_pass http://110.110.1.1:8080/api</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_redirect default</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    add_header Access-Control-Allow-Origin </span><span style="color:#89DDFF;">*;</span></span>
<span class="line"><span style="color:#A6ACCD;">    add_header Access-Control-Allow-Headers X-Requested-With</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    add_header Access-Control-Allow-Methods GET,POST,OPTIONS</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,65),c=[o];function t(r,i,D,y,d,F){return a(),n("div",null,c)}const h=s(e,[["render",t]]);export{C as __pageData,h as default};
