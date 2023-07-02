const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      color: 'red',
      image: './sources/1.png'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      color: 'orange',
      image: './sources/2.png'

    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      color: 'purple',
      image: './sources/3.png'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      color: 'purple',
      image: './sources/4.png'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      color: 'green',
      image: './sources/5.png'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      color: 'gold',
      image: './sources/6.png'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      color: 'green',
      image: './sources/7.png'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      color: 'gray',
      image: './sources/8.png'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      color: 'pink',
      image: './sources/9.png'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      color: 'green',
      image: './sources/10.png'
    }
    ];
const carousel = () => {
      "use strict";
    
      var carousel = document.getElementsByClassName('carousel')[0],
          slider = carousel.getElementsByClassName('carousel__slider')[0],
          items = carousel.getElementsByClassName('carousel__slider__item'),
          prevBtn = carousel.getElementsByClassName('carousel__prev')[0],
          nextBtn = carousel.getElementsByClassName('carousel__next')[0];
      
      var width, height, totalWidth, margin = 20,
          currIndex = 0,
          interval, intervalTime = 4000;
      
      function init() {
          resize();
          move(Math.floor(items.length / 2));
          bindEvents();
        
          timer();
      }
      
      function resize() {
          width = Math.max(window.innerWidth * .25, 275),
          height = window.innerHeight * .5,
          totalWidth = width * items.length;
        
          slider.style.width = totalWidth + "px";
        
          for(var i = 0; i < items.length; i++) {
              let item = items[i];
              item.style.width = (width - (margin * 2)) + "px";
              item.style.height = height + "px";
          }
      }
      
      function move(index) {
        
          if(index < 1) index = items.length;
          if(index > items.length) index = 1;
          currIndex = index;
        
          for(var i = 0; i < items.length; i++) {
              let item = items[i],
                  box = item.getElementsByClassName('item__3d-frame')[0];
              if(i == (index - 1)) {
                  item.classList.add('carousel__slider__item--active');
                  box.style.transform = "perspective(1200px)"; 
              } else {
                item.classList.remove('carousel__slider__item--active');
                  box.style.transform = "perspective(1200px) rotateY(" + (i < (index - 1) ? 40 : -40) + "deg)";
              }
          }
        
          slider.style.transform = "translate3d(" + ((index * -width) + (width / 2) + window.innerWidth / 2) + "px, 0, 0)";
      }
      
      function timer() {
          clearInterval(interval);    
          interval = setInterval(() => {
            move(++currIndex);
          }, intervalTime);    
      }
      
      function prev() {
        move(--currIndex);
        timer();
      }
      
      function next() {
        move(++currIndex);    
        timer();
      }
      
      
      function bindEvents() {
          window.onresize = resize;
          prevBtn.addEventListener('click', () => { prev(); });
          nextBtn.addEventListener('click', () => { next(); });    
      }
    
    
    
    
      
      init();
      
    }
  
  



const slider = document.querySelector('.carousel__slider')
const show = (str) =>{
    slider.innerHTML = ''
    robots.forEach(e => {
        if((e.username.toLowerCase()).includes(str)){
            slider.innerHTML += `<div class="carousel__slider__item"">
            <div class="item__3d-frame">
                <div class="item__3d-frame__box item__3d-frame__box--front card">
                    <div class="card">
                        <div class="card__image"><img src="./sources/${e.id}.png" alt=""></div>
                        <div class="card__title">${e.name}</div>
                        <div class="card__email">${e.email}</div>
            
                    </div>
            
                </div>
                <div class="item__3d-frame__box item__3d-frame__box--left"></div>
                <div class="item__3d-frame__box item__3d-frame__box--right"></div>
            </div>
            </div>`
        }

     
    });
    carousel()
}


document.querySelector('.header__button').addEventListener('click', function(event) {
    const inputValue = (document.querySelector('.header__input').value).toLowerCase();
    show(inputValue)
  });

show('')