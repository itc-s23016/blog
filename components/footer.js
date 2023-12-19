import Logo from 'components/logo'
import styles from 'styles/footer.module.css'
const Footer = () => (
  <footer className={styles.wrapper}>
    <div className={styles.flexContainer}>
      <Logo />
      [ソーシャル]
    </div>
  </footer>
)

export default Footer
