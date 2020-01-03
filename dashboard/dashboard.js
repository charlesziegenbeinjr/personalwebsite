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

get_news.open("GET", "")