import React from 'react';
import { CheckCircle2, Bookmark, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ message, type = 'success', onClose }) {
  if (!message) return null;

  const iconMap = {
    success: <CheckCircle2 className="w-4 h-4 text-emerald-600" />,
    saved: <Bookmark className="w-4 h-4 text-sunset fill-sunset" />,
    warning: <AlertCircle className="w-4 h-4 text-amber-600" />,
    info: <Info className="w-4 h-4 text-sky-600" />
  };

  const bgMap = {
    success: 'bg-emerald-50 border-emerald-200 text-emerald-900',
    saved: 'bg-sunset/10 border-sunset/30 text-sunset',
    warning: 'bg-amber-50 border-amber-200 text-amber-900',
    info: 'bg-sky-50 border-sky-200 text-sky-900'
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 duration-300">
      <div className={`flex items-center gap-3 px-4 py-3 rounded-2xl border shadow-floating backdrop-blur-md ${bgMap[type] || bgMap.success}`}>
        {iconMap[type] || iconMap.success}
        <span className="text-xs font-medium">{message}</span>
        {onClose && (
          <button onClick={onClose} className="p-1 rounded-full hover:bg-black/5 transition-colors">
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}
