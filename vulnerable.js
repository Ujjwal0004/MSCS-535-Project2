document.addEventListener("DOMContentLoaded", function () {
    const vulnCommentInput = document.getElementById("vulnComment");
    const vulnCommentButton = document.getElementById("btnVulnComment");
    const vulnOutput = document.getElementById("vulnOutput");

    vulnCommentButton.addEventListener("click", function () {
        vulnOutput.innerHTML = "<p>" + vulnCommentInput.value + "</p>";
    });

    const vulnExpressionInput = document.getElementById("vulnExpression");
    const vulnEvalButton = document.getElementById("btnVulnEval");
    const vulnEvalResult = document.getElementById("vulnEvalResult");

    vulnEvalButton.addEventListener("click", function () {
        try {
            const result = eval(vulnExpressionInput.value);
            vulnEvalResult.textContent = "Result: " + result;
        } catch (err) {
            vulnEvalResult.textContent = "Error: " + err.message;
        }
    });
});
