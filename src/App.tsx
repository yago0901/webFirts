import Frame from './assets/img/frame.png'
import FrameBlue from './assets/img/frame-blue.png'
import Logo from './assets/img/logo.png'

import FundoHero1 from './assets/img/fundo-hero1.jpg'
import Office1 from './assets/img/office1.jpg'
import Office2 from './assets/img/office2.jpg'

import FundoInteligence from './assets/img/fundo-inteligence.png'
import AbouveHero1 from './assets/img/above-the-hero1.png'
import AboutCard from './assets/img/fundo-card.png'
import Founder from './assets/img/founder.png'
import CounterIcon1 from './assets/img/counter-icon1.png.png'
import CounterIcon2 from './assets/img/counter-icon2.png.png'
import CounterIcon3 from './assets/img/counter-icon3.png.png'
import CounterIcon4 from './assets/img/counter-icon4.png.png'

import Ticket from './assets/svg/exclusive.svg'
import Leads from './assets/svg/leds.svg'
import ReactLogo from './assets/svg/react.svg'
import MagnifyingGlass from './assets/svg/magnifying-glass.svg'
import Suport from './assets/svg/support.svg'

import './App.scss'
import React from 'react'

function App() {

  const estileBackground: React.CSSProperties = {
    position: 'relative',
    backgroundImage: `url(${FundoHero1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100%',
    zIndex: '-1'
  }

  const estileBackgroundInteligence: React.CSSProperties = {
    position: 'relative',
    backgroundImage: `url(${FundoInteligence})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    zIndex: '-1'
  }

  return (
    <>
      <section className='hero'>
        <div style={estileBackground} className='hero__container_hero'>
          <img src={AbouveHero1} alt='Details Hero' className='hero__container_hero__above' />
          <div className='hero__container_hero__center'>
            <div className='hero__container_hero__center__left'>
              <figure className='hero__container_hero__center__left__container_frame'>
                <img src={Frame} alt='Frame' className='hero__container_hero__center__left__container_frame__frame' />
                <p className='hero__container_hero__center__left__container_frame__title_frame'>ENTREGANDO SOLUÇÔES</p>
              </figure>
              <div className='hero__container_hero__center__left__container_titles'>
                <h1 className='hero__container_hero__center__left__container_titles__title'>
                  Sua Landing Page está na Web First
                </h1>
                <p className='hero__container_hero__center__left__container_titles__text'>Sua Landing Page com a Web First tem design otimizado, máxima performance e
                  conversão garantida, destacando seu negócio no ambiente digital!</p>
              </div>
              <div className='hero__container_hero__center__left__cta'>
                <button className='hero__container_hero__center__left__cta__button'>
                  <span>
                    Contato
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section >
      <section className='excellence'>
        <div className='excellence__container'>
          <div className='excellence__container__up'>
            <div className='excellence__container__up__left'>
              <div className='excellence__container__up__left__frame'>
                <img src={FrameBlue} alt='Frame' className='excellence__container__up__left__frame__image' />
                <p className=''>Benefícios</p>
              </div>
              <div className='excellence__container__up__left__texts'>
                <h1 className='excellence__container__up__left__texts__title'>CRIANDO COM EXCELÊNCIA</h1>
              </div>
            </div>
            <div className='excellence__container__up__right'>
              <button className='excellence__container__up__right__button'>
                <span>Contato</span>
              </button>
            </div>
          </div>
          <div className='excellence__container__down'>
            <div className='excellence__container__down__cards'>
              <div className='excellence__container__down__cards__card'>
                <img src={AboutCard} alt='Frame' className='excellence__container__down__cards__card__about_card' />
                <div className='excellence__container__down__cards__card__texts'>
                  <img src={Ticket} alt='Frame' className='excellence__container__down__cards__card__texts__svg' />
                  <h1 className='excellence__container__down__cards__card__texts__title'>
                    Exclusividade
                  </h1>
                  <p className='excellence__container__down__cards__card__texts__text'>
                    Com a WebFirst, sua landing page será única.
                    Nosso time de especialistas em design cria
                    páginas que se destacam, refletindo a
                    identidade exclusiva da sua marca.
                  </p>
                </div>
              </div>
            </div>
            <div className='excellence__container__down__cards'>
              <div className='excellence__container__down__cards__card_center'>
                <img src={AboutCard} alt='Frame' className='excellence__container__down__cards__card_center__about_card' />
                <div className='excellence__container__down__cards__card__texts'>
                  <img src={Leads} alt='Frame' className='excellence__container__down__cards__card__texts__svg' />
                  <h1 className='excellence__container__down__cards__card__texts__title_center'>
                    Alta Conversão
                  </h1>
                  <p className='excellence__container__down__cards__texts__text_center'>
                    A WebFirst cria landing pages focadas em
                    alta conversão, garantindo que cada visitante
                    se torne um cliente em potencial. Designs
                    que maximizam resultados.
                  </p>
                </div>
              </div>
            </div>
            <div className='excellence__container__down__cards'>
              <div className='excellence__container__down__cards__card'>
                <img src={AboutCard} alt='Frame' className='excellence__container__down__cards__card__about_card' />
                <div className='excellence__container__down__cards__card__texts'>
                  <img src={ReactLogo} alt='Frame' className='excellence__container__down__cards__card__texts__svg' />
                  <h1 className='excellence__container__down__cards__card__texts__title'>
                    Ferramentas Atuais
                  </h1>
                  <p className='excellence__container__down__cards__card__texts__text'>
                    Na Web First utilizamos as ferramentas mais
                    avançadas do mercado como React para que
                    sua Landing Page tenha velocidade,
                    responsividade e de fácil manutenção.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
      <section style={estileBackgroundInteligence} className='intelligence'>
        <div className='intelligence__center'>
          <div className='intelligence__center__left'>
            <div className='intelligence__center__left__picture'>
              <img src={Office2} alt='Escritório' className='intelligence__center__left__picture__img' />
              <div className='intelligence__center__left__above_picture'>
                <img src={Office1} alt='Escritório' className='intelligence__center__left__picture__img' />
              </div>
            </div>
          </div>
          <div className='intelligence__center__right'>
            <div className='intelligence__center__right__frame'>
              <img src={FrameBlue} alt='Frame' className='intelligence__center__right__frame__image' />
              <h1 className='excellence__container__down__cards__texts__title'>
                Sobre a Web First
              </h1>
            </div>
            <div className='intelligence__center__right__texts'>
              <h1 className='intelligence__center__right__texts__title'>
                Nossa Inteligência A Seu Favor
              </h1>
              <p className='intelligence__center__right__texts__text'>
                A WebFirst utiliza tecnologia avançada e insights estratégicos para criar soluções digitais personalizadas que impulsionam seu negócio.
                Combinamos experiência e inovação para transformar suas ideias em realidade, sempre focando nos melhores resultados.
              </p>
            </div>
            <div className='intelligence__center__right__cards'>
              <div className='intelligence__center__right__cards__card'>
                <figure className='intelligence__center__right__cards__card__image'>
                  <img src={MagnifyingGlass} alt='lupa' className='intelligence__center__right__cards__card__image__svg' />
                </figure>
                <div className='intelligence__center__right__cards__card__descriptions'>
                  <h1 className='intelligence__center__right__cards__card__descriptions__title'>Cada Detalhe</h1>
                  <p className='intelligence__center__right__cards__card__descriptions__text'>Landing pages intuitivas
                    e fáceis de usar</p>
                </div>
              </div>
              <div className='intelligence__center__right__cards__card'>
                <figure className='intelligence__center__right__cards__card__image'>
                  <img src={Suport} alt='lupa' className='intelligence__center__right__cards__card__image__svg' />
                </figure>
                <div className='intelligence__center__right__cards__card__descriptions'>
                  <h1 className='intelligence__center__right__cards__card__descriptions__title'>Cada Detalhe</h1>
                  <p className='intelligence__center__right__cards__card__descriptions__text'>Landing pages intuitivas
                    e fáceis de usar</p>
                </div>
              </div>
            </div>
            <div className='intelligence__center__right__founders'>
              <div className='intelligence__center__right__founders__button-container'>
                <button className='intelligence__center__right__founders__button-container__button'>
                  <span>
                    Whats
                  </span>
                </button>
              </div>
              <div className='intelligence__center__right__founders__founder'>
                <div className='intelligence__center__right__founders__founder__image'>
                  <img src={Founder} alt="" />
                </div>
                <div className='intelligence__center__right__founders__founder__description'>
                  <h1>Eduardo Castro</h1>
                  <p>CO-Founder</p>
                </div>
              </div>
              <div className='intelligence__center__right__founders__founder'>
                <div className='intelligence__center__right__founders__founder__image'>
                  <img src={Founder} alt="" />
                </div>
                <div className='intelligence__center__right__founders__founder__description'>
                  <h1>Yago Gigeck</h1>
                  <p>CO-Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='solutions'>
        <div className='solutions__banner'>
          <div className='solutions__banner__icon'>
            <img src={CounterIcon1} alt='clientes' />
            <div className='solutions__banner__icon__texts'>
              <h1>10+</h1>
              <p>Clientes Satisfeitos</p>
            </div>
          </div>
          <div className='solutions__banner__icon'>
            <img src={CounterIcon2} alt='clientes' />
            <div className='solutions__banner__icon__texts'>
              <h1>10+</h1>
              <p>Projetos Finalizador</p>
            </div>
          </div>
          <div className='solutions__banner__icon'>
            <img src={CounterIcon3} alt='clientes' />
            <div className='solutions__banner__icon__texts'>
              <h1>100+</h1>
              <p>Protótipos</p>
            </div>
          </div>
          <div className='solutions__banner__icon'>
            <img src={CounterIcon4} alt='clientes' />
            <div className='solutions__banner__icon__texts'>
              <h1>327+</h1>
              <p>Postagens</p>
            </div>
          </div>
        </div>
        <div className='solutions__container'>
          <div className='solutions__container__texts'>
            <div className='solutions__container__texts__mini_tile'>
              <img src={FrameBlue} alt='Frame' className='solutions__container__texts__mini_tile__image' />
              <p>Algumas estratégias</p>
            </div>
            <h1 >AS MELHORES SOLUÇÕES</h1>
          </div>
          <div className='solutions__container__button'>
            <button className='solutions__container__button__btn'>
              <span>Contato</span>
            </button>
          </div>
        </div>
        <h1>Carrossel</h1>
      </section>
      <footer className='footer'>
        <div className='footer__up'>
          <div className='footer__up__info'>
            <img className='footer__up__info__logo' src={Logo} alt="logo" />
            <p>Transforme sua empresa em realidade digital com a Web First!</p>

          </div>
          <div className='footer__up__solutions'>

          </div>
          <div className='footer__up__empty'>

          </div>
          <div className='footer__up__contact'></div>
        </div>
        <div className='footer__down'>

        </div>

      </footer>
    </>
  )
}

export default App
