"use client";
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import AppBar from "./AppBar";
import "./globals.css";

interface IProps {
	children: ReactNode;
	session: any;
}

export default function RootLayout({ children, session }: IProps) {
	return (
		<html lang="en">
			<body>
				<SessionProvider session={session}>
					<AppBar />
					<div className="h-screen">{children}</div>
				</SessionProvider>
			</body>
		</html>
	);
}
