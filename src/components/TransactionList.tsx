import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDownLeft, ArrowUpRight, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const transactions = [
  {
    id: 1,
    type: "credit",
    description: "Salary Credited",
    amount: 25000,
    date: "2025-10-02",
    category: "Income",
  },
  {
    id: 2,
    type: "debit",
    description: "Grocery Shopping",
    amount: 1250,
    date: "2025-10-01",
    category: "Shopping",
  },
  {
    id: 3,
    type: "debit",
    description: "Electricity Bill",
    amount: 850,
    date: "2025-09-30",
    category: "Bills",
  },
  {
    id: 4,
    type: "credit",
    description: "Refund",
    amount: 500,
    date: "2025-09-29",
    category: "Refund",
  },
];

export const TransactionList = () => {
  return (
    <Card className="glass-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Recent Transactions</CardTitle>
          <Button variant="ghost" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  transaction.type === "credit"
                    ? "bg-success/10"
                    : "bg-destructive/10"
                }`}
              >
                {transaction.type === "credit" ? (
                  <ArrowDownLeft className="h-5 w-5 text-success" />
                ) : (
                  <ArrowUpRight className="h-5 w-5 text-destructive" />
                )}
              </div>
              <div>
                <p className="font-semibold text-sm">{transaction.description}</p>
                <p className="text-xs text-muted-foreground">
                  {new Date(transaction.date).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p
                className={`font-bold ${
                  transaction.type === "credit" ? "text-success" : "text-destructive"
                }`}
              >
                {transaction.type === "credit" ? "+" : "-"}₹
                {transaction.amount.toLocaleString('en-IN')}
              </p>
              <Badge variant="secondary" className="text-xs">
                {transaction.category}
              </Badge>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
