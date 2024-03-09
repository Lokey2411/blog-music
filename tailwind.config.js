/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,tsx,jsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#07a3b2",
				secondary: "#58126A",
				tertiary: "#A96F44",
			},
			backgroundImage: {
				"primary-gradient": "linear-gradient(151deg, #07a3b2 0%,#d9ecc7 60%)",
				"secondary-gradient": "linear-gradient(151deg, #58126A 0%,#F6B2E1 60%)",
				"tertiary-gradient": "linear-gradient(151deg, #A96F44 0%,#F2ECB6 60%)",
				"primary-gradient-reverse": "linear-gradient(151deg,  #d9ecc7 0%,#07a3b2 60%)",
				"secondary-gradient-reverse": "linear-gradient(151deg, #F6B2E1 0%, #58126A 60%)",
				"tertiary-gradient-reverse": "linear-gradient(151deg,#F2ECB6    0%,#A96F44 60%)",
			},
			fontFamily: {
				playpen: "Playpen Sans",
				"hand-writing": "Sansita Swashed",
			},
			screens: {
				xs: "450px",
			},
		},
	},
	plugins: [],
	variants: {
		extend: {
			overflow: ["hover"], // Thêm hỗ trợ cho :hover cho thuộc tính overflow
		},
	},
};
