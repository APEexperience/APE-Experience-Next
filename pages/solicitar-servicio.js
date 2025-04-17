import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const SolicitarServicio = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="solicitar-servicio-container10">
        <Head>
          <title>Solicitar-servicio - APE Experience</title>
          <meta name="description" content={translate.raw('static_jkA28s')} />
          <meta
            property="og:title"
            content="Solicitar-servicio - APE Experience"
          />
          <meta
            property="og:description"
            content={translate.raw('static_jkA28s')}
          />
        </Head>
        <div className="solicitar-servicio-header">
          <header data-thq="thq-navbar" className="solicitar-servicio-navbar">
            <Link href="/">
              <a className="solicitar-servicio-link10">
                <img
                  alt="APE Experience"
                  src="/Material web/logo-optimizado-600h.png"
                  className="solicitar-servicio-image1"
                />
              </a>
            </Link>
            <div
              data-thq="thq-navbar-nav"
              data-role="Nav"
              className="solicitar-servicio-desktop-menu"
            >
              <nav
                data-thq="thq-navbar-nav-links"
                data-role="Nav"
                className="solicitar-servicio-nav1"
              >
                <Link href="/">
                  <a className="solicitar-servicio-link12 navLink">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_uA6YGO'),
                      }}
                    ></span>
                  </a>
                </Link>
                <Link href="/sobre-mi">
                  <a className="solicitar-servicio-link14 navLink">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_ZBYEiC'),
                      }}
                    ></span>
                  </a>
                </Link>
                <Link href="/servicios">
                  <a className="solicitar-servicio-link16 navLink">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_6ZiwAo'),
                      }}
                    ></span>
                  </a>
                </Link>
                <Link href="/proyectos">
                  <a className="solicitar-servicio-link18 navLink">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_6ZcoJ1'),
                      }}
                    ></span>
                  </a>
                </Link>
                <Link href="/blog">
                  <a className="solicitar-servicio-link20 navLink">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_eGdgkz'),
                      }}
                    ></span>
                  </a>
                </Link>
                <Link href="/contacto">
                  <a className="solicitar-servicio-link22 navLink">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_eIWceR'),
                      }}
                    ></span>
                  </a>
                </Link>
              </nav>
              <Link href="/solicitar-servicio">
                <a className="solicitar-servicio-link23 button">
                  <span className="solicitar-servicio-text10">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_pCgs8S'),
                      }}
                    ></span>
                  </span>
                  <svg
                    viewBox="0 0 1024 1024"
                    className="solicitar-servicio-icon10"
                  >
                    <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                  </svg>
                </a>
              </Link>
            </div>
            <div
              data-thq="thq-burger-menu"
              className="solicitar-servicio-burger-menu"
            >
              <svg
                viewBox="0 0 1024 1024"
                className="solicitar-servicio-icon12"
              >
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div
              data-thq="thq-mobile-menu"
              className="solicitar-servicio-mobile-menu"
            >
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="solicitar-servicio-nav2"
              >
                <div className="solicitar-servicio-container11">
                  <h2 className="solicitar-servicio-text11">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_c_92Lo'),
                      }}
                    ></span>
                  </h2>
                  <div
                    data-thq="thq-close-menu"
                    className="solicitar-servicio-menu-close"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="solicitar-servicio-icon14"
                    >
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav
                  data-thq="thq-mobile-menu-nav-links"
                  data-role="Nav"
                  className="solicitar-servicio-nav3"
                >
                  <span className="navLink solicitar-servicio-text12">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_0pgV52'),
                      }}
                    ></span>
                  </span>
                  <span className="navLink solicitar-servicio-text13">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_avCxE0'),
                      }}
                    ></span>
                  </span>
                  <span className="navLink solicitar-servicio-text14">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_xaHg0D'),
                      }}
                    ></span>
                  </span>
                  <span className="navLink solicitar-servicio-text15">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_AKDxt_'),
                      }}
                    ></span>
                  </span>
                  <span className="navLink solicitar-servicio-text16">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_0Y1X7i'),
                      }}
                    ></span>
                  </span>
                  <span className="navLink solicitar-servicio-text17">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_1OjFfN'),
                      }}
                    ></span>
                  </span>
                  <span className="navLink solicitar-servicio-text18">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_8ri6tR'),
                      }}
                    ></span>
                  </span>
                </nav>
                <div className="solicitar-servicio-button-container">
                  <button className="solicitar-servicio-login button">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Login_Nibjtr'),
                      }}
                    ></span>
                  </button>
                  <button className="button solicitar-servicio-register2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Register_x7j76O'),
                      }}
                    ></span>
                  </button>
                </div>
              </div>
              <img
                alt="image"
                src="/quote-background.svg"
                className="solicitar-servicio-background"
              />
              <div className="solicitar-servicio-socials1">
                <a
                  href="https://instagram.com/ape_experience/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="solicitar-servicio-link24"
                >
                  <img
                    alt="Instagram APE Experience"
                    src="/instagram.svg"
                    className="solicitar-servicio-image2 social"
                  />
                </a>
                <a
                  href="https://facebook.com/apeexperienceve/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="solicitar-servicio-link25"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="solicitar-servicio-icon16 social"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://threads.com/ape_experience/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="solicitar-servicio-link26"
                >
                  <img
                    alt="Threads APE Experience"
                    src="/Material web/threads-600h.png"
                    className="solicitar-servicio-image3 social"
                  />
                </a>
              </div>
            </div>
          </header>
        </div>
        <div className="solicitar-servicio-container12"></div>
        <div className="solicitar-servicio-container13">
          <div className="solicitar-servicio-container14">
            <h1>
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_pGrTa-'),
                }}
              ></span>
            </h1>
            <div className="solicitar-servicio-container15">
              <div className="solicitar-servicio-container16">
                <Script
                  html={`<style>
.container {
  max-width: 960px;
}

.lh-condensed { line-height: 1.25; }
</style>
<div class="container">
    <div class="py-5 text-center">
        <img class="d-block mx-auto mb-4" src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
        <h2>Checkout form</h2>
        <p class="lead">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
    </div>
    <div class="row">
        <div class="col-md-4 order-md-2 mb-4">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span class="text-muted">Your cart</span>
                <span class="badge badge-secondary badge-pill">3</span>
            </h4>
            <ul class="list-group mb-3 sticky-top">
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 class="my-0">Product name</h6>
                        <small class="text-muted">Brief description</small>
                    </div>
                    <span class="text-muted">\$12</span>
                </li>
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 class="my-0">Second product</h6>
                        <small class="text-muted">Brief description</small>
                    </div>
                    <span class="text-muted">\$8</span>
                </li>
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 class="my-0">Third item</h6>
                        <small class="text-muted">Brief description</small>
                    </div>
                    <span class="text-muted">\$5</span>
                </li>
                <li class="list-group-item d-flex justify-content-between bg-light">
                    <div class="text-success">
                        <h6 class="my-0">Promo code</h6>
                        <small>EXAMPLECODE</small>
                    </div>
                    <span class="text-success">-\$5</span>
                </li>
                <li class="list-group-item d-flex justify-content-between">
                    <span>Total (USD)</span>
                    <strong>\$20</strong>
                </li>
            </ul>
            <form class="card p-2">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Promo code">
                    <div class="input-group-append">
                        <button type="submit" class="btn btn-secondary">Redeem</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="col-md-8 order-md-1">
            <h4 class="mb-3">Billing address</h4>
            <form class="needs-validation" novalidate="">
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="firstName">First name</label>
                        <input type="text" class="form-control" id="firstName" placeholder="" value="" required="">
                        <div class="invalid-feedback"> Valid first name is required. </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="lastName">Last name</label>
                        <input type="text" class="form-control" id="lastName" placeholder="" value="" required="">
                        <div class="invalid-feedback"> Valid last name is required. </div>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="username">Username</label>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">@</span>
                        </div>
                        <input type="text" class="form-control" id="username" placeholder="Username" required="">
                        <div class="invalid-feedback" style="width: 100%;"> Your username is required. </div>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="email">Email <span class="text-muted">(Optional)</span></label>
                    <input type="email" class="form-control" id="email" placeholder="you@example.com">
                    <div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
                </div>
                <div class="mb-3">
                    <label for="address">Address</label>
                    <input type="text" class="form-control" id="address" placeholder="1234 Main St" required="">
                    <div class="invalid-feedback"> Please enter your shipping address. </div>
                </div>
                <div class="mb-3">
                    <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>
                    <input type="text" class="form-control" id="address2" placeholder="Apartment or suite">
                </div>
                <div class="row">
                    <div class="col-md-5 mb-3">
                        <label for="country">Country</label>
                        <select class="custom-select d-block w-100" id="country" required="">
                            <option value="">Choose...</option>
                            <option>United States</option>
                        </select>
                        <div class="invalid-feedback"> Please select a valid country. </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="state">State</label>
                        <select class="custom-select d-block w-100" id="state" required="">
                            <option value="">Choose...</option>
                            <option>California</option>
                        </select>
                        <div class="invalid-feedback"> Please provide a valid state. </div>
                    </div>
                    <div class="col-md-3 mb-3">
                        <label for="zip">Zip</label>
                        <input type="text" class="form-control" id="zip" placeholder="" required="">
                        <div class="invalid-feedback"> Zip code required. </div>
                    </div>
                </div>
                <hr class="mb-4">
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="same-address">
                    <label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
                </div>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="save-info">
                    <label class="custom-control-label" for="save-info">Save this information for next time</label>
                </div>
                <hr class="mb-4">
                <h4 class="mb-3">Payment</h4>
                <div class="d-block my-3">
                    <div class="custom-control custom-radio">
                        <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked="" required="">
                        <label class="custom-control-label" for="credit">Credit card</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required="">
                        <label class="custom-control-label" for="debit">Debit card</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required="">
                        <label class="custom-control-label" for="paypal">PayPal</label>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="cc-name">Name on card</label>
                        <input type="text" class="form-control" id="cc-name" placeholder="" required="">
                        <small class="text-muted">Full name as displayed on card</small>
                        <div class="invalid-feedback"> Name on card is required </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="cc-number">Credit card number</label>
                        <input type="text" class="form-control" id="cc-number" placeholder="" required="">
                        <div class="invalid-feedback"> Credit card number is required </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3 mb-3">
                        <label for="cc-expiration">Expiration</label>
                        <input type="text" class="form-control" id="cc-expiration" placeholder="" required="">
                        <div class="invalid-feedback"> Expiration date required </div>
                    </div>
                    <div class="col-md-3 mb-3">
                        <label for="cc-cvv">CVV</label>
                        <input type="text" class="form-control" id="cc-cvv" placeholder="" required="">
                        <div class="invalid-feedback"> Security code required </div>
                    </div>
                </div>
                <hr class="mb-4">
                <button class="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
            </form>
        </div>
    </div>
</div>
<script>
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation')

    // Loop over them and prevent submission
    Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
  }, false)
}())
</script>`}
                ></Script>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="solicitar-servicio-container18">
            <Script
              html={`<script>
    ScrollReveal().reveal('.speaker');
    ScrollReveal().reveal('.image-notes');
</script>`}
            ></Script>
          </div>
        </div>
        <div>
          <div className="solicitar-servicio-container20">
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
        <footer className="solicitar-servicio-footer">
          <div className="solicitar-servicio-content1">
            <div className="solicitar-servicio-details1">
              <Link href="/">
                <a className="solicitar-servicio-link27">
                  <img
                    alt="APE Experience Pié de Página Logo Negro"
                    src="/Material web/logo-optimizado-600h.png"
                    className="solicitar-servicio-image4"
                  />
                </a>
              </Link>
              <p className="solicitar-servicio-description">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('Description_wYODvN'),
                  }}
                ></span>
              </p>
            </div>
          </div>
          <div className="solicitar-servicio-content2">
            <div className="solicitar-servicio-details2">
              <span className="solicitar-servicio-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_a5BG4o'),
                  }}
                ></span>
              </span>
              <Link href="/">
                <a className="solicitar-servicio-link28 a.link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_AkWDRO'),
                    }}
                  ></span>
                </a>
              </Link>
              <Link href="/sobre-mi">
                <a className="solicitar-servicio-link29 a.link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_mM_Lt3'),
                    }}
                  ></span>
                </a>
              </Link>
              <Link href="/servicios">
                <a className="solicitar-servicio-link30 a.link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_1998PG'),
                    }}
                  ></span>
                </a>
              </Link>
              <Link href="/proyectos">
                <a className="solicitar-servicio-link31 a.link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_RikuI0'),
                    }}
                  ></span>
                </a>
              </Link>
              <Link href="/blog">
                <a className="solicitar-servicio-link32 a.link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_XCwtsY'),
                    }}
                  ></span>
                </a>
              </Link>
              <Link href="/contacto">
                <a className="solicitar-servicio-link33 a.link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_GBUf9m'),
                    }}
                  ></span>
                </a>
              </Link>
            </div>
            <div className="solicitar-servicio-socials2">
              <a
                href="https://instagram.com/ape_experience/"
                target="_blank"
                rel="noreferrer noopener"
                className="solicitar-servicio-link34"
              >
                <img
                  alt="Instagram APE Experience"
                  src="/instagram.svg"
                  className="solicitar-servicio-image5 social"
                />
              </a>
              <a
                href="https://facebook.com/apeexperienceve/"
                target="_blank"
                rel="noreferrer noopener"
                className="solicitar-servicio-link35"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="solicitar-servicio-icon18 social"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://threads.com/ape_experience/"
                target="_blank"
                rel="noreferrer noopener"
                className="solicitar-servicio-link36"
              >
                <img
                  alt="Threads APE Experience"
                  src="/Material web/threads-600h.png"
                  className="solicitar-servicio-image6 social"
                />
              </a>
            </div>
            <span className="solicitar-servicio-copyright">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('Copyright_1XPwfr'),
                }}
              ></span>
            </span>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .solicitar-servicio-container10 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .solicitar-servicio-header {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            background-color: #542ccc;
          }
          .solicitar-servicio-navbar {
            width: 100%;
            display: flex;
            z-index: 1000;
            position: relative;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            justify-content: space-between;
          }
          .solicitar-servicio-link10 {
            display: contents;
          }
          .solicitar-servicio-image1 {
            width: 104px;
            height: 114px;
            object-fit: cover;
            text-decoration: none;
          }
          .solicitar-servicio-desktop-menu {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
          }
          .solicitar-servicio-nav1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .solicitar-servicio-link12 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
            text-decoration: none;
          }
          .solicitar-servicio-link14 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
            text-decoration: none;
          }
          .solicitar-servicio-link16 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
            text-decoration: none;
          }
          .solicitar-servicio-link18 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
            text-decoration: none;
          }
          .solicitar-servicio-link20 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
            text-decoration: none;
          }
          .solicitar-servicio-link22 {
            font-size: 18px;
            font-family: Open Sans;
            text-transform: uppercase;
            text-decoration: none;
          }
          .solicitar-servicio-link23 {
            text-decoration: none;
          }
          .solicitar-servicio-text10 {
            font-size: 16px;
            font-family: Open Sans;
            text-transform: uppercase;
          }
          .solicitar-servicio-icon10 {
            width: 16px;
            height: 16px;
          }
          .solicitar-servicio-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .solicitar-servicio-icon12 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .solicitar-servicio-mobile-menu {
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
          .solicitar-servicio-nav2 {
            display: flex;
            z-index: 20;
            align-items: flex-start;
            flex-direction: column;
          }
          .solicitar-servicio-container11 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .solicitar-servicio-text11 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
            line-height: 45px;
          }
          .solicitar-servicio-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .solicitar-servicio-icon14 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .solicitar-servicio-nav3 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .solicitar-servicio-button-container {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-layout-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .solicitar-servicio-login {
            margin-right: var(--dl-layout-space-twounits);
          }
          .solicitar-servicio-background {
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 80%;
            margin: auto;
            position: absolute;
            object-fit: cover;
          }
          .solicitar-servicio-socials1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: row;
          }
          .solicitar-servicio-link24 {
            display: contents;
          }
          .solicitar-servicio-image2 {
            filter: invert(7);
            text-decoration: none;
          }
          .solicitar-servicio-link25 {
            display: contents;
          }
          .solicitar-servicio-icon16 {
            width: 24px;
            filter: invert(7);
            height: 24px;
            text-decoration: none;
          }
          .solicitar-servicio-link26 {
            display: contents;
          }
          .solicitar-servicio-image3 {
            filter: invert(7);
            text-decoration: none;
          }
          .solicitar-servicio-container12 {
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
          .solicitar-servicio-container13 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: stretch;
            padding-left: var(--dl-layout-space-sixunits);
            padding-right: var(--dl-layout-space-sixunits);
            flex-direction: column;
            justify-content: space-between;
          }
          .solicitar-servicio-container14 {
            gap: var(--dl-layout-space-halfunit);
            flex: 1;
            width: 100%;
            display: flex;
            max-width: auto;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: center;
          }
          .solicitar-servicio-container15 {
            width: 100%;
            max-width: auto;
          }
          .solicitar-servicio-container16 {
            display: contents;
          }
          .solicitar-servicio-container18 {
            display: contents;
          }
          .solicitar-servicio-container20 {
            display: contents;
          }
          .solicitar-servicio-footer {
            width: 100%;
            height: 588px;
            display: flex;
            align-items: center;
            padding-top: 120px;
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-fiveunits);
            background-color: #000000;
          }
          .solicitar-servicio-content1 {
            gap: var(--dl-layout-space-threeunits);
            width: 50%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
          }
          .solicitar-servicio-details1 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
          }
          .solicitar-servicio-link27 {
            display: contents;
          }
          .solicitar-servicio-image4 {
            width: 200px;
            align-self: flex-start;
            object-fit: cover;
            text-decoration: none;
          }
          .solicitar-servicio-description {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 18px;
            line-height: 27px;
          }
          .solicitar-servicio-content2 {
            gap: var(--dl-layout-space-threeunits);
            width: 50%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
          }
          .solicitar-servicio-details2 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
          }
          .solicitar-servicio-text20 {
            color: var(--dl-color-gray-white);
            font-size: 22px;
            align-self: flex-start;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            text-transform: uppercase;
          }
          .solicitar-servicio-link28 {
            color: var(--dl-color-gray-white);
            line-height: 1.15;
            text-decoration: none;
          }
          .solicitar-servicio-link29 {
            color: var(--dl-color-gray-white);
            line-height: 1.15;
            text-decoration: none;
          }
          .solicitar-servicio-link30 {
            color: var(--dl-color-gray-white);
            line-height: 1.15;
            text-decoration: none;
          }
          .solicitar-servicio-link31 {
            color: var(--dl-color-gray-white);
            line-height: 1.15;
            text-decoration: none;
          }
          .solicitar-servicio-link32 {
            color: var(--dl-color-gray-white);
            line-height: 1.15;
            text-decoration: none;
          }
          .solicitar-servicio-link33 {
            color: var(--dl-color-gray-white);
            line-height: 1.15;
            text-decoration: none;
          }
          .solicitar-servicio-socials2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: row;
          }
          .solicitar-servicio-link34 {
            display: contents;
          }
          .solicitar-servicio-image5 {
            filter: invert(7);
            text-decoration: none;
          }
          .solicitar-servicio-link35 {
            display: contents;
          }
          .solicitar-servicio-icon18 {
            width: 24px;
            filter: invert(7);
            height: 24px;
            text-decoration: none;
          }
          .solicitar-servicio-link36 {
            display: contents;
          }
          .solicitar-servicio-image6 {
            filter: invert(7);
            text-decoration: none;
          }
          .solicitar-servicio-copyright {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 18px;
            line-height: 21px;
          }
          @media (max-width: 1200px) {
            .solicitar-servicio-header {
              background-color: #542ccc;
            }
          }
          @media (max-width: 991px) {
            .solicitar-servicio-navbar {
              padding-left: var(--dl-layout-space-threeunits);
              padding-right: var(--dl-layout-space-threeunits);
            }
            .solicitar-servicio-image1 {
              width: 88px;
              height: 87px;
            }
            .solicitar-servicio-link12 {
              font-size: 16px;
            }
            .solicitar-servicio-link14 {
              font-size: 16px;
            }
            .solicitar-servicio-link16 {
              font-size: 16px;
            }
            .solicitar-servicio-link18 {
              font-size: 16px;
            }
            .solicitar-servicio-link20 {
              font-size: 16px;
            }
            .solicitar-servicio-link22 {
              font-size: 16px;
            }
            .solicitar-servicio-link23 {
              padding-top: 1%;
              padding-left: 2%;
              padding-right: 2%;
              padding-bottom: 1%;
            }
            .solicitar-servicio-text10 {
              font-size: 14px;
              font-family: Open Sans;
              text-transform: uppercase;
            }
          }
          @media (max-width: 767px) {
            .solicitar-servicio-navbar {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
            .solicitar-servicio-image1 {
              width: var(--dl-layout-size-medium);
              height: auto;
            }
            .solicitar-servicio-desktop-menu {
              display: none;
            }
            .solicitar-servicio-burger-menu {
              display: flex;
            }
            .solicitar-servicio-icon12 {
              fill: white;
              width: var(--dl-layout-size-small);
              height: var(--dl-layout-size-small);
            }
            .solicitar-servicio-nav2 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .solicitar-servicio-container11 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .solicitar-servicio-text11 {
              color: #000000;
            }
            .solicitar-servicio-nav3 {
              gap: var(--dl-layout-space-unit);
            }
            .solicitar-servicio-text12 {
              color: #000000;
            }
            .solicitar-servicio-text13 {
              color: rgb(0, 0, 0);
            }
            .solicitar-servicio-text14 {
              color: rgb(0, 0, 0);
            }
            .solicitar-servicio-text15 {
              color: rgb(0, 0, 0);
            }
            .solicitar-servicio-text16 {
              color: rgb(0, 0, 0);
            }
            .solicitar-servicio-text17 {
              color: rgb(0, 0, 0);
            }
            .solicitar-servicio-text18 {
              color: rgb(0, 0, 0);
            }
            .solicitar-servicio-button-container {
              gap: var(--dl-layout-space-unit);
              width: 50%;
              margin-top: 0px;
              align-items: flex-start;
              flex-direction: column;
            }
            .solicitar-servicio-login {
              width: 100%;
              border-width: 1px;
              margin-right: 0px;
            }
            .solicitar-servicio-register2 {
              width: 100%;
              border-width: 1px;
            }
            .solicitar-servicio-socials1 {
              gap: var(--dl-layout-space-twounits);
            }
            .solicitar-servicio-footer {
              padding-top: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-twounits);
            }
            .solicitar-servicio-content1 {
              gap: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .solicitar-servicio-description {
              font-size: 14px;
              line-height: 21px;
            }
            .solicitar-servicio-content2 {
              gap: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .solicitar-servicio-socials2 {
              gap: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .solicitar-servicio-navbar {
              padding: var(--dl-layout-space-oneandhalfunits);
              padding-right: 24px;
            }
            .solicitar-servicio-image1 {
              width: auto;
              height: 90px;
            }
            .solicitar-servicio-mobile-menu {
              height: 100%;
              padding: 16px;
            }
            .solicitar-servicio-text11 {
              color: rgb(0, 0, 0);
              font-size: 32px;
              font-style: normal;
              font-weight: 600;
              line-height: 45px;
            }
            .solicitar-servicio-icon14 {
              width: var(--dl-layout-size-small);
              height: var(--dl-layout-size-small);
            }
            .solicitar-servicio-nav3 {
              width: 100%;
            }
            .solicitar-servicio-text12 {
              width: 100%;
              font-size: 24px;
              text-align: center;
            }
            .solicitar-servicio-text13 {
              width: 100%;
              font-size: 24px;
              text-align: center;
            }
            .solicitar-servicio-text14 {
              width: 100%;
              font-size: 24px;
              text-align: center;
            }
            .solicitar-servicio-text15 {
              width: 100%;
              font-size: 24px;
              text-align: center;
            }
            .solicitar-servicio-text16 {
              width: 100%;
              font-size: 24px;
              text-align: center;
            }
            .solicitar-servicio-text17 {
              width: 100%;
              font-size: 24px;
              text-align: center;
            }
            .solicitar-servicio-text18 {
              width: 100%;
              padding: var(--dl-layout-space-unit);
              font-size: 24px;
              text-align: center;
              border-color: var(--dl-color-gray-black);
              border-width: 1px;
              border-radius: 100px;
              background-color: #d9d9d9;
            }
            .solicitar-servicio-button-container {
              width: 100%;
            }
            .solicitar-servicio-login {
              font-size: 22px;
            }
            .solicitar-servicio-register2 {
              font-size: 22px;
            }
            .solicitar-servicio-socials1 {
              justify-content: center;
            }
            .solicitar-servicio-image2 {
              width: var(--dl-layout-size-small);
              height: var(--dl-layout-size-small);
            }
            .solicitar-servicio-icon16 {
              width: var(--dl-layout-size-small);
              height: var(--dl-layout-size-small);
            }
            .solicitar-servicio-image3 {
              width: var(--dl-layout-size-small);
              height: var(--dl-layout-size-small);
            }
            .solicitar-servicio-container12 {
              padding-top: 60px;
              padding-bottom: 60px;
            }
            .solicitar-servicio-footer {
              gap: var(--dl-layout-space-oneandhalfunits);
              height: auto;
              align-items: center;
              flex-direction: column;
            }
            .solicitar-servicio-content1 {
              width: 100%;
              max-width: 100%;
              align-self: center;
              align-items: center;
            }
            .solicitar-servicio-details1 {
              max-width: 100%;
            }
            .solicitar-servicio-image4 {
              align-self: center;
            }
            .solicitar-servicio-description {
              font-size: 18px;
              text-align: center;
            }
            .solicitar-servicio-content2 {
              width: 100%;
              align-self: center;
              align-items: center;
            }
            .solicitar-servicio-text20 {
              width: 100%;
              text-align: center;
            }
            .solicitar-servicio-link28 {
              width: 100%;
              text-align: center;
            }
            .solicitar-servicio-link29 {
              width: 100%;
              text-align: center;
            }
            .solicitar-servicio-link30 {
              width: 100%;
              text-align: center;
            }
            .solicitar-servicio-link31 {
              width: 100%;
              text-align: center;
            }
            .solicitar-servicio-link32 {
              width: 100%;
              text-align: center;
            }
            .solicitar-servicio-link33 {
              width: 100%;
              text-align: center;
            }
            .solicitar-servicio-socials2 {
              justify-content: center;
            }
            .solicitar-servicio-copyright {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default SolicitarServicio

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
