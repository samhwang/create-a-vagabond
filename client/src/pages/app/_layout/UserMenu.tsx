import { useState, type MouseEvent } from 'react';
import { useSetAtom } from 'jotai';
import { Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { jwtAtom } from '../../../providers/auth';
import icon from '../../../assets/icon.webp';

export function UserMenuButton() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const onOpenMenu = (event: MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const onCloseMenu = () => setAnchorEl(null);

  return (
    <>
      <IconButton onClick={onOpenMenu}>
        <Avatar src={icon} />
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
  const setJwt = useSetAtom(jwtAtom);

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
      <MenuItem onClick={() => setJwt(undefined)}>Log Out</MenuItem>
    </Menu>
  );
}
