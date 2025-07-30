import Modal from "react-modal";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    border: "none",
    background: "none",
  },
};

const ImageModal = ({ modalIsOpen, closeModal, image }) => {
  if (!image) {
    return null;
  }
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        style={{
          width: "50vw",
          height: "80vh",
          borderRadius: "20px",
        }}
      />
    </Modal>
  );
};

export default ImageModal;
