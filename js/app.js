$(function () {

  var category = $('.category');
  category.find('dd').hide();
  var blink = $('.blink');

  function blinkNews() {
    $('.blink').fadeOut(1000);
    $('.blink').fadeIn(1000);
  }
  setInterval(blinkNews, 2500);

  category.find('dt').on('click', function () {
    // toggle hide an element if is visible
    // or display the element if is not visible
    $(this).next().toggle();
  });


  $.ajax({
    type: "GET",
    url: "https://content.guardianapis.com/search?every&api-key=89145f8f-7649-499c-90ce-b74ce445a16e",
    success: function (data) {
      var news = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
      for (var i = 0; i < news.length; ++i) {
        var title = data.response.results[i].webTitle;
        var article = data.response.results[i].webUrl;
        $(".social").append("<div class='world'>" + "<li>" + "<a href=" + article + " target=_blank>" + title + "</a>" + "</li>" + "</div>");
      }
    }
  });

  $.ajax({
    type: "GET",
    url: "https://content.guardianapis.com/search?section=culture&api-key=89145f8f-7649-499c-90ce-b74ce445a16e",
    success: function (data) {
      var news = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
      for (var i = 0; i < news.length; i++) {
        var title = data.response.results[i].webTitle;
        var article = data.response.results[i].webUrl;
        $(".culture").append("<div class='cultures'>" + "<li>" + "<a href=" + article + " target=_blank>" + title + "</a>" + "</li>" + "</div>");
      }
    }
  });

  $.ajax({
    type: "GET",
    url: "https://content.guardianapis.com/search?section=business&api-key=89145f8f-7649-499c-90ce-b74ce445a16e",
    success: function (data) {
      var news = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
      for (var i = 0; i < news.length; i++) {
        var title = data.response.results[i].webTitle;
        var article = data.response.results[i].webUrl;
        $(".business").append("<div class='busines'>" + "<li>" + "<a href=" + article + " target=_blank>" + title + "</a>" + "</li>" + "</div>");
      }
    }
  });

  $.ajax({
    type: "GET",
    url: "https://content.guardianapis.com/search?section=technology&api-key=89145f8f-7649-499c-90ce-b74ce445a16e",
    success: function (data) {
      var news = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
      for (var i = 0; i < news.length; i++) {
        var title = data.response.results[i].webTitle;
        var article = data.response.results[i].webUrl;
        $(".technology").append("<div class='tech'>" + "<li>" + "<a href=" + article + " target=_blank>" + title + "</a>" + "</li>" + "</div>");
      }
    }
  });

  $.ajax({
    type: "GET",
    url: "https://content.guardianapis.com/search?section=science&api-key=89145f8f-7649-499c-90ce-b74ce445a16e",
    success: function (data) {
      var news = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
      for (var i = 0; i < news.length; i++) {
        var title = data.response.results[i].webTitle;
        var article = data.response.results[i].webUrl;
        $(".science").append("<div class='sci'>" + "<li>" + "<a href=" + article + " target=_blank>" + title + "</a>" + "</li>" + "</div>");
      }
    }
  });

  $.ajax({
    type: "GET",
    url: "https://content.guardianapis.com/search?section=travel&api-key=89145f8f-7649-499c-90ce-b74ce445a16e",
    success: function (data) {
      var news = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
      for (var i = 0; i < news.length; i++) {
        var title = data.response.results[i].webTitle;
        var article = data.response.results[i].webUrl;
        $(".travel").append("<div class='travels'>" + "<li>" + "<a href=" + article + " target=_blank>" + title + "</a>" + "</li>" + "</div>");
      }
    }
  });

  $.ajax({
    type: "GET",
    url: "https://content.guardianapis.com/search?section=sport&api-key=89145f8f-7649-499c-90ce-b74ce445a16e",
    success: function (data) {
      var news = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
      for (var i = 0; i < news.length; i++) {
        var title = data.response.results[i].webTitle;
        var article = data.response.results[i].webUrl;
        $(".sport").append("<div class='sports'>" + "<li>" + "<a href=" + article + " target=_blank>" + title + "</a>" + "</li>" + "</div>");
      }
    }
  });

  $.ajax({
    type: "GET",
    url: "https://content.guardianapis.com/search?section=weather&api-key=89145f8f-7649-499c-90ce-b74ce445a16e",
    success: function (data) {
      var news = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
      for (var i = 0; i < news.length; i++) {
        var title = data.response.results[i].webTitle;
        var article = data.response.results[i].webUrl;
        $(".weather").append("<div class='wea'>" + "<li>" + "<a href=" + article + " target=_blank>" + title + "</a>" + "</li>" + "</div>");
      }
    }

  });

});