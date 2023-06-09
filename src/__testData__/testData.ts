export const posts = [
	{
		id: "march-reflection.md",
		slug: "march-reflection",
		body: `\n![March Reflection Cover Image](/blog/march-reflection.jpg)\n\n## Monthly Reflection\n\nI think this month is pretty productive. I have done a couple of things:\n\n- Published a blog about how to set up and deploy a TS node app\n- Read chapter 1 of the System Design Interview\n- Learned about API versioning and how to implement versioning from <a href="https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api" target="_blank" rel="noopener noreferrer">REST API Design Best Practices Handbook</a>\n- Understood about largest contentful paint and cumulative layout shift\n- Discovered that Jest has a feature that you can loop through an array of test cases without using either \` forEach\`\` or  \`for of\` loops\n\n### Setup and deploy a TS node app\n\nI decided to explore creating a node application using TypeScript. Through my research, I discovered various ways to run the application using TypeScript, including \`concurrently\`, \`nodemon\`, and \`ts-node-dev\`. Personally, I prefer using \`concurrently\` with the \`--watch\` flag from the node since it requires fewer package installations. However, when it comes to deployment, an additional step is necessary because the TypeScript code needs to be compiled into JavaScript.\n\nMost deployment services have similar settings but focus on the \`build\` and \`start\` commands. For the build command, you need to install the required packages and then run \`pnpm build\`. For the start command, you can either use \`pnpm server\` or \`node build/index.js\`. Keep in mind that I named the output directory as \`build\`, so if you name it something else, like \`dist\`, you need to change the folder path to \`index.js\` accordingly.\n\n\`\`\`json\n"scripts": {\n  "start:build": "npx tsc -w", // compile TS to JS\n  "start:run": "node --watch build/index.js", // run the dev server locally with index.js\n  "start": "concurrently pnpm:start:*", // run the script that starts with "start:"\n  "clean": "npx tsc --build --clean", // clean the build folder\n  "build": "pnpm`,
		collection: "post",
		data: {
			draft: false,
			title: "March Reflection",
			description:
				"Reflected on what I learned about run TS node app, ch 1 of the System Design, LCP and CLS from Lighthouse, and run a tests array with one of Jest's features.",
			publishDate: "2023-03-28",
			tags: ["reflection", "monthly-reflection"],
		},
	},
	{
		id: "april-reflection.md",
		slug: "april-reflection",
		body: `\n![March Reflection Cover Image](/blog/march-reflection.jpg)\n\n## Monthly Reflection\n\nI think this month is pretty productive. I have done a couple of things:\n\n- Published a blog about how to set up and deploy a TS node app\n- Read chapter 1 of the System Design Interview\n- Learned about API versioning and how to implement versioning from <a href="https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api" target="_blank" rel="noopener noreferrer">REST API Design Best Practices Handbook</a>\n- Understood about largest contentful paint and cumulative layout shift\n- Discovered that Jest has a feature that you can loop through an array of test cases without using either \` forEach\`\` or  \`for of\` loops\n\n### Setup and deploy a TS node app\n\nI decided to explore creating a node application using TypeScript. Through my research, I discovered various ways to run the application using TypeScript, including \`concurrently\`, \`nodemon\`, and \`ts-node-dev\`. Personally, I prefer using \`concurrently\` with the \`--watch\` flag from the node since it requires fewer package installations. However, when it comes to deployment, an additional step is necessary because the TypeScript code needs to be compiled into JavaScript.\n\nMost deployment services have similar settings`,
		collection: "post",
		data: {
			draft: false,
			title: "March Reflection",
			description:
				"Reflected on what I learned about run TS node app, ch 1 of the System Design, LCP and CLS from Lighthouse, and run a tests array with one of Jest's features.",
			publishDate: "2023-04-26",
			tags: ["reflection", "monthly-reflection", "test"],
		},
	},
];

export const expectedPostsByDate = [
	{
		id: "april-reflection.md",
		slug: "april-reflection",
		body: `\n![March Reflection Cover Image](/blog/march-reflection.jpg)\n\n## Monthly Reflection\n\nI think this month is pretty productive. I have done a couple of things:\n\n- Published a blog about how to set up and deploy a TS node app\n- Read chapter 1 of the System Design Interview\n- Learned about API versioning and how to implement versioning from <a href="https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api" target="_blank" rel="noopener noreferrer">REST API Design Best Practices Handbook</a>\n- Understood about largest contentful paint and cumulative layout shift\n- Discovered that Jest has a feature that you can loop through an array of test cases without using either \` forEach\`\` or  \`for of\` loops\n\n### Setup and deploy a TS node app\n\nI decided to explore creating a node application using TypeScript. Through my research, I discovered various ways to run the application using TypeScript, including \`concurrently\`, \`nodemon\`, and \`ts-node-dev\`. Personally, I prefer using \`concurrently\` with the \`--watch\` flag from the node since it requires fewer package installations. However, when it comes to deployment, an additional step is necessary because the TypeScript code needs to be compiled into JavaScript.\n\nMost deployment services have similar settings`,
		collection: "post",
		data: {
			draft: false,
			title: "March Reflection",
			description:
				"Reflected on what I learned about run TS node app, ch 1 of the System Design, LCP and CLS from Lighthouse, and run a tests array with one of Jest's features.",
			publishDate: "2023-04-26",
			tags: ["reflection", "monthly-reflection", "test"],
		},
	},
	{
		id: "march-reflection.md",
		slug: "march-reflection",
		body: `\n![March Reflection Cover Image](/blog/march-reflection.jpg)\n\n## Monthly Reflection\n\nI think this month is pretty productive. I have done a couple of things:\n\n- Published a blog about how to set up and deploy a TS node app\n- Read chapter 1 of the System Design Interview\n- Learned about API versioning and how to implement versioning from <a href="https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api" target="_blank" rel="noopener noreferrer">REST API Design Best Practices Handbook</a>\n- Understood about largest contentful paint and cumulative layout shift\n- Discovered that Jest has a feature that you can loop through an array of test cases without using either \` forEach\`\` or  \`for of\` loops\n\n### Setup and deploy a TS node app\n\nI decided to explore creating a node application using TypeScript. Through my research, I discovered various ways to run the application using TypeScript, including \`concurrently\`, \`nodemon\`, and \`ts-node-dev\`. Personally, I prefer using \`concurrently\` with the \`--watch\` flag from the node since it requires fewer package installations. However, when it comes to deployment, an additional step is necessary because the TypeScript code needs to be compiled into JavaScript.\n\nMost deployment services have similar settings but focus on the \`build\` and \`start\` commands. For the build command, you need to install the required packages and then run \`pnpm build\`. For the start command, you can either use \`pnpm server\` or \`node build/index.js\`. Keep in mind that I named the output directory as \`build\`, so if you name it something else, like \`dist\`, you need to change the folder path to \`index.js\` accordingly.\n\n\`\`\`json\n"scripts": {\n  "start:build": "npx tsc -w", // compile TS to JS\n  "start:run": "node --watch build/index.js", // run the dev server locally with index.js\n  "start": "concurrently pnpm:start:*", // run the script that starts with "start:"\n  "clean": "npx tsc --build --clean", // clean the build folder\n  "build": "pnpm`,
		collection: "post",
		data: {
			draft: false,
			title: "March Reflection",
			description:
				"Reflected on what I learned about run TS node app, ch 1 of the System Design, LCP and CLS from Lighthouse, and run a tests array with one of Jest's features.",
			publishDate: "2023-03-28",
			tags: ["reflection", "monthly-reflection"],
		},
	},
];

export const content = `\n![March Reflection Cover Image](/blog/march-reflection.jpg)\n\n## Monthly Reflection\n\nI think this month is pretty productive. I have done a couple of things:\n\n- Published a blog about how to set up and deploy a TS node app\n- Read chapter 1 of the System Design Interview\n- Learned about API versioning and how to implement versioning from <a href="https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api" target="_blank" rel="noopener noreferrer">REST API Design Best Practices Handbook</a>\n- Understood about largest contentful paint and cumulative layout shift\n- Discovered that Jest has a feature that you can loop through an array of test cases without using either \` forEach\`\` or  \`for of\` loops\n\n### Setup and deploy a TS node app\n\nI decided to explore creating a node application using TypeScript. Through my research, I discovered various ways to run the application using TypeScript, including \`concurrently\`, \`nodemon\`, and \`ts-node-dev\`. Personally, I prefer using \`concurrently\` with the \`--watch\` flag from the node since it requires fewer package installations. However, when it comes to deployment, an additional step is necessary because the TypeScript code needs to be compiled into JavaScript.\n\nMost deployment services have similar settings but focus on the \`build\` and \`start\` commands. For the build command, you need to install the required packages and then run \`pnpm build\`. For the start command, you can either use \`pnpm server\` or \`node build/index.js\`. Keep in mind that I named the output directory as \`build\`, so if you name it something else, like \`dist\`, you need to change the folder path to \`index.js\` accordingly.\n\n\`\`\`json\n"scripts": {\n  "start:build": "npx tsc -w", // compile TS to JS\n  "start:run": "node --watch build/index.js", // run the dev server locally with index.js\n  "start": "concurrently pnpm:start:*", // run the script that starts with "start:"\n  "clean": "npx tsc --build --clean", // clean the build folder\n  "build": "pnpm`;
