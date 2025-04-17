import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Pricing14 from '../components/pricing14'
import Pricing13 from '../components/pricing13'

const Servicios = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="servicios-container1">
        <Head>
          <title>Servicios - APE Experience</title>
          <meta property="og:title" content="Servicios - APE Experience" />
        </Head>
        <div className="servicios-header">
          <header data-thq="thq-navbar" className="servicios-navbar">
            <Link href="/">
              <a className="servicios-link10">
                <img
                  alt="APE Experience"
                  src="/Material web/logo-optimizado-600h.png"
                  className="servicios-image1"
                />
              </a>
            </Link>
            <div
              data-thq="thq-navbar-nav"
              data-role="Nav"
              className="servicios-desktop-menu"
            >
              <nav
                data-thq="thq-navbar-nav-links"
                data-role="Nav"
                className="servicios-nav1"
              >
                <Link href="/">
                  <a className="servicios-link12 navLink">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_ijWS8A'),
                      }}
                    ></span>
                  </a>
                </Link>
                <Link href="/sobre-mi">
                  <a className="servicios-link14 navLink">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_cpFQDR'),
                      }}
                    ></span>
                  </a>
                </Link>
                <Link href="/servicios">
                  <a className="servicios-link16 navLink">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_oQEGq3'),
                      }}
                    ></span>
                  </a>
                </Link>
                <Link href="/proyectos">
                  <a className="servicios-link18 navLink">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_y3AGVy'),
                      }}
                    ></span>
                  </a>
                </Link>
                <Link href="/blog">
                  <a className="servicios-link20 navLink">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_OckkQ7'),
                      }}
                    ></span>
                  </a>
                </Link>
                <Link href="/contacto">
                  <a className="servicios-link22 navLink">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_QmsjOL'),
                      }}
                    ></span>
                  </a>
                </Link>
              </nav>
              <Link href="/solicitar-servicio">
                <a className="servicios-link23 button">
                  <span className="servicios-text10">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_GiIzUm'),
                      }}
                    ></span>
                  </span>
                  <svg viewBox="0 0 1024 1024" className="servicios-icon10">
                    <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                  </svg>
                </a>
              </Link>
            </div>
            <div data-thq="thq-burger-menu" className="servicios-burger-menu">
              <svg viewBox="0 0 1024 1024" className="servicios-icon12">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="servicios-mobile-menu">
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="servicios-nav2"
              >
                <div className="servicios-container2">
                  <h2 className="servicios-text11">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_NCjv_o'),
                      }}
                    ></span>
                  </h2>
                  <div
                    data-thq="thq-close-menu"
                    className="servicios-menu-close"
                  >
                    <svg viewBox="0 0 1024 1024" className="servicios-icon14">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav
                  data-thq="thq-mobile-menu-nav-links"
                  data-role="Nav"
                  className="servicios-nav3"
                >
                  <span className="navLink servicios-text12">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_gCmRSd'),
                      }}
                    ></span>
                  </span>
                  <span className="navLink servicios-text13">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_gjCs8p'),
                      }}
                    ></span>
                  </span>
                  <span className="navLink servicios-text14">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_942icB'),
                      }}
                    ></span>
                  </span>
                  <span className="navLink servicios-text15">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_4gUawi'),
                      }}
                    ></span>
                  </span>
                  <span className="navLink servicios-text16">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_tj7er9'),
                      }}
                    ></span>
                  </span>
                </nav>
                <div className="servicios-button-container">
                  <button className="servicios-login button">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Login_BQn5I6'),
                      }}
                    ></span>
                  </button>
                  <button className="button servicios-register2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Register_i6TUYJ'),
                      }}
                    ></span>
                  </button>
                </div>
                <div className="servicios-icon-group">
                  <div className="servicios-icons">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="servicios-icon16"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="servicios-icon18"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 602.2582857142856 1024"
                      className="servicios-icon20"
                    >
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <img
                alt="image"
                src="/quote-background.svg"
                className="servicios-background"
              />
            </div>
          </header>
        </div>
        <div className="servicios-hero parallax-container">
          <span className="servicios-text17 parallax-image">
            <span
              dangerouslySetInnerHTML={{
                __html: translate.raw('text_SCHT6e'),
              }}
            ></span>
          </span>
          <h1 className="servicios-text18 parallax-image">
            <span
              dangerouslySetInnerHTML={{
                __html: translate.raw('text_ro5ZuU'),
              }}
            ></span>
          </h1>
          <div className="servicios-container3 parallax-image">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="servicios-icon22"
            >
              <path d="M658.286 475.429c0-141.143-114.857-256-256-256s-256 114.857-256 256 114.857 256 256 256 256-114.857 256-256zM950.857 950.857c0 40-33.143 73.143-73.143 73.143-19.429 0-38.286-8-51.429-21.714l-196-195.429c-66.857 46.286-146.857 70.857-228 70.857-222.286 0-402.286-180-402.286-402.286s180-402.286 402.286-402.286 402.286 180 402.286 402.286c0 81.143-24.571 161.143-70.857 228l196 196c13.143 13.143 21.143 32 21.143 51.429z"></path>
            </svg>
            <input
              type="text"
              placeholder="Solicita rápidamente"
              className="servicios-textinput input"
            />
            <button type="button" className="servicios-button1 button">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_X2W91L'),
                }}
              ></span>
            </button>
          </div>
        </div>
        <Pricing14
          plan1="Plan Informativo"
          plan2="Plan Tienda Virtual"
          plan3="Plan Plataforma Avanzada"
          plan11="Plan Informativo"
          plan12={
            <Fragment>
              <span className="servicios-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_8JkyYw'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan21={
            <Fragment>
              <span className="servicios-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_lEQg9N'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan31={
            <Fragment>
              <span className="servicios-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_2RTbyn'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan111={
            <Fragment>
              <span className="servicios-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ne7iZ5'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan211={
            <Fragment>
              <span className="servicios-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_GBzFQk'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan311={
            <Fragment>
              <span className="servicios-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ZC18jK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content1="Selecciona el plan perfecto para ti"
          content2="Consigue los resultados ideales para tu negocio con nuestros planes de páginas web"
          heading1="Planes para Páginas Web"
          content11={
            <Fragment>
              <span className="servicios-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_spgRf4'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content21={
            <Fragment>
              <span className="servicios-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7VdOUt'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading11={
            <Fragment>
              <span className="servicios-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_zp3Ug2'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Price="250$"
          plan2Price="300$"
          plan3Price="400$"
          plan1Action="Solicitar ahora"
          plan1Price1="250$"
          plan1Price2={
            <Fragment>
              <span className="servicios-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_VOZRGU'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Yearly="Incluye pago anual de mantenimiento de servidor"
          plan2Action="Solicitar ahora"
          plan2Price1={
            <Fragment>
              <span className="servicios-text29">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7APTaH'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Yearly="Incluye pago anual de mantenimiento de servidor"
          plan3Action="Solicitar ahora"
          plan3Price1="400$"
          plan3Price2={
            <Fragment>
              <span className="servicios-text30">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_9XB59T'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Yearly="Incluye pago anual de mantenimiento de servidor"
          plan1Action1="Solicitar ahora"
          plan1Action2={
            <Fragment>
              <span className="servicios-text31">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_2CLZL3'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Price11={
            <Fragment>
              <span className="servicios-text32">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_W7nJfS'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Yearly1="Incluye pago anual de mantenimiento de servidor"
          plan1Yearly2={
            <Fragment>
              <span className="servicios-text33">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_uPgu87'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Action1={
            <Fragment>
              <span className="servicios-text34">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_v14k_v'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Price11={
            <Fragment>
              <span className="servicios-text35">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_fuz_lH'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Yearly1={
            <Fragment>
              <span className="servicios-text36">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_omDhLS'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Action1="Solicitar ahora"
          plan3Action2={
            <Fragment>
              <span className="servicios-text37">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ACot_0'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Price11={
            <Fragment>
              <span className="servicios-text38">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Nr_wBB'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Yearly1={
            <Fragment>
              <span className="servicios-text39">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_BoA2xA'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Action11={
            <Fragment>
              <span className="servicios-text40">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_6rrfTG'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Yearly11={
            <Fragment>
              <span className="servicios-text41">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_N1qEGK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Action11={
            <Fragment>
              <span className="servicios-text42">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_z_iyRN'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Yearly11={
            <Fragment>
              <span className="servicios-text43">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_d5EjWQ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Action11={
            <Fragment>
              <span className="servicios-text44">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5rCMmb'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Yearly11={
            <Fragment>
              <span className="servicios-text45">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_yE9Dkf'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature11={
            <Fragment>
              <span className="servicios-text46">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_CSi0zv'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature21="250$"
          plan1Feature22={
            <Fragment>
              <span className="servicios-text47">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_PlG4_k'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature31="250$"
          plan1Feature32={
            <Fragment>
              <span className="servicios-text48">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Idv6wb'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature11={
            <Fragment>
              <span className="servicios-text49">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_MMspAn'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature22={
            <Fragment>
              <span className="servicios-text50">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_3P49un'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature31={
            <Fragment>
              <span className="servicios-text51">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_TDqy49'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature41={
            <Fragment>
              <span className="servicios-text52">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_n0AY-R'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Feature11={
            <Fragment>
              <span className="servicios-text53">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ENTUDr'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Feature21={
            <Fragment>
              <span className="servicios-text54">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__zqHVq'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Feature32={
            <Fragment>
              <span className="servicios-text55">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_mmxaBY'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Feature41={
            <Fragment>
              <span className="servicios-text56">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_mK2358'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Feature52={
            <Fragment>
              <span className="servicios-text57">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_uDCixY'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature111={
            <Fragment>
              <span className="servicios-text58">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_iY0jIl'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature211={
            <Fragment>
              <span className="servicios-text59">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_YrjpSs'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature311={
            <Fragment>
              <span className="servicios-text60">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_E2bFGO'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature111={
            <Fragment>
              <span className="servicios-text61">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_JMAPPi'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature211={
            <Fragment>
              <span className="servicios-text62">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__q9-vQ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature311={
            <Fragment>
              <span className="servicios-text63">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_3UpmuU'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature411={
            <Fragment>
              <span className="servicios-text64">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_xAlX2j'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Feature111={
            <Fragment>
              <span className="servicios-text65">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_pUgYe8'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Feature211={
            <Fragment>
              <span className="servicios-text66">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_bTf5Cr'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Feature311={
            <Fragment>
              <span className="servicios-text67">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_tYsz5n'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Feature411={
            <Fragment>
              <span className="servicios-text68">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_oTqOld'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Feature511={
            <Fragment>
              <span className="servicios-text69">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_lfpnxi'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Pricing14>
        <Pricing13
          plan1="Plan para Emprendimiento"
          plan2="Plan para Empresas"
          plan11="Plan para Emprendimiento"
          plan12={
            <Fragment>
              <span className="servicios-text70">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_fCDgHd'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan21={
            <Fragment>
              <span className="servicios-text71">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_pO2fCL'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan111={
            <Fragment>
              <span className="servicios-text72">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_J0y-5_'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan211={
            <Fragment>
              <span className="servicios-text73">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_cpGyJ4'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content1="Selecciona el plan perfecto para ti"
          content2="Mejora el alcance de tu marca en redes sociales según tu selección"
          heading1="Planes para Redes Sociales"
          content11={
            <Fragment>
              <span className="servicios-text74">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_NKaxTE'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content21={
            <Fragment>
              <span className="servicios-text75">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_M_MS1I'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading11={
            <Fragment>
              <span className="servicios-text76">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_HEKeOH'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Price="15$/ por semana"
          plan2Price="100$/ por mes"
          plan1Action="Solicitar ahora"
          plan1Price1="15$/ por semana"
          plan1Price2={
            <Fragment>
              <span className="servicios-text77">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_S0FMqY'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Yearly="o 60$ al mes"
          plan2Action="Solicitar ahora"
          plan2Price1="100$/ por mes"
          plan2Price2={
            <Fragment>
              <span className="servicios-text78">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_pmm08R'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Yearly="25$/ por semana"
          plan1Action1={
            <Fragment>
              <span className="servicios-text79">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__J0N2W'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Price11={
            <Fragment>
              <span className="servicios-text80">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_XnP_FQ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Yearly1={
            <Fragment>
              <span className="servicios-text81">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_abgQvj'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Action1={
            <Fragment>
              <span className="servicios-text82">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7AvTrO'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Price11={
            <Fragment>
              <span className="servicios-text83">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_FKzhre'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Yearly1={
            <Fragment>
              <span className="servicios-text84">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_a0iLsp'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Action11={
            <Fragment>
              <span className="servicios-text85">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_a3tGAM'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Yearly11={
            <Fragment>
              <span className="servicios-text86">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_heUN1l'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Action11={
            <Fragment>
              <span className="servicios-text87">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_a2C0uf'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Yearly11={
            <Fragment>
              <span className="servicios-text88">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_VHg3_2'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="pricing13root-class-name"
          plan1Feature11={
            <Fragment>
              <span className="servicios-text89">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_aRopCm'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature21={
            <Fragment>
              <span className="servicios-text90">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_kPVPeJ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature32={
            <Fragment>
              <span className="servicios-text91">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7PkADh'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature11={
            <Fragment>
              <span className="servicios-text92">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__AFtOU'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature22={
            <Fragment>
              <span className="servicios-text93">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_3kpwwQ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature32={
            <Fragment>
              <span className="servicios-text94">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_xd3Cjp'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature42={
            <Fragment>
              <span className="servicios-text95">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__7bMc1'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature111={
            <Fragment>
              <span className="servicios-text96">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_SJMxZk'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature211={
            <Fragment>
              <span className="servicios-text97">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_XlzXFH'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature311={
            <Fragment>
              <span className="servicios-text98">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_WBKjim'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature111={
            <Fragment>
              <span className="servicios-text99">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_RvY__R'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature211={
            <Fragment>
              <span className="servicios-text100">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_U5i-9z'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature311={
            <Fragment>
              <span className="servicios-text101">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7cRYyH'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature411={
            <Fragment>
              <span className="servicios-text102">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_-Gi7jQ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Pricing13>
        <div className="servicios-container4">
          <div className="servicios-container5">
            <h1 className="servicios-text103">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_nIbOiq'),
                }}
              ></span>
            </h1>
          </div>
          <button type="button" className="servicios-button2 button">
            <span
              dangerouslySetInnerHTML={{
                __html: translate.raw('text_HUlCm2'),
              }}
            ></span>
          </button>
        </div>
        <footer className="servicios-footer">
          <div className="servicios-content1">
            <div className="servicios-details1">
              <Link href="/">
                <a className="servicios-link24">
                  <img
                    alt="APE Experience Pié de Página Logo Negro"
                    src="/Material web/logo-optimizado-600h.png"
                    className="servicios-image2"
                  />
                </a>
              </Link>
              <p className="servicios-description">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('Description_bG5z7l'),
                  }}
                ></span>
              </p>
            </div>
          </div>
          <div className="servicios-content2">
            <div className="servicios-details2">
              <span className="servicios-text104">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_h2B9QT'),
                  }}
                ></span>
              </span>
              <Link href="/">
                <a className="servicios-link25 a.link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_sTvSOV'),
                    }}
                  ></span>
                </a>
              </Link>
              <Link href="/sobre-mi">
                <a className="servicios-link26 a.link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_3QJZBu'),
                    }}
                  ></span>
                </a>
              </Link>
              <Link href="/servicios">
                <a className="servicios-link27 a.link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_qpajdq'),
                    }}
                  ></span>
                </a>
              </Link>
              <Link href="/proyectos">
                <a className="servicios-link28 a.link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_12Uqr-'),
                    }}
                  ></span>
                </a>
              </Link>
              <Link href="/blog">
                <a className="servicios-link29 a.link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ZKjMj_'),
                    }}
                  ></span>
                </a>
              </Link>
              <Link href="/contacto">
                <a className="servicios-link30 a.link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ySoBvV'),
                    }}
                  ></span>
                </a>
              </Link>
            </div>
            <div className="servicios-socials">
              <a
                href="https://instagram.com/ape_experience/"
                target="_blank"
                rel="noreferrer noopener"
                className="servicios-link31"
              >
                <img
                  alt="Instagram APE Experience"
                  src="/instagram.svg"
                  className="servicios-image3 social"
                />
              </a>
              <a
                href="https://facebook.com/apeexperienceve/"
                target="_blank"
                rel="noreferrer noopener"
                className="servicios-link32"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="servicios-icon24 social"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://threads.com/ape_experience/"
                target="_blank"
                rel="noreferrer noopener"
                className="servicios-link33"
              >
                <img
                  alt="Threads APE Experience"
                  src="/Material web/threads-600h.png"
                  className="servicios-image4 social"
                />
              </a>
            </div>
            <span className="servicios-copyright">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('Copyright_Q-DOXH'),
                }}
              ></span>
            </span>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .servicios-container1 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .servicios-header {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: auto;
            display: flex;
            position: absolute;
            align-items: flex-start;
            justify-content: center;
            background-color: transparent;
          }
          .servicios-navbar {
            width: 100%;
            display: flex;
            z-index: 1000;
            position: relative;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            justify-content: space-between;
          }
          .servicios-link10 {
            display: contents;
          }
          .servicios-image1 {
            width: 104px;
            height: 114px;
            object-fit: cover;
            text-decoration: none;
          }
          .servicios-desktop-menu {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
          }
          .servicios-nav1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .servicios-link12 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
            text-decoration: none;
          }
          .servicios-link14 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
            text-decoration: none;
          }
          .servicios-link16 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
            text-decoration: none;
          }
          .servicios-link18 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
            text-decoration: none;
          }
          .servicios-link20 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
            text-decoration: none;
          }
          .servicios-link22 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
            text-decoration: none;
          }
          .servicios-link23 {
            text-decoration: none;
          }
          .servicios-text10 {
            font-size: 16px;
            font-family: Open Sans;
            text-transform: uppercase;
          }
          .servicios-icon10 {
            width: 16px;
            height: 16px;
          }
          .servicios-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .servicios-icon12 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .servicios-mobile-menu {
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
          .servicios-nav2 {
            display: flex;
            z-index: 20;
            align-items: flex-start;
            flex-direction: column;
          }
          .servicios-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .servicios-text11 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
            line-height: 45px;
          }
          .servicios-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .servicios-icon14 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .servicios-nav3 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .servicios-button-container {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-layout-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .servicios-login {
            margin-right: var(--dl-layout-space-twounits);
          }
          .servicios-icon-group {
            display: flex;
            z-index: 20;
          }
          .servicios-icons {
            display: flex;
          }
          .servicios-icon16 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
            margin-right: var(--dl-layout-space-twounits);
          }
          .servicios-icon18 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
            margin-right: var(--dl-layout-space-twounits);
          }
          .servicios-icon20 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .servicios-background {
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 80%;
            margin: auto;
            position: absolute;
            object-fit: cover;
          }
          .servicios-hero {
            background-size: cover;
            background-image: url('/Material web/fondo-ape-serviciosrecurso%201-100-1500h.jpg');
          }
          .servicios-text17 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 2rem;
            letter-spacing: 2px;
          }
          .servicios-text18 {
            font-size: 3rem;
            max-width: 450px;
            margin-top: var(--dl-layout-space-sixunits);
            text-align: center;
            margin-bottom: var(--dl-layout-space-sixunits);
          }
          .servicios-container3 {
            flex: 0 0 auto;
            width: 22%;
            display: flex;
            padding: 0.5%;
            margin-top: var(--dl-layout-space-sixunits);
            align-items: center;
            border-radius: 100px;
            justify-content: space-between;
            background-color: #d9d9d9;
          }
          .servicios-icon22 {
            fill: #542ccc;
            width: 24px;
            height: 24px;
            margin-left: var(--dl-layout-space-unit);
          }
          .servicios-textinput {
            border-color: #542ccc;
            border-width: 0px;
            background-color: transparent;
            border-bottom-width: 1px;
          }
          .servicios-button1 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            border-color: var(--dl-color-theme-secondary1);
            background-color: #542ccc;
          }
          .servicios-text19 {
            display: inline-block;
          }
          .servicios-text20 {
            display: inline-block;
          }
          .servicios-text21 {
            display: inline-block;
          }
          .servicios-text22 {
            display: inline-block;
          }
          .servicios-text23 {
            display: inline-block;
          }
          .servicios-text24 {
            display: inline-block;
          }
          .servicios-text25 {
            display: inline-block;
          }
          .servicios-text26 {
            display: inline-block;
          }
          .servicios-text27 {
            display: inline-block;
          }
          .servicios-text28 {
            display: inline-block;
          }
          .servicios-text29 {
            display: inline-block;
          }
          .servicios-text30 {
            display: inline-block;
          }
          .servicios-text31 {
            display: inline-block;
          }
          .servicios-text32 {
            display: inline-block;
          }
          .servicios-text33 {
            display: inline-block;
          }
          .servicios-text34 {
            display: inline-block;
          }
          .servicios-text35 {
            display: inline-block;
          }
          .servicios-text36 {
            display: inline-block;
          }
          .servicios-text37 {
            display: inline-block;
          }
          .servicios-text38 {
            display: inline-block;
          }
          .servicios-text39 {
            display: inline-block;
          }
          .servicios-text40 {
            display: inline-block;
          }
          .servicios-text41 {
            display: inline-block;
          }
          .servicios-text42 {
            display: inline-block;
          }
          .servicios-text43 {
            display: inline-block;
          }
          .servicios-text44 {
            display: inline-block;
          }
          .servicios-text45 {
            display: inline-block;
          }
          .servicios-text46 {
            display: inline-block;
          }
          .servicios-text47 {
            display: inline-block;
          }
          .servicios-text48 {
            display: inline-block;
          }
          .servicios-text49 {
            display: inline-block;
          }
          .servicios-text50 {
            display: inline-block;
          }
          .servicios-text51 {
            display: inline-block;
          }
          .servicios-text52 {
            display: inline-block;
          }
          .servicios-text53 {
            display: inline-block;
          }
          .servicios-text54 {
            display: inline-block;
          }
          .servicios-text55 {
            display: inline-block;
          }
          .servicios-text56 {
            display: inline-block;
          }
          .servicios-text57 {
            display: inline-block;
          }
          .servicios-text58 {
            display: inline-block;
          }
          .servicios-text59 {
            display: inline-block;
          }
          .servicios-text60 {
            display: inline-block;
          }
          .servicios-text61 {
            display: inline-block;
          }
          .servicios-text62 {
            display: inline-block;
          }
          .servicios-text63 {
            display: inline-block;
          }
          .servicios-text64 {
            display: inline-block;
          }
          .servicios-text65 {
            display: inline-block;
          }
          .servicios-text66 {
            display: inline-block;
          }
          .servicios-text67 {
            display: inline-block;
          }
          .servicios-text68 {
            display: inline-block;
          }
          .servicios-text69 {
            display: inline-block;
          }
          .servicios-text70 {
            display: inline-block;
          }
          .servicios-text71 {
            display: inline-block;
          }
          .servicios-text72 {
            display: inline-block;
          }
          .servicios-text73 {
            display: inline-block;
          }
          .servicios-text74 {
            display: inline-block;
          }
          .servicios-text75 {
            display: inline-block;
          }
          .servicios-text76 {
            display: inline-block;
          }
          .servicios-text77 {
            display: inline-block;
          }
          .servicios-text78 {
            display: inline-block;
          }
          .servicios-text79 {
            display: inline-block;
          }
          .servicios-text80 {
            display: inline-block;
          }
          .servicios-text81 {
            display: inline-block;
          }
          .servicios-text82 {
            display: inline-block;
          }
          .servicios-text83 {
            display: inline-block;
          }
          .servicios-text84 {
            display: inline-block;
          }
          .servicios-text85 {
            display: inline-block;
          }
          .servicios-text86 {
            display: inline-block;
          }
          .servicios-text87 {
            display: inline-block;
          }
          .servicios-text88 {
            display: inline-block;
          }
          .servicios-text89 {
            display: inline-block;
          }
          .servicios-text90 {
            display: inline-block;
          }
          .servicios-text91 {
            display: inline-block;
          }
          .servicios-text92 {
            display: inline-block;
          }
          .servicios-text93 {
            display: inline-block;
          }
          .servicios-text94 {
            display: inline-block;
          }
          .servicios-text95 {
            display: inline-block;
          }
          .servicios-text96 {
            display: inline-block;
          }
          .servicios-text97 {
            display: inline-block;
          }
          .servicios-text98 {
            display: inline-block;
          }
          .servicios-text99 {
            display: inline-block;
          }
          .servicios-text100 {
            display: inline-block;
          }
          .servicios-text101 {
            display: inline-block;
          }
          .servicios-text102 {
            display: inline-block;
          }
          .servicios-container4 {
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
          .servicios-container5 {
            flex: 0 0 auto;
            width: 80%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .servicios-text103 {
            font-style: normal;
            font-family: Open Sans;
            font-weight: 600;
          }
          .servicios-button2 {
            font-size: 2rem;
          }
          .servicios-footer {
            width: 100%;
            height: 588px;
            display: flex;
            align-items: center;
            padding-top: 120px;
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-fiveunits);
            background-color: #000000;
          }
          .servicios-content1 {
            gap: var(--dl-layout-space-threeunits);
            width: 50%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
          }
          .servicios-details1 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
          }
          .servicios-link24 {
            display: contents;
          }
          .servicios-image2 {
            width: 200px;
            align-self: flex-start;
            object-fit: cover;
            text-decoration: none;
          }
          .servicios-description {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 18px;
            line-height: 27px;
          }
          .servicios-content2 {
            gap: var(--dl-layout-space-threeunits);
            width: 50%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
          }
          .servicios-details2 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
          }
          .servicios-text104 {
            color: var(--dl-color-gray-white);
            font-size: 22px;
            align-self: flex-start;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            text-transform: uppercase;
          }
          .servicios-link25 {
            color: var(--dl-color-gray-white);
            line-height: 1.15;
            text-decoration: none;
          }
          .servicios-link26 {
            color: var(--dl-color-gray-white);
            line-height: 1.15;
            text-decoration: none;
          }
          .servicios-link27 {
            color: var(--dl-color-gray-white);
            line-height: 1.15;
            text-decoration: none;
          }
          .servicios-link28 {
            color: var(--dl-color-gray-white);
            line-height: 1.15;
            text-decoration: none;
          }
          .servicios-link29 {
            color: var(--dl-color-gray-white);
            line-height: 1.15;
            text-decoration: none;
          }
          .servicios-link30 {
            color: var(--dl-color-gray-white);
            line-height: 1.15;
            text-decoration: none;
          }
          .servicios-socials {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: row;
          }
          .servicios-link31 {
            display: contents;
          }
          .servicios-image3 {
            filter: invert(7);
            text-decoration: none;
          }
          .servicios-link32 {
            display: contents;
          }
          .servicios-icon24 {
            width: 24px;
            filter: invert(7);
            height: 24px;
            text-decoration: none;
          }
          .servicios-link33 {
            display: contents;
          }
          .servicios-image4 {
            filter: invert(7);
            text-decoration: none;
          }
          .servicios-copyright {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 18px;
            line-height: 21px;
          }
          @media (max-width: 1440px) {
            .servicios-header {
              top: 0px;
              left: 0px;
              z-index: 100;
              position: absolute;
              background-color: transparent;
            }
            .servicios-hero {
              justify-content: center;
            }
            .servicios-text17 {
              color: var(--dl-color-gray-white);
              font-size: 0.75rem;
              letter-spacing: 2px;
              text-transform: uppercase;
            }
            .servicios-text18 {
              font-size: 3rem;
              margin-top: 120px;
              margin-bottom: 120px;
            }
            .servicios-container3 {
              width: 30%;
              padding: 0.5%;
              align-self: center;
              max-height: 100%;
              border-radius: 80px;
              justify-content: space-between;
              background-color: #d9d9d9;
            }
            .servicios-icon22 {
              fill: #542ccc;
              margin-top: 10px;
              margin-left: 20px;
              margin-right: 0px;
              margin-bottom: 10px;
            }
            .servicios-textinput {
              border-color: #542ccc;
              padding-left: 0px;
              background-color: transparent;
              border-top-width: 0px;
              border-left-width: 0px;
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .servicios-button1 {
              color: white;
              background-color: rgb(84, 44, 204);
            }
            .servicios-container4 {
              gap: var(--dl-layout-space-unit);
              padding: 2%;
              flex-wrap: wrap;
            }
            .servicios-container5 {
              width: auto;
            }
            .servicios-text103 {
              width: 720px;
              flex-wrap: wrap;
              font-style: normal;
              font-family: Open Sans;
              font-weight: 600;
              overflow-wrap: break-word;
            }
            .servicios-button2 {
              font-size: 2em;
              align-self: flex-start;
            }
          }
          @media (max-width: 1200px) {
            .servicios-header {
              background-color: transparent;
            }
            .servicios-navbar {
              padding: var(--dl-layout-space-twounits);
            }
            .servicios-text103 {
              font-size: 1.8rem;
            }
          }
          @media (max-width: 991px) {
            .servicios-navbar {
              padding: var(--dl-layout-space-threeunits);
            }
            .servicios-image1 {
              width: 88px;
              height: 87px;
            }
            .servicios-link12 {
              font-size: 16px;
            }
            .servicios-link14 {
              font-size: 16px;
            }
            .servicios-link16 {
              font-size: 16px;
            }
            .servicios-link18 {
              font-size: 16px;
            }
            .servicios-link20 {
              font-size: 16px;
            }
            .servicios-link22 {
              font-size: 16px;
            }
            .servicios-link23 {
              padding-top: 1%;
              padding-left: 2%;
              padding-right: 2%;
              padding-bottom: 1%;
            }
            .servicios-text10 {
              font-size: 14px;
              font-family: Open Sans;
              text-transform: uppercase;
            }
            .servicios-text103 {
              font-size: 1.6rem;
            }
            .servicios-button2 {
              font-size: 1.5rem;
            }
          }
          @media (max-width: 767px) {
            .servicios-navbar {
              padding: var(--dl-layout-space-twounits);
            }
            .servicios-image1 {
              width: 140px;
              height: 152px;
            }
            .servicios-desktop-menu {
              display: none;
            }
            .servicios-burger-menu {
              display: flex;
            }
            .servicios-icon12 {
              fill: white;
              width: var(--dl-layout-size-small);
              height: var(--dl-layout-size-small);
            }
            .servicios-nav2 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .servicios-container2 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .servicios-text11 {
              color: #000000;
            }
            .servicios-nav3 {
              gap: var(--dl-layout-space-unit);
            }
            .servicios-text12 {
              color: #000000;
            }
            .servicios-text13 {
              color: rgb(0, 0, 0);
            }
            .servicios-text14 {
              color: rgb(0, 0, 0);
            }
            .servicios-text15 {
              color: rgb(0, 0, 0);
            }
            .servicios-text16 {
              color: rgb(0, 0, 0);
            }
            .servicios-button-container {
              gap: var(--dl-layout-space-unit);
              width: 50%;
              margin-top: 0px;
              align-items: flex-start;
              flex-direction: column;
            }
            .servicios-login {
              width: 100%;
              border-width: 1px;
              margin-right: 0px;
            }
            .servicios-register2 {
              width: 100%;
              border-width: 1px;
            }
            .servicios-icon-group {
              width: 100%;
              justify-content: flex-start;
            }
            .servicios-container4 {
              padding-top: 2%;
            }
            .servicios-text103 {
              width: 480px;
              font-size: 1.6rem;
              text-align: left;
            }
            .servicios-footer {
              padding-top: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-twounits);
            }
            .servicios-content1 {
              gap: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .servicios-description {
              font-size: 14px;
              line-height: 21px;
            }
            .servicios-content2 {
              gap: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .servicios-socials {
              gap: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .servicios-image1 {
              width: var(--dl-layout-size-medium);
              height: auto;
            }
            .servicios-icon12 {
              width: var(--dl-layout-size-small);
              height: var(--dl-layout-size-small);
            }
            .servicios-mobile-menu {
              padding: 16px;
            }
            .servicios-button-container {
              width: 100%;
            }
            .servicios-icon-group {
              justify-content: center;
            }
            .servicios-container3 {
              width: 100%;
              margin-top: var(--dl-layout-space-halfunit);
            }
            .servicios-container4 {
              align-self: center;
              text-align: center;
              align-content: center;
              justify-content: center;
            }
            .servicios-container5 {
              width: 100%;
              align-items: center;
            }
            .servicios-text103 {
              width: var(--dl-layout-size-xxlarge);
              text-align: center;
            }
            .servicios-button2 {
              flex-direction: column;
            }
            .servicios-footer {
              gap: var(--dl-layout-space-oneandhalfunits);
              height: auto;
              align-items: center;
              flex-direction: column;
            }
            .servicios-content1 {
              width: 100%;
              max-width: 100%;
              align-self: center;
              align-items: center;
            }
            .servicios-details1 {
              max-width: 100%;
            }
            .servicios-image2 {
              align-self: center;
            }
            .servicios-description {
              font-size: 18px;
              text-align: center;
            }
            .servicios-content2 {
              width: 100%;
              align-self: center;
              align-items: center;
            }
            .servicios-text104 {
              width: 100%;
              text-align: center;
            }
            .servicios-link25 {
              width: 100%;
              text-align: center;
            }
            .servicios-link26 {
              width: 100%;
              text-align: center;
            }
            .servicios-link27 {
              width: 100%;
              text-align: center;
            }
            .servicios-link28 {
              width: 100%;
              text-align: center;
            }
            .servicios-link29 {
              width: 100%;
              text-align: center;
            }
            .servicios-link30 {
              width: 100%;
              text-align: center;
            }
            .servicios-socials {
              justify-content: center;
            }
            .servicios-copyright {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Servicios

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
