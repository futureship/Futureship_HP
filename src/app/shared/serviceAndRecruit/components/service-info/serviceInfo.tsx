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

      {props.description.map((desc, index) => {
        return (
          <div key={index} className={styles.description}>
            {desc.split('\n').map((line, lineIndex) => (
              <div key={lineIndex.toString()} className={styles.line}>
                {line}
              </div>
            ))}
          </div>
        );
      })}
      {/* TODO：ページ作成後復活　 */}
      {/* <button className={styles.button}>{props.button}</button> */}
    </div>
  );
};
export default ServiceInfo;
