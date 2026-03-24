interface RunwayDisplayProps {
  months: number | null;
  monthlyCosts: number;
  cashBalance: number;
}

const statuses = {
  idle: { label: "Enter your numbers", color: "text-muted" },
  healthy: { label: "Looking good", color: "text-runway-healthy" },
  caution: { label: "Time to plan", color: "text-runway-caution" },
  danger: { label: "Act now", color: "text-runway-danger" },
} as const;

function getStatus(months: number | null) {
  if (months === null) return "idle";
  if (months >= 12) return "healthy";
  if (months >= 6) return "caution";
  return "danger";
}

export function RunwayDisplay({ months, monthlyCosts, cashBalance }: RunwayDisplayProps) {
  const status = getStatus(months);
  const { label, color } = statuses[status];
  const displayMonths = months !== null ? Math.floor(months) : null;

  return (
    <div className="mb-10">
      <div className="bg-card rounded-lg p-5 md:p-8 text-center">
        <p className="text-xs font-medium text-muted uppercase tracking-[0.15em] mb-4">
          Your Runway
        </p>

        {displayMonths !== null ? (
          <p className={`text-7xl font-bold ${color}`}>
            {displayMonths}<span className="text-5xl">m</span>
          </p>
        ) : (
          <div className="h-2 w-16 bg-muted/40 rounded mx-auto my-6" />
        )}

        <p className={`text-sm mt-2 ${color}`}>{label}</p>

        {displayMonths !== null && (
          <>
            <hr className="border-border my-6" />
            <div className="flex justify-between">
              <div className="text-left">
                <p className="text-xs font-medium text-muted uppercase tracking-[0.15em]">
                  Cash
                </p>
                <p className="text-lg font-bold text-foreground mt-1">
                  {cashBalance.toLocaleString()}
                </p>
              </div>
              <div className="text-left">
                <p className="text-xs font-medium text-muted uppercase tracking-[0.15em]">
                  Monthly Burn
                </p>
                <p className="text-lg font-bold text-foreground mt-1">
                  {monthlyCosts.toLocaleString()}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
