---
draft: false
title: Clean Code Book Review
description: My reviews of the Clean Code book by Robert Martin
publishDate: "2023-01-20"
tags: [book]
---

Clean Code: a handbook of agile software craftsmanship by Robert Martin. Even bad code can function, but if the code is not clean, it can bring the development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code, but it doesn't have to be that way.

This repo [Clean Code JavaScript](https://github.com/ryanmcdermott/clean-code-javascript) is adapted from the Clean Code book for JS.

## Chapter 1: Clean Code

Three rules of thumb: easy to understand, easy to change, and easy to reason with.

The author also said the developers should not only write clean code but continuously improve the existing codebase, by refactoring, removing unnecessary code and following the best practices. This way, developers are leaving the codebase cleaner, more readable and maintainable, making it easier for others to understand and continue working on it.

> Thought:
>
> when you write the codebase, the codebase will be not only read by you, and also by others. Making the codebase readable so then others can understand what this line of code does. Once in a while, I do go back to my old codebase and read them myself to see if it is clear to me or not. If not, the codebase shall be refactored/rewritten to make it readable.

## Chapter 2: Meaningful Names

It is important to use meaningful and descriptive names for variables, functions, and classes to improve readability and understandability.

e.g.

- `const yyyymmdstr = moment().format("YYYY/MM/DD");` => what does this date mean anything? It can be good if write `const currentDate = moment().format("YYYY/MM/DD");` and let others know this is for today's date.

The author provided a general guideline for choosing meaningful and descriptive names:

- Use intention-revealing names
- Use pronounceable names
- Use searchable names
- Make the name as long as necessary
- Make the name as straightforward as possible

> Thought:
>
> Make variable names as clear as much as possible and keep in mind the side project list may grow longer if keep working on. When revisit one of them, I may not remember what purpose this function is for, however, crystal clear names will tell you as soon as read it. Avoid any mistunderstand or mental mapping.

## Chapter 3: Functions

Keep functions small and have a single purpose. It is interesting that the author mentioned the ideal number for arguments for a function is none. One or two arguments are ok, but more than three arguments should avoid if possible. Why? arguments are hard and take a lot of conceptual power.

> Flag arguments are ugly. Passing a boolean into a fuinction is a truly terrible practice.
>
> By Robert Martin

Functions should either do something or answer something, but not both. Also, remember don't repeat yourself.

At first, write everything in one place first and then reorganize them as you read through line by line. Refactoring and then re-refactoring! This is similar to how you would write a story.

> Thought:
>
> I resonated with keeping functions small and doing one thing only. This makes them easier to read and possible to debug. Also, I never thought passing arguments to functions was such a "bad idea". Keep in mind, one or two arguments are okay! I shall keep this in mind for the future.

## Chapter 4: Comments

The comments should add value to the code, not just repeat what the code does. Also, the comment can explain the reasons behind this particular design decision.

Keep in mind, as time goes by, the comments can quickly become outdated and may not always accurately reflect the current state of the code.

> Thought:
>
> Make sense, if the code is clear enough, and the comments should not be there. Unless, there is a need to explain about the particular design or decision behind this piece of code.

## Chapter 5: Formatting

Well-formatted code is easy to read and understand, making it less prone to bugs, and easier to maintain. Keep consistent with indentation and whitespace. As well as, clear and descriptive names for variables, functions, and classes.

> Thought:
>
> Each person may has her/his own style of writing for the codebase. It is important in a team enviornment. The codebase would have this function has 2 tabs space for indentation while other functions has 4 rabs of identation as an example. Utilize formatter like prettier or similar tools to do the work!

## Chapter 6: Objects and Data Structures

The author suggested using simple data structures like arrays or objects instead of complex ones like large objects. As usual, make sure objects/data structures are as simple as possible.

> Thought:
>
> This would depend on your use cases. Not all objects are created equal. Also, keep big O notation in mind. In some cases, you would want to stay away from the O(n^2) as much as possible. The author is against the global variables...this also depends on what are you doing with them, but be aware that other scripts have access to global variables.

## Chapter 7: Error Handling

A few keys takeaways:

- Errors should be handled at the lowest level possible
  - Localization of errors: this means that the error is easier to identify and fix.
  - Improved performance: faster caught
  - Increase clarity: the error message is clear
- Avoid empty try and catch block
- Return codes and error messages should be clear and consistent.

> Thought:
>
> Imagine fetching API without logging error, could you figure out what happened? Error messages are here to communicate with the users and let them know what did they wrong. One of daily and common situtations, suppsoe you made a typo in email in both inputs for `type your email` and `confirm your email`, and the forum didn't tell you the error. In the end, you cannot submit the forum.

## Chapter 8: Boundaries

A few key takeaways:

- Minimize dependencies: To reduce the risk of unintended consequences, it's crucial to keep the dependencies between your code and the external system to a minimum.
- Use adapters: Adapters that translate between your code and the external system can be helpful in reducing coupling
- Separate implementation details: Any code used for implementing the external system should be kept separate from the rest of the codebase
- Define clear contracts: The interface between the codebase and the external system should be clearly defined and precise

> Thought:
>
> This concept is similar to the Model-View-Controller pattern, where the connection to the server is separated from the codebase. Also, split code into controllers where this will control how the users will interact with the app based on routes. This makes the codebase easier to maintain.

## Chapter 9: Unit Tests

The main idea of unit tests:

- An essential part of the software development
- Help to validate the correctness of individual units of code
- Catch bugs early in the development cycle

Importance of writing tests:

- Keep them simple
- Run them frequently to catch bugs as early as possible

> Thought:
>
> There are pros and cons to unit tests. Could spend more time writing and maintaining tests, however, they can catch bugs as early as possible in the development cycle. In the future, the time to spend debugging can be reduced. There are also may be some false positives. Would need to use your own judgment to make the decision. Nothing is perfect.

## Chapter 10: Class

3 Keys points:

- Single Responsibility Principle (SRP): A class should have only one reason to change, making it easier to maintain and modify.
- Cohesion: Classes should have a strong, focused purpose, making it easier to understand their behavior.
- Loose Coupling: Classes should depend on each other as little as possible, making them more flexible and easier to modify.

> Thought:
>
> This chapter is similar to the Functions chapter. The author mentioned keep it small again. Small is good, but also be mindful with tons of one-liners functions. One-liners could look messy. As usual, make sure they are doing one thing only and use descriptive names!

## Chapter 11: Systems

A few key points:

- Design systems with maintainability and ease of use in mind
- Focus on creating modular, testable, scalable, and flexible systems
- Avoid complex systems that are difficult to understand
- Allow for easy modification and evolution of the system over time
- Provide clear and concise documentation for the system
- Make sure that the system is well-documented, with information that developers need to understand and maintain it

> Thought:
>
> I think this is similar to the house. Design the house to be easily liveable with a clear layout and functional rooms. Make sure rooms are modular and flexible, so they can be easily changed and adapted as your needs change. Avoid creating a complex and confusing layout. E.g. garage door leads to the bedroom, this would be a weird and confusing layout. Provide documentation for the house, such as a floor plan (for future renovations or additions) or instructions for operating appliances.

## Chapter 12: Emergence

Emergence refers to the property of a system to produce complex and seemingly intelligent behavior from simple and well-defined components.

A couple of simple rules:

Run all the tests: run often to detect bugs as early as possible
Refactoring and more refactoring: to keep code simple, flexible, and maintainable
Keep code small, clean, and no duplications: make sure code is clear and no duplications somewhere

> Thought:
>
> This chapter is almost a “summary” from what I read before, like write and run the tests, refactoring code to make it readable and understandable, and keep functions to doing one thing only. The most important thing to remember, other people will always read the code you wrote unless you put the code in private repos.

## Chapter 13: Concurrency

A few key points:

- Avoid global variables and shared state
- Use thread-safe data structures
- Write tests that validate concurrency behavior
- Avoid concurrency unless necessary

> Thought:
>
> I researched the term "concurrency" and found that it refers to events or circumstances that occur simultaneously. In JavaScript, we have event loops, callbacks, promises, and async/await to enable concurrent processing. It's important to keep functions and methods as small and clear as possible, as the author suggests.

## Chapter 14: Successive Refinement

The process of writing code iteratively and incrementally:

- Start with a rough solution: ugly code that solves the problem
- Refactor the code: look for opportunities to improve the code
- Add detail: to improve the functionality or performance
- Last refactoring: to make sure the code is clean as much as possible

> Though:
>
> In general, the code is messy at the beginning and then looking for opportunities to improve the code by improving naming, removing duplications, and simplifying the code. Improving the performance if needed. Lastly, make the code clean as possible for the next developers to work with or read. Worth remembering, the codebase will always be read by others as long as the codebase is in public!

## Chapter 16: Refactoring SerialDate

The refacotring process involves several steps:

- Renaming variables and methods
- Encapsulating data and behavior
- Eliminating duplication by extracting common functionality

> Thought:
>
> Similar to the successive refinement chapter, we start with ugly and messt code first and then looking for ways to improve the code by renaming variables and method, removing duplications (as in extracting them). Think like this, there are always 1st version of the product and them more versions come out after improved with feedback or eliminte or issues or more reasons.

## Chapter 17: Smells and Heuristics

A few points:

- Smells = signs of potential problems in code.
  - Long methods, large classes, data clumps
  - Unclear names for variables and methods
  - Not always bad - sometimes could be necessary trade-offs for other benefits
- Heuristic = guidelines for how to improve code quality
  - Single Responsibility Principle, Open-Close Principle, and the Law of Demeter
  - Important to continuously review and refactor code to improve the code quality
  - Utilize unit tests to ensure the code works after refactoring
  - Make sure the code is readable and maintainability

> Thought:
>
> Overall the book is emphasizing why continously review and refactor code is important. If there are duplicated methods, extracting them out and make them reusable. Unclear or confused varialbe/method names? Make them clear and descriptive. Utilize unit tests to make sure the code works as it should be doing after refactoring.

## Overall

The code is always messy and ugly at first, but always seeking opportunities to improve the code by removing duplication, renaming variables/methods naming and utilizing unit tests during refactoring. Always continuously review and refactor the code and make sure the code is readable and maintainable.

Remember that when writing code, it will not only be read by yourself, but also by others who will review it such as for pull requests or other purposes.
