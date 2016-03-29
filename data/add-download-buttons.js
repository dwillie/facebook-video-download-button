var addDownloadButtons = function() {
  var items = document.getElementsByClassName("userContentWrapper");
  items = [].slice.call(items);
  items.forEach( function(item) {
    var videos = item.getElementsByTagName("video");
    if (videos.length > 0) {
      var buttonContainer = item.getElementsByTagName("form")[0]
                                .getElementsByClassName("_42nr")[0];

      if (buttonContainer.children.length <= 3) {
        if (videos[0].src !== "" && !videos[0].src.includes(".html")) {
          buttonContainer.innerHTML += "<span style='float:right; margin-right:-20px'><a href=" + videos[0].src + "><img src=" +  self.options.downloadIconUrl + " style='width:13px; height:13px; opacity: 0.4'/> Download Video</a></span>";
        }
      }
    }
  });

  setTimeout(addDownloadButtons, 500);
};

setTimeout(addDownloadButtons, 500);
