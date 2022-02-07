import Link from 'next/link';
import * as React from 'react';
import styles from './layout.module.css'

type Props = {
    home: boolean,
    parent: {name: string, path: string}
}

const Layout: React.FC<Props> = ({ home, parent, children }) => {
  return (
    <>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href={parent.path}>
            <a>← Back to {parent.name}</a>
          </Link>
        </div>
      )}
    </>
  );
};

export default Layout;
