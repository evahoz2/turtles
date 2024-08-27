AFRAME.registerComponent('gameplay',{
    init: function(){
        var melanie=5
        this.el.addEventListener('collide',function(e){
            e.detail.target.el.remove();
            melanie=melanie-1
            var turtlesRemainingText = document.getElementById("count")
            turtlesRemainingText.setAttribute('text',{value: String(melanie)})
            if(melanie==0){
                
            }
        })

    }
})