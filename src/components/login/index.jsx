import { useGoogleLogin } from '@react-oauth/google';

const Login = ({ onLogin }) => {
    const login = useGoogleLogin({
        onSuccess: onLogin,
    });

    return (
        <div>
            <div>
                <h2 className="text-gray-100 font-semibold text-2xl mb-6">Đăng nhập để đánh giá</h2>
            </div>

            <div className="flex flex-col gap-4">
                <button
                    className="outline-none w-full py-2.5 rounded-xl text-white bg-white/10 transition-colors hover:bg-white/20"
                    onClick={() => login()}
                >
                    Đăng nhập với Google
                </button>

                <button className="outline-none w-full py-2.5 rounded-xl text-white bg-white/10 transition-colors hover:bg-white/20">
                    Đăng nhập với Facebook
                </button>

                <button className="outline-none w-full py-2.5 rounded-xl text-white bg-white/10 transition-colors hover:bg-white/20">
                    Đăng nhập với Zalo
                </button>
            </div>
        </div>
    );
};

export default Login;
