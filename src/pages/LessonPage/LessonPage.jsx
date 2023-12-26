import { useNavigate, useParams } from 'react-router-dom';
import { Container } from '../../components/UI/Container';
import { Loader } from '../../components/UI/Loader';
import { Divider } from '../../components/UI/Divider';
import { Controller, useForm } from 'react-hook-form';
import { submitTest } from '../../utils/network';
import { Button } from '../../components/UI/Button';
import YouTube from 'react-youtube';
import useLessonQuery from '../../hooks/useLessonQuery';
import styles from './LessonPage.module.scss';

export const LessonPage = () => {
  const { courseId, id } = useParams();

  const navigate = useNavigate();

  const {
    data: {
      material,
      // nextLesson,
      tests,
    },
    isFetching,
    isError,
  } = useLessonQuery(courseId, id);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm('onSubmit');

  const onSubmit = (data) => {
    data = Object.values(data).map(Number);
    submitTest(courseId, id, { userAnswers: data });
    navigate(-1);
  };

  const videoOptions = {
    playerVars: {
      autoplay: 1,
    },
    height: '100%',
    width: '100%',
    videoId: material?.match(
      /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/,
    )[1],
  };

  return (
    <div className={styles.page}>
      <Container>
        <Button variant="inverse" onClick={() => navigate(-1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          Back
        </Button>
        <Divider />
        {isFetching ? (
          <Loader className={styles.loader} variant={'dark'} />
        ) : isError ? (
          <h1>Error</h1>
        ) : (
          <section className={styles.body}>
            {material ? (
              <YouTube
                videoId={videoOptions.videoId}
                opts={videoOptions}
                onReady={(event) => {
                  event.target.playVideo();
                }}
                className={styles.video}
              />
            ) : null}
            {tests.map((t, index) => (
              <form onSubmit={handleSubmit(onSubmit)} key={index}>
                <h1>{t.title}</h1>
                <Divider />
                {t.questions.map((question, index) => (
                  <div className={styles.question} key={question._id}>
                    <p>{question.text}</p>
                    <span>{errors[`question${index}`]?.message}</span>
                    {question.options.map((option, optionIndex) => (
                      <div key={optionIndex}>
                        <Controller
                          name={`question${index}`}
                          control={control}
                          defaultValue=""
                          rules={{ required: 'this question is required' }}
                          render={({ field }) => (
                            <input
                              {...field}
                              type="radio"
                              value={optionIndex}
                              id={`question${index}_option${optionIndex}`}
                            />
                          )}
                        />
                        <label htmlFor={`question${index}_option${optionIndex}`}>{option}</label>
                      </div>
                    ))}
                  </div>
                ))}
                <Button variant="gradient" type="submit">
                  Submit
                </Button>
              </form>
            ))}
          </section>
        )}
      </Container>
    </div>
  );
};
