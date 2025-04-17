import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const BlogPostCard2 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className={`blog-post-card2-blog-post-card ${props.rootClassName} `}>
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
          className="blog-post-card2-image1"
        />
        <div className="blog-post-card2-container1">
          <div className="blog-post-card2-container2">
            <span className="blog-post-card2-text10">
              {props.label1 ?? (
                <Fragment>
                  <span className="blog-post-card2-text17">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_a0lxYX'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="blog-post-card2-text11">
              {props.when1 ?? (
                <Fragment>
                  <span className="blog-post-card2-text18">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_jaq9T3'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <h1 className="blog-post-card2-text12">
            {props.title1 ?? (
              <Fragment>
                <span className="blog-post-card2-text19">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_L1yZNb'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </h1>
          <span className="blog-post-card2-text13">
            {props.description1 ?? (
              <Fragment>
                <span className="blog-post-card2-text20">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_rm3yzk'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <div className="blog-post-card2-container3">
            <div className="blog-post-card2-profile">
              <img
                alt={props.profileAlt}
                src={props.profileSrc}
                className="blog-post-card2-image2"
              />
              <span className="blog-post-card2-text14">
                {props.author1 ?? (
                  <Fragment>
                    <span className="blog-post-card2-text16">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_oFC3mI'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <span className="blog-post-card2-text15">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_4CN9OZ'),
                }}
              ></span>
            </span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .blog-post-card2-blog-post-card {
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            box-shadow: 4px 4px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: stretch;
            border-radius: 20px;
            flex-direction: row;
            justify-content: space-between;
          }
          .blog-post-card2-blog-post-card:hover {
            transform: scale(1.02);
          }
          .blog-post-card2-image1 {
            width: 350px;
            height: 350px;
            object-fit: cover;
            flex-shrink: 0;
            border-radius: 0px;
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
          }
          .blog-post-card2-container1 {
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-twounits);
            padding-left: var(--dl-layout-space-twounits);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-twounits);
            justify-content: space-between;
            border-top-left-radius: 0px;
            border-top-right-radius: 20px;
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 20px;
          }
          .blog-post-card2-container2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-halfunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .blog-post-card2-text10 {
            color: var(--dl-color-gray-500);
            font-weight: 600;
            text-transform: uppercase;
          }
          .blog-post-card2-text11 {
            color: var(--dl-color-gray-500);
            font-weight: 300;
          }
          .blog-post-card2-text12 {
            margin-bottom: var(--dl-layout-space-twounits);
          }
          .blog-post-card2-text13 {
            color: var(--dl-color-gray-500);
            font-size: 1.25rem;
            margin-bottom: var(--dl-layout-space-twounits);
          }
          .blog-post-card2-container3 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .blog-post-card2-profile {
            display: flex;
            align-items: center;
          }
          .blog-post-card2-image2 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .blog-post-card2-text14 {
            font-style: normal;
            font-weight: 600;
            margin-left: var(--dl-layout-space-halfunit);
          }
          .blog-post-card2-text15 {
            color: var(--dl-color-gray-black);
            font-style: normal;
            font-weight: 500;
          }
          .blog-post-card2-text16 {
            display: inline-block;
          }
          .blog-post-card2-text17 {
            display: inline-block;
          }
          .blog-post-card2-text18 {
            display: inline-block;
          }
          .blog-post-card2-text19 {
            display: inline-block;
          }
          .blog-post-card2-text20 {
            display: inline-block;
          }

          @media (max-width: 991px) {
            .blog-post-card2-blog-post-card {
              flex-direction: row;
              justify-content: space-between;
            }
          }
          @media (max-width: 767px) {
            .blog-post-card2-blog-post-card {
              flex-direction: column;
            }
            .blog-post-card2-image1 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .blog-post-card2-container3 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .blog-post-card2-text15 {
              width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

BlogPostCard2.defaultProps = {
  author1: undefined,
  label1: undefined,
  when1: undefined,
  title1: undefined,
  description1: undefined,
  profileSrc:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&h=1200',
  imageSrc:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=1000',
  imageAlt: 'image',
  profileAlt: 'profile',
  rootClassName: '',
}

BlogPostCard2.propTypes = {
  author1: PropTypes.element,
  label1: PropTypes.element,
  when1: PropTypes.element,
  title1: PropTypes.element,
  description1: PropTypes.element,
  profileSrc: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  profileAlt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default BlogPostCard2
