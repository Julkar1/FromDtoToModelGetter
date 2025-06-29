# DTO to  Interface Model Converter

![image](https://github.com/user-attachments/assets/b8628e6e-4a81-4b73-9ce1-993001b25baa)


A web-based tool that converts Java DTO fields into a Java  Interface Model with getter methods, automatically converting Boolean fields to Integer getters.

🔗 **Live Demo**: [https://dto-to-interface-model.vercel.app/](https://dto-to-interface-model.vercel.app/)

## Features

- Converts Java DTO field declarations to interface getter methods
- Automatically transforms Boolean/boolean fields to Integer getters
- Generates proper Java syntax with correct capitalization
- Handles custom types and collections (like List<T>)
- Automatically adds required imports
- Copies results to the clipboard with one click
- Clean, responsive UI

## How to Use

1. Paste your Java DTO fields in the input box (e.g., `private Integer id; private Boolean isActive;`)
2. Click "Convert to  Interface" Model button
3. The generated Java interface will appear in the output box
4. The result is automatically copied to your clipboard
5. Paste the interface into your Java project

## Technology Stack:
HTML5, CSS3, JavaScript (Vanilla JS)

Vercel for hosting

GitHub for version control

## Deployment
The application is automatically deployed to Vercel when changes are pushed to the main branch.

Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements.

License
This project is open source and available.

## Example

**Input (DTO fields):**
```java
private Integer id;
private String name;
private Boolean isActive;
private Date createdDate;
private List<Department> departments;


**Output (Model Interface):**

import Department;
import Date;

public interface ModelName {
    Integer getId();
    String getName();
    Integer getIsActive();
    Date getCreatedDate();
    List<Department> getDepartments();
}
