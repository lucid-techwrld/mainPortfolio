const PINNED_REPOS = ["zello", "neuronosh", "lawsabi", "shopibag", "telecomos", "myxellia"];

export async function getGitHubData(username) {
  const headers = { Accept: "application/vnd.github+json" };

  const [profileRes, reposRes] = await Promise.all([
    fetch(`https://api.github.com/users/${username}`, { headers }),
    fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, { headers }),
  ]);

  if (!profileRes.ok) throw new Error(`GitHub user not found: ${username}`);
  if (!reposRes.ok) throw new Error("Could not load repositories");

  const [profile, repos] = await Promise.all([profileRes.json(), reposRes.json()]);

  // Show only the handpicked repos, in the order defined above
  const ownRepos = PINNED_REPOS
    .map((name) => repos.find((r) => r.name.toLowerCase() === name.toLowerCase()))
    .filter(Boolean);

  return { profile, repos: ownRepos };
}
