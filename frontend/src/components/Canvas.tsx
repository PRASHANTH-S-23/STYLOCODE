"use client";

import { useEffect, useRef, useState } from "react";
import { fabric } from "fabric";
import { useStorage, useMutation } from "@/liveblocks.config";
import { ToolBar } from "./ToolBar";
import { PropertyPanel } from "./PropertyPanel";

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricRef = useRef<fabric.Canvas | null>(null);
  const [activeObject, setActiveObject] = useState<fabric.Object | null>(null);

  const canvasObjects = useStorage((root) => root.canvasObjects);

  const syncObject = useMutation(({ storage }, object) => {
    if (!object?.objectId) return;
    const shapeData = object.toJSON();
    shapeData.objectId = object.objectId;
    storage.get("canvasObjects").set(object.objectId, shapeData);
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = new fabric.Canvas(canvasRef.current, {
      width: window.innerWidth,
      height: window.innerHeight - 100,
      backgroundColor: "#1E1E1E"
    });

    fabricRef.current = canvas;

    canvas.on("object:modified", (e) => {
      if (!e.target) return;
      syncObject(e.target);
    });

    return () => {
      canvas.dispose();
    };
  }, []);

  return (
    <div className="flex h-[calc(100vh-76px)]">
      <ToolBar canvas={fabricRef.current} />
      <div className="flex-1 relative">
        <canvas ref={canvasRef} className="absolute inset-0" />
      </div>
      <PropertyPanel activeObject={activeObject} canvas={fabricRef.current} />
    </div>
  );
}