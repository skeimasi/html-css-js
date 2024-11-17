[< Back to Previous Page](Javascript.md)

### DOM Update Mechanism

The DOM (Document Object Model) updates trigger reflow and repaint processes. Understanding this helps optimize performance.

#### Reflow and Repaint

1. **Reflow** (Layout): Occurs when changes affect the layout of elements

   - Adding/removing elements
   - Changing element dimensions
   - Font changes
   - Content updates

2. **Repaint**: Occurs when visual changes don't affect layout
   - Color changes
   - Visibility changes
   - Background updates

### Virtual DOM Benefits

Virtual DOM provides a more efficient update mechanism:

1. Changes are first made to the virtual DOM
2. Virtual DOM compares differences with actual DOM
3. Only necessary updates are applied to the real DOM

**Example of Virtual DOM efficiency:**

```js
// Traditional DOM manipulation
for (let i = 0; i < 1000; i++) {
  document.getElementById("list").innerHTML += `<li>Item ${i}</li>`;
}

// Virtual DOM approach (React example)
const items = Array.from({ length: 1000 }, (_, i) => `Item ${i}`);
ReactDOM.render(
  <ul id="list">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>,
  document.getElementById("root")
);
```

### Best Practices for DOM Updates

1. Batch DOM updates together
2. Use document fragments for multiple insertions
3. Avoid querying DOM repeatedly
4. Use CSS classes instead of inline styles when possible

**Example of using DocumentFragment:**

```js
const fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
  const li = document.createElement("li");
  li.textContent = `Item ${i}`;
  fragment.appendChild(li);
}
document.getElementById("list").appendChild(fragment);
```

**Other examples:**
```js
// Bad performance - multiple reflows
const element = document.getElementById("myElement");
element.style.width = "100px";
element.style.height = "100px";
element.style.margin = "10px";

// Better performance - single reflow
element.style.cssText = "width: 100px; height: 100px; margin: 10px;";

// Best performance - using requestAnimationFrame
requestAnimationFrame(() => {
  element.style.cssText = "width: 100px; height: 100px; margin: 10px;";
});
```
