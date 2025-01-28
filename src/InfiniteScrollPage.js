import React, { useState } from 'react';
import './pollutantPage.css';
import styles from './pollutantcard.module.css'
import { KnowMoreButton } from './Knowmorebutton';
const PollutantPage = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [rotation, setRotation] = useState(0);

  const handleSliderMove = (e) => {
    const container = document.getElementById('slider-container');
    const rect = container.getBoundingClientRect();
    const newPosition = ((e.clientX - rect.left) / rect.width) * 100;
  
    if (newPosition >= 0 && newPosition <= 100) {
      document.documentElement.style.setProperty('--slider-position', `${newPosition}%`);
      setSliderPosition(newPosition);
    }
  };
  
  const handleMouseDown = () => {
    document.addEventListener('mousemove', handleSliderMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleSliderMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <div id="slider-container" className="slider-container">
      <div className="left-panel">
      <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.mainContent}>
          <div className={styles.pollutantInfo}>
            <div className={styles.headerWrapper}>
              <div className={styles.circle} />
              <div className={styles.pollutantName}>Pollutant name</div>
            </div>
            <div className={styles.description}>
              Pollutant Description:
              <br />
              Needs to contain physical description of the pollutant,
              <br />
              History and when it was created or found….or used by mankind
              <br />
              Half life
            </div>
            <KnowMoreButton />
            <div className={styles.imageContainer}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c05deecce1d9a93f6c5f23b1d4ff068c93611042f2fc0f83338c3006ad141976?placeholderIfAbsent=true&apiKey=e7c66450d645437e80b3c1918bb89cd7"
                className={styles.pollutantImage}
                alt="Pollutant visualization"
              />
            </div>
          </div>
        </div>
        <div className={styles.sideContent}>
          <div className={styles.sideContentWrapper}>
            <div className={styles.sectionTitle}>Effects on human health:</div>
            <div className={styles.titleList}>
              Title here
              <br />
              Title here
              <br />
              Title here
              <br />
              Title here
            </div>
            <KnowMoreButton />
            <div className={styles.sectionTitle}>
              Enthalpy and sound Frequency of Pollutant
              <br />
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5c0d0a89470ab1d23b75aa92fbc9fde2020654ff4e78817c48b8da0bb5b8083?placeholderIfAbsent=true&apiKey=e7c66450d645437e80b3c1918bb89cd7"
              className={styles.frequencyImage}
              alt="Frequency visualization"
            />
            <KnowMoreButton />
          </div>
          <div className={styles.sourcesTitle}>Sources In Venice Lagoon:</div>
          <div className={styles.sourcesDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing eli.
            <br />
            Duis accumsan lacus sit amet sagittis feugiat.
            <br />
            Morbi et velit fringilla, maximus quam et,
          </div>
          <KnowMoreButton />
        </div>
      </div>
    </div>
      </div>
      <div className="right-panel"></div>
      <div
        className="slider-bar"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
      >
        <div
          className="slider-circle"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <div className="slider-half left-half">
            <span className="arrow left-arrow">&#9664;</span>
          </div>
          <div className="slider-half right-half">
            <span className="arrow right-arrow">&#9654;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PollutantPage;
