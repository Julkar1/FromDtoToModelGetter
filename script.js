function convertToModelInterface() {
    const javaDTO = document.getElementById("javaDTO").value;
    if (!javaDTO.trim()) {
        document.getElementById("javaModel").value = "Please enter Java DTO fields.";
        return;
    }

    const lines = javaDTO.split("\n");
    let modelInterface = "public interface ModelName {\n";
    const customTypes = new Set();

    lines.forEach(line => {
        line = line.trim();

        // Process fields
        if (line.startsWith("private")) {
            const parts = line.replace("private", "")
                            .replace(";", "")
                            .trim()
                            .split(/\s+/);
            if (parts.length < 2) return;

            let javaType = parts[0];
            let fieldName = parts[1];

            // Convert Boolean to Integer for all boolean fields
            if (javaType === "Boolean" || javaType === "boolean") {
                javaType = "Integer";
            }

            // Capitalize field name for getter
            const getterName = "get" + fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
            
            modelInterface += `    ${javaType} ${getterName}();\n`;
            
            // Track custom types
            if (!["String", "Integer", "int", "Double", "double", "Long", "Boolean", "boolean", "Date"].includes(javaType)) {
                if (javaType.startsWith("List<")) {
                    const innerType = javaType.match(/List<(.+)>/)?.[1] || "Object";
                    customTypes.add(innerType);
                } else {
                    customTypes.add(javaType);
                }
            }
        }
    });

    modelInterface += "}";

    // Add imports if needed
    if (customTypes.size > 0) {
        const imports = Array.from(customTypes)
                           .map(type => `import ${type.includes("<") ? type.substring(0, type.indexOf("<")) : type};`)
                           .join("\n");
        modelInterface = `${imports}\n\n${modelInterface}`;
    }

    document.getElementById("javaModel").value = modelInterface;
    copyToClipboard(modelInterface);
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        const tooltip = document.getElementById("tooltipText");
        tooltip.style.visibility = "visible";
        tooltip.style.opacity = 1;
        setTimeout(() => {
            tooltip.style.visibility = "hidden";
            tooltip.style.opacity = 0;
        }, 2000);
    });
}