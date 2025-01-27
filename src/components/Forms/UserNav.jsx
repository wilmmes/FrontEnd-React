import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { logout, resetForm } from '../../store/features/form/formSlice.js';
import ModalInfo from "../../components/Modals/ModalInfo.jsx";
const UserNav = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.form.isLoggedIn);    
    
    
    const [showModal, setShowModal] = useState(false);
    const onCloseModal = () => {
        setShowModal(false);        
    };
    
    const onShowModal = () => {
        setShowModal(true);        
    };
    return (
        <>
        <ModalInfo visible={showModal} 
                       message="Estas seguro que quieres cerrar sesion? "
                       onClose={onCloseModal} 
            />
            {isLoggedIn ? (
                <>
                <span>Bienvenido, </span>
                <button className="btn" onClick={ onShowModal }>Logout</button>
                </>
            ) : (
                <span></span>
            )}
        </>
    );
    
};
export default UserNav;