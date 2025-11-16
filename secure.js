document.addEventListener("DOMContentLoaded", function () {
    const safeCommentInput = document.getElementById("safeComment");
    const safeCommentButton = document.getElementById("btnSafeComment");
    const safeOutput = document.getElementById("safeOutput");

    safeCommentButton.addEventListener("click", function () {
        const p = document.createElement("p");
        p.textContent = safeCommentInput.value;
        safeOutput.innerHTML = "";
        safeOutput.appendChild(p);
    });

    const safeExpressionInput = document.getElementById("safeExpression");
    const safeEvalButton = document.getElementById("btnSafeEval");
    const safeEvalResult = document.getElementById("safeEvalResult");

    safeEvalButton.addEventListener("click", function () {
        const expr = safeExpressionInput.value.trim();
        const pattern = /^(\d+)\s*([+\-*/])\s*(\d+)$/;
        const match = expr.match(pattern);

        if (!match) {
            safeEvalResult.textContent = "Invalid format. Use: number operator number";
            return;
        }

        const left = parseFloat(match[1]);
        const op = match[2];
        const right = parseFloat(match[3]);

        let result;
        switch (op) {
            case "+": result = left + right; break;
            case "-": result = left - right; break;
            case "*": result = left * right; break;
            case "/":
                if (right === 0) {
                    safeEvalResult.textContent = "Cannot divide by zero.";
                    return;
                }
                result = left / right;
                break;
        }

        safeEvalResult.textContent = "Result: " + result;
    });
});
