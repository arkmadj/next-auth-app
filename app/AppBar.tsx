import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

function AppBar() {
	const { data: session } = useSession();
	return (
		<div className="flex gap-2 p-2 bg-gradient-to-b from-cyan-50 to-cyan-200">
			<Link className="text-sky-600 hover:text-sky-700" href={"/"}>
				Home
			</Link>
			<Link className="text-sky-600 hover:text-sky-700" href={"/admin"}>
				Admin
			</Link>
			<Link className="text-sky-600 hover:text-sky-700" href={"/admin/panel"}>
				Panel
			</Link>
			<div className="flex gap-2 ml-auto">
				{session?.user ? (
					<>
						<p className="text-sky-600">{session.user.name}</p>
						<button className="text-red-500" onClick={() => signOut()}>
							Sign out
						</button>
					</>
				) : (
					<button className="text-green-600" onClick={() => signIn()}>
						Sign in
					</button>
				)}
			</div>
		</div>
	);
}

export default AppBar;
