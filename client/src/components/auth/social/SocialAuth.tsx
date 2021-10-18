import styles from "../../../styles/css/SocialAuth.module.css";
import items from "./socialAuth.data";

const SocialAuth = () => {
  return (
    <>
      <div className={styles.socialMedia}>
        {items.map((item) => (
          <button key={item.id} type="button" className={styles.socialIcon}>
            <i className={item.icon} />
          </button>
        ))}
      </div>
    </>
  );
};

export default SocialAuth;
