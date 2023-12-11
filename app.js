let searchInputE1 = document.getElementById("searchInput");
let searchResultsE1 = document.getElementById("searchResults");
let spinnerE1 = document.getElementById("spinner");

function createAndAppendSearchResults(result) {
    let {
        title,
        link,
        description
    } = result;

    //Div container ----- result-item

    let resultItemE1 = document.createElement("div");
    resultItemE1.classList.add("result-item");
    searchResultsE1.appendChild(resultItemE1);

    //Anchor titile --- --result - titile

    let resultTitleE1 = document.createElement("a");
    resultTitleE1.classList.add("result-title");
    resultTitleE1.textContent = title;
    resultTitleE1.href = link;
    resultTitleE1.target = "_blank";
    resultItemE1.appendChild(resultTitleE1);

    //Title break   

    let titleBreakE1 = document.createElement("br");
    resultItemE1.appendChild(titleBreakE1);

    //Anchor url  ------ result-url

    let urlE1 = document.createElement("a");
    urlE1.classList.add("result-url")
    urlE1.href = link;
    urlE1.target = "_blank";
    urlE1.textContent = link;
    resultItemE1.appendChild(urlE1);

    //Line break

    let lineBreakE1 = document.createElement("br");
    resultItemE1.appendChild(lineBreakE1);

    //Paragraph description --- line description

    let descriptionE1 = document.createElement("p");
    descriptionE1.classList.add("link-description");
    descriptionE1.textContent = description;
    resultItemE1.appendChild(descriptionE1);
}

function displayResults(searchResults) {
    spinnerE1.classList.toggle("d-none");
    for (let result of searchResults) {
        createAndAppendSearchResults(result);
    }
}

function searchWikipedia(event) {
    if (event.key === "Enter") {
        searchResultsE1.textContent = "";
        spinnerE1.classList.toggle("d-none");
        let searchInput = searchInputE1.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                displayResults(search_results);
                console.log(search_results);
            });
    }
}
searchInputE1.addEventListener("keydown", searchWikipedia);