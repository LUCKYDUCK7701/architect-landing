
import { useState } from 'react';

export const useVeniceEvaluator = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const evaluatePrompt = async (prompt: string) => {
    setLoading(true);
    try {
      // TODO: replace with Venice API logic
      const mockResponse = "✅ Prompt evaluated successfully! (mock data)";
      setResult(mockResponse);
    } catch (err) {
      setResult("Error during evaluation.");
    } finally {
      setLoading(false);
    }
  };

  return { evaluatePrompt, loading, result };
};
