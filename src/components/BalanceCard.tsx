import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const BalanceCard = () => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(false);
  const actualBalance = 45678.50;

  return (
    <Card className="glass-card border-2 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      <CardHeader className="relative">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          Account Balance
        </CardTitle>
      </CardHeader>
      <CardContent className="relative">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            {isBalanceVisible ? (
              <div className="text-4xl font-bold">
                ₹{actualBalance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
              </div>
            ) : (
              <div className="text-4xl font-bold tracking-wider">
                ₹ ***,***.**
              </div>
            )}
            <p className="text-xs text-muted-foreground">
              A/C: ****5678
            </p>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsBalanceVisible(!isBalanceVisible)}
            className="hover:bg-primary/10"
          >
            {isBalanceVisible ? (
              <EyeOff className="h-5 w-5 text-primary" />
            ) : (
              <Eye className="h-5 w-5 text-primary" />
            )}
          </Button>
        </div>
        
        {!isBalanceVisible && (
          <p className="text-xs text-muted-foreground mt-4">
            Click the eye icon to reveal balance
          </p>
        )}
      </CardContent>
    </Card>
  );
};
