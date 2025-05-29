interface PropertyPanelProps {
  activeObject: fabric.Object | null;
  canvas: fabric.Canvas | null;
}

export function PropertyPanel({ activeObject, canvas }: PropertyPanelProps) {
  return (
    <div className="w-64 bg-[#1A1D24] border-l border-gray-800 p-4">
      <h3 className="text-lg font-semibold text-white mb-4">Properties</h3>
      {activeObject ? (
        <div className="space-y-4">
          <div>
            <label className="text-gray-300 text-sm">Width</label>
            <input
              type="number"
              className="w-full bg-gray-800 text-white rounded px-2 py-1"
              value={Math.round(activeObject.width || 0)}
            />
          </div>
          <div>
            <label className="text-gray-300 text-sm">Height</label>
            <input
              type="number"
              className="w-full bg-gray-800 text-white rounded px-2 py-1"
              value={Math.round(activeObject.height || 0)}
            />
          </div>
        </div>
      ) : (
        <p className="text-gray-400">No object selected</p>
      )}
    </div>
  );
}