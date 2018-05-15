var results = [];
Array.from(document.querySelectorAll("pre > p")).forEach((element) => {results.push(element.innerHTML.split("<span")[0]);});
copy(results.join("\<br>"));
