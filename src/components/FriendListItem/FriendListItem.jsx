import clsx from "clsx"
import css from "./FriendListItem.module.css"

export const FriendListItem = ({ friendsItem: { avatar, name, isOnline } }) => {
  const statusOnline = clsx( css.status, {
    [css.isOnline]: isOnline,
    [css.isOffline]: !isOnline,

  });
    return <div className="item">
  <img className="avatar" src={avatar} alt="Avatar" width="48" />
  <p className={css.name}>{name}</p>
      <p className={statusOnline}>{isOnline ? "Online" : "Offline"}</p>
  </div>
  
}