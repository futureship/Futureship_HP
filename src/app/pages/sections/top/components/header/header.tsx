import { HeaderMenu } from '@app/pages/sections/top/components/header/header-menu/header-menu';
import { LogoIcon } from '@app/pages/sections/top/components/header/logo-icon/logo-icon';
import styles from './header.module.scss';

export const Header: React.FC = () => {
  return (
    <>
      <div className={styles.header}>
        <LogoIcon></LogoIcon>
        <HeaderMenu></HeaderMenu>
      </div>
      <div className={styles.wave}></div>
    </>
  );
};
