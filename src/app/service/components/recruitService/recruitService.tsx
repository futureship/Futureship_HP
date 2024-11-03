import styles from './recruitService.module.scss';

interface RecruitServiceChild {
  title: string;
  description: string[];
  button: string;
}

const RecruitService: React.FC<RecruitServiceChild> = (props) => {
  return (
    <>
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
    </>
  );
};
export default RecruitService;
