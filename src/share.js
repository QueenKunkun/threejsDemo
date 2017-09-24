// 创建场景相机渲染器平面几何体公共方法
function share() {
	var scene = new THREE.Scene();
	var renderer = new THREE.WebGLRenderer();
	renderer.setClearColor(new THREE.Color(0xEEEEEE,1.0));
	renderer.setSize(window.innerWidth,window.innerHeight);
	renderer.shadowMapEnabled = true;
	// 创建平面几何体
	var planeGeometry = new THREE.PlaneGeometry(60,30);
	var planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
	var plane = new THREE.Mesh(planeGeometry,planeMaterial);
	plane.rotation.x = -.5 * Math.PI;
	plane.position.set(15,0,0);
	
	scene.add(plane);
	
	return {
		scene: scene,
		camera: new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight,0.1,1000),
		renderer: renderer,
		plane: plane
	}
}
