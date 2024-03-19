import { useState } from "react";
import { signUp } from '../../utilities/users-service';

const LoginForm = ({ setUser }) => {
    const [formData, setFormData] = useState({
        name: '',        
        password: '',        
        error: ''
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const user = await signUp(formData);
            setUser(user);
        } catch {
            setFormData(prevState => ({ ...prevState, error: 'Sign up failed, try again' }));
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
            error: ''
        }));
    }

    const disable = formData.password !== formData.confirm;

    return (
        <div>
            <div className="form-container">
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />                    
                    <label>Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />                    
                    <button type="submit" disabled={disable}>Login</button>
                </form>
            </div>
            <p className="error-message">{formData.error}</p>
        </div>
    );
}

export default LoginForm;