
// const secHeight = (document.querySelector('.sec01').offsetHeight) + (document.querySelector('.sec02').offsetHeight)

// const bgSvg = document.querySelector('.bg_img')
// bgSvg.style.height = secHeight+"px";
window.onload = function () {
  loadIn()
function loadIn(){
  headSc();
  openSub();
  mobOpen();
  changeLang();
    }
    function headSc(){
      const header = document.querySelector('header');
  
      // 헤더부분 스크롤 함수
      window.addEventListener('scroll', function () {
        let sc = window.scrollY;
        if (sc > 50) {
          header.classList.add('white');
          header.style.top = 0;
    
        } else {
          header.classList.remove('white')
        }
      })
  
    }

    function openSub(){
      const navList = document.querySelector('.nav_list')
      const navMenu = navList.querySelectorAll('.nav_list > li')


      navMenu[0].addEventListener('mouseover',function(){
        let subList =navMenu[0].querySelector('.sub_menu')
      subList.style.height = subList.querySelectorAll('li').length * 100 + "px"
      })
      navMenu[0].addEventListener('mouseout',function(){
        let subList =navMenu[0].querySelector('.sub_menu')
        subList.style.height = 0;
      })

      navMenu[navMenu.length - 1].addEventListener('mouseover',function(){
        let subList =navMenu[navMenu.length - 1].querySelector('.sub_menu')
      subList.style.height = subList.querySelectorAll('li').length * 100 + "px"
      })
      navMenu[navMenu.length - 1].addEventListener('mouseout',function(){
        let subList =navMenu[navMenu.length - 1].querySelector('.sub_menu')
        subList.style.height = 0;
      })

    }

    function mobOpen(){
      const hBtn = document.querySelector('.h_btn')
      const mMenu = document.querySelector('.m_menu')
      const btnClose = document.querySelector('.btn_close')
      const mNavList = document.querySelector('.m_nav_list')
      hBtn.addEventListener('click',function(){
        mMenu.classList.add('show')
      })
      btnClose.addEventListener('click',function(){
        mMenu.classList.remove('show')
      })
      mNavList.addEventListener('click',function(){
        mMenu.classList.remove('show')
      })
    }


    function changeLang(){
      const lang = document.querySelectorAll('.languege')
      let krLeng = document.querySelectorAll('.kr')
      let jpLeng = document.querySelectorAll('.jp')

      for(let i = 0; i< lang.length;i++){
        lang[i].addEventListener('click', function(){

          if(lang[i].classList.contains('kor')){
              
            lang[0].classList.add('on')
            lang[1].classList.remove('on')
            lang[2].classList.add('on')
            lang[3].classList.remove('on')

            for(let j =0; j<jpLeng.length; j++){
              krLeng[j].style.display ='block'
              jpLeng[j].style.display = 'none';

            }
          }
          else if(lang[i].classList.contains('jpn')){
            lang[1].classList.add('on')
              lang[3].classList.add('on')
            lang[0].classList.remove('on')
              lang[2].classList.remove('on')
  
              for(let j =0; j<krLeng.length; j++){
                krLeng[j].style.display = 'none';
                jpLeng[j].style.display ='block'
              }
          }
        })
      }
      
    }

  }