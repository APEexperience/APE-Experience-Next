import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Pricing13 = (props) => {
  const translate = useTranslations()
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <>
      <div
        className={`pricing13-pricing23 thq-section-padding ${props.rootClassName} `}
      >
        <div className="pricing13-max-width thq-section-max-width">
          <div className="pricing13-section-title">
            <span className="pricing13-text10 thq-body-small">
              {props.content11 ?? (
                <Fragment>
                  <span className="pricing13-text67">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_0PCxt_'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <div className="pricing13-content">
              <h2 className="pricing13-text11 thq-heading-2">
                {props.heading11 ?? (
                  <Fragment>
                    <span className="pricing13-text57">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_h_TGG8'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="pricing13-text12 thq-body-large">
                {props.content21 ?? (
                  <Fragment>
                    <span className="pricing13-text59">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Uck95L'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          {isMonthly && (
            <div className="pricing13-container1">
              <div className="pricing13-column1 thq-card">
                <svg
                  viewBox="0 0 1243.4285714285713 1024"
                  className="pricing13-icon10"
                >
                  <path d="M365.714 932.571l219.429-109.714v-179.429l-219.429 93.714v195.429zM329.143 673.143l230.857-98.857-230.857-98.857-230.857 98.857zM950.857 932.571l219.429-109.714v-179.429l-219.429 93.714v195.429zM914.286 673.143l230.857-98.857-230.857-98.857-230.857 98.857zM658.286 505.714l219.429-94.286v-152l-219.429 93.714v152.571zM621.714 289.143l252-108-252-108-252 108zM1243.429 585.143v237.714c0 27.429-15.429 53.143-40.571 65.143l-256 128c-10.286 5.714-21.143 8-32.571 8s-22.286-2.286-32.571-8l-256-128c-1.714-0.571-2.857-1.143-4-2.286-1.143 1.143-2.286 1.714-4 2.286l-256 128c-10.286 5.714-21.143 8-32.571 8s-22.286-2.286-32.571-8l-256-128c-25.143-12-40.571-37.714-40.571-65.143v-237.714c0-29.143 17.714-55.429 44.571-67.429l248-106.286v-228.571c0-29.143 17.714-55.429 44.571-67.429l256-109.714c9.143-4 18.857-5.714 28.571-5.714s19.429 1.714 28.571 5.714l256 109.714c26.857 12 44.571 38.286 44.571 67.429v228.571l248 106.286c27.429 12 44.571 38.286 44.571 67.429z"></path>
                </svg>
                <div className="pricing13-price1">
                  <div className="pricing13-price2">
                    <p className="pricing13-text13 thq-body-large">
                      {props.plan12 ?? (
                        <Fragment>
                          <span className="pricing13-text72">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_w1C1xj'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                    <h3 className="pricing13-text14 thq-heading-3">
                      {props.plan1Price2 ?? (
                        <Fragment>
                          <span className="pricing13-text46">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_2WkhwX'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-large">
                      {props.plan1Yearly1 ?? (
                        <Fragment>
                          <span className="pricing13-text64">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_JuDBI2'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </div>
                  <div className="pricing13-list1">
                    <div className="pricing13-list-item10">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature11 ?? (
                          <Fragment>
                            <span className="pricing13-text43">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_HqNXTQ'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing13-list-item11">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature21 ?? (
                          <Fragment>
                            <span className="pricing13-text61">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_-itJ3L'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing13-list-item12">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature32 ?? (
                          <Fragment>
                            <span className="pricing13-text74">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_Qybun9'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing13-button1 thq-button-outline thq-button-animated">
                  <span className="thq-body-small">
                    {props.plan1Action1 ?? (
                      <Fragment>
                        <span className="pricing13-text56">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_qKcltP'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
              <div className="pricing13-column2 thq-card">
                <div className="pricing13-price3">
                  <svg
                    viewBox="0 0 1243.4285714285713 1024"
                    className="pricing13-icon18"
                  >
                    <path d="M365.714 932.571l219.429-109.714v-179.429l-219.429 93.714v195.429zM329.143 673.143l230.857-98.857-230.857-98.857-230.857 98.857zM950.857 932.571l219.429-109.714v-179.429l-219.429 93.714v195.429zM914.286 673.143l230.857-98.857-230.857-98.857-230.857 98.857zM658.286 505.714l219.429-94.286v-152l-219.429 93.714v152.571zM621.714 289.143l252-108-252-108-252 108zM1243.429 585.143v237.714c0 27.429-15.429 53.143-40.571 65.143l-256 128c-10.286 5.714-21.143 8-32.571 8s-22.286-2.286-32.571-8l-256-128c-1.714-0.571-2.857-1.143-4-2.286-1.143 1.143-2.286 1.714-4 2.286l-256 128c-10.286 5.714-21.143 8-32.571 8s-22.286-2.286-32.571-8l-256-128c-25.143-12-40.571-37.714-40.571-65.143v-237.714c0-29.143 17.714-55.429 44.571-67.429l248-106.286v-228.571c0-29.143 17.714-55.429 44.571-67.429l256-109.714c9.143-4 18.857-5.714 28.571-5.714s19.429 1.714 28.571 5.714l256 109.714c26.857 12 44.571 38.286 44.571 67.429v228.571l248 106.286c27.429 12 44.571 38.286 44.571 67.429z"></path>
                  </svg>
                  <div className="pricing13-price4">
                    <p className="pricing13-text20 thq-body-large">
                      {props.plan21 ?? (
                        <Fragment>
                          <span className="pricing13-text63">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_YbetVI'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                    <h3 className="pricing13-text21 thq-heading-3">
                      {props.plan2Price2 ?? (
                        <Fragment>
                          <span className="pricing13-text48">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_cAXZA5'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="pricing13-text22 thq-body-large">
                      {props.plan2Yearly1 ?? (
                        <Fragment>
                          <span className="pricing13-text47">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_j6mMd8'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </div>
                  <div className="pricing13-list2">
                    <div className="pricing13-list-item13">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="pricing13-icon20 thq-icon-small"
                      >
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="pricing13-text23 thq-body-small">
                        {props.plan2Feature11 ?? (
                          <Fragment>
                            <span className="pricing13-text71">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_PlEPdG'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing13-list-item14">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="pricing13-icon22 thq-icon-small"
                      >
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="pricing13-text24 thq-body-small">
                        {props.plan2Feature22 ?? (
                          <Fragment>
                            <span className="pricing13-text54">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text__rdUhZ'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing13-list-item15">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="pricing13-icon24 thq-icon-small"
                      >
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="pricing13-text25 thq-body-small">
                        {props.plan2Feature32 ?? (
                          <Fragment>
                            <span className="pricing13-text52">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_Avhi7m'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing13-list-item16">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="pricing13-icon26 thq-icon-small"
                      >
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="pricing13-text26 thq-body-small">
                        {props.plan2Feature42 ?? (
                          <Fragment>
                            <span className="pricing13-text45">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_BQAcML'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing13-button2 thq-button-filled thq-button-animated">
                  <span className="thq-body-small">
                    {props.plan2Action1 ?? (
                      <Fragment>
                        <span className="pricing13-text69">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_rwdbNh'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
          )}
          {!isMonthly && (
            <div className="pricing13-container2">
              <div className="pricing13-column3 thq-card">
                <svg
                  viewBox="0 0 1243.4285714285713 1024"
                  className="pricing13-icon28"
                >
                  <path d="M365.714 932.571l219.429-109.714v-179.429l-219.429 93.714v195.429zM329.143 673.143l230.857-98.857-230.857-98.857-230.857 98.857zM950.857 932.571l219.429-109.714v-179.429l-219.429 93.714v195.429zM914.286 673.143l230.857-98.857-230.857-98.857-230.857 98.857zM658.286 505.714l219.429-94.286v-152l-219.429 93.714v152.571zM621.714 289.143l252-108-252-108-252 108zM1243.429 585.143v237.714c0 27.429-15.429 53.143-40.571 65.143l-256 128c-10.286 5.714-21.143 8-32.571 8s-22.286-2.286-32.571-8l-256-128c-1.714-0.571-2.857-1.143-4-2.286-1.143 1.143-2.286 1.714-4 2.286l-256 128c-10.286 5.714-21.143 8-32.571 8s-22.286-2.286-32.571-8l-256-128c-25.143-12-40.571-37.714-40.571-65.143v-237.714c0-29.143 17.714-55.429 44.571-67.429l248-106.286v-228.571c0-29.143 17.714-55.429 44.571-67.429l256-109.714c9.143-4 18.857-5.714 28.571-5.714s19.429 1.714 28.571 5.714l256 109.714c26.857 12 44.571 38.286 44.571 67.429v228.571l248 106.286c27.429 12 44.571 38.286 44.571 67.429z"></path>
                </svg>
                <div className="pricing13-price5">
                  <div className="pricing13-price6">
                    <span className="pricing13-text28 thq-body-large">
                      {props.plan111 ?? (
                        <Fragment>
                          <span className="pricing13-text65">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_CSzDoD'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="pricing13-text29 thq-heading-3">
                      {props.plan1Price11 ?? (
                        <Fragment>
                          <span className="pricing13-text51">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_AuB5NT'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <span className="thq-body-large">
                      {props.plan1Yearly11 ?? (
                        <Fragment>
                          <span className="pricing13-text68">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_49a20X'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing13-list3">
                    <div className="pricing13-list-item17">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature111 ?? (
                          <Fragment>
                            <span className="pricing13-text50">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_S1Bpnw'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing13-list-item18">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature211 ?? (
                          <Fragment>
                            <span className="pricing13-text62">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_dfNI6d'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing13-list-item19">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature311 ?? (
                          <Fragment>
                            <span className="pricing13-text75">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_YtjswU'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing13-button3 thq-button-outline thq-button-animated">
                  <span className="thq-body-small">
                    {props.plan1Action11 ?? (
                      <Fragment>
                        <span className="pricing13-text49">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_z88jRF'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
              <div className="pricing13-column4 thq-card">
                <div className="pricing13-price7">
                  <svg
                    viewBox="0 0 1243.4285714285713 1024"
                    className="pricing13-icon36"
                  >
                    <path d="M365.714 932.571l219.429-109.714v-179.429l-219.429 93.714v195.429zM329.143 673.143l230.857-98.857-230.857-98.857-230.857 98.857zM950.857 932.571l219.429-109.714v-179.429l-219.429 93.714v195.429zM914.286 673.143l230.857-98.857-230.857-98.857-230.857 98.857zM658.286 505.714l219.429-94.286v-152l-219.429 93.714v152.571zM621.714 289.143l252-108-252-108-252 108zM1243.429 585.143v237.714c0 27.429-15.429 53.143-40.571 65.143l-256 128c-10.286 5.714-21.143 8-32.571 8s-22.286-2.286-32.571-8l-256-128c-1.714-0.571-2.857-1.143-4-2.286-1.143 1.143-2.286 1.714-4 2.286l-256 128c-10.286 5.714-21.143 8-32.571 8s-22.286-2.286-32.571-8l-256-128c-25.143-12-40.571-37.714-40.571-65.143v-237.714c0-29.143 17.714-55.429 44.571-67.429l248-106.286v-228.571c0-29.143 17.714-55.429 44.571-67.429l256-109.714c9.143-4 18.857-5.714 28.571-5.714s19.429 1.714 28.571 5.714l256 109.714c26.857 12 44.571 38.286 44.571 67.429v228.571l248 106.286c27.429 12 44.571 38.286 44.571 67.429z"></path>
                  </svg>
                  <div className="pricing13-price8">
                    <span className="pricing13-text35 thq-body-large">
                      {props.plan211 ?? (
                        <Fragment>
                          <span className="pricing13-text53">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_DYurjR'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="pricing13-text36 thq-heading-3">
                      {props.plan2Price11 ?? (
                        <Fragment>
                          <span className="pricing13-text70">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_tJ_pkK'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <span className="thq-body-large">
                      {props.plan2Yearly11 ?? (
                        <Fragment>
                          <span className="pricing13-text44">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_8KIg8G'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing13-list4">
                    <div className="pricing13-list-item20">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature111 ?? (
                          <Fragment>
                            <span className="pricing13-text66">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_MR_Bq7'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing13-list-item21">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature211 ?? (
                          <Fragment>
                            <span className="pricing13-text60">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_sbPEVR'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing13-list-item22">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature311 ?? (
                          <Fragment>
                            <span className="pricing13-text58">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_4Yq4oH'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing13-list-item23">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature411 ?? (
                          <Fragment>
                            <span className="pricing13-text73">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_j4CqMx'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing13-button4 thq-button-filled thq-button-animated">
                  <span className="thq-body-small">
                    {props.plan2Action11 ?? (
                      <Fragment>
                        <span className="pricing13-text55">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_XVfo6z'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <style jsx>
        {`
          .pricing13-pricing23 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .pricing13-max-width {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .pricing13-section-title {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .pricing13-text10 {
            text-align: center;
          }
          .pricing13-content {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing13-text11 {
            text-align: center;
          }
          .pricing13-text12 {
            text-align: center;
          }
          .pricing13-container1 {
            gap: 32px;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .pricing13-column1 {
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-gray-900);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            background-color: var(--dl-color-theme-accent1);
          }
          .pricing13-icon10 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            align-self: flex-end;
          }
          .pricing13-price1 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing13-price2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing13-text13 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing13-text14 {
            font-size: 48px;
          }
          .pricing13-list1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing13-list-item10 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing13-list-item11 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing13-list-item12 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing13-button1 {
            width: 100%;
          }
          .pricing13-column2 {
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-gray-900);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            background-color: #542ccc;
          }
          .pricing13-price3 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing13-icon18 {
            fill: #d9d9d9;
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            align-self: flex-end;
          }
          .pricing13-price4 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing13-text20 {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            font-style: normal;
            font-weight: 600;
          }
          .pricing13-text21 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 48px;
          }
          .pricing13-text22 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
          }
          .pricing13-list2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing13-list-item13 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing13-icon20 {
            fill: #d9d9d9;
          }
          .pricing13-text23 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
          }
          .pricing13-list-item14 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing13-icon22 {
            fill: #d9d9d9;
          }
          .pricing13-text24 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
          }
          .pricing13-list-item15 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing13-icon24 {
            fill: #d9d9d9;
          }
          .pricing13-text25 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
          }
          .pricing13-list-item16 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing13-icon26 {
            fill: #d9d9d9;
          }
          .pricing13-text26 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
          }
          .pricing13-button2 {
            width: 100%;
          }
          .pricing13-container2 {
            gap: 32px;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .pricing13-column3 {
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            background-color: var(--dl-color-theme-accent1);
          }
          .pricing13-icon28 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            align-self: flex-end;
          }
          .pricing13-price5 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing13-price6 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing13-text28 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing13-text29 {
            font-size: 48px;
          }
          .pricing13-list3 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing13-list-item17 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing13-list-item18 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing13-list-item19 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing13-button3 {
            width: 100%;
          }
          .pricing13-column4 {
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            background-color: var(--dl-color-theme-accent2);
          }
          .pricing13-price7 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing13-icon36 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            align-self: flex-end;
          }
          .pricing13-price8 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing13-text35 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing13-text36 {
            font-size: 48px;
          }
          .pricing13-list4 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing13-list-item20 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing13-list-item21 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing13-list-item22 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing13-list-item23 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing13-button4 {
            width: 100%;
          }
          .pricing13-text43 {
            display: inline-block;
          }
          .pricing13-text44 {
            display: inline-block;
          }
          .pricing13-text45 {
            display: inline-block;
          }
          .pricing13-text46 {
            display: inline-block;
          }
          .pricing13-text47 {
            display: inline-block;
          }
          .pricing13-text48 {
            display: inline-block;
          }
          .pricing13-text49 {
            display: inline-block;
          }
          .pricing13-text50 {
            display: inline-block;
          }
          .pricing13-text51 {
            display: inline-block;
          }
          .pricing13-text52 {
            display: inline-block;
          }
          .pricing13-text53 {
            display: inline-block;
          }
          .pricing13-text54 {
            display: inline-block;
          }
          .pricing13-text55 {
            display: inline-block;
          }
          .pricing13-text56 {
            display: inline-block;
          }
          .pricing13-text57 {
            display: inline-block;
          }
          .pricing13-text58 {
            display: inline-block;
          }
          .pricing13-text59 {
            display: inline-block;
          }
          .pricing13-text60 {
            display: inline-block;
          }
          .pricing13-text61 {
            display: inline-block;
          }
          .pricing13-text62 {
            display: inline-block;
          }
          .pricing13-text63 {
            display: inline-block;
          }
          .pricing13-text64 {
            display: inline-block;
          }
          .pricing13-text65 {
            display: inline-block;
          }
          .pricing13-text66 {
            display: inline-block;
          }
          .pricing13-text67 {
            display: inline-block;
          }
          .pricing13-text68 {
            display: inline-block;
          }
          .pricing13-text69 {
            display: inline-block;
          }
          .pricing13-text70 {
            display: inline-block;
          }
          .pricing13-text71 {
            display: inline-block;
          }
          .pricing13-text72 {
            display: inline-block;
          }
          .pricing13-text73 {
            display: inline-block;
          }
          .pricing13-text74 {
            display: inline-block;
          }
          .pricing13-text75 {
            display: inline-block;
          }

          @media (max-width: 1440px) {
            .pricing13-text11 {
              fill: var(--dl-color-theme-secondary1);
              color: var(--dl-color-theme-secondary1);
              padding: var(--dl-layout-space-unit);
              font-family: Source Sans Pro;
              background-color: #f18c0d;
            }
            .pricing13-column1 {
              border-color: var(--dl-color-gray-900);
            }
            .pricing13-text14 {
              font-family: Source Sans Pro;
            }
            .pricing13-column2 {
              border-color: var(--dl-color-gray-900);
              background-color: #f7f7f7;
            }
            .pricing13-text21 {
              font-family: Source Sans Pro;
            }
            .pricing13root-class-name {
              background-color: #ececec;
            }
          }
          @media (max-width: 991px) {
            .pricing13-container1 {
              flex-direction: column;
            }
            .pricing13-container2 {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .pricing13-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .pricing13-button1 {
              width: 100%;
            }
            .pricing13-text20 {
              fill: var(--dl-color-theme-neutral-dark);
              color: var(--dl-color-theme-neutral-dark);
            }
            .pricing13-text21 {
              fill: var(--dl-color-theme-neutral-dark);
              color: var(--dl-color-theme-neutral-dark);
            }
            .pricing13-text22 {
              fill: var(--dl-color-theme-neutral-dark);
              color: var(--dl-color-theme-neutral-dark);
            }
            .pricing13-text23 {
              fill: var(--dl-color-theme-neutral-dark);
              color: var(--dl-color-theme-neutral-dark);
            }
            .pricing13-text24 {
              fill: var(--dl-color-theme-neutral-dark);
              color: var(--dl-color-theme-neutral-dark);
            }
            .pricing13-text25 {
              fill: var(--dl-color-theme-neutral-dark);
              color: var(--dl-color-theme-neutral-dark);
            }
            .pricing13-text26 {
              fill: var(--dl-color-theme-neutral-dark);
              color: var(--dl-color-theme-neutral-dark);
            }
            .pricing13-button2 {
              width: 100%;
            }
            .pricing13-button3 {
              width: 100%;
            }
            .pricing13-button4 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Pricing13.defaultProps = {
  plan1Feature11: undefined,
  plan2Yearly11: undefined,
  plan2Feature42: undefined,
  plan1Price2: undefined,
  plan2Yearly1: undefined,
  plan2Price2: undefined,
  plan1Action11: undefined,
  plan1Feature111: undefined,
  plan1Price11: undefined,
  rootClassName: '',
  plan2Feature32: undefined,
  plan211: undefined,
  plan2Feature22: undefined,
  plan2Action11: undefined,
  plan1Action1: undefined,
  heading11: undefined,
  plan2Feature311: undefined,
  content21: undefined,
  plan2Feature211: undefined,
  plan1Feature21: undefined,
  plan1Feature211: undefined,
  plan21: undefined,
  plan1Yearly1: undefined,
  plan111: undefined,
  plan2Feature111: undefined,
  content11: undefined,
  plan1Yearly11: undefined,
  plan2Action1: undefined,
  plan2Price11: undefined,
  plan2Feature11: undefined,
  plan12: undefined,
  plan2Feature411: undefined,
  plan1Feature32: undefined,
  plan1Feature311: undefined,
}

Pricing13.propTypes = {
  plan1Feature11: PropTypes.element,
  plan2Yearly11: PropTypes.element,
  plan2Feature42: PropTypes.element,
  plan1Price2: PropTypes.element,
  plan2Yearly1: PropTypes.element,
  plan2Price2: PropTypes.element,
  plan1Action11: PropTypes.element,
  plan1Feature111: PropTypes.element,
  plan1Price11: PropTypes.element,
  rootClassName: PropTypes.string,
  plan2Feature32: PropTypes.element,
  plan211: PropTypes.element,
  plan2Feature22: PropTypes.element,
  plan2Action11: PropTypes.element,
  plan1Action1: PropTypes.element,
  heading11: PropTypes.element,
  plan2Feature311: PropTypes.element,
  content21: PropTypes.element,
  plan2Feature211: PropTypes.element,
  plan1Feature21: PropTypes.element,
  plan1Feature211: PropTypes.element,
  plan21: PropTypes.element,
  plan1Yearly1: PropTypes.element,
  plan111: PropTypes.element,
  plan2Feature111: PropTypes.element,
  content11: PropTypes.element,
  plan1Yearly11: PropTypes.element,
  plan2Action1: PropTypes.element,
  plan2Price11: PropTypes.element,
  plan2Feature11: PropTypes.element,
  plan12: PropTypes.element,
  plan2Feature411: PropTypes.element,
  plan1Feature32: PropTypes.element,
  plan1Feature311: PropTypes.element,
}

export default Pricing13
