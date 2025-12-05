import React, { useRef, useEffect } from "react";
import './loading.css';
import infinity from '../../assets/infinity.png';

interface LoadingProps {};

const LoadingSite: React.FC<LoadingProps> = (): React.ReactNode => {
  const darkFunRef = useRef<HTMLDivElement>(null);
  let pos = 1;
  let posAround = 1;
  let directionUp = true;

  useEffect(() => {
    const dark_fun = darkFunRef.current;

    if (!dark_fun) return;

    function darkEnergy() {
      if (directionUp) {
        if (pos < 100) {
          pos += 2;
        } else {
          directionUp = false;
          pos -= 2;
        }
      } else {
        if (pos > 1) {
          pos -= 2;
        } else {
          directionUp = true;
          pos += 2;
        }
      }
      posAround += 3;
      dark_fun!.style.transform = `rotate(${posAround}deg)`;
      dark_fun!.style.bottom = pos + 'px';

      requestAnimationFrame(darkEnergy);
    }

    darkEnergy();

    return () => {
    };
  }, []);

  return (
    <div className="loading_place">
      <div className="dark_fun" ref={darkFunRef}>
        <img className="stone" src={infinity} alt="" />
      </div>
      <div className="loadingText">Загрузка...</div>
    </div>
  );
};

export default LoadingSite;