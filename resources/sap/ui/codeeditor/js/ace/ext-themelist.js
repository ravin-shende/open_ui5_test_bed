ace.define("ace/ext/themelist",["require","exports","module","ace/lib/fixoldbrowsers"],function(r,e,m){"use strict";r("ace/lib/fixoldbrowsers");var t=[["Chrome"],["Clouds"],["Crimson Editor"],["Dawn"],["Dreamweaver"],["Eclipse"],["GitHub"],["IPlastic"],["Solarized Light"],["TextMate"],["Tomorrow"],["XCode"],["Kuroir"],["KatzenMilch"],["SQL Server","sqlserver","light"],["Ambiance","ambiance","dark"],["Chaos","chaos","dark"],["Clouds Midnight","clouds_midnight","dark"],["Cobalt","cobalt","dark"],["Gruvbox","gruvbox","dark"],["idle Fingers","idle_fingers","dark"],["krTheme","kr_theme","dark"],["Merbivore","merbivore","dark"],["Merbivore Soft","merbivore_soft","dark"],["Mono Industrial","mono_industrial","dark"],["Monokai","monokai","dark"],["Pastel on dark","pastel_on_dark","dark"],["Solarized Dark","solarized_dark","dark"],["Terminal","terminal","dark"],["Tomorrow Night","tomorrow_night","dark"],["Tomorrow Night Blue","tomorrow_night_blue","dark"],["Tomorrow Night Bright","tomorrow_night_bright","dark"],["Tomorrow Night 80s","tomorrow_night_eighties","dark"],["Twilight","twilight","dark"],["Vibrant Ink","vibrant_ink","dark"]];e.themesByName={};e.themes=t.map(function(d){var n=d[1]||d[0].replace(/ /g,"_").toLowerCase();var a={caption:d[0],theme:"ace/theme/"+n,isDark:d[2]=="dark",name:n};e.themesByName[n]=a;return a;});});(function(){ace.require(["ace/ext/themelist"],function(){});})();
