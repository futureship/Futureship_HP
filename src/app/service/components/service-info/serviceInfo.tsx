import styles from './serviceInfo.module.scss';

interface ServiceInfoChild {
  title: string;
  description: string[];
  button: string;
}

const ServiceInfo: React.FC<ServiceInfoChild> = (props) => {
  return (
    <div className={styles.serviceInfo}>
      <div className={styles.title}>{props.title}</div>

      {props.description.map((desc) => {
        return (
          <div className={styles.description}>
            {desc.split('\n').map((line) => (
              <div className={styles.line}>{line}</div>
            ))}
          </div>
        );
      })}

      <button className={styles.button}>{props.button}</button>
    </div>
  );
};
export default ServiceInfo;
