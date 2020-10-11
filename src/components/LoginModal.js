import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Login from './Loginloader';
import GoogleLogin from 'react-google-login';
import '../css/loginmodal.scss';
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function LoginModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const responseGoogle = (response) => {
    var res = response.profileObj;
    console.log(res);
    this.props.loginUser(res);
    this.toggle();
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div class='mpar'>
        <h2
          id='simple-modal-title'
          class='text'
          style={{ fontFamily: 'Commissioner' }}
        >
          Lets get you kicked in !
        </h2>
      </div>
      <p id='simple-modal-description' style={{ marginLeft: '70px' }}>
        <GoogleLogin
          clientId='251356479099-8nu01f24fennvd2htamjmf541br3tedm.apps.googleusercontent.com'
          buttonText='Login with Google'
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        ></GoogleLogin>
      </p>
    </div>
  );

  return (
    <div>
      <div className='btnpar'>
        <a class='btn' onClick={handleOpen} href='#'>
          Login!
        </a>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        {body}
      </Modal>
    </div>
  );
}

export default LoginModal;
