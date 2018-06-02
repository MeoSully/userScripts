copy(Array.from(document.querySelectorAll("pre > p")).map((element) => {return element.innerHTML.split("<span")[0];}).join("<br>"));
