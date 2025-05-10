import React, { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

const App = () => {
  const [stepId, setStepId] = useState(0);
  const [history, setHistory] = useState([0]);

  const script = [
    { id: 0, phrase: "Привіт! Це тестовий дзвінок.", responses: [
      { text: "Так", nextId: 1 },
      { text: "Ні", nextId: 2 },
    ]},
    { id: 1, phrase: "Дякую за відповідь!", responses: [] },
    { id: 2, phrase: "Добре, тоді гарного дня!", responses: [] }
  ];

  const currentStep = script.find((s) => s.id === stepId);

  const handleResponse = (nextId) => {
    setHistory((prev) => [...prev, nextId]);
    setStepId(nextId);
  };

  const goBack = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();
      const prevId = newHistory[newHistory.length - 1];
      setHistory(newHistory);
      setStepId(prevId);
    }
  };

  return (
    <div className="p-6 flex flex-col items-center gap-4">
      <Card className="w-full max-w-md text-center">
        <CardContent>
          <h2 className="text-xl font-semibold mb-4">{currentStep.phrase}</h2>
          <div className="flex flex-col gap-2">
            {currentStep.responses.map((res, idx) => (
              <Button key={idx} onClick={() => handleResponse(res.nextId)}>
                {res.text}
              </Button>
            ))}
            {history.length > 1 && (
              <Button variant="outline" onClick={goBack}>
                Назад
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
