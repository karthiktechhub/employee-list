import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import Controls from './controls/controls';
import { NotListedLocation } from '@material-ui/icons';

const useStyle = makeStyles((theme) => ({
  dialog: {
    position: 'absolute',
    padding: theme.spacing(2),
    top: theme.spacing(5),
  },
  dialogContent: {
    textAlign: 'center',
  },
  dialogAction: {
    justifyContent: 'center',
  },
  dialogTitle: {
    textAlign: 'center',
  },
  titleIcon: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
      cursor: 'default',
    },
    '& .MuiSvgIcon-root': {
      fontSize: '8rem',
    },
  },
}));

export default function ConfirmDialog(props) {
  const { confirmDialog, setConfirmDialog } = props;

  const classes = useStyle();
  return (
    <Dialog open={confirmDialog.isOpen} classes={{ paper: classes.dialog }}>
      <DialogTitle className={classes.dialogTitle}>
        <IconButton disableRipple className={classes.titleIcon}>
          <NotListedLocation />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <Typography variant='h6'>{confirmDialog.title}</Typography>
        <Typography variant='subtitle2'>{confirmDialog.subTitle}</Typography>
      </DialogContent>
      <DialogActions className={classes.dialogAction}>
        <Controls.Button
          text='No'
          color='default'
          onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}
        ></Controls.Button>
        <Controls.Button
          text='Yes'
          color='secondary'
          onClick={confirmDialog.onConfirm}
        ></Controls.Button>
      </DialogActions>
    </Dialog>
  );
}
