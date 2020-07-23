**How to create calculator with JavaScript?**

**First**, define the UI or the features of the calculator, whichever comes first:

  Simple calculation such as addition (a+b=c), substraction (a-b=c), division (a/b = c), multiplication (a*b=c or axb=c), percentage (a% = a/100), digits.

**Second**, breakdown the question to:

  `How calculation works?`
    
    Based on features defined earlier, the calculator support simple equation. Notice, there is a pattern for addition, substraction, division, and multiplication calculation.
    It require 3 variables to calculate: a or `number` * or `calculationOperator` b or `number`. While percentage and digits only need the `number` and the `calculationOperator`

  `How calculator works?`

    Imagine you're holding a calculator. You pressed a number, and then you pressed an operator, and then you pressed another number. Last, you pressed the equal sign.
    Notice, everytime you press a button, the number on the calculator screen changes.
   
   `How to input the data in calculator?`
   
    Remember, a simple calculation require 3 variables. Imagine there is a simple pipe, one entrance and one exit. By pressing a button on the calculator, in this case the `button number 5`, you send a value of 5 to the entrance. In the middle of the pipe, there is a business logic to determine what to do with the input, in this case it decide to output the data into one of the 3 variables.

    Now we know that we need a business logic to determine what to do with the input:
    1. The number on the calculator screen changes everytime you pressed a button. Therefore, we need to differentiate the variables to `currentNumber` and `prevNumber`. The `currentNumber` variable is used to display the number on the calculator screen.
    2. The `currentNumber` value changes everytime you pressed a `number` button.
    3. The `prevNumber` inherit the `currentNumber` value after you pressed a `operator` button and the `currentNumber` value is set to 0.
    
**You can read the pdf from the README folder if you are a visual learner.**