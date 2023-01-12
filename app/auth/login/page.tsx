"use client";
import React, { useRef } from "react";

const LoginPage = () => {
	const userName = useRef("");
	const pass = useRef("");

	const onSubmit = async () => {};
	return (
		<div className="flex justify-center items-center h-screen bg-gradient-to-br from-cyan-300 to-sky-600">
			<div className="px-7 py-4 bg-white rounded-md flex flex-col gap-2">
        <input type="text" onChange={e => userName.current = e.target.value}/>
        <input type="text" onChange={e => pass.current = e.target.value}/>
        <input type="submit" value="Login" onClick={onSubmit}/>
      </div>
		</div>
	);
};

export default LoginPage;
