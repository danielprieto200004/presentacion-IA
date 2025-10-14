import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer, RenderPass, BloomEffect, EffectPass } from 'postprocessing';

export const HyperspeedSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Crear renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Crear escena, cámara, luz
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const geometry = new THREE.TorusKnotGeometry(1, 0.3, 256, 32);
    const material = new THREE.MeshStandardMaterial({ color: 0x03b3c3, metalness: 1, roughness: 0.2 });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const light = new THREE.PointLight(0xffffff, 2);
    light.position.set(10, 10, 10);
    scene.add(light);

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    composer.addPass(new EffectPass(camera, new BloomEffect()));

    // --- GRABACIÓN AUTOMÁTICA REMOVIDA ---

    // Animación
    const animate = () => {
      requestAnimationFrame(animate);
      mesh.rotation.x += 0.02;
      mesh.rotation.y += 0.03;
      composer.render();
    };
    animate();

    // Limpieza
    return () => {
      renderer.dispose();
      containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100vw', height: '100vh', background: 'black' }} />;
};
