const GITHUB_API = "https://api.github.com/graphql";

interface Repository {
	id: string;
	name: string;
	description: string;
	url: string;
	stargazerCount: number;
}

export async function getPinnedProjects(): Promise<Repository[]> {
	const query = `{
    viewer {
      pinnedItems(first: 6) {
        nodes {
          ... on Repository {
            id
            name
            description
            url
            stargazerCount
          }
        }
      }
    }
  }`;

	const token: string = import.meta.env.TOKEN;

	const response = await fetch(GITHUB_API, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({
			query: query,
		}),
	});

	const json = await response.json();
	const { nodes } = json.data.viewer.pinnedItems;

	return nodes;
}
