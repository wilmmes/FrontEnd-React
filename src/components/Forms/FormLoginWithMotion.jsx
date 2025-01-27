import { motion } from "motion/react";
import useForm from "../Hooks/useForm.js";

import ModalInfo from "../../components/Modals/ModalInfo.jsx";

import ModalSuccess from "../../components/Modals/ModalSuccess.jsx";
import ModalError from "../../components/Modals/ModalError.jsx";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateForm,
  resetForm,
  login,
} from "../../store/features/form/formSlice.js";

const FormWithMotionAndHook = ({ titleForm }) => {
  const dispatch = useDispatch();
  const { formData, handleChange } = useForm({
    module: useSelector((state) => state.form.formData.module),
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === "mod7USIP-WILSON") {
      dispatch(updateForm({ field: "formData", value: formData }));
      dispatch(login());
      setShowModal(true);
    } else {
      setShowModalError(true);
      console.log("datos del formulario", formData);
    }
  };
  const [showModal, setShowModal] = useState(false);
  const onCloseModalInfo = () => {
    setShowModal(false);
  };
  const [showModalError, setShowModalError] = useState(false);
    const onCloseModalError = () => {
        setShowModalError(false);        
    };
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ModalSuccess
        visible={showModal}
        message={formData.username}
        onClose={onCloseModalInfo}
      />
      <ModalError
        visible={showModalError}
        message="Username/Password incorrectos!"
        onClose={onCloseModalError}
      />
      <form onSubmit={handleSubmit} class="form-container">
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>{titleForm}</h3>
        </motion.div>
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div class="form-group">
            <label class="custom-label">
              Module: </label>
              <input
                class="custom-input"
                type="text"
                name="module"
                value={formData.module}
                onChange={handleChange}
                disabled
                required
              />
           
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div class="form-group">
            <label class="custom-label">
              Username:  </label>
              <input
                class="custom-input"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
          
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div class="form-group">
            <label class="custom-label">
              Email:</label>
              <input
                class="custom-input"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div class="form-group align-button">
            <label class="custom-label">
              Password: </label>
              <input
                class="custom-input"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
              class="form-button"
                type="button"
                onClick={togglePasswordVisibility}
                className="button-visibility"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
           
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div >
            <button className="btn" type="submit">
              Login
            </button>
          </div>
        </motion.div>
      </form>
    </motion.div>
  );
};
export default FormWithMotionAndHook;
