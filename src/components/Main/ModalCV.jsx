import Modal from 'react-modal'
import React from 'react'
import { Button } from '@nextui-org/react'

const ModalCV = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Previsualizar PDF"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)'
        },
        content: {
          maxWidth: '85%',
          maxHeight: '80%',
          margin: 'auto',
          marginTop: '5%',
          borderRadius: '10px',
          backgroundColor: '#f7fafc',
          padding: '6px',
          zIndex: '9999',
          // Hago responsive el modal
          '@media (min-width: 600px)': {
            maxWidth: '100%',
            maxHeight: '65%'
          },
          '@media (min-width: 900px)': {
            maxWidth: '100%',
            maxHeight: '50%'
          },
          '@media (min-width: 1440px)': {
            maxWidth: '40%',
            maxHeight: '40%'
          }
        }
      }}
    >
      <style></style>
      <iframe
        src='./CV.pdf'
        width="100%"
        height="100%"
        className="w-full h-full z-50"
      />
      <Button className="absolute top-0 right-50 m-4"><a href='https://drive.google.com/file/d/1JAHLqbkLbl1NoTtGYaUjAsFes4Ihked9/view?usp=drive_link' target='blank'>Ver fuera del sitio</a></Button>
    </Modal>
  )
}

export default ModalCV
