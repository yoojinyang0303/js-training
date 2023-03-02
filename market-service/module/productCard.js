import { appendChildrenList, makeDOMwithProperties } from "../utils/dom.js";

export const getProductCard = ({
  imgSrc,
  name,
  discountPercent,
  price,
  originalPrice,
}) => {
  const productCard = makeDOMwithProperties("div", {
    className: "product-card",
  });

  // --- product Image con ---
  const productImageCon = makeDOMwithProperties("div", {
    className: "product-image-con",
  });
  const productImage = makeDOMwithProperties("img", {
    src: imgSrc,
    alt: name,
  });
  const cartToggleBtn = makeDOMwithProperties("button", {
    className: "cart-toggle-btn",
    type: "button",
  });
  const cartImage = makeDOMwithProperties("img", {
    className: "cart-image",
    src: "./public/assets/cart.png",
  });
  cartToggleBtn.appendChild(cartImage);
  appendChildrenList(productImageCon, [productImage, cartToggleBtn]);

  // --- product Image con ---

  const productDescription = makeDOMwithProperties("div", {
    className: "product-description",
  });
  const productName = makeDOMwithProperties("div", {
    className: "product-name",
    innerHTML: name,
  });

  const productPriceCon = makeDOMwithProperties("div", {
    className: "product-price-con",
  });
  const productDiscount = makeDOMwithProperties("div", {
    className: "product-discount-percent",
    // innerHTML: `20%`,
    innerHTML: `${discountPercent}%`,
  });
  const productPrice = makeDOMwithProperties("div", {
    className: "product-price",
    // innerHTML: `2000원`,
    innerHTML: `${price.toLocaleString()}원`, // toLocaleString()함수 : 2000 -> 2,000
  });
  const productOriginalPrice = makeDOMwithProperties("div", {
    className: "product-original-price",
    // innerHTML: `2500원`,
    innerHTML: `${originalPrice.toLocaleString()}원`,
  });

  appendChildrenList(productPriceCon, [productDiscount, productPrice]);
  appendChildrenList(productDescription, [
    productName,
    productPriceCon,
    productOriginalPrice,
  ]);
  // --- product Description ---

  appendChildrenList(productCard, [productImageCon, productDescription]);

  return productCard;
};
