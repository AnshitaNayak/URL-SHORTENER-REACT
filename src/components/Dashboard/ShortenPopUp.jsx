import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CreateNewShorten from './CreateNewShorten';

const ShortenPopUp = ({ refetch, open, setOpen }) => {

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className='flex justify-center items-center h-full w-full'>
                <CreateNewShorten
                    refetch={refetch}
                    setOpen={setOpen}
                />
            </div>
        </Modal>
    )
}

export default ShortenPopUp
