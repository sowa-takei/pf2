{"changed":true,"filter":false,"title":"application.js","tooltip":"/pf2/app/assets/javascripts/application.js","value":"// This is a manifest file that'll be compiled into application.js, which will include all the files\n// listed below.\n//\n// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,\n// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.\n//\n// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the\n// compiled file. JavaScript code in this file should be added after the last require_* statement.\n//\n// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details\n// about supported directives.\n//\n//= require jquery3\n//= require popper\n//= require bootstrap-sprockets\n//= require jquery\n//= require jquery_ujs\n//= require turbolinks\n//= require_tree .\n\n$(document).ready(function(){\n  $('.test').on('click', function(){\n    $(this).css('color','red');\n  });\n});\n\n\n\n$(document).ready(function () {\n  $(\"#images\").skippr({\n    // スライドショーの変化 (\"fade\" or \"slide\")\n    transition : 'slide',\n    // 変化に係る時間(ミリ秒)\n    speed : 500,\n    // easingの種類\n    easing : 'easeOutQuart',\n    // ナビゲーションの形(\"block\" or \"bubble\")\n    navType : 'block',\n    // 子要素の種類(\"div\" or \"img\")\n    childrenElementType : 'div',\n    // ナビゲーション矢印の表示(trueで表示)\n    arrows : true,\n    // スライドショーの自動再生(falseで自動再生なし)\n    autoPlay : true,\n    // 自動再生時のスライド切替間隔(ミリ秒)\n    autoPlayDuration : 3000,\n    // キーボードの矢印キーによるスライド送りの設定(trueで有効)\n    keyboardOnAlways : true,\n    // 一枚目のスライド表示時に戻る矢印を表示するかどうか(falseで非表示)\n    hidePrevious : false\n  });\n});","undoManager":{"mark":54,"position":54,"stack":[[{"start":{"row":18,"column":18},"end":{"row":19,"column":0},"action":"insert","lines":["",""],"id":8},{"start":{"row":19,"column":0},"end":{"row":20,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":20,"column":0},"end":{"row":21,"column":13},"action":"insert","lines":["var title = \"javascriptが使えました\";","alert(title);"],"id":9}],[{"start":{"row":20,"column":0},"end":{"row":22,"column":0},"action":"remove","lines":["var title = \"javascriptが使えました\";","alert(title);",""],"id":10}],[{"start":{"row":20,"column":0},"end":{"row":20,"column":1},"action":"insert","lines":["$"],"id":11}],[{"start":{"row":20,"column":1},"end":{"row":20,"column":3},"action":"insert","lines":["()"],"id":12}],[{"start":{"row":20,"column":2},"end":{"row":20,"column":3},"action":"insert","lines":["d"],"id":13},{"start":{"row":20,"column":3},"end":{"row":20,"column":4},"action":"insert","lines":["o"]}],[{"start":{"row":20,"column":2},"end":{"row":20,"column":4},"action":"remove","lines":["do"],"id":14},{"start":{"row":20,"column":2},"end":{"row":20,"column":10},"action":"insert","lines":["document"]}],[{"start":{"row":20,"column":11},"end":{"row":20,"column":12},"action":"insert","lines":["."],"id":15},{"start":{"row":20,"column":12},"end":{"row":20,"column":13},"action":"insert","lines":["r"]},{"start":{"row":20,"column":13},"end":{"row":20,"column":14},"action":"insert","lines":["e"]},{"start":{"row":20,"column":14},"end":{"row":20,"column":15},"action":"insert","lines":["d"]}],[{"start":{"row":20,"column":14},"end":{"row":20,"column":15},"action":"remove","lines":["d"],"id":16}],[{"start":{"row":20,"column":14},"end":{"row":20,"column":15},"action":"insert","lines":["a"],"id":17}],[{"start":{"row":20,"column":12},"end":{"row":20,"column":15},"action":"remove","lines":["rea"],"id":18},{"start":{"row":20,"column":12},"end":{"row":20,"column":19},"action":"insert","lines":["ready()"]}],[{"start":{"row":20,"column":18},"end":{"row":20,"column":19},"action":"insert","lines":["f"],"id":19},{"start":{"row":20,"column":19},"end":{"row":20,"column":20},"action":"insert","lines":["u"]},{"start":{"row":20,"column":20},"end":{"row":20,"column":21},"action":"insert","lines":["n"]},{"start":{"row":20,"column":21},"end":{"row":20,"column":22},"action":"insert","lines":["c"]},{"start":{"row":20,"column":22},"end":{"row":20,"column":23},"action":"insert","lines":["t"]},{"start":{"row":20,"column":23},"end":{"row":20,"column":24},"action":"insert","lines":["i"]},{"start":{"row":20,"column":24},"end":{"row":20,"column":25},"action":"insert","lines":["o"]}],[{"start":{"row":20,"column":25},"end":{"row":20,"column":26},"action":"insert","lines":["n"],"id":20}],[{"start":{"row":20,"column":26},"end":{"row":20,"column":28},"action":"insert","lines":["()"],"id":21}],[{"start":{"row":20,"column":28},"end":{"row":20,"column":30},"action":"insert","lines":["{}"],"id":22}],[{"start":{"row":20,"column":29},"end":{"row":22,"column":0},"action":"insert","lines":["","  ",""],"id":23}],[{"start":{"row":21,"column":2},"end":{"row":21,"column":3},"action":"insert","lines":["$"],"id":24}],[{"start":{"row":21,"column":3},"end":{"row":21,"column":5},"action":"insert","lines":["()"],"id":25}],[{"start":{"row":21,"column":4},"end":{"row":21,"column":6},"action":"insert","lines":["''"],"id":26}],[{"start":{"row":21,"column":5},"end":{"row":21,"column":6},"action":"insert","lines":["."],"id":27},{"start":{"row":21,"column":6},"end":{"row":21,"column":7},"action":"insert","lines":["t"]},{"start":{"row":21,"column":7},"end":{"row":21,"column":8},"action":"insert","lines":["e"]},{"start":{"row":21,"column":8},"end":{"row":21,"column":9},"action":"insert","lines":["s"]},{"start":{"row":21,"column":9},"end":{"row":21,"column":10},"action":"insert","lines":["t"]}],[{"start":{"row":21,"column":12},"end":{"row":21,"column":13},"action":"insert","lines":["."],"id":28},{"start":{"row":21,"column":13},"end":{"row":21,"column":14},"action":"insert","lines":["o"]},{"start":{"row":21,"column":14},"end":{"row":21,"column":15},"action":"insert","lines":["n"]}],[{"start":{"row":21,"column":15},"end":{"row":21,"column":17},"action":"insert","lines":["()"],"id":29}],[{"start":{"row":21,"column":16},"end":{"row":21,"column":18},"action":"insert","lines":["''"],"id":30}],[{"start":{"row":21,"column":17},"end":{"row":21,"column":18},"action":"insert","lines":["c"],"id":31},{"start":{"row":21,"column":18},"end":{"row":21,"column":19},"action":"insert","lines":["l"]},{"start":{"row":21,"column":19},"end":{"row":21,"column":20},"action":"insert","lines":["i"]},{"start":{"row":21,"column":20},"end":{"row":21,"column":21},"action":"insert","lines":["c"]},{"start":{"row":21,"column":21},"end":{"row":21,"column":22},"action":"insert","lines":["k"]}],[{"start":{"row":21,"column":23},"end":{"row":21,"column":24},"action":"insert","lines":["."],"id":32}],[{"start":{"row":21,"column":23},"end":{"row":21,"column":24},"action":"remove","lines":["."],"id":33}],[{"start":{"row":21,"column":23},"end":{"row":21,"column":24},"action":"insert","lines":[","],"id":34}],[{"start":{"row":21,"column":24},"end":{"row":21,"column":25},"action":"insert","lines":[" "],"id":35},{"start":{"row":21,"column":25},"end":{"row":21,"column":26},"action":"insert","lines":["f"]},{"start":{"row":21,"column":26},"end":{"row":21,"column":27},"action":"insert","lines":["u"]},{"start":{"row":21,"column":27},"end":{"row":21,"column":28},"action":"insert","lines":["n"]},{"start":{"row":21,"column":28},"end":{"row":21,"column":29},"action":"insert","lines":["c"]}],[{"start":{"row":21,"column":29},"end":{"row":21,"column":30},"action":"insert","lines":["t"],"id":36},{"start":{"row":21,"column":30},"end":{"row":21,"column":31},"action":"insert","lines":["i"]},{"start":{"row":21,"column":31},"end":{"row":21,"column":32},"action":"insert","lines":["o"]},{"start":{"row":21,"column":32},"end":{"row":21,"column":33},"action":"insert","lines":["n"]}],[{"start":{"row":21,"column":33},"end":{"row":21,"column":35},"action":"insert","lines":["()"],"id":37}],[{"start":{"row":21,"column":35},"end":{"row":21,"column":37},"action":"insert","lines":["{}"],"id":38}],[{"start":{"row":21,"column":36},"end":{"row":23,"column":2},"action":"insert","lines":["","    ","  "],"id":39}],[{"start":{"row":22,"column":4},"end":{"row":22,"column":5},"action":"insert","lines":["$"],"id":40}],[{"start":{"row":22,"column":5},"end":{"row":22,"column":7},"action":"insert","lines":["()"],"id":41}],[{"start":{"row":22,"column":6},"end":{"row":22,"column":7},"action":"insert","lines":["t"],"id":42},{"start":{"row":22,"column":7},"end":{"row":22,"column":8},"action":"insert","lines":["h"]},{"start":{"row":22,"column":8},"end":{"row":22,"column":9},"action":"insert","lines":["i"]},{"start":{"row":22,"column":9},"end":{"row":22,"column":10},"action":"insert","lines":["s"]}],[{"start":{"row":22,"column":11},"end":{"row":22,"column":12},"action":"insert","lines":["."],"id":43},{"start":{"row":22,"column":12},"end":{"row":22,"column":13},"action":"insert","lines":["c"]},{"start":{"row":22,"column":13},"end":{"row":22,"column":14},"action":"insert","lines":["s"]},{"start":{"row":22,"column":14},"end":{"row":22,"column":15},"action":"insert","lines":["s"]}],[{"start":{"row":22,"column":15},"end":{"row":22,"column":17},"action":"insert","lines":["()"],"id":44}],[{"start":{"row":22,"column":16},"end":{"row":22,"column":18},"action":"insert","lines":["''"],"id":45}],[{"start":{"row":22,"column":17},"end":{"row":22,"column":18},"action":"insert","lines":["c"],"id":46},{"start":{"row":22,"column":18},"end":{"row":22,"column":19},"action":"insert","lines":["o"]},{"start":{"row":22,"column":19},"end":{"row":22,"column":20},"action":"insert","lines":["k"]}],[{"start":{"row":22,"column":19},"end":{"row":22,"column":20},"action":"remove","lines":["k"],"id":47}],[{"start":{"row":22,"column":19},"end":{"row":22,"column":20},"action":"insert","lines":["l"],"id":48},{"start":{"row":22,"column":20},"end":{"row":22,"column":21},"action":"insert","lines":["o"]},{"start":{"row":22,"column":21},"end":{"row":22,"column":22},"action":"insert","lines":["r"]}],[{"start":{"row":22,"column":23},"end":{"row":22,"column":24},"action":"insert","lines":[","],"id":49},{"start":{"row":22,"column":24},"end":{"row":22,"column":25},"action":"insert","lines":["r"]},{"start":{"row":22,"column":25},"end":{"row":22,"column":26},"action":"insert","lines":["e"]},{"start":{"row":22,"column":26},"end":{"row":22,"column":27},"action":"insert","lines":["d"]}],[{"start":{"row":22,"column":26},"end":{"row":22,"column":27},"action":"remove","lines":["d"],"id":50},{"start":{"row":22,"column":25},"end":{"row":22,"column":26},"action":"remove","lines":["e"]},{"start":{"row":22,"column":24},"end":{"row":22,"column":25},"action":"remove","lines":["r"]}],[{"start":{"row":22,"column":24},"end":{"row":22,"column":25},"action":"insert","lines":["#"],"id":51}],[{"start":{"row":22,"column":24},"end":{"row":22,"column":25},"action":"remove","lines":["#"],"id":52}],[{"start":{"row":22,"column":24},"end":{"row":22,"column":26},"action":"insert","lines":["''"],"id":53}],[{"start":{"row":22,"column":25},"end":{"row":22,"column":26},"action":"insert","lines":["e"],"id":54},{"start":{"row":22,"column":26},"end":{"row":22,"column":27},"action":"insert","lines":["w"]}],[{"start":{"row":22,"column":26},"end":{"row":22,"column":27},"action":"remove","lines":["w"],"id":55},{"start":{"row":22,"column":25},"end":{"row":22,"column":26},"action":"remove","lines":["e"]}],[{"start":{"row":22,"column":25},"end":{"row":22,"column":26},"action":"insert","lines":["r"],"id":56},{"start":{"row":22,"column":26},"end":{"row":22,"column":27},"action":"insert","lines":["e"]},{"start":{"row":22,"column":27},"end":{"row":22,"column":28},"action":"insert","lines":["d"]}],[{"start":{"row":22,"column":30},"end":{"row":22,"column":31},"action":"insert","lines":[";"],"id":57}],[{"start":{"row":23,"column":4},"end":{"row":23,"column":5},"action":"insert","lines":[";"],"id":58}],[{"start":{"row":24,"column":2},"end":{"row":24,"column":3},"action":"insert","lines":[";"],"id":59}],[{"start":{"row":24,"column":3},"end":{"row":25,"column":0},"action":"insert","lines":["",""],"id":60}],[{"start":{"row":25,"column":0},"end":{"row":26,"column":0},"action":"insert","lines":["",""],"id":61}],[{"start":{"row":25,"column":0},"end":{"row":26,"column":0},"action":"insert","lines":["",""],"id":62}],[{"start":{"row":26,"column":0},"end":{"row":30,"column":3},"action":"insert","lines":["$(document).ready(function () {","  $('.jquery').on('click', function(){","    $(this).css('color','red');","  });","});"],"id":63}]]},"ace":{"folds":[],"scrolltop":468,"scrollleft":0,"selection":{"start":{"row":26,"column":0},"end":{"row":26,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":32,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1642945323456}