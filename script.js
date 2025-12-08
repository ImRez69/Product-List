const main = document.querySelector("main");
const loadMore = document.getElementById("load-more");
let loadCount = 0;
const times = 5;
const productList = [
  {
    id: 1,
    title:
      "گوشی شیائومی Redmi Note 14 4G رجیستر‌شده دو سیم‌کارت 256 گیگابایت با رم 8 گیگابایت و همراه تست بابت ellipsis",
    price: "19399000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 2,
    title: "گوشی موبایل مدل تست 2 دو سیم‌کارت 128 گیگابایت با رم 6 گیگابایت",
    price: "10500000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 3,
    title: "گوشی موبایل مدل تست 3 تک سیم‌کارت 256 گیگابایت با رم 12 گیگابایت",
    price: "15200000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 4,
    title: "گوشی موبایل مدل تست 4 دو سیم‌کارت 64 گیگابایت با رم 4 گیگابایت",
    price: "7200000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 5,
    title: "گوشی موبایل تست 5 نسخه 5G ظرفیت 256 گیگابایت رم 8",
    price: "18990000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 6,
    title: "گوشی موبایل تست 6 نسخه پلاس 128 گیگابایت رم 8",
    price: "13400000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 7,
    title: "گوشی موبایل تست 7 اولترا با ظرفیت 512 گیگابایت و رم 12 گیگابایت",
    price: "28990000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 8,
    title: "گوشی موبایل تست 8 نسخه معمولی 64 گیگابایت رم 4",
    price: "6500000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 9,
    title: "گوشی موبایل تست 9 نسخه اقتصادی 32 گیگابایت رم 3",
    price: "4800000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 10,
    title: "گوشی موبایل تست 10 نسخه پرو 128 گیگابایت رم 8",
    price: "15900000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 11,
    title: "گوشی موبایل تست 11 دو سیم‌کارت 256 گیگابایت رم 12",
    price: "21400000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 12,
    title: "گوشی موبایل تست 12 نسخه استاندارد 128 گیگابایت رم 6",
    price: "11200000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 13,
    title: "گوشی موبایل تست 13 اولترا 512 گیگابایت رم 16",
    price: "34900000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 14,
    title: "گوشی موبایل تست 14 اقتصادی 64 گیگابایت رم 4",
    price: "6800000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 15,
    title: "گوشی موبایل تست 15 پرو 256 گیگابایت رم 12",
    price: "22900000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 16,
    title: "گوشی موبایل تست 16 تک سیم‌کارت 128 گیگابایت رم 4",
    price: "8900000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 17,
    title: "گوشی موبایل تست 17 نسخه S ظرفیت 256 گیگابایت رم 8",
    price: "17500000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 18,
    title: "گوشی موبایل تست 18 نسخه M ظرفیت 128 گیگابایت رم 6",
    price: "10200000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 19,
    title: "گوشی موبایل تست 19 نسخه X ظرفیت 512 گیگابایت رم 16",
    price: "31200000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 20,
    title: "گوشی موبایل تست 20 اقتصادی 32 گیگابایت رم 2",
    price: "3900000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 21,
    title: "گوشی تست 21",
    price: "7200000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 22,
    title: "گوشی تست 22",
    price: "8300000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 23,
    title: "گوشی تست 23",
    price: "9100000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 24,
    title: "گوشی تست 24",
    price: "6000000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 25,
    title: "گوشی تست 25",
    price: "15900000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 26,
    title: "گوشی تست 26",
    price: "13200000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 27,
    title: "گوشی تست 27",
    price: "4900000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 28,
    title: "گوشی تست 28",
    price: "7600000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 29,
    title: "گوشی تست 29",
    price: "9200000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 30,
    title: "گوشی تست 30",
    price: "11000000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 31,
    title: "گوشی تست 31",
    price: "5100000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 32,
    title: "گوشی تست 32",
    price: "6800000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 33,
    title: "گوشی تست 33",
    price: "8700000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 34,
    title: "گوشی تست 34",
    price: "9500000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 35,
    title: "گوشی تست 35",
    price: "7200000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 36,
    title: "گوشی تست 36",
    price: "13900000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 37,
    title: "گوشی تست 37",
    price: "23000000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 38,
    title: "گوشی تست 38",
    price: "4100000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 39,
    title: "گوشی تست 39",
    price: "9800000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 40,
    title: "گوشی تست 40",
    price: "11400000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 41,
    title: "گوشی تست 41",
    price: "5600000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 42,
    title: "گوشی تست 42",
    price: "12900000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 43,
    title: "گوشی تست 43",
    price: "20600000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 44,
    title: "گوشی تست 44",
    price: "3900000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 45,
    title: "گوشی تست 45",
    price: "5300000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 46,
    title: "گوشی تست 46",
    price: "7800000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 47,
    title: "گوشی تست 47",
    price: "14200000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 48,
    title: "گوشی تست 48",
    price: "26700000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 49,
    title: "گوشی تست 49",
    price: "9900000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
  },
  {
    id: 50,
    title: "گوشی تست 50",
    price: "12000000",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg",
    link: "https://www.digikala.com/product/dkp-17580036",
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

  return parentDiv;
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

function productLoad(itemList, times) {
  const itemListTimes = itemList.slice(loadCount, loadCount + times);
  itemListTimes.map((item) => addToMain(createDiv(item)));
  loadCount += times;
}

function productUnLoad() {
  main.innerHTML = "";
}

function loadMoreEvent() {

  loadMore.innerText = "Loading...";
  loadMore.classList.add("spin");
  loadMore.removeEventListener("click", loadMoreEvent);
  main.style.opacity = "0.4";

  const load = () => {
    productUnLoad();
    productLoad(productList, times);
    loadMore.classList.remove("spin");
    loadMore.innerText = "Load More";
    loadMore.addEventListener("click", loadMoreEvent);
    main.style.opacity = "1";
    window.scrollTo({ top: 0, behavior: "smooth" })
    if (loadCount >= productList.length) loadMore.remove();
  };

  setTimeout(load, 2000);
}

function checkUi() {
  productLoad(productList, times);
}

checkUi();

loadMore.addEventListener("click", loadMoreEvent);
