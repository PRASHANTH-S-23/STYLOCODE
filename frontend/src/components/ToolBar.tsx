import { useState } from "react";
import { Square, Circle, Triangle, Type, Image as ImageIcon } from "lucide-react";

interface ToolBarProps {
  canvas: fabric.Canvas | null;
}

export function ToolBar({ canvas }: ToolBarProps) {
  const [activeTool, setActiveTool] = useState<string | null>(null);

  const tools = [
    { name: "Rectangle", icon: Square },
    { name: "Circle", icon: Circle },
    { name: "Triangle", icon: Triangle },
    { name: "Text", icon: Type },
    { name: "Image", icon: ImageIcon }
  ];

  return (
    <div className="w-16 bg-[#1A1D24] border-r border-gray-800">
      {tools.map((tool) => (
        <button
          key={tool.name}
          className={`w-full p-4 hover:bg-gray-800 ${
            activeTool === tool.name ? "bg-gray-800" : ""
          }`}
          onClick={() => setActiveTool(tool.name)}
        >
          <tool.icon className="w-6 h-6 text-gray-300" />
        </button>
      ))}
    </div>
  );
}