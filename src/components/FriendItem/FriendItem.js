import PropTypes from 'prop-types';
import { Item, Status, Avatar, Name } from 'components/FriendItem/FriendItem.styled';

export const FriendItem = ({ avatar, name, isOnline }) => {
  return ( 
    <Item>
      <Status status={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name> 
    </Item> 
  ) 
}

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};