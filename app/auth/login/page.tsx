"use client";
import React, { useRef } from "react";

const LoginPage = () => {
	const userName = useRef("");
	const pass = useRef("");

	const onSubmit = async () => {};
	return (
		<div className="flex items-center justify-center h-screen bg-gradient-to-br from-cyan-300 to-sky-600">
			<div className="flex flex-col gap-2 py-4 bg-white rounded-md px-7">
        <input type="text" onChange={e => userName.current = e.target.value}/>
        <input type="text" onChange={e => pass.current = e.target.value}/>
        <input className="w-full h-full bg-red-700" type="submit" value="Login" onClick={onSubmit}/>
      </div>
		</div>
	);
};

export default LoginPage;
