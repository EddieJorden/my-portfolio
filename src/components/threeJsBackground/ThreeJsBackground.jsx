import React from 'react';
import * as THREE from 'three';

const ThreeJs = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );
    // camera.position.z = 1;
    // camera.rotation.x = Math.PI/2;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshLambertMaterial( { color: "#3CF73C" } );

    const light = new THREE.HemisphereLight(0XFFFFBB, 0X080820, 1)
    scene.add(light)

    const cube = new THREE.Mesh( geometry, material );
    scene.add(cube);

    camera.position.z = 5;

    const animate = function () {
        requestAnimationFrame( animate );

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render( scene, camera );
    };

    animate();

    return (
        <div>
            <>
                hello there
            </>
        </div>
    );
}

export default ThreeJs;

// const ThreeJs = () => {
//     let scene, camera, renderer;
//     const init = () => {
//       //create scene object
//       scene = new THREE.Scene();

//     //create stars object
//     const starGeo = new THREE.Geometry();
//     // for(let i=0;i<6000;i++) {
//     //     let star = new THREE.Vector3(
//     //         Math.random() * 600 - 300,
//     //         Math.random() * 600 - 300,
//     //         Math.random() * 600 - 300
//     //     );
//     // starGeo.vertices.push(star);
//     // }

//     let sprite = new THREE.TextureLoader().load( 'my-portfolio/public/space-warp-effect-threejs-tutorial-4.jpeg' );
//     let starMaterial = new THREE.PointsMaterial({
//         color: 0xaaaaaa,
//         size: 0.7,
//         map: sprite
//     });

//     //setup camera with facing upward
//     camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight, 1, 1000);
//     camera.position.z = 1;
//     camera.rotation.x = Math.PI/2;
    
//     //setup renderer
//     renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.body.appendChild(renderer.domElement);

//     }
//     //rendering loop
//     const animate = () => {
//         renderer.render(scene, camera);
//         requestAnimationFrame(animate);
//     }
//     init();

//     return (
//         <></>
//     )
// }

// export default ThreeJs;