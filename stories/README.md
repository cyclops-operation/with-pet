# How to write Next.js page storybook

## How to add Next Router parameters

> [`storybook-addon-next-router`](https://storybook.js.org/addons/storybook-addon-next-router)

```tsx
export const Example = () => <MyComponentThatHasANextLink />

Example.parameters = {
  nextRouter: {
    path: '/profile/[id]',
    asPath: '/profile/lifeiscontent',
    query: {
      id: 'lifeiscontent'
    }
  }
}
```
