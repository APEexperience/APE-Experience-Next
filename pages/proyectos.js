import React, { useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Proyectos = (props) => {
  const translate = useTranslations()
  useEffect(() => import('@lottiefiles/lottie-player'), [])
  return (
    <>
      <div className="proyectos-container10">
        <Head>
          <title>Proyectos - APE Experience</title>
          <meta name="description" content={translate.raw('static_NL5mjE')} />
          <meta property="og:title" content="Proyectos - APE Experience" />
          <meta
            property="og:description"
            content={translate.raw('static_NL5mjE')}
          />
        </Head>
        <div className="proyectos-header">
          <header data-thq="thq-navbar" className="proyectos-navbar">
            <Link href="/">
              <a className="proyectos-link10">
                <img
                  alt="APE Experience"
                  src="/Material web/logo-optimizado-600h.png"
                  className="proyectos-image10"
                />
              </a>
            </Link>
            <div
              data-thq="thq-navbar-nav"
              data-role="Nav"
              className="proyectos-desktop-menu"
            >
              <nav
                data-thq="thq-navbar-nav-links"
                data-role="Nav"
                className="proyectos-nav1"
              >
                <Link href="/">
                  <a className="proyectos-link12 navLink">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_enkEq3'),
                      }}
                    ></span>
                  </a>
                </Link>
                <Link href="/sobre-mi">
                  <a className="proyectos-link14 navLink">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_L1Ue1l'),
                      }}
                    ></span>
                  </a>
                </Link>
                <Link href="/servicios">
                  <a className="proyectos-link16 navLink">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_MV3HW6'),
                      }}
                    ></span>
                  </a>
                </Link>
                <Link href="/proyectos">
                  <a className="proyectos-link18 navLink">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_V04vcZ'),
                      }}
                    ></span>
                  </a>
                </Link>
                <Link href="/blog">
                  <a className="proyectos-link20 navLink">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_IxM6IW'),
                      }}
                    ></span>
                  </a>
                </Link>
                <Link href="/contacto">
                  <a className="proyectos-link22 navLink">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_aquCnK'),
                      }}
                    ></span>
                  </a>
                </Link>
              </nav>
              <Link href="/solicitar-servicio">
                <a className="proyectos-link23 button">
                  <span className="proyectos-text10">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_ABki_u'),
                      }}
                    ></span>
                  </span>
                  <svg viewBox="0 0 1024 1024" className="proyectos-icon10">
                    <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                  </svg>
                </a>
              </Link>
            </div>
            <div data-thq="thq-burger-menu" className="proyectos-burger-menu">
              <svg viewBox="0 0 1024 1024" className="proyectos-icon12">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="proyectos-mobile-menu">
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="proyectos-nav2"
              >
                <div className="proyectos-container11">
                  <h2 className="proyectos-text11">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_MRi67s'),
                      }}
                    ></span>
                  </h2>
                  <div
                    data-thq="thq-close-menu"
                    className="proyectos-menu-close"
                  >
                    <svg viewBox="0 0 1024 1024" className="proyectos-icon14">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav
                  data-thq="thq-mobile-menu-nav-links"
                  data-role="Nav"
                  className="proyectos-nav3"
                >
                  <span className="navLink proyectos-text12">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_p2Nj4_'),
                      }}
                    ></span>
                  </span>
                  <span className="navLink proyectos-text13">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_S7dgnd'),
                      }}
                    ></span>
                  </span>
                  <span className="navLink proyectos-text14">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_v2fE8L'),
                      }}
                    ></span>
                  </span>
                  <span className="navLink proyectos-text15">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_Wjxg7G'),
                      }}
                    ></span>
                  </span>
                  <span className="navLink proyectos-text16">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_kWuHXS'),
                      }}
                    ></span>
                  </span>
                </nav>
                <div className="proyectos-button-container">
                  <button className="proyectos-login button">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Login_3yrL1l'),
                      }}
                    ></span>
                  </button>
                  <button className="button proyectos-register2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Register_ueGmpV'),
                      }}
                    ></span>
                  </button>
                </div>
                <div className="proyectos-icon-group">
                  <div className="proyectos-icons">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="proyectos-icon16"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="proyectos-icon18"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 602.2582857142856 1024"
                      className="proyectos-icon20"
                    >
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <img
                alt="image"
                src="/quote-background.svg"
                className="proyectos-background"
              />
            </div>
          </header>
        </div>
        <div className="proyectos-container12"></div>
        <div className="proyectos-container13">
          <div className="proyectos-container14">
            <h1>
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_ROLnU9'),
                }}
              ></span>
            </h1>
            <span className="proyectos-text18">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_Xc-2cz'),
                }}
              ></span>
            </span>
            <h2 className="proyectos-text19">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_0tkqvz'),
                }}
              ></span>
            </h2>
            <div className="proyectos-container15">
              <div className="proyectos-container16">
                <video
                  src="https://ape-cloud.s3.us-east-2.amazonaws.com/VIDEO+COMERCIAL+REEL+2+CEPILLADO+LA+ZULIANITA.mp4"
                  muted="true"
                  poster="https://ape-cloud.s3.us-east-2.amazonaws.com/videoframe_320.png"
                  preload="auto"
                  autoPlay="true"
                  controls="true"
                  className="proyectos-video10"
                ></video>
              </div>
              <div className="proyectos-container17">
                <video
                  src="https://ape-cloud.s3.us-east-2.amazonaws.com/120225254_333002717924053_400383488379596625_n.mp4"
                  poster="https://ape-cloud.s3.us-east-2.amazonaws.com/videoframe_1814.png"
                  preload="auto"
                  controls="true"
                  className="proyectos-video11"
                ></video>
              </div>
              <div className="proyectos-container18">
                <video
                  src="https://ape-cloud.s3.us-east-2.amazonaws.com/119082634_2649603908702189_5797386646451250041_n.mp4"
                  poster="https://ape-cloud.s3.us-east-2.amazonaws.com/videoframe_1208.png"
                  preload="auto"
                  controls="true"
                  className="proyectos-video12"
                ></video>
              </div>
              <div className="proyectos-container19">
                <video
                  src="https://ape-cloud.s3.us-east-2.amazonaws.com/Hola%2C+soy+Karla+Pinto+Karla+Pinto+y+como+ya+lo+he+dicho+en+el+vi%CC%81deo%2C+gracias+a+ustedes+es+posible+el+comienzo+de+este+gran+suen%CC%83o.Muy+pronto+estare%CC%81+subiendo+contenido+a+mis+redes+sociales%2C+para+que+se+informen+respecto+a+mis+propuestas+y+.mp4"
                  poster="https://ape-cloud.s3.us-east-2.amazonaws.com/videoframe_3123.png"
                  preload="auto"
                  controls="true"
                  className="proyectos-video13"
                ></video>
              </div>
              <div className="proyectos-container20">
                <video
                  src="https://ape-cloud.s3.us-east-2.amazonaws.com/POST7.mp4"
                  poster="https://ape-cloud.s3.us-east-2.amazonaws.com/videoframe_29244.png"
                  preload="auto"
                  controls="true"
                  className="proyectos-video14"
                ></video>
              </div>
              <div className="proyectos-container21">
                <video
                  src="https://ape-cloud.s3.us-east-2.amazonaws.com/GIF93.mp4"
                  poster="https://ape-cloud.s3.us-east-2.amazonaws.com/videoframe_11684.png"
                  preload="auto"
                  controls="true"
                  className="proyectos-video15"
                ></video>
              </div>
              <div className="proyectos-container22">
                <video
                  src="https://ape-cloud.s3.us-east-2.amazonaws.com/muestra+reaccion+gif1.mp4"
                  muted="true"
                  poster="https://ape-cloud.s3.us-east-2.amazonaws.com/videoframe_3882.png"
                  preload="auto"
                  autoPlay="true"
                  controls="true"
                  className="proyectos-video16"
                ></video>
              </div>
              <div className="proyectos-container23">
                <video
                  src="https://ape-cloud.s3.us-east-2.amazonaws.com/VIDEITO4.mp4"
                  poster="https://ape-cloud.s3.us-east-2.amazonaws.com/videoframe_3347.png"
                  preload="auto"
                  controls="true"
                  className="proyectos-video17"
                ></video>
              </div>
              <div className="proyectos-container24">
                <video
                  src="https://ape-cloud.s3.us-east-2.amazonaws.com/document_5159423077427184828+(1).mp4"
                  poster="https://ape-cloud.s3.us-east-2.amazonaws.com/videoframe_3510.png"
                  preload="auto"
                  controls="true"
                  className="proyectos-video18"
                ></video>
              </div>
              <div className="proyectos-container25">
                <video
                  src="https://ape-cloud.s3.us-east-2.amazonaws.com/VIDEO+ROB+AND+RIS.mp4"
                  poster="https://ape-cloud.s3.us-east-2.amazonaws.com/videoframe_20000.png"
                  preload="auto"
                  controls="true"
                  className="proyectos-video19"
                ></video>
              </div>
              <div className="proyectos-container26">
                <video
                  src="https://ape-cloud.s3.us-east-2.amazonaws.com/VIDEO2+(2).mp4"
                  poster="https://ape-cloud.s3.us-east-2.amazonaws.com/videoframe_20255.png"
                  preload="auto"
                  controls="true"
                  className="proyectos-video20"
                ></video>
              </div>
              <div className="proyectos-container27">
                <video
                  src="https://ape-cloud.s3.us-east-2.amazonaws.com/gifhogar4.mp4"
                  poster="https://ape-cloud.s3.us-east-2.amazonaws.com/videoframe_1970.png"
                  preload="auto"
                  controls="true"
                  className="proyectos-video21"
                ></video>
              </div>
            </div>
          </div>
          <div className="proyectos-container28">
            <h2 className="proyectos-text20">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_euL-9b'),
                }}
              ></span>
            </h2>
            <div className="proyectos-container29">
              <div className="proyectos-container30">
                <img
                  alt="image"
                  src="https://ape-cloud.s3.us-east-2.amazonaws.com/FEED-DULCES.jpg"
                  loading="lazy"
                  className="proyectos-image11"
                />
              </div>
              <div className="proyectos-container31">
                <img
                  alt="image"
                  src="https://ape-cloud.s3.us-east-2.amazonaws.com/FEED-AIRTEK.jpg"
                  loading="lazy"
                  className="proyectos-image12"
                />
              </div>
              <div className="proyectos-container32">
                <img
                  alt="image"
                  src="https://ape-cloud.s3.us-east-2.amazonaws.com/FEED-ROB-Y-RIS.jpg"
                  loading="lazy"
                  className="proyectos-image13"
                />
              </div>
              <div className="proyectos-container33">
                <img
                  alt="image"
                  src="https://ape-cloud.s3.us-east-2.amazonaws.com/FEED-PIPO.jpg"
                  loading="lazy"
                  className="proyectos-image14"
                />
              </div>
              <div className="proyectos-container34">
                <img
                  alt="image"
                  src="https://ape-cloud.s3.us-east-2.amazonaws.com/FEED-ETIPLAS.jpg"
                  loading="lazy"
                  className="proyectos-image15"
                />
              </div>
              <div className="proyectos-container35">
                <img
                  alt="image"
                  src="https://ape-cloud.s3.us-east-2.amazonaws.com/feed-quesabio.jpg"
                  loading="lazy"
                  className="proyectos-image16"
                />
              </div>
            </div>
          </div>
          <h1 className="proyectos-text21">
            <span
              dangerouslySetInnerHTML={{
                __html: translate.raw('text_7pwpnm'),
              }}
            ></span>
          </h1>
          <button type="button" className="proyectos-button1 button">
            <span
              dangerouslySetInnerHTML={{
                __html: translate.raw('text_HRLNzJ'),
              }}
            ></span>
          </button>
          <div className="proyectos-div1">
            <lottie-player
              src="https://lottie.host/45dd0d05-d843-4244-bf4d-358da7f04713/z8I1SKW3aK.json"
              loop
              speed="1"
              autoplay
              background="transparent"
            ></lottie-player>
          </div>
        </div>
        <div className="proyectos-container36">
          <div className="proyectos-container37">
            <div className="proyectos-div2">
              <lottie-player
                src="https://lottie.host/155c8faf-8b48-4ef6-9d07-69f51e13aac5/cCehkQsT2x.json"
                loop
                speed="2"
                autoplay
                background="transparent"
              ></lottie-player>
            </div>
          </div>
          <div className="proyectos-container38">
            <h1 className="proyectos-text22">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_bNtrXb'),
                }}
              ></span>
            </h1>
            <span className="proyectos-text23">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_Fu40I2'),
                }}
              ></span>
            </span>
          </div>
        </div>
        <div className="proyectos-container39">
          <div className="proyectos-container40">
            <h1 className="proyectos-text24">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_0DHuV4'),
                }}
              ></span>
            </h1>
          </div>
          <button type="button" className="proyectos-button2 button">
            <span
              dangerouslySetInnerHTML={{
                __html: translate.raw('text_ExnXGr'),
              }}
            ></span>
          </button>
        </div>
        <div>
          <div className="proyectos-container42">
            <Script
              html={`<script>
    ScrollReveal().reveal('.speaker');
    ScrollReveal().reveal('.image-notes');
</script>`}
            ></Script>
          </div>
        </div>
        <div>
          <div className="proyectos-container44">
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
        <footer className="proyectos-footer">
          <div className="proyectos-content1">
            <div className="proyectos-details1">
              <Link href="/">
                <a className="proyectos-link24">
                  <img
                    alt="APE Experience Pié de Página Logo Negro"
                    src="/Material web/logo-optimizado-600h.png"
                    className="proyectos-image17"
                  />
                </a>
              </Link>
              <p className="proyectos-description">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('Description_Fx6WBc'),
                  }}
                ></span>
              </p>
            </div>
          </div>
          <div className="proyectos-content2">
            <div className="proyectos-details2">
              <span className="proyectos-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_wu_qtT'),
                  }}
                ></span>
              </span>
              <Link href="/">
                <a className="proyectos-link25 a.link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_s9M7Kz'),
                    }}
                  ></span>
                </a>
              </Link>
              <Link href="/sobre-mi">
                <a className="proyectos-link26 a.link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_kGztVG'),
                    }}
                  ></span>
                </a>
              </Link>
              <Link href="/servicios">
                <a className="proyectos-link27 a.link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_D4WMpF'),
                    }}
                  ></span>
                </a>
              </Link>
              <Link href="/proyectos">
                <a className="proyectos-link28 a.link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_thqTE8'),
                    }}
                  ></span>
                </a>
              </Link>
              <Link href="/blog">
                <a className="proyectos-link29 a.link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_UC7hdA'),
                    }}
                  ></span>
                </a>
              </Link>
              <Link href="/contacto">
                <a className="proyectos-link30 a.link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ZRU_If'),
                    }}
                  ></span>
                </a>
              </Link>
            </div>
            <div className="proyectos-socials">
              <a
                href="https://instagram.com/ape_experience/"
                target="_blank"
                rel="noreferrer noopener"
                className="proyectos-link31"
              >
                <img
                  alt="Instagram APE Experience"
                  src="/instagram.svg"
                  className="proyectos-image18 social"
                />
              </a>
              <a
                href="https://facebook.com/apeexperienceve/"
                target="_blank"
                rel="noreferrer noopener"
                className="proyectos-link32"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="proyectos-icon22 social"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://threads.com/ape_experience/"
                target="_blank"
                rel="noreferrer noopener"
                className="proyectos-link33"
              >
                <img
                  alt="Threads APE Experience"
                  src="/Material web/threads-600h.png"
                  className="proyectos-image19 social"
                />
              </a>
            </div>
            <span className="proyectos-copyright">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('Copyright_XN1lgH'),
                }}
              ></span>
            </span>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .proyectos-container10 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .proyectos-header {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            background-color: #542ccc;
          }
          .proyectos-navbar {
            width: 100%;
            display: flex;
            z-index: 1000;
            position: relative;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            justify-content: space-between;
          }
          .proyectos-link10 {
            display: contents;
          }
          .proyectos-image10 {
            width: 104px;
            height: 114px;
            object-fit: cover;
            text-decoration: none;
          }
          .proyectos-desktop-menu {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
          }
          .proyectos-nav1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .proyectos-link12 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
            text-decoration: none;
          }
          .proyectos-link14 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
            text-decoration: none;
          }
          .proyectos-link16 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
            text-decoration: none;
          }
          .proyectos-link18 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
            text-decoration: none;
          }
          .proyectos-link20 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
            text-decoration: none;
          }
          .proyectos-link22 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
            text-decoration: none;
          }
          .proyectos-link23 {
            text-decoration: none;
          }
          .proyectos-text10 {
            font-size: 16px;
            font-family: Open Sans;
            text-transform: uppercase;
          }
          .proyectos-icon10 {
            width: 16px;
            height: 16px;
          }
          .proyectos-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .proyectos-icon12 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .proyectos-mobile-menu {
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
          .proyectos-nav2 {
            display: flex;
            z-index: 20;
            align-items: flex-start;
            flex-direction: column;
          }
          .proyectos-container11 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .proyectos-text11 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
            line-height: 45px;
          }
          .proyectos-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .proyectos-icon14 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .proyectos-nav3 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .proyectos-button-container {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-layout-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .proyectos-login {
            margin-right: var(--dl-layout-space-twounits);
          }
          .proyectos-icon-group {
            display: flex;
            z-index: 20;
          }
          .proyectos-icons {
            display: flex;
          }
          .proyectos-icon16 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
            margin-right: var(--dl-layout-space-twounits);
          }
          .proyectos-icon18 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
            margin-right: var(--dl-layout-space-twounits);
          }
          .proyectos-icon20 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .proyectos-background {
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 80%;
            margin: auto;
            position: absolute;
            object-fit: cover;
          }
          .proyectos-container12 {
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
          .proyectos-container13 {
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
          .proyectos-container14 {
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
          .proyectos-text19 {
            margin-top: var(--dl-layout-space-twounits);
          }
          .proyectos-container15 {
            gap: var(--dl-layout-space-unit);
            flex: 1;
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            flex-wrap: wrap;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .proyectos-container16 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .proyectos-video10 {
            width: auto;
            height: 480px;
          }
          .proyectos-container17 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .proyectos-video11 {
            width: auto;
            height: 480px;
          }
          .proyectos-container18 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .proyectos-video12 {
            width: auto;
            height: 480px;
          }
          .proyectos-container19 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .proyectos-video13 {
            width: auto;
            height: 480px;
          }
          .proyectos-container20 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .proyectos-video14 {
            width: auto;
            height: 480px;
          }
          .proyectos-container21 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .proyectos-video15 {
            width: auto;
            height: 480px;
          }
          .proyectos-container22 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .proyectos-video16 {
            width: auto;
            height: 480px;
          }
          .proyectos-container23 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .proyectos-video17 {
            width: auto;
            height: 480px;
          }
          .proyectos-container24 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .proyectos-video18 {
            width: auto;
            height: 480px;
          }
          .proyectos-container25 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .proyectos-video19 {
            width: auto;
            height: 480px;
          }
          .proyectos-container26 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .proyectos-video20 {
            width: auto;
            height: 480px;
          }
          .proyectos-container27 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .proyectos-video21 {
            width: auto;
            height: 480px;
          }
          .proyectos-container28 {
            gap: var(--dl-layout-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            padding-top: 0px;
            flex-direction: column;
            padding-bottom: 0px;
            justify-content: center;
            background-color: #ededed;
          }
          .proyectos-text20 {
            margin-top: var(--dl-layout-space-twounits);
          }
          .proyectos-container29 {
            gap: var(--dl-layout-space-unit);
            flex: 1;
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            flex-wrap: wrap;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .proyectos-container30 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .proyectos-image11 {
            width: auto;
            height: 480px;
            object-fit: cover;
          }
          .proyectos-container31 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .proyectos-image12 {
            width: auto;
            height: 480px;
            object-fit: cover;
          }
          .proyectos-container32 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .proyectos-image13 {
            width: auto;
            height: 480px;
            object-fit: cover;
          }
          .proyectos-container33 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .proyectos-image14 {
            width: auto;
            height: 480px;
            object-fit: cover;
          }
          .proyectos-container34 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .proyectos-image15 {
            width: auto;
            height: 480px;
            object-fit: cover;
          }
          .proyectos-container35 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .proyectos-image16 {
            width: auto;
            height: 480px;
            object-fit: cover;
          }
          .proyectos-text21 {
            fill: var(--dl-color-theme-neutral-dark);
            left: 842px;
            color: var(--dl-color-theme-neutral-dark);
            bottom: 334px;
            margin: auto;
            z-index: 1000;
            position: absolute;
            font-size: 3em;
          }
          .proyectos-button1 {
            fill: var(--dl-color-theme-secondary1);
            left: 769px;
            color: var(--dl-color-theme-secondary1);
            bottom: 248px;
            z-index: 1000;
            position: absolute;
            font-size: 2em;
            background-color: var(--dl-color-theme-primary2);
          }
          .proyectos-div1 {
            width: 100%;
            height: 600px;
            opacity: 0.2;
          }
          .proyectos-container36 {
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
          .proyectos-container37 {
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
          .proyectos-div2 {
            width: 100%;
            height: 480px;
          }
          .proyectos-container38 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .proyectos-text22 {
            font-style: normal;
            margin-top: 2%;
            font-family: Open Sans;
            font-weight: 600;
            margin-bottom: 2%;
          }
          .proyectos-text23 {
            font-size: 18px;
            font-style: normal;
            text-align: justify;
            font-family: Open Sans;
            font-weight: 300;
            line-height: 1.5;
          }
          .proyectos-container39 {
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
          .proyectos-container40 {
            flex: 0 0 auto;
            width: 80%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .proyectos-text24 {
            font-style: normal;
            font-family: Open Sans;
            font-weight: 600;
          }
          .proyectos-button2 {
            font-size: 2rem;
          }
          .proyectos-container42 {
            display: contents;
          }
          .proyectos-container44 {
            display: contents;
          }
          .proyectos-footer {
            width: 100%;
            height: 588px;
            display: flex;
            align-items: center;
            padding-top: 120px;
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-fiveunits);
            background-color: #000000;
          }
          .proyectos-content1 {
            gap: var(--dl-layout-space-threeunits);
            width: 50%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
          }
          .proyectos-details1 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
          }
          .proyectos-link24 {
            display: contents;
          }
          .proyectos-image17 {
            width: 200px;
            align-self: flex-start;
            object-fit: cover;
            text-decoration: none;
          }
          .proyectos-description {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 18px;
            line-height: 27px;
          }
          .proyectos-content2 {
            gap: var(--dl-layout-space-threeunits);
            width: 50%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
          }
          .proyectos-details2 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
          }
          .proyectos-text25 {
            color: var(--dl-color-gray-white);
            font-size: 22px;
            align-self: flex-start;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            text-transform: uppercase;
          }
          .proyectos-link25 {
            color: var(--dl-color-gray-white);
            line-height: 1.15;
            text-decoration: none;
          }
          .proyectos-link26 {
            color: var(--dl-color-gray-white);
            line-height: 1.15;
            text-decoration: none;
          }
          .proyectos-link27 {
            color: var(--dl-color-gray-white);
            line-height: 1.15;
            text-decoration: none;
          }
          .proyectos-link28 {
            color: var(--dl-color-gray-white);
            line-height: 1.15;
            text-decoration: none;
          }
          .proyectos-link29 {
            color: var(--dl-color-gray-white);
            line-height: 1.15;
            text-decoration: none;
          }
          .proyectos-link30 {
            color: var(--dl-color-gray-white);
            line-height: 1.15;
            text-decoration: none;
          }
          .proyectos-socials {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: row;
          }
          .proyectos-link31 {
            display: contents;
          }
          .proyectos-image18 {
            filter: invert(7);
            text-decoration: none;
          }
          .proyectos-link32 {
            display: contents;
          }
          .proyectos-icon22 {
            width: 24px;
            filter: invert(7);
            height: 24px;
            text-decoration: none;
          }
          .proyectos-link33 {
            display: contents;
          }
          .proyectos-image19 {
            filter: invert(7);
            text-decoration: none;
          }
          .proyectos-copyright {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 18px;
            line-height: 21px;
          }
          @media (max-width: 1440px) {
            .proyectos-video10 {
              height: 360px;
            }
            .proyectos-video11 {
              height: 360px;
            }
            .proyectos-video12 {
              height: 360px;
            }
            .proyectos-video13 {
              height: 360px;
            }
            .proyectos-video14 {
              height: 360px;
            }
            .proyectos-video15 {
              height: 360px;
            }
            .proyectos-video16 {
              height: 360px;
            }
            .proyectos-video17 {
              height: 360px;
            }
            .proyectos-video18 {
              height: 360px;
            }
            .proyectos-video19 {
              height: 360px;
            }
            .proyectos-video20 {
              height: 360px;
            }
            .proyectos-video21 {
              height: 360px;
            }
            .proyectos-image11 {
              height: 420px;
            }
            .proyectos-image12 {
              height: 420px;
            }
            .proyectos-image13 {
              height: 420px;
            }
            .proyectos-image14 {
              height: 420px;
            }
            .proyectos-image15 {
              height: 420px;
            }
            .proyectos-image16 {
              height: 420px;
            }
            .proyectos-text21 {
              left: 584px;
              bottom: 247px;
            }
            .proyectos-button1 {
              left: 511px;
              bottom: 161px;
            }
            .proyectos-div1 {
              height: 450px;
            }
            .proyectos-container39 {
              gap: var(--dl-layout-space-unit);
              padding: 2%;
              flex-wrap: wrap;
            }
            .proyectos-container40 {
              width: auto;
            }
            .proyectos-text24 {
              width: 720px;
              flex-wrap: wrap;
              font-style: normal;
              font-family: Open Sans;
              font-weight: 600;
              overflow-wrap: break-word;
            }
            .proyectos-button2 {
              font-size: 2em;
              align-self: flex-start;
            }
          }
          @media (max-width: 1200px) {
            .proyectos-header {
              background-color: #542ccc;
            }
            .proyectos-video10 {
              height: 280px;
            }
            .proyectos-video11 {
              height: 280px;
            }
            .proyectos-video12 {
              height: 280px;
            }
            .proyectos-video13 {
              height: 280px;
            }
            .proyectos-video14 {
              height: 280px;
            }
            .proyectos-video15 {
              height: 280px;
            }
            .proyectos-video16 {
              height: 280px;
            }
            .proyectos-video17 {
              height: 280px;
            }
            .proyectos-video18 {
              height: 280px;
            }
            .proyectos-video19 {
              height: 280px;
            }
            .proyectos-video20 {
              height: 280px;
            }
            .proyectos-video21 {
              height: 280px;
            }
            .proyectos-image11 {
              height: 320px;
            }
            .proyectos-image12 {
              height: 320px;
            }
            .proyectos-image13 {
              height: 320px;
            }
            .proyectos-image14 {
              height: 320px;
            }
            .proyectos-image15 {
              height: 320px;
            }
            .proyectos-image16 {
              height: 320px;
            }
            .proyectos-text21 {
              left: 473px;
              bottom: 215px;
            }
            .proyectos-button1 {
              left: 400px;
              bottom: 129px;
            }
            .proyectos-div1 {
              height: 375px;
            }
            .proyectos-text24 {
              font-size: 1.8rem;
            }
          }
          @media (max-width: 991px) {
            .proyectos-image10 {
              width: 88px;
              height: 87px;
            }
            .proyectos-link12 {
              font-size: 16px;
            }
            .proyectos-link14 {
              font-size: 16px;
            }
            .proyectos-link16 {
              font-size: 16px;
            }
            .proyectos-link18 {
              font-size: 16px;
            }
            .proyectos-link20 {
              font-size: 16px;
            }
            .proyectos-link22 {
              font-size: 16px;
            }
            .proyectos-link23 {
              padding-top: 1%;
              padding-left: 2%;
              padding-right: 2%;
              padding-bottom: 1%;
            }
            .proyectos-text10 {
              font-size: 14px;
              font-family: Open Sans;
              text-transform: uppercase;
            }
            .proyectos-video10 {
              height: 280px;
            }
            .proyectos-video11 {
              height: 280px;
            }
            .proyectos-video12 {
              height: 280px;
            }
            .proyectos-video13 {
              height: 280px;
            }
            .proyectos-video14 {
              height: 280px;
            }
            .proyectos-video15 {
              height: 280px;
            }
            .proyectos-video16 {
              height: 280px;
            }
            .proyectos-video17 {
              height: 280px;
            }
            .proyectos-video18 {
              height: 280px;
            }
            .proyectos-video19 {
              height: 280px;
            }
            .proyectos-video20 {
              height: 280px;
            }
            .proyectos-video21 {
              height: 280px;
            }
            .proyectos-image11 {
              height: 420px;
            }
            .proyectos-image12 {
              height: 420px;
            }
            .proyectos-image13 {
              height: 420px;
            }
            .proyectos-image14 {
              height: 420px;
            }
            .proyectos-image15 {
              height: 420px;
            }
            .proyectos-image16 {
              height: 420px;
            }
            .proyectos-text21 {
              left: 362px;
              bottom: 183px;
            }
            .proyectos-button1 {
              left: 289px;
              bottom: 97px;
            }
            .proyectos-div1 {
              height: 310px;
            }
            .proyectos-container36 {
              flex-direction: column;
            }
            .proyectos-container37 {
              width: 100%;
              padding-left: 0px;
              padding-right: 0px;
            }
            .proyectos-div2 {
              width: 568px;
              height: 307px;
              align-self: center;
            }
            .proyectos-container38 {
              width: 100%;
              align-items: center;
            }
            .proyectos-text23 {
              text-align: center;
            }
            .proyectos-text24 {
              font-size: 1.6rem;
            }
            .proyectos-button2 {
              font-size: 1.5rem;
            }
          }
          @media (max-width: 767px) {
            .proyectos-image10 {
              width: 140px;
              height: 152px;
            }
            .proyectos-desktop-menu {
              display: none;
            }
            .proyectos-burger-menu {
              display: flex;
            }
            .proyectos-icon12 {
              fill: white;
              width: var(--dl-layout-size-small);
              height: var(--dl-layout-size-small);
            }
            .proyectos-nav2 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .proyectos-container11 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .proyectos-text11 {
              color: #000000;
            }
            .proyectos-nav3 {
              gap: var(--dl-layout-space-unit);
            }
            .proyectos-text12 {
              color: #000000;
            }
            .proyectos-text13 {
              color: rgb(0, 0, 0);
            }
            .proyectos-text14 {
              color: rgb(0, 0, 0);
            }
            .proyectos-text15 {
              color: rgb(0, 0, 0);
            }
            .proyectos-text16 {
              color: rgb(0, 0, 0);
            }
            .proyectos-button-container {
              gap: var(--dl-layout-space-unit);
              width: 50%;
              margin-top: 0px;
              align-items: flex-start;
              flex-direction: column;
            }
            .proyectos-login {
              width: 100%;
              border-width: 1px;
              margin-right: 0px;
            }
            .proyectos-register2 {
              width: 100%;
              border-width: 1px;
            }
            .proyectos-icon-group {
              width: 100%;
              justify-content: flex-start;
            }
            .proyectos-container15 {
              align-items: center;
              flex-direction: row;
            }
            .proyectos-video10 {
              height: 320px;
            }
            .proyectos-video11 {
              height: 320px;
            }
            .proyectos-video12 {
              height: 320px;
            }
            .proyectos-video13 {
              height: 320px;
            }
            .proyectos-video14 {
              height: 320px;
            }
            .proyectos-video15 {
              height: 320px;
            }
            .proyectos-video16 {
              height: 320px;
            }
            .proyectos-video17 {
              height: 320px;
            }
            .proyectos-video18 {
              height: 320px;
            }
            .proyectos-video19 {
              height: 320px;
            }
            .proyectos-video20 {
              height: 320px;
            }
            .proyectos-video21 {
              height: 320px;
            }
            .proyectos-image11 {
              height: 320px;
            }
            .proyectos-image12 {
              height: 320px;
            }
            .proyectos-image13 {
              height: 320px;
            }
            .proyectos-image14 {
              height: 320px;
            }
            .proyectos-image15 {
              height: 320px;
            }
            .proyectos-image16 {
              height: 320px;
            }
            .proyectos-text21 {
              left: 243px;
              bottom: 147px;
            }
            .proyectos-button1 {
              left: 170px;
              bottom: 61px;
            }
            .proyectos-div1 {
              height: 240px;
            }
            .proyectos-container39 {
              padding-top: 2%;
            }
            .proyectos-text24 {
              width: 480px;
              font-size: 1.6rem;
              text-align: left;
            }
            .proyectos-footer {
              padding-top: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-twounits);
            }
            .proyectos-content1 {
              gap: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .proyectos-description {
              font-size: 14px;
              line-height: 21px;
            }
            .proyectos-content2 {
              gap: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .proyectos-socials {
              gap: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .proyectos-navbar {
              padding: var(--dl-layout-space-oneandhalfunits);
              padding-right: 24px;
            }
            .proyectos-image10 {
              width: auto;
              height: 90px;
            }
            .proyectos-mobile-menu {
              padding: 16px;
            }
            .proyectos-button-container {
              width: 100%;
            }
            .proyectos-icon-group {
              justify-content: center;
            }
            .proyectos-container12 {
              padding-top: 60px;
              padding-bottom: 60px;
            }
            .proyectos-text18 {
              text-align: center;
            }
            .proyectos-video10 {
              height: 640px;
            }
            .proyectos-video11 {
              height: 360px;
            }
            .proyectos-video12 {
              height: 360px;
            }
            .proyectos-video13 {
              height: 360px;
            }
            .proyectos-video14 {
              height: 640px;
            }
            .proyectos-video15 {
              height: 360px;
            }
            .proyectos-video16 {
              height: 360px;
            }
            .proyectos-video17 {
              height: 360px;
            }
            .proyectos-video18 {
              height: 640px;
            }
            .proyectos-video19 {
              height: 360px;
            }
            .proyectos-video20 {
              height: 360px;
            }
            .proyectos-video21 {
              height: 360px;
            }
            .proyectos-image11 {
              height: 360px;
            }
            .proyectos-image12 {
              height: 360px;
            }
            .proyectos-image13 {
              height: 360px;
            }
            .proyectos-image14 {
              height: 360px;
            }
            .proyectos-image15 {
              height: 360px;
            }
            .proyectos-image16 {
              height: 360px;
            }
            .proyectos-text21 {
              left: 154px;
              bottom: 90px;
              font-size: 2em;
            }
            .proyectos-button1 {
              left: 96px;
              bottom: 24px;
              font-size: 1.3em;
            }
            .proyectos-div1 {
              height: 149px;
            }
            .proyectos-div2 {
              width: 380px;
              height: 258px;
            }
            .proyectos-text22 {
              font-size: 1.5em;
            }
            .proyectos-text23 {
              font-size: 16px;
            }
            .proyectos-container39 {
              align-self: center;
              text-align: center;
              padding-top: 5%;
              align-content: center;
              flex-direction: column;
              padding-bottom: 5%;
            }
            .proyectos-text24 {
              width: 311px;
              font-size: 1.2rem;
              align-self: center;
              text-align: center;
            }
            .proyectos-button2 {
              align-self: center;
            }
            .proyectos-footer {
              gap: var(--dl-layout-space-oneandhalfunits);
              height: auto;
              align-items: center;
              flex-direction: column;
            }
            .proyectos-content1 {
              width: 100%;
              max-width: 100%;
              align-self: center;
              align-items: center;
            }
            .proyectos-details1 {
              max-width: 100%;
            }
            .proyectos-image17 {
              align-self: center;
            }
            .proyectos-description {
              font-size: 18px;
              text-align: center;
            }
            .proyectos-content2 {
              width: 100%;
              align-self: center;
              align-items: center;
            }
            .proyectos-text25 {
              width: 100%;
              text-align: center;
            }
            .proyectos-link25 {
              width: 100%;
              text-align: center;
            }
            .proyectos-link26 {
              width: 100%;
              text-align: center;
            }
            .proyectos-link27 {
              width: 100%;
              text-align: center;
            }
            .proyectos-link28 {
              width: 100%;
              text-align: center;
            }
            .proyectos-link29 {
              width: 100%;
              text-align: center;
            }
            .proyectos-link30 {
              width: 100%;
              text-align: center;
            }
            .proyectos-socials {
              justify-content: center;
            }
            .proyectos-copyright {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Proyectos

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
