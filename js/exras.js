var controls = new THREE.OrbitControls( camara, renderer.domElement );
			
	
	var skyBoxGeometry = new THREE.CubeGeometry( 10000, 10000, 10000 );
	var skyBoxMaterial = new THREE.MeshBasicMaterial( { color: 0x9999ff, side: THREE.BackSide } );
	var skyBox = new THREE.Mesh( skyBoxGeometry, skyBoxMaterial );
	escena.add(skyBox);
	
	//escena.fog = new THREE.FogExp2( 0x9999ff, 0.00025 );