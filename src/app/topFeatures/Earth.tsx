import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// ３Dモデル

function Earth() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;

    const sizes = {
      width: 438.75,
      height: window.innerHeight / 2,
    };

    // scene
    const scene = new THREE.Scene();

    // camera
    const camera = new THREE.PerspectiveCamera(
      85,
      sizes.width / sizes.height,
      0.1,
      1000
    );
    camera.position.set(0, 0, 2);

    // renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(window.devicePixelRatio);

    // ライトの設定
    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(0, 1, 1);
    scene.add(light);
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // GLTFモデルのローダー
    let model: THREE.Object3D<THREE.Object3DEventMap>; // モデルを格納する変数を拡張
    const gltfLoader = new GLTFLoader();
    gltfLoader.load("/models/earth.gltf", (gltf) => {
      model = gltf.scene;
      model.scale.set(0.14, 0.14, 0.14);
      scene.add(model);
    });

    const tick = () => {
      if (model) {
        // Y軸周りに毎フレーム回転（数字はスピード）
        model.rotation.y += 0.0025;
      }
      renderer.render(scene, camera);
      requestAnimationFrame(tick);
    };
    tick();
  }, []);

  return (
    <canvas
      id="canvas"
      ref={canvasRef}
      className="  mx-auto  xl:ml-[65%] "
    ></canvas>
  );
}

export default Earth;
