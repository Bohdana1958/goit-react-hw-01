import css from "./Profile.module.css"


export const Profile = ({ profile: { avatar, username, tag, location, stats } }) => {
    return  <div className={css.profile}>
  <div className={css.description}>
    <img
                src={avatar}
                width="180"
                height="180"
      alt="User avatar"
      className={css.avatar}
    />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
  </div>


  <ul className={css.stats}>
    <li className={css.stat}>
      <span className={css.label}>Followers </span>
      <span className={css.value}>{stats.followers}</span>
    </li>
    <li className={css.stat}>
      <span className={css.label}>Views </span>
      <span className={css.value}>{stats.views}</span>
    </li>
    <li className={css.stat}>
      <span className={css.label}>Likes </span>
      <span className={css.value}>{stats.likes}</span>
    </li>
  </ul>
</div>
        
};