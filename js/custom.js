$(function () {
  let index = 0;
  const total = $(".snsThumb li").length;
  let i = document.querySelector(".btn .index");
  let list = document.querySelector(".snsThumb li");
  // let wid = list.offsetWidth;
  // console.log(wid);

  $(".next").on("click", function () {
    let wid = list.offsetWidth;
    // console.log(wid);
    index++;
    if (index >= total) {
      index = 0;
    }
    // console.log(index);
    $(".snsThumb li").animate(
      { transform: `translateX(${-(wid + 60) * index}px)` },
      function () {
        //   $(".snsThumb").css({ transform: "translateX(0)" });
      }
    );
    $(".snsTxt li").removeClass("active");
    $(".snsTxt li").eq(index).addClass("active");
    i.textContent = `${index + 1}`;
  });

  $(".prev").on("click", function () {
    let wid = list.offsetWidth;
    // console.log(wid);
    index--;
    if (index < 0) {
      index = total - 1;
    }
    // console.log(index);
    $(".snsThumb li").animate(
      { transform: `translateX(${-(wid + 60) * index}px)` },
      function () {
        //   $(".snsThumb").css({ transform: "translateX(0)" });
      }
    );
    $(".snsTxt li").removeClass("active");
    $(".snsTxt li").eq(index).addClass("active");
    i.textContent = `${index + 1}`;
  });
  i.textContent = `${index + 1}`;
});
