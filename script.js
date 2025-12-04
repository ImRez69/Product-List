const main = document.querySelector("main");
const productList = [
  {
    id: 1,
    title:
      "گوشی شیائومی Redmi Note 14 4G رجیستر‌شده دو سیم‌کارت 256 گیگابایت با رم 8 گیگابایت",
    price: "19399000", // ۱۹,۳۹۹,۰۰۰
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
    link: "https://www.digikala.com/product/dkp-17580036/%DA%AF%D9%88%D8%B4%DB%8C-%D9%85%D9%88%D8%A8%D8%A7%DB%8C%D9%84-%D8%B4%DB%8C%D8%A7%D8%A6%D9%88%D9%85%DB%8C-%D9%85%D8%AF%D9%84-redmi-note-14-4g-%D8%AF%D9%88-%D8%B3%DB%8C%D9%85-%DA%A9%D8%A7%D8%B1%D8%AA-%D8%B8%D8%B1%D9%81%DB%8C%D8%AA-256-%DA%AF%DB%8C%DA%AF%D8%A7%D8%A8%D8%A7%DB%8C%D8%AA-%D9%88-%D8%B1%D9%85-8-%DA%AF%DB%8C%DA%AF%D8%A7%D8%A8%D8%A7%DB%8C%D8%AA/?bCode=204481",
  },
  {
    id: 2,
    title:
      "گوشی شیائومی Redmi Note 14 4G رجیستر‌شده دو سیم‌کارت 256 گیگابایت با رم 8 گیگابایت",
    price: "43450000", // ۴۳,۴۵۰,۰۰۰
    image:
      "https://dkstatics-public.digikala.com/digikala-products/6144c3fdde10110e4312420db31e07f42e2cfc3a_1738146333.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
    link: "https://www.digikala.com/product/dkp-17986248/%DA%AF%D9%88%D8%B4%DB%8C-%D9%85%D9%88%D8%A8%D8%A7%DB%8C%D9%84-%D8%B4%DB%8C%D8%A7%D8%A6%D9%88%D9%85%DB%8C-%D9%85%D8%AF%D9%84-poco-x7-pro-%D8%AF%D9%88-%D8%B3%DB%8C%D9%85-%DA%A9%D8%A7%D8%B1%D8%AA-%D8%B8%D8%B1%D9%81%DB%8C%D8%AA-512-%DA%AF%DB%8C%DA%AF%D8%A7%D8%A8%D8%A7%DB%8C%D8%AA-%D9%88-%D8%B1%D9%85-12-%DA%AF%DB%8C%DA%AF%D8%A7%D8%A8%D8%A7%DB%8C%D8%AA-%DA%AF%D9%84%D9%88%D8%A8%D8%A7%D9%84/?bCode=204481",
  },
  {
    id: 3,
    title:
      "گوشی شیائومی Redmi Note 14 4G رجیستر‌شده دو سیم‌کارت 256 گیگابایت با رم 8 گیگابایت",
    price: "60254800", // ۶۰,۲۵۴,۸۰۰
    image:
      "https://dkstatics-public.digikala.com/digikala-products/915fa5f904618d5c06f10fad876e8666a6e5c000_1737474361.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
    link: "https://www.digikala.com/product/dkp-16736269/%DA%AF%D9%88%D8%B4%DB%8C-%D9%85%D9%88%D8%A8%D8%A7%DB%8C%D9%84-%D8%B3%D8%A7%D9%85%D8%B3%D9%88%D9%86%DA%AF-%D9%85%D8%AF%D9%84-s24-fe-%D8%AF%D9%88-%D8%B3%DB%8C%D9%85-%DA%A9%D8%A7%D8%B1%D8%AA-%D8%B8%D8%B1%D9%81%DB%8C%D8%AA-256-%DA%AF%DB%8C%DA%AF%D8%A7%D8%A8%D8%A7%DB%8C%D8%AA-%D9%88-%D8%B1%D9%85-8-%DA%AF%DB%8C%DA%AF%D8%A7%D8%A8%D8%A7%DB%8C%D8%AA-%D9%88%DB%8C%D8%AA%D9%86%D8%A7%D9%85/?bCode=204481",
  },
];

function createDiv(product) {
  const parentDiv = document.createElement("div");
  const childDiv = document.createElement("div");
  const a = document.createElement("a");
  const price = parseInt(product.price).toLocaleString("fa") + " تومان";
  const title = product.title;
  const image = product.image;

  parentDiv.classList.add("product");
  childDiv.classList.add("inside-product");
  a.classList.add("product-a");
  a.href = product.link;

  childDiv.appendChild(createImg(image, "image"));
  childDiv.appendChild(createSpan(title, "title"));
  childDiv.appendChild(createSpan(price, "price"));

  a.appendChild(childDiv);
  parentDiv.appendChild(a);

  return addToMain(parentDiv);
}

function createSpan(details, className) {
  const span = document.createElement("span");
  span.classList.add(className);
  span.append(details);
  return span;
}

function createImg(src, className) {
  const img = document.createElement("img");
  img.classList.add(className);
  img.src = src;
  return img;
}

function addToMain(element) {
  main.appendChild(element);
}

productList.map((product) => {
  createDiv(product);
});
