"use client";
import { ReactNode } from "react";
import "./globals.css";

interface IProps {
	children: ReactNode;
}

export default function RootLayout({ children }: IProps) {
	return (
		<html lang="en">
			<body>
        <div className="h-screen">{children}</div>
      </body>
		</html>
	);
}
