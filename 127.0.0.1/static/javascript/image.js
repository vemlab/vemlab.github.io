$(document).ready(function()
{
function getUrlVars()
  {
      var vars = [], hash;
      var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
      for(var i = 0; i < hashes.length; i++)
      {
          hash = hashes[i].split('=');
          vars.push(hash[0]);
          vars[hash[0]] = hash[1];
      }
      return vars;
  }
var id = getUrlVars()["id"];
  string = "p#"+id;
$(string).each(function(){
  content = $(this).css({'font-weight' : 'bold'});
});


function video_adapter(videoPtr,videoWidth,videoHeight)
{
  var win_width;
  win_width = $("#content").width();
  if (videoWidth != win_width)
  {
    videoPtr.attr({'width' : win_width, 'height' : 0.75 * win_width});
  }
  else {
    videoPtr.attr({'width' : videoWidth, 'height' : videoHeight});
  }
};

$("object").each(function()
{
  var videoWidth = $("#Video").width();
  var videoHeight = 0.75 * videoWidth;
  var videoPtr = $(this);

  video_adapter(videoPtr,videoWidth,videoHeight);
  $( window ).resize(function() {
  video_adapter(videoPtr,videoWidth,videoHeight);
});
});
$("embed").each(function()
{
  var videoWidth = $("#Video").width();
  var videoHeight = 0.75 * videoWidth;
  var videoPtr = $(this);
  video_adapter(videoPtr,videoWidth,videoHeight);
  $( window ).resize(function() {
  video_adapter(videoPtr,videoWidth,videoHeight);
});
});
$("img").load(function()
{
  function width_change(imagePtr)
  {
    var win_width;
    win_width = $("#content").width();
    div_width = $("#research").width();
    if (imageWidth > win_width || imageWidth > div_width)
    {
      imagePtr.css({'width' : '100%'});
    }
    else
    {
      imagePtr.css({'width' : imageWidth});
    }
  };
  var imageWidth = $(this).css('width', 'auto').width();
  var imagePtr = $(this);
  width_change(imagePtr);

  $( window ).resize(function() {
    width_change(imagePtr);
  });
});
$("div#research").each(function(){

  function width_change(imagePtr)
  {
    var win_width;
    win_width = $("#content").width();
    if ( win_width < 600)
    {
      divPtr.css({'width' : '100%'});
    }
    else
    {
      divPtr.css({'width' : "300"});
    }
  };
  var divWidth = $(this).css('width', 'auto').width();
  var divPtr = $(this);
  width_change(divPtr);

  $( window ).resize(function() {
  width_change(divPtr);

});
});
$("div#researchsecond").each(function(){

  function width_change(imagePtr)
  {
    var win_width;
    win_width = $("#content").width();
    if ( win_width < 960)
    {
      divPtr.css({'width' : '100%'});
    }
    else
    {
      divPtr.css({'width' : "860"});
    }
  };
  var divWidth = $(this).css('width', 'auto').width();
  var divPtr = $(this);
  width_change(divPtr);

  $( window ).resize(function() {
  width_change(divPtr);

});
});
$("div#people").each(function(){

  function width_change(imagePtr)
  {
    var win_width;
    win_width = $("#content").width();
    if ( win_width < 660)
    {
      divPtr.css({'width' : '60%'});
    }
    else
    {
      divPtr.css({'width' : "160"});
    }
  };
  var divWidth = $(this).css('width', 'auto').width();
  var divPtr = $(this);
  width_change(divPtr);

  $( window ).resize(function() {
  width_change(divPtr);

});
});
});
