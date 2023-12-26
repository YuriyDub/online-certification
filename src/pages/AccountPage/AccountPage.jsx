import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../../components/UI/Container';
import { IconButton } from '../../components/UI/IconButton';
import { Divider } from '../../components/UI/Divider';
import { useEffect } from 'react';
import { editProfile, getProfile } from '../../store/slices/authSlice';
import { EnrolledCourseCard } from '../../components/EnrolledCourseCard';
import { Avatar } from '../../components/UI/Avatar';
import { Loader } from '../../components/UI/Loader';
import editIcon from '../../assets/icons/edit.svg';
import styles from './AccountPage.module.scss';
import { useNavigate } from 'react-router-dom';
import { unenrollCourse } from '../../utils/network';

export const AccountPage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  const user = useSelector((state) => state.auth.user);

  const avatarHandler = (e) => {
    const avatar = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      dispatch(editProfile({ ...user, avatar: reader.result.toString() }));
    };

    reader.readAsDataURL(avatar);
  };

  const toCourse = (id) => navigate(`/enrolled-courses/${id}`);

  const unenrollFromCourse = (id) => {
    unenrollCourse(id).then(dispatch(getProfile()));
  };

  return (
    <>
      {user ? (
        <div className={styles.page}>
          <Container style={{ alignItems: 'center' }}>
            <div className={styles.avatar}>
              <IconButton
                size="small"
                onClick={(e) => {
                  document.querySelector('#avatar').click();
                }}
                className={styles.editButton}>
                <img src={editIcon} alt="editIcon" />
              </IconButton>
              <Avatar imgUrl={user.avatar} />
              <input
                type="file"
                id="avatar"
                name="avatar"
                accept="image/jpeg"
                style={{ width: '0px', height: '0px' }}
                onChange={(e) => avatarHandler(e)}
              />
            </div>
            <h1 className={styles.title}>Hello {user ? user?.username : 'User'}!</h1>
          </Container>
          <section className={styles.coursesSection}>
            <Container>
              <h2 className={styles.subTitle} style={{ color: 'var(--colors-text-secondary)' }}>
                Your Courses:
              </h2>
              <Divider />
              <div className={styles.courses}>
                {user?.enrolledCourses ? (
                  user?.enrolledCourses?.map((course) => (
                    <EnrolledCourseCard
                      key={course.courseId}
                      onDelete={() => unenrollFromCourse(course.courseId)}
                      onClick={() => toCourse(course.courseId)}
                      title={course?.title}
                      description={course?.description}
                      imgUrl={course?.image}
                      progress={course?.progress}
                      accuracy={course?.accuracy}
                      category={course?.category}
                      level={course?.level}
                      certificate={course?.certificate}
                    />
                  ))
                ) : (
                  <Loader />
                )}
              </div>
            </Container>
          </section>
          <section className={styles.profile}>
            <Container>
              <h2 className={styles.subTitle}>Profile:</h2>
              <Divider />
              <ul className={styles.description}>
                <li>
                  Username: <span>{user.username ? user.username : '*not identified'}</span>
                </li>
                <li>
                  Email: <span>{user.email ? user.email : '*not identified'}</span>
                </li>
              </ul>
            </Container>
          </section>
        </div>
      ) : (
        <Loader variant="dark" />
      )}
    </>
  );
};
