interface CashInputProps {
  value: number;
  onChange: (value: number) => void;
}

export function CashInput({ value, onChange }: CashInputProps) {
  return (
    <div className="bg-card rounded-lg p-5 md:p-8 mb-6">
      <h2 className="text-lg font-bold text-foreground">Cash in the Bank</h2>
      <p className="text-sm text-muted mb-4">Your current total available cash</p>
      <input
        type="number"
        placeholder="0"
        value={value || ""}
        onChange={(e) => onChange(Number(e.target.value) || 0)}
        className="w-full rounded-md border border-border bg-white px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-foreground/20"
      />
    </div>
  );
}
