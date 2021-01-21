import React, { FC } from 'react';
import Link from 'next/link';

import styles from '../../styles/NavItem.module.css';

interface Props {
  value: string,
  href?: string,
  query?: object,
  onClick?: () => void,
}

const NavItem: FC<Props> = ({ onClick, value, href, query }) => {
  return (
    <>
      {href && query && (
        <Link href={{ pathname: href, query: {...query} }}>
          <a className={styles.link} onClick={onClick || null}>
            {value}
            <div className={styles.line}></div>
          </a>
        </Link>
      )}
      {href && !query && (
        <Link href={href}>
          <a className={styles.link} onClick={onClick || null}>
            {value}
            <div className={styles.line}></div>
          </a>
        </Link>
      )}
      {!href && (
        <a className={styles.link} onClick={onClick || null}>
          {value}
          <div className={styles.line}></div>
        </a>
      )}
    </>
  );
};

export default NavItem;