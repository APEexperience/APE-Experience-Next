import React, { useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const SobreMi = (props) => {
  const translate = useTranslations()
  useEffect(() => import('@lottiefiles/lottie-player'), [])
  return (
    <>
      <div className="sobre-mi-container10">
        <Head>
          <title>Sobre-mi - APE Experience</title>
          <meta property="og:title" content="Sobre-mi - APE Experience" />
        </Head>
        <div className="sobre-mi-header">
          <header data-thq="thq-navbar" className="sobre-mi-navbar">
            <Link href="/">
              <a className="sobre-mi-link10">
                <img
                  alt="APE Experience"
                  src="/Material web/logo-optimizado-600h.png"
                  className="sobre-mi-image1"
                />
              </a>
            </Link>
            <div
              data-thq="thq-navbar-nav"
              data-role="Nav"
              className="sobre-mi-desktop-menu"
            >
              <nav
                data-thq="thq-navbar-nav-links"
                data-role="Nav"
                className="sobre-mi-nav1"
              >
                <Link href="/">
                  <a className="sobre-mi-link12 navLink">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_kTztg1'),
                      }}
                    ></span>
                  </a>
                </Link>
                <Link href="/sobre-mi">
                  <a className="sobre-mi-link14 navLink">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_HSzXzH'),
                      }}
                    ></span>
                  </a>
                </Link>
                <Link href="/servicios">
                  <a className="sobre-mi-link16 navLink">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link__uxkUY'),
                      }}
                    ></span>
                  </a>
                </Link>
                <Link href="/proyectos">
                  <a className="sobre-mi-link18 navLink">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_taRveG'),
                      }}
                    ></span>
                  </a>
                </Link>
                <Link href="/blog">
                  <a className="sobre-mi-link20 navLink">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_oQk_Yu'),
                      }}
                    ></span>
                  </a>
                </Link>
                <Link href="/contacto">
                  <a className="sobre-mi-link22 navLink">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_BSeRnv'),
                      }}
                    ></span>
                  </a>
                </Link>
              </nav>
              <Link href="/solicitar-servicio">
                <a className="sobre-mi-link23 button">
                  <span className="sobre-mi-text10">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_2I8ciz'),
                      }}
                    ></span>
                  </span>
                  <svg viewBox="0 0 1024 1024" className="sobre-mi-icon10">
                    <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                  </svg>
                </a>
              </Link>
            </div>
            <div data-thq="thq-burger-menu" className="sobre-mi-burger-menu">
              <svg viewBox="0 0 1024 1024" className="sobre-mi-icon12">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="sobre-mi-mobile-menu">
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="sobre-mi-nav2"
              >
                <div className="sobre-mi-container11">
                  <h2 className="sobre-mi-text11">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_dwelKT'),
                      }}
                    ></span>
                  </h2>
                  <div
                    data-thq="thq-close-menu"
                    className="sobre-mi-menu-close"
                  >
                    <svg viewBox="0 0 1024 1024" className="sobre-mi-icon14">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav
                  data-thq="thq-mobile-menu-nav-links"
                  data-role="Nav"
                  className="sobre-mi-nav3"
                >
                  <span className="navLink sobre-mi-text12">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_hjs8pM'),
                      }}
                    ></span>
                  </span>
                  <span className="navLink sobre-mi-text13">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_pLsbcp'),
                      }}
                    ></span>
                  </span>
                  <span className="navLink sobre-mi-text14">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_xwMoSA'),
                      }}
                    ></span>
                  </span>
                  <span className="navLink sobre-mi-text15">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text__VS3W3'),
                      }}
                    ></span>
                  </span>
                  <span className="navLink sobre-mi-text16">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_x4jpYI'),
                      }}
                    ></span>
                  </span>
                </nav>
                <div className="sobre-mi-button-container">
                  <button className="sobre-mi-login button">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Login_I0cxFt'),
                      }}
                    ></span>
                  </button>
                  <button className="button sobre-mi-register2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Register_Ix8GxQ'),
                      }}
                    ></span>
                  </button>
                </div>
                <div className="sobre-mi-icon-group">
                  <div className="sobre-mi-icons">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="sobre-mi-icon16"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="sobre-mi-icon18"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 602.2582857142856 1024"
                      className="sobre-mi-icon20"
                    >
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <img
                alt="image"
                src="/quote-background.svg"
                className="sobre-mi-background"
              />
            </div>
          </header>
        </div>
        <div className="sobre-mi-container12">
          <div className="sobre-mi-container13">
            <div className="sobre-mi-container14">
              <img
                alt="image"
                src="https://ape-cloud.s3.us-east-2.amazonaws.com/photo_5010571185125173703_y+(1).jpg"
                className="sobre-mi-image2"
              />
            </div>
            <div className="sobre-mi-container15">
              <h1 className="sobre-mi-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_koM4oV'),
                  }}
                ></span>
              </h1>
              <span className="sobre-mi-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_WRNDJB'),
                  }}
                ></span>
              </span>
            </div>
          </div>
        </div>
        <div className="sobre-mi-container16">
          <div className="sobre-mi-container17">
            <h1 className="sobre-mi-text19">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_gcT34-'),
                }}
              ></span>
            </h1>
            <span className="sobre-mi-text20">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_Myn7GX'),
                }}
              ></span>
            </span>
          </div>
          <div className="sobre-mi-container18">
            <div className="sobre-mi-video1">
              <video
                src
                muted
                poster="https://ape-cloud.s3.us-east-2.amazonaws.com/FONDO-APE-EXPERIENCE-TRABAJANDO.jpg"
                autoPlay
                controls
                className="sobre-mi-video2"
              ></video>
            </div>
          </div>
        </div>
        <div className="sobre-mi-container19">
          <div className="sobre-mi-div1">
            <lottie-player
              src="https://lottie.host/45dd0d05-d843-4244-bf4d-358da7f04713/z8I1SKW3aK.json"
              loop
              speed="1"
              autoplay
              background="transparent"
            ></lottie-player>
          </div>
        </div>
        <div className="sobre-mi-container20">
          <div className="sobre-mi-container21">
            <div className="sobre-mi-div2">
              <lottie-player
                src="https://lottie.host/155c8faf-8b48-4ef6-9d07-69f51e13aac5/cCehkQsT2x.json"
                loop
                speed="2"
                autoplay
                background="transparent"
              ></lottie-player>
            </div>
          </div>
          <div className="sobre-mi-container22">
            <h1 className="sobre-mi-text21">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_lu5FEz'),
                }}
              ></span>
            </h1>
            <span className="sobre-mi-text22">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_TvDgf-'),
                }}
              ></span>
            </span>
          </div>
        </div>
        <div className="sobre-mi-container23">
          <div className="sobre-mi-container24">
            <h1 className="sobre-mi-text23">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_WZFYgQ'),
                }}
              ></span>
            </h1>
          </div>
          <div className="sobre-mi-container25">
            <div className="sobre-mi-div3">
              <lottie-player
                src="https://lottie.host/d425ea44-5f2c-4de9-8a42-d4c7dcb31560/KAj5CELGpU.json"
                speed="1"
                autoplay
                background="transparent"
              ></lottie-player>
            </div>
          </div>
        </div>
        <footer className="sobre-mi-footer">
          <div className="sobre-mi-content1">
            <div className="sobre-mi-details1">
              <Link href="/">
                <a className="sobre-mi-link24">
                  <img
                    alt="APE Experience Pié de Página Logo Negro"
                    src="/Material web/logo-optimizado-600h.png"
                    className="sobre-mi-image3"
                  />
                </a>
              </Link>
              <p className="sobre-mi-description">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('Description_cIX-Qf'),
                  }}
                ></span>
              </p>
            </div>
          </div>
          <div className="sobre-mi-content2">
            <div className="sobre-mi-details2">
              <span className="sobre-mi-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_4ngINE'),
                  }}
                ></span>
              </span>
              <Link href="/">
                <a className="sobre-mi-link25 a.link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_LiNZ3D'),
                    }}
                  ></span>
                </a>
              </Link>
              <Link href="/sobre-mi">
                <a className="sobre-mi-link26 a.link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_CPOORd'),
                    }}
                  ></span>
                </a>
              </Link>
              <Link href="/servicios">
                <a className="sobre-mi-link27 a.link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_UIv9sQ'),
                    }}
                  ></span>
                </a>
              </Link>
              <Link href="/proyectos">
                <a className="sobre-mi-link28 a.link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_C7Fn3P'),
                    }}
                  ></span>
                </a>
              </Link>
              <Link href="/blog">
                <a className="sobre-mi-link29 a.link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_CM7qo1'),
                    }}
                  ></span>
                </a>
              </Link>
              <Link href="/contacto">
                <a className="sobre-mi-link30 a.link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_yXG4CM'),
                    }}
                  ></span>
                </a>
              </Link>
            </div>
            <div className="sobre-mi-socials">
              <a
                href="https://instagram.com/ape_experience/"
                target="_blank"
                rel="noreferrer noopener"
                className="sobre-mi-link31"
              >
                <img
                  alt="Instagram APE Experience"
                  src="/instagram.svg"
                  className="sobre-mi-image4 social"
                />
              </a>
              <a
                href="https://facebook.com/apeexperienceve/"
                target="_blank"
                rel="noreferrer noopener"
                className="sobre-mi-link32"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="sobre-mi-icon22 social"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://threads.com/ape_experience/"
                target="_blank"
                rel="noreferrer noopener"
                className="sobre-mi-link33"
              >
                <img
                  alt="Threads APE Experience"
                  src="/Material web/threads-600h.png"
                  className="sobre-mi-image5 social"
                />
              </a>
            </div>
            <span className="sobre-mi-copyright">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('Copyright_K859iv'),
                }}
              ></span>
            </span>
          </div>
        </footer>
        <div>
          <div className="sobre-mi-container27">
            <Script
              html={`<script>
    ScrollReveal().reveal('.speaker');
    ScrollReveal().reveal('.image-notes');
</script>`}
            ></Script>
          </div>
        </div>
        <div>
          <div className="sobre-mi-container29">
            <Script
              html={`<style>
#scrollbar::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}

#scrollbar::-webkit-scrollbar
{
	height: 12px;
	background-color: #F5F5F5;
	border-radius: 10px;
}

#scrollbar::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #555;
}
</style>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .sobre-mi-container10 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .sobre-mi-header {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            background-color: #542ccc;
          }
          .sobre-mi-navbar {
            width: 100%;
            display: flex;
            z-index: 1000;
            position: relative;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            justify-content: space-between;
          }
          .sobre-mi-link10 {
            display: contents;
          }
          .sobre-mi-image1 {
            width: 104px;
            height: 114px;
            object-fit: cover;
            text-decoration: none;
          }
          .sobre-mi-desktop-menu {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
          }
          .sobre-mi-nav1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .sobre-mi-link12 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
            text-decoration: none;
          }
          .sobre-mi-link14 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
            text-decoration: none;
          }
          .sobre-mi-link16 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
            text-decoration: none;
          }
          .sobre-mi-link18 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
            text-decoration: none;
          }
          .sobre-mi-link20 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
            text-decoration: none;
          }
          .sobre-mi-link22 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
            text-decoration: none;
          }
          .sobre-mi-link23 {
            text-decoration: none;
          }
          .sobre-mi-text10 {
            font-size: 16px;
            font-family: Open Sans;
            text-transform: uppercase;
          }
          .sobre-mi-icon10 {
            width: 16px;
            height: 16px;
          }
          .sobre-mi-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .sobre-mi-icon12 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .sobre-mi-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            padding: 32px;
            z-index: 100;
            position: fixed;
            transform: translateX(100%);
            transition: 0.5s;
            flex-direction: column;
            justify-content: space-between;
            background-color: #ffffff;
          }
          .sobre-mi-nav2 {
            display: flex;
            z-index: 20;
            align-items: flex-start;
            flex-direction: column;
          }
          .sobre-mi-container11 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .sobre-mi-text11 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
            line-height: 45px;
          }
          .sobre-mi-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .sobre-mi-icon14 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .sobre-mi-nav3 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .sobre-mi-button-container {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-layout-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .sobre-mi-login {
            margin-right: var(--dl-layout-space-twounits);
          }
          .sobre-mi-icon-group {
            display: flex;
            z-index: 20;
          }
          .sobre-mi-icons {
            display: flex;
          }
          .sobre-mi-icon16 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
            margin-right: var(--dl-layout-space-twounits);
          }
          .sobre-mi-icon18 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
            margin-right: var(--dl-layout-space-twounits);
          }
          .sobre-mi-icon20 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .sobre-mi-background {
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 80%;
            margin: auto;
            position: absolute;
            object-fit: cover;
          }
          .sobre-mi-container12 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-top: 5%;
            padding-left: 10%;
            padding-right: 10%;
            flex-direction: column;
            padding-bottom: 5%;
            background-size: cover;
            justify-content: center;
            background-image: linear-gradient(
                90deg,
                rgba(44, 62, 80, 0.6) 0%,
                rgba(44, 62, 80, 0.8) 100%
              ),
              url('https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxjb2RlfGVufDB8fHx8MTY5NDc5NTUwNnww&ixlib=rb-4.0.3&w=1500');
          }
          .sobre-mi-container13 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            padding: 5%;
            align-items: center;
            border-radius: 20px;
            flex-direction: row;
            background-size: cover;
            justify-content: center;
            background-image: url('/Material web/3aecc901-6c66-4a79-8412-fb8fd76fef35%20(1)-1500w.png'),
              linear-gradient(
                90deg,
                rgb(255, 255, 255) 0%,
                rgb(255, 255, 255) 100%
              );
          }
          .sobre-mi-container14 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            align-items: center;
            padding-left: 5%;
            padding-right: 5%;
            flex-direction: column;
            justify-content: flex-start;
          }
          .sobre-mi-image2 {
            width: 90%;
            object-fit: cover;
            border-radius: 20px;
          }
          .sobre-mi-container15 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .sobre-mi-text17 {
            font-style: normal;
            margin-top: 2%;
            font-family: Open Sans;
            font-weight: 600;
            margin-bottom: 2%;
          }
          .sobre-mi-text18 {
            font-size: 18px;
            font-style: normal;
            text-align: justify;
            font-family: Open Sans;
            font-weight: 300;
            line-height: 1.5;
          }
          .sobre-mi-container16 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-top: 5%;
            padding-left: 10%;
            padding-right: 10%;
            flex-direction: row;
            padding-bottom: 5%;
            justify-content: center;
            background-color: rgba(44, 204, 178, 0.1);
          }
          .sobre-mi-container17 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .sobre-mi-text19 {
            font-style: normal;
            margin-top: 2%;
            font-family: Open Sans;
            font-weight: 600;
            margin-bottom: 2%;
          }
          .sobre-mi-text20 {
            font-size: 18px;
            font-style: normal;
            text-align: justify;
            font-family: Open Sans;
            font-weight: 300;
            line-height: 1.5;
          }
          .sobre-mi-container18 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            align-items: flex-start;
            padding-left: 5%;
            padding-right: 5%;
            flex-direction: column;
            justify-content: flex-start;
          }
          .sobre-mi-video1 {
            width: 100%;
            cursor: pointer;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .sobre-mi-video2 {
            width: 100%;
            transition: 0.3s;
            border-radius: 20px;
          }
          .sobre-mi-video2:hover {
            box-shadow: 0px 0px 30px 0px #000000;
          }
          .sobre-mi-container19 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: stretch;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .sobre-mi-div1 {
            width: 100%;
            height: 65.5vh;
          }
          .sobre-mi-container20 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-top: 5%;
            padding-left: 10%;
            padding-right: 10%;
            flex-direction: row;
            padding-bottom: 5%;
            justify-content: center;
          }
          .sobre-mi-container21 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            align-items: flex-start;
            padding-left: 5%;
            padding-right: 5%;
            flex-direction: column;
            justify-content: flex-start;
          }
          .sobre-mi-div2 {
            width: 100%;
            height: 480px;
          }
          .sobre-mi-container22 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .sobre-mi-text21 {
            font-style: normal;
            margin-top: 2%;
            font-family: Open Sans;
            font-weight: 600;
            margin-bottom: 2%;
          }
          .sobre-mi-text22 {
            font-size: 18px;
            font-style: normal;
            text-align: justify;
            font-family: Open Sans;
            font-weight: 300;
            line-height: 1.5;
          }
          .sobre-mi-container23 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-top: 2%;
            padding-left: 10%;
            padding-right: 10%;
            flex-direction: row;
            padding-bottom: 2%;
            justify-content: center;
            background-image: linear-gradient(
                90deg,
                rgb(44, 204, 178) 0%,
                rgba(44, 204, 178, 0.7) 100%
              ),
              url('/Material web/fondo-blog-destacado-ape-experience%20(1)-1500w.jpg');
          }
          .sobre-mi-container24 {
            flex: 0 0 auto;
            width: 80%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .sobre-mi-text23 {
            font-style: normal;
            font-family: Open Sans;
            font-weight: 600;
          }
          .sobre-mi-container25 {
            flex: 0 0 auto;
            width: 20%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .sobre-mi-div3 {
            width: 100%;
            filter: brightness(0);
            height: 240px;
          }
          .sobre-mi-footer {
            width: 100%;
            height: 588px;
            display: flex;
            align-items: center;
            padding-top: 120px;
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-fiveunits);
            background-color: #000000;
          }
          .sobre-mi-content1 {
            gap: var(--dl-layout-space-threeunits);
            width: 50%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
          }
          .sobre-mi-details1 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
          }
          .sobre-mi-link24 {
            display: contents;
          }
          .sobre-mi-image3 {
            width: 200px;
            align-self: flex-start;
            object-fit: cover;
            text-decoration: none;
          }
          .sobre-mi-description {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 18px;
            line-height: 27px;
          }
          .sobre-mi-content2 {
            gap: var(--dl-layout-space-threeunits);
            width: 50%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
          }
          .sobre-mi-details2 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
          }
          .sobre-mi-text24 {
            color: var(--dl-color-gray-white);
            font-size: 22px;
            align-self: flex-start;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            text-transform: uppercase;
          }
          .sobre-mi-link25 {
            color: var(--dl-color-gray-white);
            line-height: 1.15;
            text-decoration: none;
          }
          .sobre-mi-link26 {
            color: var(--dl-color-gray-white);
            line-height: 1.15;
            text-decoration: none;
          }
          .sobre-mi-link27 {
            color: var(--dl-color-gray-white);
            line-height: 1.15;
            text-decoration: none;
          }
          .sobre-mi-link28 {
            color: var(--dl-color-gray-white);
            line-height: 1.15;
            text-decoration: none;
          }
          .sobre-mi-link29 {
            color: var(--dl-color-gray-white);
            line-height: 1.15;
            text-decoration: none;
          }
          .sobre-mi-link30 {
            color: var(--dl-color-gray-white);
            line-height: 1.15;
            text-decoration: none;
          }
          .sobre-mi-socials {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: row;
          }
          .sobre-mi-link31 {
            display: contents;
          }
          .sobre-mi-image4 {
            filter: invert(7);
            text-decoration: none;
          }
          .sobre-mi-link32 {
            display: contents;
          }
          .sobre-mi-icon22 {
            width: 24px;
            filter: invert(7);
            height: 24px;
            text-decoration: none;
          }
          .sobre-mi-link33 {
            display: contents;
          }
          .sobre-mi-image5 {
            filter: invert(7);
            text-decoration: none;
          }
          .sobre-mi-copyright {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 18px;
            line-height: 21px;
          }
          .sobre-mi-container27 {
            display: contents;
          }
          .sobre-mi-container29 {
            display: contents;
          }
          @media (max-width: 1440px) {
            .sobre-mi-div1 {
              height: 450px;
            }
          }
          @media (max-width: 1200px) {
            .sobre-mi-header {
              background-color: #542ccc;
            }
            .sobre-mi-div1 {
              height: 375px;
            }
          }
          @media (max-width: 991px) {
            .sobre-mi-image1 {
              width: 88px;
              height: 87px;
            }
            .sobre-mi-link12 {
              font-size: 16px;
            }
            .sobre-mi-link14 {
              font-size: 16px;
            }
            .sobre-mi-link16 {
              font-size: 16px;
            }
            .sobre-mi-link18 {
              font-size: 16px;
            }
            .sobre-mi-link20 {
              font-size: 16px;
            }
            .sobre-mi-link22 {
              font-size: 16px;
            }
            .sobre-mi-link23 {
              padding-top: 1%;
              padding-left: 2%;
              padding-right: 2%;
              padding-bottom: 1%;
            }
            .sobre-mi-text10 {
              font-size: 14px;
              font-family: Open Sans;
              text-transform: uppercase;
            }
            .sobre-mi-container13 {
              gap: var(--dl-layout-space-unit);
              padding: var(--dl-layout-space-twounits);
              flex-direction: column;
            }
            .sobre-mi-container14 {
              width: 100%;
            }
            .sobre-mi-image2 {
              width: 480px;
              height: 480px;
            }
            .sobre-mi-container15 {
              width: 100%;
            }
            .sobre-mi-container16 {
              gap: var(--dl-layout-space-unit);
              flex-direction: column-reverse;
            }
            .sobre-mi-container17 {
              width: 100%;
            }
            .sobre-mi-container18 {
              width: 100%;
            }
            .sobre-mi-div1 {
              height: 310px;
            }
            .sobre-mi-container20 {
              padding: var(--dl-layout-space-twounits);
              flex-direction: column;
            }
            .sobre-mi-container21 {
              width: 100%;
            }
            .sobre-mi-container22 {
              width: 100%;
            }
            .sobre-mi-container23 {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 767px) {
            .sobre-mi-image1 {
              width: 140px;
              height: 152px;
            }
            .sobre-mi-desktop-menu {
              display: none;
            }
            .sobre-mi-burger-menu {
              display: flex;
            }
            .sobre-mi-icon12 {
              fill: white;
              width: var(--dl-layout-size-small);
              height: var(--dl-layout-size-small);
            }
            .sobre-mi-nav2 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .sobre-mi-container11 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .sobre-mi-text11 {
              color: #000000;
            }
            .sobre-mi-nav3 {
              gap: var(--dl-layout-space-unit);
            }
            .sobre-mi-text12 {
              color: #000000;
            }
            .sobre-mi-text13 {
              color: rgb(0, 0, 0);
            }
            .sobre-mi-text14 {
              color: rgb(0, 0, 0);
            }
            .sobre-mi-text15 {
              color: rgb(0, 0, 0);
            }
            .sobre-mi-text16 {
              color: rgb(0, 0, 0);
            }
            .sobre-mi-button-container {
              gap: var(--dl-layout-space-unit);
              width: 50%;
              margin-top: 0px;
              align-items: flex-start;
              flex-direction: column;
            }
            .sobre-mi-login {
              width: 100%;
              border-width: 1px;
              margin-right: 0px;
            }
            .sobre-mi-register2 {
              width: 100%;
              border-width: 1px;
            }
            .sobre-mi-icon-group {
              width: 100%;
              justify-content: flex-start;
            }
            .sobre-mi-div1 {
              height: 240px;
            }
            .sobre-mi-footer {
              padding-top: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-twounits);
            }
            .sobre-mi-content1 {
              gap: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .sobre-mi-description {
              font-size: 14px;
              line-height: 21px;
            }
            .sobre-mi-content2 {
              gap: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .sobre-mi-socials {
              gap: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .sobre-mi-mobile-menu {
              padding: 16px;
            }
            .sobre-mi-button-container {
              width: 100%;
            }
            .sobre-mi-icon-group {
              justify-content: center;
            }
            .sobre-mi-container12 {
              padding-left: 5%;
              padding-right: 5%;
            }
            .sobre-mi-container13 {
              gap: var(--dl-layout-space-twounits);
              flex-direction: column;
            }
            .sobre-mi-container14 {
              width: 100%;
            }
            .sobre-mi-image2 {
              width: 100%;
              height: 320px;
            }
            .sobre-mi-container15 {
              width: 100%;
              align-items: center;
            }
            .sobre-mi-text18 {
              font-size: 18px;
              font-style: normal;
              text-align: center;
              font-family: Open Sans;
              font-weight: 300;
              line-height: 1.5;
            }
            .sobre-mi-container16 {
              gap: var(--dl-layout-space-twounits);
              flex-direction: column-reverse;
            }
            .sobre-mi-container17 {
              gap: var(--dl-layout-space-unit);
              width: 100%;
              align-items: center;
            }
            .sobre-mi-text19 {
              text-align: center;
            }
            .sobre-mi-container18 {
              width: 100%;
            }
            .sobre-mi-div1 {
              height: 150px;
            }
            .sobre-mi-container20 {
              flex-direction: column;
            }
            .sobre-mi-container21 {
              width: 100%;
              align-items: center;
            }
            .sobre-mi-div2 {
              width: auto;
              height: auto;
              align-self: center;
            }
            .sobre-mi-container22 {
              width: 100%;
              align-items: center;
            }
            .sobre-mi-container23 {
              gap: var(--dl-layout-space-twounits);
              padding: 5%;
              align-self: center;
              flex-direction: column-reverse;
            }
            .sobre-mi-text23 {
              text-align: center;
            }
            .sobre-mi-container25 {
              width: 100%;
            }
            .sobre-mi-div3 {
              width: 100%;
              height: auto;
              align-self: center;
              padding-left: 0px;
            }
            .sobre-mi-footer {
              gap: var(--dl-layout-space-oneandhalfunits);
              height: auto;
              align-items: center;
              flex-direction: column;
            }
            .sobre-mi-content1 {
              width: 100%;
              max-width: 100%;
              align-self: center;
              align-items: center;
            }
            .sobre-mi-details1 {
              max-width: 100%;
            }
            .sobre-mi-image3 {
              align-self: center;
            }
            .sobre-mi-description {
              font-size: 18px;
              text-align: center;
            }
            .sobre-mi-content2 {
              width: 100%;
              align-self: center;
              align-items: center;
            }
            .sobre-mi-text24 {
              width: 100%;
              text-align: center;
            }
            .sobre-mi-link25 {
              width: 100%;
              text-align: center;
            }
            .sobre-mi-link26 {
              width: 100%;
              text-align: center;
            }
            .sobre-mi-link27 {
              width: 100%;
              text-align: center;
            }
            .sobre-mi-link28 {
              width: 100%;
              text-align: center;
            }
            .sobre-mi-link29 {
              width: 100%;
              text-align: center;
            }
            .sobre-mi-link30 {
              width: 100%;
              text-align: center;
            }
            .sobre-mi-socials {
              justify-content: center;
            }
            .sobre-mi-copyright {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default SobreMi

export async function getStaticProps(context) {
  const messages = (await import('/locales/' + context.locale + '.json'))
    .default
  return {
    props: {
      messages,
      ...context,
    },
  }
}
