import SignUpForm from "../../components/SignUpForm/SignUpForm";

const AuthPage = ({setUser}) => {
    return (
        <main>
            <h1>AuthPage</h1>
            <SignUpForm setUser={setUser}/>
        </main>
    )
};

export default AuthPage;