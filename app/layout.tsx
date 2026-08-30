import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";

const playfairDisplay = Playfair_Display({
	subsets: ["latin"],
	variable: "--font-playfair",
});

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: "Malabar Table | Modern Malabar Cuisine",
	description:
		"A modern Kerala dining experience inspired by the flavors and traditions of Malabar.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="en"
			className={cn(
				"h-full",
				"antialiased",
				inter.variable,
				playfairDisplay.variable,
				"font-sans",
			)}>
			<body className="min-h-full flex flex-col">{children}</body>
		</html>
	);
}
