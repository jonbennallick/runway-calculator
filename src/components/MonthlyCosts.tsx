interface Cost {
  id: string;
  name: string;
  amount: number;
}

interface MonthlyCostsProps {
  costs: Cost[];
  onAdd: () => void;
  onRemove: (id: string) => void;
  onUpdateName: (id: string, name: string) => void;
  onUpdateAmount: (id: string, amount: number) => void;
  total: number;
}

export function MonthlyCosts({
  costs,
  onAdd,
  onRemove,
  onUpdateName,
  onUpdateAmount,
  total,
}: MonthlyCostsProps) {
  return (
    <div className="bg-card rounded-lg p-8 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-bold text-foreground">Monthly Costs</h2>
          <p className="text-sm text-muted">All your recurring monthly expenses</p>
        </div>
        <button
          onClick={onAdd}
          className="flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
          Add
        </button>
      </div>

      <div className="space-y-3">
        {costs.map((cost) => (
          <div key={cost.id} className="flex gap-3 items-center">
            <input
              type="text"
              placeholder="e.g. Rent, Salaries, AI Tokens..."
              value={cost.name}
              onChange={(e) => onUpdateName(cost.id, e.target.value)}
              className="flex-1 rounded-md border border-border bg-white px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-foreground/20"
            />
            <input
              type="number"
              placeholder="0"
              value={cost.amount || ""}
              onChange={(e) => onUpdateAmount(cost.id, Number(e.target.value) || 0)}
              className="w-28 rounded-md border border-border bg-white px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-foreground/20"
            />
            {costs.length > 1 && (
              <button
                onClick={() => onRemove(cost.id)}
                className="text-muted hover:text-foreground transition-colors p-1"
                aria-label="Remove cost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            )}
          </div>
        ))}
      </div>

      {total > 0 && (
        <div className="flex justify-between items-center mt-6 pt-4 border-t border-border">
          <p className="text-sm font-medium text-muted">Total Monthly</p>
          <p className="text-lg font-bold text-foreground">{total.toLocaleString()}</p>
        </div>
      )}
    </div>
  );
}
