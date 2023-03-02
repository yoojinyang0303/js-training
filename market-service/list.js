/*
<div class="product-card">
    <div class="product-image-con">
        <img src="public/assets/파프리카.jpg" alt="파프리카 2입">
        <button type="button" class="cart-toggle-btn">
            <img src="public/assets/cart.png" class="cart-image">
        </button>
    </div>
    <div class="product-description">
        <div class="product-name">파프리카 2입</div>
        <div class="product-price-con">
            <div class="product-discount-percent">20%</div>
            <div class="product-price">2,000원</div>
        </div>
        <div class="product-original-price">2,500원</div>
    </div>
</div>
*/

import { getProductCard } from "./module/productCard.js";
("use strict");

const sectionDOM = document.getElementsByTagName("section")[0];

const productCard = getProductCard({
  id: 3,
  imgSrc: "/market-service/public/assets/머핀.jpg",
  name: "머핀",
  discountPercent: 10,
  price: 4950,
  originalPrice: 5500,
});
const productCard2 = getProductCard({
  id: 7,
  imgSrc: "/market-service/public/assets/아보카도.jpg",
  name: "아보카도",
  discountPercent: 20,
  price: 2000,
  originalPrice: 25000,
});

sectionDOM.appendChild(productCard);
sectionDOM.appendChild(productCard2);
