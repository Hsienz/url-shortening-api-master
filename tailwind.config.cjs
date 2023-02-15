/** @type {import('tailwindcss')',.Config} */
module.exports = {
	content: ["./src/**/*.{ts,js,html,svelte}"],
	theme: {
		extend: {
			colors: {
				// Primary

				Cyan: "hsl(180, 66%, 49%)",
				Dark_Violet: "hsl(257, 27%, 26%)",

				// Secondary

				Red: "hsl(0, 87%, 67%)",

				// Neutral

				Gray: "hsl(0, 0%, 75%)",
				Grayish_Violet: "hsl(257, 7%, 63%)",
				Very_Dark_Blue: "hsl(255, 11%, 22%)",
				Very_Dark_Violet: "hsl(260, 8%, 14%)",
			},
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      }
		},
	},
	plugins: [],
};
