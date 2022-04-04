# Vite + React 18

## Introduction

[What is vite ?](https://vitejs.dev/guide/) :  is a build tool that aims to provide a faster and leaner development experience for modern web projects.  
[React 18](https://reactjs.org/blog/2022/03/29/react-v18.html) : improvements like automatic batching, new APIs like startTransition, and streaming server-side rendering with support for Suspense.
[How to upgrade to react 18](https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html). 

## Install

1. `npm install`
2. `npm run dev`

## How I started

1. `npm init vite@latest vite-react18 -- --template react-ts`
2. `npm install`
3. `npm install -E react-router-dom@5.3.0 @types/react-router-dom@5.3.3`
4. Update `react` & `react-dom` from [package.json](./package.json) to `^18.0.0`

## React 18

### Features

#### Concurrent rendering

`A key property of Concurrent React is that rendering is interruptible.`  

**Before** : `With synchronous rendering, once an update starts rendering, nothing can interrupt it until the user can see the result on screen.`  

**After** : `React may start rendering an update, pause in the middle, then continue later. It may even abandon an in-progress render altogether. React guarantees that the UI will appear consistent even if a render is interrupted. To do this, it waits to perform DOM mutations until the end, once the entire tree has been evaluated. With this capability, React can prepare new screens in the background without blocking the main thread. This means the UI can respond immediately to user input even if it’s in the middle of a large rendering task, creating a fluid user experience.`  

`In our testing, we’ve upgraded thousands of components to React 18. What we’ve found is that nearly all existing components “just work” with concurrent rendering, without any changes.`  
`The new rendering behavior in React 18 is only enabled in the parts of your app that use new features.`  

Usage : `For example, you can use startTransition to navigate between screens without blocking user input. Or useDeferredValue to throttle expensive re-renders.`  
But : `However, long term, we expect the main way you’ll add concurrency to your app is by using a concurrent-enabled library or framework. (router libraries will automatically wrap navigations in startTransition)`

### Changes

Root DOM :
```jsx
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);
```

Hidrate : 
```jsx
import { hydrateRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = hydrateRoot(container, <App tab="home" />);
// Unlike with createRoot, you don't need a separate root.render() call here.
```

react-dom/server:
 - renderToNodeStream: Deprecated ⛔️️
 - renderToPipeableStream: New ✨
 - renderToReadableStream: New ✨
 - renderToString: Limited ⚠️ 
 - renderToStaticMarkup: Limited ⚠️
 - renderToStaticNodeStream

Automatic batching:
`Starting in React 18 with createRoot, all updates will be automatically batched, no matter where they originate from.` (Before only the case for react actions, multiples `setState` for exemple).