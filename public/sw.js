if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/0c428ae2-9701771574bd15a6.js",revision:"9701771574bd15a6"},{url:"/_next/static/chunks/11-a15d8c2686f111ec.js",revision:"a15d8c2686f111ec"},{url:"/_next/static/chunks/1bfc9850-550bfc8a8fb1f340.js",revision:"550bfc8a8fb1f340"},{url:"/_next/static/chunks/4afafdf3-c46c46d9c15f5940.js",revision:"c46c46d9c15f5940"},{url:"/_next/static/chunks/536-13585da7ba33b63f.js",revision:"13585da7ba33b63f"},{url:"/_next/static/chunks/664-6afa16b072d4aaf3.js",revision:"6afa16b072d4aaf3"},{url:"/_next/static/chunks/675-4834b8f4dc0f6dda.js",revision:"4834b8f4dc0f6dda"},{url:"/_next/static/chunks/78e521c3-45881afca3ef77f5.js",revision:"45881afca3ef77f5"},{url:"/_next/static/chunks/904-1e02977779a39722.js",revision:"1e02977779a39722"},{url:"/_next/static/chunks/95b64a6e-dc6b436ea972ee6f.js",revision:"dc6b436ea972ee6f"},{url:"/_next/static/chunks/d7eeaac4-0f795111e3093f1f.js",revision:"0f795111e3093f1f"},{url:"/_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/_next/static/chunks/main-6aa15e95e4831d63.js",revision:"6aa15e95e4831d63"},{url:"/_next/static/chunks/pages/_app-d768e2a3a986e151.js",revision:"d768e2a3a986e151"},{url:"/_next/static/chunks/pages/_error-54de1933a164a1ff.js",revision:"54de1933a164a1ff"},{url:"/_next/static/chunks/pages/about-2c525559724d1ad5.js",revision:"2c525559724d1ad5"},{url:"/_next/static/chunks/pages/afterwlc-a020fea2a99afacd.js",revision:"a020fea2a99afacd"},{url:"/_next/static/chunks/pages/createanOffer-e8823b606c138cb4.js",revision:"e8823b606c138cb4"},{url:"/_next/static/chunks/pages/index-089503dc256e1865.js",revision:"089503dc256e1865"},{url:"/_next/static/chunks/pages/moreInfos-d341874728a082c1.js",revision:"d341874728a082c1"},{url:"/_next/static/chunks/pages/offers/%5Boffer_id%5D-32c449d92947f2c2.js",revision:"32c449d92947f2c2"},{url:"/_next/static/chunks/pages/offersPage-0afaf1688b91a8a6.js",revision:"0afaf1688b91a8a6"},{url:"/_next/static/chunks/pages/profilePage-935e67ea5e8b56ad.js",revision:"935e67ea5e8b56ad"},{url:"/_next/static/chunks/pages/sellers-0d8b89c97a9dbc40.js",revision:"0d8b89c97a9dbc40"},{url:"/_next/static/chunks/pages/service-5055115afad2a9dd.js",revision:"5055115afad2a9dd"},{url:"/_next/static/chunks/pages/signInPage-13760193a2efd62d.js",revision:"13760193a2efd62d"},{url:"/_next/static/chunks/pages/signInPageCus-1cf517419cd7d333.js",revision:"1cf517419cd7d333"},{url:"/_next/static/chunks/pages/signUpCus-18fc36b93743fcca.js",revision:"18fc36b93743fcca"},{url:"/_next/static/chunks/pages/signUpSeller-11c3084d3b3896ce.js",revision:"11c3084d3b3896ce"},{url:"/_next/static/chunks/pages/signUpUser-47b34143c9f8e60e.js",revision:"47b34143c9f8e60e"},{url:"/_next/static/chunks/pages/users/%5Buser_id%5D-deb80553b65e96a0.js",revision:"deb80553b65e96a0"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-ee7e63bc15b31913.js",revision:"ee7e63bc15b31913"},{url:"/_next/static/css/ade2896af21bad2b.css",revision:"ade2896af21bad2b"},{url:"/_next/static/iAYonhrtErsdd9O69CcTi/_buildManifest.js",revision:"1993e7c5b605fbaf79def5fff0ef3102"},{url:"/_next/static/iAYonhrtErsdd9O69CcTi/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/icon-192x192.png",revision:"3509197e3b4d0a53ef6a23dfabc387d1"},{url:"/icon-256x256.png",revision:"b95f87577947c0dd4da10b12122a2ec3"},{url:"/icon-384x384.png",revision:"d567589ea401db7e7dae324c1ad489fd"},{url:"/icon-512x512.png",revision:"fc633f346e20884549627891c2d5cdeb"},{url:"/iconnav.ico",revision:"b469e25d33c1bc145fc69fb46e4a836c"},{url:"/icons/apple.png",revision:"141b82a802f6c2ca9895d2ad07c7bbfa"},{url:"/icons/business.png",revision:"a36c45f8df40764b74833e5ad27dc453"},{url:"/icons/chef-hat.png",revision:"4845cae7e3fe862f21eba14959133073"},{url:"/icons/cooking.png",revision:"588da7a4f99c81c8f7d6053790378c58"},{url:"/icons/environmental-protection.png",revision:"55a519885ca56196a5c9ec1935e08643"},{url:"/icons/face-scan.gif",revision:"5bb7103f1625a5dd09dee8a638aaea05"},{url:"/icons/facebook.png",revision:"03c3adf6ffcb6c0e3825aa635bd3cbac"},{url:"/icons/food.png",revision:"bb9e4a16493cf4c7483e0c88a5b813d6"},{url:"/icons/fresh.png",revision:"745899f29dd539ef2f0f4db4ad047f8e"},{url:"/icons/groceries.png",revision:"22fb56c0dc3497d7fa80dd0122d6f94e"},{url:"/icons/instagram.png",revision:"0b6b3c8d2c74fc2e0be8f5d940ec1e14"},{url:"/icons/man.png",revision:"b73e4f283aab1c65c99a3787c33fc55c"},{url:"/icons/open-sign.png",revision:"50be466cb32aacb6be0c1a88e70dbea4"},{url:"/icons/optimist.png",revision:"a5dca981e8e29984e89b46f2a01869f4"},{url:"/icons/package.gif",revision:"a0cbf31a8ead6bb295cd60bd583c558c"},{url:"/icons/profile.png",revision:"055a91979264664a1ee12b9453610d82"},{url:"/icons/recycling.png",revision:"8e467daf0f16c3035dfe6c4fb85f8c64"},{url:"/icons/restaurant.png",revision:"943d9144b362024088e18c21692a019b"},{url:"/icons/sales.gif",revision:"0e0a983a459f24c0ff13617b3d315da5"},{url:"/icons/twitter.png",revision:"d1044b2527b5b74f5802cbb1fd100bd0"},{url:"/icons/user.png",revision:"d00d5149e54757861fa03191da352f1f"},{url:"/icons/wastefood.gif",revision:"476c51b050acd4e02b7a47b275d85b01"},{url:"/icons/woman.png",revision:"c6eac35ed9ed838480d7325b86ec3ca2"},{url:"/index.html",revision:"6c652a38b2a36ac5295b0ef043149d88"},{url:"/manifest.json",revision:"df7f45782c73b8556cc49348a2a88a65"},{url:"/offline.html",revision:"d9381d82f7acb32b2e6ef9500b1a3580"},{url:"/serviceworker.js",revision:"359468036edd0d17e246edc389f0d8c2"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
