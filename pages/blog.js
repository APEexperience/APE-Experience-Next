import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Blog = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="blog-container10">
        <Head>
          <title>Blog - APE Experience</title>
          <meta name="description" content={translate.raw('static_4eYrZ_')} />
          <meta property="og:title" content="Blog - APE Experience" />
          <meta
            property="og:description"
            content={translate.raw('static_4eYrZ_')}
          />
        </Head>
        <div className="blog-header">
          <header data-thq="thq-navbar" className="blog-navbar">
            <Link href="/">
              <a className="blog-link10">
                <img
                  alt="APE Experience"
                  src="/Material web/logo-optimizado-600h.png"
                  className="blog-image1"
                />
              </a>
            </Link>
            <div
              data-thq="thq-navbar-nav"
              data-role="Nav"
              className="blog-desktop-menu"
            >
              <nav
                data-thq="thq-navbar-nav-links"
                data-role="Nav"
                className="blog-nav1"
              >
                <Link href="/">
                  <a className="blog-link12 navLink">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_xTyXKU'),
                      }}
                    ></span>
                  </a>
                </Link>
                <Link href="/sobre-mi">
                  <a className="blog-link14 navLink">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_7xL3Qg'),
                      }}
                    ></span>
                  </a>
                </Link>
                <Link href="/servicios">
                  <a className="blog-link16 navLink">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_STy8-1'),
                      }}
                    ></span>
                  </a>
                </Link>
                <Link href="/proyectos">
                  <a className="blog-link18 navLink">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_knx1HU'),
                      }}
                    ></span>
                  </a>
                </Link>
                <Link href="/blog">
                  <a className="blog-link20 navLink">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_WPk5qK'),
                      }}
                    ></span>
                  </a>
                </Link>
                <Link href="/contacto">
                  <a className="blog-link22 navLink">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_BfR6UI'),
                      }}
                    ></span>
                  </a>
                </Link>
              </nav>
              <Link href="/solicitar-servicio">
                <a className="blog-link23 button">
                  <span className="blog-text10">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_ZCqfM5'),
                      }}
                    ></span>
                  </span>
                  <svg viewBox="0 0 1024 1024" className="blog-icon10">
                    <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                  </svg>
                </a>
              </Link>
            </div>
            <div data-thq="thq-burger-menu" className="blog-burger-menu">
              <svg viewBox="0 0 1024 1024" className="blog-icon12">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="blog-mobile-menu">
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="blog-nav2"
              >
                <div className="blog-container11">
                  <h2 className="blog-text11">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_6V1mDW'),
                      }}
                    ></span>
                  </h2>
                  <div data-thq="thq-close-menu" className="blog-menu-close">
                    <svg viewBox="0 0 1024 1024" className="blog-icon14">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav
                  data-thq="thq-mobile-menu-nav-links"
                  data-role="Nav"
                  className="blog-nav3"
                >
                  <span className="navLink blog-text12">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_DIVK3g'),
                      }}
                    ></span>
                  </span>
                  <span className="navLink blog-text13">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_qnxVbZ'),
                      }}
                    ></span>
                  </span>
                  <span className="navLink blog-text14">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_vaRsqW'),
                      }}
                    ></span>
                  </span>
                  <span className="navLink blog-text15">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_gvfHkz'),
                      }}
                    ></span>
                  </span>
                  <span className="navLink blog-text16">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_YGuijK'),
                      }}
                    ></span>
                  </span>
                </nav>
                <div className="blog-button-container">
                  <button className="blog-login button">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Login_0jNqeC'),
                      }}
                    ></span>
                  </button>
                  <button className="button blog-register2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Register_xz7Sp7'),
                      }}
                    ></span>
                  </button>
                </div>
                <div className="blog-icon-group">
                  <div className="blog-icons">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="blog-icon16"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="blog-icon18"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 602.2582857142856 1024"
                      className="blog-icon20"
                    >
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <img
                alt="image"
                src="/quote-background.svg"
                className="blog-background"
              />
            </div>
          </header>
        </div>
        <div className="blog-container12"></div>
        <div className="blog-container13">
          <div className="blog-container14">
            <h1>
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_2Yu8et'),
                }}
              ></span>
            </h1>
          </div>
        </div>
        <div className="blog-container15">
          <div className="blog-container16">
            <h1 className="blog-text18">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_R5ylM6'),
                }}
              ></span>
            </h1>
          </div>
          <button type="button" className="blog-button button">
            <span
              dangerouslySetInnerHTML={{
                __html: translate.raw('text_OZQPKG'),
              }}
            ></span>
          </button>
        </div>
        <div>
          <div className="blog-container18">
            <Script
              html={`<script>
    ScrollReveal().reveal('.speaker');
    ScrollReveal().reveal('.image-notes');
</script>`}
            ></Script>
          </div>
        </div>
        <div>
          <div className="blog-container20">
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
        <footer className="blog-footer">
          <div className="blog-content1">
            <div className="blog-details1">
              <Link href="/">
                <a className="blog-link24">
                  <img
                    alt="APE Experience Pié de Página Logo Negro"
                    src="/Material web/logo-optimizado-600h.png"
                    className="blog-image2"
                  />
                </a>
              </Link>
              <p className="blog-description">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('Description_2MNT3x'),
                  }}
                ></span>
              </p>
            </div>
          </div>
          <div className="blog-content2">
            <div className="blog-details2">
              <span className="blog-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_0u_INw'),
                  }}
                ></span>
              </span>
              <Link href="/">
                <a className="blog-link25 a.link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_-owWu2'),
                    }}
                  ></span>
                </a>
              </Link>
              <Link href="/sobre-mi">
                <a className="blog-link26 a.link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_5VkKNc'),
                    }}
                  ></span>
                </a>
              </Link>
              <Link href="/servicios">
                <a className="blog-link27 a.link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_RHhOAM'),
                    }}
                  ></span>
                </a>
              </Link>
              <Link href="/proyectos">
                <a className="blog-link28 a.link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_oKOAFa'),
                    }}
                  ></span>
                </a>
              </Link>
              <Link href="/blog">
                <a className="blog-link29 a.link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_KtwAJu'),
                    }}
                  ></span>
                </a>
              </Link>
              <Link href="/contacto">
                <a className="blog-link30 a.link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_gdddAH'),
                    }}
                  ></span>
                </a>
              </Link>
            </div>
            <div className="blog-socials">
              <a
                href="https://instagram.com/ape_experience/"
                target="_blank"
                rel="noreferrer noopener"
                className="blog-link31"
              >
                <img
                  alt="Instagram APE Experience"
                  src="/instagram.svg"
                  className="blog-image3 social"
                />
              </a>
              <a
                href="https://facebook.com/apeexperienceve/"
                target="_blank"
                rel="noreferrer noopener"
                className="blog-link32"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="blog-icon22 social"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://threads.com/ape_experience/"
                target="_blank"
                rel="noreferrer noopener"
                className="blog-link33"
              >
                <img
                  alt="Threads APE Experience"
                  src="/Material web/threads-600h.png"
                  className="blog-image4 social"
                />
              </a>
            </div>
            <span className="blog-copyright">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('Copyright_VZX9Zg'),
                }}
              ></span>
            </span>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .blog-container10 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .blog-header {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            background-color: #542ccc;
          }
          .blog-navbar {
            width: 100%;
            display: flex;
            z-index: 1000;
            position: relative;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            justify-content: space-between;
          }
          .blog-link10 {
            display: contents;
          }
          .blog-image1 {
            width: 104px;
            height: 114px;
            object-fit: cover;
            text-decoration: none;
          }
          .blog-desktop-menu {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
          }
          .blog-nav1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .blog-link12 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
            text-decoration: none;
          }
          .blog-link14 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
            text-decoration: none;
          }
          .blog-link16 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
            text-decoration: none;
          }
          .blog-link18 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
            text-decoration: none;
          }
          .blog-link20 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
            text-decoration: none;
          }
          .blog-link22 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
            text-decoration: none;
          }
          .blog-link23 {
            text-decoration: none;
          }
          .blog-text10 {
            font-size: 16px;
            font-family: Open Sans;
            text-transform: uppercase;
          }
          .blog-icon10 {
            width: 16px;
            height: 16px;
          }
          .blog-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .blog-icon12 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .blog-mobile-menu {
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
          .blog-nav2 {
            display: flex;
            z-index: 20;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-container11 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .blog-text11 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
            line-height: 45px;
          }
          .blog-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .blog-icon14 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .blog-nav3 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-button-container {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-layout-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .blog-login {
            margin-right: var(--dl-layout-space-twounits);
          }
          .blog-icon-group {
            display: flex;
            z-index: 20;
          }
          .blog-icons {
            display: flex;
          }
          .blog-icon16 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
            margin-right: var(--dl-layout-space-twounits);
          }
          .blog-icon18 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
            margin-right: var(--dl-layout-space-twounits);
          }
          .blog-icon20 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .blog-background {
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 80%;
            margin: auto;
            position: absolute;
            object-fit: cover;
          }
          .blog-container12 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
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
          .blog-container13 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .blog-container14 {
            gap: var(--dl-layout-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: center;
          }
          .blog-container15 {
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
            justify-content: space-between;
            background-image: linear-gradient(
                90deg,
                rgb(44, 204, 178) 0%,
                rgba(44, 204, 178, 0.7) 100%
              ),
              url('/Material web/fondo-blog-destacado-ape-experience%20(1)-1500w.jpg');
          }
          .blog-container16 {
            flex: 0 0 auto;
            width: 80%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-text18 {
            font-style: normal;
            font-family: Open Sans;
            font-weight: 600;
          }
          .blog-button {
            font-size: 2rem;
          }
          .blog-container18 {
            display: contents;
          }
          .blog-container20 {
            display: contents;
          }
          .blog-footer {
            width: 100%;
            height: 588px;
            display: flex;
            align-items: center;
            padding-top: 120px;
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-fiveunits);
            background-color: #000000;
          }
          .blog-content1 {
            gap: var(--dl-layout-space-threeunits);
            width: 50%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
          }
          .blog-details1 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
          }
          .blog-link24 {
            display: contents;
          }
          .blog-image2 {
            width: 200px;
            align-self: flex-start;
            object-fit: cover;
            text-decoration: none;
          }
          .blog-description {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 18px;
            line-height: 27px;
          }
          .blog-content2 {
            gap: var(--dl-layout-space-threeunits);
            width: 50%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
          }
          .blog-details2 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
          }
          .blog-text19 {
            color: var(--dl-color-gray-white);
            font-size: 22px;
            align-self: flex-start;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            text-transform: uppercase;
          }
          .blog-link25 {
            color: var(--dl-color-gray-white);
            line-height: 1.15;
            text-decoration: none;
          }
          .blog-link26 {
            color: var(--dl-color-gray-white);
            line-height: 1.15;
            text-decoration: none;
          }
          .blog-link27 {
            color: var(--dl-color-gray-white);
            line-height: 1.15;
            text-decoration: none;
          }
          .blog-link28 {
            color: var(--dl-color-gray-white);
            line-height: 1.15;
            text-decoration: none;
          }
          .blog-link29 {
            color: var(--dl-color-gray-white);
            line-height: 1.15;
            text-decoration: none;
          }
          .blog-link30 {
            color: var(--dl-color-gray-white);
            line-height: 1.15;
            text-decoration: none;
          }
          .blog-socials {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: row;
          }
          .blog-link31 {
            display: contents;
          }
          .blog-image3 {
            filter: invert(7);
            text-decoration: none;
          }
          .blog-link32 {
            display: contents;
          }
          .blog-icon22 {
            width: 24px;
            filter: invert(7);
            height: 24px;
            text-decoration: none;
          }
          .blog-link33 {
            display: contents;
          }
          .blog-image4 {
            filter: invert(7);
            text-decoration: none;
          }
          .blog-copyright {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 18px;
            line-height: 21px;
          }
          @media (max-width: 1440px) {
            .blog-container15 {
              gap: var(--dl-layout-space-unit);
              padding: 2%;
              flex-wrap: wrap;
            }
            .blog-container16 {
              width: auto;
            }
            .blog-text18 {
              width: 720px;
              flex-wrap: wrap;
              font-style: normal;
              font-family: Open Sans;
              font-weight: 600;
              overflow-wrap: break-word;
            }
            .blog-button {
              font-size: 2em;
              align-self: flex-start;
            }
          }
          @media (max-width: 1200px) {
            .blog-header {
              background-color: #542ccc;
            }
            .blog-text18 {
              font-size: 1.8rem;
            }
          }
          @media (max-width: 991px) {
            .blog-image1 {
              width: 88px;
              height: 87px;
            }
            .blog-link12 {
              font-size: 16px;
            }
            .blog-link14 {
              font-size: 16px;
            }
            .blog-link16 {
              font-size: 16px;
            }
            .blog-link18 {
              font-size: 16px;
            }
            .blog-link20 {
              font-size: 16px;
            }
            .blog-link22 {
              font-size: 16px;
            }
            .blog-link23 {
              padding-top: 1%;
              padding-left: 2%;
              padding-right: 2%;
              padding-bottom: 1%;
            }
            .blog-text10 {
              font-size: 14px;
              font-family: Open Sans;
              text-transform: uppercase;
            }
            .blog-text18 {
              font-size: 1.6rem;
            }
            .blog-button {
              font-size: 1.5rem;
            }
          }
          @media (max-width: 767px) {
            .blog-image1 {
              width: 140px;
              height: 152px;
            }
            .blog-desktop-menu {
              display: none;
            }
            .blog-burger-menu {
              display: flex;
            }
            .blog-icon12 {
              fill: white;
              width: var(--dl-layout-size-small);
              height: var(--dl-layout-size-small);
            }
            .blog-nav2 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .blog-container11 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .blog-text11 {
              color: #000000;
            }
            .blog-nav3 {
              gap: var(--dl-layout-space-unit);
            }
            .blog-text12 {
              color: #000000;
            }
            .blog-text13 {
              color: rgb(0, 0, 0);
            }
            .blog-text14 {
              color: rgb(0, 0, 0);
            }
            .blog-text15 {
              color: rgb(0, 0, 0);
            }
            .blog-text16 {
              color: rgb(0, 0, 0);
            }
            .blog-button-container {
              gap: var(--dl-layout-space-unit);
              width: 50%;
              margin-top: 0px;
              align-items: flex-start;
              flex-direction: column;
            }
            .blog-login {
              width: 100%;
              border-width: 1px;
              margin-right: 0px;
            }
            .blog-register2 {
              width: 100%;
              border-width: 1px;
            }
            .blog-icon-group {
              width: 100%;
              justify-content: flex-start;
            }
            .blog-container15 {
              padding-top: 2%;
            }
            .blog-text18 {
              width: 480px;
              font-size: 1.6rem;
              text-align: left;
            }
            .blog-footer {
              padding-top: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-twounits);
            }
            .blog-content1 {
              gap: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .blog-description {
              font-size: 14px;
              line-height: 21px;
            }
            .blog-content2 {
              gap: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .blog-socials {
              gap: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .blog-navbar {
              padding: var(--dl-layout-space-oneandhalfunits);
              padding-right: 24px;
            }
            .blog-image1 {
              width: auto;
              height: 90px;
            }
            .blog-mobile-menu {
              padding: 16px;
            }
            .blog-button-container {
              width: 100%;
            }
            .blog-icon-group {
              justify-content: center;
            }
            .blog-container12 {
              padding-top: 60px;
              padding-bottom: 60px;
            }
            .blog-container15 {
              align-self: center;
              text-align: center;
              padding-top: 5%;
              align-content: center;
              flex-direction: column;
              padding-bottom: 5%;
            }
            .blog-text18 {
              width: 311px;
              font-size: 1.2rem;
              align-self: center;
              text-align: center;
            }
            .blog-button {
              align-self: center;
            }
            .blog-footer {
              gap: var(--dl-layout-space-oneandhalfunits);
              height: auto;
              align-items: center;
              flex-direction: column;
            }
            .blog-content1 {
              width: 100%;
              max-width: 100%;
              align-self: center;
              align-items: center;
            }
            .blog-details1 {
              max-width: 100%;
            }
            .blog-image2 {
              align-self: center;
            }
            .blog-description {
              font-size: 18px;
              text-align: center;
            }
            .blog-content2 {
              width: 100%;
              align-self: center;
              align-items: center;
            }
            .blog-text19 {
              width: 100%;
              text-align: center;
            }
            .blog-link25 {
              width: 100%;
              text-align: center;
            }
            .blog-link26 {
              width: 100%;
              text-align: center;
            }
            .blog-link27 {
              width: 100%;
              text-align: center;
            }
            .blog-link28 {
              width: 100%;
              text-align: center;
            }
            .blog-link29 {
              width: 100%;
              text-align: center;
            }
            .blog-link30 {
              width: 100%;
              text-align: center;
            }
            .blog-socials {
              justify-content: center;
            }
            .blog-copyright {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Blog

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
