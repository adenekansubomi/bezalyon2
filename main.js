const carousel = document.querySelector(".carousel-container");
const slide = document.querySelector(".carousel-slide");
function handleCarouselMove(positive = true) {
  const slideWidth = slide.clientWidth;
  carousel.scrollLeft = positive ? carousel.scrollLeft + slideWidth : carousel.scrollLeft - slideWidth;
}
  
  
  
  document.querySelector('.read-more').addEventListener('click', function(e) {
    e.preventDefault();
    const moreText = document.querySelector('.more-text');
    const linkText = this.querySelector('span');

    if (moreText.style.display === 'none') {
      moreText.style.display = 'inline';
      linkText.textContent = 'Read Less';
    } else {
      moreText.style.display = 'none';
      linkText.textContent = 'Read More';
    }
  });


  document.querySelector('.read-more2').addEventListener('click', function(e) {
    e.preventDefault();
    const moreText2 = document.querySelector('.more-text2');
    const linkText2 = this.querySelector('span');

    if (moreText2.style.display === 'none') {
      moreText2.style.display = 'inline';
      linkText2.textContent = 'Read Less';
    } else {
      moreText2.style.display = 'none';
      linkText2.textContent = 'Read More';
    }
  });


const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

 
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });


let url = "post.json"


async function getData(){
  let response = await fetch(url)
  let data = await response.json()
  console.log(data)
  return data
}

getData().then(data=> {
    const container = document.getElementById('containern')
    data.items.forEach(card => {
        const cards = document.createElement('div')
        cards.classList.add('blogcard')
        cards.innerHTML = `

          <div class="blogcard_innerbox">
                    <img class="blogcard_img" src="${card.image}" alt="" height="280px" width="300px">
                    <div class="blogcard_textbox">
                        <div class="blogcard_title">
                            <h4>${card.title}
                                <p class="blogcard_subtitle">${card.subtitle}</p>
                            </h4>
                        </div>
                        <div class="blogcard_bar"></div>
                        <div class="blogcard_description">
                            <p>${card.summary}</p>
                        </div>
                        <div>
                            <button class="blogcard_btn">read more</button>
                        </div>
                    </div>
          </div>
        `    
        container.appendChild(cards)
        console.log(cards)
    });
})



function blogpost(){
  

}
