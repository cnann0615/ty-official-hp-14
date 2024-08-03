import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// ３Dモデル

function Earth() {
  // ３Dモデルを表示するDOM要素をuseRefでもってくる
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // useEffect内に３Dモデルの設定を書くことで、レンダリング時に３Dモデルが生成されるようになる。
  // Three.jsで３Dモデルを出力するには、以下に定義する、scene, camera, rendererの３つのオブジェクトが最低限必要となる。
  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;

    const sizes = {
      width: 350,
      height: 370,
    };

    // scene（3D空間全体の情報をもつオブジェクト）
    const scene = new THREE.Scene();

    // camera（３Dモデルをどのように画面に映すかを、カメラをのぞいた時のようなイメージで定義できるオブジェクト）
    const camera = new THREE.PerspectiveCamera(
      85, //垂直視野
      sizes.width / sizes.height, //アスペクト比
      0.1, //Near（奥行きの手前側）
      1000 //Far（奥行きの最奥）→NearとFarの間にあるものが画面に映し出される。
    );
    camera.position.set(0, 0, 2); //カメラ自体の位置（x軸, y軸, z軸）

    // renderer（レンダリング設定）
    const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({
      canvas: canvas, //useRefでとってきた要素。ここに３Dモデルがレンダリングされる。
      antialias: true, //3Dモデルの端を滑らかにする。
      alpha: true, //背景の設定（透明にしたい場合はtrue）
    });
    renderer.setSize(sizes.width, sizes.height); //ここの記述はお決まり。
    renderer.setPixelRatio(window.devicePixelRatio); //ここの記述はお決まり。

    // ライトの設定（この設定がないと映らない３Dモデルがある）
    const light = new THREE.PointLight(0xffffff, 1); //特定の方向からのライト（第１引数：光の色、第２引数：光の強さ）
    light.position.set(0, 1, 1); //sceneから見たライトの位置　（第１引数：x軸、第２引数：y軸、第３引数：z軸）
    scene.add(light); //sceneにライトを紐付け
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); //全方向からのライト≒モデルそのものの光度（第１引数：光の色、第２引数：光の強さ）
    scene.add(ambientLight); //sceneにライトを紐付け

    // GLTFモデルのインポート
    let model: THREE.Object3D<THREE.Object3DEventMap>; // モデルを格納する変数
    const gltfLoader = new GLTFLoader();
    gltfLoader.load("/models/earth.gltf", (gltf) => {
      model = gltf.scene;
      model.scale.set(0.14, 0.14, 0.14); //modelの大きさ（スケール）を設定
      scene.add(model); //sceneにmodelを紐付け
    });

    // アニメーション
    const tick = () => {
      if (model) {
        // modelを回転させる
        model.rotation.y += 0.0025; // Y軸周りに毎フレーム回転（数字はスピード）
      }
      renderer.render(scene, camera); // 現在のシーンをカメラの視点からレンダリング（描画）（ここの記述はお決まり。）
      requestAnimationFrame(tick); // ブラウザに次の再描画のフレームでtick関数を呼び出すように要求（ここの記述はお決まり。）
    };
    tick(); //初回のアニメーションフレームを開始するためにtick関数を一度呼び出す（ここの記述はお決まり。）
  }, []);

  return (
    <canvas
      id="canvas"
      ref={canvasRef}
      className="  mx-auto  xl:ml-[67%]"
    ></canvas>
  );
}

export default Earth;
