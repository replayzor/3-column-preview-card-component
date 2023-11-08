/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					brightOrange: "hsl(31, 77%, 52%)",
					darkCyan: "hsl(184, 100%, 22%)",
					veryDarkCyan: "hsl(179, 100%, 13%)",
				},
				neutral: {
					transparentWhite: "hsla(0, 0%, 100%, 0.75)",
					veryLightGray: "hsl(0, 0%, 95%)",
				},
			},
			fontFamily: {
				lexendDeca: ["Lexend Deca", "sans-serif"],
				bigShouldersDisplay: ["Big Shoulders Display", "sans-serif"],
			},
		},
	},
	plugins: [],
};

// # Front-end Style Guide

// ### Neutral

// Transparent white (paragraphs): hsla(0, 0%, 100%, 0.75)
// Very light gray (background, headings, buttons): hsl(0, 0%, 95%)

// ### Font

// - Family: [Lexend Deca](https://fonts.google.com/specimen/Lexend+Deca)
// - Weights: 400

// - Family: [Big Shoulders Display](https://fonts.google.com/specimen/Big+Shoulders+Display)
// - Weights: 700
