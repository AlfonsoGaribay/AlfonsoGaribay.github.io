import { ShaderGradient, ShaderGradientCanvas } from '@shadergradient/react';

export default function ShaderGradientEmbed() {
  return (
    <ShaderGradientCanvas
      style={{ width: '100%', height: '100%', opacity: 0.6 }}
      className="h-full w-full"
      pointerEvents="none"
    >
      <ShaderGradient
        animate="on"
        axesHelper="off"
        bgColor1="#000000"
        bgColor2="#000000"
        brightness={1}
        cAzimuthAngle={180}
        cDistance={3.2}
        cPolarAngle={90}
        cameraZoom={1}
        color1="#ff5005"
        color2="#dbba95"
        color3="#d0bce1"
        destination="onCanvas"
        embedMode="off"
        envPreset="lobby"
        format="gif"
        fov={60}
        frameRate={10}
        gizmoHelper="hide"
        grain="on"
        lightType="3d"
        enableCameraUpdate={false}
        pixelDensity={1}
        positionX={-1.4}
        positionY={0}
        positionZ={0}
        range="disabled"
        rangeEnd={40}
        rangeStart={0}
        reflection={0.1}
        rotationX={0}
        rotationY={10}
        rotationZ={50}
        shader="defaults"
        type="waterPlane"
        uAmplitude={1}
        uDensity={1.3}
        uFrequency={5.5}
        uSpeed={0.3}
        uStrength={4}
        uTime={0}
        wireframe={false}
      />
    </ShaderGradientCanvas>
  );
}
