var news_api = "e0d63ae57c754738b29f29d664cec383";

var get_news = new XMLHttpRequest();
get_news.onreadystatechange = function() {

if (this.readyState == 4 && this.status == 200) {
    var newVar = JSON.parse(this.responseText);
    console.log(newVar);

    for (var i = 0; i < 10 ; ++i) {
      render(newVar.articles[i]);
    }

  } else if (this.readyState == 4) {
    console.log(this.responseText);
  }
}

get_news.open("GET", "https://newsapi.org/v2/top-headlines?country=us&apiKey=e0d63ae57c754738b29f29d664cec383", true);
get_news.setRequestHeader("x-api-key", news_api);
get_news.send();

function render(items) {
	var article = document.createElement("li");
	var articletitle = document.createElement("p");
	articletitle.innerHTML = items.title;
	var articlelink = document.createElement("a");
	articlelink.href = items.url;
	articlelink.innerHTML = "Link To Article Here";
	article.appendChild(articletitle);
	article.appendChild(articlelink);
	article.classList.add("listitems");
	document.getElementById("newslist").appendChild(article);
}