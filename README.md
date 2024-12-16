# Firebase onAuthStateChanged Unsubscribe Issue

This repository demonstrates a common issue with Firebase's `onAuthStateChanged` listener in React applications. The listener is not always properly unsubscribed when the component unmounts, potentially leading to memory leaks and unexpected behavior.

## Problem

The provided code shows a typical implementation of `onAuthStateChanged`.  However, under certain circumstances (like rapid component mounts/unmounts or navigation), the `unsubscribe` function might not be called, keeping the listener active even after the component is removed.

## Solution

The solution involves ensuring the `unsubscribe` function is always called when the component unmounts using the cleanup function in the `useEffect` hook. This is shown in the `bugSolution.js` file.

## How to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the application: `npm start`
4. Observe the console logs.  Note that the original problematic behavior will likely not consistently reproduce in this simplified example. The point is to demonstrate the proper way to handle unsubscribing from the listener.

## Additional Notes

This issue is not specific to React but can occur in any framework or environment where `onAuthStateChanged` is used without proper cleanup.