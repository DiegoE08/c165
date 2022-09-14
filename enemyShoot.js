AFRAME.registerComponent("enemy-bullets", {
    init: function () {
        setInterval(this.shootEnemyBullet, 2000)
    },
    shootEnemyBullet: function () {

        //obtener todos los enemigos usando el nombre de la clase
        var els = document.querySelectorAll(".enemy");

        for (var i = 0; i < els.length; i++) {

            //Entidad de la bala del enemigo
            var enemyBullet = document.createElement("a-entity");

            enemyBullet.setAttribute("geometry", {
                primitive: "sphere",
                radius: 0.1,
            });

            enemyBullet.setAttribute("material", "color", "#282B29");

            var position = els[i].getAttribute("position")

            enemyBullet.setAttribute("position", {
                x: position.x + 1.5,
                y: position.y + 3.5,
                z: position.z,
            });

            var scene = document.querySelector("#scene");
            scene.appendChild(enemyBullet);

            //Three.js Vector Variables
            

            //Obtener la posición del enemigo y jugador usando el método Three.js 
            

            //Establecer la velocidad y su dirección
            
            //Establecer el atributo del cuerpo dinámico
            

            //Obtener atributo de texto
            

            //Evento de colisión con las balas enemigas
            enemyBullet.addEventListener("collide", function (e) {
                if (e.detail.body.el.id === "weapon") {

                    //Agrega las condiciones aquí



                }
            });

        }
    },

});
