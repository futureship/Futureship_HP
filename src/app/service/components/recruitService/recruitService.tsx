import styles from './recruitService.module.scss';

interface RecruitServiceChild {
  title: string;
  description: string[];
  button: string;
}

const RecruitService: React.FC<RecruitServiceChild> = (props) => {
  return (
    <div className={styles.recruitService}>
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
export default RecruitService;
