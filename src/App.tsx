import { useState, useCallback } from "react";
import { Header } from "./components/Header";
import { RunwayDisplay } from "./components/RunwayDisplay";
import { CashInput } from "./components/CashInput";
import { MonthlyCosts } from "./components/MonthlyCosts";
import { Footer } from "./components/Footer";

interface Cost {
  id: string;
  name: string;
  amount: number;
}

function App() {
  const [cashBalance, setCashBalance] = useState(0);
  const [costs, setCosts] = useState<Cost[]>([
    { id: crypto.randomUUID(), name: "", amount: 0 },
  ]);

  const addCost = () => {
    setCosts((prev) => [...prev, { id: crypto.randomUUID(), name: "", amount: 0 }]);
  };

  const removeCost = useCallback((id: string) => {
    setCosts((prev) => (prev.length > 1 ? prev.filter((c) => c.id !== id) : prev));
  }, []);

  const updateCostName = useCallback((id: string, name: string) => {
    setCosts((prev) => prev.map((c) => (c.id === id ? { ...c, name } : c)));
  }, []);

  const updateCostAmount = useCallback((id: string, amount: number) => {
    setCosts((prev) => prev.map((c) => (c.id === id ? { ...c, amount } : c)));
  }, []);

  const totalMonthlyCosts = costs.reduce((sum, c) => sum + c.amount, 0);
  const runwayMonths = totalMonthlyCosts > 0 ? cashBalance / totalMonthlyCosts : null;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-12 md:py-16">
        <Header />
        <RunwayDisplay
          months={runwayMonths}
          monthlyCosts={totalMonthlyCosts}
          cashBalance={cashBalance}
        />
        <CashInput value={cashBalance} onChange={setCashBalance} />
        <MonthlyCosts
          costs={costs}
          onAdd={addCost}
          onRemove={removeCost}
          onUpdateName={updateCostName}
          onUpdateAmount={updateCostAmount}
          total={totalMonthlyCosts}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
