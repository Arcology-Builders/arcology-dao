import React from 'react';
import styles from './styles/globals.css'
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem, Link } from '@mui/material'
// https://github.com/jcoreio/material-ui-popup-state
import { AccountCircle, AccountBalanceWallet } from '@mui/icons-material';

//web3
import { useWalletContext } from '../context/ContextProvider';
import WalletModel from '../web3/walletModel';

export default function NavBar() {
   const WalletContext = useWalletContext();
   const { getweb3 } = WalletModel();

   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

   const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };

   async function connectWallet() {
      getweb3().then((response) => {
         console.log(response)
         const target_copy = Object.assign({}, response[1].currentProvider);
         console.log('t', target_copy)
         WalletContext[1](target_copy);
      }).catch(e => {
         throw Error(e)
      });

   }

   return (
      <div>
         <AppBar position="static" color='primary' >
            <Toolbar variant='regular' >
               <Link sx={{ flexGrow: 1 }} >
                  <Link href='/' >
                     <img className='headerimg' src={'./assets/logo-alpha.png'} />
                  </Link>
               </Link>
               {/*<Typography variant="h4" sx={{ flexGrow: 1, textAlign: 'left' }}>
                  Detroit Arcology
               </Typography>
   */}
               {WalletContext[0] ? (
                  <div>
                     <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                     >
                        <AccountCircle />
                     </IconButton>
                     <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                           vertical: 'top',
                           horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                           vertical: 'top',
                           horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                     >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                     </Menu>
                  </div>
               ) : (
                  <div>
                     <IconButton
                        onClick={() => { connectWallet() }}
                        color="inherit"
                     >
                        <AccountBalanceWallet />
                     </IconButton>
                  </div>
               )}
            </Toolbar>
         </AppBar>
      </div>
   )
}