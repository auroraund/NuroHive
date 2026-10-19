const USERNAME = "auroraund";
const REPO_NAME = "masonry-custamize"; // ポートフォリオのリポジトリなど

async function fetchGitHistory() {
  const container = document.getElementById("commit-list");
  try {
    const response = await fetch(
      `https://api.github.com/repos/${USERNAME}/${REPO_NAME}/commits?per_page=5`,
    );
    if (!response.ok) throw new Error("Failed to fetch");

    const commits = await response.json();
    container.innerHTML = ""; // ローディング表示を消す

    commits.forEach((item) => {
      const li = document.createElement("li");
      const date = new Date(item.commit.author.date).toLocaleDateString(
        "ja-JP",
      );
      const message = item.commit.message;

      li.innerHTML = `<span>${date}</span> - ${message}`;
      container.appendChild(li);
    });
  } catch (error) {
    container.innerHTML = "<li>履歴の取得に失敗しました</li>";
  }
}

fetchGitHistory();
