import { FunctionComponent } from 'react';
import styles from './WelcomeAnimation.module.css';

const WelcomeAnimation: FunctionComponent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.typingAnimation}>Welcome 👋</div>
    </div>
  );
};

export default WelcomeAnimation;
