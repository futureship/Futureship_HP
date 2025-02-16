import { LogoIcon } from '@/app/pages/top/components/header/logo-icon/logo-icon'
import styles from './header.module.scss'
import { HeaderMenu } from '@/app/pages/top/components/header/header-menu/header-menu'

export const Header: React.FC = () => {
  return (
    <>
    <div className={styles.header}>
      <LogoIcon></LogoIcon>
      <HeaderMenu></HeaderMenu>
    </div>
    <div className={styles.wave}></div>
    </>
  )
}

