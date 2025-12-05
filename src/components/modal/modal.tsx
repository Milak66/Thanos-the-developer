import React from "react";
import './modal.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { onOpenAutorModal, setUserData } from "../reduser/reduser";

interface ModalProps {} 

const Modal: React.FC<ModalProps> = () => {
  const dispatch = useDispatch(); 
  const userData = useSelector((state: RootState) => state.aleksey.userData);
  const openAutorModal = useSelector((state: RootState) => state.aleksey.openAutorModal);

  useEffect(() => {

    if (openAutorModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [openAutorModal]);

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      dispatch(onOpenAutorModal()); 
    }
  };

  const sendData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userData.trim()) {
      alert('Пожалуйста, заполните поле!');
      return;
    }

    try {
      const response = await fetch("https://aleksey-api.onrender.com/getData", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userData }),
      });

      if (!response.ok) {
        alert('Ошибка при отправке данных');
        return;
      } else {
        alert('Данные отправлены');
      }
    } catch (err) {
      console.log(err);
      alert('Ошибка сети или сервера');
    }
  } 

  return (
    <div className="modal" onClick={handleModalClick}>
    <div className="modalValue">
      <form className="form" onSubmit={sendData}>
        <label className="textToUser"><span className="normalTextToUser">
          Напишите мне чтобы мы смогли договорится о вашем заказе</span> 
        <br/><span className="smallTextToUser">
          Обязательно укажите свой ник в дискорде или телеграме</span></label>
          <label className="textToUserToHelp" htmlFor="">Если не получается отправить здесь то напишите мне ваш заказ в телеграме - @Aleksey_kuznez</label>
        <textarea
          className="textForEmail"
          name="username"
          placeholder="текст..."
          onChange={(e) => dispatch(setUserData(e.target.value))}
        />
        <button className="btnSubmit" type="submit">
          Отправить
        </button>
      </form>
    </div>
  </div>
  );
};

export default Modal;