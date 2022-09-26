import PropTypes from 'prop-types';
import { List, Item, Status, Avatar, Name } from 'components/FriendList/FriendsList.styled';

export const FriendList = ({friends}) => {
    return (
        <List>
            { friends.map(({id, avatar, name, isOnline}) => (
               <Item key={id}>
                   <Status status={isOnline}></Status>
                   <Avatar src={avatar} alt="User avatar" width="48" />
                   <Name>{name}</Name>
                </Item>) 
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