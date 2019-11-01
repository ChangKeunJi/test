class UI {
  constructor() {
    this.page = document.querySelector(".page");
    this.page1 = document.getElementById("page1");
    this.page2 = document.getElementById("page2");
    this.page3 = document.getElementById("page3");
    this.page4 = document.getElementById("page4");
    this.startBtn = document.getElementById("startButton");
    this.spinBtn = document.getElementById("spinButton");
    this.wheel1 = document.getElementById("wheel1");
    this.wheel2 = document.getElementById("wheel2");
    this.wheel3 = document.getElementById("wheel3");
  }

  // Click start button and Go to play page.

  // In here, I failed to make page fade out slowly

  clickStart() {
    this.startBtn.addEventListener("click", () => {
      this.page1.style.opacity = 0;
      this.page1.style.display = "none";
      this.page2.style.opacity = 1;
      this.page2.style.display = "block";
    });
  }

  // Click spin button and reel spinning.

  // I didn't use any library or animation. I tried but have no idea how to use them
  // And wasn't sure that would work.

  clickSpin() {
    this.spinBtn.addEventListener("click", () => {
      setTimeout(() => {
        this.congratPage();
        setTimeout(() => {
          this.lastPage();
        }, 2000);
      }, 4500);
      this.spin();
    });
  }

  spin() {
    // I made three of random number (between 1 and 6) and push them in array.

    let randomNum1 = Math.floor(Math.random() * 6 + 1);
    let randomNum2 = Math.floor(Math.random() * 6 + 1);
    let randomNum3 = Math.floor(Math.random() * 6 + 1);
    let arr = [];
    let uniqueArray = [];

    arr.push(randomNum1, randomNum2, randomNum3);

    // Made wheels turn manually with translateY and I found that roughly each image's height is 150px.
    // So multifly 150 to each ramdom number works fine but I wanted to make wheels run more longer So multifly 750

    this.wheel1.style.transform = `translateY(-${randomNum1 * 750}px)`;
    setTimeout(() => {
      this.wheel2.style.transform = `translateY(-${randomNum2 * 750}px)`;
      setTimeout(() => {
        this.wheel3.style.transform = `translateY(-${randomNum3 * 750}px)`;
      }, 200);
    }, 200);

    // So, This is unique array which push the element if there is no same element in array.
    // I got this in Stack Overflow.

    uniqueArray = arr.filter((item, pos) => {
      return arr.indexOf(item) == pos;
    });

    // If there is no same number in array, Unique array's length would be 3.

    if (uniqueArray.length === 3) {
      console.log("Small Win");
    } else if (uniqueArray.length === 2) {
      console.log("Medium Win");
    } else {
      console.log("Big Win");
    }
  }

  // Page transition effect.

  congratPage() {
    this.page2.style.opacity = 0;
    this.page2.style.display = "none";
    this.page3.style.opacity = 1;
    this.page3.style.display = "block";
  }

  lastPage() {
    this.page3.style.opacity = 0;
    this.page3.style.display = "none";
    this.page4.style.opacity = 1;
    this.page4.style.display = "block";
  }
}

const eventListener = () => {
  const ui = new UI();
  ui.clickStart();
  ui.clickSpin();
};

document.addEventListener("DOMContentLoaded", eventListener);
