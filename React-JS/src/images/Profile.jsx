import style from "./profile.module.css"
import PIC from "./propic.jpg"
const Profile = () => {
  return (
    <section id={style.card}>
      <img src={PIC}/>
    </section>
  )
}

export default Profile
