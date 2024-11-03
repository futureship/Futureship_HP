import styles from './serviceInfo.module.scss';

interface ServiceInfoChild {
  title: string;
  description: string[];
  button: string;
}

const ServiceInfo: React.FC<ServiceInfoChild> = (props) => {
  return (
    <div>
      <div>{props.title}</div>

      {props.description.map((desc) => {
        return (
          <div>
            {desc.split('\n').map((line) => (
              <div>{line}</div>
            ))}
          </div>
        );
      })}

      <button className={styles.button}>{props.button}</button>
    </div>
  );
};
export default ServiceInfo;
