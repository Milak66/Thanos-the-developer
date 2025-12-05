import React from "react";
import './intro.css';
import { useEffect, useRef } from "react";
import redStone from '../../assets/redStone.png';
import orangeStone from '../../assets/orangeStone.png';
import yellowStone from '../../assets/yellowStone.png';
import greenStone from '../../assets/greenStone.png';
import blueStone from '../../assets/blueStone.png';
import purpleStone from '../../assets/purpleStone.png';

interface IntroProps {};

const Intro: React.FC<IntroProps> = (): React.JSX.Element => {
    const introAnimation = useRef<HTMLDivElement>(null);
    let posAround = 1;

    useEffect(() => {
        const animationDiv = introAnimation.current;

        function moveAround() {
            posAround += 0.5;
            animationDiv!.style.transform = `rotate(${posAround}deg)`;

            requestAnimationFrame(moveAround);
        }

        moveAround();

    }, []);

    return (
        <div className="intro">
            <div className="introGretting">
            <div className="autorName">
                <p className="nameText">
                    Добро пожаловть <br />
                    на Thanos website!
                </p>
            </div>
            <div className="introAnimation" ref={introAnimation}>
                <div className="stonePlace">
                <img className="stone" src={redStone} alt="" />
                </div>
                <div className="stonePlace">
                <img className="stone" src={orangeStone} alt="" />
                </div>
                <div className="stonePlace">
                <img className="stone" src={yellowStone} alt="" />
                </div>
                <div className="stonePlace">
                <img className="stone" src={greenStone} alt="" />
                </div>
                <div className="stonePlace">
                <img className="stone" src={blueStone} alt="" />
                </div>
                <div className="stonePlace">
                <img className="stone" src={purpleStone} alt="" />
                </div>
            </div>
            </div>
        </div>
    )
}

export default Intro;