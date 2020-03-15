!(function(a) {
  var e,
    d =
      '<svg><symbol id="icon-folder" viewBox="0 0 1024 1024"><path d="M471.408 224l-36.4-80H80v736h864V224H471.408zM864 800H160V224h223.504l36.4 80H864v496z" fill="#565D64" ></path></symbol><symbol id="icon-markdown-line" viewBox="0 0 1024 1024"><path d="M128 128h768a42.666667 42.666667 0 0 1 42.666667 42.666667v682.666666a42.666667 42.666667 0 0 1-42.666667 42.666667H128a42.666667 42.666667 0 0 1-42.666667-42.666667V170.666667a42.666667 42.666667 0 0 1 42.666667-42.666667z m42.666667 85.333333v597.333334h682.666666V213.333333H170.666667z m128 448H213.333333v-298.666666h85.333334l85.333333 85.333333 85.333333-85.333333h85.333334v298.666666h-85.333334v-170.666666l-85.333333 85.333333-85.333333-85.333333v170.666666z m469.333333-128h85.333333l-128 128-128-128h85.333334v-170.666666h85.333333v170.666666z"  ></path></symbol></svg>',
    t = (e = document.getElementsByTagName("script"))[
      e.length - 1
    ].getAttribute("data-injectcss");
  if (t && !a.__iconfont__svg__cssinject__) {
    a.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
      );
    } catch (e) {
      console && console.log(e);
    }
  }
  !(function(e) {
    if (document.addEventListener)
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState))
        setTimeout(e, 0);
      else {
        var t = function() {
          document.removeEventListener("DOMContentLoaded", t, !1), e();
        };
        document.addEventListener("DOMContentLoaded", t, !1);
      }
    else
      document.attachEvent &&
        ((o = e),
        (i = a.document),
        (l = !1),
        (d = function() {
          try {
            i.documentElement.doScroll("left");
          } catch (e) {
            return void setTimeout(d, 50);
          }
          n();
        })(),
        (i.onreadystatechange = function() {
          "complete" == i.readyState && ((i.onreadystatechange = null), n());
        }));
    function n() {
      l || ((l = !0), o());
    }
    var o, i, l, d;
  })(function() {
    var e, t, n, o, i, l;
    ((e = document.createElement("div")).innerHTML = d),
      (d = null),
      (t = e.getElementsByTagName("svg")[0]) &&
        (t.setAttribute("aria-hidden", "true"),
        (t.style.position = "absolute"),
        (t.style.width = 0),
        (t.style.height = 0),
        (t.style.overflow = "hidden"),
        (n = t),
        (o = document.body).firstChild
          ? ((i = n), (l = o.firstChild).parentNode.insertBefore(i, l))
          : o.appendChild(n));
  });
})(window);
