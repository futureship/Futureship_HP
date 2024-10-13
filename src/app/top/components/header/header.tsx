import { LogoIcon } from '@/app/top/components/header/logo-icon/logo-icon'
import styles from './header.module.scss'

export const Header: React.FC = () => {
  return (
    <>
    <div className={styles.header}>
      <LogoIcon></LogoIcon>
    </div>
    <div className={styles.wave}></div>
    </>
  )
}

