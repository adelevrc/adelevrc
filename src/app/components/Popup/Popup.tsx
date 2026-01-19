"use-client";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./popup.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
interface Props {
  setPopupIsOpen: Dispatch<SetStateAction<boolean>>;
  children: React.ReactElement;
}
const Popup = ({ setPopupIsOpen, children }: Props) => {
  const [closing, setClosing] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const labelRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      window.scrollTo(0, scrollY);
    };
  }, []);
  const closePopup = () => {
    setClosing(true);
    setTimeout(() => {
      setPopupIsOpen(false);
      setClosing(false);
    }, 400);
  };

  return (
    <div className={styles.overlay} onClick={closePopup}>
      <div
        className={`${styles.popup} ${
          closing ? styles.popupOut : styles.popupIn
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closePopup}
          className={styles.closeButton}
          ref={buttonRef}
          aria-label='Fermer la fenêtre'
        >
          <span className={styles.label} ref={labelRef}>
            Fermer <FontAwesomeIcon icon={faXmark} />
          </span>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Popup;
