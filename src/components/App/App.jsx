import userData from "../../userData.json";
import { Profile } from "../Profile/Profile";
import { FriendList } from "../FriendList/FriendList";
import friends from "../../friends.json";
import { TransactionHistory } from "../TransactionHistory/TransactionHistory";
import transactions from "../../transactions.json"
import css from"./App.module.css"


export const App = () =>{
    return <div className={css.container}>
        <Profile profile={userData} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
    </div>;



}

