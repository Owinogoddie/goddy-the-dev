"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as pdfjsLib from "pdfjs-dist";
import "pdfjs-dist/web/pdf_viewer.css";

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

interface ResumeViewerProps {
  pdfUrl: string;
}

const ResumeViewer: React.FC<ResumeViewerProps> = ({ pdfUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadComplete, setDownloadComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    try {
      const response = await fetch(pdfUrl);
      const contentLength = response.headers.get("content-length");
      const total = parseInt(contentLength || "0", 10);
      let loaded = 0;

      const reader = response.body?.getReader();
      if (!reader) throw new Error("Failed to start download");

      const chunks: Uint8Array[] = [];
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
        loaded += value.length;
        setDownloadProgress(Math.round((loaded / total) * 100));
      }

      const blob = new Blob(chunks, { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "resume.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setDownloadComplete(true);
      setTimeout(() => setDownloadComplete(false), 3000);
    } catch (error) {
      console.error("Download failed:", error);
    } finally {
      setDownloadProgress(0);
    }
  };

  useEffect(() => {
    if (!isOpen || !containerRef.current) return;

    const loadPdf = async () => {
      setIsLoading(true);

      const loadingTask = pdfjsLib.getDocument(pdfUrl);
      const pdf = await loadingTask.promise;
      const container = containerRef.current!;
      container.innerHTML = "";

      for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
        const page = await pdf.getPage(pageNum);
        const viewport = page.getViewport({ scale: 1.5 });
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d")!;
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        container.appendChild(canvas);

        const renderTask = page.render({
          canvasContext: context,
          viewport: viewport,
        });

        await renderTask.promise;
      }

      setIsLoading(false);
    };

    loadPdf();
  }, [isOpen, pdfUrl]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        View Resume
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-lg w-full max-w-4xl h-[90vh] flex flex-col relative"
              style={{ maxHeight: "90vh" }}
            >
              <div className="absolute top-0 left-0 right-0 bg-slate-200 p-6 rounded-t-lg z-10 shadow-md">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-black-100">My Resume</h2>
                  <div className="flex space-x-2">
                    <button
                      onClick={handleDownload}
                      className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                      disabled={downloadProgress > 0}
                    >
                      {downloadProgress > 0 ? `${downloadProgress}%` : "Download"}
                    </button>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-20 flex-grow overflow-y-auto">
                {isLoading && (
                  <div className="h-full flex items-center justify-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
                  </div>
                )}
                <div ref={containerRef} className={`w-full ${isLoading ? "hidden" : ""}`} />
              </div>
              {downloadComplete && (
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50"
                >
                  Download Complete!
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ResumeViewer;
