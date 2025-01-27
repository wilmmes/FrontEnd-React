import { motion } from "motion/react"
// eslint-disable-next-line react/prop-types
const ModalError = ({ visible, message, onClose }) => {
    if (!visible) {
        return null;
    }
return (
        <div className="modal-overlay">
            <motion.div
                className="notification-error"
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
            >
                <div>
                   <p>{message}</p>
                </div>
                <button
                    className="close-btn-success"
                    onClick={onClose}>
                    X
                </button>
            </motion.div>
        </div>
    );
};
export default ModalError;