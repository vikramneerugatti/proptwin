"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import {
  Maximize,
  Minimize,
  RotateCcw,
  MousePointer2,
} from "lucide-react";
import { useRef, useState } from "react";
import * as THREE from "three";

type RoomName =
  | "Overview"
  | "Living Room"
  | "Master Bedroom"
  | "Bedroom 2"
  | "Kitchen"
  | "Balcony";

const roomInfo: Record<
  RoomName,
  {
    title: string;
    description: string;
    camera: [number, number, number];
    target: [number, number, number];
  }
> = {
  Overview: {
    title: "2BHK Overview",
    description:
      "Explore the complete PropTwin digital property twin. Rotate, zoom and select individual spaces.",
    camera: [14, 12, 16],
    target: [0, 0, 0],
  },

  "Living Room": {
    title: "Living Room",
    description:
      "A spacious living area designed for family gatherings, relaxation and entertainment.",
    camera: [-10, 8, -10],
    target: [-2, 0, -2],
  },

  "Master Bedroom": {
    title: "Master Bedroom",
    description:
      "A comfortable private bedroom designed with space for a large bed and storage.",
    camera: [9, 7, 10],
    target: [3, 0, 3],
  },

  "Bedroom 2": {
    title: "Bedroom 2",
    description:
      "A flexible bedroom suitable for children, guests, family members or a home office.",
    camera: [-9, 7, 10],
    target: [-2.5, 0, 3],
  },

  Kitchen: {
    title: "Kitchen",
    description:
      "A practical kitchen zone with countertop, storage and sink area.",
    camera: [10, 6, -9],
    target: [3.5, 0, -3],
  },

  Balcony: {
    title: "Balcony",
    description:
      "An open balcony area providing additional space for relaxation and outdoor views.",
    camera: [0, 7, -13],
    target: [0, 0, -6],
  },
};

/* ---------------------------------------------------------
   FLOOR
--------------------------------------------------------- */

function Floor({
  position,
  size,
  color = "#b89b78",
}: {
  position: [number, number, number];
  size: [number, number, number];
  color?: string;
}) {
  return (
    <mesh position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

/* ---------------------------------------------------------
   WALL
--------------------------------------------------------- */

function Wall({
  position,
  size,
  color = "#e8e3da",
}: {
  position: [number, number, number];
  size: [number, number, number];
  color?: string;
}) {
  return (
    <mesh position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

/* ---------------------------------------------------------
   WINDOW
--------------------------------------------------------- */

function Window({
  position,
  rotation = [0, 0, 0],
  width = 2.4,
  height = 1.6,
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
  width?: number;
  height?: number;
}) {
  return (
    <group position={position} rotation={rotation}>

      <mesh>
        <boxGeometry args={[width, height, 0.12]} />
        <meshStandardMaterial
          color="#202a32"
          metalness={0.4}
          roughness={0.25}
        />
      </mesh>

      <mesh position={[0, 0, 0.08]}>
        <boxGeometry
          args={[
            width - 0.18,
            height - 0.18,
            0.04,
          ]}
        />

        <meshStandardMaterial
          color="#6fa8c9"
          transparent
          opacity={0.65}
          metalness={0.1}
          roughness={0.1}
        />
      </mesh>

      <mesh position={[0, 0, 0.12]}>
        <boxGeometry
          args={[
            0.08,
            height - 0.15,
            0.08,
          ]}
        />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      <mesh position={[0, 0, 0.12]}>
        <boxGeometry
          args={[
            width - 0.15,
            0.08,
            0.08,
          ]}
        />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

    </group>
  );
}

/* ---------------------------------------------------------
   DOOR
--------------------------------------------------------- */

function Door({
  position,
  rotation = [0, 0, 0],
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
}) {
  return (
    <group position={position} rotation={rotation}>

      <mesh position={[0, 1.5, 0]}>
        <boxGeometry args={[1.8, 3, 0.15]} />
        <meshStandardMaterial color="#4a3525" />
      </mesh>

      <mesh position={[0, 1.5, 0.12]}>
        <boxGeometry args={[1.5, 2.75, 0.08]} />
        <meshStandardMaterial
          color="#7b5638"
          roughness={0.65}
        />
      </mesh>

      <mesh position={[0.55, 1.5, 0.2]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial
          color="#d6b56d"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

    </group>
  );
}

/* ---------------------------------------------------------
   SOFA
--------------------------------------------------------- */

function Sofa() {
  return (
    <group position={[-2, 0.65, -2.8]}>

      <mesh>
        <boxGeometry args={[3.6, 0.8, 1.4]} />
        <meshStandardMaterial color="#555555" />
      </mesh>

      <mesh position={[0, 0.65, 0.55]}>
        <boxGeometry args={[3.6, 1.3, 0.35]} />
        <meshStandardMaterial color="#555555" />
      </mesh>

      <mesh position={[-1.8, 0.45, 0]}>
        <boxGeometry args={[0.35, 1, 1.4]} />
        <meshStandardMaterial color="#444444" />
      </mesh>

      <mesh position={[1.8, 0.45, 0]}>
        <boxGeometry args={[0.35, 1, 1.4]} />
        <meshStandardMaterial color="#444444" />
      </mesh>

    </group>
  );
}

/* ---------------------------------------------------------
   BED
--------------------------------------------------------- */

function Bed({
  position,
}: {
  position: [number, number, number];
}) {
  return (
    <group position={position}>

      <mesh position={[0, 0.65, 0]}>
        <boxGeometry args={[3.2, 0.45, 5]} />
        <meshStandardMaterial color="#f1f1ed" />
      </mesh>

      <mesh position={[0, 0.35, 0]}>
        <boxGeometry args={[3.5, 0.5, 5.3]} />
        <meshStandardMaterial color="#7a5c43" />
      </mesh>

      <mesh position={[0, 1.8, -2.35]}>
        <boxGeometry args={[3.5, 2.4, 0.25]} />
        <meshStandardMaterial color="#654c38" />
      </mesh>

      <mesh position={[-0.8, 0.95, -1.5]}>
        <boxGeometry args={[1, 0.2, 1]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      <mesh position={[0.8, 0.95, -1.5]}>
        <boxGeometry args={[1, 0.2, 1]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

    </group>
  );
}

/* ---------------------------------------------------------
   DINING TABLE
--------------------------------------------------------- */

function DiningTable() {
  return (
    <group position={[2, 0.8, 0]}>

      <mesh>
        <boxGeometry args={[2.8, 0.25, 1.5]} />
        <meshStandardMaterial color="#76553b" />
      </mesh>

      {[
        [-1.1, -0.65],
        [1.1, -0.65],
        [-1.1, 0.65],
        [1.1, 0.65],
      ].map(([x, z], index) => (
        <mesh key={index} position={[x, -0.65, z]}>
          <boxGeometry args={[0.15, 1.3, 0.15]} />
          <meshStandardMaterial color="#4d3828" />
        </mesh>
      ))}

    </group>
  );
}

/* ---------------------------------------------------------
   KITCHEN
--------------------------------------------------------- */

function Kitchen() {
  return (
    <group position={[3.7, 0, -3.2]}>

      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[3.2, 1.8, 1]} />
        <meshStandardMaterial color="#d0d0cc" />
      </mesh>

      <mesh position={[0, 1.95, 0]}>
        <boxGeometry args={[3.3, 0.15, 1.1]} />
        <meshStandardMaterial color="#4d4d4d" />
      </mesh>

      <mesh position={[0, 2.8, 0]}>
        <boxGeometry args={[3.1, 1.2, 0.6]} />
        <meshStandardMaterial color="#9c8065" />
      </mesh>

      <mesh position={[0, 2.06, 0]}>
        <boxGeometry args={[0.8, 0.08, 0.6]} />
        <meshStandardMaterial color="#aaaaaa" />
      </mesh>

    </group>
  );
}

/* ---------------------------------------------------------
   TV
--------------------------------------------------------- */

function TVUnit() {
  return (
    <group position={[-1, 0, 4]}>

      <mesh position={[0, 2.3, 0]}>
        <boxGeometry args={[3.5, 2, 0.15]} />
        <meshStandardMaterial color="#111111" />
      </mesh>

      <mesh position={[0, 0.7, 0]}>
        <boxGeometry args={[4, 0.8, 0.7]} />
        <meshStandardMaterial color="#654c38" />
      </mesh>

    </group>
  );
}

/* ---------------------------------------------------------
   BALCONY
--------------------------------------------------------- */

function Balcony() {
  return (
    <group position={[0, 0, -6]}>

      <mesh position={[0, -0.05, 0]}>
        <boxGeometry args={[10, 0.2, 2.5]} />
        <meshStandardMaterial color="#c9c1b5" />
      </mesh>

      <mesh position={[-4.8, 1, 0]}>
        <boxGeometry args={[0.1, 2, 2.5]} />
        <meshStandardMaterial color="#777777" />
      </mesh>

      <mesh position={[4.8, 1, 0]}>
        <boxGeometry args={[0.1, 2, 2.5]} />
        <meshStandardMaterial color="#777777" />
      </mesh>

      <mesh position={[0, 1, -1.1]}>
        <boxGeometry args={[9.6, 2, 0.1]} />
        <meshStandardMaterial color="#777777" />
      </mesh>

    </group>
  );
}

/* ---------------------------------------------------------
   HOTSPOT
--------------------------------------------------------- */

function Hotspot({
  position,
  label,
  onClick,
}: {
  position: [number, number, number];
  label: string;
  onClick: () => void;
}) {
  return (
    <group position={position}>

      <mesh
        onClick={(event) => {
          event.stopPropagation();
          onClick();
        }}
      >
        <sphereGeometry args={[0.35, 24, 24]} />

        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={1}
        />
      </mesh>

      <Text
        position={[0, 0.65, 0]}
        fontSize={0.32}
        color="white"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor="#000000"
      >
        {label}
      </Text>

    </group>
  );
}

/* ---------------------------------------------------------
   APARTMENT
--------------------------------------------------------- */

function Apartment({
  onRoomSelect,
}: {
  onRoomSelect: (room: RoomName) => void;
}) {
  return (
    <group>

      {/* FLOORS */}

      <Floor
        position={[0, 0, 0]}
        size={[10, 0.2, 10]}
      />

      <Floor
        position={[-2.5, 0.02, -2]}
        size={[5, 0.12, 4]}
      />

      <Floor
        position={[3, 0.02, 2.8]}
        size={[4, 0.12, 4]}
      />

      <Floor
        position={[-2.5, 0.02, 3]}
        size={[5, 0.12, 3.5]}
      />

      {/* EXTERNAL WALLS */}

      <Wall
        position={[0, 2, 5]}
        size={[10, 4, 0.2]}
      />

      <Wall
        position={[-5, 2, 0]}
        size={[0.2, 4, 10]}
      />

      <Wall
        position={[5, 2, 0]}
        size={[0.2, 4, 10]}
      />

      {/* INTERNAL WALLS */}

      <Wall
        position={[0, 2, 0.8]}
        size={[0.2, 4, 4.4]}
      />

      <Wall
        position={[2.5, 2, 3]}
        size={[5, 4, 0.2]}
      />

      <Wall
        position={[2.5, 2, -3.2]}
        size={[5, 4, 0.2]}
      />

      {/* DOORS */}

      <Door
        position={[4.15, 0, 5.05]}
        rotation={[0, Math.PI, 0]}
      />

      <Door
        position={[0.15, 0, 3]}
        rotation={[0, Math.PI / 2, 0]}
      />

      <Door
        position={[-0.15, 0, 3]}
        rotation={[0, Math.PI / 2, 0]}
      />

      <Door
        position={[2.5, 0, -3.05]}
      />

      {/* WINDOWS */}

      <Window
        position={[-2.3, 2.3, 5.05]}
      />

      <Window
        position={[2.5, 2.3, 5.05]}
        width={2}
      />

      <Window
        position={[-5.05, 2.3, 2.5]}
        rotation={[0, Math.PI / 2, 0]}
      />

      <Window
        position={[5.05, 2.3, -2]}
        rotation={[0, Math.PI / 2, 0]}
        width={1.8}
      />

      {/* FURNITURE */}

      <Sofa />

      <DiningTable />

      <TVUnit />

      <Bed position={[-2.5, 0, 3]} />

      <Bed position={[3, 0, 2.8]} />

      <Kitchen />

      <Balcony />

      {/* HOTSPOTS */}

      <Hotspot
        position={[-2, 2.5, -2]}
        label="LIVING ROOM"
        onClick={() => onRoomSelect("Living Room")}
      />

      <Hotspot
        position={[3, 2.5, 2.8]}
        label="MASTER BEDROOM"
        onClick={() => onRoomSelect("Master Bedroom")}
      />

      <Hotspot
        position={[-2.5, 2.5, 3]}
        label="BEDROOM 2"
        onClick={() => onRoomSelect("Bedroom 2")}
      />

      <Hotspot
        position={[3.7, 2.5, -3.2]}
        label="KITCHEN"
        onClick={() => onRoomSelect("Kitchen")}
      />

      <Hotspot
        position={[0, 2.5, -6]}
        label="BALCONY"
        onClick={() => onRoomSelect("Balcony")}
      />

    </group>
  );
}

/* ---------------------------------------------------------
   CAMERA CONTROLLER
--------------------------------------------------------- */

function CameraController({
  room,
}: {
  room: RoomName;
}) {
  const { camera } = useThree();

  const targetPosition = new THREE.Vector3(
    roomInfo[room].camera[0],
    roomInfo[room].camera[1],
    roomInfo[room].camera[2]
  );

  const targetLookAt = new THREE.Vector3(
    roomInfo[room].target[0],
    roomInfo[room].target[1],
    roomInfo[room].target[2]
  );

  useFrame(() => {
    camera.position.lerp(
      targetPosition,
      0.035
    );

    const direction = new THREE.Vector3();

    camera.getWorldDirection(direction);

    const desiredDirection = targetLookAt
      .clone()
      .sub(camera.position)
      .normalize();

    direction.lerp(
      desiredDirection,
      0.035
    );

    camera.lookAt(
      camera.position.clone().add(direction)
    );
  });

  return null;
}

/* ---------------------------------------------------------
   NAVIGATION
--------------------------------------------------------- */

const navigationItems: RoomName[] = [
  "Overview",
  "Living Room",
  "Master Bedroom",
  "Bedroom 2",
  "Kitchen",
  "Balcony",
];

/* ---------------------------------------------------------
   DIGITAL TWIN
--------------------------------------------------------- */

export default function DigitalTwin() {
  const [selectedRoom, setSelectedRoom] =
    useState<RoomName>("Overview");

  const [fullscreen, setFullscreen] =
    useState(false);

  const viewerRef = useRef<HTMLDivElement>(null);

  const selectedInfo =
    roomInfo[selectedRoom];

  const enterFullscreen = async () => {
    if (!viewerRef.current) return;

    try {
      await viewerRef.current.requestFullscreen();
      setFullscreen(true);
    } catch {
      setFullscreen(false);
    }
  };

  const exitFullscreen = async () => {
    try {
      await document.exitFullscreen();
      setFullscreen(false);
    } catch {
      setFullscreen(false);
    }
  };

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  };

  const resetExperience = () => {
    setSelectedRoom("Overview");
  };

  return (
    <div
      ref={viewerRef}
      className={`relative w-full overflow-hidden bg-[#171717] ${
        fullscreen
          ? "h-screen rounded-none"
          : "h-[650px] rounded-2xl"
      }`}
    >

      {/* 3D CANVAS */}

      <Canvas
        camera={{
          position: [14, 12, 16],
          fov: 45,
        }}
      >

        <color
          attach="background"
          args={["#171717"]}
        />

        <ambientLight intensity={2} />

        <directionalLight
          position={[10, 15, 10]}
          intensity={3}
        />

        <pointLight
          position={[-5, 8, -5]}
          intensity={1.5}
        />

        <Apartment
          onRoomSelect={setSelectedRoom}
        />

        <CameraController
          room={selectedRoom}
        />

        <gridHelper
          args={[30, 30]}
          position={[0, -0.12, 0]}
        />

        <OrbitControls
          enableDamping
          dampingFactor={0.08}
          minDistance={8}
          maxDistance={28}
          maxPolarAngle={Math.PI / 2.05}
        />

      </Canvas>

      {/* TOP LEFT BRAND */}

      <div className="absolute left-5 top-5 rounded-full bg-black/70 px-4 py-2 text-xs font-semibold tracking-widest text-white backdrop-blur">
        PROPTWIN • 2BHK DIGITAL TWIN
      </div>

      {/* TOP RIGHT CONTROLS */}

      <div className="absolute right-5 top-5 flex gap-2">

        <button
          onClick={resetExperience}
          className="flex items-center gap-2 rounded-xl bg-black/70 px-4 py-3 text-xs font-medium text-white backdrop-blur transition hover:bg-white hover:text-black"
          title="Reset view"
        >
          <RotateCcw size={15} />
          <span className="hidden sm:inline">
            Overview
          </span>
        </button>

        <button
          onClick={toggleFullscreen}
          className="flex items-center gap-2 rounded-xl bg-black/70 px-4 py-3 text-xs font-medium text-white backdrop-blur transition hover:bg-white hover:text-black"
          title="Fullscreen"
        >
          {fullscreen ? (
            <Minimize size={15} />
          ) : (
            <Maximize size={15} />
          )}

          <span className="hidden sm:inline">
            {fullscreen ? "Exit" : "Fullscreen"}
          </span>
        </button>

      </div>

      {/* STATUS */}

      <div className="absolute left-1/2 top-[80px] flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/60 px-4 py-2 text-xs text-white/70 backdrop-blur">

        <span className="h-2 w-2 rounded-full bg-green-400" />

        Interactive Experience

      </div>

      {/* ROOM NAVIGATION */}

      <div className="absolute left-1/2 top-[120px] flex max-w-[90%] -translate-x-1/2 gap-2 overflow-x-auto rounded-2xl bg-black/75 p-2 backdrop-blur-md">

        {navigationItems.map((room) => {

          const active =
            selectedRoom === room;

          return (
            <button
              key={room}
              onClick={() =>
                setSelectedRoom(room)
              }
              className={`whitespace-nowrap rounded-xl px-4 py-2 text-xs font-medium transition ${
                active
                  ? "bg-white text-black"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {room}
            </button>
          );
        })}

      </div>

      {/* ROOM INFORMATION */}

      <div className="absolute bottom-5 left-5 max-w-sm rounded-2xl bg-black/75 p-5 text-white shadow-2xl backdrop-blur-md">

        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
          Selected Space
        </p>

        <h3 className="mt-2 text-2xl font-bold">
          {selectedInfo.title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-white/65">
          {selectedInfo.description}
        </p>

      </div>

      {/* INTERACTION HELP */}

      <div className="absolute bottom-5 right-5 hidden items-center gap-2 rounded-xl bg-black/60 px-4 py-3 text-xs text-white/60 backdrop-blur md:flex">

        <MousePointer2 size={14} />

        Drag to rotate • Scroll to zoom

      </div>

    </div>
  );
}