import React, { useEffect } from "react";
import './main.css';
import { onOpenAutorModal } from "../reduser/reduser";
import { AppDispatch } from "../store/store";
import { useDispatch } from "react-redux";
import infinity from '../../assets/infinity.png';

interface MainProps {} 

const Main: React.FC<MainProps> = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const slider = document.querySelector('.slider') as HTMLDivElement | null;
    const containerOfSlides = document.querySelector('.containerOfSlides') as HTMLDivElement | null;
    const slides = document.querySelectorAll('.slide') as NodeListOf<HTMLDivElement>;
    const next = document.querySelector('.next') as HTMLDivElement;
    const back = document.querySelector('.back') as HTMLDivElement;
    const counter = document.querySelector('.counter') as HTMLSpanElement;
    const counterGlobal = document.querySelector('.counterGlobal') as HTMLSpanElement;
    const purpleBlocks1 = document.querySelector('.purpleBlocks1') as HTMLDivElement;
    const purpleBlocks2 = document.querySelector('.purpleBlocks2') as HTMLDivElement;
    
    function createBlock1(): HTMLDivElement {
      const block = document.createElement('div');
      const image = document.createElement('img');
      
      block.classList.add('purpleBlock');

      image.src = infinity;
      image.alt = "";
      image.classList.add('infinityPic');

      block.append(image);

      purpleBlocks1.append(block);
      block.style.willChange = 'transform';
      return block;
    }

    function createBlock2(): HTMLDivElement {
      const block = document.createElement('div');
      const image = document.createElement('img');

      block.classList.add('purpleBlock');
      
      image.src = infinity;
      image.alt = "";
      image.classList.add('infinityPic');

      block.append(image);

      purpleBlocks2.append(block);
      block.style.willChange = 'transform';
      return block;
    }

    const windowWidth = window.innerWidth;

    const isMobileDevice = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    function animation() {
      if (windowWidth > 800 && !isMobileDevice) {
        const block1 = createBlock1();
        const block2 = createBlock1();
        const block3 = createBlock1();
        const block4 = createBlock2();
        const block5 = createBlock2();
        const block6 = createBlock2();
    
        interface Blocks {
          element: HTMLDivElement;
          posUp: number;
          posAround: number;
          move: boolean;
        }
    
        const blocks: Blocks[] = [
          {
            element: block1,
            posUp: 1,
            posAround: 1,
            move: true
          },
          {
            element: block2,
            posUp: 1,
            posAround: 1,
            move: true
          },
          {
            element: block3,
            posUp: 1,
            posAround: 1,
            move: true
          },
          {
            element: block4,
            posUp: 1,
            posAround: 1,
            move: true
          },
          {
            element: block5,
            posUp: 1,
            posAround: 1,
            move: true
          },
          {
            element: block6,
            posUp: 1,
            posAround: 1,
            move: true
          }
        ];
    
        const animate = () => {
          blocks.forEach(block => {
            if (block.move) {
              if (block.posUp < 100) {
                block.posUp += 1.5;
              } else {
                block.move = false;
                block.posUp -= 1.5;
              }
            } else {
              if (block.posUp > 1) {
                block.posUp -= 1.5;
              } else {
                block.move = true;
                block.posUp += 1.5;
              }
            }
    
            block.posAround += 2;
    
            block.element.style.transform = `rotate(${block.posAround}deg)`;
            block.element.style.bottom = `${block.posUp}px`;
          });
          requestAnimationFrame(animate);
        };
    
        animate();
      } else {
        const block1 = createBlock1();
        const block2 = createBlock1();
        const block3 = createBlock1();
        const block4 = createBlock1();
        const block5 = createBlock2();
        const block6 = createBlock2();
        const block7 = createBlock2();
        const block8 = createBlock2();
    
        interface Blocks {
          element: HTMLDivElement;
          posUp: number;
          posAround: number;
          move: boolean;
        }
    
        const blocks: Blocks[] = [
          {
            element: block1,
            posUp: 1,
            posAround: 1,
            move: true
          },
          {
            element: block2,
            posUp: 1,
            posAround: 1,
            move: true
          },
          {
            element: block3,
            posUp: 1,
            posAround: 1,
            move: true
          },
          {
            element: block4,
            posUp: 1,
            posAround: 1,
            move: true
          },
          {
            element: block5,
            posUp: 1,
            posAround: 1,
            move: true
          },
          {
            element: block6,
            posUp: 1,
            posAround: 1,
            move: true
          },
          {
            element: block7,
            posUp: 1,
            posAround: 1,
            move: true
          },
          {
            element: block8,
            posUp: 1,
            posAround: 1,
            move: true
          }
        ];
    
        const animate = () => {
          blocks.forEach(block => {
            if (block.move) {
              if (block.posUp < 100) {
                block.posUp += 1.5;
              } else {
                block.move = false;
                block.posUp -= 1.5;
              }
            } else {
              if (block.posUp > 1) {
                block.posUp -= 1.5;
              } else {
                block.move = true;
                block.posUp += 1.5;
              }
            }
    
            block.posAround += 2;
    
            block.element.style.transform = `rotate(${block.posAround}deg)`;
            block.element.style.bottom = `${block.posUp}px`;
          });
          requestAnimationFrame(animate);
        };
    
        animate();
      }
    }

    animation();

    if (slider && containerOfSlides && slides.length > 0) {
      let slideIndex = 1;

      function showSlide(index: number) {
        if (index > slides.length) {
          slideIndex = 1;
        } else if (index < 1) {
          slideIndex = slides.length;
        }

        slides.forEach(slide => {
          (slide as HTMLDivElement).style.display = 'none';
        });

        if (slides[slideIndex - 1]) {
          (slides[slideIndex - 1] as HTMLDivElement).style.display = 'block';
        }

        counter.textContent = `${slideIndex}`;
        counterGlobal.textContent = `/${slides.length}`
      };

      showSlide(slideIndex);

      function plusSlides(num: number) {
        showSlide(slideIndex += num)
      }

      next.addEventListener('click', () => {
        plusSlides(1);
      });
      back.addEventListener('click', () => {
        plusSlides(-1);
      });
    }

  }, []);

  function handleOpenModal() {
    dispatch(onOpenAutorModal());
  }

  return (
    <div className="main">
      <div className="purpleBlocks1">
      </div>
      <div className="content">
          <div className="aboutAutor">
            <div className="autorDescription">
              <div className="title">
                Обо мне
              </div>
              <div className="description">
                Hello there, Я Танос(настоящее имя Алексей), мне 17 лет. 
                Я уже несколько лет обучаюсь в айти сфере, стек моих навыков вы можете 
                посмотреть рядом. Сейчас я пробуюсь в качестве фрилансера и готов недорого
                сделать вам сайт. 
              </div>
            </div>
            <div className="slider">
              <div className="titleAboutSlider">
                Мой стек <span className="counter"></span><span className="counterGlobal"></span>
              </div>
              <div className="next">
                +
              </div>
              <div className="containerOfSlides">
                <div className="slide">
                  <img className="photo" src="https://cdn.glitch.global/b10fa02e-f884-4559-ad0f-54ac66f86f79/thumbnails%2Fhtml.jpg?1731419769006"
                    alt="" />
                </div>
                <div className="slide">
                  <img className="photo" src="https://cdn.glitch.global/b10fa02e-f884-4559-ad0f-54ac66f86f79/thumbnails%2Fcss.webp?1731419777973"
                    alt="" />
                </div>
                <div className="slide">
                  <img className="photo" src="https://cdn.glitch.global/b10fa02e-f884-4559-ad0f-54ac66f86f79/thumbnails%2Fjs.jpg?1731419784875"
                    alt="" />
                </div>
                <div className="slide">
                  <img className="photo" src="https://cdn.glitch.global/b10fa02e-f884-4559-ad0f-54ac66f86f79/thumbnails%2FTypeScript.webp?1742461420078"
                    alt="" />
                </div>
                <div className="slide">
                  <img className="photo" src="https://cdn.glitch.global/b10fa02e-f884-4559-ad0f-54ac66f86f79/thumbnails%2FReact.png?1735986150454"
                    alt="" />
                </div>
                <div className="slide">
                  <img className="photo" src="https://cdn.glitch.global/b10fa02e-f884-4559-ad0f-54ac66f86f79/thumbnails%2Fredux.webp?1744810757777"
                    alt="" />
                </div>
                <div className="slide">
                  <img className="photo" src="https://avatars.mds.yandex.net/i?id=a72fc454e8c4fca86fd5b92f351ec25b8515d42b-16458733-images-thumbs&n=13"
                    alt="" />
                </div>
                <div className="slide">
                  <img className="photo" src="https://dipstrategy.co.id/blog/wp-content/uploads/2024/05/nextjs.webp"
                    alt="" />
                </div>
              </div>
              <div className="back">
                -
              </div>
            </div>
          </div>
          <div className="frilance">
            <div className="frilanceTitle">
              <div className="frTitle">
                Вы можете заказать у меня создание простой сайт-визитки или сложного веб-проекта за цену указаную ниже.
              </div>
            </div>
            <div className="aboutTrade">
              <div className="trade1">
                <div className="titleOfTrade">Сайт-визитка</div>
                <div className="descriptionOfTrade">
                  Хочешь стильный и лаконичный сайт, который будет выглядеть круто и работать быстро? Сделаю для тебя сайт, в котором будет только самое необходимое: информация о тебе, твои контакты и примеры работ (если есть). Никаких лишних деталей, только чистый дизайн и удобство для посетителей.
                </div>
                <div className="price">
                  <p>1500 руб.</p>
                </div>
              </div>
              <div className="trade2">
                <div className="titleOfTrade">Веб-проект</div>
                <div className="description">
                  <div className="descriptionOfTrade">
                    Хочешь не просто сайт-визитку, а целый онлайн-мир? Сделаю для тебя расширенный многостраничный сайт с индивидуальным дизайном, где ты сможешь создать всё, что угодно: блог, портфолио, сайт для своей команды или даже интерактивное приложение с разными разделами и возможностями.
                  </div>
                </div>
                <div className="price">
                  <p>3000 руб.</p>
                </div>
              </div>
            </div>
            <div className="meetAutor">
              <div>
                <button className="meetAutorBtn" onClick={handleOpenModal}>Связатся с автором</button>
              </div>
            </div>
            </div>
            <div className="portfolio">
              <div className="portfolioTitle">
              <div className="prtTitle">
                А здесь представлены некоторые из моих работ.
              </div>
              </div>
              <div className="portfolioWorks">
                <div className="work">
                <a className="link" href="https://click-race-nine.vercel.app" target="blank">
                  <div className="workContent1">
                  </div>
                  <div className="workTitle">
                    Click race
                  </div>
                  </a>
                </div>
                <div className="work">
                <a className="link" href="https://plans-for-today.vercel.app" target="blank">
                  <div className="workContent2">
                  </div>
                  <div className="workTitle">
                    Plans for today
                  </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="purpleBlocks2">
          </div> 
      </div>
  );
};

export default Main;