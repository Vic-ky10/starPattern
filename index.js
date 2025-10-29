  
// JAVASCRIPT INTERVIEW QUESTIONS

  const javascriptInterviewQuestions = {
    question1: {
      title: "Is javascript a dynamically typed language or a statically typed language?",
      answer: `Javascript is a dynamically typed language.
  It means all type checks are done at run time when program is executing.
  So, we can just assign anything to the variable and it works fine.

  Typescript is a statically typed language. All checks are performed at compile time.`,
      example: `let a;
        a = 0;
        console.log(a); // 0
        a = "Hello";
        console.log(a); // "Hello"`
    },
    
    question2: {
      title: "What are the different datatypes in javascript?",
      answer: {
        primitiveDataTypes: [
          "String",
          "Number",
          "Boolean",
          "Null",
          "Undefined",
          "BigInt"
        ],
        nonPrimitiveDataTypes: [
          "Object",
          "Array",
          "Date",
          "functions"
        ]
      }
    },
    
    question3: {
      title: "What is Hoisting in javascript?",
      answer: `In other scripting/server side languages, variables or functions must be declared before using it.

  In javascript, variables and functions can be used before declaring it. 
  The javascript compiler moves all the declarations of variables and functions on top,
   so there will not be any error. This is called hoisting.`
    },
    
    question4: {
      title: "What are the various things hoisted in javascript?",
      answer: [

        
        "Function declarations: Fully hoisted.",
        "var: Hoisted",
        "Arrow functions: Not hoisted",
        "Anonymous Function expressions: Not hoisted",
        "let: Hoisted but not initialized. (Temporal dead zone).",
        "const: Hoisted but not initialized. (Temporal dead zone)",
        "class declarations: Hoisted but not initialized."
      ]
    },
    
    question5: {
      title: "What is temporal dead zone?",
      answer: `It is a specific time period in the execution of javascript
      code where the variables declared with let and const exists but cannot 
      be accessed until the value is assigned.
  Any attempt to access them result in reference errors.`
    }
  };