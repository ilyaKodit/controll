import React, { FC } from 'react';

import styles from '../../styles/Modal.module.css';

interface Props {
  isOpen: boolean,
  width?: string,
  height?: string,
  children?: React.ReactNode,
  ok: () => void,
  cencel: () => void,
  okName?: string,
  cencelName?: string,
  minHeight?: string,
  decoration?: boolean,
}

const Modal: FC<Props> = ({ 
  isOpen,
  width,
  height,
  minHeight,
  children,
  ok,
  cencel,
  okName,
  cencelName,
  decoration,
}) => {
  const newStyle = {
    modal: {
      top: minHeight || height ? `calc(50% - ${minHeight || height} / 2)` : "calc(50% - 150px)",
      left: width ? `calc(50% - ${width} / 2)` : "calc(50% - 100px)",
      width: width || "auto",
      height: height || "auto",
      minHeight: minHeight || "200px",
    },
  }  

  return (
    <div className={isOpen ? `${styles.container} ${styles.open}` : styles.container} >
      <div style={newStyle.modal} className={styles.modal}>
        <div className={styles.contentWrapper}>
          {decoration && <div className={styles.decoration} />}
          <div className={styles.content}>
            {children}
          </div>
          <div className={styles.buttonGroup}>
            <button className={`${styles.okButton} ${styles.button}`} onClick={ok}>{okName || "Ок"}</button>
            <button className={`${styles.cencelButton} ${styles.button}`} onClick={cencel}>{cencelName || "Отмена"}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;