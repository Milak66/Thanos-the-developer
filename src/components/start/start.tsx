import React, { useEffect, useRef } from "react";
import './start.css';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { writeText, appendChar, onOpenMenuModal } from "../reduser/reduser";

interface StartProps {} 

const Start: React.FC<StartProps> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const displayText = useSelector((state: RootState) => state.aleksey.displayText); 
  const openMenuModal = useSelector((state: RootState) => state.aleksey.openMenuModal); 
  const textA = 'Thanos the developer';
  const textB = '|';
  const speedGreeting = 100;
  const i = useRef(0);
  const showCursor = useRef(true);
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);

  const toggleCursor = (): void => {
    showCursor.current = !showCursor.current;
    dispatch(writeText(textA + (showCursor.current ? textB : '')));
    timeoutId.current = setTimeout(toggleCursor, 500);
  };

  useEffect(() => {
    const greeting = () => {
      if (i.current < textA.length) {
        const nextChar = textA.charAt(i.current);
        i.current++;
        
        dispatch(appendChar(nextChar));

        timeoutId.current = setTimeout(greeting, speedGreeting);
      } else {
        timeoutId.current = setTimeout(toggleCursor, 500);
      }
    };

    greeting();

    return () => clearTimeout(timeoutId.current as ReturnType<typeof setTimeout>);

  }, []);

  const handleOpenModal = (): void => {
    dispatch(onOpenMenuModal());
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(`.${sectionId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      dispatch(onOpenMenuModal()); 
    }
  };


  const showModal = () => {
    if (openMenuModal) {
      return (
        <div className="options">
        <div className="action" onClick={() => scrollToSection('main')}>Обо мне</div>
        <div className="action" onClick={() => scrollToSection('frilance')}>Фриланс</div>
        <div className="action" onClick={() => scrollToSection('portfolio')}>Портфолио</div>
      </div>
      )
    } else {
      return;
    }
  }

  return (
    <div className="start">
      <div className="startOfSite">
        <div className="name">{displayText}</div>
      </div>
      <div className="menu">
          <div className="titleOfSettings" onClick={handleOpenModal}>
          Разделы
          </div>
          {showModal()}
        </div>
    </div>
  );
};

export default Start;