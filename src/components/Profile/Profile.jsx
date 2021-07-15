import { Container } from "react-bootstrap";
import "./Profile.scss";

const Profile = () => {
  return (
    <Container fluid="lg">
      <div className="profile-container">
        <div className="profile-cover">
          {/* <img
            src="https://scontent.fcpq4-1.fna.fbcdn.net/v/t1.6435-9/164678484_4025117590899116_5462443839119444037_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=e3f864&_nc_ohc=LVQS90yc_s8AX9H7QQt&_nc_ht=scontent.fcpq4-1.fna&oh=6d8fa1c92c7ba65587174b1962854a2d&oe=60F10752"
            alt=""
          /> */}
        </div>
        <div className="profile-pic">
          <img
            src="https://scontent.fcpq4-1.fna.fbcdn.net/v/t1.6435-9/213870574_4324005317677007_675196879718110357_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=75DkT6DjoHgAX9P8hg5&_nc_ht=scontent.fcpq4-1.fna&oh=afa8fb54266f89a0ff6b0b5346cb84d9&oe=60F19F38"
            alt=""
          />
        </div>

        <div className="profile-desc">
          <h1>Matheus Paes</h1>
          <span>Computer Science student.</span>
          <span>Frontend Web Developer at Soft Informática.</span>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
