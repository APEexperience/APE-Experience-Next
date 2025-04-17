import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import SectionNumeral from '../components/section-numeral'
import BlogPostCard2 from '../components/blog-post-card2'

const Inicio = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="inicio-container10">
        <Head>
          <title>APE Experience</title>
          <meta property="og:title" content="APE Experience" />
        </Head>
        <video
          src="https://ape-experience.net/Material web/Imagen%20Heroe%20APE%20Experience.mp4"
          loop
          muted
          preload="metadata"
          autoPlay
          className="inicio-video1"
        ></video>
        <section className="inicio-hero">
          <div className="inicio-background1">
            <img
              alt="image"
              src="/circle-background.svg"
              className="inicio-image10"
            />
            <div className="inicio-container11">
              <img
                alt="fondo-degradado-APE"
                src="/Material web/fondo-degradado-ape%20(1)-1500h.png"
                className="inicio-image11"
              />
            </div>
          </div>
          <div className="inicio-container12">
            <header data-thq="thq-navbar" className="inicio-navbar">
              <Link href="/">
                <a className="inicio-link10">
                  <img
                    alt="APE Experience"
                    src="/Material web/logo-optimizado-200h.png"
                    className="inicio-image12"
                  />
                </a>
              </Link>
              <div
                data-thq="thq-navbar-nav"
                data-role="Nav"
                className="inicio-desktop-menu"
              >
                <nav
                  data-thq="thq-navbar-nav-links"
                  data-role="Nav"
                  className="inicio-nav1"
                >
                  <Link href="/">
                    <a className="inicio-link12 navLink">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('Link_pqYRcq'),
                        }}
                      ></span>
                    </a>
                  </Link>
                  <Link href="/sobre-mi">
                    <a className="inicio-link14 navLink">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('Link_Q4rfMU'),
                        }}
                      ></span>
                    </a>
                  </Link>
                  <Link href="/servicios">
                    <a className="inicio-link16 navLink">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('Link_bYWYOd'),
                        }}
                      ></span>
                    </a>
                  </Link>
                  <Link href="/proyectos">
                    <a className="inicio-link18 navLink">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('Link_T7i1q2'),
                        }}
                      ></span>
                    </a>
                  </Link>
                  <Link href="/blog">
                    <a className="inicio-link20 navLink">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('Link_9fcouF'),
                        }}
                      ></span>
                    </a>
                  </Link>
                  <Link href="/contacto">
                    <a className="inicio-link22 navLink">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('Link_6xvXRJ'),
                        }}
                      ></span>
                    </a>
                  </Link>
                </nav>
                <Link href="/solicitar-servicio">
                  <a className="inicio-link23 button">
                    <span className="inicio-text10">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_QJbDoI'),
                        }}
                      ></span>
                    </span>
                    <svg viewBox="0 0 1024 1024" className="inicio-icon10">
                      <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                    </svg>
                  </a>
                </Link>
              </div>
              <div data-thq="thq-burger-menu" className="inicio-burger-menu">
                <svg viewBox="0 0 1024 1024" className="inicio-icon12">
                  <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
              <div data-thq="thq-mobile-menu" className="inicio-mobile-menu">
                <div
                  data-thq="thq-mobile-menu-nav"
                  data-role="Nav"
                  className="inicio-nav2"
                >
                  <div className="inicio-container13">
                    <h2 className="inicio-text11">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_rQuAi1'),
                        }}
                      ></span>
                    </h2>
                    <div
                      data-thq="thq-close-menu"
                      className="inicio-menu-close"
                    >
                      <svg viewBox="0 0 1024 1024" className="inicio-icon14">
                        <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                      </svg>
                    </div>
                  </div>
                  <nav
                    data-thq="thq-mobile-menu-nav-links"
                    data-role="Nav"
                    className="inicio-nav3"
                  >
                    <span className="navLink inicio-text12">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_1VaCT3'),
                        }}
                      ></span>
                    </span>
                    <span className="navLink inicio-text13">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_t5G_QL'),
                        }}
                      ></span>
                    </span>
                    <span className="navLink inicio-text14">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_PVJf6s'),
                        }}
                      ></span>
                    </span>
                    <span className="navLink inicio-text15">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_ZnMggA'),
                        }}
                      ></span>
                    </span>
                    <span className="navLink inicio-text16">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_ugFrCa'),
                        }}
                      ></span>
                    </span>
                  </nav>
                  <div className="inicio-button-container">
                    <button className="inicio-login button">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('Login_CxDOqU'),
                        }}
                      ></span>
                    </button>
                    <button className="button inicio-register2">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('Register_yxmCo3'),
                        }}
                      ></span>
                    </button>
                  </div>
                  <div className="inicio-icon-group">
                    <div className="inicio-icons">
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="inicio-icon16"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="inicio-icon18"
                      >
                        <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 602.2582857142856 1024"
                        className="inicio-icon20"
                      >
                        <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <img
                  alt="image"
                  src="/quote-background.svg"
                  className="inicio-background2"
                />
              </div>
            </header>
          </div>
          <div className="inicio-hero-content">
            <h1 className="inicio-text17">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_Jwy2sv'),
                }}
              ></span>
            </h1>
            <div className="inicio-caption1">
              <a
                href="https://#newsletter"
                target="_blank"
                rel="noreferrer noopener"
                className="inicio-register3 button-style-1 button"
              >
                <span className="inicio-text18">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_phQMGQ'),
                    }}
                  ></span>
                </span>
              </a>
              <p className="inicio-caption2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('Caption_OP-Jly'),
                  }}
                ></span>
              </p>
            </div>
          </div>
        </section>
        <section className="inicio-notes">
          <div className="inicio-first">
            <div data-aos="fade-up-right" className="inicio-content1">
              <h2 className="inicio-header1">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('Header_2fJgnY'),
                  }}
                ></span>
              </h2>
              <div className="inicio-list">
                <div className="inicio-note1">
                  <div className="inicio-point"></div>
                  <p className="inicio-text19">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_Y6JjUg'),
                      }}
                    ></span>
                  </p>
                </div>
                <div className="inicio-note2">
                  <button type="button" className="inicio-button1 button">
                    <svg viewBox="0 0 1024 1024" className="inicio-icon22">
                      <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                    </svg>
                    transforma tu idea en realidad
                  </button>
                </div>
              </div>
            </div>
            <img
              alt="image"
              src="/Material web/ape-experience-paginas-web-1400w.png"
              className="inicio-image13 image-notes"
            />
          </div>
          <div className="inicio-second">
            <div data-aos="fade-up-left" className="inicio-content2">
              <h3 className="inicio-header2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('Header_89dydL'),
                  }}
                ></span>
              </h3>
              <button className="inicio-register4 button button-style-2">
                <span className="inicio-text20">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text__EybHb'),
                    }}
                  ></span>
                </span>
                <svg viewBox="0 0 1024 1024" className="inicio-icon24">
                  <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                </svg>
              </button>
            </div>
            <img
              alt="image"
              src="/Material web/ape-experience-disen%C3%AC%C2%83o-web-1400w.png"
              className="inicio-image14 image-notes"
            />
          </div>
        </section>
        <section className="inicio-quote10">
          <div className="inicio-content3">
            <div className="inicio-container14">
              <h5 className="inicio-header3">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('Header_Xcojrx'),
                  }}
                ></span>
              </h5>
              <div className="inicio-gallery">
                <div className="inicio-container15">
                  <a
                    href="https://cuidartesamarte.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inicio-link24"
                  >
                    <div className="inicio-container16">
                      <h6 className="inicio-text21">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text__RhZ70'),
                          }}
                        ></span>
                      </h6>
                      <span className="inicio-text22">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_aI0Yo2'),
                          }}
                        ></span>
                      </span>
                      <img
                        alt="image"
                        src="/Material web/bgcreativos-logo-400h.png"
                        className="inicio-image15"
                      />
                    </div>
                  </a>
                </div>
                <div className="inicio-container17">
                  <a
                    href="https://imejobsolutions.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inicio-link25"
                  >
                    <div className="inicio-container18">
                      <h6 className="inicio-text23">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_dKICr7'),
                          }}
                        ></span>
                      </h6>
                      <span className="inicio-text24">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_m6RI33'),
                          }}
                        ></span>
                      </span>
                      <img
                        alt="image"
                        src="/Material web/bgcreativos-logo-400h.png"
                        className="inicio-image16"
                      />
                    </div>
                  </a>
                </div>
                <div className="inicio-container19">
                  <a
                    href="https://mueblesnew.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inicio-link26"
                  >
                    <div className="inicio-container20">
                      <h6 className="inicio-text25">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_3Ik-r_'),
                          }}
                        ></span>
                      </h6>
                      <span className="inicio-text26">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_J8-MM7'),
                          }}
                        ></span>
                      </span>
                      <img
                        alt="image"
                        src="/Material web/bgcreativos-logo-400h.png"
                        className="inicio-image17"
                      />
                    </div>
                  </a>
                </div>
                <div className="inicio-container21">
                  <a
                    href="https://agroabeca.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inicio-link27"
                  >
                    <div className="inicio-container22">
                      <h6 className="inicio-text27">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_WT8Tsb'),
                          }}
                        ></span>
                      </h6>
                      <span className="inicio-text28">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_U2c5Bg'),
                          }}
                        ></span>
                      </span>
                      <img
                        alt="image"
                        src="/Material web/bgcreativos-logo-400h.png"
                        className="inicio-image18"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <img
            alt="image"
            src="/quote-background.svg"
            className="inicio-background3"
          />
          <img
            alt="image"
            src="/quote-background.svg"
            className="inicio-background4"
          />
        </section>
        <section className="inicio-sobre-mi">
          <div className="inicio-header4">
            <div className="inicio-container23">
              <div className="inicio-container24">
                <div className="inicio-container25">
                  <SectionNumeral
                    number1={
                      <Fragment>
                        <span className="inicio-text29">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_QzD2zT'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    }
                  ></SectionNumeral>
                </div>
                <h4 className="inicio-title1">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Title__AArQo'),
                    }}
                  ></span>
                </h4>
                <p className="inicio-caption3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Caption_SGClnp'),
                    }}
                  ></span>
                </p>
              </div>
              <button className="inicio-register5 button button-style-2">
                <span className="inicio-text30">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_vt_55n'),
                    }}
                  ></span>
                </span>
                <svg viewBox="0 0 1024 1024" className="inicio-icon26">
                  <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                </svg>
              </button>
            </div>
            <div className="inicio-container26">
              <img
                alt="image"
                src="https://ape-cloud.s3.us-east-2.amazonaws.com/photo_5010571185125173703_y+(1).jpg"
                className="inicio-image19"
              />
            </div>
            <div data-aos="fade-right" className="inicio-heading1"></div>
          </div>
        </section>
        <section className="inicio-watch">
          <div className="inicio-content4">
            <p className="inicio-header5">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('Header_gEYVim'),
                }}
              ></span>
            </p>
            <div className="inicio-video2">
              <video
                src
                poster="https://ape-cloud.s3.us-east-2.amazonaws.com/FONDO-VIDEO-APE-EXPERIENCE.jpg"
                className="inicio-video3"
              ></video>
              <img alt="image" src="/play.svg" className="inicio-image20" />
            </div>
          </div>
          <img
            alt="image"
            src="/Material web/ape-experience-fondo-turquesa-1500w.png"
            className="inicio-image21"
          />
        </section>
        <section className="inicio-schedule">
          <div className="inicio-content5">
            <div className="inicio-header6">
              <div className="inicio-section-numeral1">
                <div className="inicio-divide1"></div>
                <p className="inicio-text31">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_m8XI7T'),
                    }}
                  ></span>
                </p>
              </div>
              <div data-aos="fade-right" className="inicio-heading2">
                <h6 className="inicio-title2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Title_QaR-wd'),
                    }}
                  ></span>
                </h6>
                <p className="inicio-caption4">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Caption_4RX8ar'),
                    }}
                  ></span>
                </p>
              </div>
            </div>
          </div>
          <div className="inicio-blog">
            <div className="inicio-container27">
              <BlogPostCard2
                when1={
                  <Fragment>
                    <span className="inicio-text32">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_eBrJg9'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                label1={
                  <Fragment>
                    <span className="inicio-text33">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_hsYGgA'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                title1={
                  <Fragment>
                    <span className="inicio-text34">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_53acY8'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                author1={
                  <Fragment>
                    <span className="inicio-text35">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_-ZNDsz'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                profileSrc="https://images.unsplash.com/photo-1611232658409-0d98127f237f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
                description1={
                  <Fragment>
                    <span className="inicio-text36">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_ePn99A'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                rootClassName="rootClassName3"
              ></BlogPostCard2>
            </div>
            <div className="inicio-container28">
              <BlogPostCard2
                when1={
                  <Fragment>
                    <span className="inicio-text37">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_yXksvu'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                label1={
                  <Fragment>
                    <span className="inicio-text38">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_qrPC--'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                title1={
                  <Fragment>
                    <span className="inicio-text39">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_hokvBr'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                author1={
                  <Fragment>
                    <span className="inicio-text40">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_nW_AgE'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                imageSrc="https://images.unsplash.com/photo-1595565312451-23051ab0666c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1000"
                profileSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
                description1={
                  <Fragment>
                    <span className="inicio-text41">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Lho2DI'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                rootClassName="rootClassName"
              ></BlogPostCard2>
            </div>
            <div className="inicio-container29">
              <BlogPostCard2
                when1={
                  <Fragment>
                    <span className="inicio-text42">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_sUNLD2'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                label1={
                  <Fragment>
                    <span className="inicio-text43">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_CcXagu'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                title1={
                  <Fragment>
                    <span className="inicio-text44">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_892lZb'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                author1={
                  <Fragment>
                    <span className="inicio-text45">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_2CIV58'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                imageSrc="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIxfHxwb3J0cmFpdCUyMHdvbWFuJTIwY29sb3J8ZW58MHx8fHwxNjI2NDUwNTU4&amp;ixlib=rb-1.2.1&amp;h=1000"
                profileSrc="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
                description1={
                  <Fragment>
                    <span className="inicio-text46">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_wW2wZ3'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                rootClassName="rootClassName1"
              ></BlogPostCard2>
            </div>
          </div>
        </section>
        <section className="inicio-black">
          <img
            alt="image"
            src="/Material web/ape-experience-fondo-ux-ui%20(1)-1500w.png"
            className="inicio-image22"
          />
          <section className="inicio-testimonials">
            <div className="inicio-header7">
              <div className="inicio-section-numeral2">
                <div className="inicio-divide2"></div>
                <p className="inicio-text47">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_iakiXc'),
                    }}
                  ></span>
                </p>
              </div>
              <div data-aos="fade-right" className="inicio-heading3">
                <p className="inicio-title3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Title_BWB-uf'),
                    }}
                  ></span>
                </p>
              </div>
            </div>
            <div id="scrollbar" className="inicio-quotes">
              <div className="inicio-quote11">
                <div className="inicio-author1">
                  <img
                    alt="image"
                    src="/Material web/ime-job-solutions-favicon-200h.jpg"
                    className="inicio-image23"
                  />
                  <div className="inicio-details1">
                    <span className="inicio-name1">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('Name_EE1zPw'),
                        }}
                      ></span>
                    </span>
                    <span className="inicio-handle1">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('Handle_qAPAKM'),
                        }}
                      ></span>
                    </span>
                  </div>
                </div>
                <p className="inicio-quote12">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Quote_nmeOyy'),
                    }}
                  ></span>
                </p>
              </div>
              <div className="inicio-quote13">
                <div className="inicio-author2">
                  <img
                    alt="image"
                    src="/Material web/agroabeca-favicon-200h.jpg"
                    className="inicio-image24"
                  />
                  <div className="inicio-details2">
                    <span className="inicio-name2">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('Name_Cq6VY7'),
                        }}
                      ></span>
                    </span>
                    <span className="inicio-handle2">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('Handle_yJ93HG'),
                        }}
                      ></span>
                    </span>
                  </div>
                </div>
                <p className="inicio-quote14">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Quote_fOLBar'),
                    }}
                  ></span>
                </p>
              </div>
              <div className="inicio-quote15">
                <div className="inicio-author3">
                  <img
                    alt="image"
                    src="/Material web/andria-viloria-favicon-200h.jpg"
                    className="inicio-image25"
                  />
                  <div className="inicio-details3">
                    <span className="inicio-name3">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('Name_HyvaFO'),
                        }}
                      ></span>
                    </span>
                    <span className="inicio-handle3">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('Handle_mMuVH2'),
                        }}
                      ></span>
                    </span>
                  </div>
                </div>
                <p className="inicio-quote16">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Quote_K9K1Ie'),
                    }}
                  ></span>
                </p>
              </div>
              <div className="inicio-quote17">
                <div className="inicio-author4">
                  <img
                    alt="image"
                    src="/Material web/muebles-new-favicon-200h.jpg"
                    className="inicio-image26"
                  />
                  <div className="inicio-details4">
                    <span className="inicio-name4">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('Name_a19yWa'),
                        }}
                      ></span>
                    </span>
                    <span className="inicio-handle4">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('Handle_PVG4GF'),
                        }}
                      ></span>
                    </span>
                  </div>
                </div>
                <p className="inicio-quote18">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Quote_CbRt1t'),
                    }}
                  ></span>
                </p>
              </div>
              <div className="inicio-quote19">
                <div className="inicio-author5">
                  <img
                    alt="image"
                    src="/Material web/atte-pasteleria-favicon-200h.jpg"
                    className="inicio-image27"
                  />
                  <div className="inicio-details5">
                    <span className="inicio-name5">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('Name_7Na6tp'),
                        }}
                      ></span>
                    </span>
                    <span className="inicio-handle5">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('Handle__NuTyx'),
                        }}
                      ></span>
                    </span>
                  </div>
                </div>
                <p className="inicio-quote20">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Quote_utbB69'),
                    }}
                  ></span>
                </p>
              </div>
            </div>
          </section>
          <section className="inicio-join">
            <div className="inicio-container30">
              <p className="inicio-title4">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('Title_-FxleB'),
                  }}
                ></span>
              </p>
              <Link href="/solicitar-servicio">
                <a className="inicio-link28 button">
                  <span className="inicio-text48">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_SBTMow'),
                      }}
                    ></span>
                  </span>
                </a>
              </Link>
            </div>
          </section>
        </section>
        <section className="newsletter inicio-subscribe">
          <div className="inicio-main">
            <p className="inicio-header8">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('Header_pmTs8X'),
                }}
              ></span>
            </p>
            <div className="inicio-content6">
              <div className="inicio-inputs">
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Nombre *"
                  autoComplete="name"
                  className="inicio-textinput1 input"
                />
                <input
                  type="email"
                  required
                  placeholder="Correo *"
                  autoComplete="email"
                  className="inicio-textinput2 input"
                />
              </div>
              <span className="inicio-text49">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_sq7YG5'),
                  }}
                ></span>
              </span>
              <button type="submit" className="inicio-button2 button">
                <span className="inicio-text50">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_IsXFxD'),
                    }}
                  ></span>
                </span>
              </button>
            </div>
          </div>
        </section>
        <footer className="inicio-footer">
          <div className="inicio-content7">
            <div className="inicio-details6">
              <Link href="/">
                <a className="inicio-link29">
                  <img
                    alt="APE Experience Pié de Página Logo Negro"
                    src="/Material web/ape-experience-logo-negro%20(1)-600h.png"
                    className="inicio-image28"
                  />
                </a>
              </Link>
              <p className="inicio-description">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('Description_0DLf8w'),
                  }}
                ></span>
              </p>
            </div>
          </div>
          <div className="inicio-content8">
            <div className="inicio-details7">
              <span className="inicio-text51">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_uRzGXk'),
                  }}
                ></span>
              </span>
              <Link href="/">
                <a className="inicio-link30 a.link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_JeVi0t'),
                    }}
                  ></span>
                </a>
              </Link>
              <Link href="/sobre-mi">
                <a className="inicio-link31 a.link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_MLklQF'),
                    }}
                  ></span>
                </a>
              </Link>
              <Link href="/servicios">
                <a className="inicio-link32 a.link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text__pAFdk'),
                    }}
                  ></span>
                </a>
              </Link>
              <Link href="/proyectos">
                <a className="inicio-link33 a.link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_RDokAi'),
                    }}
                  ></span>
                </a>
              </Link>
              <Link href="/blog">
                <a className="inicio-link34 a.link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_HMu8AI'),
                    }}
                  ></span>
                </a>
              </Link>
              <Link href="/contacto">
                <a className="inicio-link35 a.link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_P0C9OL'),
                    }}
                  ></span>
                </a>
              </Link>
            </div>
            <div className="inicio-socials">
              <a
                href="https://instagram.com/ape_experience/"
                target="_blank"
                rel="noreferrer noopener"
                className="inicio-link36"
              >
                <img
                  alt="Instagram APE Experience"
                  src="/instagram.svg"
                  className="inicio-image29 social"
                />
              </a>
              <a
                href="https://facebook.com/apeexperienceve/"
                target="_blank"
                rel="noreferrer noopener"
                className="inicio-link37"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="inicio-icon28 social"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://threads.com/ape_experience/"
                target="_blank"
                rel="noreferrer noopener"
                className="inicio-link38"
              >
                <img
                  alt="Threads APE Experience"
                  src="/Material web/threads-600h.png"
                  className="inicio-image30 social"
                />
              </a>
            </div>
            <span className="inicio-copyright">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('Copyright_DX78eU'),
                }}
              ></span>
            </span>
          </div>
        </footer>
        <div>
          <div className="inicio-container32">
            <Script
              html={`<script>
    ScrollReveal().reveal('.speaker');
    ScrollReveal().reveal('.image-notes');
</script>`}
            ></Script>
          </div>
        </div>
        <div>
          <div className="inicio-container34">
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
          .inicio-container10 {
            width: 100%;
            display: flex;
            overflow: hidden;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .inicio-video1 {
            width: 100%;
            height: 100vh;
            z-index: 1;
            object-fit: cover;
            margin-bottom: -100vh;
          }
          .inicio-hero {
            width: 100%;
            height: 100vh;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-layout-space-threeunits);
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            justify-content: center;
            background-image: linear-gradient(
              90deg,
              rgba(55, 44, 80, 0.9) 0%,
              rgba(55, 44, 80, 0.9) 100%
            );
          }
          .inicio-background1 {
            left: 0px;
            right: 0px;
            bottom: 0px;
            height: 100%;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .inicio-image10 {
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 90%;
            position: absolute;
            object-fit: cover;
          }
          .inicio-container11 {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            justify-content: center;
          }
          .inicio-image11 {
            flex: 1;
            width: 100%;
            height: 100vh;
            z-index: 100;
            align-self: flex-end;
            object-fit: cover;
          }
          .inicio-container12 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .inicio-navbar {
            width: 100%;
            display: flex;
            z-index: 1000;
            position: relative;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            justify-content: space-between;
          }
          .inicio-link10 {
            display: contents;
          }
          .inicio-image12 {
            width: 104px;
            height: 114px;
            object-fit: cover;
            text-decoration: none;
          }
          .inicio-desktop-menu {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
          }
          .inicio-nav1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .inicio-link12 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
            text-decoration: none;
          }
          .inicio-link14 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
            text-decoration: none;
          }
          .inicio-link16 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
            text-decoration: none;
          }
          .inicio-link18 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
            text-decoration: none;
          }
          .inicio-link20 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
            text-decoration: none;
          }
          .inicio-link22 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
            text-decoration: none;
          }
          .inicio-link23 {
            text-decoration: none;
          }
          .inicio-text10 {
            font-size: 16px;
            font-family: Open Sans;
            text-transform: uppercase;
          }
          .inicio-icon10 {
            width: 16px;
            height: 16px;
          }
          .inicio-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .inicio-icon12 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .inicio-mobile-menu {
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
          .inicio-nav2 {
            display: flex;
            z-index: 20;
            align-items: flex-start;
            flex-direction: column;
          }
          .inicio-container13 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .inicio-text11 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
            line-height: 45px;
          }
          .inicio-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .inicio-icon14 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .inicio-nav3 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .inicio-button-container {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-layout-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .inicio-login {
            margin-right: var(--dl-layout-space-twounits);
          }
          .inicio-icon-group {
            display: flex;
            z-index: 20;
          }
          .inicio-icons {
            display: flex;
          }
          .inicio-icon16 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
            margin-right: var(--dl-layout-space-twounits);
          }
          .inicio-icon18 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
            margin-right: var(--dl-layout-space-twounits);
          }
          .inicio-icon20 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .inicio-background2 {
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 80%;
            margin: auto;
            position: absolute;
            object-fit: cover;
          }
          .inicio-hero-content {
            gap: var(--dl-layout-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            z-index: 100;
            max-width: 1000px;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fourunits);
            justify-content: center;
          }
          .inicio-text17 {
            color: rgb(255, 255, 255);
            width: 812px;
            font-size: 56px;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 600;
            line-height: 1.1;
          }
          .inicio-caption1 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .inicio-register3 {
            text-decoration: none;
          }
          .inicio-text18 {
            width: 100%;
            font-size: 16px;
            max-width: 100px;
            font-style: normal;
            text-align: center;
            font-family: 'Open Sans';
            font-weight: 600;
            line-height: 24px;
            text-transform: uppercase;
          }
          .inicio-caption2 {
            color: rgb(255, 255, 255);
            width: 521px;
            font-size: 32px;
            font-family: 'Open Sans';
          }
          .inicio-notes {
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .inicio-first {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .inicio-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
          }
          .inicio-header1 {
            font-size: 38px;
            font-style: normal;
            transition: 0.3s;
            font-family: Open Sans;
            font-weight: 600;
            line-height: 48px;
          }
          .inicio-header1:hover {
            color: #5302fd;
          }
          .inicio-list {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .inicio-note1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .inicio-point {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-layout-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: var(--dl-color-gray-black);
          }
          .inicio-text19 {
            width: 100%;
            font-size: 18px;
            font-family: Open Sans;
            line-height: 27px;
          }
          .inicio-note2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-layout-space-fourunits);
            flex-direction: row;
          }
          .inicio-button1 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            font-style: normal;
            text-align: left;
            font-family: Open Sans;
            font-weight: 400;
            text-transform: uppercase;
            background-color: #5302fd;
          }
          .inicio-icon22 {
            fill: var(--dl-color-gray-white);
            width: 16px;
            height: 16px;
          }
          .inicio-image13 {
            width: 50%;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .inicio-second {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
          }
          .inicio-content2 {
            gap: var(--dl-layout-space-threeunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
          }
          .inicio-header2 {
            font-size: 38px;
            font-style: normal;
            transition: 0.3s;
            font-family: Open Sans;
            font-weight: 600;
            line-height: 48px;
          }
          .inicio-header2:hover {
            color: #5302fd;
          }
          .inicio-register4 {
            text-transform: uppercase;
          }
          .inicio-text20 {
            font-size: 18px;
            font-family: Open Sans;
          }
          .inicio-icon24 {
            width: 16px;
            height: 16px;
          }
          .inicio-image14 {
            height: 100%;
          }
          .inicio-quote10 {
            width: 100%;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
            background-color: #aa82ff;
          }
          .inicio-content3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 120%;
            display: flex;
            z-index: 100;
            max-width: 130%;
            align-items: center;
            flex-direction: column;
          }
          .inicio-container14 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .inicio-header3 {
            color: var(--dl-color-gray-black);
            font-size: 38px;
            align-self: center;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 600;
            line-height: 48px;
            margin-bottom: 2%;
          }
          .inicio-gallery {
            width: 100%;
            height: 654px;
            display: grid;
            grid-gap: var(--dl-layout-space-unit);
            max-width: var(--dl-layout-size-maxwidth);
            max-height: 100%;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: var(--dl-layout-space-halfunit);
            grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
            grid-template-areas: 'a b b' 'a b b' 'a c d' 'a c d' 'e e d' 'e e f' 'e e f';
            grid-template-columns: 1fr 1fr 1fr;
          }
          .inicio-container15 {
            flex: 0 0 auto;
            width: 100%;
            height: 118%;
            display: flex;
            opacity: 1;
            grid-area: a;
            transition: 0.3s;
            align-items: flex-start;
            border-radius: 20px;
            flex-direction: column;
            background-size: cover;
            background-image: linear-gradient(
                90deg,
                rgba(10, 85, 74, 0.9) 0%,
                rgba(10, 85, 74, 0.9) 99%
              ),
              url('/Material web/ape-experience-bgcreativos-andria-viloria-cuidarte-es-amarte-skincare-pagina-web-1400w.jpg');
            background-position: center;
          }
          .inicio-container15:hover {
            transform: scale(0.98);
            background-image: url('/Material web/ape-experience-bgcreativos-andria-viloria-cuidarte-es-amarte-skincare-pagina-web-1400w.jpg');
          }
          .inicio-link24 {
            display: contents;
          }
          .inicio-container16 {
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
            text-decoration: none;
          }
          .inicio-text21 {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            font-family: Open Sans;
            font-weight: 600;
          }
          .inicio-text22 {
            top: 53px;
            left: 17px;
            color: var(--dl-color-gray-white);
            position: absolute;
            font-family: Open Sans;
          }
          .inicio-image15 {
            width: 45%;
            align-self: flex-end;
            object-fit: cover;
          }
          .inicio-container17 {
            flex: 0 0 auto;
            width: 100%;
            height: 382px;
            display: flex;
            grid-area: b;
            transition: 0.3s;
            align-items: flex-start;
            border-radius: 20px;
            flex-direction: column;
            background-size: cover;
            background-image: url('/Material web/ape-experience-bgcreativos-ime-job-solutions-disen%C3%AC%C2%83o-web-multilenguaje-1400w.jpg');
            background-position: center;
          }
          .inicio-container17:hover {
            transform: scale(0.98);
          }
          .inicio-link25 {
            display: contents;
          }
          .inicio-container18 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            transition: 0.3s;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-unit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: 20px;
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: space-between;
            text-decoration: none;
            background-image: linear-gradient(
              90deg,
              rgba(14, 117, 102, 0.9) 1%,
              rgba(14, 117, 102, 0.9) 100%
            );
          }
          .inicio-container18:hover {
            background-image: linear-gradient(
              135deg,
              rgba(14, 117, 102, 0.8) 0%,
              rgba(14, 117, 102, 0.1) 51%
            );
          }
          .inicio-text23 {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            font-family: Open Sans;
            font-weight: 600;
          }
          .inicio-text24 {
            top: 51px;
            left: 16px;
            color: var(--dl-color-gray-white);
            position: absolute;
            font-family: Open Sans;
          }
          .inicio-image16 {
            width: 20%;
            align-self: flex-end;
            object-fit: cover;
          }
          .inicio-container19 {
            flex: 0 0 auto;
            width: 100%;
            height: 168%;
            display: flex;
            grid-area: c;
            transition: 0.3s;
            align-items: flex-start;
            border-radius: 20px;
            flex-direction: column;
            background-size: cover;
            background-image: linear-gradient(
                90deg,
                rgba(14, 117, 102, 0.9) 0%,
                rgba(14, 117, 102, 0.9) 100%
              ),
              url('/Material web/ape-experience-bgcreativos-mueblesnew-pagina-web-1400w.jpg');
            background-position: center;
          }
          .inicio-container19:hover {
            transform: scale(0.98);
            background-image: url('/Material web/ape-experience-bgcreativos-mueblesnew-pagina-web-1400w.jpg');
          }
          .inicio-link26 {
            display: contents;
          }
          .inicio-container20 {
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            position: relative;
            max-height: 100%;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
            text-decoration: none;
          }
          .inicio-text25 {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            font-family: Open Sans;
            font-weight: 600;
          }
          .inicio-text26 {
            top: 68px;
            left: 32px;
            color: var(--dl-color-gray-white);
            position: absolute;
            font-family: Open Sans;
          }
          .inicio-image17 {
            width: 45%;
            align-self: flex-end;
            object-fit: cover;
          }
          .inicio-container21 {
            flex: 0 0 auto;
            width: 100%;
            height: 200%;
            display: flex;
            border-radius: 20px;
            flex-direction: column;
          }
          .inicio-link27 {
            display: contents;
          }
          .inicio-container22 {
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            position: relative;
            grid-area: f;
            transition: 0.3s;
            align-items: flex-start;
            border-radius: 20px;
            flex-direction: column;
            background-size: cover;
            justify-content: space-between;
            text-decoration: none;
            background-image: linear-gradient(
                90deg,
                rgba(10, 85, 74, 0.9) 0%,
                rgba(10, 85, 74, 0.9) 100%
              ),
              url('/Material web/ape-experience-bgcreativos-agroabeca-agropecuaria-la-abeja-bovinos-pagina-web-1400w.jpg');
            background-position: center;
          }
          .inicio-container22:hover {
            transform: scale(0.98);
            background-image: url('/Material web/ape-experience-bgcreativos-agroabeca-agropecuaria-la-abeja-bovinos-pagina-web-1400w.jpg');
          }
          .inicio-text27 {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            font-family: Open Sans;
            font-weight: 600;
          }
          .inicio-text28 {
            top: 66px;
            left: 32px;
            color: var(--dl-color-gray-white);
            position: absolute;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 400;
          }
          .inicio-image18 {
            width: 45%;
            align-self: flex-end;
            object-fit: cover;
          }
          .inicio-background3 {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            margin: auto;
            position: absolute;
            object-fit: cover;
          }
          .inicio-background4 {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            margin: auto;
            padding: 0%;
            position: absolute;
            object-fit: cover;
          }
          .inicio-sobre-mi {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-self: center;
            align-items: stretch;
            padding-top: 10%;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: 10%;
            justify-content: center;
          }
          .inicio-header4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 560px;
            align-items: center;
            flex-direction: row;
          }
          .inicio-container23 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .inicio-container24 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            padding-right: 10%;
            flex-direction: column;
          }
          .inicio-container25 {
            width: 100%;
            height: 26px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .inicio-text29 {
            display: inline-block;
          }
          .inicio-title1 {
            font-size: 52px;
            font-style: normal;
            transition: 0.3s;
            font-family: Open Sans;
            font-weight: 600;
            line-height: 100px;
          }
          .inicio-title1:hover {
            color: #5302fd;
          }
          .inicio-caption3 {
            font-size: 18px;
            font-family: 'Open Sans';
            line-height: 27px;
            margin-bottom: 5%;
          }
          .inicio-register5 {
            width: 476px;
            text-transform: uppercase;
          }
          .inicio-text30 {
            font-size: 18px;
            font-family: Open Sans;
          }
          .inicio-icon26 {
            width: 16px;
            height: 16px;
          }
          .inicio-container26 {
            flex: 0 0 auto;
            width: 80%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .inicio-image19 {
            width: 100%;
            object-fit: cover;
            border-radius: 20px;
          }
          .inicio-heading1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .inicio-watch {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
            background-color: #2cccb2;
          }
          .inicio-content4 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            z-index: 100;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
          }
          .inicio-header5 {
            font-size: 50px;
            font-style: normal;
            text-align: center;
            font-family: Open Sans;
            font-weight: 600;
            line-height: 60px;
          }
          .inicio-video2 {
            width: 100%;
            cursor: pointer;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .inicio-video3 {
            width: 100%;
            transition: 0.3s;
            border-radius: 20px;
          }
          .inicio-video3:hover {
            box-shadow: 0px 0px 30px 0px #000000;
          }
          .inicio-image20 {
            top: 318px;
            left: 0px;
            right: 0px;
            width: 80px;
            cursor: pointer;
            margin: auto;
            position: absolute;
            object-fit: cover;
            transition: 0.3s;
          }
          .inicio-image20:hover {
            width: 90px;
          }
          .inicio-image21 {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            margin: auto;
            position: absolute;
            object-fit: cover;
          }
          .inicio-schedule {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            flex-direction: column;
            padding-bottom: 200px;
            background-size: cover;
            justify-content: center;
            background-image: url('/grainy-1500w.png');
          }
          .inicio-content5 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
          }
          .inicio-header6 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .inicio-section-numeral1 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .inicio-divide1 {
            width: 100px;
            height: 1px;
            display: flex;
            margin-top: 4px;
            align-items: center;
            flex-direction: row;
            background-color: #ffffff;
          }
          .inicio-text31 {
            color: rgb(255, 255, 255);
          }
          .inicio-heading2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .inicio-title2 {
            color: rgb(255, 255, 255);
            font-size: 56px;
            font-style: normal;
            transition: 0.3s;
            font-family: Open Sans;
            font-weight: 600;
            line-height: 100px;
          }
          .inicio-title2:hover {
            color: #19b9a2;
          }
          .inicio-caption4 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            font-family: Open Sans;
            line-height: 27px;
          }
          .inicio-blog {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .inicio-container27 {
            display: flex;
            align-items: center;
            border-radius: 20px;
            margin-bottom: var(--dl-layout-space-twounits);
            flex-direction: column;
            background-size: cover;
            justify-content: space-between;
            background-image: linear-gradient(
                135deg,
                rgb(9, 185, 160) 47%,
                rgba(7, 249, 215, 0.6) 100%
              ),
              url('/Material web/fondo-blog-destacado-ape-experience%20(1)-1400w.jpg');
          }
          .inicio-text32 {
            display: inline-block;
          }
          .inicio-text33 {
            display: inline-block;
          }
          .inicio-text34 {
            display: inline-block;
          }
          .inicio-text35 {
            display: inline-block;
          }
          .inicio-text36 {
            display: inline-block;
          }
          .inicio-container28 {
            color: white;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-radius: 20px;
            margin-bottom: var(--dl-layout-space-twounits);
            flex-direction: column;
            justify-content: space-between;
            background-color: #272727;
          }
          .inicio-container28:hover {
            background-color: #3b3b3b;
          }
          .inicio-text37 {
            display: inline-block;
          }
          .inicio-text38 {
            display: inline-block;
          }
          .inicio-text39 {
            display: inline-block;
          }
          .inicio-text40 {
            display: inline-block;
          }
          .inicio-text41 {
            display: inline-block;
          }
          .inicio-container29 {
            color: white;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-radius: 20px;
            margin-bottom: var(--dl-layout-space-twounits);
            flex-direction: column;
            justify-content: space-between;
            background-color: #272727;
          }
          .inicio-container29:hover {
            background-color: #3b3b3b;
          }
          .inicio-text42 {
            display: inline-block;
          }
          .inicio-text43 {
            display: inline-block;
          }
          .inicio-text44 {
            display: inline-block;
          }
          .inicio-text45 {
            display: inline-block;
          }
          .inicio-text46 {
            display: inline-block;
          }
          .inicio-black {
            gap: 120px;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: 5%;
            flex-direction: column;
            padding-bottom: 5%;
            background-color: #d9d9d9;
          }
          .inicio-image22 {
            top: 0px;
            left: 0px;
            bottom: 0px;
            height: 650px;
            margin: auto;
            position: absolute;
            object-fit: cover;
          }
          .inicio-testimonials {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
          }
          .inicio-header7 {
            gap: var(--dl-layout-space-oneandhalfunits);
            color: white;
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-self: center;
            align-items: flex-start;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
          }
          .inicio-section-numeral2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .inicio-divide2 {
            width: 100px;
            height: 1px;
            display: flex;
            margin-top: 4px;
            align-items: center;
            flex-direction: row;
            background-color: #363636;
          }
          .inicio-text47 {
            color: #363636;
          }
          .inicio-heading3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .inicio-title3 {
            color: var(--dl-color-gray-black);
            font-size: 50px;
            max-width: 900px;
            font-style: normal;
            transition: 0.3s;
            font-weight: 600;
            line-height: 55px;
          }
          .inicio-title3:hover {
            color: #5302fd;
          }
          .inicio-quotes {
            width: 100%;
            display: flex;
            overflow: auto;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: stretch;
            margin-left: max(0px, (100% - 1240px)/2);
            flex-direction: row;
          }
          .inicio-quote11 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            min-width: 370px;
            align-items: flex-start;
            border-color: #c8c8c8;
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            border-right-width: 1px;
          }
          .inicio-author1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .inicio-image23 {
            width: 60px;
            object-fit: cover;
            aspect-ratio: 1;
            border-radius: 60px;
          }
          .inicio-details1 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .inicio-name1 {
            font-style: normal;
            font-weight: 600;
            letter-spacing: 1%;
          }
          .inicio-handle1 {
            color: var(--dl-color-gray-500);
            font-size: 14px;
            letter-spacing: 1%;
          }
          .inicio-quote12 {
            color: var(--dl-color-gray-black);
            width: 100%;
            font-size: 28px;
            max-width: 320px;
            line-height: 33px;
            letter-spacing: 1%;
          }
          .inicio-quote13 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            min-width: 370px;
            align-items: flex-start;
            border-color: #c8c8c8;
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            border-right-width: 1px;
          }
          .inicio-author2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .inicio-image24 {
            width: 60px;
            object-fit: cover;
            aspect-ratio: 1;
            border-radius: 60px;
          }
          .inicio-details2 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .inicio-name2 {
            color: var(--dl-color-gray-black);
            font-style: normal;
            font-weight: 600;
            letter-spacing: 1%;
          }
          .inicio-handle2 {
            color: var(--dl-color-gray-500);
            font-size: 14px;
            letter-spacing: 1%;
          }
          .inicio-quote14 {
            color: var(--dl-color-gray-black);
            width: 100%;
            font-size: 28px;
            max-width: 320px;
            line-height: 33px;
            letter-spacing: 1%;
          }
          .inicio-quote15 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            min-width: 370px;
            align-items: flex-start;
            border-color: #c8c8c8;
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            border-right-width: 1px;
          }
          .inicio-author3 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .inicio-image25 {
            width: 60px;
            object-fit: cover;
            aspect-ratio: 1;
            border-radius: 60px;
          }
          .inicio-details3 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .inicio-name3 {
            color: var(--dl-color-gray-black);
            font-style: normal;
            font-weight: 600;
            letter-spacing: 1%;
          }
          .inicio-handle3 {
            color: var(--dl-color-gray-500);
            font-size: 14px;
            letter-spacing: 1%;
          }
          .inicio-quote16 {
            color: var(--dl-color-gray-black);
            width: 100%;
            font-size: 28px;
            max-width: 320px;
            line-height: 33px;
            letter-spacing: 1%;
          }
          .inicio-quote17 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            min-width: 370px;
            align-items: flex-start;
            border-color: #c8c8c8;
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            border-right-width: 1px;
          }
          .inicio-author4 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .inicio-image26 {
            width: 60px;
            object-fit: cover;
            aspect-ratio: 1;
            border-radius: 60px;
          }
          .inicio-details4 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .inicio-name4 {
            color: var(--dl-color-gray-black);
            font-style: normal;
            font-weight: 600;
            letter-spacing: 1%;
          }
          .inicio-handle4 {
            color: var(--dl-color-gray-500);
            font-size: 14px;
            letter-spacing: 1%;
          }
          .inicio-quote18 {
            color: var(--dl-color-gray-black);
            width: 100%;
            font-size: 28px;
            max-width: 320px;
            line-height: 33px;
            letter-spacing: 1%;
          }
          .inicio-quote19 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            min-width: 370px;
            align-items: flex-start;
            border-color: #c8c8c8;
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            border-right-width: 1px;
          }
          .inicio-author5 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .inicio-image27 {
            width: 60px;
            object-fit: cover;
            aspect-ratio: 1;
            border-radius: 60px;
          }
          .inicio-details5 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .inicio-name5 {
            color: var(--dl-color-gray-black);
            font-style: normal;
            font-weight: 600;
            letter-spacing: 1%;
          }
          .inicio-handle5 {
            color: var(--dl-color-gray-500);
            font-size: 14px;
            letter-spacing: 1%;
          }
          .inicio-quote20 {
            color: var(--dl-color-gray-black);
            width: 100%;
            font-size: 28px;
            max-width: 320px;
            line-height: 33px;
            letter-spacing: 1%;
          }
          .inicio-join {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
          }
          .inicio-container30 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            padding: 5%;
            align-items: center;
            border-radius: 20px;
            flex-direction: column;
            justify-content: center;
            background-color: #5302fd;
          }
          .inicio-title4 {
            color: var(--dl-color-gray-white);
            font-size: 48px;
            max-width: 900px;
            font-style: normal;
            text-align: center;
            font-family: Open Sans;
            font-weight: 600;
            line-height: 58px;
            margin-bottom: 3%;
          }
          .inicio-link28 {
            padding: 2%;
            align-self: center;
            font-family: Open Sans;
            border-radius: 60px;
            text-decoration: none;
            background-color: rgb(170, 130, 255);
          }
          .inicio-text48 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
          }
          .inicio-main {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: flex-start;
            flex-direction: column;
          }
          .inicio-header8 {
            font-size: 36px;
            font-style: normal;
            transition: 0.3s;
            font-family: Open Sans;
            font-weight: 600;
            line-height: 46px;
          }
          .inicio-header8:hover {
            color: #5302fd;
          }
          .inicio-content6 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .inicio-inputs {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .inicio-textinput1 {
            width: 100%;
            font-size: 18px;
            font-family: Open Sans;
            line-height: 27px;
            padding-top: 0px;
            border-color: rgba(0, 0, 0, 0.2);
            border-width: 0px;
            padding-left: 0px;
            border-radius: 0px;
            padding-right: 0px;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            border-bottom-width: 1px;
          }
          .inicio-textinput2 {
            width: 100%;
            font-size: 18px;
            font-family: Open Sans;
            line-height: 27px;
            padding-top: 0px;
            border-color: rgba(0, 0, 0, 0.2);
            border-width: 0px;
            padding-left: 0px;
            border-radius: 0px;
            padding-right: 0px;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            border-bottom-width: 1px;
          }
          .inicio-text49 {
            font-size: 14px;
            font-family: Open Sans;
          }
          .inicio-button2 {
            align-self: flex-start;
            background-color: rgb(170, 130, 255);
          }
          .inicio-text50 {
            color: rgb(6, 6, 6);
            font-family: Open Sans;
          }
          .inicio-footer {
            width: 100%;
            height: 588px;
            display: flex;
            align-items: center;
            padding-top: 120px;
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-fiveunits);
            background-color: #2cccb2;
          }
          .inicio-content7 {
            gap: var(--dl-layout-space-threeunits);
            width: 50%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
          }
          .inicio-details6 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
          }
          .inicio-link29 {
            display: contents;
          }
          .inicio-image28 {
            width: 200px;
            align-self: flex-start;
            object-fit: cover;
            text-decoration: none;
          }
          .inicio-description {
            width: 100%;
            font-size: 18px;
            line-height: 27px;
          }
          .inicio-content8 {
            gap: var(--dl-layout-space-threeunits);
            width: 50%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
          }
          .inicio-details7 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
          }
          .inicio-text51 {
            font-size: 22px;
            align-self: flex-start;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            text-transform: uppercase;
          }
          .inicio-link30 {
            line-height: 1.15;
            text-decoration: none;
          }
          .inicio-link31 {
            line-height: 1.15;
            text-decoration: none;
          }
          .inicio-link32 {
            line-height: 1.15;
            text-decoration: none;
          }
          .inicio-link33 {
            line-height: 1.15;
            text-decoration: none;
          }
          .inicio-link34 {
            line-height: 1.15;
            text-decoration: none;
          }
          .inicio-link35 {
            line-height: 1.15;
            text-decoration: none;
          }
          .inicio-socials {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: row;
          }
          .inicio-link36 {
            display: contents;
          }
          .inicio-image29 {
            text-decoration: none;
          }
          .inicio-link37 {
            display: contents;
          }
          .inicio-icon28 {
            width: 24px;
            height: 24px;
            text-decoration: none;
          }
          .inicio-link38 {
            display: contents;
          }
          .inicio-image30 {
            text-decoration: none;
          }
          .inicio-copyright {
            width: 100%;
            font-size: 18px;
            line-height: 21px;
          }
          .inicio-container32 {
            display: contents;
          }
          .inicio-container34 {
            display: contents;
          }
          @media (max-width: 1440px) {
            .inicio-video1 {
              height: 110vh;
              padding-top: 0px;
            }
            .inicio-hero {
              padding-top: var(--dl-layout-space-unit);
            }
            .inicio-image11 {
              top: -76%;
              left: -745px;
              width: auto;
              height: 150vh;
              margin: auto;
            }
            .inicio-caption2 {
              color: rgb(255, 255, 255);
              font-size: 32px;
              font-family: Open Sans;
            }
            .inicio-image23 {
              border-radius: 60px;
            }
            .inicio-image24 {
              border-radius: 60px;
            }
            .inicio-image25 {
              border-radius: 60px;
            }
            .inicio-image26 {
              border-radius: 60px;
            }
            .inicio-image27 {
              border-radius: 60px;
            }
          }
          @media (max-width: 1200px) {
            .inicio-video1 {
              align-self: center;
            }
            .inicio-hero {
              padding-top: 0%;
            }
            .inicio-image11 {
              top: -158px;
              left: -636px;
              height: 110vh;
            }
          }
          @media (max-width: 991px) {
            .inicio-image12 {
              width: 88px;
              height: 87px;
            }
            .inicio-link12 {
              font-size: 16px;
            }
            .inicio-link14 {
              font-size: 16px;
            }
            .inicio-link16 {
              font-size: 16px;
            }
            .inicio-link18 {
              font-size: 16px;
            }
            .inicio-link20 {
              font-size: 16px;
            }
            .inicio-link22 {
              font-size: 16px;
            }
            .inicio-link23 {
              padding-top: 1%;
              padding-left: 2%;
              padding-right: 2%;
              padding-bottom: 1%;
            }
            .inicio-text10 {
              font-size: 14px;
              font-family: Open Sans;
              text-transform: uppercase;
            }
            .inicio-text18 {
              font-size: 16px;
              font-style: normal;
              font-weight: 600;
              line-height: 24px;
            }
            .inicio-first {
              flex-direction: column;
            }
            .inicio-content1 {
              padding-top: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .inicio-image13 {
              flex: 0 0 auto;
              width: 100%;
            }
            .inicio-second {
              flex-direction: column;
            }
            .inicio-content2 {
              padding-top: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .inicio-gallery {
              grid-gap: var(--dl-layout-space-unit);
            }
            .inicio-text21 {
              text-align: center;
            }
            .inicio-text22 {
              text-align: center;
            }
            .inicio-text23 {
              text-align: center;
            }
            .inicio-text24 {
              text-align: center;
            }
            .inicio-text25 {
              text-align: center;
            }
            .inicio-text26 {
              text-align: center;
            }
            .inicio-text27 {
              text-align: center;
            }
            .inicio-text28 {
              text-align: center;
            }
            .inicio-sobre-mi {
              gap: var(--dl-layout-space-unit);
              flex-wrap: wrap;
              align-items: center;
            }
            .inicio-header4 {
              flex-wrap: wrap;
              max-width: 100%;
              align-self: center;
              flex-direction: column-reverse;
            }
            .inicio-container23 {
              align-self: center;
              align-items: center;
            }
            .inicio-container24 {
              padding-right: 0%;
            }
            .inicio-caption3 {
              text-align: justify;
            }
            .inicio-image19 {
              width: 480px;
              height: 480px;
              object-fit: cover;
            }
          }
          @media (max-width: 767px) {
            .inicio-hero {
              height: 60vh;
              padding-top: var(--dl-layout-space-oneandhalfunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .inicio-image12 {
              width: 140px;
              height: 152px;
            }
            .inicio-desktop-menu {
              display: none;
            }
            .inicio-burger-menu {
              display: flex;
            }
            .inicio-icon12 {
              fill: white;
              width: var(--dl-layout-size-small);
              height: var(--dl-layout-size-small);
            }
            .inicio-nav2 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .inicio-container13 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .inicio-text11 {
              color: #000000;
            }
            .inicio-nav3 {
              gap: var(--dl-layout-space-unit);
            }
            .inicio-text12 {
              color: #000000;
            }
            .inicio-text13 {
              color: rgb(0, 0, 0);
            }
            .inicio-text14 {
              color: rgb(0, 0, 0);
            }
            .inicio-text15 {
              color: rgb(0, 0, 0);
            }
            .inicio-text16 {
              color: rgb(0, 0, 0);
            }
            .inicio-button-container {
              gap: var(--dl-layout-space-unit);
              width: 50%;
              margin-top: 0px;
              align-items: flex-start;
              flex-direction: column;
            }
            .inicio-login {
              width: 100%;
              border-width: 1px;
              margin-right: 0px;
            }
            .inicio-register2 {
              width: 100%;
              border-width: 1px;
            }
            .inicio-icon-group {
              width: 100%;
              justify-content: flex-start;
            }
            .inicio-hero-content {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .inicio-text17 {
              width: 100%;
              font-size: 48px;
            }
            .inicio-caption1 {
              gap: var(--dl-layout-space-unit);
            }
            .inicio-register3 {
              padding: var(--dl-layout-space-halfunit);
            }
            .inicio-text18 {
              font-size: 16px;
              line-height: 18px;
            }
            .inicio-caption2 {
              color: rgb(255, 255, 255);
              font-size: 16px;
              font-family: Open Sans;
              line-height: 32px;
            }
            .inicio-content1 {
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .inicio-content2 {
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .inicio-register4 {
              width: 100%;
            }
            .inicio-quote10 {
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .inicio-gallery {
              height: auto;
              display: flex;
              padding-top: var(--dl-layout-space-unit);
              padding-left: var(--dl-layout-space-fiveunits);
              padding-right: var(--dl-layout-space-fiveunits);
              flex-direction: column;
              padding-bottom: var(--dl-layout-space-unit);
            }
            .inicio-container16 {
              height: var(--dl-layout-size-xxlarge);
            }
            .inicio-container17 {
              height: var(--dl-layout-size-xxlarge);
            }
            .inicio-container18 {
              height: var(--dl-layout-size-xxlarge);
            }
            .inicio-container20 {
              height: var(--dl-layout-size-xxlarge);
            }
            .inicio-container22 {
              height: var(--dl-layout-size-xxlarge);
            }
            .inicio-sobre-mi {
              gap: var(--dl-layout-space-twounits);
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .inicio-title1 {
              font-size: 30px;
              line-height: 33px;
            }
            .inicio-caption3 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .inicio-register5 {
              width: 100%;
            }
            .inicio-heading1 {
              gap: var(--dl-layout-space-unit);
            }
            .inicio-watch {
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .inicio-content4 {
              gap: var(--dl-layout-space-oneandhalfunits);
              max-width: 900px;
            }
            .inicio-header5 {
              font-size: 20px;
              line-height: 24px;
            }
            .inicio-image20 {
              width: 40px;
            }
            .inicio-image21 {
              left: 0px;
              right: 0px;
              margin: auto;
            }
            .inicio-schedule {
              gap: var(--dl-layout-space-twounits);
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .inicio-content5 {
              gap: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .inicio-divide1 {
              width: 50px;
            }
            .inicio-heading2 {
              gap: var(--dl-layout-space-unit);
            }
            .inicio-title2 {
              font-size: 30px;
              line-height: 33px;
            }
            .inicio-caption4 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .inicio-blog {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
            .inicio-black {
              gap: var(--dl-layout-space-fourunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .inicio-image22 {
              display: none;
            }
            .inicio-testimonials {
              gap: var(--dl-layout-space-threeunits);
              padding-top: 0px;
            }
            .inicio-header7 {
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .inicio-divide2 {
              width: 50px;
            }
            .inicio-heading3 {
              gap: var(--dl-layout-space-unit);
            }
            .inicio-title3 {
              font-size: 30px;
              line-height: 33px;
            }
            .inicio-quotes {
              margin-left: 0px;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              flex-direction: column;
            }
            .inicio-quote11 {
              gap: var(--dl-layout-space-unit);
              width: 100%;
              height: auto;
              min-width: 100%;
              padding-top: var(--dl-layout-space-unit);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-layout-space-unit);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .inicio-author1 {
              width: 100%;
            }
            .inicio-image23 {
              width: 40px;
            }
            .inicio-details1 {
              flex: 1;
            }
            .inicio-name1 {
              width: 90%;
              font-size: 16px;
              line-height: 20px;
            }
            .inicio-handle1 {
              width: 90%;
              font-size: 14px;
              line-height: 16px;
            }
            .inicio-quote12 {
              width: 90%;
              font-size: 16px;
              line-height: 20px;
            }
            .inicio-quote13 {
              gap: var(--dl-layout-space-unit);
              width: 100%;
              height: auto;
              min-width: 100%;
              padding-top: var(--dl-layout-space-unit);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-layout-space-unit);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .inicio-author2 {
              width: 100%;
            }
            .inicio-image24 {
              width: 40px;
            }
            .inicio-details2 {
              flex: 1;
            }
            .inicio-name2 {
              width: 90%;
              font-size: 16px;
              line-height: 20px;
            }
            .inicio-handle2 {
              width: 90%;
              font-size: 14px;
              line-height: 16px;
            }
            .inicio-quote14 {
              width: 90%;
              font-size: 16px;
              line-height: 20px;
            }
            .inicio-quote15 {
              gap: var(--dl-layout-space-unit);
              width: 100%;
              height: auto;
              min-width: 100%;
              padding-top: var(--dl-layout-space-unit);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-layout-space-unit);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .inicio-author3 {
              width: 100%;
            }
            .inicio-image25 {
              width: 40px;
            }
            .inicio-details3 {
              flex: 1;
            }
            .inicio-name3 {
              width: 90%;
              font-size: 16px;
              line-height: 20px;
            }
            .inicio-handle3 {
              width: 90%;
              font-size: 14px;
              line-height: 16px;
            }
            .inicio-quote16 {
              width: 90%;
              font-size: 16px;
              line-height: 20px;
            }
            .inicio-quote17 {
              gap: var(--dl-layout-space-unit);
              width: 100%;
              height: auto;
              min-width: 100%;
              padding-top: var(--dl-layout-space-unit);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-layout-space-unit);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .inicio-name4 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .inicio-handle4 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .inicio-quote18 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .inicio-quote19 {
              gap: var(--dl-layout-space-unit);
              width: 100%;
              height: auto;
              min-width: 100%;
              padding-top: var(--dl-layout-space-unit);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-layout-space-unit);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .inicio-name5 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .inicio-handle5 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .inicio-quote20 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .inicio-join {
              gap: var(--dl-layout-space-oneandhalfunits);
              align-items: center;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .inicio-title4 {
              font-size: 30px;
              line-height: 33px;
            }
            .inicio-link28 {
              width: 100%;
              align-self: center;
            }
            .inicio-main {
              gap: var(--dl-layout-space-threeunits);
            }
            .inicio-header8 {
              font-size: 30px;
              line-height: 33px;
            }
            .inicio-content6 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .inicio-inputs {
              gap: var(--dl-layout-space-twounits);
            }
            .inicio-textinput1 {
              font-size: 16px;
              line-height: 24px;
              padding-bottom: var(--dl-layout-space-unit);
            }
            .inicio-textinput2 {
              font-size: 16px;
              line-height: 24px;
              padding-bottom: var(--dl-layout-space-unit);
            }
            .inicio-text49 {
              font-size: 10px;
            }
            .inicio-button2 {
              width: 100%;
            }
            .inicio-footer {
              padding-top: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-twounits);
            }
            .inicio-content7 {
              gap: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .inicio-description {
              font-size: 14px;
              line-height: 21px;
            }
            .inicio-content8 {
              gap: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .inicio-socials {
              gap: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .inicio-video1 {
              flex: 0 0 flex;
              width: 100%;
              height: 90vh;
              padding-top: 0px;
              margin-bottom: -80vh;
            }
            .inicio-background1 {
              flex: 1;
              width: auto;
              height: 100%;
              align-items: center;
              flex-direction: row;
            }
            .inicio-image10 {
              height: 90%;
            }
            .inicio-container11 {
              flex: 1;
              flex-direction: column-reverse;
            }
            .inicio-image11 {
              top: 90px;
              flex: 1;
              left: -05px;
              width: 490px;
              height: 909px;
            }
            .inicio-mobile-menu {
              padding: 16px;
            }
            .inicio-button-container {
              width: 100%;
            }
            .inicio-icon-group {
              justify-content: center;
            }
            .inicio-text17 {
              font-size: 50px;
            }
            .inicio-caption1 {
              position: relative;
              flex-wrap: wrap;
            }
            .inicio-register3 {
              left: 272px;
              bottom: -171px;
              position: absolute;
            }
            .inicio-notes {
              flex-direction: column;
            }
            .inicio-first {
              margin-top: 200px;
              flex-direction: column-reverse;
            }
            .inicio-header1 {
              font-size: 30px;
              text-align: center;
              line-height: 36px;
            }
            .inicio-list {
              gap: var(--dl-layout-space-unit);
            }
            .inicio-point {
              width: 100%;
              max-width: 20px;
            }
            .inicio-text19 {
              font-size: 16px;
              line-height: 24px;
            }
            .inicio-second {
              flex-direction: column-reverse;
            }
            .inicio-content2 {
              gap: var(--dl-layout-space-twounits);
            }
            .inicio-header2 {
              font-size: 30px;
              text-align: center;
              line-height: 36px;
            }
            .inicio-content3 {
              gap: var(--dl-layout-space-twounits);
            }
            .inicio-header3 {
              font-size: 30px;
              line-height: 36px;
            }
            .inicio-gallery {
              width: 100%;
              padding: var(--dl-layout-space-threeunits);
            }
            .inicio-container16 {
              height: var(--dl-layout-size-xxlarge);
            }
            .inicio-container17 {
              height: var(--dl-layout-size-xxlarge);
            }
            .inicio-container18 {
              height: var(--dl-layout-size-xxlarge);
            }
            .inicio-image16 {
              width: 45%;
            }
            .inicio-container20 {
              height: var(--dl-layout-size-xxlarge);
            }
            .inicio-container22 {
              height: var(--dl-layout-size-xxlarge);
            }
            .inicio-sobre-mi {
              flex-direction: column;
            }
            .inicio-header4 {
              flex-direction: column-reverse;
            }
            .inicio-container24 {
              padding-right: 0%;
            }
            .inicio-title1 {
              text-align: center;
            }
            .inicio-caption3 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              font-family: Open Sans;
              line-height: 24px;
            }
            .inicio-image19 {
              height: 320px;
            }
            .inicio-image20 {
              top: 160px;
              left: 0px;
              right: 0px;
              margin: auto;
            }
            .inicio-divide1 {
              width: 20px;
            }
            .inicio-text31 {
              font-size: 12px;
              line-height: 13px;
            }
            .inicio-blog {
              padding-top: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-twounits);
            }
            .inicio-divide2 {
              width: 20px;
            }
            .inicio-text47 {
              font-size: 16px;
              line-height: 24px;
            }
            .inicio-subscribe {
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .inicio-header8 {
              text-align: center;
            }
            .inicio-text49 {
              font-size: 16px;
              text-align: justify;
              line-height: 1.5;
            }
            .inicio-footer {
              gap: var(--dl-layout-space-oneandhalfunits);
              height: auto;
              align-items: center;
              flex-direction: column;
            }
            .inicio-content7 {
              width: 100%;
              align-self: center;
              align-items: center;
            }
            .inicio-details6 {
              max-width: 100%;
            }
            .inicio-image28 {
              align-self: center;
            }
            .inicio-description {
              font-size: 18px;
              text-align: center;
              line-height: 21px;
            }
            .inicio-content8 {
              width: 100%;
              align-self: center;
              align-items: center;
            }
            .inicio-details7 {
              flex-wrap: wrap;
              max-width: 100%;
              align-self: center;
              text-align: center;
              align-items: center;
              flex-direction: column;
            }
            .inicio-text51 {
              width: 100%;
              text-align: center;
            }
            .inicio-link30 {
              width: 100%;
              text-align: center;
            }
            .inicio-link31 {
              width: 100%;
              text-align: center;
            }
            .inicio-link32 {
              width: 100%;
              text-align: center;
            }
            .inicio-link33 {
              width: 100%;
              text-align: center;
            }
            .inicio-link34 {
              width: 100%;
              text-align: center;
            }
            .inicio-link35 {
              width: 100%;
              text-align: center;
            }
            .inicio-socials {
              align-self: center;
              justify-content: center;
            }
            .inicio-copyright {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Inicio

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
