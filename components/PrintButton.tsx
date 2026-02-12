"use client";

export function PrintButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button className="print-button" onClick={handlePrint} type="button">
      Save as PDF
    </button>
  );
}
