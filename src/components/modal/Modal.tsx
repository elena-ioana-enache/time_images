import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
type Props = {
  handleClose: () => void;
  onInputChanged: (ev: any) => void;
  value: string;
}
export default function BasicModal({ handleClose, onInputChanged, value }: Props) {

  const [img, setImg] = React.useState('');
  React.useEffect(() => {

    fetch('https://picsum.photos/200')
      .then(response =>
        setImg(response.url));

  }, []);
  return (
    <div style={{ zIndex: 50 }}>

      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Title
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <img src={img} />
          <input type='string' onChange={onInputChanged} value={value} />
        </Typography>
        <Button onClick={handleClose}>Close</Button>
      </Box>


    </div>
  );
}
