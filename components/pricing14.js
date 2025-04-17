import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Pricing14 = (props) => {
  const translate = useTranslations()
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <>
      <div className="pricing14-pricing23 thq-section-padding">
        <div className="pricing14-max-width thq-section-max-width">
          <div className="pricing14-section-title">
            <span className="pricing14-text100 thq-body-small">
              {props.content11 ?? (
                <Fragment>
                  <span className="pricing14-text154">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_G371L1'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <div className="pricing14-content">
              <h2 className="pricing14-text101 thq-heading-2">
                {props.heading11 ?? (
                  <Fragment>
                    <span className="pricing14-text189">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_-InOMh'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="pricing14-text102 thq-body-large">
                {props.content21 ?? (
                  <Fragment>
                    <span className="pricing14-text166">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_zm3ylt'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          {isMonthly && (
            <div className="pricing14-container1">
              <div className="pricing14-column1 thq-card">
                <div className="pricing14-price10">
                  <div className="pricing14-price11">
                    <p className="pricing14-text103 thq-body-large">
                      {props.plan12 ?? (
                        <Fragment>
                          <span className="pricing14-text170">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_1HvAu1'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                    <h3 className="pricing14-text104 thq-heading-3">
                      {props.plan1Price2 ?? (
                        <Fragment>
                          <span className="pricing14-text165">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_63XJJz'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-large pricing14-text105">
                      {props.plan1Yearly2 ?? (
                        <Fragment>
                          <span className="pricing14-text186">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_NWXuiL'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </div>
                  <div className="pricing14-list1">
                    <div className="pricing14-list-item10">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature11 ?? (
                          <Fragment>
                            <span className="pricing14-text160">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_hmwh0o'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item11">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature22 ?? (
                          <Fragment>
                            <span className="pricing14-text152">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_X8ujOp'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item12">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature32 ?? (
                          <Fragment>
                            <span className="pricing14-text155">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_7ZJGAV'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing14-button1 thq-button-outline thq-button-animated">
                  <span>
                    {props.plan1Action2 ?? (
                      <Fragment>
                        <span className="pricing14-text161">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_dubjWG'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
              <div className="pricing14-column2 thq-card">
                <div className="pricing14-price12">
                  <div className="pricing14-price13">
                    <p className="pricing14-text110 thq-body-large">
                      {props.plan21 ?? (
                        <Fragment>
                          <span className="pricing14-text172">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_jNwA_7'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                    <h3 className="pricing14-text111 thq-heading-3">
                      {props.plan2Price1 ?? (
                        <Fragment>
                          <span className="pricing14-text188">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_aGQDZ0'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-large pricing14-text112">
                      {props.plan2Yearly1 ?? (
                        <Fragment>
                          <span className="pricing14-text180">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_Q3Ljr4'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </div>
                  <div className="pricing14-list2">
                    <div className="pricing14-list-item13">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature11 ?? (
                          <Fragment>
                            <span className="pricing14-text157">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_wQV9dg'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item14">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature22 ?? (
                          <Fragment>
                            <span className="pricing14-text191">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_EyfABt'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item15">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature31 ?? (
                          <Fragment>
                            <span className="pricing14-text178">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_KySIrc'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item16">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature41 ?? (
                          <Fragment>
                            <span className="pricing14-text164">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_mOt5e1'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing14-button2 thq-button-filled thq-button-animated">
                  <span className="thq-body-small">
                    {props.plan2Action1 ?? (
                      <Fragment>
                        <span className="pricing14-text162">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_OJ8ZKj'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
              <div className="pricing14-column3 thq-card">
                <div className="pricing14-price14">
                  <div className="pricing14-price15">
                    <p className="pricing14-text118 thq-body-large">
                      {props.plan31 ?? (
                        <Fragment>
                          <span className="pricing14-text181">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_QCEu6A'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                    <h3 className="pricing14-text119 thq-heading-3">
                      {props.plan3Price2 ?? (
                        <Fragment>
                          <span className="pricing14-text199">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_4LSxYP'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="pricing14-text120 thq-body-large">
                      {props.plan3Yearly1 ?? (
                        <Fragment>
                          <span className="pricing14-text183">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_cFdBNG'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </div>
                  <div className="pricing14-list3">
                    <div className="pricing14-list-item17">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="pricing14-icon24 thq-icon-small"
                      >
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="pricing14-text121 thq-body-small">
                        {props.plan3Feature11 ?? (
                          <Fragment>
                            <span className="pricing14-text193">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_ryYQ2v'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item18">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="pricing14-icon26 thq-icon-small"
                      >
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="pricing14-text122 thq-body-small">
                        {props.plan3Feature21 ?? (
                          <Fragment>
                            <span className="pricing14-text158">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_k-eM4k'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item19">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="pricing14-icon28 thq-icon-small"
                      >
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="pricing14-text123 thq-body-small">
                        {props.plan3Feature32 ?? (
                          <Fragment>
                            <span className="pricing14-text156">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_56SfVB'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item20">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="pricing14-icon30 thq-icon-small"
                      >
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="pricing14-text124 thq-body-small">
                        {props.plan3Feature41 ?? (
                          <Fragment>
                            <span className="pricing14-text171">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_fo_2ON'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item21">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="pricing14-icon32 thq-icon-small"
                      >
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="pricing14-text125 thq-body-small">
                        {props.plan3Feature52 ?? (
                          <Fragment>
                            <span className="pricing14-text176">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_lfsFOJ'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing14-button3 thq-button-filled thq-button-animated">
                  <span className="thq-body-small">
                    {props.plan3Action2 ?? (
                      <Fragment>
                        <span className="pricing14-text179">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_O7n4jV'),
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
            <div className="pricing14-container2">
              <div className="pricing14-column4 thq-card">
                <div className="pricing14-price16">
                  <div className="pricing14-price17">
                    <span className="pricing14-text127 thq-body-large">
                      {props.plan111 ?? (
                        <Fragment>
                          <span className="pricing14-text159">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_Dg1cZW'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="pricing14-text128 thq-heading-3">
                      {props.plan1Price11 ?? (
                        <Fragment>
                          <span className="pricing14-text196">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_754AsQ'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <span className="thq-body-large">
                      {props.plan1Yearly11 ?? (
                        <Fragment>
                          <span className="pricing14-text182">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_OrQBGA'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list4">
                    <div className="pricing14-list-item22">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature111 ?? (
                          <Fragment>
                            <span className="pricing14-text184">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_1LrFP6'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item23">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature211 ?? (
                          <Fragment>
                            <span className="pricing14-text192">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_UvHfVL'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item24">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature311 ?? (
                          <Fragment>
                            <span className="pricing14-text175">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_jJBQBq'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing14-button4 thq-button-outline thq-button-animated">
                  <span className="thq-body-small">
                    {props.plan1Action11 ?? (
                      <Fragment>
                        <span className="pricing14-text168">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_k8WAtT'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
              <div className="pricing14-column5 thq-card">
                <div className="pricing14-price18">
                  <div className="pricing14-price19">
                    <span className="pricing14-text134 thq-body-large">
                      {props.plan211 ?? (
                        <Fragment>
                          <span className="pricing14-text197">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_3fCdQ_'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="pricing14-text135 thq-heading-3">
                      {props.plan2Price11 ?? (
                        <Fragment>
                          <span className="pricing14-text187">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_1BQ9Il'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <span className="thq-body-large">
                      {props.plan2Yearly11 ?? (
                        <Fragment>
                          <span className="pricing14-text201">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_gK9yLQ'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list5">
                    <div className="pricing14-list-item25">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature111 ?? (
                          <Fragment>
                            <span className="pricing14-text153">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_rX0JtJ'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item26">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature211 ?? (
                          <Fragment>
                            <span className="pricing14-text194">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_2RLdV8'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item27">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature311 ?? (
                          <Fragment>
                            <span className="pricing14-text185">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_v6gu7u'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item28">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature411 ?? (
                          <Fragment>
                            <span className="pricing14-text173">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_WvPQ0m'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing14-button5 thq-button-filled thq-button-animated">
                  <span className="thq-body-small">
                    {props.plan2Action11 ?? (
                      <Fragment>
                        <span className="pricing14-text151">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_zZtjAU'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
              <div className="pricing14-column6 thq-card">
                <div className="pricing14-price20">
                  <div className="pricing14-price21">
                    <span className="pricing14-text142 thq-body-large">
                      {props.plan311 ?? (
                        <Fragment>
                          <span className="pricing14-text195">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_PrSLF1'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="pricing14-text143 thq-heading-3">
                      {props.plan3Price11 ?? (
                        <Fragment>
                          <span className="pricing14-text177">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_XYCG7G'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <span className="thq-body-large">
                      {props.plan3Yearly11 ?? (
                        <Fragment>
                          <span className="pricing14-text174">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_vkbrLe'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list6">
                    <div className="pricing14-list-item29">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature111 ?? (
                          <Fragment>
                            <span className="pricing14-text190">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_EGkOr8'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item30">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature211 ?? (
                          <Fragment>
                            <span className="pricing14-text200">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_ukNYkh'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item31">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature311 ?? (
                          <Fragment>
                            <span className="pricing14-text198">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_kPUVPM'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item32">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature411 ?? (
                          <Fragment>
                            <span className="pricing14-text169">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_R5X6kh'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item33">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature511 ?? (
                          <Fragment>
                            <span className="pricing14-text167">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_BKJfY8'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing14-button6 thq-button-filled thq-button-animated">
                  <span className="thq-body-small">
                    {props.plan3Action11 ?? (
                      <Fragment>
                        <span className="pricing14-text163">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_0uxgbP'),
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
          .pricing14-pricing23 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .pricing14-max-width {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-section-title {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .pricing14-text100 {
            text-align: center;
          }
          .pricing14-content {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text101 {
            text-align: center;
          }
          .pricing14-text102 {
            text-align: center;
          }
          .pricing14-container1 {
            gap: var(--dl-layout-space-twounits);
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
          .pricing14-column1 {
            gap: var(--dl-layout-space-twounits);
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
          }
          .pricing14-price10 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-price11 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text103 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-text104 {
            font-size: 48px;
          }
          .pricing14-list1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-list-item10 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item11 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item12 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-button1 {
            width: 100%;
            transition: 0.3s;
          }
          .pricing14-button1:hover {
            fill: var(--dl-color-theme-secondary2);
            color: var(--dl-color-theme-secondary2);
          }
          .pricing14-column2 {
            gap: var(--dl-layout-space-twounits);
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
            background-color: #e7e7e7;
          }
          .pricing14-price12 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-price13 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text110 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-text111 {
            font-size: 48px;
          }
          .pricing14-list2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-list-item13 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item14 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item15 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item16 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-button2 {
            width: 100%;
          }
          .pricing14-column3 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-items: center;
            flex-shrink: 0;
            border-color: var(--dl-color-gray-900);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            background-color: #542ccc;
          }
          .pricing14-price14 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-price15 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text118 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-text119 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 48px;
          }
          .pricing14-text120 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
          }
          .pricing14-list3 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-list-item17 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-icon24 {
            fill: #d9d9d9;
          }
          .pricing14-text121 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
          }
          .pricing14-list-item18 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-icon26 {
            fill: #d9d9d9;
          }
          .pricing14-text122 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
          }
          .pricing14-list-item19 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-icon28 {
            fill: #d9d9d9;
          }
          .pricing14-text123 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
          }
          .pricing14-list-item20 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-icon30 {
            fill: #d9d9d9;
          }
          .pricing14-text124 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
          }
          .pricing14-list-item21 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-icon32 {
            fill: #d9d9d9;
          }
          .pricing14-text125 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
          }
          .pricing14-button3 {
            width: 100%;
          }
          .pricing14-container2 {
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
          .pricing14-column4 {
            gap: var(--dl-layout-space-twounits);
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
          }
          .pricing14-price16 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-price17 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text127 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-text128 {
            font-size: 48px;
          }
          .pricing14-list4 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-list-item22 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item23 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item24 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-button4 {
            width: 100%;
          }
          .pricing14-column5 {
            gap: var(--dl-layout-space-twounits);
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
          .pricing14-price18 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-price19 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text134 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-text135 {
            font-size: 48px;
          }
          .pricing14-list5 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-list-item25 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item26 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item27 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item28 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-button5 {
            width: 100%;
          }
          .pricing14-column6 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-items: center;
            flex-shrink: 0;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            background-color: var(--dl-color-theme-accent2);
          }
          .pricing14-price20 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-price21 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text142 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-text143 {
            font-size: 48px;
          }
          .pricing14-list6 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-list-item29 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item30 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item31 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item32 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item33 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-button6 {
            width: 100%;
          }
          .pricing14-text151 {
            display: inline-block;
          }
          .pricing14-text152 {
            display: inline-block;
          }
          .pricing14-text153 {
            display: inline-block;
          }
          .pricing14-text154 {
            display: inline-block;
          }
          .pricing14-text155 {
            display: inline-block;
          }
          .pricing14-text156 {
            display: inline-block;
          }
          .pricing14-text157 {
            display: inline-block;
          }
          .pricing14-text158 {
            display: inline-block;
          }
          .pricing14-text159 {
            display: inline-block;
          }
          .pricing14-text160 {
            display: inline-block;
          }
          .pricing14-text161 {
            display: inline-block;
          }
          .pricing14-text162 {
            display: inline-block;
          }
          .pricing14-text163 {
            display: inline-block;
          }
          .pricing14-text164 {
            display: inline-block;
          }
          .pricing14-text165 {
            display: inline-block;
          }
          .pricing14-text166 {
            display: inline-block;
          }
          .pricing14-text167 {
            display: inline-block;
          }
          .pricing14-text168 {
            display: inline-block;
          }
          .pricing14-text169 {
            display: inline-block;
          }
          .pricing14-text170 {
            display: inline-block;
          }
          .pricing14-text171 {
            display: inline-block;
          }
          .pricing14-text172 {
            display: inline-block;
          }
          .pricing14-text173 {
            display: inline-block;
          }
          .pricing14-text174 {
            display: inline-block;
          }
          .pricing14-text175 {
            display: inline-block;
          }
          .pricing14-text176 {
            display: inline-block;
          }
          .pricing14-text177 {
            display: inline-block;
          }
          .pricing14-text178 {
            display: inline-block;
          }
          .pricing14-text179 {
            display: inline-block;
          }
          .pricing14-text180 {
            display: inline-block;
          }
          .pricing14-text181 {
            display: inline-block;
          }
          .pricing14-text182 {
            display: inline-block;
          }
          .pricing14-text183 {
            display: inline-block;
          }
          .pricing14-text184 {
            display: inline-block;
          }
          .pricing14-text185 {
            display: inline-block;
          }
          .pricing14-text186 {
            display: inline-block;
          }
          .pricing14-text187 {
            display: inline-block;
          }
          .pricing14-text188 {
            display: inline-block;
          }
          .pricing14-text189 {
            display: inline-block;
          }
          .pricing14-text190 {
            display: inline-block;
          }
          .pricing14-text191 {
            display: inline-block;
          }
          .pricing14-text192 {
            display: inline-block;
          }
          .pricing14-text193 {
            display: inline-block;
          }
          .pricing14-text194 {
            display: inline-block;
          }
          .pricing14-text195 {
            display: inline-block;
          }
          .pricing14-text196 {
            display: inline-block;
          }
          .pricing14-text197 {
            display: inline-block;
          }
          .pricing14-text198 {
            display: inline-block;
          }
          .pricing14-text199 {
            display: inline-block;
          }
          .pricing14-text200 {
            display: inline-block;
          }
          .pricing14-text201 {
            display: inline-block;
          }
          @media (max-width: 1440px) {
            .pricing14-text101 {
              fill: var(--dl-color-theme-secondary1);
              color: var(--dl-color-theme-secondary1);
              padding: var(--dl-layout-space-unit);
              font-family: Source Sans Pro;
              background-color: #f18c0d;
            }
            .pricing14-column1 {
              border-color: var(--dl-color-gray-900);
            }
            .pricing14-text104 {
              font-family: Source Sans Pro;
            }
            .pricing14-text105 {
              text-align: center;
            }
            .pricing14-button1 {
              fill: rgb(84, 44, 204);
              color: rgb(84, 44, 204);
              border-color: rgb(84, 44, 204);
            }
            .pricing14-column2 {
              border-color: var(--dl-color-gray-900);
              background-color: #f7f7f7;
            }
            .pricing14-text111 {
              font-family: Source Sans Pro;
            }
            .pricing14-text112 {
              text-align: center;
            }
            .pricing14-column3 {
              background-color: #542ccc;
            }
            .pricing14-text118 {
              fill: var(--dl-color-theme-secondary2);
              color: var(--dl-color-theme-secondary2);
            }
            .pricing14-text119 {
              fill: var(--dl-color-theme-secondary1);
              color: var(--dl-color-theme-secondary1);
              font-family: Source Sans Pro;
            }
            .pricing14-text120 {
              fill: var(--dl-color-theme-secondary1);
              color: var(--dl-color-theme-secondary1);
              text-align: center;
            }
            .pricing14-icon24 {
              fill: #d9d9d9;
            }
            .pricing14-text121 {
              fill: var(--dl-color-theme-secondary2);
              color: var(--dl-color-theme-secondary2);
            }
            .pricing14-icon26 {
              fill: #d9d9d9;
            }
            .pricing14-text122 {
              fill: var(--dl-color-theme-secondary2);
              color: var(--dl-color-theme-secondary2);
            }
            .pricing14-icon28 {
              fill: #d9d9d9;
            }
            .pricing14-text123 {
              fill: var(--dl-color-theme-secondary2);
              color: var(--dl-color-theme-secondary2);
            }
            .pricing14-icon30 {
              fill: #d9d9d9;
            }
            .pricing14-text124 {
              fill: var(--dl-color-theme-secondary2);
              color: var(--dl-color-theme-secondary2);
            }
            .pricing14-icon32 {
              fill: #d9d9d9;
            }
            .pricing14-text125 {
              fill: var(--dl-color-theme-secondary2);
              color: var(--dl-color-theme-secondary2);
            }
          }
          @media (max-width: 991px) {
            .pricing14-container1 {
              flex-direction: column;
            }
            .pricing14-column3 {
              width: 100%;
            }
            .pricing14-container2 {
              flex-direction: column;
            }
            .pricing14-column6 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .pricing14-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

Pricing14.defaultProps = {
  plan2Action11: undefined,
  plan1Feature22: undefined,
  plan2Feature111: undefined,
  content11: undefined,
  plan1Feature32: undefined,
  plan3Feature32: undefined,
  plan2Feature11: undefined,
  plan3Feature21: undefined,
  plan111: undefined,
  plan1Feature11: undefined,
  plan1Action2: undefined,
  plan2Action1: undefined,
  plan3Action11: undefined,
  plan2Feature41: undefined,
  plan1Price2: undefined,
  content21: undefined,
  plan3Feature511: undefined,
  plan1Action11: undefined,
  plan3Feature411: undefined,
  plan12: undefined,
  plan3Feature41: undefined,
  plan21: undefined,
  plan2Feature411: undefined,
  plan3Yearly11: undefined,
  plan1Feature311: undefined,
  plan3Feature52: undefined,
  plan3Price11: undefined,
  plan2Feature31: undefined,
  plan3Action2: undefined,
  plan2Yearly1: undefined,
  plan31: undefined,
  plan1Yearly11: undefined,
  plan3Yearly1: undefined,
  plan1Feature111: undefined,
  plan2Feature311: undefined,
  plan1Yearly2: undefined,
  plan2Price11: undefined,
  plan2Price1: undefined,
  heading11: undefined,
  plan3Feature111: undefined,
  plan2Feature22: undefined,
  plan1Feature211: undefined,
  plan3Feature11: undefined,
  plan2Feature211: undefined,
  plan311: undefined,
  plan1Price11: undefined,
  plan211: undefined,
  plan3Feature311: undefined,
  plan3Price2: undefined,
  plan3Feature211: undefined,
  plan2Yearly11: undefined,
}

Pricing14.propTypes = {
  plan2Action11: PropTypes.element,
  plan1Feature22: PropTypes.element,
  plan2Feature111: PropTypes.element,
  content11: PropTypes.element,
  plan1Feature32: PropTypes.element,
  plan3Feature32: PropTypes.element,
  plan2Feature11: PropTypes.element,
  plan3Feature21: PropTypes.element,
  plan111: PropTypes.element,
  plan1Feature11: PropTypes.element,
  plan1Action2: PropTypes.element,
  plan2Action1: PropTypes.element,
  plan3Action11: PropTypes.element,
  plan2Feature41: PropTypes.element,
  plan1Price2: PropTypes.element,
  content21: PropTypes.element,
  plan3Feature511: PropTypes.element,
  plan1Action11: PropTypes.element,
  plan3Feature411: PropTypes.element,
  plan12: PropTypes.element,
  plan3Feature41: PropTypes.element,
  plan21: PropTypes.element,
  plan2Feature411: PropTypes.element,
  plan3Yearly11: PropTypes.element,
  plan1Feature311: PropTypes.element,
  plan3Feature52: PropTypes.element,
  plan3Price11: PropTypes.element,
  plan2Feature31: PropTypes.element,
  plan3Action2: PropTypes.element,
  plan2Yearly1: PropTypes.element,
  plan31: PropTypes.element,
  plan1Yearly11: PropTypes.element,
  plan3Yearly1: PropTypes.element,
  plan1Feature111: PropTypes.element,
  plan2Feature311: PropTypes.element,
  plan1Yearly2: PropTypes.element,
  plan2Price11: PropTypes.element,
  plan2Price1: PropTypes.element,
  heading11: PropTypes.element,
  plan3Feature111: PropTypes.element,
  plan2Feature22: PropTypes.element,
  plan1Feature211: PropTypes.element,
  plan3Feature11: PropTypes.element,
  plan2Feature211: PropTypes.element,
  plan311: PropTypes.element,
  plan1Price11: PropTypes.element,
  plan211: PropTypes.element,
  plan3Feature311: PropTypes.element,
  plan3Price2: PropTypes.element,
  plan3Feature211: PropTypes.element,
  plan2Yearly11: PropTypes.element,
}

export default Pricing14
