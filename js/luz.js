	var luzPuntual = new THREE.PointLight(0xFFFFFF);

			luzPuntual.position.x = 25;
			luzPuntual.position.y = 25;
			luzPuntual.position.z = 50;
			escena.add(luzPuntual);
			
			var ambientLight = new THREE.AmbientLight(0xFFFFFF);
	     escena.add(ambientLight);