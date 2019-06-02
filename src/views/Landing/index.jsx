// @flow
import React from 'react';
import Panel from '../../components/Panel';
import {
  breakPoints,
  colors,
  hoverColors,
  fontSize,
  fontWeight,
  zIndex
} from '../../utils/themes.jsx';
import { urls } from '../../utils/urls.jsx';
import picture from '../../static/personal_picture.png';

const PANEL_HEIGHT = '100vh';
const SIDE_PANEL_WIDTH = '40%';
const MAIN_PANEL_WIDTH = '60%';

const Landing = () => (
  <React.Fragment>
    <div className="leftPanel">
      <div className="titleWrapper">
        <img src={picture} alt="" className="image" />
        <div className="title">Hey, I'm</div>
        <div className="title">Richard</div>
        <div className="description">
          I'm currently creating the future of maths education{' '}
          <a href={urls.mathspaceTwitter} className="link">
            @Mathspace
          </a>{' '}
          as a frontend product engineer. Now I'm sharing what I've learned with
          those interested in this space.
        </div>
        <div className="button">
          <a href={urls.mailTo} className="buttonLink">
            Get in touch!
          </a>
        </div>
      </div>
    </div>
    <div className="rightPanel">
      <Panel height={PANEL_HEIGHT} backgroundColor={colors.astronaut}>
        <div className="panelWrapper">
          <div
            style={{
              maxWidth: 350,
              position: 'absolute',
              top: '10%',
              left: '5%'
            }}
          >
            {'<Learn To Code />'}
          </div>
        </div>
      </Panel>
    </div>
    <style jsx>
      {`
        .leftPanel {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          padding: ${fontSize.xlarge}px;
          box-sizing: border-box;
          background-color: ${colors.athensGray};
        }
        .titleWrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          max-width: 80%;
        }
        .image {
          width: 60%;
          border-radius: 50%;
          margin: 24px auto;
          max-width: 250px;
        }
        .title {
          text-transform: uppercase;
          font-size: ${fontSize.xxlarge}px;
          font-weight: ${fontWeight.semibold};
          color: ${colors.mako};
        }
        .description {
          font-size: ${fontSize.normal}px;
          margin-top: 24px;
          font-weight: ${fontWeight.light};
          color: ${colors.cloudBurst};
        }
        .link {
          font-size: 15px;
          color: ${colors.dodgerBlue};
          text-decoration: none;
        }
        .button {
          border-radius: 300px;
          padding: 16px 16px;
          background-color: ${colors.cornflowerBlue};
          width: 175px;
          margin-top: 48px;
          font-size: ${fontSize.medium}px;
          font-weight: ${fontWeight.light};
          text-align: center;
          cursor: pointer;
          transition: background-color 0.5s ease;
        }
        .button:hover {
          background-color: ${hoverColors.cornflowerBlue};
          transition: background-color 0.5s ease;
        }
        .buttonLink {
          text-decoration: none;
          width: 100%;
          color: ${colors.white};
        }
        .panelWrapper {
          color: ${colors.tropicalBlue};
          font-size: 64px;
          display: flex;
          justify-content: center;
          flex-direction: column;
          height: 100%;
          position: relative;
        }
        .fixedHeader {
          display: none;
        }
        @media (min-width: ${breakPoints.large}px) {
          .leftPanel {
            position: fixed;
            left: 0;
            top: 0;
            width: ${SIDE_PANEL_WIDTH};
            height: 100vh;
          }
          .rightPanel {
            width: ${MAIN_PANEL_WIDTH};
            margin-left: ${SIDE_PANEL_WIDTH};
          }
          .fixedHeader {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 60px;
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            z-index: ${zIndex.header};
            margin-left: ${SIDE_PANEL_WIDTH};
          }
        }
      `}
    </style>
  </React.Fragment>
);
export default Landing;
