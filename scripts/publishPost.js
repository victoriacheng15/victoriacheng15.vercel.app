import { promises as fs } from "fs";
import path from "path";

const draftsDir = "src/drafts";
const markdownDir = "src/content/post";

function getTodayDate() {
	const today = new Date();
	const fullDate = today.toISOString().split("T")[0];

	return fullDate;
}

async function sortFiles(files) {
	try {
		const posts = {};
		for (const file of files) {
			const filePath = path.join(draftsDir, file);
			const fileContent = await fs.readFile(filePath, "utf-8");

			const titlePattern = /^title:\s*(.*)/im;
			const publishDatePattern = /^publishDate:\s*(.*)/im;

			const title = fileContent
				.match(titlePattern)[1]
				.replace(/"/g, "")
				.trim()
				.replace(/\W+/g, "-")
				.toLowerCase();
			const publishDate = fileContent.match(publishDatePattern)[1].replace(/"/g, "").trim();

			posts[publishDate] = title;
		}

		return posts;
	} catch (error) {
		console.error(`Error reading files: ${error}`);
	}
}

(async () => {
	try {
		const files = await fs.readdir(draftsDir);

		const markdownFiles = files.filter((file) => file.endsWith(".md"));

		if (markdownFiles.length === 0) {
			console.log("No markdown files found in drafts directory");
			return;
		}

		const posts = await sortFiles(markdownFiles);
		const today = getTodayDate();
		const ONE_DAY = 24 * 60 * 60 * 1000;

		const firstPost = Object.entries(posts).sort((a, b) => new Date(a[0]) - new Date(b[0]))[0];

		if (new Date(today).getTime() + ONE_DAY === new Date(firstPost[0]).getTime()) {
			const fileName = `${firstPost[1]}.md`;
			await fs.rename(joinPath(draftsDir, fileName), joinPath(markdownDir, fileName));

			console.log("\n== 🥳️ The file moving is done 🥳️ ==\n");
		} else {
			console.log("\n== There is no post available for tomorrow ==\n");
		}
	} catch (error) {
		console.error(`Error reading directory: ${error}`);
	}
})();
