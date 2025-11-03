import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginModal = ({ isOpen, onClose, role }) => {
    const navigate = useNavigate();
    const [matricNo, setMatricNo] = useState("");
    const [password, setPassword] = useState("");

    const DUMMY_STUDENT_MATRIC = "20202201586";
    const DUMMY_STUDENT_PASS = "20202201586";


    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (matricNo.trim() === "" || password.trim() === "") {
            alert("Please enter your matric number and password");
            return;
        }

        // Simulated login logic
        if (role === "student") {
            if (
                matricNo.trim() === DUMMY_STUDENT_MATRIC &&
                password.trim() === DUMMY_STUDENT_PASS
            ) {
                const student = {
                    name: "Ebochue Wisdom C.", //"Student " + matricNo,
                    matric: DUMMY_STUDENT_MATRIC,
                };
                localStorage.setItem("student", JSON.stringify(student));
                alert("Login successful!");
                onClose();
                navigate("/student/dashboard");
            }
            else {
                alert("Invalid matric number or password");
            }

        }
        else if (role === "supervisor") {
            alert("Supervisor login logic to be implemented");
        }
    };


    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md p-6">
                {/* Close button */}
                <button className="absolute top-4 right-4 text-gray-500 hover:bg-gray-100 rounded-full border border-gray-300 p-1" onClick={onClose} aria-label="Close">
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                        <path d="M6 6l12 12M6 18L18 6" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>

                {/* Title */}
                <h2 className="text-2xl font-bold text-green-700 text-center mb-1">IFT Project Management</h2>
                <p className="text-gray-600 text-center mb-1">Sign in to access your dashboard</p>

                {/* Login Form Role for Studnet / supervisor */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Username / Email */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            {role === "student" ? "User Name" : "Email"}
                        </label>
                        <input
                            type={role === "student" ? "number" : "email"}
                            placeholder={role === "student" ? "Enter your matric number" : "Enter your email"}
                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            value={matricNo}
                            onChange={(e) => setMatricNo(e.target.value)}
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Password</label>
                        <input type="password"
                            placeholder={role === "student" ? "Re-enter your matric number" : "Enter your password"}
                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="w-full bg-green-700 text-white py-2 rounded-lg font-bold hover:bg-green-800 transition">Sign in</button>
                </form>
            </div>
        </div>
    );
};
export default LoginModal;
