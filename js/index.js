const app = "I don't do much.";

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${app}`
  }
}).then(res => res.json()).then(json => console.log(json))
