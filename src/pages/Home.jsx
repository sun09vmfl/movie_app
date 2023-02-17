import React, { useState } from 'react';

import Vid from '../video/slamdunk.mp4';
import ReactPlayer from 'react-player';
import sts from '../images/sts.jpeg';
import jdm from '../images/jdm.jpeg';
import stw from '../images/stw.jpeg';
import ccs from '../images/ccs.jpeg';
import kbh from '../images/kbh.jpeg';
import { Link } from 'react-router-dom';

export default function Home(props) {
  const [isVideoLoaded, setIsVideoLoaded] = useState();
  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };
  return (
    <div>
      <div className="slamdunk">
        <h1>TODAY'S MOVIE</h1>
        <ReactPlayer
          style={{ width: '100vw', height: '900px' }}
          className="video-box"
          width="99vw"
          height="800px"
          url={Vid}
          playing={true}
          controls={true}
          loop={true}
          muted={true}
          playsinline={true}
          onReady={onLoadedData}
        />
        {/* <video muted autoPlay loop>
          <source src="/video/slamdunk.mp4" type="video/mp4" />
        </video> */}
        <Link to="movie/0">
          <button>
            <p>슬램덩크 이동</p>
          </button>
        </Link>

        <h2>THE FIRST SLAM DUNK</h2>
        <div className="slamdunk-box">
          <div className="info">
            <div className="pr">
              <h4>소개</h4>
              <p>전국 제패를 꿈꾸는 북산고 농구부 5인방의 꿈과 열정, 멈추지 않는 도전을 그린 영화</p>
            </div>
            <div className="chr">
              <div className="chr-flex">
                <figure>
                  <img src={sts} alt="송태섭" />
                </figure>
                <figure>
                  <img src={jdm} alt="정대만" />
                </figure>
                <figure>
                  <img src={stw} alt="서태웅" />
                </figure>
                <figure>
                  <img src={ccs} alt="채치수" />
                </figure>
                <figure>
                  <img src={kbh} alt="강백호" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
