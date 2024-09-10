AFRAME.registerComponent('gameplay',{
    init: function(){
         melanie=5
        this.el.addEventListener('collide',function(e){
            e.detail.target.el.remove();
            melanie=melanie-1
             turtlesRemainingText = document.getElementById("count")
            turtlesRemainingText.setAttribute('text',{value: String(melanie)})
            if(melanie==0){
                tex= document.getElementById ("con")
                tex.setAttribute('text',{value:"You're Done!"})
            }
        });

    },
});