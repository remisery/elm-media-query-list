var _user$project$Native_MediaQueryList = function() {

  var nativeScheduler = _elm_lang$core$Native_Scheduler

  function matchMedia(mediaQuery) {
    return nativeScheduler.nativeBinding(function(callback) {
      var result;
      try {
        var mediaQueryList = window.matchMedia(mediaQuery);
        result = nativeScheduler.succeed({
          media: mediaQueryList.media,
          matches: mediaQueryList.matches
        });
      } catch (error) {
        result = nativeScheduler.fail({
          stack: error.stack,
          message: error.message
        });
      }
      callback(result);
    });
  };

  return {
    matchMedia: matchMedia
  };

}();
