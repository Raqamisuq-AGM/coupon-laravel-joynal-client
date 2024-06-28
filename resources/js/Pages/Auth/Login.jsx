import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { InputGroup } from "@/Components/shared/InputGroup";
import PrimaryButton from "@/Components/shared/PrimaryButton";
import logo from "@/Assets/images/logo-small.svg";
export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />
            <div className="card mx-auto w-full max-w-md">
                <form onSubmit={submit} className="card-body px-10 py-12">
                    <div className="flex flex-col items-center justify-center">
                        <img src={logo} alt="logo" className="h-[50px]" />
                        <h5 className="mt-4">Welcome Back</h5>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Please enter your details
                        </p>
                    </div>

                    <div className="mt-6 flex flex-col gap-5">
                        {/* Email */}
                        <InputGroup
                            label="Email Or Phone"
                            name="username"
                            formObject={data}
                            setFormObject={setData}
                            validationError={errors}
                        />

                        {/* Password */}
                        <InputGroup
                            label="Password"
                            name="password"
                            type="password"
                            formObject={data}
                            setFormObject={setData}
                            validationError={errors}
                        />
                    </div>
                    {/* Remember & Forgot*/}
                    <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                            <input
                                type="checkbox"
                                className="h-4 w-4 rounded border-slate-300 bg-transparent text-primary-500 shadow-sm transition-all duration-150 checked:hover:shadow-none focus:ring-0 focus:ring-offset-0 enabled:hover:shadow disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-600"
                                id="remember-me"
                                value={data.remember}
                                onChange={(e) =>
                                    setData("remember", e.target.checked)
                                }
                            />
                            <label htmlFor="remember-me" className="label">
                                Remember Me
                            </label>
                        </div>
                        <a
                            href="#"
                            className="text-sm text-primary-500 hover:underline"
                        >
                            Forgot Password
                        </a>
                    </div>
                    {/* Login Button */}
                    <div className="mt-8">
                        <PrimaryButton
                            type="submit"
                            className="w-full"
                            isLoading={processing}
                        >
                            Login
                        </PrimaryButton>
                        <div className="relative mt-4 flex h-6 items-center justify-center py-4">
                            <div className="h-[1px] w-full bg-slate-200 dark:bg-slate-600"></div>
                            <div className="t absolute w-10 bg-white text-center text-xs text-slate-400 dark:bg-slate-800">
                                Or
                            </div>
                        </div>
                    </div>
                    {/* Don't Have An Account */}
                    <div className="mt-4 flex justify-center">
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                            Don't Have an Account?
                            <Link
                                href={route("register")}
                                className="text-sm text-primary-500 hover:underline"
                            >
                                Sign up
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}
