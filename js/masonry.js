const container = document.getElementById("container");
const items = document.querySelectorAll(".item");
const gutter = 10;
const layoutItems = () => {
  const screenWidth = window.innerWidth;
  let numColumns = 2;
  if (screenWidth > 1000) numColumns = 3;
  else if (screenWidth <= 480) numColumns = 1;
  const columnHeights = new Array(numColumns).fill(0);
  const containerWidth = container.offsetWidth;
  const itemWidth = (containerWidth - gutter * (numColumns - 1)) / numColumns;
  items.forEach((item) => {
    const minHeight = Math.min(...columnHeights);
    const minHeightIndex = columnHeights.indexOf(minHeight);
    item.style.position = "absolute";
    item.style.width = `${itemWidth}px`;
    item.style.top = `${minHeight}px`;
    item.style.left = `${minHeightIndex * (itemWidth + gutter)}px`;
    columnHeights[minHeightIndex] += item.offsetHeight + gutter;
  });
  const maxHeight = Math.max(...columnHeights);
  container.style.height = `${maxHeight - gutter}px`;
};
const imageLoadPromises = Array.from(
  document.querySelectorAll(".item img"),
).map(
  (img) =>
    new Promise((resolve) => {
      if (img.complete) resolve();
      else {
        img.onload = resolve;
        img.onerror = resolve;
      }
    }),
);
Promise.all(imageLoadPromises).then(layoutItems);
window.addEventListener("resize", layoutItems);
