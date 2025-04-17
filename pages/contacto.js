import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Contact15 from '../components/contact15'
import ContactForm4 from '../components/contact-form4'

const Contacto = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="contacto-container10">
        <Head>
          <title>Contacto - APE Experience</title>
          <meta name="description" content={translate.raw('static_nXgLBM')} />
          <meta property="og:title" content="Contacto - APE Experience" />
          <meta
            property="og:description"
            content={translate.raw('static_nXgLBM')}
          />
        </Head>
        <div className="contacto-header">
          <header data-thq="thq-navbar" className="contacto-navbar">
            <Link href="/">
              <a className="contacto-link10">
                <img
                  alt="APE Experience"
                  src="/Material web/logo-optimizado-600h.png"
                  className="contacto-image1"
                />
              </a>
            </Link>
            <div
              data-thq="thq-navbar-nav"
              data-role="Nav"
              className="contacto-desktop-menu"
            >
              <nav
                data-thq="thq-navbar-nav-links"
                data-role="Nav"
                className="contacto-nav1"
              >
                <Link href="/">
                  <a className="contacto-link12 navLink">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_Whvm6d'),
                      }}
                    ></span>
                  </a>
                </Link>
                <Link href="/sobre-mi">
                  <a className="contacto-link14 navLink">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_2jzhqh'),
                      }}
                    ></span>
                  </a>
                </Link>
                <Link href="/servicios">
                  <a className="contacto-link16 navLink">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_tvLkr-'),
                      }}
                    ></span>
                  </a>
                </Link>
                <Link href="/proyectos">
                  <a className="contacto-link18 navLink">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_pCxR7W'),
                      }}
                    ></span>
                  </a>
                </Link>
                <Link href="/blog">
                  <a className="contacto-link20 navLink">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_grVgl5'),
                      }}
                    ></span>
                  </a>
                </Link>
                <Link href="/contacto">
                  <a className="contacto-link22 navLink">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_L9ej4f'),
                      }}
                    ></span>
                  </a>
                </Link>
              </nav>
              <Link href="/solicitar-servicio">
                <a className="contacto-link23 button">
                  <span className="contacto-text10">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_dLvxmv'),
                      }}
                    ></span>
                  </span>
                  <svg viewBox="0 0 1024 1024" className="contacto-icon10">
                    <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                  </svg>
                </a>
              </Link>
            </div>
            <div data-thq="thq-burger-menu" className="contacto-burger-menu">
              <svg viewBox="0 0 1024 1024" className="contacto-icon12">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="contacto-mobile-menu">
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="contacto-nav2"
              >
                <div className="contacto-container11">
                  <h2 className="contacto-text11">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_2wxm1r'),
                      }}
                    ></span>
                  </h2>
                  <div
                    data-thq="thq-close-menu"
                    className="contacto-menu-close"
                  >
                    <svg viewBox="0 0 1024 1024" className="contacto-icon14">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav
                  data-thq="thq-mobile-menu-nav-links"
                  data-role="Nav"
                  className="contacto-nav3"
                >
                  <span className="navLink contacto-text12">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_7tQHQ-'),
                      }}
                    ></span>
                  </span>
                  <span className="navLink contacto-text13">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_VNVd0E'),
                      }}
                    ></span>
                  </span>
                  <span className="navLink contacto-text14">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_imXMMO'),
                      }}
                    ></span>
                  </span>
                  <span className="navLink contacto-text15">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_1WwO8h'),
                      }}
                    ></span>
                  </span>
                  <span className="navLink contacto-text16">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_Hos4hK'),
                      }}
                    ></span>
                  </span>
                </nav>
                <div className="contacto-button-container">
                  <button className="contacto-login button">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Login_FAmx6-'),
                      }}
                    ></span>
                  </button>
                  <button className="button contacto-register2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Register_WDQtmT'),
                      }}
                    ></span>
                  </button>
                </div>
                <div className="contacto-icon-group">
                  <div className="contacto-icons">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="contacto-icon16"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="contacto-icon18"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 602.2582857142856 1024"
                      className="contacto-icon20"
                    >
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <img
                alt="image"
                src="/quote-background.svg"
                className="contacto-background"
              />
            </div>
          </header>
        </div>
        <div className="contacto-container12"></div>
        <div className="contacto-container13">
          <Contact15
            link11={
              <Fragment>
                <span className="contacto-text17">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_D-gLu9'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            email11={
              <Fragment>
                <span className="contacto-text18">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_R_cA9d'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            phone11={
              <Fragment>
                <span className="contacto-text19">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_M9PGKN'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            address11={
              <Fragment>
                <span className="contacto-text20">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_WBucU8'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            content21={
              <Fragment>
                <span className="contacto-text21">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_naWdGR'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            content31={
              <Fragment>
                <span className="contacto-text22">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_VEEZXv'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            content41={
              <Fragment>
                <span className="contacto-text23">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_YgKt9R'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            content51={
              <Fragment>
                <span className="contacto-text24">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_6NaxAl'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            content61={
              <Fragment>
                <span className="contacto-text25">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ZlrkIT'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading11={
              <Fragment>
                <span className="contacto-text26">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_1Ve6iS'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            rootClassName="contact15root-class-name"
          ></Contact15>
          <ContactForm4
            action1={
              <Fragment>
                <span className="contacto-text27">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ZMXmjo'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            content2="Contáctame"
            content11={
              <Fragment>
                <span className="contacto-text28">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_CoA8Dw'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading11={
              <Fragment>
                <span className="contacto-text29">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_TJT0jy'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            rootClassName="contact-form4root-class-name"
          ></ContactForm4>
        </div>
        <div className="contacto-container14">
          <div className="contacto-container15">
            <h1 className="contacto-text30">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_e__rFe'),
                }}
              ></span>
            </h1>
          </div>
          <button type="button" className="contacto-button button">
            <span
              dangerouslySetInnerHTML={{
                __html: translate.raw('text_VQFspi'),
              }}
            ></span>
          </button>
        </div>
        <div>
          <div className="contacto-container17">
            <Script
              html={`<script>
    ScrollReveal().reveal('.speaker');
    ScrollReveal().reveal('.image-notes');
</script>`}
            ></Script>
          </div>
        </div>
        <div>
          <div className="contacto-container19">
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
        <footer className="contacto-footer">
          <div className="contacto-content1">
            <div className="contacto-details1">
              <Link href="/">
                <a className="contacto-link24">
                  <img
                    alt="APE Experience Pié de Página Logo Negro"
                    src="/Material web/logo-optimizado-600h.png"
                    className="contacto-image2"
                  />
                </a>
              </Link>
              <p className="contacto-description">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('Description_BJ7yDB'),
                  }}
                ></span>
              </p>
            </div>
          </div>
          <div className="contacto-content2">
            <div className="contacto-details2">
              <span className="contacto-text31">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_PfCI3z'),
                  }}
                ></span>
              </span>
              <Link href="/">
                <a className="contacto-link25 a.link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_XPI6GV'),
                    }}
                  ></span>
                </a>
              </Link>
              <Link href="/sobre-mi">
                <a className="contacto-link26 a.link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_kiIZQg'),
                    }}
                  ></span>
                </a>
              </Link>
              <Link href="/servicios">
                <a className="contacto-link27 a.link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_P8AJA_'),
                    }}
                  ></span>
                </a>
              </Link>
              <Link href="/proyectos">
                <a className="contacto-link28 a.link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_vIucZv'),
                    }}
                  ></span>
                </a>
              </Link>
              <Link href="/blog">
                <a className="contacto-link29 a.link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_vXLQaO'),
                    }}
                  ></span>
                </a>
              </Link>
              <Link href="/contacto">
                <a className="contacto-link30 a.link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Z7N_SU'),
                    }}
                  ></span>
                </a>
              </Link>
            </div>
            <div className="contacto-socials">
              <a
                href="https://instagram.com/ape_experience/"
                target="_blank"
                rel="noreferrer noopener"
                className="contacto-link31"
              >
                <img
                  alt="Instagram APE Experience"
                  src="/instagram.svg"
                  className="contacto-image3 social"
                />
              </a>
              <a
                href="https://facebook.com/apeexperienceve/"
                target="_blank"
                rel="noreferrer noopener"
                className="contacto-link32"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="contacto-icon22 social"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://threads.com/ape_experience/"
                target="_blank"
                rel="noreferrer noopener"
                className="contacto-link33"
              >
                <img
                  alt="Threads APE Experience"
                  src="/Material web/threads-600h.png"
                  className="contacto-image4 social"
                />
              </a>
            </div>
            <span className="contacto-copyright">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('Copyright_rqaUfr'),
                }}
              ></span>
            </span>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .contacto-container10 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .contacto-header {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            background-color: #542ccc;
          }
          .contacto-navbar {
            width: 100%;
            display: flex;
            z-index: 1000;
            position: relative;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            justify-content: space-between;
          }
          .contacto-link10 {
            display: contents;
          }
          .contacto-image1 {
            width: 104px;
            height: 114px;
            object-fit: cover;
            text-decoration: none;
          }
          .contacto-desktop-menu {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
          }
          .contacto-nav1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .contacto-link12 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
            text-decoration: none;
          }
          .contacto-link14 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
            text-decoration: none;
          }
          .contacto-link16 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
            text-decoration: none;
          }
          .contacto-link18 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
            text-decoration: none;
          }
          .contacto-link20 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
            text-decoration: none;
          }
          .contacto-link22 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
            text-decoration: none;
          }
          .contacto-link23 {
            text-decoration: none;
          }
          .contacto-text10 {
            font-size: 16px;
            font-family: Open Sans;
            text-transform: uppercase;
          }
          .contacto-icon10 {
            width: 16px;
            height: 16px;
          }
          .contacto-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .contacto-icon12 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .contacto-mobile-menu {
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
          .contacto-nav2 {
            display: flex;
            z-index: 20;
            align-items: flex-start;
            flex-direction: column;
          }
          .contacto-container11 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .contacto-text11 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
            line-height: 45px;
          }
          .contacto-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .contacto-icon14 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .contacto-nav3 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .contacto-button-container {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-layout-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .contacto-login {
            margin-right: var(--dl-layout-space-twounits);
          }
          .contacto-icon-group {
            display: flex;
            z-index: 20;
          }
          .contacto-icons {
            display: flex;
          }
          .contacto-icon16 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
            margin-right: var(--dl-layout-space-twounits);
          }
          .contacto-icon18 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
            margin-right: var(--dl-layout-space-twounits);
          }
          .contacto-icon20 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .contacto-background {
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 80%;
            margin: auto;
            position: absolute;
            object-fit: cover;
          }
          .contacto-container12 {
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
          .contacto-container13 {
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
          .contacto-text17 {
            display: inline-block;
          }
          .contacto-text18 {
            display: inline-block;
          }
          .contacto-text19 {
            display: inline-block;
          }
          .contacto-text20 {
            display: inline-block;
          }
          .contacto-text21 {
            display: inline-block;
          }
          .contacto-text22 {
            display: inline-block;
          }
          .contacto-text23 {
            display: inline-block;
          }
          .contacto-text24 {
            display: inline-block;
          }
          .contacto-text25 {
            display: inline-block;
          }
          .contacto-text26 {
            display: inline-block;
          }
          .contacto-text27 {
            display: inline-block;
          }
          .contacto-text28 {
            display: inline-block;
          }
          .contacto-text29 {
            display: inline-block;
          }
          .contacto-container14 {
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
          .contacto-container15 {
            flex: 0 0 auto;
            width: 80%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .contacto-text30 {
            font-style: normal;
            font-family: Open Sans;
            font-weight: 600;
          }
          .contacto-button {
            font-size: 2rem;
          }
          .contacto-container17 {
            display: contents;
          }
          .contacto-container19 {
            display: contents;
          }
          .contacto-footer {
            width: 100%;
            height: 588px;
            display: flex;
            align-items: center;
            padding-top: 120px;
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-fiveunits);
            background-color: #000000;
          }
          .contacto-content1 {
            gap: var(--dl-layout-space-threeunits);
            width: 50%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
          }
          .contacto-details1 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
          }
          .contacto-link24 {
            display: contents;
          }
          .contacto-image2 {
            width: 200px;
            align-self: flex-start;
            object-fit: cover;
            text-decoration: none;
          }
          .contacto-description {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 18px;
            line-height: 27px;
          }
          .contacto-content2 {
            gap: var(--dl-layout-space-threeunits);
            width: 50%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
          }
          .contacto-details2 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
          }
          .contacto-text31 {
            color: var(--dl-color-gray-white);
            font-size: 22px;
            align-self: flex-start;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            text-transform: uppercase;
          }
          .contacto-link25 {
            color: var(--dl-color-gray-white);
            line-height: 1.15;
            text-decoration: none;
          }
          .contacto-link26 {
            color: var(--dl-color-gray-white);
            line-height: 1.15;
            text-decoration: none;
          }
          .contacto-link27 {
            color: var(--dl-color-gray-white);
            line-height: 1.15;
            text-decoration: none;
          }
          .contacto-link28 {
            color: var(--dl-color-gray-white);
            line-height: 1.15;
            text-decoration: none;
          }
          .contacto-link29 {
            color: var(--dl-color-gray-white);
            line-height: 1.15;
            text-decoration: none;
          }
          .contacto-link30 {
            color: var(--dl-color-gray-white);
            line-height: 1.15;
            text-decoration: none;
          }
          .contacto-socials {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: row;
          }
          .contacto-link31 {
            display: contents;
          }
          .contacto-image3 {
            filter: invert(7);
            text-decoration: none;
          }
          .contacto-link32 {
            display: contents;
          }
          .contacto-icon22 {
            width: 24px;
            filter: invert(7);
            height: 24px;
            text-decoration: none;
          }
          .contacto-link33 {
            display: contents;
          }
          .contacto-image4 {
            filter: invert(7);
            text-decoration: none;
          }
          .contacto-copyright {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 18px;
            line-height: 21px;
          }
          @media (max-width: 1440px) {
            .contacto-container14 {
              gap: var(--dl-layout-space-unit);
              padding: 2%;
              flex-wrap: wrap;
            }
            .contacto-container15 {
              width: auto;
            }
            .contacto-text30 {
              width: 720px;
              flex-wrap: wrap;
              font-style: normal;
              font-family: Open Sans;
              font-weight: 600;
              overflow-wrap: break-word;
            }
            .contacto-button {
              font-size: 2em;
              align-self: flex-start;
            }
          }
          @media (max-width: 1200px) {
            .contacto-header {
              background-color: #542ccc;
            }
            .contacto-text30 {
              font-size: 1.8rem;
            }
          }
          @media (max-width: 991px) {
            .contacto-navbar {
              padding-left: var(--dl-layout-space-threeunits);
              padding-right: var(--dl-layout-space-threeunits);
            }
            .contacto-image1 {
              width: 88px;
              height: 87px;
            }
            .contacto-link12 {
              font-size: 16px;
            }
            .contacto-link14 {
              font-size: 16px;
            }
            .contacto-link16 {
              font-size: 16px;
            }
            .contacto-link18 {
              font-size: 16px;
            }
            .contacto-link20 {
              font-size: 16px;
            }
            .contacto-link22 {
              font-size: 16px;
            }
            .contacto-link23 {
              padding-top: 1%;
              padding-left: 2%;
              padding-right: 2%;
              padding-bottom: 1%;
            }
            .contacto-text10 {
              font-size: 14px;
              font-family: Open Sans;
              text-transform: uppercase;
            }
            .contacto-text30 {
              font-size: 1.6rem;
            }
            .contacto-button {
              font-size: 1.5rem;
            }
          }
          @media (max-width: 767px) {
            .contacto-navbar {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
            .contacto-image1 {
              width: var(--dl-layout-size-medium);
              height: auto;
            }
            .contacto-desktop-menu {
              display: none;
            }
            .contacto-burger-menu {
              display: flex;
            }
            .contacto-icon12 {
              fill: white;
              width: var(--dl-layout-size-small);
              height: var(--dl-layout-size-small);
            }
            .contacto-nav2 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .contacto-container11 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .contacto-text11 {
              color: #000000;
            }
            .contacto-nav3 {
              gap: var(--dl-layout-space-unit);
            }
            .contacto-text12 {
              color: #000000;
            }
            .contacto-text13 {
              color: rgb(0, 0, 0);
            }
            .contacto-text14 {
              color: rgb(0, 0, 0);
            }
            .contacto-text15 {
              color: rgb(0, 0, 0);
            }
            .contacto-text16 {
              color: rgb(0, 0, 0);
            }
            .contacto-button-container {
              gap: var(--dl-layout-space-unit);
              width: 50%;
              margin-top: 0px;
              align-items: flex-start;
              flex-direction: column;
            }
            .contacto-login {
              width: 100%;
              border-width: 1px;
              margin-right: 0px;
            }
            .contacto-register2 {
              width: 100%;
              border-width: 1px;
            }
            .contacto-icon-group {
              width: 100%;
              justify-content: flex-start;
            }
            .contacto-container14 {
              padding-top: 2%;
            }
            .contacto-text30 {
              width: 480px;
              font-size: 1.6rem;
              text-align: left;
            }
            .contacto-footer {
              padding-top: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-twounits);
            }
            .contacto-content1 {
              gap: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .contacto-description {
              font-size: 14px;
              line-height: 21px;
            }
            .contacto-content2 {
              gap: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .contacto-socials {
              gap: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .contacto-navbar {
              padding: var(--dl-layout-space-oneandhalfunits);
              padding-right: 24px;
            }
            .contacto-image1 {
              width: auto;
              height: 90px;
            }
            .contacto-mobile-menu {
              padding: 16px;
            }
            .contacto-button-container {
              width: 100%;
            }
            .contacto-icon-group {
              justify-content: center;
            }
            .contacto-container12 {
              padding-top: 60px;
              padding-bottom: 60px;
            }
            .contacto-container14 {
              align-self: center;
              text-align: center;
              padding-top: 5%;
              align-content: center;
              flex-direction: column;
              padding-bottom: 5%;
            }
            .contacto-text30 {
              width: 311px;
              font-size: 1.2rem;
              align-self: center;
              text-align: center;
            }
            .contacto-button {
              align-self: center;
            }
            .contacto-footer {
              gap: var(--dl-layout-space-oneandhalfunits);
              height: auto;
              align-items: center;
              flex-direction: column;
            }
            .contacto-content1 {
              width: 100%;
              max-width: 100%;
              align-self: center;
              align-items: center;
            }
            .contacto-details1 {
              max-width: 100%;
            }
            .contacto-image2 {
              align-self: center;
            }
            .contacto-description {
              font-size: 18px;
              text-align: center;
            }
            .contacto-content2 {
              width: 100%;
              align-self: center;
              align-items: center;
            }
            .contacto-text31 {
              width: 100%;
              text-align: center;
            }
            .contacto-link25 {
              width: 100%;
              text-align: center;
            }
            .contacto-link26 {
              width: 100%;
              text-align: center;
            }
            .contacto-link27 {
              width: 100%;
              text-align: center;
            }
            .contacto-link28 {
              width: 100%;
              text-align: center;
            }
            .contacto-link29 {
              width: 100%;
              text-align: center;
            }
            .contacto-link30 {
              width: 100%;
              text-align: center;
            }
            .contacto-socials {
              justify-content: center;
            }
            .contacto-copyright {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Contacto

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
