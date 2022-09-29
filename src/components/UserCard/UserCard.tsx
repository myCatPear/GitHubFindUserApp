import styles from './UserCard.module.scss';
import {UserStat} from "components/UserStat";
import {LocalGithubUser} from "types";
import {UserTitle} from "components/UserTitle";
import {UserInfo} from "components/UserInfo";

interface UserCardProps extends LocalGithubUser {
}

export const UserCard = (props: UserCardProps) => {
    const {repos,following,followers, login, created,name, avatar, bio,company,blog,location,twitter} = props

    return (
        <div className={styles.userCard}>
            <img src={avatar} alt='avatar' className={styles.avatar}/>
            <UserTitle login={login} name={name} created={created}/>
            <p className={`${styles.bio} ${bio ? "" : styles.empty}`}>
                {bio || 'This profile has no bio'}
            </p>
            <UserStat repos={repos} followers={followers} following={following}/>
            <UserInfo company={company} blog={blog} location={location} twitter={twitter}/>
        </div>
    )

}

