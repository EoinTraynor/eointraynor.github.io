import styles from './welcome.module.css';

const Welcome = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.typingAnimation}>
        I'm Eoin! Welcome to my site 👋
      </div>
    </div>
  )
}

export default Welcome
