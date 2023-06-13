const dices = [
	'<svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M486.95 462H25.05L256 62L486.95 462Z" fill="white"/></svg>',
	'<svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M255.76 44.764C249.584 44.764 243.407 46.148 238.623 48.916L85.87 137.276C76.3 142.812 76.3 151.566 85.87 157.102L238.623 245.462C248.193 250.998 263.326 250.998 272.895 245.462L425.648 157.102C435.218 151.567 435.218 142.812 425.648 137.277L272.895 48.917C268.11 46.147 261.935 44.764 255.76 44.764ZM75.67 173.84C69.917 173.685 66.006 178.176 66.006 186.12V343.816C66.006 354.868 73.576 367.979 83.146 373.506L230.076 458.354C239.646 463.88 247.216 459.51 247.216 448.459V290.76C247.216 279.708 239.646 266.6 230.076 261.072L83.146 176.225C80.456 174.67 77.921 173.898 75.67 173.838V173.84ZM436.443 173.842C434.193 173.902 431.66 174.672 428.969 176.227L282.034 261.074C272.464 266.601 264.894 279.712 264.894 290.764V448.464C264.894 459.514 272.464 463.882 282.034 458.354L428.97 373.51C438.54 367.983 446.107 354.874 446.107 343.822V186.122C446.107 178.18 442.197 173.69 436.443 173.844V173.842Z" fill="white"/></svg>',
	'<svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M256 37.143L77.896 343.853H434.104L256 37.143ZM230.154 49.79L72 164.233V322.143L230.154 49.79ZM281.844 49.79L440 322.144V164.232L281.844 49.79ZM88.7 359.852L256 480.912L423.3 359.852H88.7Z" fill="white"/></svg>',
	'<svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M375.483 251.243L265.503 302.381L265.716 485.762L477.01 266.346L390.017 244.536L375.483 251.243ZM121.603 244.334L36.8929 266.097L246.474 486V302.38L136.528 251.243L121.603 244.334ZM255.987 26L137.456 231.026L255.988 286.076L374.592 231.026L255.987 26Z" fill="white"/><path d="M227.03 35.443L124.933 215.019L119.225 225.079L27.1899 248.865L227.03 35.443Z" fill="white"/><path d="M484.811 248.639L393.239 225.698L387.139 214.995L285.018 35.371L484.811 248.639Z" fill="white"/></svg>',
	'<svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M450.169 181.354L379.685 84.29L265.629 47.325V139.977L362.013 210.008L450.169 181.354ZM246.55 139.977V47.325L132.494 84.29L62.01 181.354L150.166 209.972L246.55 139.977ZM198.59 333.591H313.588L349.098 224.221L256.089 156.623L163.08 224.222L198.59 333.591ZM196.468 352.67L142.034 427.71L256.089 464.675L370.145 427.71L315.711 352.67H196.468ZM367.843 228.109L331.033 341.389L385.516 416.382L456 319.366V199.503L367.843 228.109ZM144.156 228.109L56 199.491V319.425L126.484 416.441L180.966 341.449L144.156 228.109Z" fill="white"/></svg>',
	'<svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M248 20.3L72.33 132.6L248 128.8V20.3ZM264 20.3V128.8L439.7 132.6L264 20.3ZM241.9 144.9L55.39 149L126.6 341.9L241.9 144.9ZM270.1 144.9L385.4 341.9L456.6 149L270.1 144.9ZM256 152.4L138.9 352.6H373.1L256 152.4ZM52 186V359.2L113.9 353.5L52 186ZM460 186L398.1 353.5L460 359.2V186ZM143.2 368.6L256 491.7L368.8 368.6H143.2Z" fill="white"/><path d="M121.8 368.9L67.96 373.8L208.8 463.9L121.8 368.9Z" fill="white"/><path d="M444 373.8L390.2 368.9L303.2 463.9L444 373.8Z" fill="white"/></svg>',
	'<svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_3_18)"><path d="M213.743 164.328L156.202 208.88L180.727 316.141L275.152 159.655L221.354 158.47L213.743 164.328ZM64.2883 194.066L17.6236 218.07L169.501 318.84L145.069 211.411L73.9396 196.122L64.2883 194.066ZM113.86 48.4467L71.7925 184.171L148.466 200.607L210.531 152.618L113.86 48.4467Z" fill="white"/><path d="M98.1749 57.8244L62.336 176.472L60.335 183.117L9.65387 209.279L98.1749 57.8244Z" fill="white"/><path d="M277.36 148.257L220.732 147.02L215.739 141.569L132.092 50.0665L277.36 148.257Z" fill="white"/><path d="M440.348 340.014L368.118 348.88L334.348 453.598L495.511 367.399L449.884 338.872L440.348 340.014ZM296.703 289.15L244.326 285.918L323.32 450.178L357.255 345.362L303.946 295.853L296.703 289.15ZM413.764 189.355L308.212 284.484L365.699 337.814L443.576 328.309L413.764 189.355Z" fill="white"/><path d="M395.489 189.394L304.022 273.032L298.904 277.72L241.972 274.288L395.489 189.394Z" fill="white"/><path d="M503.237 358.733L455.205 328.714L453.701 321.477L428.604 200.069L503.237 358.733Z" fill="white"/></g><defs><clipPath id="clip0_3_18"><rect width="512" height="512" fill="white"/></clipPath></defs></svg>',
];

const htmlToReplace = /*html */ `<div class="dbe-container">
	<style>
		.dbe-container {
			display: flex;
			flex-direction: column;
			width: 100%;
			margin-bottom: 32px;
		}

		.dbe-dices {
			display: flex;
			gap: 12px;
			justify-content: center;
			flex-wrap: wrap;
		}

		.dbe-dice span,
		.dbe-rolled-dice span {
			pointer-events: none;
			-webkit-touch-callout: none;
			-webkit-user-select: none;
			-khtml-user-select: none;
			-moz-user-select: none;
			-ms-user-select: none;
			user-select: none;
		}

		.dbe-dice {
			background-color: transparent;
			border: 0;
			outline: 0;
			cursor: pointer;
			padding: 0;
			display: flex;
			flex-direction: column;
			color: #fff;
			font-weight: 700;
			align-items: center;
			gap: 4px;
		}

		.dbe-container svg {
			height: 48px;
		}

		.dbe-rolled-dices {
			margin-top: 12px;
			padding-top: 12px;
			width: 100%;
			display: flex;
			/*justify-content: center;*/
			flex-wrap: wrap;
			gap: 8px;
			border-top: 1px solid #ffffff38;
		}

		.dbe-rolled-dice {
			display: flex;
			flex-direction: column;
			color: #fff;
			font-weight: 700;
			align-items: center;
			gap: 4px;
			cursor: pointer;
			background-color: transparent;
			border: 0;
			outline: 0;
			padding: 0;
		}
		
		.dbe-original-input {
			display: flex;
			align-items: center;
			width: 100%;
		}

		.dbe-clear {
			cursor: pointer;
			background-color: transparent;
			border: 0;
			outline: 0;
			padding: 0;
			color: #fff;
		}

		.dbe-clear svg {
			height: 24px;
		}
	</style>
	<div class="dbe-dices">
		${dices
			.map((dice, i) => {
				let dnum = [4, 6, 8, 10, 12, 20, 100][i];

				return `<button class="dbe-dice">${dice}<span>d${dnum}</span></button>`;
			})
			.join("\n")}
		<button class="dbe-clear">
			<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M18 6V18C18 19.1046 17.1046 20 16 20H8C6.89543 20 6 19.1046 6 18V6M4 6H20M15 6V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
		</button>
	</div>
	<div class="dbe-rolled-dices"></div>
</div>`;

let rolledDices = [];

function start() {
	if (
		document.querySelector(".dbe-container") ||
		!document.querySelector(".tab[data-v-4bed2e53]")
	) {
		return;
	} else {
		document
			.querySelector(".tab[data-v-4bed2e53]")
			.insertBefore(
				document.createRange().createContextualFragment(htmlToReplace),
				document.querySelector(".add-button[data-v-4bed2e53]")
			);

		console.log("!!!");

		document.querySelectorAll(".dbe-dice").forEach((a, i) => {
			a.onclick = () => {
				function rollDice(to) {
					var r = Math.random();
					return Math.floor(r * (to - 1) + 1);
				}

				let dnum = [4, 6, 8, 10, 12, 20, 100][i];

				rolledDices.push(
					`<button class="dbe-rolled-dice">${
						dices[i]
					}<span>${rollDice(dnum)}</span></button>`
				);

				document.querySelector(".dbe-rolled-dices").innerHTML =
					rolledDices.join("");

				addRemoveListeners();
			};
		});

		document.querySelector(".dbe-clear").onclick = () => {
			rolledDices = [];

			document.querySelector(".dbe-rolled-dices").innerHTML = "";
		};

		function addRemoveListeners() {
			document.querySelectorAll(".dbe-rolled-dice").forEach((a, i) => {
				a.onclick = () => {
					rolledDices.splice(i, 1);

					document.querySelector(".dbe-rolled-dices").innerHTML =
						rolledDices.join("");

					addRemoveListeners();
				};
			});
		}
	}

	// clearInterval(timer)
}

let timer = setInterval(start, 500);
