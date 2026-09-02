// scripts/fetch-github.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GITHUB_USERNAME = "lucid-techwrld";

const TARGET_REPOS = [
  { owner: "lucid-techwrld", repo: "zello" },
  { owner: "lucid-techwrld", repo: "neuronosh" },
  { owner: "lucid-techwrld", repo: "lawsabi" },
  { owner: "lucid-techwrld", repo: "shopibag" },
  { owner: "TelecomOS",      repo: "subcell.vtu" }, // Private repo inside org
  { owner: "lucid-techwrld", repo: "myxellia" },
];

const outputPath = path.join(__dirname, '../src/data/githubData.json');

async function fetchGitHubData() {
  console.log("Fetching GitHub data at build time...");
  
  // Grab token from environment variables (Netlify or local .env)
  const token = process.env.GH_PAT || process.env.GITHUB_TOKEN;
  
  const headers = { 
    Accept: "application/vnd.github+json",
    ...(token ? { Authorization: `Bearer ${token}` } : {})
  };

  if (!token) {
    console.warn("⚠️ Warning: No GH_PAT token found in environment. Private repos will fail to fetch!");
  }

  try {
    const profileRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { headers });
    if (!profileRes.ok) throw new Error(`Failed to fetch profile: ${profileRes.status}`);
    const profile = await profileRes.json();

    const repoPromises = TARGET_REPOS.map(async ({ owner, repo }) => {
      const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, { headers });
      if (!res.ok) {
        console.warn(`⚠️ Warning: Could not fetch repo ${owner}/${repo} (Status: ${res.status})`);
        return null;
      }
      return res.json();
    });

    const repos = (await Promise.all(repoPromises)).filter(Boolean);

    const payload = { profile, repos };
    
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, JSON.stringify(payload, null, 2));
    console.log("Successfully cached GitHub data to src/data/githubData.json");

  } catch (error) {
    console.warn("⚠️ Warning: Build-time GitHub fetch failed:", error.message);
    
    if (fs.existsSync(outputPath)) {
      console.log("Using existing local githubData.json cache.");
    } else {
      const fallbackPayload = {
        profile: { name: "Davis Ayomide", public_repos: 6, followers: 0, following: 0 },
        repos: []
      };
      fs.mkdirSync(path.dirname(outputPath), { recursive: true });
      fs.writeFileSync(outputPath, JSON.stringify(fallbackPayload, null, 2));
    }
  }
}

fetchGitHubData();
