const userList = document.getElementById("hyf-people");

const responsePromise = ["FlorentinaPetica", "suvarna-ratna", "JiuTak"];

const responsedData = responsePromise.map((names) =>
  fetch(`https://api.github.com/search/repositories?q=user:${names}`)
);

Promise.all(responsedData)
  .then((response) => {
    return Promise.all(response.map((response) => response.json()));
  })
  .then((values) => {
    console.log(`In Promise.all!!!!!!!!`);

    values.forEach((hyf) => {
      const separated = hyf.items;

      // getting user's Name
      const userName = separated[0].owner.login;
      const nameList = document.createElement("li");
      nameList.innerHTML = userName;
      userList.append(nameList);

      const repositoryList = document.createElement("ul");
      nameList.append(repositoryList);

      // getting Repo's name
      separated.forEach((lists) => {
        printOutElement(lists);
      });
    });
  })
  .catch((err) => {
    console.error(err);
  });

function printOutElement(lists) {
  const repoList = document.createElement("li");
  repoList.innerHTML = lists.name + ": " + lists.html_url;
  repositoryList.append(repoList);
}
