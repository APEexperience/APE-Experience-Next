import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

const APEExperienceEnConstruccin = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="ape-experience-en-construccin-container1">
        <Head>
          <title>APE-Experience-en-Construccin - APE Experience</title>
          <meta
            property="og:title"
            content="APE-Experience-en-Construccin - APE Experience"
          />
          <meta name="robots" content="noindex" />
        </Head>
        <video
          src="https://ape-experience.net/Material web/Imagen%20Heroe%20APE%20Experience.mp4"
          loop
          muted
          preload="metadata"
          autoPlay
          className="ape-experience-en-construccin-video"
        ></video>
        <section className="ape-experience-en-construccin-hero">
          <div className="ape-experience-en-construccin-background1">
            <div className="ape-experience-en-construccin-container2">
              <img
                alt="fondo-degradado-APE"
                src="/Material web/fondo-degradado-ape%20(1)-1500h.png"
                className="ape-experience-en-construccin-image1"
              />
            </div>
          </div>
          <div className="ape-experience-en-construccin-container3">
            <header
              data-thq="thq-navbar"
              className="ape-experience-en-construccin-navbar"
            >
              <Link href="/">
                <a className="ape-experience-en-construccin-link10">
                  <img
                    alt="APE Experience"
                    src="/Material web/logo-optimizado-200h.png"
                    className="ape-experience-en-construccin-image2"
                  />
                </a>
              </Link>
              <div
                data-thq="thq-navbar-nav"
                data-role="Nav"
                className="ape-experience-en-construccin-desktop-menu"
              >
                <nav
                  data-thq="thq-navbar-nav-links"
                  data-role="Nav"
                  className="ape-experience-en-construccin-nav1"
                >
                  <Link href="/">
                    <a className="ape-experience-en-construccin-link12 navLink">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('Link_MzIrJg'),
                        }}
                      ></span>
                    </a>
                  </Link>
                  <Link href="/sobre-mi">
                    <a className="ape-experience-en-construccin-link14 navLink">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('Link_on8OKk'),
                        }}
                      ></span>
                    </a>
                  </Link>
                  <Link href="/servicios">
                    <a className="ape-experience-en-construccin-link16 navLink">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('Link_pjzqVU'),
                        }}
                      ></span>
                    </a>
                  </Link>
                  <span className="ape-experience-en-construccin-link17 navLink">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_lPLQ3R'),
                      }}
                    ></span>
                  </span>
                  <span className="ape-experience-en-construccin-link18 navLink">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_KVzDgr'),
                      }}
                    ></span>
                  </span>
                  <span className="ape-experience-en-construccin-link19 navLink">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_m4ia-Y'),
                      }}
                    ></span>
                  </span>
                </nav>
                <button className="ape-experience-en-construccin-register1 button">
                  <span className="ape-experience-en-construccin-text1">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_WXpz-l'),
                      }}
                    ></span>
                  </span>
                  <svg
                    viewBox="0 0 1024 1024"
                    className="ape-experience-en-construccin-icon10"
                  >
                    <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                  </svg>
                </button>
              </div>
              <div
                data-thq="thq-burger-menu"
                className="ape-experience-en-construccin-burger-menu"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="ape-experience-en-construccin-icon12"
                >
                  <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
              <div
                data-thq="thq-mobile-menu"
                className="ape-experience-en-construccin-mobile-menu"
              >
                <div
                  data-thq="thq-mobile-menu-nav"
                  data-role="Nav"
                  className="ape-experience-en-construccin-nav2"
                >
                  <div className="ape-experience-en-construccin-container4">
                    <h2 className="ape-experience-en-construccin-text2">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_CgBm6T'),
                        }}
                      ></span>
                    </h2>
                    <div
                      data-thq="thq-close-menu"
                      className="ape-experience-en-construccin-menu-close"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="ape-experience-en-construccin-icon14"
                      >
                        <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                      </svg>
                    </div>
                  </div>
                  <nav
                    data-thq="thq-mobile-menu-nav-links"
                    data-role="Nav"
                    className="ape-experience-en-construccin-nav3"
                  >
                    <span className="navLink ape-experience-en-construccin-text3">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_T0yHde'),
                        }}
                      ></span>
                    </span>
                    <span className="navLink ape-experience-en-construccin-text4">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_W8x12I'),
                        }}
                      ></span>
                    </span>
                    <span className="navLink ape-experience-en-construccin-text5">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_sLOV1d'),
                        }}
                      ></span>
                    </span>
                    <span className="navLink ape-experience-en-construccin-text6">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Yrrjqj'),
                        }}
                      ></span>
                    </span>
                    <span className="navLink ape-experience-en-construccin-text7">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_luxUEq'),
                        }}
                      ></span>
                    </span>
                  </nav>
                  <div className="ape-experience-en-construccin-button-container">
                    <button className="ape-experience-en-construccin-login button">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('Login_e_vPzw'),
                        }}
                      ></span>
                    </button>
                    <button className="button ape-experience-en-construccin-register2">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('Register_GKZtyJ'),
                        }}
                      ></span>
                    </button>
                  </div>
                  <div className="ape-experience-en-construccin-icon-group">
                    <div className="ape-experience-en-construccin-icons">
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="ape-experience-en-construccin-icon16"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="ape-experience-en-construccin-icon18"
                      >
                        <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 602.2582857142856 1024"
                        className="ape-experience-en-construccin-icon20"
                      >
                        <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <img
                  alt="image"
                  src="/quote-background.svg"
                  className="ape-experience-en-construccin-background2"
                />
              </div>
            </header>
          </div>
          <div className="ape-experience-en-construccin-hero-content">
            <h1 className="ape-experience-en-construccin-text8">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_1gqBCv'),
                }}
              ></span>
            </h1>
            <div className="ape-experience-en-construccin-caption1">
              <a
                href="https://www.instagram.com/ape_experience/"
                target="_blank"
                rel="noreferrer noopener"
                className="ape-experience-en-construccin-instagram button-style-1 button"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="ape-experience-en-construccin-icon22"
                >
                  <path d="M298.667 42.667c-70.699 0-134.741 28.715-181.035 74.965s-74.965 110.336-74.965 181.035v426.667c0 70.699 28.715 134.741 74.965 181.035s110.336 74.965 181.035 74.965h426.667c70.699 0 134.741-28.715 181.035-74.965s74.965-110.336 74.965-181.035v-426.667c0-70.699-28.715-134.741-74.965-181.035s-110.336-74.965-181.035-74.965zM298.667 128h426.667c47.147 0 89.728 19.072 120.661 50.005s50.005 73.515 50.005 120.661v426.667c0 47.147-19.072 89.728-50.005 120.661s-73.515 50.005-120.661 50.005h-426.667c-47.147 0-89.728-19.072-120.661-50.005s-50.005-73.515-50.005-120.661v-426.667c0-47.147 19.072-89.728 50.005-120.661s73.515-50.005 120.661-50.005zM724.864 478.848c-6.4-41.472-24.363-79.232-50.944-109.525-32.171-36.736-76.971-62.507-128.384-70.144-19.797-3.157-41.387-3.285-63.019-0.085-58.283 8.619-107.563 40.149-140.032 83.925s-48.341 100.139-39.68 158.379 40.149 107.563 83.925 140.032 100.139 48.341 158.379 39.68 107.563-40.149 140.032-83.925 48.341-100.139 39.68-158.379zM640.469 491.392c5.205 34.987-4.267 68.651-23.808 95.019s-49.067 45.184-84.011 50.347-68.651-4.267-95.019-23.808-45.184-49.067-50.347-84.011 4.267-68.651 23.808-95.019 49.067-45.184 84.011-50.347c13.355-1.963 26.24-1.792 37.12-0.085 31.573 4.693 58.283 20.053 77.568 42.069 16 18.261 26.88 41.088 30.72 65.835zM789.333 277.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667 19.115 42.667 42.667 42.667 42.667-19.115 42.667-42.667z"></path>
                </svg>
              </a>
              <p className="ape-experience-en-construccin-caption2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('Caption_q2jl1A'),
                  }}
                ></span>
              </p>
            </div>
          </div>
        </section>
      </div>
      <style jsx>
        {`
          .ape-experience-en-construccin-container1 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .ape-experience-en-construccin-video {
            width: auto;
            height: 100vh;
            z-index: 1;
            margin-bottom: -100vh;
          }
          .ape-experience-en-construccin-hero {
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
          .ape-experience-en-construccin-background1 {
            left: 0px;
            right: 0px;
            bottom: 0px;
            height: 85%;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .ape-experience-en-construccin-container2 {
            flex: 0 0 auto;
            width: auto;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            justify-content: center;
          }
          .ape-experience-en-construccin-image1 {
            left: -1320px;
            width: 2500px;
            bottom: 0px;
            height: 100vh;
            margin: auto;
            z-index: 100;
            position: absolute;
            align-self: flex-end;
            object-fit: cover;
          }
          .ape-experience-en-construccin-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .ape-experience-en-construccin-navbar {
            width: 100%;
            display: flex;
            z-index: 1000;
            position: relative;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            justify-content: space-between;
          }
          .ape-experience-en-construccin-link10 {
            display: contents;
          }
          .ape-experience-en-construccin-image2 {
            width: 104px;
            height: 114px;
            object-fit: cover;
            text-decoration: none;
          }
          .ape-experience-en-construccin-desktop-menu {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
          }
          .ape-experience-en-construccin-nav1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0 0 auto;
            display: none;
            align-items: center;
            flex-direction: row;
          }
          .ape-experience-en-construccin-link12 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
            text-decoration: none;
          }
          .ape-experience-en-construccin-link14 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
            text-decoration: none;
          }
          .ape-experience-en-construccin-link16 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
            text-decoration: none;
          }
          .ape-experience-en-construccin-link17 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
          }
          .ape-experience-en-construccin-link18 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
          }
          .ape-experience-en-construccin-link19 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
          }
          .ape-experience-en-construccin-register1 {
            display: none;
          }
          .ape-experience-en-construccin-text1 {
            font-size: 16px;
            font-family: Open Sans;
            text-transform: uppercase;
          }
          .ape-experience-en-construccin-icon10 {
            width: 16px;
            height: 16px;
          }
          .ape-experience-en-construccin-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .ape-experience-en-construccin-icon12 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .ape-experience-en-construccin-mobile-menu {
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
          .ape-experience-en-construccin-nav2 {
            display: flex;
            z-index: 20;
            align-items: flex-start;
            flex-direction: column;
          }
          .ape-experience-en-construccin-container4 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .ape-experience-en-construccin-text2 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
            line-height: 45px;
          }
          .ape-experience-en-construccin-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .ape-experience-en-construccin-icon14 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .ape-experience-en-construccin-nav3 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .ape-experience-en-construccin-button-container {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-layout-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .ape-experience-en-construccin-login {
            margin-right: var(--dl-layout-space-twounits);
          }
          .ape-experience-en-construccin-icon-group {
            display: flex;
            z-index: 20;
          }
          .ape-experience-en-construccin-icons {
            display: flex;
          }
          .ape-experience-en-construccin-icon16 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
            margin-right: var(--dl-layout-space-twounits);
          }
          .ape-experience-en-construccin-icon18 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
            margin-right: var(--dl-layout-space-twounits);
          }
          .ape-experience-en-construccin-icon20 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .ape-experience-en-construccin-background2 {
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 80%;
            margin: auto;
            position: absolute;
            object-fit: cover;
          }
          .ape-experience-en-construccin-hero-content {
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
          .ape-experience-en-construccin-text8 {
            color: rgb(255, 255, 255);
            width: 812px;
            font-size: 56px;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 600;
            line-height: 1.1;
          }
          .ape-experience-en-construccin-caption1 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .ape-experience-en-construccin-instagram {
            display: flex;
            flex-direction: row;
            text-decoration: none;
          }
          .ape-experience-en-construccin-icon22 {
            width: 24px;
            height: 24px;
          }
          .ape-experience-en-construccin-caption2 {
            color: rgb(255, 255, 255);
            width: 521px;
            font-size: 32px;
            font-family: Open Sans;
          }
          @media (max-width: 1440px) {
            .ape-experience-en-construccin-video {
              top: 0px;
              flex: 1;
              left: 0px;
              width: auto;
              bottom: 0px;
              height: 100%;
              margin: auto;
              position: absolute;
              padding-top: 0px;
            }
            .ape-experience-en-construccin-hero {
              top: 0px;
              flex: 0 0 auto;
              left: 0px;
              width: 100%;
              height: 100%;
              position: absolute;
              padding-top: var(--dl-layout-space-unit);
            }
            .ape-experience-en-construccin-background1 {
              flex: 1;
              width: 100%;
              height: 100%;
              background-size: cover;
              background-image: url('/Material web/fondo-404%20(1)-1500h.jpg');
            }
            .ape-experience-en-construccin-container2 {
              width: auto;
            }
            .ape-experience-en-construccin-image1 {
              top: -76%;
              flex: 1;
              left: -745px;
              width: auto;
              position: static;
              align-self: stretch;
            }
            .ape-experience-en-construccin-hero-content {
              height: auto;
              padding: var(--dl-layout-space-fourunits);
              max-width: 100%;
            }
            .ape-experience-en-construccin-text8 {
              color: rgb(255, 255, 255);
              font-size: 56px;
              font-style: normal;
              font-family: Open Sans;
              font-weight: 600;
              line-height: 1.1;
            }
            .ape-experience-en-construccin-icon22 {
              width: 80px;
              height: auto;
            }
            .ape-experience-en-construccin-caption2 {
              color: rgb(255, 255, 255);
            }
          }
          @media (max-width: 1200px) {
            .ape-experience-en-construccin-video {
              align-self: center;
            }
            .ape-experience-en-construccin-hero {
              padding-top: 0%;
            }
            .ape-experience-en-construccin-image1 {
              top: -158px;
              left: -636px;
              height: 110vh;
            }
          }
          @media (max-width: 991px) {
            .ape-experience-en-construccin-image2 {
              width: 88px;
              height: 87px;
            }
            .ape-experience-en-construccin-link12 {
              font-size: 16px;
            }
            .ape-experience-en-construccin-link14 {
              font-size: 16px;
            }
            .ape-experience-en-construccin-link16 {
              font-size: 16px;
            }
            .ape-experience-en-construccin-link17 {
              font-size: 16px;
            }
            .ape-experience-en-construccin-link18 {
              font-size: 16px;
            }
            .ape-experience-en-construccin-link19 {
              font-size: 16px;
            }
            .ape-experience-en-construccin-register1 {
              padding-top: 1%;
              padding-left: 2%;
              padding-right: 2%;
              padding-bottom: 1%;
            }
            .ape-experience-en-construccin-text1 {
              font-size: 14px;
              font-family: Open Sans;
              text-transform: uppercase;
            }
          }
          @media (max-width: 767px) {
            .ape-experience-en-construccin-hero {
              height: 60vh;
              padding-top: var(--dl-layout-space-oneandhalfunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .ape-experience-en-construccin-image2 {
              width: 140px;
              height: 152px;
            }
            .ape-experience-en-construccin-desktop-menu {
              display: none;
            }
            .ape-experience-en-construccin-burger-menu {
              display: flex;
            }
            .ape-experience-en-construccin-icon12 {
              fill: white;
              width: var(--dl-layout-size-small);
              height: var(--dl-layout-size-small);
            }
            .ape-experience-en-construccin-nav2 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .ape-experience-en-construccin-container4 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .ape-experience-en-construccin-text2 {
              color: #000000;
            }
            .ape-experience-en-construccin-nav3 {
              gap: var(--dl-layout-space-unit);
            }
            .ape-experience-en-construccin-text3 {
              color: #000000;
            }
            .ape-experience-en-construccin-text4 {
              color: rgb(0, 0, 0);
            }
            .ape-experience-en-construccin-text5 {
              color: rgb(0, 0, 0);
            }
            .ape-experience-en-construccin-text6 {
              color: rgb(0, 0, 0);
            }
            .ape-experience-en-construccin-text7 {
              color: rgb(0, 0, 0);
            }
            .ape-experience-en-construccin-button-container {
              gap: var(--dl-layout-space-unit);
              width: 50%;
              margin-top: 0px;
              align-items: flex-start;
              flex-direction: column;
            }
            .ape-experience-en-construccin-login {
              width: 100%;
              border-width: 1px;
              margin-right: 0px;
            }
            .ape-experience-en-construccin-register2 {
              width: 100%;
              border-width: 1px;
            }
            .ape-experience-en-construccin-icon-group {
              width: 100%;
              justify-content: flex-start;
            }
            .ape-experience-en-construccin-hero-content {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .ape-experience-en-construccin-text8 {
              width: 100%;
              font-size: 48px;
            }
            .ape-experience-en-construccin-caption1 {
              gap: var(--dl-layout-space-unit);
            }
            .ape-experience-en-construccin-instagram {
              padding: var(--dl-layout-space-halfunit);
            }
            .ape-experience-en-construccin-caption2 {
              color: rgb(255, 255, 255);
              font-size: 16px;
              font-family: Open Sans;
              line-height: 32px;
            }
          }
          @media (max-width: 479px) {
            .ape-experience-en-construccin-hero {
              left: 0px;
              right: 0px;
              height: 100%;
              margin: auto;
            }
            .ape-experience-en-construccin-image1 {
              align-self: center;
            }
            .ape-experience-en-construccin-mobile-menu {
              padding: 16px;
            }
            .ape-experience-en-construccin-button-container {
              width: 100%;
            }
            .ape-experience-en-construccin-icon-group {
              justify-content: center;
            }
            .ape-experience-en-construccin-hero-content {
              flex-wrap: wrap;
            }
            .ape-experience-en-construccin-text8 {
              font-size: 32px;
            }
            .ape-experience-en-construccin-caption1 {
              flex-wrap: wrap;
              align-self: center;
              justify-content: flex-start;
            }
            .ape-experience-en-construccin-caption2 {
              fill: var(--dl-color-theme-secondary1);
              color: var(--dl-color-theme-secondary1);
              width: 100%;
              font-size: 32px;
              font-style: normal;
              font-family: Open Sans;
              font-weight: 500;
            }
          }
        `}
      </style>
    </>
  )
}

export default APEExperienceEnConstruccin

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
