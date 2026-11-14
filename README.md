# React debugging · Scene checklist

You have **10 minutes**. Run or inspect this React component and fix as many issues as you can. Explain what you notice and how you would verify each fix. You may use the browser, DevTools, and your editor. Keep AI tools off for this section.

## Expected behavior

- The checklist starts with three items, one completed. The count shows how many items are still unchecked and updates when you toggle an item.
- Removing an item removes only that item.
- Adding a check creates one unchecked item with the text you entered and clears the field. Blank and whitespace-only entries leave the list unchanged.

## Run locally

Use Node 20.19+ on the 20.x line or Node 22.12+.

```sh
npm ci
npm run dev
```

Open the URL printed by Vite. The component is in `src/main.jsx`.
