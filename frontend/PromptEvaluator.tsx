
import React, { useState } from 'react';
import './styles/PromptEvaluator.css';

const PromptEvaluator: React.FC = () => {
  const [promptInput, setPromptInput] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleEvaluate = async () => {
    setLoading(true);
    // Placeholder: Replace with Venice API call
    setTimeout(() => {
      setResult("🔍 Evaluation complete! (Mock output shown here)");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="evaluator-container">
      <h2>🧠 A.R.C.H.I.T.E.C.T. Prompt Evaluator</h2>
      <textarea
        placeholder="Paste your full A.R.C.H.I.T.E.C.T. prompt here..."
        value={promptInput}
        onChange={(e) => setPromptInput(e.target.value)}
        rows={12}
        className="evaluator-textarea"
      />
      <button onClick={handleEvaluate} disabled={loading || !promptInput}>
        {loading ? "Evaluating..." : "Evaluate Prompt"}
      </button>

      {result && (
        <div className="evaluation-result">
          <h3>📊 Evaluation Result</h3>
          <pre>{result}</pre>
        </div>
      )}
    </div>
  );
};

export default PromptEvaluator;
