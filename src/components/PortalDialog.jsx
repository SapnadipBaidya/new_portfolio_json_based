import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";

const DEFAULT_SIZE = { width: 500, height: 600 };
const DEFAULT_POS = { top: 100, left: 100 };

const PortalDialog = ({ open, onClose, url }) => {
  const dialogRef = useRef(null);
  const [size, setSize] = useState(DEFAULT_SIZE);
  const [pos, setPos] = useState(DEFAULT_POS);
  const [dragging, setDragging] = useState(false);
  const [resizing, setResizing] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  // Drag logic
  const handleDragStart = (e) => {
    setDragging(true);
    setOffset({
      x: e.clientX - pos.left,
      y: e.clientY - pos.top,
    });
  };
  const handleDrag = (e) => {
    if (!dragging) return;
    setPos({
      top: e.clientY - offset.y,
      left: e.clientX - offset.x,
    });
  };
  const handleDragEnd = () => setDragging(false);

  // Resize logic
  const handleResizeStart = (e) => {
    setResizing(true);
    setOffset({
      x: e.clientX,
      y: e.clientY,
    });
    e.stopPropagation();
  };
  const handleResize = (e) => {
    if (!resizing) return;
    setSize((prev) => ({
      width: Math.max(320, prev.width + (e.clientX - offset.x)),
      height: Math.max(200, prev.height + (e.clientY - offset.y)),
    }));
    setOffset({ x: e.clientX, y: e.clientY });
  };
  const handleResizeEnd = () => setResizing(false);

  // Global event listeners for drag/resize
  useEffect(() => {
    if (!dragging && !resizing) return;
    const moveHandler = dragging ? handleDrag : handleResize;
    const upHandler = dragging ? handleDragEnd : handleResizeEnd;
    window.addEventListener("mousemove", moveHandler);
    window.addEventListener("mouseup", upHandler);
    return () => {
      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("mouseup", upHandler);
    };
  });

  if (!open) return null;

  return ReactDOM.createPortal(
    <div className="portal-overlay" onMouseDown={onClose}>
      <div
        className="portal-dialog"
        ref={dialogRef}
        style={{
          top: pos.top,
          left: pos.left,
          width: size.width,
          height: size.height,
        }}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div
          className="portal-dialog-header"
          onMouseDown={handleDragStart}
          style={{ cursor: "grab", userSelect: "none" }}
        >
          <span>Contact Form</span>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>
        <iframe
          src={url}
          title="Contact"
          style={{
            border: "none",
            width: "100%",
            height: "calc(100% - 40px)",
            background: "#fff",
            borderRadius: "0 0 12px 12px",
          }}
        />
        <div
          className="portal-resizer"
          onMouseDown={handleResizeStart}
          style={{ cursor: "nwse-resize" }}
        />
      </div>
      <style jsx global>{`
        .portal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.18);
          z-index: 9999;
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
        }
        .portal-dialog {
          position: absolute;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 24px rgba(20,40,120,0.18);
          min-width: 320px;
          min-height: 200px;
          overflow: hidden;
          border: 1px solid #c1c8ee33;
          animation: portalPop 0.18s cubic-bezier(.4,2,.5,1) backwards;
        }
        @keyframes portalPop {
          from { transform: scale(0.92) translateY(40px); opacity: 0.2; }
          to { transform: scale(1) translateY(0); opacity: 1; }
        }
        .portal-dialog-header {
          height: 40px;
          background: linear-gradient(90deg,#8a64e7,#49d0c8);
          color: #fff;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1rem;
        }
        .close-btn {
          background: none;
          border: none;
          color: #fff;
          font-size: 1.3rem;
          cursor: pointer;
          font-weight: bold;
          margin-left: 8px;
        }
        .portal-resizer {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 22px;
          height: 22px;
          background: none;
          z-index: 4;
        }
        .portal-resizer:after {
          content: '';
          display: block;
          width: 18px;
          height: 18px;
          border-right: 2px solid #a0a0c0;
          border-bottom: 2px solid #a0a0c0;
          position: absolute;
          right: 4px;
          bottom: 4px;
        }
      `}</style>
    </div>,
    document.body
  );
};

export default PortalDialog;
