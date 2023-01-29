import { useState, type MouseEvent } from 'react';
import { Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';

type UserMenuButtonProps = {
  avatar: string | null;
};

export function UserMenuButton({ avatar }: UserMenuButtonProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const onOpenMenu = (event: MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const onCloseMenu = () => setAnchorEl(null);

  return (
    <>
      <IconButton onClick={onOpenMenu}>
        <Avatar src={avatar || undefined} />
      </IconButton>
      <UserMenu anchorEl={anchorEl} onClose={onCloseMenu} />
    </>
  );
}

type UserMenuProps = {
  anchorEl: null | HTMLElement;
  onClose: () => void;
};

export function UserMenu({ anchorEl, onClose }: UserMenuProps) {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const onSignout = () => {
    signOut(() => {
      navigate('/auth');
    });
  };

  return (
    <Menu
      anchorEl={anchorEl}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      open={Boolean(anchorEl)}
      onClose={onClose}
    >
      <MenuItem onClick={onClose} component={Link} to="vagabond-list">
        Your Vagabonds
      </MenuItem>
      <MenuItem onClick={onSignout}>Log Out</MenuItem>
    </Menu>
  );
}
