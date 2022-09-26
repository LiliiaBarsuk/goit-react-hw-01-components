import PropTypes from 'prop-types';
import { List} from 'components/FriendList/FriendsList.styled';
import { FriendItem } from 'components/FriendItem/FriendItem';
export const FriendList = ({friends}) => {
    return (
        <List>
            { friends.map((friend) => (
                <FriendItem 
                key={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}  />) 
              )
            }  
        </List>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    )
};