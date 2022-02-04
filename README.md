# Shadow Endpoints broken on Browser Back navigation

Steps to reproduce:

- pnpm install
- pnpm dev
- open http://localhost:3000/
- click on Todos
- Navigate back with the default browser back button

The error is cause because the browser tries to fetch http://__data.json/.

```
500
Failed to fetch
TypeError: Failed to fetch
    at Renderer._load (http://localhost:3000/@fs/Users/info/Desktop/DEV/shadow-endpoints/.svelte-kit/runtime/client/start.js:1269:25)
    at async Renderer._get_navigation_result (http://localhost:3000/@fs/Users/info/Desktop/DEV/shadow-endpoints/.svelte-kit/runtime/client/start.js:999:19)
    at async Renderer.update (http://localhost:3000/@fs/Users/info/Desktop/DEV/shadow-endpoints/.svelte-kit/runtime/client/start.js:831:27)
    at async Renderer.handle_navigation (http://localhost:3000/@fs/Users/info/Desktop/DEV/shadow-endpoints/.svelte-kit/runtime/client/start.js:820:3)
    at async Router._navigate (http://localhost:3000/@fs/Users/info/Desktop/DEV/shadow-endpoints/.svelte-kit/runtime/client/start.js:413:3)
```
