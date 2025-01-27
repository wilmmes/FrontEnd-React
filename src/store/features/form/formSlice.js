import { createSlice } from '@reduxjs/toolkit';
// Estado inicial del formulario
const initialState = {
    formData: {
        module: 'React Mod7',
        username: '',
        email: '',
        password: 'mod7USIP-WILSON'
    },
    isLoggedIn: false, // Estado de autenticación
};
// Crear el slice para el formulario
const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        // Acción para actualizar los datos del formulario
        updateForm(state, action) {
            const { field, value } = action.payload;
            state.formData[field] = value;
        },
        // Acción para reiniciar el formulario
        resetForm(state) {
            state.formData = {
                module: '',
                username: '',
                email: '',
                password: ''
            };
            state.formData.formData = {
                module: '',
                username: '',
                email: '',
                password: ''
            };
        },
        login: (state) => {
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.isLoggedIn = false;            
        },
    }
});

export const { updateForm, resetForm, login, logout } = formSlice.actions;
export default formSlice.reducer;