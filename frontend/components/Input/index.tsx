import React, { FC } from 'react';

import styles from '../../styles/Input.module.css';

type inputModeType = "text" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | "search";

interface Props {
  style?: object,
  type?: string,
  inputMode?: inputModeType,
  placeholder?: string,
  pattern?: string,
  onKeyDown?: (e: React.KeyboardEvent) => void,
  onChange?: (e: React.ChangeEvent) => void,
  value?: string,
  notValid?: boolean,
}

const Input: FC<Props> = ({
  style,
  type,
  inputMode,
  placeholder,
  pattern,
  onKeyDown,
  onChange,
  value,
  notValid,
}) => {
  return (
    <div className={styles.container}>
      <input
        className={notValid ? `${styles.input} ${styles.notValid}` : styles.input}
        placeholder={placeholder || null}
        type={type || "text"}
        style={style || null}
        inputMode={inputMode || "text"}
        pattern={pattern || null}
        onKeyDown={onKeyDown || null}
        onChange={onChange || null}
        value={value}
      />
      {inputMode === 'search' && <img className={styles.image} src="/images/search.png" />}
    </div>
  )
};

export default Input;
