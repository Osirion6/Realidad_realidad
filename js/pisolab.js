		var pisoTexture = new THREE.ImageUtils.loadTexture( 'piso2.jpg' );
	    pisoTexture.wrapS = pisoTexture.wrapT = THREE.RepeatWrapping; 
	    pisoTexture.repeat.set( 10, 10 );
	    // DoubleSide: render texture on both sides of mesh
	    var pisoMaterial = new THREE.MeshLambertMaterial( { map: pisoTexture, side: THREE.DoubleSide } );
	    var pisoGeometry = new THREE.PlaneGeometry(50, 50, 1, 1);
	    var piso = new THREE.Mesh(pisoGeometry, pisoMaterial);
	    piso.rotation.x = Math.PI / 2;
	    piso.rotation.y = Math.PI;
	    escena.add(piso);