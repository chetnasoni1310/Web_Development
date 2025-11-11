let main = {
  mainClass: " flex justify-center",
  container: {
    containerClass:
      "flex flex-wrap w-3/4 items-center justify-center bg-yellow-200 gap-20 mt-10 py-10",
    card: {
      cardClass: "card w-[300px] h-[400px] bg-blue-300 rounded-3xl px-3 py-2",
      top: {
        price: "120$",
        topClass: "top flex justify-between",
        bookmark: "ri-bookmark-line",
      },
      title: {
        titleClass: "pt-20 flex",
        text: "Senior UI Developer",
        textClass: " text-4xl",
        arrowClass: "ri-arrow-right-line text-2xl pt-20 opacity-75",
      },
      dot: {
        dots: ". . . .",
        dotsClass: "text-2xl text-center pt-8 ",
      },
      bottom: {
        bottomClass: "bottom flex justify-between",
        logo_title: {
          logo_titleClass: "flex gap-2",
          logoSrc: "nike.png",
          logoClass: "h-24 w-20 object-cover",
          text: "Senior UI Developer",
          textClass: "small-text pt-[45px] w-1/3 font-normal text-lg",
        },
        button: {
          text: "View",
          buttonClass:
            "btn bg-black text-white font-bold w-12 h-12 mt-[50px] px-2 text-center rounded-md",
        },
      },
    },
  },
};

function create_Main_and_Container(mainObj) {
  const mainDiv = document.createElement("div");
  mainDiv.className = mainObj.mainClass;

  const containerDiv = document.createElement("div");
  containerDiv.className = mainObj.container.containerClass;

  mainDiv.appendChild(containerDiv);

  document.body.appendChild(mainDiv);

  return containerDiv;
}

function create_Card(cardObj, container , jobTitle , price) {
  const cardDiv = document.createElement("div");
  cardDiv.className = cardObj.cardClass;

  //Yeh thi aam zindagi
  // const topDiv = document.createElement('div');
  // topDiv.className = cardObj.top.topClass;
  // const price = document.createElement('h1');
  // price.textContent = cardObj.top.price;
  // const bookmark = document.createElement('icon');
  // bookmark.innerHTML = cardObj.top.bookmark;
  // cardDiv.appendChild(topDiv);

  //Yeh hai mentos zindagi
  //Static part using innerHTML
  cardDiv.innerHTML = ` 
        <div class="${cardObj.top.topClass}">
                   <h2>${price}/hr</h2>
                <!--   <i class="${cardObj.top.bookmark}"></i>  yeh comment hai kyunki hum ese nhi likhenge isko dynamically krenge add createElement krke taki hum ispe js bhi laga sake toh hum bookmark ke liye jgh bana ke chorr denge abhi span mai-->
                <span class="bookmark-container"></span>
                   </div>

                   <div class="${cardObj.title.titleClass}">
                    <h1 class="${cardObj.title.textClass}">${jobTitle}</h1>
                    <i class="${cardObj.title.arrowClass}"></i>
                   </div>

                   <div class="${cardObj.dot.dotsClass} ">
                    <h1>. . . .</h1>
                   </div>
                   <div class="${cardObj.bottom.bottomClass}">
                       <div class="${cardObj.bottom.logo_title.logo_titleClass}">
                        <img src="${cardObj.bottom.logo_title.logoSrc}" alt="" class="${cardObj.bottom.logo_title.logoClass}">
                        <h3 class="${cardObj.bottom.logo_title.textClass}">${jobTitle}</h3>
                       </div>
                     <!--  <button class="${cardObj.bottom.buttonClass}">${cardObj.bottom.button.text}</button> same goes for button as bookmark kyunki humein js lagani h baad mai inpe -->
                    <span class="button-container"></span>
                   </div>
    `;
  //Dynamic Part of button and bookmark icon
  //Bookmark
  const bookmark = document.createElement("i");
  bookmark.className = cardObj.top.bookmark;
  bookmark.style.cursor = "pointer";
  bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("ri-bookmark-line");
    bookmark.classList.toggle("ri-bookmark-fill");
  });
  cardDiv.querySelector(".bookmark-container").appendChild(bookmark);
  //Button
  const button = document.createElement("button");
  button.className = cardObj.bottom.button.buttonClass;
  button.textContent = cardObj.bottom.button.text;
  // button.addEventListener('click',()=>{
  // })
  cardDiv.querySelector(".button-container").appendChild(button);

  //For debugging
  //   cardDiv.style.border = "2px solid black";
  //   cardDiv.style.backgroundColor = "black";

  container.appendChild(cardDiv);

  //   console.log("card appended");
}

document.addEventListener("DOMContentLoaded", () => {
  const container = create_Main_and_Container(main);
  create_Card(main.container.card, container,'Software Engineer','120$');
  create_Card(main.container.card, container,'Software Dev','120$');
  create_Card(main.container.card, container,'UI Designer','120$');
  create_Card(main.container.card, container,'Frontend Engineer','120$');
  create_Card(main.container.card, container,'Backend Developer','120$');
  create_Card(main.container.card, container,'Associate Software Engineer','120$');

//   for (let i = 0; i < 5; i++) {
//     let jobTitle = prompt(`Enter the job title for ${i}th job : `,'Software Engineer')
//     let price=prompt(`Enter the per hour price for job ${i}:`,'120$');

//     create_Card(main.container.card ,container , jobTitle , price);
//   }
});
