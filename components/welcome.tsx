import styles from './welcome.module.css';

const Welcome = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.typingAnimation}>
        Welcome 👋
      </div>
    </div>
  )
}

export default Welcome
