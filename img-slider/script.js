(function () {
  "use strict";

  const get = (target) => {
    return document.querySelector(target);
  };

  class Carousel {
    constructor(carouselElement) {
      this.carouselElement = carouselElement;
      this.itemClassName = "carousel_item";
      this.items = this.carouselElement.querySelectorAll(".carousel_item");

      this.totalItems = this.items.length;
      this.current = 0; // 캐러셀 아이템들의 인덱스 역할. 초기값으로 0 설정한 것임.
    }

    // 브라우저 로드 시, 캐러셀 초기화
    initCarousel() {
      this.items[0].classList.add("active");
      this.items[1].classList.add("next");
      this.items[this.totalItems - 1].classList.add("prev");
    }

    setEventListener() {
      this.prevButton = this.carouselElement.querySelector(
        ".carousel_button--prev"
      );
      this.nextButton = this.carouselElement.querySelector(
        ".carousel_button--next"
      );

      this.prevButton.addEventListener("click", () => {
        this.movePrev();
      });
      this.nextButton.addEventListener("click", () => {
        this.moveNext();
      });
    }

    moveCaourselTo() {
      let prev = this.current - 1;
      let next = this.current + 1;

      if (this.current === 0) {
        prev = this.totalItems - 1;
      } else if (this.current == this.totalItems - 1) {
        next = 0;
      }

      for (let i = 0; i < this.totalItems; i++) {
        if (i === this.current) {
          this.items[i].className = this.itemClassName + " active";
        } else if (i === prev) {
          this.items[i].className = this.itemClassName + " prev";
        } else if (i === next) {
          this.items[i].className = this.itemClassName + " next";
        } else {
          this.items[i].className = this.itemClassName;
        }
      }
    }

    moveNext() {
      if (this.current === this.totalItems - 1) {
        this.current = 0;
      } else {
        this.current++;
      }
      this.moveCaourselTo();
    }
    movePrev() {
      if (this.current === 0) {
        this.current = this.totalItems - 1;
      } else {
        this.current--;
      }
      this.moveCaourselTo();
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    const carouselElement = get(".carousel");
    const carousel = new Carousel(carouselElement); /* 캐러셀 인스턴스 */

    carousel.initCarousel();
    carousel.setEventListener();
  });
})();
