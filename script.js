var r = document.querySelector(':root');

jQuery(".box").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
    jQuery(this).removeClass("animated")  
  })
  
  jQuery(".box").hover(function(){
    jQuery(this).addClass("animated");        
  })
  color = document.getElementById('color')
  color.addEventListener("input", function(){
    a=hexToRgbA(color.value)
    console.log(a)
    r.style.setProperty('--r', a[0]);
    r.style.setProperty('--g', a[1]);
    r.style.setProperty('--b', a[2]);
  }, false);
  function hexToRgbA(hex){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return [(c>>16)&255, (c>>8)&255, c&255];
    }
    throw new Error('Bad Hex');
}
